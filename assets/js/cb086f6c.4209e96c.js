(self.webpackChunkchatsubo=self.webpackChunkchatsubo||[]).push([[268],{3905:function(e,n,t){"use strict";t.d(n,{Zo:function(){return d},kt:function(){return u}});var a=t(7294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function s(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?s(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):s(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},s=Object.keys(e);for(a=0;a<s.length;a++)t=s[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(a=0;a<s.length;a++)t=s[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var o=a.createContext({}),p=function(e){var n=a.useContext(o),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},d=function(e){var n=p(e.components);return a.createElement(o.Provider,{value:n},e.children)},c={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},m=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,s=e.originalType,o=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),m=p(t),u=r,f=m["".concat(o,".").concat(u)]||m[u]||c[u]||s;return t?a.createElement(f,l(l({ref:n},d),{},{components:t})):a.createElement(f,l({ref:n},d))}));function u(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var s=t.length,l=new Array(s);l[0]=m;var i={};for(var o in n)hasOwnProperty.call(n,o)&&(i[o]=n[o]);i.originalType=e,i.mdxType="string"==typeof e?e:r,l[1]=i;for(var p=2;p<s;p++)l[p]=t[p];return a.createElement.apply(null,l)}return a.createElement.apply(null,t)}m.displayName="MDXCreateElement"},5103:function(e,n,t){"use strict";t.r(n),t.d(n,{frontMatter:function(){return i},contentTitle:function(){return o},metadata:function(){return p},toc:function(){return d},default:function(){return m}});var a=t(2122),r=t(9756),s=(t(7294),t(3905)),l=["components"],i={},o="Plugins",p={unversionedId:"Providers/custom",id:"Providers/custom",isDocsHomePage:!1,title:"Plugins",description:"Il est possible de rendre compatible la plateforme \xe0 un nouvel hyperviseur en cr\xe9ant des plugins d\xe9di\xe9s.",source:"@site/docs/20-Providers/10-custom.md",sourceDirName:"20-Providers",slug:"/Providers/custom",permalink:"/docs/Providers/custom",editUrl:"https://github.com/chatsuboctf/chatsubo/docs/20-Providers/10-custom.md",version:"current",sidebarPosition:10,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Introduction",permalink:"/docs/Providers/index"},next:{title:"Labels",permalink:"/docs/Providers/labels"}},d=[{value:"provider.py",id:"providerpy",children:[]},{value:"instance.py",id:"instancepy",children:[]},{value:"template.py",id:"templatepy",children:[]}],c={toc:d};function m(e){var n=e.components,t=(0,r.Z)(e,l);return(0,s.kt)("wrapper",(0,a.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,s.kt)("h1",{id:"plugins"},"Plugins"),(0,s.kt)("p",null,"Il est possible de rendre compatible la plateforme \xe0 un nouvel hyperviseur en cr\xe9ant des plugins d\xe9di\xe9s. "),(0,s.kt)("p",null,"Ces plugin se construisent de la mani\xe8re suivante :"),(0,s.kt)("h3",{id:"providerpy"},"provider.py"),(0,s.kt)("p",null,"Ce fichier va r\xe9pondre aux besoins suivants :"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"Lister les templates disponibles"),(0,s.kt)("li",{parentName:"ul"},"Lister les instances en cours d'ex\xe9cution"),(0,s.kt)("li",{parentName:"ul"},"Effectuer un rollback vers l'\xe9tat initial du challenge"),(0,s.kt)("li",{parentName:"ul"},"D\xe9marrer une nouvelle une instance (providers ",(0,s.kt)("em",{parentName:"li"},"dynamiques")," uniquement)")),(0,s.kt)("details",null,(0,s.kt)("summary",null,'Afficher le code du fichier "provider.py" du plugin PVE'),(0,s.kt)("p",null,(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-python"},'import re\nimport traceback\n\nimport requests\nfrom proxmoxer import ProxmoxAPI\nfrom urllib3.exceptions import MaxRetryError\n\nfrom app.providers.base.provider import BaseProvider\nfrom app.providers.base.template import BaseTemplate\nfrom app.providers.exc import VpnProviderNotFoundException, \\\n    VpnProviderErrorException, BackendConnectionException, MetadataNotFoundException, MalformedMetadataException\nfrom app.providers.pve.instance import PVEInstance\n\n\nclass PVEProvider(BaseProvider):\n    kind = "pve"\n    is_dynamic = False\n\n    def __init__(self, name, host, user, token_name, token_value, realms, vpns, nodes=None, verify_ssl=False, sep="--"):\n        if nodes is None:\n            nodes = ["pve"]\n\n        self.name = name\n        self.nodes = nodes\n        self.sep = sep\n        self.client = ProxmoxAPI(host,\n                                 user=user,\n                                 token_name=token_name,\n                                 token_value=token_value,\n                                 verify_ssl=verify_ssl\n                                 )\n        remote_nodes = [node_data["node"] for node_data in self.client.nodes.get()]\n        for node in self.nodes:\n            if node not in remote_nodes:\n                raise BackendConnectionException(f"{self.kind}/{self.name}", f"Node \'{node}\' not found")\n\n        super().__init__(vpn_providers=vpns, kind=self.kind, realms=realms)\n\n    def list_templates(self):\n        templates = []\n        vms = self.list_all()\n\n        try:\n            filtered = list(filter(lambda vm: "chatsubo." in vm["description"], vms))\n            rg = re.compile("(chatsubo\\..*)=(.*)", re.MULTILINE)\n\n            for config in filtered:\n                labels = {}\n                matches = rg.findall(config["description"])\n                for match in matches:\n                    labels[match[0]] = match[1]\n\n                if not (name := labels.get("chatsubo.template")):\n                    continue\n\n                templates.append(BaseTemplate(name, self.to_json(), labels=labels).to_json())\n        except Exception:\n            raise\n\n        return templates\n\n    def list_all(self):\n        vms = []\n        for node in self.nodes:\n            try:\n                instances = self.client.nodes(node).qemu.get()\n            except (MaxRetryError, requests.exceptions.ConnectionError, ConnectionRefusedError) as e:\n                raise BackendConnectionException(f"{self.kind}/{self.name}", str(e))\n\n            for inst in instances:\n                inst["description"] = self.client.nodes(node).qemu(inst["vmid"]).config.get().get("description", "")\n                inst["node"] = node\n\n            vms += instances\n\n        return vms\n\n    def list_instances(self, realm=None):\n        instances = []\n        vms = self.list_all()\n        raw = list(filter(lambda vm: "chatsubo." in vm["description"] and vm["template"] == "", vms))\n\n        for vm in raw:\n            try:\n                instances.append(PVEInstance(vm["vmid"], vm["name"], vm["description"], vm["node"]))\n            except (MetadataNotFoundException, MalformedMetadataException):\n                pass\n\n        if realm:\n            instances = list(filter(lambda i: i.realm == realm, instances))\n\n        return instances\n\n    def reset(self, realm, template, session=None):\n        target = None\n        instances = self.list_instances(realm=realm)\n        for inst in instances:\n            if inst.template == template:\n                target = inst\n\n        snapshots = self.client.nodes(target.node).qemu.get(f"{target.id}/snapshot")\n        last_snap_name = list(filter(lambda x: x.get("running") == 1, snapshots))[0].get("parent")\n\n        if not last_snap_name:\n            return False\n\n        self.client.nodes(target.node).qemu.post(f"{target.id}/snapshot/{last_snap_name}/rollback")\n        return True\n\n    @classmethod\n    def from_config(cls, name, raw_conf, vpns):\n        parsed = {\n            "name": name,\n            "host": f"{raw_conf[\'api\'][\'host\']}:{raw_conf[\'api\'][\'port\']}",\n            "user": raw_conf["api"]["user"],\n            "token_name": raw_conf["api"]["token"]["name"],\n            "token_value": raw_conf["api"]["token"]["value"],\n            "realms": raw_conf["realms"],\n            "vpns": vpns\n        }\n\n        if nodes := raw_conf.get("nodes"):\n            parsed["nodes"] = nodes\n\n        if verif := raw_conf.get("verify_ssl"):\n            parsed["verify_ssl"] = verif\n\n        if sep := raw_conf.get("sep"):\n            parsed["sep"] = sep\n\n        return cls(**parsed)\n')))),(0,s.kt)("h3",{id:"instancepy"},"instance.py"),(0,s.kt)("p",null,"Ce fichier, quant \xe0 lui, interpr\xe9tera les donn\xe9es re\xe7ues de l'hyperviseur afin d'en extraire :"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"Le nom de la machine"),(0,s.kt)("li",{parentName:"ul"},"Le ",(0,s.kt)("inlineCode",{parentName:"li"},"realm")," auquel la machine appartient"),(0,s.kt)("li",{parentName:"ul"},"Le template d'origine"),(0,s.kt)("li",{parentName:"ul"},"L'adresse IP"),(0,s.kt)("li",{parentName:"ul"},"Les m\xe9tadonn\xe9es optionnelles")),(0,s.kt)("details",null,(0,s.kt)("summary",null,'Afficher le code du fichier "instance.py" du plugin PVE'),(0,s.kt)("p",null,(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-python"},'import re\n\nfrom app.providers.exc import MetadataNotFoundException, MalformedMetadataException\nfrom app.providers.base.instance import BaseInstance\nfrom app.providers.labels import parse_flags, parse_creds\n\n\nclass PVEInstance(BaseInstance):\n    def __init__(self, id, name, description, node="pve"):\n        self.node = node\n\n        try:\n            template, realm, address, flags, creds = self.parse_meta(description)\n        except (MetadataNotFoundException, MalformedMetadataException):\n            raise\n\n        super(PVEInstance, self).__init__(id, name, realm, template, address, flags=flags, creds=creds)\n\n    def parse_meta(self, raw):\n        """\n        Parse and extract the template, realm, flags, foothold creds and IP address from the metadata field of the instance\n\n        Args:\n            raw (str): string holding the metadata info\n        Returns:\n            Returns the template name, the realm holding this instance and its IP address\n        """\n\n        raw = raw.lower()\n\n        if not any(f"chatsubo.{key}" in raw for key in ["template", "realm", "address"]):\n            raise MalformedMetadataException\n\n        labels = {}\n        rg = re.compile("(chatsubo\\..*)=(.*)", re.MULTILINE)\n        matches = rg.findall(raw)\n        for match in matches:\n            labels[match[0]] = match[1]\n\n        template = labels.get("chatsubo.template")\n        realm = labels.get("chatsubo.realm")\n        address = labels.get("chatsubo.address")\n        creds = parse_creds(labels)\n        flags = parse_flags(labels)\n\n        return template, realm, address, flags, creds\n\n    def to_json(self):\n        data = self._to_json()\n        data.update({\n            "node": self.node,\n        })\n\n        return data\n')))),(0,s.kt)("h3",{id:"templatepy"},"template.py"),(0,s.kt)("p",null,"Dans certains cas, il peut \xeatre n\xe9cessaire de modifier la description des template. C'est notamment le cas avec Docker, qui a besoin du chemin du Dockerfile pour d\xe9finir un template."),(0,s.kt)("p",null,"Dans ce cas, il suffit d'ajouter le param\xe8tre au constructeur de la classe et de surcharger la fonction ",(0,s.kt)("inlineCode",{parentName:"p"},"to_json")," :"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-python"},'from app.providers.base.template import BaseTemplate\n\n\nclass DockerTemplate(BaseTemplate):\n    def __init__(self, name, provider, labels, dockerfile="", dynamic=False):\n        self.dockerfile = dockerfile\n\n        super().__init__(name, provider, labels=labels, dynamic=dynamic)\n\n    def to_json(self):\n        data = self._to_json()\n\n        data.update({\n            "dockerfile": self.dockerfile\n        })\n\n        return data\n')),(0,s.kt)("details",null,(0,s.kt)("summary",null,"Afficher le code de la classe BaseTemplate"),(0,s.kt)("p",null,(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-python"},'from app.providers.labels import parse_flags, parse_creds\n\n\nclass BaseTemplate:\n    def __init__(self, name, provider, labels=None, dynamic=False):\n        if labels is None:\n            labels = []\n\n        self.provider = provider\n        self.name = name\n        self.dynamic = dynamic\n        self.flags = parse_flags(labels)\n        self.creds = parse_creds(labels)\n        self.labels = labels\n\n    def to_json(self):\n        return self._to_json()\n\n    def _to_json(self):\n        return {\n            "provider": self.provider,\n            "name": self.name,\n            "flags": self.flags,\n            "creds": self.creds,\n            "labels": self.labels,\n            "dynamic": self.dynamic,\n        }\n')))),(0,s.kt)("br",null),(0,s.kt)("blockquote",null,(0,s.kt)("p",{parentName:"blockquote"},"Par d\xe9faut, la classe BaseTemplate embarque et expose les informations suivantes :"),(0,s.kt)("ul",{parentName:"blockquote"},(0,s.kt)("li",{parentName:"ul"},"provider",(0,s.kt)("ul",{parentName:"li"},(0,s.kt)("li",{parentName:"ul"},"Le type de provider qui fournit le template"))),(0,s.kt)("li",{parentName:"ul"},"name",(0,s.kt)("ul",{parentName:"li"},(0,s.kt)("li",{parentName:"ul"},"Le nom du template"))),(0,s.kt)("li",{parentName:"ul"},"flags",(0,s.kt)("ul",{parentName:"li"},(0,s.kt)("li",{parentName:"ul"},"Des flags pr\xe9configur\xe9s"))),(0,s.kt)("li",{parentName:"ul"},"creds",(0,s.kt)("ul",{parentName:"li"},(0,s.kt)("li",{parentName:"ul"},"Des d'identifiants pr\xe9configur\xe9s "))),(0,s.kt)("li",{parentName:"ul"},"labels",(0,s.kt)("ul",{parentName:"li"},(0,s.kt)("li",{parentName:"ul"},"La liste des m\xe9tadonn\xe9es enregistr\xe9es sur le template"))),(0,s.kt)("li",{parentName:"ul"},"dynamic",(0,s.kt)("ul",{parentName:"li"},(0,s.kt)("li",{parentName:"ul"},"S'il s'agit d'un template dynamique ou non"))))))}m.isMDXComponent=!0}}]);