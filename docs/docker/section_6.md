---
title: Persister les données
description: Learn Docker
order: 6
---

## La persistance
La persistance est essentielle pour conserver les données générées ou utilisées par un conteneur Docker. Sans persistance, toutes les données seraient perdues à chaque redémarrage ou suppression du conteneur. Cela est particulièrement important pour les bases de données ou les applications qui génèrent des fichiers.

 Une base de données MySQL dans un conteneur Docker doit conserver ses données même après un redémarrage. Cela peut être réalisé en utilisant un volume Docker.

## les bind mounts
Les bind mounts permettent de connecter un répertoire ou un fichier spécifique de l'hôte à un conteneur. Cela signifie que les modifications effectuées dans ce répertoire sur l'hôte sont immédiatement visibles dans le conteneur, et vice versa. C'est utile pour le développement, car vous pouvez modifier le code source sur votre machine et voir les changements en temps réel dans le conteneur.

 
```bash
docker run -v /chemin/local:/chemin/conteneur my-node-app
```
Ici, `/chemin/local` est un répertoire sur l'hôte, et `/chemin/conteneur` est son équivalent dans le conteneur.

## Utilisation d'un bind mount pour le serveur Nodejs
Lors du développement d'une application Node.js, un bind mount peut être utilisé pour partager le répertoire contenant le code source entre l'hôte et le conteneur. Cela permet de tester les modifications sans avoir à reconstruire l'image Docker à chaque fois.


```bash
docker run -v $(pwd):/usr/src/app -w /usr/src/app node:14 node app.js
```
Cela monte le répertoire courant dans `/usr/src/app` du conteneur et exécute le fichier `app.js`.

## les volumes
Contrairement aux bind mounts, les volumes sont gérés directement par Docker. Ils sont stockés dans un emplacement spécifique sur l'hôte, mais cet emplacement est abstrait pour l'utilisateur. Les volumes sont idéaux pour les données persistantes, car ils offrent une meilleure isolation et sont plus faciles à sauvegarder ou à migrer.


```bash
docker volume create my-volume
docker run -v my-volume:/data my-app
```

## paratger des volumes entre des conteneurs
Les volumes peuvent être partagés entre plusieurs conteneurs. Par exemple, si vous avez plusieurs conteneurs qui doivent accéder aux mêmes fichiers ou données, vous pouvez utiliser un volume partagé pour éviter la duplication et garantir la cohérence des données.


```bash
docker run -v shared-volume:/data conteneur1
docker run -v shared-volume:/data conteneur2
```

## effectuer des sauvegardes
Pour sauvegarder un volume, vous pouvez le monter dans un conteneur temporaire et copier son contenu vers un emplacement sécurisé sur l'hôte ou un autre système. Cela garantit que vos données sont protégées en cas de problème.


```bash
docker run --rm -v my-volume:/data -v $(pwd):/backup ubuntu tar cvf /backup/backup.tar /data
```

## Volume pour une base de données
Les bases de données comme MySQL ou PostgreSQL utilisent souvent des volumes pour stocker leurs données. Cela garantit que les données restent disponibles même si le conteneur de la base de données est supprimé ou recréé.


```bash
docker run -v db-data:/var/lib/mysql mysql
```

## utiliser TMPFS
TMPFS est un type de volume qui stocke les données directement en mémoire (RAM). Cela le rend extrêmement rapide, mais les données sont perdues lorsque le conteneur s'arrête. TMPFS est utile pour des données temporaires ou sensibles qui ne doivent pas être écrites sur le disque.


```bash
docker run --tmpfs /data my-app
```

