---
title: Introduction aux protocoles réseaux
description: Learn Nginx
order: 2
---

## Introduction au réseau internet

Le réseau internet connecte des millions de machines via des protocoles standardisés.

Il repose sur plusieurs concepts clés :
- **Résolution IP** : Conversion des noms de domaine en adresses IP pour localiser les machines. Cela se fait via des serveurs DNS qui répondent aux requêtes en fournissant l'adresse IP associée à un nom de domaine.
- **Traceroute** : Outil permettant de suivre le chemin emprunté par les paquets à travers les différents routeurs pour atteindre une destination. Il identifie les points de passage et mesure les temps de réponse.
- **NAP (Network Access Point)** : Points d'interconnexion entre différents réseaux.
- **TLD (Top-Level Domain)** : Extensions des noms de domaine comme `.com`, `.org`, ou `.fr`.


## Présentation du modèle OSI

Le modèle OSI (Open Systems Interconnection) est une norme conceptuelle qui décrit comment les données transitent d'une application sur un appareil à une application sur un autre appareil via un réseau. Il est composé de 7 couches, chacune ayant un rôle spécifique :

1. **Couche physique** : Gère les aspects matériels du réseau, comme les câbles, les signaux électriques, et les connexions physiques.
2. **Couche liaison de données** : Assure le transfert fiable des données entre deux nœuds connectés directement, en détectant et corrigeant les erreurs.
3. **Couche réseau** : Responsable de l'acheminement des paquets de données entre les réseaux, en utilisant des adresses IP.
4. **Couche transport** : Garantit le transfert fiable des données de bout en bout, en utilisant des protocoles comme TCP ou UDP.
5. **Couche session** : Gère les sessions de communication entre les applications, en établissant, maintenant et terminant les connexions.
6. **Couche présentation** : Traduit les données entre le format utilisé par l'application et le format réseau, en gérant également le chiffrement et la compression.
7. **Couche application** : Fournit des services réseau aux applications, comme le transfert de fichiers, la messagerie électronique ou la navigation web.

Chaque couche interagit uniquement avec la couche directement au-dessus et en dessous d'elle, ce qui permet une modularité et une flexibilité dans la conception des réseaux.


## Modèle TCP/IP

Le modèle TCP/IP (Transmission Control Protocol/Internet Protocol) est une architecture réseau utilisée pour la communication sur Internet. Il est composé de 4 couches principales, chacune ayant un rôle spécifique :

1. **Couche accès réseau** : Gère les aspects matériels et les protocoles nécessaires pour transmettre les données sur un réseau physique (ex. Ethernet, Wi-Fi).
2. **Couche internet** : Responsable de l'adressage et de l'acheminement des paquets de données entre les réseaux, en utilisant des protocoles comme IP.
3. **Couche transport** : Assure la communication de bout en bout entre les applications, en utilisant des protocoles comme TCP (fiable) ou UDP (rapide).
4. **Couche application** : Fournit des services réseau aux applications, comme HTTP pour le web, SMTP pour les emails, ou FTP pour le transfert de fichiers.

### PDU (Protocol Data Unit)

Chaque couche du modèle TCP/IP utilise une unité de données spécifique appelée PDU :
- **Couche accès réseau** : Trame.
- **Couche internet** : Paquet.
- **Couche transport** : Segment (TCP) ou datagramme (UDP).
- **Couche application** : Données.

### Encapsulation et désencapsulation

- **Encapsulation** : Lorsqu'une application envoie des données, celles-ci passent par chaque couche du modèle TCP/IP. À chaque couche, des informations supplémentaires (en-têtes) sont ajoutées pour permettre le transport des données. Ce processus est appelé encapsulation.
- **Désencapsulation** : Lorsqu'un appareil reçoit des données, celles-ci passent par chaque couche dans l'ordre inverse. Les en-têtes ajoutés par chaque couche sont retirés pour reconstituer les données originales. Ce processus est appelé désencapsulation.

Ces concepts permettent une communication structurée et fiable entre les appareils sur un réseau.


## Le transport sur le réseau avec les protocoles TCP, UDP et QUIC

Le transport des données sur un réseau repose sur des protocoles qui définissent comment les informations sont envoyées et reçues. Les principaux protocoles de transport sont :

