---
title: Etude de cas Reverse proxy
description: Learn Nginx
order: 6
---

## Intriduction

Un reverse proxy agit comme intermédiaire entre les clients et les serveurs backend.

## Envoyer des requêtes vers d'autres serveurs

Exemple :
```nginx
location / {
    proxy_pass http://backend.example.com;
}
```

## Passer des en-têtes aux serveurs d'origine

Ajoutez des en-têtes :
```nginx
proxy_set_header Host $host;
proxy_set_header X-Real-IP $remote_addr;
```

## Mise en mémoire tampon des réponses proxy

Activez la mise en mémoire tampon :
```nginx
proxy_buffering on;
proxy_buffers 16 4k;
```

## Configuration des délais d'attente pour les proxy

Définissez des délais :
```nginx
proxy_connect_timeout 60s;
proxy_read_timeout 60s;
proxy_send_timeout 60s;
```

## Envoyer des requêtes vers PHP-FPM avec FastCGI

Exemple :
```nginx
location ~ \.php$ {
    fastcgi_pass 127.0.0.1:9000;
    include fastcgi_params;
}
```

## Cas du Reverse proxy local

Configuration locale :
```nginx
location / {
    proxy_pass http://127.0.0.1:8080;
}
```

## Cas du Reverse proxy API et SPA

Exemple :
```nginx
location /api/ {
    proxy_pass http://api.example.com;
}
location / {
    proxy_pass http://spa.example.com;
}
```

## Cas du Reverse Proxy avec PHP-FPM

Ajoutez :
```nginx
location ~ \.php$ {
    fastcgi_pass unix:/var/run/php/php7.4-fpm.sock;
    include fastcgi_params;
}
```

## Cas du Reverse proxy API et SPA en Docker

Exemple avec Docker :
```nginx
location /api/ {
    proxy_pass http://api_container:3000;
}
location / {
    proxy_pass http://spa_container:8080;
}
```

## Cas du Reverse proxy et protocole Websocket

Activez WebSocket :
```nginx
location /ws/ {
    proxy_pass http://websocket_server;
    proxy_http_version 1.1;
    proxy_set_header Upgrade $http_upgrade;
    proxy_set_header Connection "upgrade";
}
```




