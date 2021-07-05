# Installation

L'utilisation de la socket du daemon Docker nécessite la mise en place de l'authentification TLS. <a href="https://docs.docker.com/engine/security/protect-access/#use-tls-https-to-protect-the-docker-daemon-socket">Plus d'informations.</a>

> Ce mode d'authentification filtre également les requêtes en fonction du nom d'hôte utilisé.
>
> Afin d'éviter des soucis de détournement de domaine, il est recommandé d'en utiliser un qui ne puisse pas être enregistré (ie. `chatsubo.wz`) et de modifier le fichier `/etc/hosts` sur le serveur hébergeant la plateforme pour le faire pointer vers l'adresse IP du daemon Docker.

## Les certificats
### Génération

Le script `scripts/docker_cert.sh` est mis à disposition afin de simplifier la création des certificats.

Pour l'utiliser, il suffit de configurer la variable d'environnement `CERT_HOST` au nom d'hôte souhaité puis de lancer le script.

```bash
export CERT_HOST=chatsubo.wz
bash ./script/docker_cert.sh
```

Il créera alors l'autorité de certification et les certificats nécessaires pour le serveur et la plateforme dans le dossier courant. 

Le mot de passe de l'autorité de certification vous sera demandé plusieurs fois. C'est à vous de le choisir la première fois qu'il est demandé.

Les métadonnées du certificat (Organization, Country, etc) peuvent être laissées à leur valeur par défaut.

### Plateforme

Une fois générés, vous pouvez déposer les fichiers suivants dans le dossier `config/providers/docker/$CERT_HOST` :

+ `cert.pem`
+ `key.pem`
+ `ca.pem`

Bien qu'ils puissent se trouver n'importe où sur la machine, il est recommandé de suivre la convention ci-dessus. 

## Configuration du daemon

Maintenant que les certificats ont été générés, il faut configurer le daemon Docker sur la machine qui hébergera les conteneurs.

### Certificats

Tout d'abord, créer un dossier `/etc/docker/tls` sur la machine distante et y déposer les fichiers suivants :

+ `ca.pem`
+ `server-cert.pem`
+ `server-key.pem`

### daemon.json

Ensute, modifier le fichier `/etc/docker/daemon.json` et s'assurer que les options suivantes soient bien présentes : 

```json 
{
    "tls": true,
    "tlscacert": "/etc/docker/tls/ca.pem",
    "tlscert": "/etc/docker/tls/server-cert.pem",
    "tlskey": "/etc/docker/tls/server-key.pem",
    "tlsverify": true,
    "hosts": ["fd://", "unix:///var/run/docker.sock","tcp://localhost:2376"]
}
```

Créer le fichier avec ces valeurs s'il n'existe pas.

> En cas d'erreur au démarrage, vérifier qu'il n'y ait pas de doublons entre les arguments passés à la commande *ExecStart* du fichier de service de Docker et ceux renseignés dans le fichier `/etc/docker/daemon.json`


Relancer le service Docker ainsi que la socket et surveiller l'apparition d'erreurs potentielles.

```bash
sudo systemctl restart docker.service docker.socket

# Vérifier que le service s'est relancé correctement
sudo journalctl -xefu docker.service
```

Enfin, vérifier que la configuration est valide en utilisant cette commande depuis la machine hébergeant Chatsubo et à la racine du répertoire :

```bash
curl https://$CERT_HOST:2376/images/json \
  --cert "config/providers/docker/$CERT_HOST/cert.pem" \
  --key "config/providers/docker/$CERT_HOST/key.pem" \
  --cacert "config/providers/docker/$CERT_HOST/ca.pem"
```

La liste des images Docker chargées sur la machine distante devrait apparaître.