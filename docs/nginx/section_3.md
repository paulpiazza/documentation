---
title: Les bases de Nginx
description: Learn Nginx
order: 3
---

## Les bases en NGINX

Nginx est un serveur web performant, utilisé pour servir des sites statiques, des proxys, etc.

### Fonctionnement de Nginx

Nginx utilise une architecture événementielle non bloquante, ce qui signifie qu'il peut gérer un grand nombre de connexions simultanées avec une faible utilisation des ressources. Contrairement à un modèle basé sur des threads ou des processus, Nginx repose sur une boucle d'événements asynchrone pour traiter les requêtes.

### Comparaison avec Apache

- **Apache** : Utilise un modèle basé sur des processus ou des threads. Chaque requête peut nécessiter un processus ou un thread dédié, ce qui peut entraîner une consommation élevée de mémoire sous une forte charge.
- **Nginx** : Utilise une architecture événementielle asynchrone, ce qui le rend plus adapté aux charges élevées et aux sites nécessitant une haute performance.

### Termes clés

- **Serveur web (Web Server)** : Un logiciel qui sert des fichiers (HTML, CSS, JS, etc.) aux navigateurs des utilisateurs.
- **Architecture événementielle (Event-driven Architecture)** : Un modèle où les événements (comme les requêtes HTTP) sont gérés de manière asynchrone, sans bloquer les autres opérations.
- **Processus maître (Master Process)** : Le processus principal de Nginx qui gère la configuration et crée les processus travailleurs.
- **Processus travailleur (Worker Process)** : Les processus qui gèrent les requêtes des utilisateurs.
- **Proxy (Proxy)** : Un intermédiaire entre le client et un autre serveur, utilisé pour rediriger les requêtes ou équilibrer la charge.

### Exemple de fonctionnement

Supposons que vous configurez Nginx pour servir un site web statique et agir comme un proxy pour une API backend.

```nginx
http {
    server {
        listen 80;
        server_name example.com;

        # Servir des fichiers statiques
        location / {
            root /var/www/html;
            index index.html;
        }

        # Proxy pour une API backend
        location /api/ {
            proxy_pass http://backend_server:8080;
            proxy_set_header Host $host;
            proxy_set_header X-Real-IP $remote_addr;
        }
    }
}
```

1. **Fichiers statiques** : Les requêtes vers `http://example.com/` servent les fichiers depuis `/var/www/html`. Par exemple, une requête pour `/index.html` renverra le fichier correspondant.
2. **Proxy API** : Les requêtes vers `http://example.com/api/` sont redirigées vers un serveur backend à `http://backend_server:8080`. Les en-têtes HTTP sont ajustés pour transmettre les informations du client.

Cet exemple montre comment Nginx peut gérer plusieurs rôles (serveur de fichiers statiques et proxy) dans une seule configuration.

## Processus et Threads dans Nginx

Nginx utilise une architecture basée sur des **processus** plutôt que des **threads**, ce qui le distingue de certains autres serveurs web comme Apache.

### Processus

- **Définition** : Un processus est une instance indépendante d'un programme en cours d'exécution. Chaque processus dispose de sa propre mémoire et de ses ressources.
- **Dans Nginx** :
  - Nginx utilise un **processus maître** et plusieurs **processus travailleurs**.
  - Le processus maître gère la configuration et supervise les processus travailleurs.
  - Les processus travailleurs gèrent les connexions des clients et traitent les requêtes.

- **Avantages** :
  - Isolation : Si un processus travailleur échoue, les autres continuent de fonctionner.
  - Sécurité : Chaque processus est isolé, ce qui limite les risques en cas de vulnérabilité.

### Threads

- **Définition** : Un thread est une unité d'exécution légère qui partage la mémoire et les ressources avec d'autres threads dans le même processus.
- **Pourquoi Nginx n'utilise pas de threads** :
  - Les threads partagent la mémoire, ce qui peut entraîner des problèmes de concurrence et de synchronisation.
  - L'utilisation de processus permet une meilleure stabilité et une gestion plus simple des ressources.

### Comparaison entre Processus et Threads

| **Aspect**          | **Processus**                          | **Threads**                          |
|----------------------|----------------------------------------|---------------------------------------|
| **Mémoire**          | Chaque processus a sa propre mémoire. | Les threads partagent la même mémoire. |
| **Isolation**        | Forte isolation entre processus.      | Faible isolation entre threads.       |
| **Performance**      | Plus lourd en termes de ressources.   | Plus léger et rapide à créer.         |
| **Sécurité**         | Plus sécurisé grâce à l'isolation.    | Moins sécurisé en cas de bogue.       |

