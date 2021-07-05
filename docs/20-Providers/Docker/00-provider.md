# Provider

Docker permet d'instancier des conteneurs à la volée à partir d'une image définie par un Dockerfile.

Cette particularité sépare cette technologie des hyperviseurs puisqu'elle donne la possibilité de créer une instance par joueur grâce à la légèreté de ses conteneurs et à sa prise en charge de la gestion des adresses IP. 

Le daemon Docker est contrôlé à distance par Chatsubo grâce à l'exposition de sa socket. 

Afin de rendre ce mode d'utilisation sécurisé, la plateforme impose l'utilisation d'une authentification TLS lors de la communication avec le daemon.

La mise en place de cette authentification est décrite sur la <a href="/docs/Providers/Docker/installation">page dédiée</a>.