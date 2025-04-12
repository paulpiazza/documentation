---
title: Créer une image Docker pour un serveur Node.js
description: Learn Docker
order: 5
---

## Créer une image Docker pour un serveur Node.js

Un serveur Node.js "Hello World" peut être encapsulé dans une image Docker. Voici les étapes pour le faire.

### Étape 1 : Créer un fichier `server.js`

Créez un fichier `server.js` avec le contenu suivant :
```javascript
// server.js
const http = require('http');

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello, World!\n');
});

const PORT = 3000;
server.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}/`);
});
```

### Étape 2 : Créer un fichier `package.json`

Ajoutez un fichier `package.json` pour gérer les dépendances :
```json
{
  "name": "node-helloworld",
  "version": "1.0.0",
  "main": "server.js",
  "scripts": {
    "start": "node server.js"
  }
}
```

### Étape 3 : Créer un Dockerfile

Créez un fichier `Dockerfile` pour construire l'image Docker :
```dockerfile
# Utiliser une image Node.js officielle comme base
FROM node:16

# Définir le répertoire de travail dans le conteneur
WORKDIR /app

# Copier les fichiers nécessaires dans le conteneur
COPY package.json /app/
COPY server.js /app/

# Installer les dépendances
RUN npm install

# Exposer le port 3000
EXPOSE 3000

# Commande pour démarrer l'application
CMD ["npm", "start"]
```

### Étape 4 : Construire l'image Docker

Utilisez la commande suivante pour construire l'image Docker :
```bash
docker build -t node-helloworld .
```

### Étape 5 : Exécuter le conteneur

Lancez un conteneur basé sur l'image créée :
```bash
docker run -p 3000:3000 node-helloworld
```

Accédez à `http://localhost:3000` dans votre navigateur pour voir le message "Hello, World!".

### Étape 6 : Vérifier l'image

Pour vérifier que l'image a été créée avec succès :
```bash
docker images
```