### Pourquoi Nginx utilise des processus ?

1. **Stabilité** : Si un processus travailleur échoue, le processus maître peut le redémarrer sans affecter les autres.
2. **Simplicité** : La gestion des processus est plus simple que celle des threads, notamment pour éviter les problèmes de concurrence.
3. **Performance** : Grâce à son architecture événementielle, Nginx peut gérer des milliers de connexions simultanées avec un nombre limité de processus.

## Start, stop, reload de la configuration

Utilisez les commandes suivantes pour gérer Nginx :

Avec `systemctl` :
```bash
sudo systemctl start nginx   # Démarre le service Nginx
sudo systemctl stop nginx    # Arrête le service Nginx
sudo systemctl reload nginx  # Recharge la configuration de Nginx sans arrêter le service
```

Avec `nginx -s` :
```bash
sudo nginx -s stop           # Arrête immédiatement le service Nginx, interrompant les connexions en cours
sudo nginx -s reload         # Recharge la configuration de Nginx
sudo nginx -s quit           # Arrête Nginx proprement après avoir terminé les connexions en cours
```

Avec `service` :
```bash
sudo service nginx start     # Démarre le service Nginx
sudo service nginx stop      # Arrête le service Nginx
sudo service nginx reload    # Recharge la configuration de Nginx
```

## Introduction aux directives et aux contextes

Les directives sont des instructions dans la configuration de Nginx. Elles sont utilisées pour définir le comportement du serveur.

### Types de directives

1. **Directives simples** : Ce sont des instructions qui se terminent par un point-virgule (`;`).
     ```nginx
     listen 80;
     server_name example.com;
     ```

2. **Directives de blocs** : Ce sont des instructions qui contiennent d'autres directives entre accolades (`{}`).
     ```nginx
     server {
         listen 80;
         server_name example.com;

         location / {
             root /var/www/html;
         }
     }
     ```

### Principaux contextes

Nginx organise sa configuration en une hiérarchie de contextes. Chaque contexte a un rôle spécifique et peut contenir des directives ou d'autres contextes imbriqués. Voici l'arborescence des principaux contextes et leur explication avec des exemples :

```
main
├── events
├── http
│   ├── server
│   │   ├── location
│   └── upstream
├── stream
```

**Contexte `main`**
Le contexte principal, situé au sommet de la hiérarchie, contient des directives globales qui affectent l'ensemble du fonctionnement de Nginx.

  ```nginx
  worker_processes 4;          # Nombre de processus travailleurs
  error_log /var/log/nginx/error.log;  # Fichier de log des erreurs
  pid /var/run/nginx.pid;      # Fichier PID
  ```

**Contexte `events`**
Ce contexte configure la gestion des événements, comme les connexions réseau.

  ```nginx
  events {
      worker_connections 1024;  # Nombre maximum de connexions simultanées par processus travailleur
      use epoll;                # Méthode d'événement (epoll pour Linux)
  }
  ```

**Contexte `http`**
Ce contexte est utilisé pour configurer les paramètres HTTP globaux et les serveurs web.

  ```nginx
  http {
      include mime.types;               # Inclut les types MIME
      default_type application/json;    # Type MIME par défaut
      sendfile on;                      # Active l'envoi efficace des fichiers
  }
  ```

**Contexte `server`**
Un sous-contexte de `http`, utilisé pour définir les serveurs virtuels.

  ```nginx
  server {
      listen 80;                        # Écoute sur le port 80
      server_name example.com;          # Nom de domaine du serveur

      location / {
          root /var/www/html;           # Répertoire racine
          index index.html;             # Fichier par défaut
      }
  }
  ```

**Contexte `location`**
Un sous-contexte de `server`, utilisé pour configurer des règles spécifiques à des chemins ou des URL.

  ```nginx
  location /api/ {
      proxy_pass http://backend_server:8080;  # Redirige vers un serveur backend
      proxy_set_header Host $host;           # Définit l'en-tête Host
      proxy_set_header X-Real-IP $remote_addr;  # Transmet l'adresse IP du client
  }
  ```

