---
title: Sécurisation
description: Learn Nginx
order: 15
---

## Attaques courantes et remédiations
Les attaques courantes incluent les attaques par force brute, les injections SQL, les attaques XSS, et les attaques DDoS.  
Ces attaques exploitent des failles dans les systèmes pour compromettre leur sécurité. Il est essentiel de configurer Nginx pour limiter ces risques.

### Exemple de configuration pour limiter les attaques par force brute :
```nginx
limit_req_zone $binary_remote_addr zone=one:10m rate=1r/s;
server {
    location /login {
        limit_req zone=one burst=5;
    }
}
```
Cette configuration limite le nombre de requêtes par seconde pour une adresse IP donnée, réduisant ainsi les risques d'attaques par force brute.

## Réduire les informations communiquées
Réduisez les informations communiquées par Nginx pour éviter de divulguer des détails sensibles, comme la version du serveur.

### Exemple de configuration :
```nginx
server_tokens off;
```
Cela désactive l'affichage des informations sur le serveur dans les en-têtes HTTP.

## Empêcher le hotlinking
Empêchez les sites externes d'utiliser vos ressources, comme des images, sans autorisation.

### Exemple de configuration :
```nginx
location ~* \.(jpg|jpeg|png|gif)$ {
    valid_referers none blocked yourdomain.com;
    if ($invalid_referer) {
        return 403;
    }
}
```
Cette configuration vérifie le référent HTTP et bloque les requêtes provenant de sites non autorisés.

## Authentification basique
Ajoutez une authentification basique pour protéger vos ressources sensibles.

### Exemple de configuration :
```nginx
location /secure {
    auth_basic "Restricted Area";
    auth_basic_user_file /etc/nginx/.htpasswd;
}
```
Cette méthode demande un nom d'utilisateur et un mot de passe pour accéder à une ressource.

## Authentification par sous-requete
Utilisez une sous-requête pour authentifier les utilisateurs via un serveur d'authentification externe.

### Exemple de configuration :
```nginx
location / {
    auth_request /auth;
}
location = /auth {
    proxy_pass http://auth_server;
}
```
Cette configuration délègue l'authentification à un serveur tiers.

## Utilisation de fail2ban
Fail2ban peut être utilisé pour bannir les IP après plusieurs tentatives échouées. Cela protège contre les attaques répétées.

### Exemple de configuration :
1. Configurez les logs Nginx pour capturer les tentatives échouées.
2. Configurez fail2ban pour surveiller ces logs.
```bash
[nginx-auth]
enabled = true
filter = nginx-auth
logpath = /var/log/nginx/error.log
maxretry = 3
```
Fail2ban surveille les logs et bloque automatiquement les IP après un certain nombre de tentatives échouées.




