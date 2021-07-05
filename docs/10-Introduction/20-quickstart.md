# Quickstart

## Démarrage

La manière la plus simple de déployer Chatsubo est d'utiliser le fichier docker-compose fourni avec l'application :

```bash
git clone https://github.com/chatsuboctf/chatsubo
vim config/chatsubo.yml  #] Update Chatsubo's configuration, cf. "Configuration"
docker-compose up --build -d
```

> Il est nécessaire que docker-compose puisse lire le dossier contenant les données de la base MySQL pour démarrer. Si vous rencontrez une erreur de permission au lancement de Chatsubo, ces deux options sont possibles :
> 
> + Changer les permissions du dossier `docker/.data`
>   + `sudo chmod -R 744 ./docker/.data` 
> + Lancer docker avec les droits adiministrateurs
>   + `sudo docker-compose up --build -d`

## Configuration

Avant de lancer la plateforme, il est nécessaire de lui donner toutes les informations nécessaires afin d'être en mesure de communiquer avec les providers avec lesquels on souhaite interagir. 

Ces données sont regroupées dans le fichier de configuration `config/chatsubo.yml`.

Il est recommandé de copier le fichier d'exemple (`cp config/chatsubo.sample.yml config/chatsubo.yml`) puis de changer les valeurs en fonction de l'infrastucture ciblée.

Ci-dessous un exemple de configuration pour un provider Docker et un pont VPN hébergés tous deux à l'adresse chatsubo.wz :

```yaml
providers:
  # PVE providers list
  pve:
   remote_pve:  # This can be anything but must be kept unique
    api:
      user: "api@pve"
      host: "X.X.X.X"
      port: 8006
      token:
        name: "changeme"
        value: "changeme"
    realms:
      - "chatsubo.wz"

  # Docker providers list
  docker:
   remote_docker:  # This can be anything but must be kept unique
     dockerfiles_root: "/var/chatsubo/docker"
     limits:
       memory: "256m"
     flag_prefix: "FLAG"
     api:
       host: "chatsubo.wz"
       port: 2376
       client:
         cert: "config/providers/docker/chatsubo.wz/cert.pem"
         key: "config/providers/docker/chatsubo.wz/key.pem"
         ca: "config/providers/docker/chatsubo.wz/ca.pem"
     realms:
       - "chatsubo.wz"

vpns:
 - realm: "chatsubo.wz"
   url: "http://chatsubo.wz:7474"
   token: "CHANGEMECHANGEMECHANGEMECHANGEMECHANGEMECHANGEMECHANGEMECHANGEMECHANGEME"

```

### VPN

Il est possible de configurer plusieurs ponts VPN. Chaque pont VPN correspond à un `realm`. Ces realms seront par la suite attachés aux différents providers.

De cette manière :

+ Un joueur peut accéder aux instances gérées par plusieurs providers depuis un même `realm` de manière transparente
+ Un même challenge peut être instancié dans plusieurs `realms`  différents

Ainsi, lorsqu'un pont VPN arrive à saturation, il est possible de monter un nouveau pont pour ouvrir un nouveau réseau de jeu et merttre à disposition de nouveaux accès.

#### Cas concret

Dans le scénario suivant : 

250 joueurs sont actifs via le pont VPN accessible via *one.chatsubo.wz* et les 255 accès pré-générés du portail WireGuard sur le sous-réseau 10.10.10.0/24 arrivent bientôt à saturation.

Dans cette situation, il suffit de déployer, sur la même machine, une nouvelle instance de `chatsubo-gate-wg` configurée sur le sous-réseau 10.10.20.0/24 et accessible via le nom de domaine *second.chatsubo.wz* pour que 255 nouveaux accès soient disponibles aux joueurs via le `realm` "second.chatsubo.wz".

> Ne pas oublier d'ajouter la route avec le nouveau sous-réseau pour que la connexion du joueur puisse être routée vers l'adresse IP que lui donne le VPN.
> + `sudo ip route add 10.10.20.0/24 via 10.10.10.X`

### Proxmox

La configuration de Proxmox ne demande que les informations permettant d'accéder à l'API (cf. <a href="/docs/Introduction/requirements">les prérequis</a>).

### Docker

En ce qui concerne Docker, c'est cette fois directement à la socket Docker que la plateforme va envoyer ses requêtes.

Puisqu'elle est protégée par une authentification TLS, il est nécessaire d'indiquer à Chatsubo où se trouvent tous les éléments requis pour authentifier ses requêtes.

Bien qu'ils puissent se trouver n'importe où sur la machine, il est recommandé de déposer les fichiers dans le dossier prévu à cet effet (`config/providers/docker/$REALM/`).

## Proxmox

Une fois le provider reconnu, il suffit de renseigner les métadonnées des instances que l'ont souhaite exposer dans les `Notes` pour que les joueurs puissent accéder à l'instance.

Ci-dessous un exemple du minimum nécessaire :

```
chatsubo.template=helloworld
chatsubo.realm=chatsubo.wz
chatsubo.address=X.X.X.X
```

Il faudra ensuite enregistrer le template depuis l'interface web et activer la publication pour la rendre accessible.

## Docker

Les Dockerfile utilisés pour la création d'instances à la volée sont envoyées par la plateforme.

Ces fichiers sont stockées dans le dossier `/var/chatsubo/docker/$TEMPLATE`.

À l'instar des instances PVE, un minimum d'information est nécessaire pour que la plateforme puisse servir d'intermédiaire entre le joueur et le challenge.

Les métadonnées sont enregistrées et éxposées grâce aux labels. 

Ici les informations minimales requises pour une instance Docker :

```Dockerfile
LABEL chatsubo.template="helloworld" \
      chatsubo.realm="chatsubo.wz" 
```

L'absence du label `chatsubo.address` s'explique par l'exposition des IP des conteneurs via la socket Docker : la plateforme a accès à cette information de manière autonome et n'a donc pas besoin que l'on la lui indique.

> Il est possible d'enregistrer une instance "classique" gérée par un provider Docker. Il sera cependant indispensable de renseigner tous les labels nécessaires à la main lors de son instanciation.