**Contexte `upstream`**
Un sous-contexte de `http`, utilisé pour définir des groupes de serveurs backend.

  ```nginx
  upstream backend_servers {
      server backend1.example.com weight=3;  # Serveur avec un poids de 3
      server backend2.example.com;          # Serveur avec un poids par défaut
  }

  server {
      location / {
          proxy_pass http://backend_servers;  # Utilise le groupe upstream
      }
  }
  ```

**Contexte `stream`**
Ce contexte est utilisé pour configurer les connexions TCP/UDP.

  ```nginx
  stream {
      server {
          listen 3306;                       # Écoute sur le port 3306 (exemple pour MySQL)
          proxy_pass database_server:3306;   # Redirige vers un serveur de base de données
      }
  }
  ```

### Pourquoi cette organisation ?

Cette hiérarchie permet de structurer la configuration de manière claire et modulaire. Chaque contexte a un rôle bien défini, ce qui facilite la gestion et la maintenance des configurations complexes. Les contextes imbriqués permettent également de définir des paramètres globaux tout en autorisant des exceptions ou des personnalisations locales.

### Héritage des configurations

Les directives dans les contextes enfants héritent des paramètres définis dans les contextes parents, sauf si elles sont redéfinies.

- **Exemple d'héritage** :
  ```nginx
  http {
      keepalive_timeout 65;

      server {
          listen 80;
          server_name example.com;

          location / {
              # Hérite de keepalive_timeout défini dans http
              root /var/www/html;
          }
      }
  }
  ```

- **Exemple de redéfinition** :
  ```nginx
  http {
      keepalive_timeout 65;

      server {
          listen 80;
          server_name example.com;

          location / {
              keepalive_timeout 30; # Redéfinit la valeur pour ce contexte
              root /var/www/html;
          }
      }
  }
  ```

## L'architecture de Nginx

Nginx utilise une architecture événementielle, avec des processus maîtres et des processus travailleurs.

### Structure des fichiers de configuration sous Debian

Sous Debian, les fichiers de configuration de Nginx sont situés dans le répertoire `/etc/nginx`. Voici une description des principaux fichiers et répertoires :

1. **`/etc/nginx/nginx.conf`**  
   - **Description** : Le fichier principal de configuration de Nginx. Il inclut les directives globales et les références aux autres fichiers de configuration.
   - **Exemple** :
     ```nginx
     user www-data;
     worker_processes auto;
     pid /run/nginx.pid;
     include /etc/nginx/modules-enabled/*.conf;

     events {
         worker_connections 768;
     }

     http {
         include /etc/nginx/mime.types;
         default_type application/octet-stream;

         include /etc/nginx/conf.d/*.conf;
         include /etc/nginx/sites-enabled/*;
     }
     ```

2. **`/etc/nginx/mime.types`**  
   - **Description** : Définit les types MIME utilisés pour les réponses HTTP. Par exemple, il associe les extensions de fichiers à leurs types MIME.
   - **Exemple** :
     ```nginx
     types {
         text/html html;
         text/css css;
         application/javascript js;
     }
     ```

3. **`/etc/nginx/sites-available/`**  
   - **Description** : Contient les fichiers de configuration pour les serveurs virtuels. Ces fichiers ne sont pas activés par défaut.
   - **Exemple** : Un fichier typique pour un site :
     ```nginx
     server {
         listen 80;
         server_name example.com;
         root /var/www/example;

         location / {
             index index.html;
         }
     }
     ```

4. **`/etc/nginx/sites-enabled/`**  
   - **Description** : Contient des liens symboliques vers les fichiers de configuration des serveurs virtuels situés dans `sites-available/`. Seuls les fichiers dans ce répertoire sont activés.
   - **Commande pour activer un site** :
     ```bash
     sudo ln -s /etc/nginx/sites-available/example.com /etc/nginx/sites-enabled/
     ```

5. **`/etc/nginx/conf.d/`**  
   - **Description** : Contient des fichiers de configuration supplémentaires pour des paramètres globaux ou spécifiques. Ces fichiers sont inclus automatiquement par `nginx.conf`.
   - **Exemple** : Un fichier pour activer la compression Gzip :
     ```nginx
     gzip on;
     gzip_types text/plain application/json;
     ```

