---
title: Découverte EC2
description: AWS
order: 5
---
## Définition et utilité d'un EC2
Amazon Elastic Compute Cloud (EC2) est un service web qui fournit des capacités de calcul redimensionnables dans le cloud. Il permet aux utilisateurs de louer des machines virtuelles pour exécuter leurs applications. EC2 est conçu pour rendre le cloud computing plus accessible et flexible, en offrant des options de configuration variées pour répondre aux besoins spécifiques des utilisateurs.

Service d'infrastructure en tant que service (IaaS) permettant de lancer et gérer des instances virtuelles. Vous devez gérer la configuration des instances, le système d'exploitation, les mises à jour, la sécurité et le dimensionnement selon vos besoins.

Offre un contrôle total sur l'environnement de calcul, ce qui est avantageux pour des applications nécessitant des configurations spécifiques ou des logiciels non pris en charge en mode serverless.

La facturation se fait en fonction du type d'instance, de la durée d'utilisation et des ressources consommées (par exemple, stockage et bande passante).

## Configuration d'une instance EC2 
La configuration d'une instance EC2 implique plusieurs étapes :
1. **Choix de l'AMI (Amazon Machine Image)** : Une AMI contient le système d'exploitation et les logiciels nécessaires.
2. **Type d'instance** : Sélectionnez la puissance de calcul, la mémoire et les capacités réseau.
3. **Configuration du réseau** : Configurez le VPC, les sous-réseaux et les groupes de sécurité.
4. **Stockage** : Ajoutez des volumes EBS ou d'autres options de stockage.
5. **Clé SSH** : Créez ou utilisez une clé existante pour sécuriser l'accès.

**VPC (Virtual Private Cloud)** : Un VPC est un réseau privé virtuel dans AWS. Il permet de définir un environnement réseau isolé où vous pouvez lancer vos ressources AWS, comme des instances EC2. Vous pouvez configurer des sous-réseaux, des tables de routage, des passerelles Internet, et des groupes de sécurité pour contrôler le trafic réseau entrant et sortant. Chaque VPC est associé à une région AWS et peut contenir plusieurs sous-réseaux répartis sur différentes zones de disponibilité.

## Cycle de vie d'une instance EC2
Le cycle de vie d'une instance EC2 comprend plusieurs états :
- **Pending** : L'instance est en cours de lancement.
- **Running** : L'instance est active et prête à être utilisée.
- **Stopped** : L'instance est arrêtée mais peut être redémarrée. (Nécéssite un EBS pour conserver les données)
- **Terminated** : L'instance est supprimée et ne peut pas être récupérée.

## Groupes de sécurité EC2
Les groupes de sécurité agissent comme des pare-feu virtuels pour contrôler le trafic entrant et sortant des instances EC2. Ils permettent de définir des règles basées sur les adresses IP, les protocoles et les ports.

Si aucun groupe de sécurité n'est configuré, par défaut, ce sera celui du réseau auquel l'instance appartient.

### Paramétrage des règles des groupes de sécurité
1. **Trafic entrant (Inbound Rules)** :
   - Ces règles définissent le trafic autorisé à entrer dans l'instance.
   - Chaque règle inclut :
     - **Type** : Le type de trafic (par exemple, SSH, HTTP, HTTPS).
     - **Protocole** : Le protocole utilisé (TCP, UDP, ICMP, etc.).
     - **Port Range** : La plage de ports autorisée (par exemple, 22 pour SSH, 80 pour HTTP).
     - **Source** : L'adresse IP ou le groupe de sécurité autorisé à accéder (par exemple, `0.0.0.0/0` pour autoriser tout le monde ou une plage IP spécifique comme `192.168.1.0/24`).

   
   - Autoriser l'accès SSH uniquement depuis une adresse IP spécifique :
     - Type : SSH
     - Protocole : TCP
     - Port Range : 22
     - Source : `203.0.113.0/32`

