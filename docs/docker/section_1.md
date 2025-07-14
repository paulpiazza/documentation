---
title: Introduction to Docker
description: Learn Docker
order: 1
---

## A quoi sert Docker ?
Docker est une plateforme permettant de créer, déployer et exécuter des applications dans des conteneurs. Les conteneurs sont des environnements légers et isolés qui incluent tout ce dont une application a besoin pour fonctionner, comme le code, les bibliothèques et les dépendances.

### Avantages :
- **Portabilité** : Les conteneurs fonctionnent de manière identique sur différents environnements (local, cloud, etc.).bian
- **Isolation** : Chaque conteneur est isolé des autres, ce qui améliore la sécurité et évite les conflits de dépendances.
- **Efficacité** : Les conteneurs partagent le noyau du système d'exploitation, ce qui les rend plus légers que les machines virtuelles.
- **Automatisation** : Simplifie le déploiement et la gestion des applications grâce à des outils comme Docker Compose et Docker Swarm.

## Écosystème de Docker
L'écosystème Docker comprend plusieurs outils et services qui facilitent la gestion des conteneurs :

- **Docker Engine** : Le moteur principal qui exécute et gère les conteneurs.
- **Docker Hub** : Un registre public pour partager et télécharger des images Docker.
- **Docker Compose** : Un outil pour définir et exécuter des applications multi-conteneurs à l'aide de fichiers YAML.
- **Docker Swarm** : Une solution native pour orchestrer des conteneurs Docker en clusters.
- **Docker Desktop** : Une application pour gérer Docker sur des systèmes d'exploitation comme Windows et macOS.
- **Registres privés** : Permettent de stocker des images Docker en toute sécurité dans un environnement privé.

## Conteneurs multi-étapes
Les conteneurs multi-étapes permettent de réduire la taille des images Docker en séparant les étapes de construction et d'exécution. Cela est particulièrement utile pour les applications nécessitant une compilation.

```dockerfile
# Étape 1 : Compilation
FROM maven:3.8.5-openjdk-11 AS build
WORKDIR /app
COPY . .
RUN mvn clean package

# Étape 2 : Exécution
FROM openjdk:11-jre-slim
WORKDIR /app
COPY --from=build /app/target/app.jar app.jar
CMD ["java", "-jar", "app.jar"]
```

### Avantages
- Réduction de la taille des images.
- Séparation claire des responsabilités (compilation vs exécution).
- Amélioration de la sécurité en excluant les outils de compilation de l'image finale.

## Volumes Docker
Les volumes Docker permettent de persister les données générées ou utilisées par les conteneurs, même après leur arrêt ou suppression.

### Types de volumes
1. **Volumes nommés** : Gérés par Docker, ils sont indépendants du cycle de vie des conteneurs.
2. **Volumes liés à un hôte** : Mappent un répertoire local de l'hôte à un conteneur.

### Exemple de création et utilisation
- Créer un volume nommé :
  ```bash
  docker volume create mon_volume
  ```
- Utiliser un volume dans un conteneur :
  ```bash
  docker run -v mon_volume:/data my_image
  ```
- Utiliser un volume lié à un hôte :
  ```bash
  docker run -v /chemin/local:/data my_image
  ```

### Bonnes pratiques
- Utilisez des volumes pour stocker les données critiques.
- Évitez de stocker des données importantes directement dans les conteneurs, car elles seront perdues si le conteneur est supprimé.

## Installation de Docker sur Debian
Pour installer Docker sur Debian, suivez les étapes ci-dessous :

1. **Mettre à jour le système** :
   ```bash
   sudo apt update
   sudo apt upgrade -y
   ```

2. **Installer les dépendances nécessaires** :
   ```bash
   sudo apt install -y apt-transport-https ca-certificates curl software-properties-common
   ```

3. **Ajouter la clé GPG officielle de Docker** :
   ```bash
   curl -fsSL https://download.docker.com/linux/debian/gpg | sudo gpg --dearmor -o /usr/share/keyrings/docker-archive-keyring.gpg
   ```

4. **Ajouter le dépôt Docker** :
   ```bash
   echo "deb [arch=$(dpkg --print-architecture) signed-by=/usr/share/keyrings/docker-archive-keyring.gpg] https://download.docker.com/linux/debian $(lsb_release -cs) stable" | sudo tee /etc/apt/sources.list.d/docker.list > /dev/null
   ```

5. **Installer Docker** :
   ```bash
   sudo apt update
   sudo apt install -y docker-ce docker-ce-cli containerd.io
   ```

6. **Vérifier l'installation** :
   ```bash
   docker --version
   ```

7. **Ajouter l'utilisateur au groupe Docker (optionnel)** :
   ```bash
   sudo usermod -aG docker $USER
   ```
   Déconnectez-vous et reconnectez-vous pour appliquer les changements.

8. **Tester Docker** :
   ```bash
   docker run hello-world
   ```


