---
title: Mise ne production
description: Learn Docker
order: 11
---

## Introduction à la mise en production

## utilisation de pm2

PM2 est un gestionnaire de processus pour Node.js qui permet de gérer facilement les applications en production. Il offre des fonctionnalités comme le redémarrage automatique, la gestion des logs et le clustering.

### Installation de PM2
Installez PM2 globalement sur votre machine ou dans votre conteneur Docker :
```bash
npm install -g pm2
```

### Démarrage d'une application avec PM2
Pour démarrer une application Node.js avec PM2 :
```bash
pm2 start app.js --name "my-app"
```

### Gestion des processus
- **Lister les processus** :
  ```bash
  pm2 list
  ```
- **Redémarrer un processus** :
  ```bash
  pm2 restart my-app
  ```
- **Arrêter un processus** :
  ```bash
  pm2 stop my-app
  ```
- **Supprimer un processus** :
  ```bash
  pm2 delete my-app
  ```

### Gestion des logs
PM2 permet de visualiser les logs en temps réel :
```bash
pm2 logs
```

### Utilisation avec un fichier de configuration
Vous pouvez définir un fichier de configuration `ecosystem.config.js` pour gérer plusieurs applications.

#### Exemple de fichier `ecosystem.config.js` :
```javascript
module.exports = {
  apps: [
    {
      name: "api",
      script: "./api/server.js",
      instances: "max",
      exec_mode: "cluster",
      env: {
        NODE_ENV: "production",
      },
    },
  ],
};
```

Pour démarrer les applications définies dans ce fichier :
```bash
pm2 start ecosystem.config.js
```

### Surveillance
PM2 offre une interface de surveillance en temps réel :
```bash
pm2 monit
```

## Environnement de développement

L'environnement de développement est conçu pour permettre une interaction fluide entre les différents services. Voici les composants principaux :

- **Nginx comme point d'entrée** : Nginx agit comme un serveur frontal qui reçoit toutes les requêtes.
- **Reverse proxy sur Nginx** : Nginx redirige les requêtes soit vers le client (Angular), soit vers l'API (Node.js).
- **Socks Node.js** : Node.js gère les connexions et les requêtes côté serveur.

#### Exemple :
Imaginez que vous développez une application de gestion de tâches. Lorsqu'un utilisateur accède à l'interface web, Nginx redirige la requête vers Angular. Si l'utilisateur envoie une requête pour récupérer des données, Nginx la redirige vers l'API Node.js.

#### Exemple de configuration `docker-compose.yml` :
```yaml
version: '3.8'
services:
  nginx:
    image: nginx:latest
    ports:
      - "80:80"
    volumes:
      - ./nginx.conf:/etc/nginx/nginx.conf
    depends_on:
      - client
      - api
  client:
    build:
      context: ./client
      dockerfile: Dockerfile
    ports:
      - "4200:4200"
  api:
    build:
      context: ./api
      dockerfile: Dockerfile
    ports:
      - "3000:3000"
```

#### Exemple de configuration réseau dans `docker-compose.yml` :
```yaml
networks:
  app_network:
    driver: bridge

services:
  nginx:
    networks:
      - app_network
  client:
    networks:
      - app_network
  api:
    networks:
      - app_network
```

## Environnement de production

En production, l'architecture est optimisée pour la performance et la sécurité :

- **Nginx comme point d'entrée** : Il reçoit toutes les requêtes entrantes.
- **Redirection vers un autre Nginx** : Ce second Nginx sert les fichiers statiques (build Angular).
- **Redirection vers l'API** : Si la requête concerne des données, elle est redirigée vers l'API Node.js.

#### Exemple de configuration `docker-compose.yml` pour la production :
```yaml
version: '3.8'
services:
  nginx:
    image: nginx:latest
    ports:
      - "80:80"
    volumes:
      - ./nginx.prod.conf:/etc/nginx/nginx.conf
    depends_on:
      - api
  api:
    build:
      context: ./api
      dockerfile: Dockerfile
    environment:
      - NODE_ENV=production
    ports:
      - "3000:3000"
```

#### Exemple de configuration réseau dans `docker-compose.yml` :
```yaml
networks:
  production_network:
    driver: bridge

services:
  nginx:
    networks:
      - production_network
  api:
    networks:
      - production_network
```

## Mise du projet sur Gitlab

