---
title: Les réseaux Docker
description: Learn Docker
order: 7
---

## Les réseaux
Les réseaux Docker permettent aux conteneurs de communiquer entre eux et avec l'extérieur. Ils jouent un rôle crucial dans la création d'applications distribuées, où plusieurs services doivent interagir.

**Exemple :** Un serveur web dans un conteneur peut communiquer avec une base de données dans un autre conteneur via un réseau Docker.

## Le réseau bridge
Le réseau bridge est le réseau par défaut pour les conteneurs Docker. Tous les conteneurs connectés à ce réseau peuvent communiquer entre eux en utilisant leurs noms ou adresses IP. Cependant, ils ne sont pas accessibles directement depuis l'extérieur, sauf si des ports sont exposés.

**Exemple :**
```bash
docker network inspect bridge
```
Cela affiche les détails du réseau bridge par défaut.

## Créer ses réseaux bridge
Créer un réseau bridge personnalisé permet de mieux organiser les conteneurs et de contrôler leurs interactions. Par exemple, vous pouvez isoler certains conteneurs dans un réseau spécifique pour des raisons de sécurité ou de performance.

**Exemple :**
```bash
docker network create my-bridge-network
docker run --network my-bridge-network my-app
```

## Connecter un serveur Nodejs avec une base MongoDB
Pour connecter un serveur Node.js à une base MongoDB, vous pouvez les placer dans le même réseau Docker. Cela leur permet de communiquer directement en utilisant leurs noms de conteneurs comme adresses.

**Exemple :**
```bash
docker network create app-network
docker run --network app-network --name mongodb mongo
docker run --network app-network --name node-app my-node-app
```
Le serveur Node.js peut se connecter à MongoDB via `mongodb://mongodb:27017`.

## Configuration du serveur
La configuration du serveur implique de définir les paramètres nécessaires pour qu'il puisse se connecter à d'autres services. Cela inclut les variables d'environnement, les ports exposés et les dépendances réseau.

**Exemple :**
```bash
docker run -e DB_HOST=mongodb://mongodb:27017 -p 3000:3000 my-node-app
```

## Créer une image Docker pour un serveur Node.js Hello World
Créer une image Docker pour un serveur Node.js "Hello World" est une excellente introduction à Docker. Vous commencez par écrire un fichier `Dockerfile` qui installe Node.js, copie le code source et définit la commande pour démarrer le serveur.

**Exemple :**
```dockerfile
# Dockerfile
FROM node:14
WORKDIR /usr/src/app
COPY . .
RUN npm install
CMD ["node", "app.js"]
```
Ensuite, construisez l'image :
```bash
docker build -t hello-world-node .
docker run -p 3000:3000 hello-world-node
```
