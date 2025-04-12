---
title: Trouver et partager des images
description: Learn Docker
order: 4
---

## Docker HUB

Docker Hub est une plateforme pour trouver, partager et stocker des images Docker. Vous pouvez rechercher des images officielles ou créées par la communauté.

```bash
docker search nginx
```

## Publier des images

Pour publier une image sur Docker Hub, vous devez d'abord vous connecter, puis taguer et pousser l'image.

```bash
docker login
docker tag mon_image:latest mon_utilisateur/mon_image:latest
docker push mon_utilisateur/mon_image:latest
```

## Save

La commande `docker save` permet d'exporter une image Docker dans un fichier tar.

```bash
docker save -o mon_image.tar mon_image:latest
```

## Load

La commande `docker load` permet d'importer une image Docker à partir d'un fichier tar.

```bash
docker load -i mon_image.tar
```

## Export

La commande `docker export` permet d'exporter le système de fichiers d'un conteneur dans un fichier tar.

```bash
docker export -o mon_conteneur.tar mon_conteneur
```

## Import

La commande `docker import` permet de créer une image Docker à partir d'un fichier tar contenant un système de fichiers.

```bash
cat mon_conteneur.tar | docker import - mon_image:latest
```

