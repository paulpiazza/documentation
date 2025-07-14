---
title: Utiliser Docker Compose
description: Learn Docker
order: 8
---

## Introduction à Docker compose

Docker Compose est un outil qui permet de définir et de gérer des applications multi-conteneurs Docker. Il utilise un fichier YAML pour configurer les services, les réseaux et les volumes nécessaires à une application.


```yaml
version: '3.8'
services:
  web:
    image: nginx
    ports:
      - "8080:80"
```

## première utilisation de Docker Compose

Pour utiliser Docker Compose, commencez par créer un fichier `docker-compose.yml`. Ensuite, utilisez la commande `docker-compose up` pour démarrer les services.


```bash
docker-compose up
```

## utilisation d'images personnalisées avec Docker compose

Vous pouvez construire des images personnalisées directement depuis un `Dockerfile` en utilisant Docker Compose.


```yaml
services:
  app:
    build:
      context: .
      dockerfile: Dockerfile
```

## Les ports et les volumes avec Docker compose

Les ports permettent de mapper les ports du conteneur à ceux de l'hôte, tandis que les volumes permettent de partager des données entre l'hôte et le conteneur.


```yaml
services:
  db:
    image: postgres
    ports:
      - "5432:5432"
    volumes:
      - db_data:/var/lib/postgresql/data
volumes:
  db_data:
```

## utiliser des variables d'envrionnement avec Docker compose

Les variables d'environnement peuvent être définies dans le fichier `docker-compose.yml` ou dans un fichier `.env`.


```yaml
services:
  app:
    image: myapp
    environment:
      - APP_ENV=production
```

## utiliser des réseaux avec Docker Compose

Docker Compose permet de configurer des réseaux pour que les services puissent communiquer entre eux.


```yaml
services:
  frontend:
    image: react-app
    networks:
      - app-network
  backend:
    image: node-app
    networks:
      - app-network
networks:
  app-network:
```

## utiliser docker compose avec le server nodejs

Pour un serveur Node.js, vous pouvez définir un service qui utilise une image Node.js et monte le code source.


```yaml
services:
  node:
    image: node:14
    volumes:
      - .:/app
    working_dir: /app
    command: npm start
```

## Mettre en place le service pour le serveur

Configurez un service pour votre serveur en définissant les dépendances, les ports et les volumes nécessaires.


```yaml
services:
  server:
    build: .
    ports:
      - "3000:3000"
    depends_on:
      - db
```

## les configurations depends_on et restart

`depends_on` garantit que certains services démarrent avant d'autres, tandis que `restart` définit la politique de redémarrage.

```yaml
services:
  app:
    image: myapp
    depends_on:
      - db
    restart: always
```

## Les autres commandes de docker-compose

Quelques commandes utiles :
- `docker-compose down` : Arrête et supprime les conteneurs.
- `docker-compose logs` : Affiche les logs des services.
- `docker-compose ps` : Liste les services en cours d'exécution.


```bash
docker-compose logs -f
```

