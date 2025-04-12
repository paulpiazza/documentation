---
title: Etude de cas HTTP/2, HTTP/3, HTTPS
description: Learn Nginx
order: 8
---

## Site statique avec le HTTPS

Configuration pour un site statique :
```nginx
server {
    listen 443 ssl;
    ssl_certificate /etc/nginx/ssl/cert.pem;
    ssl_certificate_key /etc/nginx/ssl/key.pem;
    root /var/www/html;
}
```

## Reverse proxy API et SPA avec HTTPS (docker compose)

Exemple avec Docker Compose :
```nginx
server {
    listen 443 ssl;
    ssl_certificate /etc/nginx/ssl/cert.pem;
    ssl_certificate_key /etc/nginx/ssl/key.pem;
    location /api/ {
        proxy_pass http://api_container:3000;
    }
    location / {
        proxy_pass http://spa_container:8080;
    }
}
```

## Activer le HTTP/2

Ajoutez `http2` :
```nginx
listen 443 ssl http2;
```

## utiliser le Server Push

Activez le Server Push :
```nginx
http2_push_preload on;
```

## Utiliser HTTP/3

Ajoutez HTTP/3 :
```nginx
listen 443 ssl http2;
listen 443 quic;
ssl_protocols TLSv1.3;
add_header Alt-Svc 'h3-23=":443"; ma=86400';
```