- **TCP (Transmission Control Protocol)** : 
  - Orienté connexion, il établit une connexion fiable entre deux appareils avant de transmettre les données.
  - Garantit que les paquets arrivent dans le bon ordre et sans perte.
  - Utilisé pour des applications nécessitant une fiabilité élevée, comme le web (HTTP/HTTPS) ou les emails (SMTP).

- **UDP (User Datagram Protocol)** : 
  - Sans connexion, il envoie les données sans établir de connexion préalable.
  - Plus rapide que TCP, mais ne garantit pas la livraison ni l'ordre des paquets.
  - Utilisé pour des applications où la vitesse est prioritaire, comme le streaming vidéo ou les jeux en ligne.

- **QUIC (Quick UDP Internet Connections)** : 
  - Protocole moderne basé sur UDP, conçu pour être rapide et sécurisé.
  - Intègre des fonctionnalités comme le chiffrement (similaire à TLS) et la gestion des connexions multiples.
  - Utilisé par des services comme Google et YouTube pour améliorer les performances.

### Les paquets IP

Les paquets IP (Internet Protocol) sont les unités de données utilisées pour transporter les informations sur un réseau. Chaque paquet contient deux parties principales :
- **En-tête** : Contient des informations essentielles pour le routage, comme l'adresse IP source, l'adresse IP de destination, et d'autres métadonnées.
- **Données** : Contient la charge utile, c'est-à-dire les informations à transmettre.

Les paquets IP peuvent être de deux types :
- **IPv4** : Utilise des adresses de 32 bits (ex. `192.168.1.1`).
- **IPv6** : Utilise des adresses de 128 bits pour répondre à la pénurie d'adresses IPv4 (ex. `2001:0db8:85a3:0000:0000:8a2e:0370:7334`).

Les paquets IP sont encapsulés dans des trames au niveau de la couche accès réseau et transportés à travers les réseaux jusqu'à leur destination.


## La couche applicative avec les protocoles HTTP, SMTP, FTP

Ces protocoles permettent des échanges spécifiques, chacun ayant un rôle distinct dans la communication réseau :

- **HTTP (HyperText Transfer Protocol)** :
  - Utilisé pour la communication entre les navigateurs web et les serveurs web.
  - Fonctionne principalement sur le port 80 (ou 443 pour HTTPS).
  - Permet de transférer des pages web, des images, des vidéos, et d'autres ressources.
  - Basé sur un modèle requête-réponse : le client (navigateur) envoie une requête, et le serveur répond avec les données demandées.

- **SMTP (Simple Mail Transfer Protocol)** :
  - Utilisé pour l'envoi d'emails entre les serveurs de messagerie.
  - Fonctionne principalement sur le port 25, 465 (chiffré) ou 587.
  - Ne gère que l'envoi des emails, tandis que d'autres protocoles comme IMAP ou POP3 sont utilisés pour la réception.
  - Basé sur un modèle client-serveur où le client envoie un email au serveur, qui le transfère au serveur de destination.

- **FTP (File Transfer Protocol)** :
  - Utilisé pour le transfert de fichiers entre un client et un serveur.
  - Fonctionne principalement sur les ports 20 (données) et 21 (contrôle).
  - Permet de télécharger ou téléverser des fichiers, ainsi que de gérer les fichiers sur le serveur (création, suppression, etc.).
  - Peut être utilisé en mode actif ou passif, et peut être sécurisé avec FTPS ou remplacé par SFTP (basé sur SSH).

### Différences principales

| Protocole | Usage principal            | Port par défaut | Sécurité (chiffré) |
|-----------|----------------------------|-----------------|--------------------|
| HTTP      | Transfert de pages web     | 80 (443 pour HTTPS) | HTTPS (TLS/SSL)   |
| SMTP      | Envoi d'emails             | 25, 465, 587    | STARTTLS/SSL       |
| FTP       | Transfert de fichiers      | 20, 21          | FTPS/SFTP          |

Ces protocoles sont essentiels pour différentes tâches dans les réseaux, chacun étant optimisé pour son domaine d'application.


## Le protocole DNS et serveurs DNS

DNS (Domain Name System) traduit les noms de domaine en adresses IP, permettant aux utilisateurs d'accéder aux sites web en utilisant des noms lisibles comme `example.com` au lieu d'adresses IP numériques.

Le fonctionnement du DNS repose sur une hiérarchie de serveurs :
- **Serveurs racine** : Point de départ qui redirige vers les serveurs des domaines de premier niveau (TLD).
- **Serveurs TLD** : Gèrent les extensions comme `.com`, `.org`, ou `.fr` et redirigent vers les serveurs des domaines spécifiques.
- **Serveurs faisant autorité** : Contiennent les enregistrements DNS pour un domaine donné, comme les adresses IP associées.

