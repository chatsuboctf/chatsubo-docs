# Instances

Toute machine (en cours d'exécution ou non) possédant au moins un snapshot et les labels `chatsubo.template`, `chatsubo.realm` et `chatsubo.address` dans sa `Note` sera reconnue comme un template par Chatsubo.

Pour qu'elle soit accessible aux joueurs, il est cependant nécessaire de renseigner le `realm` auquel l'instance est rattachée ainsi que l'adresse IP par laquelle la machine est joignable à travers le pont VPN.

> Afin qu'il soit possible de réinitialiser la machine à son état initial à la demande des joueurs, **il est nécessaire qu'au moins un snapshot soit présent** pour que l'instance soit détectée par Chatsubo.

Exemple de `Note` valide :

```
chatsubo.template=lovelace
chatsubo.realm=wz
chatsubo.address=192.168.1.21
```