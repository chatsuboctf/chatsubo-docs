# Labels

Les labels sont les métadonnées inscrites par les auteurs des challenges sur les instances et les templates.

Ces données servent à pré-configurer le challenge pour son enregistrement sur la plateforme et à transmettre des informations cruciales comme le `realm` auquel l'instance appartient, son nom, voire son adresse lorsque la plateforme n'a pas d'autre moyen de la récupérer de manière dynamique.

## Pré-remplissage

Par exemple, le texte suivant inscrit dans la `Note` d'une machine hébergée sur Proxmox :

```ini
chatsubo.template=magellan
chatsubo.realm=wz
chatsubo.address=192.168.1.21
---
chatsubo.flags.flag1.value=ESGI{D1sC0v3r_7H3_W0rlD}
chatsubo.flags.flag1.points=250
chatsubo.name=Magellan
chatsubo.description=Challenge créé pour l'ESGI dans le cadre du cours 'Challenges et CTF'.
chatsubo.os=Linux
chatsubo.category=Test technique
chatsubo.difficulty=4
chatsubo.duration=60
```

Pré-remplira le formulaire d'enregistrement de la manière suivante :


<center><figure>
	<a href="/assets/ctf/chatsubo/media/prefill_magellan_1.png" target="_blank">
  <img src="/assets/ctf/chatsubo/media/prefill_magellan_1.png" />
  </a>
  <center><figcaption><i>Pré-remplissage de l'étape "Informations"</i></figcaption></center>
</figure></center>

<center><figure>
	<a href="/assets/ctf/chatsubo/media/prefill_magellan_2.png" target="_blank">
  <img src="/assets/ctf/chatsubo/media/prefill_magellan_2.png" />
  </a>
  <center><figcaption><i>Pré-remplissage de l'étape "Configuration"</i></figcaption></center>
</figure></center>

<center><figure>
	<a href="/assets/ctf/chatsubo/media/prefill_magellan_3.png" target="_blank">
  <img src="/assets/ctf/chatsubo/media/prefill_magellan_3.png" />
  </a>
  <center><figcaption><i>Pré-remplissage de l'étape "Flags"</i></figcaption></center>
</figure></center>

## Accès initiaux

Les labels permettent également de configurer une ou plusieurs paires d'identifiants qui seront mis à disposition du joueur au sein de l'interface.

Ainsi, ces labels : 

```ini
chatsubo.creds.ssh.username=esgi
chatsubo.creds.ssh.password=3s51E5gi
chatsubo.creds.smtp.username=magellan
chatsubo.creds.smtp.password=m4g31lAn
```

Afficheront sur l'interface :

<center><figure>
	<a href="/assets/ctf/chatsubo/media/preconf_access.png" target="_blank">
  <img src="/assets/ctf/chatsubo/media/preconf_access.png" />
  </a>
  <center><figcaption><i>Pré-configuration d'accès initiaux</i></figcaption></center>
</figure></center>



## Génération dynamique

Docker permet, lors du build d'une image, de passer des variables au Dockerfile.

Nous pouvons utiliser ce mécanisme pour fournir à l'auteur plusieurs variables aléatoires qu'il pourra intégrer à son challenge.

Ainsi, lors de l'instanciation d'un template dynamique, Chatsubo génère et transmet automatiquement les variables suivantes :

+ $FLAG0 .. $FLAG50 
	+ La valeur correspond aux 35 premiers caractères du SHA1 d'une chaîne de caractères aléatoires sur l'espace [A-Za-z0-9]
	+ Exemple (avec `flag_prefix: FLAG`) : FLAG{5dff85a4334b99e1ccd8b3766b212d6a09b}
	+ Pseudocode : `sha1(randstr(32)).hex()[:35]`
+ $RNG0 .. $RNG50 
	+ Ces variables contiennent une chaîne de 8 caractères aléatoires sur l'espace [A-Za-z0-9]
	+ Exemple : 2Cxr9y5F
	+ Une telle valeur peut être générée grâce à la commande bash suivante : 
		+ `cat /dev/urandom | tr -dc 'a-zA-Z0-9' | fold -w 8 | head -n 1`

C'est également grâce à cette mécanique qu'est établit le lien entre une instance et un joueur : un uuid4 est transmis à la variable SESSION, dont le lien avec l'identifiant de l'utilisateur est créé en base.

:::note
Il est impératif pour un Dockerfile dynamique d'exposer un label chatsubo.session.

Pour qu'il soit valide, il doit donc contenir à minima : 
```
ARG SESSION
LABEL chatsubo.session="$SESSION"
```
:::

Pour pouvoir accéder à ces variables, il est nécessaire de les déclarer au sein du Dockerfile grâce à la commande `ARG`.

Exemple : 

```Dockerfile
ARG FLAG0
ARG FLAG1
ARG FLAG2
ARG FLAG3

ARG RNG0=toor
```

Une fois déclarées, ces variables sont utilisables plus bas sous la forme `$RNG0`, `$FLAG0`, `$FLAG1`, etc.

### Cas concret - CTF ACK&/

En combinant les valeurs aléatoires générées par Chatsubo et les labels paramétrés lors de l'instanciation, il est possible d'intégrer des flags et des accès dynamiques dans les challenges.

C'est ce qui a été utilisé pour le CTF ACK&/, organisé par le Hacklab ESGI en Février dernier.

Le concept de cet évènement était de proposer à chaque joueur 5 `silos` de 4 challenges chacun. Chacun de ces `silos` correspondaient à un template dynamique, instanciés sur demande par les joueurs, et dont les flags et l'identifiant de connexion SSH permettant d'y accéder étaient générés à la volée.

