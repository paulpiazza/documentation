---
title: Introduction à NGINX
description: Learn Nginx
order: 1
---

## Définition de NGINX
Un serveur est un ordinateur ou un programme qui fournit des services ou des ressources à d'autres ordinateurs, appelés clients, via un réseau. Par exemple, un serveur web héberge des sites web et répond aux requêtes des navigateurs.

Nginx est un serveur web et proxy inverse performant, conçu pour gérer de nombreuses connexions simultanées.

## Installation sur Debian
Installez Nginx sur Debian avec :
```bash
sudo apt update
sudo apt install nginx
```

### Installation de NGINX sous Debian

1. Mettez à jour la liste des paquets :
   ```bash
   sudo apt update
   ```
2. Installez Nginx :
   ```bash
   sudo apt install nginx
   ```
3. Vérifiez que le service Nginx est actif :
   ```bash
   sudo systemctl status nginx
   ```
4. Activez Nginx pour qu'il démarre automatiquement au démarrage du système :
   ```bash
   sudo systemctl enable nginx
   ```

## Installation d'un VPS
Un VPS est un serveur virtuel privé. Configurez-le pour héberger vos applications.

1. Choisissez un fournisseur de services cloud (par exemple, AWS, Google Cloud, DigitalOcean).
2. Sélectionnez une configuration adaptée à vos besoins (RAM, CPU, stockage).
3. Lancez une instance avec un système d'exploitation (par exemple, Ubuntu ou Debian).
4. Configurez les paramètres réseau et de sécurité (pare-feu, SSH).
5. Connectez-vous à votre VPS via SSH pour commencer à l'utiliser.

### Création d'un VPS sur OVH

1. Rendez-vous sur le site officiel d'[OVHcloud](https://www.ovhcloud.com/).
2. Créez un compte ou connectez-vous à votre compte existant.
3. Accédez à la section "Serveurs VPS" et choisissez une offre adaptée à vos besoins.
4. Configurez votre VPS :
   - Sélectionnez un système d'exploitation (par exemple, Ubuntu ou Debian).
   - Ajoutez des options supplémentaires si nécessaire (snapshots, sauvegardes automatiques, etc.).
5. Finalisez votre commande et effectuez le paiement.
6. Une fois le VPS prêt, connectez-vous via SSH en utilisant les informations fournies par OVH :
   ```bash
   ssh root@<adresse_ip_du_vps>
   ```
