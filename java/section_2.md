---
title: Les Variables
description: Java
order: 2
---
## Les variables
Les variables sont des conteneurs permettant de stocker des données. En Java, chaque variable a un type qui détermine la nature des données qu'elle peut contenir.

Exemple :
```java
int age = 25; // Variable entière
String nom = "Alice"; // Variable de type chaîne de caractères
```

## Déclaration avec `var`
Depuis Java 10, il est possible d'utiliser le mot-clé `var` pour déclarer des variables locales. Cela permet de déduire automatiquement le type de la variable à partir de la valeur qui lui est assignée.
- Simplifie la déclaration lorsque le type est évident ou redondant.
- Améliore la lisibilité dans certains cas, notamment avec des types complexes.
- Ne peut être utilisé que pour des variables locales (dans une méthode ou un bloc) et non pour les champs de classe.

### Exemple
```java
var age = 25; // Le type est déduit comme int
var nom = "Alice"; // Le type est déduit comme String
var liste = List.of("A", "B", "C"); // Le type est déduit comme List<String>

// Attention : le type doit être inféré immédiatement
// var invalide; // Erreur : la variable doit être initialisée
```

### Limitations
- Ne peut pas être utilisé pour les paramètres de méthode ou les champs de classe.
- Peut réduire la lisibilité si le type n'est pas évident à partir du contexte.
- Ne remplace pas les types explicites dans les cas où la clarté est essentielle.

```java
var resultat = calculComplexe(); // Peut être ambigu si le type de retour n'est pas clair
```

## Les types
Java est un langage fortement typé.

- **Entier (`int`)**
  - **Plage :** -2 147 483 648 à 2 147 483 647
  - **Description :** Un entier signé 32 bits utilisé pour les nombres entiers.

- **Long (`long`)**
  - **Plage :** -9 223 372 036 854 775 808 à 9 223 372 036 854 775 807
  - **Description :** Un entier signé 64 bits pour les nombres entiers plus grands.

- **Flottant (`float`)**
  - **Plage :** Environ ±3,40282347E+38F (7 chiffres décimaux)
  - **Description :** Un nombre à virgule flottante 32 bits pour les valeurs décimales.

- **Double (`double`)**
  - **Plage :** Environ ±1,79769313486231570E+308 (15 chiffres décimaux)
  - **Description :** Un nombre à virgule flottante 64 bits pour des valeurs décimales précises.

- **Caractère (`char`)**
  - **Plage :** 0 à 65 535 (non signé)
  - **Description :** Un caractère Unicode 16 bits.

- **Booléen (`boolean`)**
  - **Plage :** `true` ou `false`
  - **Description :** Représente l'une des deux valeurs, généralement utilisé pour les opérations logiques.

- **Octet (`byte`)**
  - **Plage :** -128 à 127
  - **Description :** Un entier signé 8 bits, utile pour économiser de la mémoire dans de grands tableaux.

- **Court (`short`)**
  - **Plage :** -32 768 à 32 767
  - **Description :** Un entier signé 16 bits, utilisé pour économiser de la mémoire dans de grands tableaux.

- **Chaîne (`String`)**
  - **Plage :** N/A
  - **Description :** Une séquence de caractères, utilisée pour le texte.


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
