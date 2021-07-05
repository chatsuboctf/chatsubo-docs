# Prérequis

Quelques éléments sont nécessaires pour permettre à la plateforme de communiquer avec les providers.

## Authentification TLS (Docker) 

Afin de communiquer avec la socket Docker de manière sécurisée, Chatsubo impose l'utilisation d'un certificat TLS.

La procédure à suivre est décrite dans la <a href="/docs/Providers/Docker/installation">page dédiée</a> à l'installation du provider Docker.

## API Proxmox

La plateforme communiquant avec Proxmox via son API, il est nécessaire de créer un accès via l'interface de l'hyperviseur.

Cette procédure est décrite dans la <a href="/docs/Providers/Proxmox/installation">page dédiée</a> à l'installation du provider Proxmox.
