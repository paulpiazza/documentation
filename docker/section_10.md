---
title: Docker
description: Utiliser Docker avec plusieurs services
order: 9
---

## Architecture du projet

Angular, NGINX, API NODEJS, mongoDB

### Environnement de développement

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

### Environnement de production

En production, l'architecture est optimisée pour la performance et la sécurité :

- **Nginx comme point d'entrée** : Il reçoit toutes les requêtes entrantes.
- **Redirection vers un autre Nginx** : Ce second Nginx sert les fichiers statiques (build Angular).
- **Redirection vers l'API** : Si la requête concerne des données, elle est redirigée vers l'API Node.js.

#### Exemple :
Lorsqu'un utilisateur final accède à l'application, Nginx sert directement les fichiers statiques pour une navigation rapide. Si une requête API est nécessaire, elle est redirigée vers le serveur Node.js.

#### Exemple de configuration `nginx.conf` pour la production :
```nginx
server {
    listen 80;

    location / {
        root /usr/share/nginx/html;
        index index.html;
        try_files $uri /index.html;
    }

    location /api/ {
        proxy_pass http://api:3000/;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
    }
}
```

#### Exemple de configuration pour optimiser les images Docker :
Ajoutez des étapes de nettoyage dans les `Dockerfile` pour réduire la taille des images :
```dockerfile
# filepath: ./client/Dockerfile
RUN npm install && npm cache clean --force
```

## Mise en place de l'architecture client

Expliquez comment configurer le client Angular pour qu'il fonctionne avec Docker. Par exemple, créez un fichier `Dockerfile` pour construire l'application Angular et un fichier `docker-compose.yml` pour orchestrer les services.

#### Exemple de `Dockerfile` pour Angular :
```dockerfile
# filepath: ./client/Dockerfile
FROM node:16 AS build
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build --prod

FROM nginx:alpine
COPY --from=build /app/dist /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
```

#### Exemple de configuration `docker-compose.override.yml` pour le client :
```yaml
services:
  client:
    volumes:
      - ./client/src:/app/src
    environment:
      - API_URL=http://localhost:3000/api
```

## Mise en place de la configuration client

Décrivez comment configurer Angular pour interagir avec Nginx et l'API. Par exemple, modifiez le fichier `environment.ts` pour inclure l'URL de l'API.

#### Exemple de configuration `environment.ts` :
```typescript
// filepath: ./client/src/environments/environment.ts
export const environment = {
  production: false,
  apiUrl: 'http://localhost:3000/api'
};
```

#### Exemple de configuration pour le fichier `angular.json` :
```json
// filepath: ./client/angular.json
"projects": {
  "app": {
    "architect": {
      "build": {
        "options": {
          "outputPath": "dist",
          "baseHref": "/"
        }
      }
    }
  }
}
```

## Mise en place de l'API Node.js

Expliquez comment conteneuriser l'API Node.js. Par exemple, créez un fichier `Dockerfile` pour Node.js et configurez les dépendances nécessaires dans `package.json`.

#### Exemple de `Dockerfile` pour Node.js :
```dockerfile
# filepath: ./api/Dockerfile
FROM node:16
WORKDIR /usr/src/app
COPY package*.json ./
RUN npm install
COPY . .
EXPOSE 3000
CMD ["node", "server.js"]
```

#### Exemple de configuration pour `package.json` :
```json
// filepath: ./api/package.json
"scripts": {
  "start": "node server.js",
  "dev": "nodemon server.js"
}
```

## Mise en place du service pour la base de données

Décrivez comment configurer MongoDB dans un conteneur Docker. Par exemple, utilisez une image officielle MongoDB dans `docker-compose.yml` et configurez les volumes pour la persistance des données.

#### Exemple de configuration MongoDB dans `docker-compose.yml` :
```yaml
services:
  mongodb:
    image: mongo:latest
    container_name: mongodb
    ports:
      - "27017:27017"
    volumes:
      - mongodb_data:/data/db
volumes:
  mongodb_data:
```

#### Exemple de configuration pour la persistance des données MongoDB :
```yaml
volumes:
  mongodb_data:
    driver: local
```

## Mise en place du reverse proxy Nginx

Expliquez comment configurer Nginx comme reverse proxy. Par exemple, créez un fichier `nginx.conf` pour définir les règles de redirection vers Angular et l'API.

#### Exemple de configuration supplémentaire pour le reverse proxy :
Ajoutez une règle pour rediriger les requêtes non trouvées vers Angular :
```nginx
location / {
    try_files $uri /index.html;
}
```

#### Exemple de configuration pour gérer les erreurs 404 :
```nginx
error_page 404 /index.html;
```

## Mise en place de la configuration de production et de l'environnement

Décrivez comment préparer l'environnement de production. Par exemple, utilisez des variables d'environnement pour sécuriser les configurations sensibles et optimisez les images Docker pour réduire leur taille.

#### Exemple d'utilisation des variables d'environnement dans `docker-compose.override.yml` :
```yaml
services:
  api:
    environment:
      - NODE_ENV=production
      - DB_HOST=mongodb
      - DB_PORT=27017
```

#### Exemple de configuration pour les variables d'environnement dans `.env` :
```txt
NODE_ENV=production
DB_HOST=mongodb
DB_PORT=27017
API_PORT=3000
```

