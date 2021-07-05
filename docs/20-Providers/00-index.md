# Introduction
## Fonctionnement

Le principe de fonctionnement du backend est le suivant : le serveur reçoit des ordres qu'il transmet aux plugins, qui savent comment l'exécuter.

Cette architecture vise à favoriser au maximum l'adaptation de Chatsubo aux différents environnements de virtualisation à disposition des communautés amenées à l'utiliser. 

Ainsi, les plugins de providers :
+ Font la traduction entre les données exposées par l'hyperviseur et celles attendues par la plateforme
+ Savent comment éxécuter les ordres envoyés depuis l'interface

Aujourd'hui, la plateforme est compatible avec deux providers : **Docker** et **Proxmox**.

## Instances

Il est nécessaire de séparer deux notions :

+ Le template, qui servira d'image de base à partir de laquelle l'instance sera déployée à la demande du joueur (providers *dynamique* uniquement)
  + Ex : un Dockerfile
+ L'instance déployée

Dans le cas des défis "classiques" (non-dynamiques), comme lors de l'utilisation d'une machine hébergée sur un Proxmox, l'instance déployée sera considérée comme son propre template. Les métadonnées concernant le nom du template, le `realm` et l'adresse IP devront donc être directement exposées depuis l'instance. 

> Par exemple, dans le cas d'un challenge hébergé sur un Proxmox, ces données seront exposées via la `Note` de la machine. Elle devra donc contenir à minima les labels suivants :
> + chatsubo.template=xxx
> + chatsubo.realm=yyy
> + chatsubo.address=X.X.X.X

### Challenges "dynamiques"

Les challenges *dynamiques* offrent la possibilité aux joueurs de déployer leur propre instance. Ce type de challenge a la particularité d'offrir la possibilité de générer certains éléments aléatoires au cours de l'instanciation.

Par exemple, dans le cas où le système de flag dynamique est utilisé, l'instance les génèrera au build de l'image.

Ces informations doivent également être accessibles depuis Chatsubo pour pouvoir être récupérés au moment où l'utilisateur soumet sa proposition depuis la plateforme.

> Dans le cas des flags dynamiques, cela implique qu'il est impératif que l'instance soit toujours en fonctionnement lors de leur validation.

Pour l'instant, seul Docker supporte ce système grâce aux labels, qu'il est possible de manipuler lors du build de l'image et qui sont récupérables via l'API grâce aux labels.

Cette mécanique peut également être intéressante pour générer des identifiants uniques dans le cadre d'un accès initial (SSH, telnet, portail web) qui serait mis à disposition du joueur.

Exemple de Dockerfile tirant partie des métadonnées générées à l'instanciation :

```Dockerfile
FROM alpine:3.14

RUN apk add nmap-ncat

ARG FLAG0
ARG SESSION

LABEL chatsubo.template="hello-flag" \
        chatsubo.flags.helloworld.value="$FLAG0" \
        chatsubo.flags.helloworld.points="25" \
        chatsubo.session="$SESSION"

RUN sleep 3  # Needed to fix Celery not triggering the 'on_success' event 

RUN mkdir /secrets
RUN echo "$FLAG0" > /secrets/flag

ENTRYPOINT ncat -lnkvp 3434 --exec "/bin/cat /secrets/flag"
CMD /bin/sh%
```


## Configuration

Une fois le plugin créé, il suffira de renseigner les informations permettant à la plateforme de communiquer avec les provider dans le fichier de configuration :

```yaml
providers:
  pve:
    warzone: # provider name
      api:
        user: "api@pam"
        host: "https://pve.hacklab"
        port: 8006
        token:
         name: "b5215aeb-ae28-432c-b1b7-047276d87cf"
         value: "dff1ae17-4eb3-4543-a9f2-a703f375c48"
```

