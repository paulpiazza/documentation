---
title: Etude de cas Serveur web
description: Learn Nginx
order: 5
---

## Servir un site statique localement avec Docker

Pour servir un site statique localement avec Docker, vous pouvez utiliser une image Nginx officielle. Voici un exemple de configuration :

1. Placez vos fichiers statiques dans un répertoire, par exemple `./site`.
2. Créez un fichier `Dockerfile` :
   ```dockerfile
   FROM nginx:latest
   COPY ./site /usr/share/nginx/html
   ```
3. Construisez et exécutez le conteneur :
   ```bash
   docker build -t site-statique .
   docker run -d -p 8080:80 site-statique
   ```
4. Accédez à votre site sur `http://localhost:8080`.

---

## Servir une SPA (Angular) localement avec Docker

Pour une SPA Angular, vous devez configurer Nginx pour rediriger toutes les requêtes vers `index.html`. Voici un exemple de configuration :

1. Placez les fichiers générés par Angular (`ng build`) dans un répertoire, par exemple `./dist`.
2. Créez un fichier `nginx.conf` :
   ```nginx
   server {
       listen 80;
       server_name localhost;

       root /usr/share/nginx/html;
       index index.html;

       location / {
           try_files $uri /index.html;
       }
   }
   ```
3. Créez un fichier `Dockerfile` :
   ```dockerfile
   FROM nginx:latest
   COPY ./dist /usr/share/nginx/html
   COPY ./nginx.conf /etc/nginx/conf.d/default.conf
   ```
4. Construisez et exécutez le conteneur :
   ```bash
   docker build -t spa-angular .
   docker run -d -p 8080:80 spa-angular
   ```

---

## Servir un site statique sur internet

Pour servir un site statique sur internet, vous pouvez utiliser un serveur Nginx sur un VPS. Voici les étapes principales :

1. Installez Nginx sur votre VPS.
2. Placez vos fichiers statiques dans `/var/www/html`.
3. Configurez le fichier `/etc/nginx/sites-available/default` :
   ```nginx
   server {
       listen 80;
       server_name votre-domaine.com;

       root /var/www/html;
       index index.html;

       location / {
           try_files $uri $uri/ =404;
       }
   }
   ```
4. Redémarrez Nginx :
   ```bash
   sudo systemctl restart nginx
   ```

---

## Servir une SPA (Angular) sur Internet

Pour une SPA Angular sur internet, configurez Nginx pour rediriger toutes les requêtes vers `index.html` :

1. Placez les fichiers générés par Angular dans `/var/www/html`.
2. Configurez le fichier `/etc/nginx/sites-available/default` :
   ```nginx
   server {
       listen 80;
       server_name votre-domaine.com;

       root /var/www/html;
       index index.html;

       location / {
           try_files $uri /index.html;
       }
   }
   ```
3. Redémarrez Nginx :
   ```bash
   sudo systemctl restart nginx
   ```


