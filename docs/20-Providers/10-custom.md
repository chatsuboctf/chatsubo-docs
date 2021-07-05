# Plugins

Il est possible de rendre compatible la plateforme à un nouvel hyperviseur en créant des plugins dédiés. 

Ces plugin se construisent de la manière suivante :

### provider.py
Ce fichier va répondre aux besoins suivants :

+ Lister les templates disponibles
+ Lister les instances en cours d'exécution
+ Effectuer un rollback vers l'état initial du challenge
+ Démarrer une nouvelle une instance (providers *dynamiques* uniquement)

<details><summary>Afficher le code du fichier "provider.py" du plugin PVE</summary>
<p>

```python
import re
import traceback

import requests
from proxmoxer import ProxmoxAPI
from urllib3.exceptions import MaxRetryError

from app.providers.base.provider import BaseProvider
from app.providers.base.template import BaseTemplate
from app.providers.exc import VpnProviderNotFoundException, \
    VpnProviderErrorException, BackendConnectionException, MetadataNotFoundException, MalformedMetadataException
from app.providers.pve.instance import PVEInstance


class PVEProvider(BaseProvider):
    kind = "pve"
    is_dynamic = False

    def __init__(self, name, host, user, token_name, token_value, realms, vpns, nodes=None, verify_ssl=False, sep="--"):
        if nodes is None:
            nodes = ["pve"]

        self.name = name
        self.nodes = nodes
        self.sep = sep
        self.client = ProxmoxAPI(host,
                                 user=user,
                                 token_name=token_name,
                                 token_value=token_value,
                                 verify_ssl=verify_ssl
                                 )
        remote_nodes = [node_data["node"] for node_data in self.client.nodes.get()]
        for node in self.nodes:
            if node not in remote_nodes:
                raise BackendConnectionException(f"{self.kind}/{self.name}", f"Node '{node}' not found")

        super().__init__(vpn_providers=vpns, kind=self.kind, realms=realms)

    def list_templates(self):
        templates = []
        vms = self.list_all()

        try:
            filtered = list(filter(lambda vm: "chatsubo." in vm["description"], vms))
            rg = re.compile("(chatsubo\..*)=(.*)", re.MULTILINE)

            for config in filtered:
                labels = {}
                matches = rg.findall(config["description"])
                for match in matches:
                    labels[match[0]] = match[1]

                if not (name := labels.get("chatsubo.template")):
                    continue

                templates.append(BaseTemplate(name, self.to_json(), labels=labels).to_json())
        except Exception:
            raise

        return templates

    def list_all(self):
        vms = []
        for node in self.nodes:
            try:
                instances = self.client.nodes(node).qemu.get()
            except (MaxRetryError, requests.exceptions.ConnectionError, ConnectionRefusedError) as e:
                raise BackendConnectionException(f"{self.kind}/{self.name}", str(e))

            for inst in instances:
                inst["description"] = self.client.nodes(node).qemu(inst["vmid"]).config.get().get("description", "")
                inst["node"] = node

            vms += instances

        return vms

    def list_instances(self, realm=None):
        instances = []
        vms = self.list_all()
        raw = list(filter(lambda vm: "chatsubo." in vm["description"] and vm["template"] == "", vms))

        for vm in raw:
            try:
                instances.append(PVEInstance(vm["vmid"], vm["name"], vm["description"], vm["node"]))
            except (MetadataNotFoundException, MalformedMetadataException):
                pass

        if realm:
            instances = list(filter(lambda i: i.realm == realm, instances))

        return instances

    def reset(self, realm, template, session=None):
        target = None
        instances = self.list_instances(realm=realm)
        for inst in instances:
            if inst.template == template:
                target = inst

        snapshots = self.client.nodes(target.node).qemu.get(f"{target.id}/snapshot")
        last_snap_name = list(filter(lambda x: x.get("running") == 1, snapshots))[0].get("parent")

        if not last_snap_name:
            return False

        self.client.nodes(target.node).qemu.post(f"{target.id}/snapshot/{last_snap_name}/rollback")
        return True

    @classmethod
    def from_config(cls, name, raw_conf, vpns):
        parsed = {
            "name": name,
            "host": f"{raw_conf['api']['host']}:{raw_conf['api']['port']}",
            "user": raw_conf["api"]["user"],
            "token_name": raw_conf["api"]["token"]["name"],
            "token_value": raw_conf["api"]["token"]["value"],
            "realms": raw_conf["realms"],
            "vpns": vpns
        }

        if nodes := raw_conf.get("nodes"):
            parsed["nodes"] = nodes

        if verif := raw_conf.get("verify_ssl"):
            parsed["verify_ssl"] = verif

        if sep := raw_conf.get("sep"):
            parsed["sep"] = sep

        return cls(**parsed)
  ```