6. **`/etc/nginx/snippets/`**  
   - **Description** : Contient des fragments de configuration réutilisables. Ces snippets peuvent être inclus dans d'autres fichiers de configuration.
   - **Exemple** : Un snippet pour configurer HTTPS :
     ```nginx
     ssl_certificate /etc/ssl/certs/example.com.crt;
     ssl_certificate_key /etc/ssl/private/example.com.key;
     ```

7. **`/etc/nginx/modules-enabled/`**  
   - **Description** : Contient des fichiers de configuration pour les modules dynamiques de Nginx. Ces fichiers sont inclus automatiquement par `nginx.conf`.
   - **Exemple** : Un fichier pour activer un module :
     ```nginx
     load_module modules/ngx_http_geoip_module.so;
     ```

## Exemple de configuration d'un serveur virtuel

Voici une explication détaillée de la configuration suivante :

```nginx
server {
    listen 80 default_server;
    listen [::]:80 default_server;

    root /var/www/html;

    index index.html index.htm index.nginx-debian.html;

    server_name _;

    location / {
        try_files $uri $uri/ =404;
    }
}
```

1. **`listen 80 default_server;`**
   - **Description** : Configure le serveur pour écouter sur le port 80 (HTTP) et le définit comme serveur par défaut.
   - **Utilité** : Si aucune autre configuration ne correspond à une requête, ce serveur sera utilisé.

2. **`listen [::]:80 default_server;`**
   - **Description** : Active le support IPv6 pour le port 80 et le définit également comme serveur par défaut.

3. **`root /var/www/html;`**
   - **Description** : Définit le répertoire racine où les fichiers du site web sont stockés.
   - **Exemple** : Une requête pour `/index.html` servira le fichier `/var/www/html/index.html`.

4. **`index index.html index.htm index.nginx-debian.html;`**
   - **Description** : Spécifie les fichiers index par défaut à utiliser lorsqu'une requête est faite pour un répertoire.
   - **Exemple** : Une requête pour `/` servira `/var/www/html/index.html` si ce fichier existe.

5. **`server_name _;`**
   - **Description** : Accepte toutes les requêtes, quel que soit le nom de domaine utilisé.
   - **Utilité** : Utile pour un serveur par défaut ou lorsque le nom de domaine n'est pas spécifié.

6. **`location / { try_files $uri $uri/ =404; }`**
   - **Description** : Configure le comportement pour les requêtes vers `/` :
     - **`$uri`** : Vérifie si le fichier demandé existe.
     - **`$uri/`** : Vérifie si un répertoire correspondant existe.
     - **`=404`** : Retourne une erreur 404 si aucun fichier ou répertoire correspondant n'est trouvé.
   - **Exemple** : Une requête pour `/about.html` servira `/var/www/html/about.html` si ce fichier existe, sinon une erreur 404 sera retournée.

## Les modules de Nginx

Nginx est modulaire, ce qui signifie qu'il peut être étendu avec des modules pour ajouter des fonctionnalités spécifiques. Voici une liste des principaux modules et leurs usages :

**Module HTTP**
Le module HTTP est le plus utilisé. Il permet à Nginx de gérer les requêtes HTTP et HTTPS.

- **Fonctionnalités principales** :
  - Gestion des fichiers statiques.
  - Proxy inverse pour les serveurs backend.
  - Compression Gzip.
  - Réécriture d'URL.
  - Gestion des caches.

  ```nginx
  http {
      server {
          listen 80;
          server_name example.com;

          location / {
              root /var/www/html;
              index index.html;
          }
      }
  }
  ```

**Module Mail**
Le module Mail permet à Nginx de fonctionner comme un proxy pour les protocoles de messagerie (IMAP, POP3, SMTP).

- **Fonctionnalités principales** :
  - Proxy pour les serveurs de messagerie.
  - Authentification des utilisateurs.
  - Support des connexions sécurisées (SSL/TLS).

  ```nginx
  mail {
      server {
          listen 143;
          protocol imap;
          proxy_pass mail_backend:143;
      }
  }
  ```

**Module Stream**
Le module Stream est utilisé pour gérer les connexions TCP et UDP, comme celles des bases de données ou des services SSH.

- **Fonctionnalités principales** :
  - Proxy pour les connexions TCP/UDP.
  - Équilibrage de charge pour les services non-HTTP.
  - Support des connexions sécurisées (SSL/TLS).

  ```nginx
  stream {
      server {
          listen 3306;
          proxy_pass database_server:3306;
      }
  }
  ```

**Module GeoIP**
Le module GeoIP permet de déterminer la localisation géographique des utilisateurs en fonction de leur adresse IP.