2. **Trafic sortant (Outbound Rules)** :
   - Ces règles définissent le trafic autorisé à sortir de l'instance.
   - Par défaut, tout le trafic sortant est autorisé, mais vous pouvez restreindre cela.
   - Chaque règle inclut :
     - **Type** : Le type de trafic (par exemple, HTTP, HTTPS).
     - **Protocole** : Le protocole utilisé.
     - **Port Range** : La plage de ports autorisée.
     - **Destination** : L'adresse IP ou le groupe de sécurité vers lequel le trafic est autorisé.

   
   - Autoriser uniquement le trafic HTTP sortant :
     - Type : HTTP
     - Protocole : TCP
     - Port Range : 80
     - Destination : `0.0.0.0/0`

3. **Bonnes pratiques** :
   - **Principe du moindre privilège** : N'autorisez que le trafic nécessaire pour réduire les risques de sécurité.
   - **Limiter les adresses IP** : Utilisez des plages IP spécifiques au lieu de `0.0.0.0/0` pour restreindre l'accès.
   - **Utiliser des groupes de sécurité comme source/destination** : Cela simplifie la gestion des règles lorsque plusieurs instances doivent communiquer entre elles.

4. **Exemple de configuration pour une application web** :
   - Inbound Rules :
     - HTTP (port 80) : Source `0.0.0.0/0` pour autoriser tout le monde.
     - HTTPS (port 443) : Source `0.0.0.0/0` pour autoriser tout le monde.
     - SSH (port 22) : Source `203.0.113.0/32` pour autoriser uniquement une IP spécifique.
   - Outbound Rules :
     - Autoriser tout le trafic sortant (par défaut).

## Exemple avec un serveur en NodeJS
Pour déployer un serveur NodeJS sur une instance EC2 :
1. Configurez une instance EC2 avec une AMI Linux.
2. Installez NodeJS et npm sur l'instance.
3. Déployez votre application NodeJS.
4. Configurez les groupes de sécurité pour autoriser le trafic HTTP/HTTPS.

## Connexion à un serveur EC2
Pour se connecter à une instance EC2 :
1. Téléchargez la clé privée (.pem) associée à l'instance.
2. Utilisez un client SSH pour établir une connexion :
   ```bash
   ssh -i "votre-cle.pem" ec2-user@<adresse-ip>
   ```

## Utiliser un rôle pour une instance EC2
Les rôles IAM permettent aux instances EC2 d'accéder à d'autres services AWS sans nécessiter de clés d'accès. Assignez un rôle à une instance pour lui permettre, par exemple, de lire des fichiers dans un bucket S3.

## Les volumes EBS en détail
Les volumes EBS (Elastic Block Store) sont des disques persistants attachés aux instances EC2.

Ils conservent les données lorsque le serveur est arrêté.

Ils offrent des options comme :
- **IOPS provisionnés** : Pour des performances élevées, adaptés aux bases de données ou applications nécessitant un débit constant.
- **Snapshots** : Pour sauvegarder les données et restaurer un volume à un état précédent.
- **Volumes généraux (gp3/gp2)** : Idéal pour les charges de travail générales comme les serveurs web ou les environnements de développement.
- **Volumes optimisés pour le débit (st1)** : Conçus pour les applications nécessitant un débit élevé, comme le traitement de données volumineuses.
- **Volumes froids (sc1)** : Pour les données rarement consultées, offrant un coût réduit.
- **Volumes magnétiques** : Une option plus ancienne et économique pour les données archivées.

## Les autres stockages pour EC2
En plus des volumes EBS, EC2 prend en charge :
- **Instance Store** : Stockage temporaire lié au cycle de vie de l'instance. Utilisé pour des données éphémères comme des caches ou des fichiers temporaires.
- **Amazon S3** : Pour le stockage d'objets, idéal pour les sauvegardes, les archives, ou le stockage de fichiers volumineux accessibles via Internet.
- **EFS (Elastic File System)** : Un système de fichiers partagé, adapté aux applications nécessitant un accès simultané depuis plusieurs instances EC2, comme les systèmes de gestion de contenu ou les environnements de collaboration.

## Les images AMI en détail
Une AMI (Amazon Machine Image) est une image préconfigurée utilisée pour lancer des instances EC2. Elle contient :
- **Le système d'exploitation** : Par exemple, Linux, Windows, ou macOS.
- **Les applications et configurations** : Logiciels, bibliothèques, et paramètres nécessaires pour exécuter une application.
- **Les permissions de lancement** : Définissent qui peut utiliser l'AMI pour lancer des instances.

