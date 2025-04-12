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

## Installation d'un VPS
Un VPS est un serveur virtuel privé. Configurez-le pour héberger vos applications.

1. Choisissez un fournisseur de services cloud (par exemple, AWS, Google Cloud, DigitalOcean).
2. Sélectionnez une configuration adaptée à vos besoins (RAM, CPU, stockage).
3. Lancez une instance avec un système d'exploitation (par exemple, Ubuntu ou Debian).
4. Configurez les paramètres réseau et de sécurité (pare-feu, SSH).
5. Connectez-vous à votre VPS via SSH pour commencer à l'utiliser.

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




