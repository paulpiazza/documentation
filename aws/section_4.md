---
title: Définition d'un budget
description: AWS
order: 4
---
## Définition et utilité d'un budget

Un budget AWS est un outil permettant de surveiller et de gérer les coûts et l'utilisation des ressources AWS. Il aide les utilisateurs à prévoir leurs dépenses et à éviter les dépassements de budget.

Le principe d'un budget AWS repose sur la définition de limites financières ou d'utilisation pour une période donnée (mensuelle, trimestrielle, annuelle). Une fois configuré, AWS Budgets surveille les données en temps réel et envoie des alertes lorsque les seuils définis sont atteints ou dépassés.

### Vocabulaire clé
- **Coût réel (Actual Cost)** : Le montant dépensé jusqu'à présent pour une période donnée.
- **Coût prévu (Forecasted Cost)** : Une estimation des dépenses futures basées sur les tendances actuelles.
- **Utilisation (Usage)** : La quantité de ressources AWS consommées.
- **Seuil d'alerte (Alert Threshold)** : Une limite définie pour déclencher des notifications lorsque les coûts ou l'utilisation atteignent un certain niveau.
- **MTD** : 

### Options principales
1. **Budget de coût (Cost Budget)** : Permet de définir une limite de dépenses pour un service ou un ensemble de services.
2. **Budget d'utilisation (Usage Budget)** : Permet de surveiller la consommation de ressources spécifiques, comme les heures d'instance EC2 ou le stockage S3.
3. **Budget de réservation (Reservation Budget)** : Suivi de l'utilisation et des économies réalisées grâce aux instances réservées.
4. **Budget d'épargne (Savings Plan Budget)** : Suivi des économies réalisées grâce aux plans d'épargne AWS.
5. **Budget de dépense nul** : Créez un budget qui vous informe dès que vos dépenses dépassent 0,01 USD, ce qui dépasse les limites de l'Offre gratuite d'AWS.
6. **Budget de coûts mensuel** : Créez un budget mensuel qui vous informe si vous dépassez ou êtes en passe de dépasser le montant du budget.
7. **Budget de couverture quotidienne des Savings Plans** : Créez un budget de couverture pour vos Savings Plans qui vous informe lorsque vous passez en dessous de l'objectif défini.
8. **Budget quotidien d'utilisation des réservations** : Créez un budget d'utilisation pour vos réservations qui vous avertit lorsque vous passez en dessous de l'objectif établi.


### Config par défaut

Facturation et gestion des coûts > Budgets > Créer un budget

Sélectionner : Budget de dépense nul