Les AMI permettent de standardiser et d'automatiser le déploiement d'instances EC2. Vous pouvez utiliser des AMI fournies par AWS, des AMI partagées par d'autres utilisateurs, ou créer vos propres AMI pour répondre à des besoins spécifiques. Une fois une AMI créée, elle peut être utilisée pour lancer plusieurs instances identiques, ce qui simplifie la gestion et le déploiement des environnements.

## Config par Défaut

Menu EC2

EC2 > Instances > Lancer une instance

Sélectionner 
* "Autoriser le trafic SSH" : permet de se connecter en ssh sur le port 22.
* "Autoriser le trafic HTTP depuis l'Internet" : Cela permet aux utilisateurs d'accéder à une application ou un site web hébergé sur l'instance EC2 via un navigateur ou un client HTTP. Le port 80 est le port standard pour les connexions HTTP non sécurisées.
* * "Autoriser le trafic HTTPS depuis l'Internet" : HTTP sécurisé sur le port 443.

> ***Bonnes pratiques*** :
> 
> **Utilisez HTTPS** : Si possible, configurez également le port 443 pour les connexions HTTPS sécurisées.
> **Restreignez l'accès** : Si vous n'avez pas besoin que tout le monde accède à votre instance, limitez la source à une plage IP spécifique.
> **Surveillez le trafic** : Utilisez des outils comme AWS CloudWatch pour surveiller les connexions entrantes.

Données utilisateurs : permet d'installer des éléments sur le server. Par exemple pour un server NodeJs.

Il faut utiliser un volume (prendre le volume par défaut)

Ouvrir le serveur grâce à son IPv4 publique.

```shell
#!/bin/bash
yum update -y
yum install -y nodejs
mkdir /home/ec2-user/myapp
cd /home/ec2-user/myapp
npm init -y
npm install express
cat > index.js <<EOF
const express = require('express');
const app = express();
app.get('/', (req, res) => {
  res.send('Hello World from EC2!');
});
app.listen(80, () => {
  console.log('Server running on port 80');
});
EOF
node index.js
```
Pour se connecter à l'instance : (click droit sur l'instance) EC2 > Instances > i-0e923d0c105760b2e > Connectez-vous à l’instance

Plusieurs méthodes sont possibles pour se connecter.

## Error : Server refused to connect

L'erreur **"refused to connect"** sur le port 80 indique que votre serveur n'est pas accessible depuis l'extérieur. Cela peut être dû à plusieurs raisons. Voici les étapes pour résoudre ce problème :


### 1. **Vérifiez les groupes de sécurité AWS**
Assurez-vous que votre groupe de sécurité EC2 autorise le trafic entrant sur le port 80 (HTTP). Voici comment vérifier et configurer cela :

1. Allez dans la console AWS.
2. Naviguez vers **EC2 > Sécurité > Groupes de sécurité**.
3. Sélectionnez le groupe de sécurité associé à votre instance EC2.
4. Ajoutez une règle dans les **Inbound Rules** :
   - **Type** : HTTP
   - **Protocole** : TCP
   - **Port Range** : 80
   - **Source** : `0.0.0.0/0` (pour autoriser tout le monde) ou une plage IP spécifique.


### 2. **Vérifiez que le serveur écoute sur le port 80**
Connectez-vous à votre instance EC2 via SSH et vérifiez que votre application Node.js est bien en cours d'exécution et écoute sur le port 80 :

1. Connectez-vous à l'instance :
   ```bash
   ssh -i "votre-cle.pem" ec2-user@<adresse-ip>
   ```

2. Vérifiez les processus Node.js :
   ```bash
   ps aux | grep node
   ```

3. Vérifiez que le port 80 est en écoute :
   ```bash
   sudo netstat -tuln | grep 80
   ```

Si le port 80 n'est pas en écoute, assurez-vous que votre application Node.js est bien démarrée.


### 3. **Vérifiez le pare-feu sur l'instance**
Si vous utilisez un pare-feu comme `iptables` ou `firewalld`, assurez-vous qu'il autorise le trafic sur le port 80 :