- **Fonctionnalités principales** :
  - Détection de la localisation des utilisateurs.
  - Redirection ou personnalisation du contenu en fonction de la localisation.
  - Support des bases de données GeoIP (GeoLite2).

  ```nginx
  http {
      geoip_country /usr/share/GeoIP/GeoIP.dat;

      server {
          listen 80;
          server_name example.com;

          location / {
              if ($geoip_country_code = "FR") {
                  return 302 https://fr.example.com;
              }
          }
      }
  }
  ```

## Noms des modules dans Nginx

Nginx est modulaire et supporte plusieurs modules pour étendre ses fonctionnalités. Voici une liste des principaux modules disponibles :

### Modules HTTP
- **ngx_http_core_module** : Module de base pour gérer les requêtes HTTP.
- **ngx_http_ssl_module** : Support des connexions HTTPS.
- **ngx_http_gzip_module** : Compression des réponses HTTP avec Gzip.
- **ngx_http_proxy_module** : Proxy inverse pour rediriger les requêtes vers des serveurs backend.
- **ngx_http_rewrite_module** : Réécriture et redirection des URL.
- **ngx_http_headers_module** : Gestion des en-têtes HTTP.
- **ngx_http_geoip_module** : Détection de la localisation géographique des utilisateurs.
- **ngx_http_fastcgi_module** : Support des applications FastCGI (comme PHP-FPM).
- **ngx_http_uwsgi_module** : Support des applications uWSGI.
- **ngx_http_scgi_module** : Support des applications SCGI.
- **ngx_http_stub_status_module** : Affichage des statistiques sur l'état de Nginx.

### Modules Stream
- **ngx_stream_core_module** : Module de base pour gérer les connexions TCP/UDP.
- **ngx_stream_ssl_module** : Support des connexions sécurisées (SSL/TLS) pour les flux TCP/UDP.
- **ngx_stream_proxy_module** : Proxy pour les connexions TCP/UDP.
- **ngx_stream_geoip_module** : Détection de la localisation géographique pour les flux TCP/UDP.

### Modules Mail
- **ngx_mail_core_module** : Module de base pour les protocoles de messagerie (IMAP, POP3, SMTP).
- **ngx_mail_ssl_module** : Support des connexions sécurisées (SSL/TLS) pour les protocoles de messagerie.
- **ngx_mail_auth_http_module** : Authentification des utilisateurs via un backend HTTP.

### Modules additionnels
- **ngx_http_geoip2_module** : Version améliorée du module GeoIP utilisant les bases de données GeoLite2.
- **ngx_http_image_filter_module** : Manipulation des images (redimensionnement, conversion).
- **ngx_http_xslt_filter_module** : Transformation des réponses XML avec XSLT.
- **ngx_http_perl_module** : Intégration avec Perl pour des scripts dynamiques.



### Validation de la configuration Nginx

Lorsque vous testez la configuration de Nginx avec la commande `sudo nginx -t`, vous pouvez obtenir les messages suivants :

1. **Message :**
   ```
   nginx: the configuration file /etc/nginx/nginx.conf syntax is ok
   nginx: configuration file /etc/nginx/nginx.conf test is successful
   ```
   - **Explication :**
     - Le premier message indique que la syntaxe du fichier `/etc/nginx/nginx.conf` est correcte.
     - Le second message confirme que la configuration est valide et que Nginx peut être redémarré ou rechargé sans problème.

2. **Message d'erreur :**
   ```
   nginx: [emerg] unknown directive "invalid_directive" in /etc/nginx/nginx.conf:10
   nginx: configuration file /etc/nginx/nginx.conf test failed
   ```
   - **Explication :**
     - Une directive inconnue ou une erreur de syntaxe a été détectée à la ligne 10 du fichier `/etc/nginx/nginx.conf`.
     - Vous devez corriger l'erreur avant de recharger ou redémarrer Nginx.


## Explication détaillée du fichier `nginx.conf`

Voici une explication ligne par ligne du fichier `nginx.conf` :

```nginx
user www-data;
```
- **Description** : Définit l'utilisateur sous lequel Nginx s'exécute.  
- **Par défaut** : `www-data` est un utilisateur système avec des permissions limitées pour des raisons de sécurité.

