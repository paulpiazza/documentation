---
title: Introduction aux protocoles réseau
description: AWS
order: 1
---
## Le réseau internet
Le réseau internet est une infrastructure mondiale qui permet la communication entre des milliards d'appareils connectés. Il repose sur des protocoles standardisés pour garantir l'interopérabilité.

## Présenation du modèle OSI et TCP/IP
Le modèle OSI est une référence théorique en 7 couches pour comprendre les interactions réseau. Le modèle TCP/IP, plus pratique, est utilisé pour structurer les communications sur internet.

TCP/IP (Transmission Control Protocol/Internet Protocol) est une suite de protocoles utilisée pour connecter des appareils sur un réseau. Elle se compose de quatre couches principales :
- **Couche d'accès réseau** : Gère la transmission physique des données.
- **Couche Internet** : Utilise le protocole IP pour l'adressage et le routage.
- **Couche transport** : Assure la fiabilité des communications avec TCP ou la rapidité avec UDP.
- **Couche application** : Fournit des protocoles comme HTTP, FTP, et SMTP pour les interactions utilisateur.

TCP/IP est la base des communications sur internet, garantissant l'interopérabilité entre différents systèmes.

## L'adressage réseau avec le protocole internet (IP)
Le protocole IP permet d'identifier et de localiser les appareils sur un réseau grâce à des adresses uniques, comme IPv4 ou IPv6.

- **IPv4** : Utilise des adresses de 32 bits, généralement représentées sous forme de quatre nombres séparés par des points (par exemple, 192.168.1.1). Cependant, l'épuisement des adresses IPv4 a conduit à la création d'IPv6.
- **IPv6** : Utilise des adresses de 128 bits, représentées sous forme hexadécimale et séparées par des deux-points (par exemple, 2001:0db8:85a3:0000:0000:8a2e:0370:7334). IPv6 offre un espace d'adressage beaucoup plus vaste.

Chaque appareil connecté à un réseau se voit attribuer une adresse IP unique. Cette adresse est utilisée pour :
- Identifier l'appareil sur le réseau.
- Acheminer les données entre les appareils via des routeurs.

Types d'adresses :
- **Adresses publiques** : Utilisées pour identifier un appareil sur internet.
- **Adresses privées** : Utilisées au sein de réseaux locaux (LAN) et non routables sur internet.

L'adressage IP est essentiel pour permettre la communication entre les appareils sur les réseaux locaux et internet.

## Le transport sur le réseau avec les protocoles TCP, UDP, QUIC
Ces protocoles assurent le transport des données entre les appareils connectés au réseau.

### TCP (Transmission Control Protocol)
- **Fonction** : TCP est un protocole orienté connexion qui garantit la livraison fiable des données.
- **Caractéristiques** :
  - Segmente les données en paquets et les réassemble à destination.
  - Utilise un mécanisme d'accusé de réception pour s'assurer que les données sont bien reçues.
  - Gère la retransmission des paquets perdus.
  - Idéal pour les applications nécessitant une transmission fiable, comme le web (HTTP/HTTPS) ou les emails (SMTP).

### UDP (User Datagram Protocol)
- **Fonction** : UDP est un protocole sans connexion qui privilégie la rapidité au détriment de la fiabilité.
- **Caractéristiques** :
  - Envoie les données sous forme de datagrammes sans vérifier leur réception.
  - Ne gère pas la retransmission des paquets perdus.
  - Utilisé pour les applications nécessitant une faible latence, comme le streaming vidéo, les jeux en ligne ou les appels VoIP.

### QUIC (Quick UDP Internet Connections)
- **Fonction** : QUIC est un protocole moderne basé sur UDP, conçu pour améliorer les performances des connexions internet.
- **Caractéristiques** :
  - Combine la rapidité d'UDP avec des mécanismes de fiabilité similaires à TCP.
  - Intègre le chiffrement par défaut pour sécuriser les données.
  - Réduit la latence grâce à des connexions plus rapides et une gestion optimisée des paquets.
  - Utilisé par des services comme Google et YouTube pour améliorer l'expérience utilisateur.

Ces trois protocoles répondent à des besoins différents en matière de transport de données, en fonction des exigences de fiabilité, de rapidité et de sécurité.

## La couche applicative avec les protocoles HTTP, SMTP et FTP
Ces protocoles permettent des interactions spécifiques entre les utilisateurs et les services en ligne.

