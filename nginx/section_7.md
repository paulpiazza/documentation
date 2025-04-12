---
title: Etude de cas Sécurisation du traffic (HTTPS)
description: Learn Nginx
order: 7
---

## Https avec Nginx

Activez HTTPS :
```nginx
server {
    listen 443 ssl;
    ssl_certificate /etc/nginx/ssl/cert.pem;
    ssl_certificate_key /etc/nginx/ssl/key.pem;
}
```

## Handshake et chaine de certificats

Assurez-vous que la chaîne de certificats est complète pour éviter des erreurs.

## Configuration avancée de HTTPS

Ajoutez des paramètres avancés :
```nginx
ssl_protocols TLSv1.2 TLSv1.3;
ssl_ciphers HIGH:!aNULL:!MD5;
ssl_prefer_server_ciphers on;
```

## HTTP Strict Transport Security (HSTS)

Activez HSTS :
```nginx
add_header Strict-Transport-Security "max-age=31536000; includeSubDomains" always;
```

## Agrafage OCSP

Activez l'agrafage OCSP :
```nginx
ssl_stapling on;
ssl_stapling_verify on;
```

## Configuration moderne

Utilisez des configurations modernes :
```nginx
ssl_protocols TLSv1.3;
ssl_ciphers TLS_AES_256_GCM_SHA384:TLS_CHACHA20_POLY1305_SHA256;
```