</p>
</details>

### instance.py
Ce fichier, quant à lui, interprétera les données reçues de l'hyperviseur afin d'en extraire :

+ Le nom de la machine
+ Le `realm` auquel la machine appartient
+ Le template d'origine
+ L'adresse IP
+ Les métadonnées optionnelles

<details><summary>Afficher le code du fichier "instance.py" du plugin PVE</summary>
<p>

```python
import re

from app.providers.exc import MetadataNotFoundException, MalformedMetadataException
from app.providers.base.instance import BaseInstance
from app.providers.labels import parse_flags, parse_creds


class PVEInstance(BaseInstance):
    def __init__(self, id, name, description, node="pve"):
        self.node = node

        try:
            template, realm, address, flags, creds = self.parse_meta(description)
        except (MetadataNotFoundException, MalformedMetadataException):
            raise

        super(PVEInstance, self).__init__(id, name, realm, template, address, flags=flags, creds=creds)

    def parse_meta(self, raw):
        """
        Parse and extract the template, realm, flags, foothold creds and IP address from the metadata field of the instance

        Args:
            raw (str): string holding the metadata info
        Returns:
            Returns the template name, the realm holding this instance and its IP address
        """

        raw = raw.lower()

        if not any(f"chatsubo.{key}" in raw for key in ["template", "realm", "address"]):
            raise MalformedMetadataException

        labels = {}
        rg = re.compile("(chatsubo\..*)=(.*)", re.MULTILINE)
        matches = rg.findall(raw)
        for match in matches:
            labels[match[0]] = match[1]

        template = labels.get("chatsubo.template")
        realm = labels.get("chatsubo.realm")
        address = labels.get("chatsubo.address")
        creds = parse_creds(labels)
        flags = parse_flags(labels)

        return template, realm, address, flags, creds

    def to_json(self):
        data = self._to_json()
        data.update({
            "node": self.node,
        })

        return data
  ```

</p>
</details>

### template.py

Dans certains cas, il peut être nécessaire de modifier la description des template. C'est notamment le cas avec Docker, qui a besoin du chemin du Dockerfile pour définir un template.

Dans ce cas, il suffit d'ajouter le paramètre au constructeur de la classe et de surcharger la fonction `to_json` :

```python
from app.providers.base.template import BaseTemplate


class DockerTemplate(BaseTemplate):
    def __init__(self, name, provider, labels, dockerfile="", dynamic=False):
        self.dockerfile = dockerfile

        super().__init__(name, provider, labels=labels, dynamic=dynamic)

    def to_json(self):
        data = self._to_json()

        data.update({
            "dockerfile": self.dockerfile
        })

        return data
```

<details><summary>Afficher le code de la classe BaseTemplate</summary>
<p>

```python
from app.providers.labels import parse_flags, parse_creds


class BaseTemplate:
    def __init__(self, name, provider, labels=None, dynamic=False):
        if labels is None:
            labels = []

        self.provider = provider
        self.name = name
        self.dynamic = dynamic
        self.flags = parse_flags(labels)
        self.creds = parse_creds(labels)
        self.labels = labels

    def to_json(self):
        return self._to_json()

    def _to_json(self):
        return {
            "provider": self.provider,
            "name": self.name,
            "flags": self.flags,
            "creds": self.creds,
            "labels": self.labels,
            "dynamic": self.dynamic,
        }
```

</p>
</details>
<br/>

> Par défaut, la classe BaseTemplate embarque et expose les informations suivantes :
> + provider
>   + Le type de provider qui fournit le template
> + name
>   + Le nom du template
> + flags
>   + Des flags préconfigurés
> + creds
>   + Des d'identifiants préconfigurés 
> + labels
>   + La liste des métadonnées enregistrées sur le template
> + dynamic
>   + S'il s'agit d'un template dynamique ou non
