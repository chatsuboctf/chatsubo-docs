# Installation

## Accès API

Il est nécessaire de créer un accès API pour que la plateforme puisse communiquer avec Proxmox.

La procédure est la suivante :

À partir du menu disponible en cliquant sur l'onglet `Datacenter`.

1. Dans l'onglet `Users`, créer un utilisateur PVE nommé "API"
2. Dans l'onglet "API Tokens", créer un token et conserver son secret
	+ Peu importe le nom, un uuid4 est recommandé
3. Dans l'onglet `Roles`, créer un rôle API
	+ Les permissions à donner au rôle sont les suivantes :
		+ VM.Audit
		+ VM.PowerMgmt
		+ VM.Monitor
		+ VM.Snapshot
		+ VM.Snapshot.Rollback
4. Dans l'onglet `Permissions`, ajouter les chemins suivants À L'UTILISATEUR "API" ET AU TOKEN TOUT JUSTE CRÉÉ :
	+ /nodes/pve
		+ Attention : "pve" ici correspond au nom du node, il peut être différent selon l'infrastructure
	+ /vms

L'accès API est maintenant créé, il suffit maintenant de répercuter les informations dans le fichier de configuration de la plateforme pour établir la connexion.