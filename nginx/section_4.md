---
title: Utilisation en tant que serveur Web
description: Learn Nginx
order: 4
---

## La sélection de serveurs

Nginx peut sélectionner un serveur en fonction du nom de domaine ou de l'adresse IP. Cela est défini dans les blocs `server`.

---

## Configuration des emplacements avec location

La directive `location` permet de définir des règles pour gérer les requêtes. Exemple :
```nginx
location /images/ {
    root /data;
}
```

---

## La directive root

La directive `root` spécifie le répertoire racine pour les fichiers. Exemple :
```nginx
root /var/www/html;
```

---

## La directive index

La directive `index` définit le fichier par défaut à servir. Exemple :
```nginx
index index.html;
```

---

## La directive try_files

La directive `try_files` permet de tester plusieurs fichiers avant de retourner une réponse. Exemple :
```nginx
try_files $uri $uri/ =404;
```

---

## Les variables

Nginx fournit des variables comme `$uri`, `$host`, etc., pour personnaliser les configurations.

---

## Retourner des codes et rediriger

Utilisez `return` pour retourner un code HTTP ou rediriger :
```nginx
return 301 https://example.com;
```

---

## Les réécritures d'URI

La directive `rewrite` permet de modifier les URI. Exemple :
```nginx
rewrite ^/old/(.*)$ /new/$1 permanent;
```

---

## Les réécritures de réponses HTTP

Pour modifier les réponses HTTP, utilisez des modules comme `sub_filter`.

---

## La directive error_page

La directive `error_page` permet de personnaliser les pages d'erreur. Exemple :
```nginx
error_page 404 /404.html;
```