### HTTP (HyperText Transfer Protocol)
- **Fonction** : HTTP est le protocole utilisé pour transférer des pages web et des ressources associées (images, scripts, etc.) entre un serveur web et un navigateur.
- **Caractéristiques** :
  - Fonctionne sur le port 80 (ou 443 pour HTTPS).
  - Basé sur un modèle requête-réponse : le client (navigateur) envoie une requête, et le serveur répond avec le contenu demandé.
  - HTTPS (HTTP sécurisé) ajoute une couche de chiffrement via TLS pour sécuriser les échanges.

### SMTP (Simple Mail Transfer Protocol)
- **Fonction** : SMTP est utilisé pour envoyer des emails d'un client de messagerie à un serveur de messagerie ou entre serveurs.
- **Caractéristiques** :
  - Fonctionne sur le port 25, 587 ou 465 (pour les connexions sécurisées).
  - Gère uniquement l'envoi des emails, tandis que d'autres protocoles comme IMAP ou POP sont utilisés pour la réception.
  - Supporte l'authentification pour sécuriser l'envoi des messages.

### FTP (File Transfer Protocol)
- **Fonction** : FTP est utilisé pour transférer des fichiers entre un client et un serveur.
- **Caractéristiques** :
  - Fonctionne sur les ports 20 et 21.
  - Permet des opérations comme l'envoi, le téléchargement, la suppression ou la modification de fichiers sur un serveur distant.
  - FTPS (FTP sécurisé) et SFTP (Secure File Transfer Protocol) ajoutent des mécanismes de sécurité pour protéger les données transférées.

Ces trois protocoles jouent un rôle clé dans les interactions sur internet, chacun étant adapté à des besoins spécifiques.

## Le protocole DNS et serveurs DNS
Le DNS (Domain Name System) est un système qui traduit les noms de domaine lisibles par les humains (comme `www.example.com`) en adresses IP compréhensibles par les machines (comme `192.168.1.1` ou `2001:0db8::1`).

1. **Requête DNS** : Lorsqu'un utilisateur entre un nom de domaine dans son navigateur, une requête DNS est envoyée pour obtenir l'adresse IP correspondante.
2. **Résolution DNS** : Cette requête passe par plusieurs serveurs DNS :
   - **Serveur DNS récursif** : Reçoit la requête de l'utilisateur et agit comme intermédiaire.
   - **Serveur racine** : Oriente la requête vers le serveur de domaine de premier niveau (TLD, comme `.com` ou `.org`).
   - **Serveur TLD** : Oriente la requête vers le serveur DNS autoritaire du domaine.
   - **Serveur DNS autoritaire** : Fournit l'adresse IP associée au domaine demandé.
3. **Réponse** : L'adresse IP est renvoyée au navigateur, qui peut alors établir une connexion avec le serveur web.

Types d'enregistrements DNS :
- **A (Address)** : Associe un nom de domaine à une adresse IPv4.
- **AAAA (IPv6 Address)** : Associe un nom de domaine à une adresse IPv6.
- **CNAME (Canonical Name)** : Redirige un nom de domaine vers un autre.
- **MX (Mail Exchange)** : Indique les serveurs de messagerie pour un domaine.
- **TXT** : Contient des informations textuelles, souvent utilisées pour la vérification ou la sécurité.

Le DNS est essentiel pour simplifier l'accès aux ressources sur internet. Sans lui, les utilisateurs devraient mémoriser des adresses IP complexes. Il joue également un rôle clé dans la performance et la sécurité des communications en ligne.

## Sécurisation des échanges avec les protocoles SSL et TLS
SSL (Secure Sockets Layer) et TLS (Transport Layer Security) sont des protocoles de sécurité qui assurent la confidentialité, l'intégrité et l'authentification des données échangées sur un réseau.

1. **Chiffrement** : Les données échangées entre le client et le serveur sont chiffrées pour empêcher leur interception par des tiers.
2. **Authentification** : Le serveur (et parfois le client) est authentifié à l'aide de certificats numériques.
3. **Intégrité** : Les données sont protégées contre les altérations pendant leur transmission.

- **SSL** : Ancienne version du protocole, désormais obsolète et remplacée par TLS.
- **TLS** : Version améliorée et plus sécurisée. Les versions actuelles (TLS 1.2 et TLS 1.3) sont largement utilisées.

- **HTTPS** : Utilise TLS pour sécuriser les communications web.
- **Email** : Les protocoles comme SMTP, IMAP et POP peuvent être sécurisés avec TLS.
- **VPN** : Certains VPN utilisent TLS pour sécuriser les connexions.

SSL et TLS sont essentiels pour protéger les données sensibles (mots de passe, informations bancaires, etc.) et garantir la confiance des utilisateurs dans les services en ligne.

