# Installation
## Prérequis

Dans le cas où un provider Docker est utilisé, il faut d'abord créer le réseau privé auquel les ponts VPN et les instances créées se connecteront.

Par convention, ce réseau doit se nommer `chatsugo-gate`.

Il se crée grâce à la commande :

```bash
docker network create chatsubo-gate --subnet 10.10.10.0/24
```

> L'utilisation du sous-réseau 10.10.10.0/24 est arbitraire. En revanche, il est important que plage IP indiquée soit libre et ne chevauche pas celle utilisée pour les VPN.

## WireGuard

L'image Docker utilisée pour WireGuard est disponible sur https://github.com/linuxserver/docker-wireguard (`ghcr.io/linuxserver/wireguard`).

La manière la plus simple de déployer le pont VPN WireGuard est de remplir son fichier de configuration (cf. <a href="/docs/Acc%C3%A8s%20VPN/index#pont-vpn">accès-vpn/introduction</a>) et de paramétrer le sous-réseau désiré grâce à un fichier `.env` en renseignant les variables d'environnements suivantes :

+ SERVERURL
	+ Nom d'hôte ou adresse IP qui sera utilisée par le client des joueurs pour se connecter au serveur VPN
+ SERVERPORT
	+ Port externe sur lequel le serveur VPN est exposé
+ PEERS
	+ La quantité de certificats à générer
+ INTERNAL_SUBNET
	+ Le sous-réseau du VPN
	+ Ex : 10.10.10.0
+ ALLOWEDIPS
	+ Les IP auxquels les clients ont accès
	+ Par défaut : `0.0.0.0`

Puis de lancer les conteneurs :

```bash
git clone https://github.com/chatsuboctf/chatsubo-gate-wg
vim config.yml  #] Update the gate's configuration
docker-compose up --build -d
```

Exemple de fichier de configuration complet :

```yaml
realm: "wz"
auth_token: "CHANGEMECHANGEMECHANGEMECHANGEMECHANGEMECHANGEMECHANGEMECHANGEMECHANGEME"
clients: "./clients"
```

> Les 254 certificats sont pré-générés au premier lancement du serveur ; cela peut prendre quelques minutes.

## OpenVPN

L'image Docker utilisée pour OpenVPN est disponible sur https://github.com/kylemanna/docker-openvpn (`kylemanna/docker-openvpn`).

Avant de lancer le serveur, il est nécessaire d'initialiser la PKI qui sera utilisée par OpenVPN.

Le script `scripts/init_pki.sh` est mis à disposition afin de simplifier cette opération.

Pour l'utiliser, il suffit de configurer les variable d'environnement suivantes puis de lancer le script :
+ `HOST`
	+ Nom d'hôte ou adresse IP qui sera utilisée par le client des joueurs pour se connecter au serveur VPN
+ `PORT`
	+ Port externe sur lequel le serveur VPN est exposé
+ `SUBNET`
	+ Sous-réseau du VPN
	+ Ex : 10.10.10.0
+ `SUBNET_MASK`
	+ Masque de sous-réseau du VPN
	+ Ex : 255.255.255.0

```bash
# Minimum configuration example
export HOST=vpn.hacklab.fr
bash ./script/docker_cert.sh
```

Le mot de passe de l'autorité de certification vous sera demandé plusieurs fois. C'est à vous de le choisir la première fois qu'il est demandé. Le conserver est important : il faudra le renseigner dans le fichier de configuration.

Les métadonnées du certificat (Organization, Country, etc) peuvent être laissées à leur valeur par défaut.

Une fois la PKI initialisée, il faudra remplir le fichier de configuration (cf. <a href="/docs/Acc%C3%A8s%20VPN/index#pont-vpn">accès-vpn/introduction</a>) en rajoutant la clef `ca_pass` contenant le mot de passe donné lors de l'initialisation de la PKI, puis le lancer grâce à Docker :

```bash
git clone https://github.com/chatsuboctf/chatsubo-gate-ovpn
vim config.yml  #] Update the gate's configuration
sudo docker-compose up --build -d
```

Exemple de fichier de configuration complet :

```yaml
realm: "wz"
auth_token: "CHANGEMECHANGEMECHANGEMECHANGEMECHANGEMECHANGEMECHANGEMECHANGEMECHANGEME"
ca_pass: "changeme"
```

Ce pont VPN a la particularité d'utiliser Docker pour la génération et l'accès aux certificats des joueurs. Il est donc nécessaire de lancer les conteneurs avec des privilèges élevés.


## Routage inverse

Afin que les conteneurs puissent communiquer avec l'adresse IP du joueur fournie par le VPN, il est nécessaire d'ajouter la route à la table de routage grâce à la commande :

```
sudo ip route add $VPN_USERS_SUBNET via $VPN_CONTAINER_ADDRESS

# Ex : sudo ip route add 10.10.20.0/24 via 10.10.10.2
```

Où `$VPN_USERS_SUBNET` est le sous-réseau du VPN et `$VPN_CONTAINER_ADDRESS` l'adresse IP du **conteneur en charge du réseau VPN** au sein du **réseau docker `chatsubo-gate`**.

La commande suivante permet de récupérer les adresses IP du conteneur VPN en cours d'exécution :

+ WireGuard
	+ `docker inspect -f '{{range.NetworkSettings.Networks}}|{{.IPAddress}}{{end}}' chatsubo-gate-wg_wireguard_1 | cut -d '|' -f 2`
+ OpenVPN
	+ `docker inspect -f '{{range.NetworkSettings.Networks}}|{{.IPAddress}}{{end}}' chatsubo-gate-ovpn_openvpn_1 | cut -d '|' -f 2`

> Le nom du conteneur (`gate_wireguard_X`, `chatsubo-gate_openvpn_X`) doit être modifié dans le cas où plusieurs instances du même pont sont actives simultanément.

L'IP au sein du réseau `chatsubo-gate` est celle qui appartient à la plage définie lors de la création du sous-réseau Dockerk, soit `10.10.10.0/24` dans l'exemple ci-dessus.