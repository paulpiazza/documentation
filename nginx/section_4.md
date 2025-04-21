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

> **A savoir**
> Nginx sélectionne d'abord le bloc `server` selon l'adresse IP et le port (`listen`), puis selon le nom de domain (`server_name`). Si aucune correspondance n'est trouvée, il utilise le serveur par défaut.

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

## Configuration avancée des emplacements (`location`) en Nginx

Un bloc `location` définit une règle pour faire correspondre une partie de l’URL demandée par le client. Selon la correspondance, Nginx applique une configuration spécifique (racine, proxy, redirection, etc.).

### Les modificateurs de `location`

Nginx propose plusieurs modificateurs pour affiner la correspondance :

- **Sans modificateur** : correspondance par préfixe (la plus simple).  
  Exemple : `location /images/ { ... }` correspond à toutes les URL commençant par `/images/`.

- **`=`** : correspondance exacte.  
  Exemple : `location = / { ... }` ne correspond qu’à la page d’accueil `/` exactement.

- **`~`** : correspondance par expression régulière (sensible à la casse).  
  Exemple : `location ~ ^/download/(.+)$ { ... }` correspond à toutes les URL commençant par `/download/` suivies de n’importe quoi (sensible à la casse).

- **`~*`** : expression régulière insensible à la casse.  
  Exemple : `location ~* \.jpg$ { ... }` correspond à toutes les URL se terminant par `.jpg` ou `.JPG`.

- **`^~`** : priorité à la correspondance de préfixe.  
  Si une URL correspond à ce préfixe, Nginx n’essaie pas les expressions régulières.  
  Exemple : `location ^~ /static/ { ... }`

#### Ordre de sélection des emplacements

1. Correspondance exacte (`=`)
2. Correspondance de préfixe la plus longue avec `^~`
3. Expressions régulières (`~`, `~*`) dans l’ordre d’apparition
4. Correspondance de préfixe la plus longue (sans modificateur)
5. Bloc par défaut (`location /`)

### Exemples détaillés

#### Exemple 1

```nginx
server {
    listen 80;
    server_name exemple.fr;

    location = / {
        # Configuration spécifique pour la page d'accueil
    }

    location /images/ {
        # Configuration spécifique pour les images
    }

    location /api/ {
        # Configuration spécifique pour l'API
    }

    location ~ ^/download/(.+)$ {
        # Configuration spécifique pour les téléchargements
    }
}
```

**Explications :**
- `location = /` : s’applique uniquement à la page d’accueil.
- `location /images/` : toutes les URL commençant par `/images/` (ex : `/images/photo.jpg`).
- `location /api/` : toutes les URL commençant par `/api/` (ex : `/api/users`).
- `location ~ ^/download/(.+)$` : toutes les URL commençant par `/download/` suivies de n’importe quoi (ex : `/download/file.zip`), grâce à une expression régulière.

#### Exemple 2

```nginx
server {
    listen 80;
    server_name example.fr;

    location = / {
        # Configuration spécifique pour la page d'accueil
    }

    location ^~ /static/ {
        # Configuration pour les fichiers statiques
    }

    location /api/ {
        # Configuration spécifique pour l'API
    }

    location ~ ^/files/(.+)$ {
        # Configuration spécifique pour les fichiers téléchargeables
    }

    location / {
        # Configuration pour les autres requêtes
    }
}
```

**Explications :**
- `location = /` : page d’accueil uniquement.
- `location ^~ /static/` : priorité à toutes les URL commençant par `/static/` (ex : `/static/js/app.js`). Les expressions régulières ne seront pas testées si ce préfixe correspond.
- `location /api/` : toutes les URL commençant par `/api/`.
- `location ~ ^/files/(.+)$` : expression régulière pour les téléchargements (ex : `/files/report.pdf`).
- `location /` : toutes les autres requêtes (par défaut).

#### Exemple 3

```nginx
server {
    listen 80;
    server_name exemple.fr;

    location = / {
        # Configuration spécifique pour la page d'accueil
    }

    location ^~ /assets/ {
        # Configuration pour les fichiers d'assets (images, CSS, JS)
    }

    location /api/ {
        # Configuration spécifique pour l'API
    }

    location ~* ^/downloads/(.+\.(?:pdf|zip|docx?))$ {
        # Configuration spécifique pour les fichiers téléchargeables (PDF, ZIP, DOC, DOCX)
    }

    location ~ /private/ {
        # Configuration pour les fichiers privés
    }

    location / {
        # Configuration pour les autres requêtes
    }
}
```

**Explications :**
- `location = /` : page d’accueil.
- `location ^~ /assets/` : priorité à toutes les URL commençant par `/assets/` (ex : `/assets/style.css`).
- `location /api/` : toutes les URL commençant par `/api/`.
- `location ~* ^/downloads/(.+\.(?:pdf|zip|docx?))$` : expression régulière insensible à la casse pour les fichiers PDF, ZIP, DOC, DOCX dans `/downloads/`.
- `location ~ /private/` : expression régulière (sensible à la casse) pour `/private/`.
- `location /` : toutes les autres requêtes.

**Conseils :**
- Utilisez `location = /` pour personnaliser la page d’accueil.
- Privilégiez `^~` pour les dossiers statiques afin d’éviter les surcoûts des regex.
- Les expressions régulières sont puissantes mais doivent être utilisées avec parcimonie pour ne pas complexifier la configuration.
- L’ordre et le choix des modificateurs influencent directement le comportement de Nginx.

