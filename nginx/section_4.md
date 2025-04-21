---
title: Utilisation en tant que serveur Web
description: Learn Nginx
order: 4
---

## La sélection de serveurs

Nginx peut sélectionner un serveur en fonction du nom de domaine ou de l'adresse IP. Cela est défini dans les blocs `server`.

### Explication détaillée de `server_name` et `listen`

Dans Nginx, chaque bloc `server` représente une configuration de serveur virtuel. Nginx utilise principalement deux directives pour sélectionner le bon serveur à utiliser lors d'une requête :

- **`listen`** : Spécifie l'adresse IP et le port sur lesquels le serveur doit écouter.  
  Exemple :
  ```nginx
  server {
      listen 80;
      # ...autres directives...
  }
  ```
  Ici, le serveur écoute sur le port 80 (HTTP) pour toutes les adresses IP.

  On peut aussi préciser une adresse IP :
  ```nginx
  server {
      listen 192.168.1.10:8080;
      # ...autres directives...
  }
  ```
  Ce serveur ne répondra qu'aux requêtes envoyées à l'adresse 192.168.1.10 sur le port 8080.

- **`server_name`** : Définit le ou les noms de domaine associés à ce serveur virtuel.  
  Exemple :
  ```nginx
  server {
      listen 80;
      server_name www.exemple.com exemple.com;
      # ...autres directives...
  }
  ```
  Ce serveur répondra aux requêtes HTTP envoyées à `www.exemple.com` ou `exemple.com`.

```nginx
server {
    listen 80;
    server_name monsite.fr www.monsite.fr;
    root /var/www/monsite;
    index index.html;
}
server {
    listen 80;
    server_name api.monsite.fr;
    root /var/www/api;
    index index.html;
}
```
Dans cet exemple, Nginx choisira le bloc `server` en fonction du nom de domaine demandé par le client. Si la requête est pour `api.monsite.fr`, le second bloc sera utilisé.

> **Résumé** :  
> - `listen` filtre selon l'adresse IP et le port.  
> - `server_name` filtre selon le nom de domaine demandé.  
> Nginx utilise d'abord `listen`, puis `server_name` pour déterminer le bon bloc `server`.

### Exemple : sélection de serveurs avec `listen` et `server_name`

Voici plusieurs exemples illustrant comment Nginx choisit le bloc `server` approprié selon l'adresse IP, le port et le nom de domaine :

```nginx
# Serveur par défaut
server {
    listen 80 default_server;
    server_name _;
}

# Serveur pour example.fr
server {
    listen 80;
    server_name example.fr;
}

# Serveur pour example.org et www.example.org
server {
    listen 80;
    server_name example.org www.example.org;
}

# Serveur pour sub.example.com sur une adresse IP spécifique
server {
    listen 192.168.1.100:80;
    server_name sub.example.com;
}
```

#### Explications :

- **Serveur par défaut** :  
  Le bloc avec `listen 80 default_server;` et `server_name _;` est utilisé si aucune autre configuration ne correspond à la requête. Il sert de "catch-all" pour toutes les requêtes qui n'ont pas de correspondance explicite.  
  > Pratique pour afficher une page d'accueil générique ou un message d'erreur personnalisé.

- **Serveur pour `example.fr`** :  
  Ce bloc répond uniquement aux requêtes envoyées à `example.fr` sur le port 80.

- **Serveur pour `example.org` et `www.example.org`** :  
  Ce bloc répond aux deux noms de domaine, ce qui permet de gérer les variantes avec ou sans `www`.

- **Serveur pour `sub.example.com` sur une IP spécifique** :  
  Ce bloc ne répond qu'aux requêtes adressées à `192.168.1.100` sur le port 80 et pour le nom de domaine `sub.example.com`.  
  > Utile pour héberger des sous-domaines sur des serveurs ou interfaces réseau différents.

Nginx sélectionne d'abord le bloc `server` selon l'adresse IP et le port (`listen`), puis selon le nom de domaine (`server_name`). Si aucune correspondance n'est trouvée, il utilise le serveur par défaut.

