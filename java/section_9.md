---
title: Les dates
description: Java
order: 9
---

## Gestion des dates en Java

Java offre plusieurs classes pour travailler avec les dates et les heures. Depuis Java 8, l'API `java.time` est recommandée pour sa simplicité et sa puissance. Voici les concepts clés à connaître :

## Classes principales

- **`LocalDate`** : Représente une date sans heure (exemple : 2023-10-01).
- **`LocalTime`** : Représente une heure sans date (exemple : 14:30:00).
- **`LocalDateTime`** : Combine une date et une heure (exemple : 2023-10-01T14:30:00).
- **`ZonedDateTime`** : Inclut une date, une heure et un fuseau horaire.
- **`Instant`** : Représente un point précis dans le temps (utilisé souvent pour les horodatages).

## Création d'objets

```java
import java.time.*;

LocalDate date = LocalDate.now(); // Date actuelle
LocalTime time = LocalTime.now(); // Heure actuelle
LocalDateTime dateTime = LocalDateTime.now(); // Date et heure actuelles
LocalDate specificDate = LocalDate.of(2023, 10, 1); // Date spécifique
```

## Formatage et parsing

Pour formater ou analyser des dates, utilisez la classe `DateTimeFormatter`.

```java
import java.time.LocalDate;
import java.time.format.DateTimeFormatter;

DateTimeFormatter formatter = DateTimeFormatter.ofPattern("dd/MM/yyyy");
LocalDate date = LocalDate.now();
String formattedDate = date.format(formatter); // Formatage
LocalDate parsedDate = LocalDate.parse("01/10/2023", formatter); // Parsing
```

## Manipulation des dates

Les objets de l'API `java.time` sont immuables. Pour effectuer des modifications, utilisez des méthodes comme `plus` ou `minus`.

```java
LocalDate date = LocalDate.now();
LocalDate nextWeek = date.plusWeeks(1); // Ajouter une semaine
LocalDate previousMonth = date.minusMonths(1); // Soustraire un mois
```

## Comparaison des dates

Utilisez les méthodes `isBefore`, `isAfter` ou `isEqual` pour comparer des dates.

```java
LocalDate today = LocalDate.now();
LocalDate futureDate = LocalDate.of(2023, 12, 25);

boolean isBefore = today.isBefore(futureDate); // true
boolean isAfter = today.isAfter(futureDate); // false
```

## Fuseaux horaires

Pour travailler avec des fuseaux horaires, utilisez `ZoneId` et `ZonedDateTime`.

```java
import java.time.ZonedDateTime;
import java.time.ZoneId;

ZonedDateTime zonedDateTime = ZonedDateTime.now(ZoneId.of("Europe/Paris"));
```

## Conversion entre anciennes et nouvelles API

Si vous travaillez avec l'ancienne API (`java.util.Date`), vous pouvez convertir entre les deux :

```java
import java.time.Instant;
import java.util.Date;

Date date = Date.from(Instant.now()); // Nouvelle API vers ancienne
Instant instant = date.toInstant(); // Ancienne API vers nouvelle
```

## Gestion des périodes et durées

- **`Period`** : Représente une période en années, mois et jours.
- **`Duration`** : Représente une durée en secondes ou nanosecondes.

```java
import java.time.*;

Period period = Period.between(LocalDate.of(2023, 1, 1), LocalDate.now());
Duration duration = Duration.ofHours(5); // Durée de 5 heures
```
