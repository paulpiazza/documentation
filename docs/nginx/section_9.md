---
title: Etude de cas Load Balancer
description: Learn Nginx
order: 9
---

## Load Balancing

Le load balancing (équilibrage de charge) permet de distribuer les requêtes entrantes entre plusieurs serveurs backend pour améliorer la disponibilité et la performance.

## Les directives upstream et server

La directive `upstream` est utilisée pour définir un groupe de serveurs backend. Exemple :
```nginx
upstream backend {
    server backend1.example.com;
    server backend2.example.com;
}
server {
    location / {
        proxy_pass http://backend;
    }
}
```

## Les méthodes d'équilibrage de charge

Nginx supporte plusieurs méthodes d'équilibrage :
- **Round Robin** (par défaut)
- **Least Connections** : `least_conn;`
- **IP Hash** : `ip_hash;`

Exemple :
```nginx
upstream backend {
    least_conn;
    server backend1.example.com;
    server backend2.example.com;
}
```

## Poids serveur et serveurs de secours

Vous pouvez attribuer un poids aux serveurs ou définir des serveurs de secours :
```nginx
upstream backend {
    server backend1.example.com weight=3;
    server backend2.example.com;
    server backup.example.com backup;
}
```

## Contrôle de santé (health checks)

Nginx Plus permet des contrôles de santé pour vérifier la disponibilité des serveurs. Exemple :
```nginx
upstream backend {
    server backend1.example.com;
    server backend2.example.com;
    health_check;
}
```

## Terminaison TLS (TLS offloading)

La terminaison TLS consiste à déchiffrer le trafic HTTPS au niveau du load balancer :
```nginx
server {
    listen 443 ssl;
    ssl_certificate /etc/nginx/ssl/cert.pem;
    ssl_certificate_key /etc/nginx/ssl/key.pem;
    location / {
        proxy_pass http://backend;
    }
}
```

## Sécurisation vers les serveurs d'origine (End-to-End Encryption)

Pour sécuriser les connexions entre le load balancer et les serveurs backend :
```nginx
upstream backend {
    server backend1.example.com:443 ssl;
    server backend2.example.com:443 ssl;
}
server {
    listen 443 ssl;
    location / {
        proxy_pass https://backend;
    }
}
```

## Terminaison TLS - serveur unique

Configuration pour un serveur unique :
```nginx
server {
    listen 443 ssl;
    ssl_certificate /etc/nginx/ssl/cert.pem;
    ssl_certificate_key /etc/nginx/ssl/key.pem;
    location / {
        proxy_pass http://127.0.0.1:8080;
    }
}
```

## Terminaison TLS - Docker

Exemple avec Docker :
```nginx
server {
    listen 443 ssl;
    ssl_certificate /etc/nginx/ssl/cert.pem;
    ssl_certificate_key /etc/nginx/ssl/key.pem;
    location / {
        proxy_pass http://app_container:8080;
    }
}
```

## E2E encryption - VPS

Pour un VPS, utilisez une configuration similaire à celle de la sécurisation end-to-end, en vous assurant que les certificats sont valides sur chaque serveur backend.




