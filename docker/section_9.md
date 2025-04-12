---
title: Docker
description: Dockerfile et Docker Compose pour une application client
order: 9
---

## Mise en place du projet d'application cliente

Pour commencer, créez un projet d'application cliente. Par exemple, si vous utilisez une application Node.js, initialisez un projet avec `npm init` :

```bash
mkdir client-app
cd client-app
npm init -y
```

Ensuite, ajoutez les dépendances nécessaires, comme React ou Vue.js, selon votre choix de framework.

---

## Mise en place du live reload

Le live reload permet de recharger automatiquement l'application lorsque des modifications sont effectuées. Par exemple, avec Node.js, vous pouvez utiliser `nodemon` :

```bash
npm install --save-dev nodemon
```

Ajoutez un script dans le fichier `package.json` pour démarrer le serveur avec `nodemon` :

```json
"scripts": {
  "start:dev": "nodemon server.js"
}
```

---

## Mise en place du Docker Compose

Docker Compose simplifie la gestion des conteneurs. Créez un fichier `docker-compose.yml` :

```yaml
version: '3.8'
services:
  client:
    build: .
    ports:
      - "3000:3000"
    volumes:
      - .:/app
      - /app/node_modules
    command: npm run start:dev
```

Ce fichier configure un service pour l'application cliente avec le live reload.

---

## Lancer les tests pendant le développement

Les tests sont essentiels pour garantir la qualité du code. Par exemple, avec Jest pour une application Node.js :

1. Installez Jest :

   ```bash
   npm install --save-dev jest
   ```

2. Ajoutez un script pour exécuter les tests :

   ```json
   "scripts": {
     "test": "jest"
   }
   ```

3. Lancez les tests avec :

   ```bash
   npm test
   ```

---

## Mise en place de l'environnement

Créez un fichier `.env` pour gérer les variables d'environnement :

```
API_URL=http://localhost:3000/api
```

Dans le fichier `docker-compose.yml`, utilisez ces variables :

```yaml
environment:
  - API_URL=${API_URL}
```

Cela permet de configurer dynamiquement l'application selon l'environnement (développement, production, etc.).