Pour tester vos règles de `location`, utilisez [nginx.viraptor.info](https://nginx.viraptor.info/).

## La directive `root`

La directive `root` définit le répertoire racine à partir duquel Nginx va chercher les fichiers à servir pour une requête donnée. Elle peut être placée dans différents contextes : global (`server`), ou local à un bloc `location`.  
La valeur de `root` la plus spécifique (dans le bloc `location` le plus précis) est celle qui sera utilisée pour la requête.

**Exemple :**
```nginx
server {
    listen 80;
    server_name exemple.fr;

    root /var/www/html; # racine par défaut

    location /images/ {
        root /data; # racine spécifique pour /images/
    }
}
```
- Une requête pour `/index.html` servira `/var/www/html/index.html`.
- Une requête pour `/images/photo.jpg` servira `/data/images/photo.jpg` 

> **Attention au chemin**
> Le chemin complet est la concaténation de la valeur de `root` et de l’URI demandée.

### Les locations prioritaires

Nginx choisit le bloc `location` le plus approprié selon un ordre de priorité bien défini :

1. **Correspondance exacte (`=`)** : la plus prioritaire, ne correspond qu’à l’URL exacte.
2. **Préfixe prioritaire (`^~`)** : si le préfixe correspond, Nginx n’ira pas tester les expressions régulières.
3. **Expressions régulières (`~`, `~*`)** : testées dans l’ordre d’apparition dans le fichier.
4. **Préfixe simple (sans modificateur)** : la correspondance de préfixe la plus longue.
5. **Bloc par défaut (`location /`)** : utilisé si rien d’autre ne correspond.

**Exemple pédagogique :**
```nginx
server {
    root /var/www/html;

    location = / {
        # Priorité 1 : page d’accueil exacte
    }

    location ^~ /static/ {
        # Priorité 2 : tous les fichiers sous /static/
    }

    location ~* \.(jpg|png)$ {
        # Priorité 3 : toutes les images (regex insensible à la casse)
    }

    location / {
        # Priorité 4 : toutes les autres requêtes
    }
}
```
- Une requête pour `/` utilisera le bloc `location = /`.
- Une requête pour `/static/js/app.js` utilisera le bloc `location ^~ /static/`.
- Une requête pour `/images/photo.JPG` utilisera le bloc regex `location ~* \.(jpg|png)$`.
- Une requête pour `/contact` utilisera le bloc `location /`.

> **À retenir :**  
> Placez la directive `root` dans le bloc `location` le plus précis si vous souhaitez servir des fichiers différents selon le chemin.  
> Comprendre l’ordre de priorité des locations est essentiel pour éviter des comportements inattendus lors de la configuration de Nginx.

## La directive index

La directive `index` définit le fichier par défaut à servir. Exemple :
```nginx
index index.html;
```

La directive `index` permet de définir le ou les fichiers à servir par défaut lorsqu'une requête cible un répertoire (par exemple `/` ou `/blog/`). Si le fichier spécifié existe dans le répertoire, il sera renvoyé automatiquement sans que l'utilisateur ait à préciser son nom dans l'URL.

**Exemple :**
```nginx
server {
    listen 80;
    server_name exemple.fr;

    root /var/www/exemple.fr;
    index index.html;

    location /blog/ {
        index blog.html;
    }
}
```

**Explications :**
- Ici, la racine du site est `/var/www/exemple.fr`.
- Pour une requête vers `http://exemple.fr/`, Nginx cherchera à servir `/var/www/exemple.fr/index.html` (grâce à `index index.html;`).
- Pour une requête vers `http://exemple.fr/blog/`, Nginx cherchera à servir `/var/www/exemple.fr/blog/blog.html` (grâce à `index blog.html;` dans le bloc `location /blog/`).
- Si le fichier spécifié par `index` n'existe pas, Nginx passe au suivant dans la liste (si plusieurs fichiers sont listés), ou retourne une erreur si aucun n'est trouvé.

> **À retenir :**  
> Placez la directive `index` dans le bloc le plus précis pour personnaliser le fichier d'accueil selon le chemin demandé.  
> Vous pouvez spécifier plusieurs fichiers, séparés par des espaces, pour définir un ordre de priorité.

## La directive try_files

La directive `try_files` permet à Nginx de tester plusieurs chemins de fichiers pour une même requête, dans l'ordre, et de servir le premier fichier trouvé. Si aucun fichier n'est trouvé, une action de secours (comme retourner une erreur ou rediriger) peut être définie.

**Syntaxe :**
```nginx
try_files chemin1 chemin2 ... action_de_secours;
```

**Exemple :**
```nginx
location / {
    try_files $uri $uri/ =404;
}
```
- `$uri` : teste si le fichier demandé existe tel quel.
- `$uri/` : teste si un dossier correspondant existe (utile pour les répertoires).
- `=404` : si rien n'est trouvé, retourne une erreur 404.

**Utilisations courantes :**
- Servir un fichier statique si présent, sinon passer à un index ou à un script (ex : `index.php`).
- Gérer les routes d'applications SPA (Single Page Application) en renvoyant toujours `index.html` si le fichier n'existe pas.

**Exemple avancé :**
```nginx
location / {
    try_files $uri $uri/ /index.html;
}
```
Ici, si le fichier ou le dossier n'existe pas, Nginx sert `/index.html` (pratique pour les applications front-end modernes).

> **À retenir :**  
> `try_files` est très utile pour contrôler précisément le comportement de Nginx selon la présence ou non de fichiers sur le disque, et pour éviter des erreurs 404 non désirées.

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