```nginx
worker_processes auto;
```
- **Description** : Définit le nombre de processus travailleurs.  
- **Valeur `auto`** : Ajuste automatiquement le nombre de processus en fonction du nombre de CPU disponibles.

```nginx
pid /run/nginx.pid;
```
- **Description** : Spécifie l'emplacement du fichier PID (Process ID) pour le processus maître de Nginx.  
- **Utilité** : Permet de gérer le processus maître (par exemple, pour le redémarrer ou l'arrêter).

```nginx
include /etc/nginx/modules-enabled/*.conf;
```
- **Description** : Inclut les fichiers de configuration des modules dynamiques activés.  
- **Exemple** : Les modules comme `ngx_http_geoip2_module` ou `ngx_stream_module` sont activés ici.


### Section `events`

```nginx
events {
    worker_connections 768;
}
```
- **`worker_connections`** : Définit le nombre maximum de connexions simultanées qu'un processus travailleur peut gérer.  
- **Valeur `768`** : Permet à chaque processus travailleur de gérer jusqu'à 768 connexions simultanées.

### Section `http`

```nginx
http {
    sendfile on;
    tcp_nopush on;
    types_hash_max_size 2048;

    include /etc/nginx/mime.types;
    default_type application/octet-stream;

    ssl_protocols TLSv1 TLSv1.1 TLSv1.2 TLSv1.3;
    ssl_prefer_server_ciphers on;

    access_log /var/log/nginx/access.log;
    error_log /var/log/nginx/error.log;

    gzip on;

    include /etc/nginx/conf.d/*.conf;
    include /etc/nginx/sites-enabled/*;
}
```

**`sendfile on;`**
- **Description** : Active l'envoi efficace des fichiers en utilisant `sendfile()`, une méthode système pour améliorer les performances.  
- **Utilité** : Réduit la surcharge CPU en évitant la copie inutile des données entre le noyau et l'espace utilisateur.

**`tcp_nopush on;`**
- **Description** : Optimise l'envoi des paquets TCP en regroupant les données avant de les envoyer.  
- **Utilité** : Réduit la latence pour les grandes réponses HTTP.

**`types_hash_max_size 2048;`**
- **Description** : Définit la taille maximale de la table de hachage utilisée pour les types MIME.  
- **Utilité** : Améliore les performances pour les configurations avec de nombreux types MIME.

**`include /etc/nginx/mime.types;`**
- **Description** : Inclut un fichier contenant les associations entre extensions de fichiers et types MIME.  
- **Exemple** : Associe `.html` à `text/html` ou `.css` à `text/css`.

**`default_type application/octet-stream;`**
- **Description** : Définit le type MIME par défaut pour les fichiers dont l'extension n'est pas reconnue.  
- **Valeur par défaut** : `application/octet-stream` (fichier binaire générique).

**`ssl_protocols TLSv1 TLSv1.1 TLSv1.2 TLSv1.3;`**
- **Description** : Définit les protocoles SSL/TLS supportés.  
- **Utilité** : Désactive les protocoles obsolètes comme SSLv3 pour des raisons de sécurité.

**`ssl_prefer_server_ciphers on;`**
- **Description** : Préfère les chiffrements définis par le serveur plutôt que ceux proposés par le client.  
- **Utilité** : Renforce la sécurité en utilisant des chiffrements plus robustes.

**`access_log /var/log/nginx/access.log;`**
- **Description** : Spécifie le fichier où sont enregistrées les requêtes HTTP reçues par Nginx.  
- **Utilité** : Utile pour l'analyse du trafic et le dépannage.

**`error_log /var/log/nginx/error.log;`**
- **Description** : Spécifie le fichier où sont enregistrées les erreurs rencontrées par Nginx.  
- **Utilité** : Aide à identifier et résoudre les problèmes.

**`gzip on;`**
- **Description** : Active la compression Gzip pour réduire la taille des réponses HTTP.  
- **Utilité** : Améliore les temps de chargement des pages en réduisant la quantité de données transférées.

**`include /etc/nginx/conf.d/*.conf;`**
- **Description** : Inclut les fichiers de configuration supplémentaires situés dans `/etc/nginx/conf.d/`.  
- **Utilité** : Permet de modulariser la configuration.

**`include /etc/nginx/sites-enabled/*;`**
- **Description** : Inclut les fichiers de configuration des sites activés situés dans `/etc/nginx/sites-enabled/`.  
- **Utilité** : Active les configurations des serveurs virtuels.