7. Configurez votre VPS selon vos besoins (mise à jour du système, installation de logiciels, etc.) et la sécurité. Exemple avec OVH [Guide Support OVH - Secure your VPS](https://support.us.ovhcloud.com/hc/en-us/articles/4412351365139-How-to-Secure-a-VPS)


### Connexion SSH au VPS

Pour vous connecter à votre VPS via SSH, suivez ces étapes :

1. Assurez-vous que vous avez les informations suivantes :
   - L'adresse IP de votre VPS.
   - Le nom d'utilisateur (par défaut, souvent `root`).
   - La clé SSH ou le mot de passe associé.

2. Utilisez la commande suivante pour établir une connexion SSH :
   ```bash
   ssh <nom_utilisateur>@<adresse_ip_du_vps>
   ```
   Par exemple :
   ```bash
   ssh root@192.168.1.100
   ```

   Il ne vous sera pas demandé de rentrer le mot de passe de l'utilsateur.

3. Si vous avez besoin de sélectionner une clé SSH, spécifiez son chemin avec l'option `-i` :
   ```bash
   ssh -i /chemin/vers/votre_cle_ssh <nom_utilisateur>@<adresse_ip_du_vps>
   ```

### Astuce : Utiliser VS Code pour se connecter au VPS en remote

Les utilisateurs de VS Code peuvent se connecter à leur VPS en utilisant l'extension **Remote - SSH**. Voici comment procéder :

1. Installez l'extension **Remote - SSH** depuis le [Marketplace VS Code](https://marketplace.visualstudio.com/items?itemName=ms-vscode-remote.remote-ssh).

2. Ouvrez la palette de commandes (Ctrl+Shift+P ou Cmd+Shift+P sur macOS) et recherchez `Remote-SSH: Connect to Host`.

3. Ajoutez une nouvelle configuration SSH si nécessaire :
   - Cliquez sur `Add New SSH Host`.
   - Entrez la commande SSH, par exemple :
     ```bash
     ssh <nom_utilisateur>@<adresse_ip_du_vps>
     ```
   - Sélectionnez le fichier de configuration SSH (`~/.ssh/config`) où enregistrer cette configuration.

4. Une fois la configuration ajoutée, sélectionnez le VPS dans la liste des hôtes disponibles.

5. VS Code ouvrira une nouvelle fenêtre connectée à votre VPS. Vous pouvez maintenant éditer des fichiers et exécuter des commandes directement sur le serveur.

6. Si vous utilisez une clé SSH, assurez-vous qu'elle est correctement configurée dans votre fichier `~/.ssh/config` :
   ```plaintext
   Host <alias_du_vps>
       HostName <adresse_ip_du_vps>
       User <nom_utilisateur>
       IdentityFile /chemin/vers/votre_cle_ssh
   ```

### Création d'une clé SSH

Pour sécuriser votre connexion SSH, vous pouvez créer une clé SSH en suivant ces étapes :

1. Générez une paire de clés SSH sur votre machine locale :
   ```bash
   ssh-keygen -t ed25519 -b 4096 -C "votre_email@example.com"
   ```
   - L'option `-t ed25519` spécifie le type de clé (RSA). Possible aussi d'utiliser `-t rsa`.
   - L'option `-b 4096` définit la longueur de la clé (4096 bits pour plus de sécurité).
   - L'option `-C` ajoute un commentaire (généralement votre email).

2. Lorsque vous êtes invité à entrer un chemin pour enregistrer la clé, appuyez sur Entrée pour utiliser le chemin par défaut (`~/.ssh/id_rsa`) ou spécifiez un chemin personnalisé.

3. Si vous le souhaitez, définissez une phrase secrète pour protéger votre clé privée.

4. Une fois la clé générée, vous trouverez deux fichiers :
   - La clé privée : `~/.ssh/id_rsa` (gardez-la secrète).
   - La clé publique : `~/.ssh/id_rsa.pub` (à partager avec les serveurs ou services).

5. Ajoutez la clé publique à votre VPS ou service cloud pour permettre l'authentification SSH, avec `ssh-copy-id utilisateur@hote`

## Fonctionnement de NGINX

Nginx utilise une architecture événementielle pour gérer efficacement les requêtes. Contrairement aux serveurs web traditionnels qui utilisent un modèle basé sur les threads ou les processus, Nginx adopte un modèle asynchrone et non-bloquant. Cela signifie qu'il peut gérer des milliers de connexions simultanément avec une faible utilisation des ressources.

- **Architecture événementielle** : Les événements (comme les requêtes HTTP) sont gérés via une boucle d'événements, ce qui réduit la surcharge liée à la création de nouveaux threads ou processus.
- **Gestion des connexions** : Nginx utilise des mécanismes comme epoll (sur Linux) pour surveiller plusieurs connexions en parallèle.
- **Modules extensibles** : Nginx prend en charge des modules pour ajouter des fonctionnalités comme le cache, la compression ou la gestion des requêtes HTTPS.
- **Proxy inverse** : Il peut agir comme intermédiaire entre les clients et les serveurs backend, équilibrant la charge et améliorant les performances.

## Présentation de NGINX Amplify et wrk

- **NGINX Amplify** : Outil de monitoring pour Nginx.
- **wrk** : Outil de benchmarking pour tester les performances.

### Installation de NGINX Amplify

1. Créez un compte sur le site officiel de [NGINX Amplify](https://amplify.nginx.com/).
2. Installez l'agent Amplify sur votre serveur :
   ```bash
   sudo apt update
   sudo apt install curl
   curl -sS -L -O https://github.com/nginxinc/nginx-amplify-agent/raw/master/packages/install.sh
   sudo API_KEY='votre_clé_API' sh ./install.sh
   ```
3. Configurez l'agent en modifiant le fichier `/etc/amplify-agent/agent.conf` si nécessaire.
4. Redémarrez l'agent :
   ```bash
   sudo service amplify-agent restart
   ```

### Installation de wrk

1. Installez les dépendances nécessaires :
   ```bash
   sudo apt update
   sudo apt install build-essential libssl-dev git
   ```
2. Clonez le dépôt officiel de wrk :
   ```bash
   git clone https://github.com/wg/wrk.git
   ```
3. Compilez wrk :
   ```bash
   cd wrk
   make
   ```
4. Déplacez l'exécutable dans un répertoire accessible globalement :
   ```bash
   sudo cp wrk /usr/local/bin/
   ```
5. Vérifiez l'installation en exécutant :
   ```bash
   wrk --version
   ```




