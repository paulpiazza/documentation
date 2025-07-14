---
title: Les bases de Docker
Description: Learn Docker
order: 2
---

## Premier conteneur

Un conteneur est une instance d'une image Docker. Pour créer et exécuter un conteneur, utilisez la commande suivante :
```bash
docker run hello-world
```
Cela télécharge l'image `hello-world` (si elle n'est pas déjà présente) et exécute un conteneur qui affiche un message de bienvenue.

## Lancer un contenu

Pour exécuter un conteneur en arrière-plan, utilisez l'option `-d` :
```bash
docker run -d nginx
```
Cela démarre un conteneur basé sur l'image `nginx` en mode détaché.

## Lister, supprimer et aide des images

- **Lister les images disponibles** :
  ```bash
  docker images
  ```
- **Supprimer une image** :
  ```bash
  docker rmi <image_id>
  ```
- **Afficher l'aide pour les commandes Docker** :
  ```bash
  docker <commande> --help
  ```

## Le cycle de vie d'un conteneur

Les principales étapes du cycle de vie d'un conteneur sont :
1. **Créer** : `docker create`
2. **Démarrer** : `docker start`
3. **Arrêter** : `docker stop`
4. **Supprimer** : `docker rm`

Exemple :
```bash
docker create --name my_container ubuntu
docker start my_container
docker stop my_container
docker rm my_container
```

## Docker pause, unpause, rename, exec

- **Pause et reprise d'un conteneur** :
  ```bash
  docker pause <container_id>
  docker unpause <container_id>
  ```
- **Renommer un conteneur** :
  ```bash
  docker rename <old_name> <new_name>
  ```
- **Exécuter une commande dans un conteneur en cours d'exécution** :
  ```bash
  docker exec -it <container_id> bash
  ```

## Copie de fichiers

Pour copier des fichiers entre l'hôte et un conteneur :
- **De l'hôte vers le conteneur** :
  ```bash
  docker cp fichier.txt <container_id>:/chemin/destination
  ```
- **Du conteneur vers l'hôte** :
  ```bash
  docker cp <container_id>:/chemin/source fichier.txt
  ```

## Inspecter un conteneur

Pour obtenir des informations détaillées sur un conteneur, utilisez :
```bash
docker inspect <container_id>
```
Cela renvoie un JSON contenant des informations comme les volumes, les réseaux, les variables d'environnement, etc.


