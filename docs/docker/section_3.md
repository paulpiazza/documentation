---
title: Une image avec Dockerfile
description: Learn Docker
order: 3
---

## Dockerfile

Un Dockerfile est un fichier texte contenant des instructions pour construire une image Docker. Exemple :
```dockerfile
FROM ubuntu:latest
RUN apt-get update && apt-get install -y curl
CMD ["bash"]
```

## Les étapes de construction d'une image

1. **Créer un Dockerfile** : Écrivez les instructions nécessaires.
2. **Construire l'image** :
   ```bash
   docker build -t mon_image .
   ```
3. **Vérifier l'image** :
   ```bash
   docker images
   ```

## Instructions

### FROM

Spécifie l'image de base :
```dockerfile
FROM ubuntu:20.04
```

### WORKDIR

Définit le répertoire de travail :
```dockerfile
WORKDIR /app
```

### RUN

Exécute des commandes pendant la construction :
```dockerfile
RUN apt-get update && apt-get install -y python3
```

### COPY

Copie des fichiers locaux dans l'image :
```dockerfile
COPY . /app
```

### ADD

Ajoute des fichiers ou télécharge des URL :
```dockerfile
ADD fichier.tar.gz /app
```

### CMD

Définit la commande par défaut :
```dockerfile
CMD ["python3", "app.py"]
```

### ENTRYPOINT

Définit un point d'entrée :
```dockerfile
ENTRYPOINT ["python3"]
```

### ARG

Définit des variables pour la construction :
```dockerfile
ARG VERSION=1.0
```

### ENV

Définit des variables d'environnement :
```dockerfile
ENV APP_ENV=production
```

### LABEL

Ajoute des métadonnées :
```dockerfile
LABEL maintainer="example@example.com"
```

## Commande Inspect

Pour inspecter une image ou un conteneur :
```bash
docker inspect <id>
```

## Docker commit, logs, tags et history

- **Commit** : Crée une nouvelle image à partir d'un conteneur :
  ```bash
  docker commit <container_id> nouvelle_image
  ```
- **Logs** : Affiche les journaux d'un conteneur :
  ```bash
  docker logs <container_id>
  ```
- **Tags** : Ajoute un tag à une image :
  ```bash
  docker tag <image_id> mon_image:latest
  ```
- **History** : Affiche l'historique d'une image :
  ```bash
  docker history <image_id>
  ```