### Étape 1 : Initialisation du dépôt GitLab
Créez un dépôt GitLab pour votre projet. Assurez-vous que tous les fichiers nécessaires (code source, fichiers de configuration, etc.) sont ajoutés et commités.

#### Exemple de commandes :
```bash
git init
git remote add origin https://gitlab.com/username/project-name.git
git add .
git commit -m "Initial commit"
git push -u origin main
```

### Étape 2 : Configuration du fichier `.gitlab-ci.yml`
Ajoutez un fichier `.gitlab-ci.yml` à la racine de votre projet pour définir les étapes de CI/CD.

#### Exemple de configuration `.gitlab-ci.yml` :
```yaml
stages:
  - build
  - test
  - deploy

build:
  stage: build
  script:
    - echo "Building the project..."
    - docker-compose -f docker-compose.yml build

test:
  stage: test
  script:
    - echo "Running tests..."
    - docker-compose -f docker-compose.yml run api npm test

deploy:
  stage: deploy
  script:
    - echo "Deploying to production..."
    - ssh user@your-vps 'cd /path/to/project && docker-compose -f docker-compose.prod.yml up -d'
```

### Étape 3 : Configuration des variables CI/CD
Dans l'interface GitLab, configurez les variables CI/CD nécessaires, comme les clés SSH pour accéder au serveur ou les secrets pour votre application.

#### Exemple :
- `SSH_PRIVATE_KEY`: Clé privée pour accéder au serveur.
- `API_SECRET_KEY`: Clé secrète pour l'API.

## Création du VPS

Un **VPS (Virtual Private Server)** est un serveur virtuel qui fonctionne comme un serveur dédié, mais dans un environnement partagé. Il offre une isolation complète, des ressources dédiées et une grande flexibilité pour héberger des applications, des sites web ou des services.

### Étape 1 : Choix du fournisseur
Choisissez un fournisseur de VPS (Virtual Private Server) comme AWS, DigitalOcean, ou OVH. Créez une instance avec les spécifications nécessaires pour votre projet.

### Étape 2 : Configuration initiale
- Connectez-vous au VPS via SSH :
  ```bash
  ssh root@your-vps-ip
  ```
- Mettez à jour les paquets :
  ```bash
  apt update && apt upgrade -y
  ```
- Installez Docker et Docker Compose :
  ```bash
  apt install docker.io docker-compose -y
  ```

### Étape 3 : Configuration du pare-feu
Configurez un pare-feu pour sécuriser votre VPS :
```bash
ufw allow OpenSSH
ufw allow 80
ufw allow 443
ufw enable
```

## Ajout du certificat TLS

### Étape 1 : Installation de Certbot
Installez Certbot pour générer des certificats TLS :
```bash
apt install certbot python3-certbot-nginx -y
```

### Étape 2 : Configuration de Nginx
Assurez-vous que votre fichier de configuration Nginx est correctement configuré pour votre domaine.

#### Exemple de configuration Nginx :
```nginx
server {
    listen 80;
    server_name your-domain.com;

    location / {
        proxy_pass http://localhost:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
    }
}
```

### Étape 3 : Génération du certificat
Exécutez Certbot pour générer un certificat TLS :
```bash
certbot --nginx -d your-domain.com
```

### Étape 4 : Vérification
Vérifiez que le certificat est actif en accédant à votre site via HTTPS.

## Lancement de la production

### Étape 1 : Déploiement avec Docker Compose
Sur votre VPS, déployez votre application en utilisant Docker Compose :
```bash
docker-compose -f docker-compose.prod.yml up -d
```

### Étape 2 : Vérification
Assurez-vous que tous les services sont en cours d'exécution :
```bash
docker ps
```

### Étape 3 : Accès à l'application
Accédez à votre application via le domaine configuré.

## Renouvellement automatique des certificats TLS

### Étape 1 : Configuration du renouvellement automatique
Certbot configure automatiquement un cron job pour renouveler les certificats. Vous pouvez vérifier la configuration :
```bash
systemctl list-timers | grep certbot
```

### Étape 2 : Test du renouvellement
Testez le renouvellement pour vous assurer qu'il fonctionne correctement :
```bash
certbot renew --dry-run
```

### Étape 3 : Surveillance
Surveillez les logs pour détecter d'éventuels problèmes :
```bash
journalctl -u certbot
```

