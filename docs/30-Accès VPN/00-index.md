# Introduction

Afin de faciliter la gestion du réseau et l'accès des joueurs aux instances, deux applications de gestion d'accès VPN sont mises à disposition.

Ces applications se composent d'un client VPN de la technologie souhaitée et d'un serveur léger effectuant un suivi des accès distribués et servant une API afin de communiquer avec la plateforme.

Un fichier docker-compose regroupe le tout pour un déploiement simplifié.

> Les fichiers de configuration des joueurs leurs sont accessibles à tout moment via l'interface web.

## Realms 

Il est possible de configurer plusieurs ponts VPN ; chaque pont VPN correspond à un `realm`. Ces realms seront par la suite attachés aux différents providers via la clef `realms:`.

De cette manière :

+ Un joueur peut accéder aux instances gérées par plusieurs providers depuis un même `realm` de manière transparente
+ Un même challenge peut être instancié dans plusieurs `realms` différents

### Cas concret
#### Saturation d'un pont VPN

Dans le scénario suivant : 

> 250 joueurs sont actifs via le pont VPN accessible via *one.chatsubo.wz* et les 254 accès pré-générés sont bientôt épuisés.
>
> Le portail utilise WireGuard sur le sous-réseau 10.10.10.0/24.

Dans cette situation, il suffit de déployer, sur la même machine, une nouvelle instance de `chatsubo-gate-wg` configurée sur le sous-réseau 10.10.20.0/24 et accessible via le nom de domaine *second.chatsubo.wz* pour que 254 nouveaux accès soient disponibles aux joueurs via le `realm` "second.chatsubo.wz".

:::note
Ne pas oublier d'ajouter la route avec le nouveau sous-réseau pour que la connexion du joueur puisse être routée vers l'adresse IP que lui donne le VPN.
+ `sudo ip route add 10.10.20.0/24 via 10.10.10.X`
:::

#### Instances redondantes

Dans le scénario suivant :

> Une machine hébergée par un Proxmox semble instable et l'on souhaite donner la possibilité aux joueurs de basculer sur une nouvelle instance sans avoir à toucher à la première.

La versatilité de la configuration des `realms` nous permet de déployer deux instances du même challenge sur le même hyperviseur et de leur attribuer deux `realms` différents.

Pour cet exemple, nous utiliserons les `realms` *wz01* et *wz02*.

Puisqu'il est possible d'assigner un même pont VPN à plusieurs `realms` différents, il suffit de lui attribuer deux `realms` différents pour donner accès au joueur aux deux instances à la fois, chacune sur un `realm` différent.

Ci-dessous un exemple de configuration permettant cette architecture :

```yaml
providers:
  pve:
   wz_pve:
    api:
      user: "api@pve"
      host: "X.X.X.X"
      port: 8006
      token:
        name: "changeme"
        value: "changeme"
    realms:
      - "wz01"
      - "wz02"

vpns:
 - realm: "wz01"
   url: "http://chatsubo.wz:7474"
   token: "CHANGEMECHANGEMECHANGEMECHANGEMECHANGEMECHANGEMECHANGEMECHANGEMECHANGEME"

 - realm: "wz02"
   url: "http://chatsubo.wz:7474"
   token: "CHANGEMECHANGEMECHANGEMECHANGEMECHANGEMECHANGEMECHANGEMECHANGEMECHANGEME"

```

:::note
Il sera également nécessaire de configurer les deux instances en indiquant dans leur `Note` respectives `chatsubo.realm=first.chatsubo.wz` et `chatsubo.realm=second.chatsubo.wz`.
:::

## Configuration

Quelques lignes de configurations sont nécessaires afin que la plateforme et le pont VPN puisse communiquer.

### Pont VPN

Du côté du pont VPN, il faut renseigner le `realm` auquel le pont est rattaché ainsi que le token d'authentification utilisé pour sécuriser les échanges avec la plateforme.

Dans le cadre de la migration d'un serveur VPN en cours d'utilisation, il est également possible de pointer un répertoire contenant les configurations déjà existantes à utiliser.

Ainsi :

```yaml
realm: "wz01"
# This token must be the same on the chatsubo plateform. "cat /dev/urandom | tr -dc 'a-zA-Z0-9' | fold -w 128 | head -n 1" works well
auth_token: "o9w3BxytyNfmmtsivUNcA3hfB3cB9b9KcogQHZU5cP775KaEZtaWANIpIndfA5ZZvGqV79PFDIV7i0IJsUEb58ahMLJDmLG7vTAosLqpURfrkdXKXC3ydlQFEMCvDwF9" 

# Optional
clients_dir: "/opt/chatsubo-gate-wg/clients"  # Wireguard
```

### Chatsubo

Du côté de la plateforme, il faudra répercuter les données renseignées ci-dessus à l'identique, ainsi que l'url à utiliser pour joindre le pont VPN :

```yaml
vpns:
 - realm: "wz01"
   url: "http://chatsubo.wz:7474"
   token: "CHANGEMECHANGEMECHANGEMECHANGEMECHANGEMECHANGEMECHANGEMECHANGEMECHANGEME"
```

##### Extensibilité

Afin de faciliter l'intégration de nouveaux connecteurs VPN, l'en-tête utilisé pour l'authentification ainsi que les routes que la plateforme doit utiliser pour communiquer avec l'API du pont sont modifiable directement depuis le fichier de configuration :

```yaml
vpns:
 - realm: "wz01"
   url: "http://chatsubo.wz:7474"
   token: "CHANGEMECHANGEMECHANGEMECHANGEMECHANGEMECHANGEMECHANGEMECHANGEMECHANGEME"

   # Optional
   header: "X-Chatsubo-Token"
   endpoints:
     config: "/api/vpn/get/:username"
     check: "/api/check"
```