### Utilisation d'expressions régulières avec `server_name`

Il est possible d'utiliser des expressions régulières (regex) dans la directive `server_name` pour faire correspondre dynamiquement plusieurs sous-domaines ou motifs de noms de domaine.  
Pour cela, il faut utiliser le préfixe `~` (sensible à la casse) ou `~*` (insensible à la casse) devant le motif.

Exemple :
```nginx
server {
    listen 80;
    server_name ~^www\d+\.example\.com$;
    root /var/www/example;
}
```
Ce bloc répondra à tous les domaines du type `www1.example.com`, `www2.example.com`, etc.

> **Remarque :**  
> - Les blocs `server` utilisant une regex sont évalués après les correspondances exactes et génériques.
> - Il est recommandé de limiter l'usage des regex à des cas spécifiques pour éviter toute ambiguïté ou surcharge de configuration.

Pour plus de détails, consultez la [documentation officielle Nginx sur server_name](https://nginx.org/en/docs/http/server_names.html).

### Bloc "catch-all" (attrape-tout)

Un bloc "catch-all" (attrape-tout) permet de gérer toutes les requêtes qui ne correspondent à aucun autre bloc `server`. Il est généralement utilisé pour afficher une page d'information ou un message d'erreur personnalisé pour les domaines inconnus.

Exemple :
```nginx
server {
    listen 80 default_server;
    server_name _;
    return 444;
}
```
Dans cet exemple, toutes les requêtes qui n'ont pas de correspondance explicite avec un autre bloc `server` recevront le code HTTP 444 (connexion fermée sans réponse).  
On peut aussi personnaliser la réponse :
```nginx
server {
    listen 80 default_server;
    server_name _;
    root /var/www/catchall;
    index index.html;
}
```
Ici, une page statique sera servie pour toutes les requêtes non reconnues.

> **Astuce :**  
> Le bloc "catch-all" est souvent combiné avec `default_server` et `server_name _;` pour garantir qu'aucune requête ne reste sans réponse contrôlée.

### Option `default_server`

L'option `default_server` dans la directive `listen` indique à Nginx quel bloc `server` doit être utilisé par défaut si aucune autre configuration ne correspond à la requête (par exemple, si le nom de domaine n'est pas reconnu).  
Un seul bloc `server` par port peut être marqué comme `default_server`.

Exemple :
```nginx
server {
    listen 80 default_server;
    server_name _;
    root /var/www/default;
    index index.html;
}
```
Dans cet exemple, si une requête arrive sur le port 80 sans correspondre à un autre `server_name`, ce bloc sera utilisé.

> **À retenir :**  
> - `default_server` permet de définir un serveur de secours ou générique.
> - Pratique pour afficher une page d'accueil par défaut ou un message d'erreur personnalisé.

## Configuration des emplacements avec location

La directive `location` permet de définir des règles pour gérer les requêtes. Exemple :
```nginx
location /images/ {
    root /data;
}
```



## La directive root

La directive `root` spécifie le répertoire racine pour les fichiers. Exemple :
```nginx
root /var/www/html;
```



## La directive index

La directive `index` définit le fichier par défaut à servir. Exemple :
```nginx
index index.html;
```



## La directive try_files

La directive `try_files` permet de tester plusieurs fichiers avant de retourner une réponse. Exemple :
```nginx
try_files $uri $uri/ =404;
```



## Les variables

Nginx fournit des variables comme `$uri`, `$host`, etc., pour personnaliser les configurations.



## Retourner des codes et rediriger

Utilisez `return` pour retourner un code HTTP ou rediriger :
```nginx
return 301 https://example.com;
```



## Les réécritures d'URI

La directive `rewrite` permet de modifier les URI. Exemple :
```nginx
rewrite ^/old/(.*)$ /new/$1 permanent;
```



## Les réécritures de réponses HTTP

Pour modifier les réponses HTTP, utilisez des modules comme `sub_filter`.



## La directive error_page

La directive `error_page` permet de personnaliser les pages d'erreur. Exemple :
```nginx
error_page 404 /404.html;
```