- Pour vérifier les règles `iptables` :
  ```bash
  sudo iptables -L
  ```

- Pour désactiver temporairement le pare-feu (à des fins de test) :
  ```bash
  sudo systemctl stop firewalld
  ```


### 4. **Vérifiez l'adresse IP utilisée**
Assurez-vous d'utiliser l'**adresse IPv4 publique** de votre instance EC2 pour accéder à votre application. Vous pouvez trouver cette adresse dans la console AWS sous **EC2 > Instances > IPv4 publique**.

Accédez à votre application via un navigateur ou `curl` :
```bash
curl http://<adresse-ip-publique>
```


### 5. **Redémarrez votre application**
Si tout semble correct mais que le problème persiste, redémarrez votre application Node.js pour vous assurer qu'elle fonctionne correctement :

```bash
node /home/ec2-user/myapp/index.js
```


### 6. **Bonnes pratiques**
- **Utilisez HTTPS** : Configurez un certificat SSL pour sécuriser votre application (port 443).
- **Surveillez les logs** : Vérifiez les logs de votre application pour détecter d'éventuelles erreurs :
  ```bash
  tail -f /home/ec2-user/myapp/index.js
  ```


Si vous suivez ces étapes et que le problème persiste, partagez les résultats des commandes pour que je puisse vous aider davantage !


## Lexique

### vCPU
Une unité de processeur virtuel utilisée par les instances EC2. Elle correspond à un thread d'un processeur physique hyperthreadé.

### Demandes Spot
Une option d'achat d'instances EC2 à prix réduit, idéale pour des charges de travail flexibles ou tolérantes aux interruptions.

### Savings Plans
Un modèle de tarification flexible permettant de réduire les coûts en échange d'un engagement d'utilisation sur une période donnée.

### Instance Réservée
Une instance EC2 prépayée ou avec engagement à long terme, offrant des réductions significatives par rapport au tarif à la demande.

### Hôtes dédiés
Des serveurs physiques dédiés à un seul client, permettant un contrôle total sur le placement des instances.

### Réservation de capacité
Une option pour garantir la disponibilité des instances EC2 dans une région ou une zone de disponibilité spécifique.

### Groupes de sécurité
Des pare-feu virtuels qui contrôlent le trafic réseau entrant et sortant des instances EC2.

### Adresses IP élastiques
Des adresses IP statiques pouvant être associées à des instances EC2 pour une connectivité stable.

### Groupes de placement
Une stratégie de placement pour optimiser les performances réseau ou la tolérance aux pannes des instances EC2.

### Paires de clé
Des clés SSH utilisées pour sécuriser l'accès aux instances EC2.

### Interfaces réseau
Des interfaces réseau virtuelles attachées aux instances EC2 pour gérer la connectivité.

### Groupes cibles
Des ensembles de cibles (comme des instances EC2) utilisés par les équilibreurs de charge pour distribuer le trafic.

### Trust store
Un référentiel contenant des certificats de confiance pour sécuriser les communications.

### Auto Scaling
Un service permettant d'ajuster automatiquement le nombre d'instances EC2 en fonction de la demande.

### Adresses IPv4 publiques et privées
- **Adresse IPv4 publique** : Une adresse IP accessible depuis Internet, attribuée dynamiquement ou statiquement à une instance EC2.
- **Adresse IPv4 privée** : Une adresse IP utilisée pour la communication interne dans un VPC, non accessible depuis Internet.

### Type de nom d'hôte
Le format du nom d'hôte attribué à une instance EC2, qui peut inclure des informations sur la région ou la zone de disponibilité.

### DNS IPv4 public
Un nom DNS attribué à une instance EC2 pour permettre un accès public via Internet.

### ARN de l’instance
L'Amazon Resource Name (ARN) est un identifiant unique pour une instance EC2, utilisé pour les permissions et les politiques IAM.

### ID de sous-réseau
Un identifiant unique pour un sous-réseau dans un VPC, où une instance EC2 est lancée.

### IMDSv2
Instance Metadata Service version 2, une méthode sécurisée pour accéder aux métadonnées d'une instance EC2, comme les informations sur les rôles IAM ou les adresses IP.

### Managed
Indique sur le serveur est géré par un cluster Kubernetes.