Cette génération dynamique se fait grâce aux lignes suivantes : 
```
ARG FLAG0
ARG FLAG1
ARG FLAG2
ARG FLAG3

ARG RNG0=toor

...

LABEL ... \
	chatsubo.creds.ssh.username="level0" \
	chatsubo.creds.ssh.password="$RNG0" \
	chatsubo.flags.step0.value="$FLAG0" \
	chatsubo.flags.step0.points="250" \
	chatsubo.flags.step1.value="$FLAG1" \
	chatsubo.flags.step1.points="250" \
	chatsubo.flags.step2.value="$FLAG2" \
	chatsubo.flags.step2.points="250" \
	chatsubo.flags.step3.value="$FLAG3" \
	chatsubo.flags.step3.points="250" \
	...
```

Exemple d'un Dockerfile utilisé pour instancier un `silo` :

```Dockerfile
FROM ubuntu:20.04

# Setup
RUN apt update
RUN apt install -y openssh-server vim man less netcat cron python3 qpdf sl
RUN apt update
RUN apt install -y build-essential libssl-dev

# Copy challenges resources
COPY src/root/etc /etc

# Allow caching of apt by putting it below
# level0 password
ARG RNG0=toor

# Challenger-bound session, handled by Chatsubo
ARG SESSION

# Register all the generated flag passed by Chatsubo via --build-args
# ENV is needed to allow entrypoint to access them
ARG FLAG0
ARG FLAG1
ARG FLAG2
ARG FLAG3

ENV FLAGS="$FLAG0;$FLAG1;$FLAG2;$FLAG3"
RUN echo $FLAGS

RUN useradd -ms /bin/bash -p $(openssl passwd -6 "$RNG0") level0
RUN useradd -ms /bin/bash -p $(openssl passwd -6 "$FLAG0") level1
RUN useradd -ms /bin/bash -p $(openssl passwd -6 "$FLAG1") level2
RUN useradd -ms /bin/bash -p $(openssl passwd -6 "$FLAG2") level3
RUN useradd -ms /bin/bash -p $(openssl passwd -6 "$FLAG3") level4

# Exposed metadata, needed by Chatsubo for dynamic flags, session handling and ssh initial access
LABEL chatsubo.template="adv_ans02" \
		chatsubo.name="ACK&/ Confirmé - 02" \
		chatsubo.description="Deuxième instance du parcours confirmé" \
		chatsubo.category="Confirmé" \
		chatsubo.os="Linux" \
		chatsubo.difficulty="7" \
        chatsubo.creds.ssh.username="level0" \
        chatsubo.creds.ssh.password="$RNG0" \
        chatsubo.flags.step0.value="$FLAG0" \
        chatsubo.flags.step0.points="250" \
        chatsubo.flags.step1.value="$FLAG1" \
        chatsubo.flags.step1.points="250" \
        chatsubo.flags.step2.value="$FLAG2" \
        chatsubo.flags.step2.points="250" \
        chatsubo.flags.step3.value="$FLAG3" \
        chatsubo.flags.step3.points="250" \
        chatsubo.session="$SESSION"

# Add challenges setup scripts
COPY src/root /
RUN chmod u+x /home/level**/ans_init.sh

# Needed for sshd
RUN mkdir /run/sshd

RUN echo "$FLAGS" > /root/flags

COPY src/entrypoint.sh /entrypoint.sh
RUN chmod u+x /entrypoint.sh

ENTRYPOINT /bin/bash -c '/etc/init.d/cron start && cat /root/flags | /entrypoint.sh'

```

Script d'entrypoint correspondant :

```bash
#!/bin/bash

rm -f $0

SCRIPT_NAME="ans_init.sh"
RAW_FLAGS="$(cat /root/flags)"
FLAGS=(${RAW_FLAGS//;/ })

# Start challenge setup script for each levels and remove it
for i in {0..4}; do
  current_user="level$i"
  next_user="level$(($i + 1))"
  init_script="/home/level$i/$SCRIPT_NAME"
  current_flag=${FLAGS[i]:-"_"}
  [ -f "$init_script" ] && bash -c "$init_script $current_flag $current_user $next_user"
  rm -f $init_script
done

rm -f /root/flags

/etc/init.d/cron start

# Allow remote access
while true; do
  /usr/sbin/sshd -e -D
done

```

Le script `ans_init.sh`, quant à lui, se charge de mettre en place les challenges, appliquer les bonnes permissions et placer les flags.

Exemple du script du niveau 0 qui s'occupe de :
+ Placer le flag hors de portée de l'utilisateur `level0`
+ Patcher le chemin du flag présent dans le binaire
+ Appliquer les permissions correctes pour que seul le binaire à exploiter puisse lire le fichier contenant le flag du niveau suivant, `level1` 
+ Configurer le setuid du binaire

> Le binaire du challenge, `dimensional`, est compilé statiquement et a été copié au préalable dans le répertoire de l'utilisateur `level0` au cours du build de l'image 

```bash
#!/bin/bash

FLAG=$1
CURRENT_USER=$2
NEXT_USER=$3
bin_name=dimensional

# Create the flag's dir, the flag itself and set the correct permissions
mkdir "/opt/$NEXT_USER/"
echo $FLAG > "/opt/$NEXT_USER/flag"
chmod 400 "/opt/$NEXT_USER/flag"
chown -R "$NEXT_USER:" "/opt/$NEXT_USER/"

# Patch binary with next level user's name
sed -i "s/LEVEL_/$NEXT_USER/g" "/home/$CURRENT_USER/$bin_name"

# Fix permissiosn for the current level's user
chown -R "$CURRENT_USER:" "/home/$CURRENT_USER"/

# Change the owner of the binary and put a setuid on it to allow the binary to read next level's flag
chown "$NEXT_USER:" "/home/$CURRENT_USER/$bin_name"
chmod +xs "/home/$CURRENT_USER/$bin_name"
```