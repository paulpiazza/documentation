---
title: Les bases de Nginx
description: Learn Nginx
order: 3
---

## Les bases en NGINX

Nginx est un serveur web performant, utilisé pour servir des sites statiques, des proxys, etc.

---

## Start, stop, reload de la configuration

Utilisez les commandes suivantes pour gérer Nginx :
```bash
sudo systemctl start nginx
sudo systemctl stop nginx
sudo systemctl reload nginx
```

---

## Introduction aux directives et aux contextes

Les directives sont des instructions dans la configuration. Les contextes définissent leur portée, comme `http`, `server`, et `location`.

---

## L'architecture de Nginx

Nginx utilise une architecture événementielle, avec des processus maîtres et des processus travailleurs.

---

## La configuration de base de Nginx

Un fichier de configuration typique inclut des blocs `http`, `server`, et `location`.
```nginx
http {
    server {
        listen 80;
        server_name example.com;

        location / {
            root /var/www/html;
        }
    }
}
```