Les types d'enregistrements DNS incluent :
- **A** : Associe un nom de domaine à une adresse IPv4.
- **AAAA** : Associe un nom de domaine à une adresse IPv6.
- **CNAME** : Alias pour un autre nom de domaine.
- **MX** : Spécifie les serveurs de messagerie pour un domaine.


## Sécurisation des échanges avec les protocoles SSL et TLS

La sécurisation des échanges sur Internet repose sur les protocoles **SSL (Secure Sockets Layer)** et **TLS (Transport Layer Security)**. Ces protocoles permettent de chiffrer les communications entre un client (comme un navigateur web) et un serveur, garantissant ainsi la confidentialité, l'intégrité et l'authenticité des données échangées.

### Fonctionnement de SSL/TLS

1. **Chiffrement** : Les données échangées sont chiffrées pour empêcher qu'elles soient lues par des tiers non autorisés.
2. **Authentification** : Le serveur (et parfois le client) est authentifié à l'aide de certificats numériques émis par une autorité de certification (CA).
3. **Intégrité** : Les données sont protégées contre les altérations grâce à des mécanismes de vérification comme les codes d'authentification de message (MAC).

### Étapes principales d'une connexion SSL/TLS

1. **Handshake (poignée de main)** :
   - Le client et le serveur échangent des informations pour établir une connexion sécurisée.
   - Le serveur envoie son certificat au client pour prouver son identité.
   - Une clé de session est générée pour chiffrer les données.

2. **Échange de données chiffrées** :
   - Une fois la connexion sécurisée établie, les données sont échangées en utilisant la clé de session.

### Différences entre SSL et TLS

- **SSL** : Ancienne version du protocole, désormais obsolète et remplacée par TLS.
- **TLS** : Version améliorée et plus sécurisée, utilisée dans la plupart des communications modernes.

### Utilisation courante

- **HTTPS** : Utilise TLS pour sécuriser les sites web.
- **Email** : Protocoles comme SMTP, IMAP et POP3 peuvent être sécurisés avec TLS.
- **VPN** : Certains VPN utilisent TLS pour sécuriser les connexions.

Ces protocoles sont essentiels pour garantir la sécurité des échanges sur Internet, en particulier pour les transactions sensibles comme les paiements en ligne ou la transmission de données personnelles.


## Fonctionnement de HTTPS, certificats et autorités de certification

### HTTPS (HyperText Transfer Protocol Secure)

HTTPS est une version sécurisée de HTTP qui utilise le protocole TLS pour chiffrer les communications entre un client (navigateur) et un serveur web.

### Certificats numériques

Un certificat numérique est un fichier électronique utilisé pour prouver l'identité d'un serveur ou d'une organisation. Il contient :
- Le nom de domaine du site.
- Les informations de l'organisation.
- La clé publique utilisée pour le chiffrement.
- La signature numérique d'une autorité de certification (CA).

Les certificats sont émis par des **autorités de certification** (CA) comme Let's Encrypt, DigiCert ou GlobalSign.

### Authentification des messages

L'authentification des messages garantit que les données reçues proviennent bien de l'expéditeur prévu et qu'elles n'ont pas été altérées. HTTPS utilise :
- **MAC (Message Authentication Code)** : Un code généré à partir des données et d'une clé secrète partagée pour vérifier l'intégrité des messages.
- **Signatures numériques** : Utilisées pour vérifier l'authenticité des certificats et des échanges.

### Étapes principales d'une connexion HTTPS

1. **Établissement de la connexion** :
   - Le client (navigateur) envoie une requête au serveur pour établir une connexion sécurisée.
   - Le serveur répond avec son certificat numérique.

2. **Validation du certificat** :
   - Le client vérifie que le certificat est valide et émis par une CA reconnue.
   - Si le certificat est valide, la connexion continue.

3. **Échange de clés** :
   - Une clé de session est générée pour chiffrer les données échangées.
   - Cette clé est sécurisée à l'aide de la clé publique du serveur.

4. **Transmission des données** :
   - Les données sont chiffrées avec la clé de session et transmises de manière sécurisée.

Ces mécanismes assurent une communication sécurisée et fiable, essentielle pour les transactions en ligne, les connexions aux services bancaires, et bien d'autres applications.




