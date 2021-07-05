# Instances

Les instances du provider Docker peuvent être soit *dynamiques* soit *classiques* (cf. <a href="/docs/Providers/index#instances">providers/instances</a>).

+ Les instances *dynamiques* correspondent aux Dockerfile stockés dans le dossier `/var/chatsubo/docker` sur la machine **hébergeant la plateforme**
+ Les instances *classiques*, quant à elles, sont détectées automatiquement par le provider à condition qu'elles soient valides et possède un label `chatsubo.dynamic=false`

À l'instar des instances PVE, il faut que certains labels soient présents pour que le template soient reconnus par Chatsubo. Il s'agit ici des labels :

+ `chatsubo.template`
+ `chatsubo.realm` 
+ `chatsubo.session`

Puisque le provider Docker supporte les instances dynamiques, il est possible d'intégrer des éléments aléatoires uniques à chaque joueurs au sein du challenge (cf. <a href="/docs/Providers/labels#cas-concret---ctf-ack">providers/labels/ctf-ACK&/</a>).