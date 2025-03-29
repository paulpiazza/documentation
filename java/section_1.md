---
title: Les bases de Java
description: Java
order: 1
---
## Les variables
Les variables sont des conteneurs permettant de stocker des données. En Java, chaque variable a un type qui détermine la nature des données qu'elle peut contenir.

Exemple :
```java
int age = 25; // Variable entière
String nom = "Alice"; // Variable de type chaîne de caractères
```

## Les types
Java est un langage fortement typé. Voici les principaux types de données :
- **int** : pour les nombres entiers.
- **double** : pour les nombres à virgule flottante.
- **char** : pour les caractères.
- **boolean** : pour les valeurs vraies ou fausses.

Exemple :
```java
double pi = 3.14;
boolean estActif = true;
```

## Les conversions de types
Les conversions de types permettent de transformer une donnée d'un type à un autre. Il existe deux types de conversions :
- **Conversion implicite** : réalisée automatiquement par Java.
- **Conversion explicite (casting)** : réalisée manuellement.

Exemple :
```java
int nombre = 10;
double resultat = nombre; // Conversion implicite

double valeur = 9.7;
int valeurEntiere = (int) valeur; // Conversion explicite
```

## Les opérateurs
Les opérateurs permettent d'effectuer des opérations sur des variables et des valeurs. Voici quelques exemples :
- **Opérateurs arithmétiques** : `+`, `-`, `*`, `/`, `%`
- **Opérateurs de comparaison** : `==`, `!=`, `<`, `>`, `<=`, `>=`
- **Opérateurs logiques** : `&&`, `||`, `!`

Exemple :
```java
int a = 5, b = 3;
int somme = a + b; // 8
boolean estEgal = (a == b); // false
```

## Mutabilité et immuabilité
En Java, certains objets sont immuables, ce qui signifie que leur état ne peut pas être modifié après leur création. Par exemple, les objets de type `String` sont immuables.

Exemple :
```java
String texte = "Bonjour";
texte = texte + " tout le monde"; // Une nouvelle chaîne est créée
```

Les objets mutables, comme les instances de `StringBuilder`, peuvent être modifiés.

Exemple :
```java
StringBuilder sb = new StringBuilder("Bonjour");
sb.append(" tout le monde"); // Modifie l'objet existant
```

## Le débugger
Le débugger est un outil essentiel pour analyser et corriger les erreurs dans un programme. Il permet d'exécuter le code pas à pas, d'inspecter les variables et de comprendre le flux d'exécution.

Exemple d'utilisation :
1. Placez un point d'arrêt (breakpoint) dans votre code.
2. Lancez le programme en mode débogage.
3. Analysez les valeurs des variables à chaque étape.

## Arithmétie en Java
L'arithmétique en Java repose sur les opérateurs arithmétiques. Attention aux priorités des opérateurs et aux erreurs comme la division par zéro.

Exemple :
```java
int x = 10, y = 3;
int division = x / y; // Résultat : 3 (division entière)
double divisionReelle = (double) x / y; // Résultat : 3.333...
```
