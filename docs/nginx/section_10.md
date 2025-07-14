---
title: Compression
description: Learn Nginx
order: 10
---

## Introduction

La compression réduit la taille des réponses HTTP, améliorant ainsi les temps de chargement.

## Niveaux de compression et types compressés

Activez la compression avec `gzip` :
```nginx
gzip on;
gzip_types text/plain text/css application/json application/javascript;
gzip_comp_level 5;
```

## Ajuster la taille des réponses compressées et la compression des réponses proxy

Limitez la taille minimale des réponses compressées :
```nginx
gzip_min_length 1000;
```
Activez la compression pour les réponses proxy :
```nginx
gzip_proxied any;
```

## Configuration recommandées

Configuration standard :
```nginx
gzip on;
gzip_types text/plain text/css application/json application/javascript;
gzip_comp_level 6;
gzip_min_length 1024;
gzip_proxied any;
```

## Configuration Brotli

Brotli offre une meilleure compression :
```nginx
brotli on;
brotli_comp_level 6;
brotli_types text/plain text/css application/json application/javascript;
```



