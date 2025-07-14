---
title: Les structures de contrôle
description: Java
order: 3
---

## Les conditions If ... Else

Les structures conditionnelles `if`, `else if` et `else` permettent d'exécuter différents blocs de code en fonction de plusieurs conditions.

```java
int age = 18;
if (age < 13) {
    System.out.println("Vous êtes un enfant.");
} else if (age >= 13 && age < 18) {
    System.out.println("Vous êtes un adolescent.");
} else {
    System.out.println("Vous êtes un adulte.");
}
```

## Le Switch

La structure `switch` est utilisée pour exécuter différents blocs de code en fonction de la valeur d'une variable.

```java
int jour = 3;
switch (jour) {
    case 1:
        System.out.println("Lundi");
        break;
    case 2:
        System.out.println("Mardi");
        break;
    case 3:
        System.out.println("Mercredi");
        break;
    default:
        System.out.println("Jour inconnu");
}
```

## Opérateur ternaire

L'opérateur ternaire est une forme concise d'écriture d'une condition `if-else`.

```java
int age = 20;
String statut = (age >= 18) ? "Majeur" : "Mineur";
System.out.println(statut);
```

## L'itérable

Les objets itérables permettent de parcourir des collections comme les listes ou les ensembles.

### Création d'un tableau

Un tableau est une structure de données qui contient un ensemble d'éléments de même type.
  - Taille fixe : Une fois créé, la taille d'un tableau ne peut pas être modifiée.
  - Type primitif : Les tableaux peuvent contenir des types primitifs (comme `int`, `double`) ou des objets.
  - Syntaxe simple : Les tableaux sont directement supportés par le langage Java.


#### Tableau d'entiers

```java
int[] nombres = {1, 2, 3, 4, 5};
for (int nombre : nombres) {
    System.out.println(nombre);
}
```

#### Tableau de chaînes de caractères

Vous pouvez également créer un tableau de chaînes de caractères :

```java
String[] mots = {"Bonjour", "le", "monde"};
for (String mot : mots) {
    System.out.println(mot);
}
```

#### Tableau d'objets

Les tableaux peuvent contenir des objets. Par exemple, un tableau d'objets de type `Personne` :

```java
class Personne {
    String nom;

    Personne(String nom) {
        this.nom = nom;
    }

    @Override
    public String toString() {
        return nom;
    }
}

Personne[] personnes = {
    new Personne("Alice"),
    new Personne("Bob"),
    new Personne("Charlie")
};

for (Personne personne : personnes) {
    System.out.println(personne);
}
```

### Parcourir une liste

Les listes sont des collections dynamiques qui peuvent être parcourues avec une boucle `for-each`.

#### Création d'une liste avec `asList`

La méthode `Arrays.asList` permet de créer une liste immuable à partir d'un tableau ou d'une série d'éléments.

```java
List<String> fruits = Arrays.asList("Pomme", "Banane", "Cerise");
for (String fruit : fruits) {
    System.out.println(fruit);
}
```

> **Note** : Les listes créées avec `asList` ne peuvent pas être modifiées (pas d'ajout ou de suppression d'éléments).

#### Création d'une liste modifiable

Pour créer une liste modifiable, utilisez une implémentation comme `ArrayList`.

```java
List<String> fruits = new ArrayList<>();
fruits.add("Pomme");
fruits.add("Banane");
fruits.add("Cerise");
System.out.println(fruits);
```

#### Ajouter des éléments avec `add`

La méthode `add` permet d'ajouter un élément à la liste.

```java
fruits.add("Orange");
System.out.println(fruits); // [Pomme, Banane, Cerise, Orange]
```

#### Supprimer des éléments avec `remove`

La méthode `remove` permet de supprimer un élément par sa valeur ou par son index.

```java
fruits.remove("Banane"); // Supprime "Banane" par sa valeur
System.out.println(fruits); // [Pomme, Cerise, Orange]

fruits.remove(0); // Supprime l'élément à l'index 0
System.out.println(fruits); // [Cerise, Orange]
```

#### Accéder à un élément avec `get`

La méthode `get` permet d'accéder à un élément par son index.

```java
String premierFruit = fruits.get(0);
System.out.println(premierFruit); // Cerise
```

#### Vérifier la présence d'un élément avec `contains`

La méthode `contains` permet de vérifier si un élément est présent dans la liste.

```java
boolean contientCerise = fruits.contains("Cerise");
System.out.println(contientCerise); // true
```

#### Parcourir une liste avec une boucle `for`

```java
for (int i = 0; i < fruits.size(); i++) {
    System.out.println(fruits.get(i));
}
```

#### Taille de la liste avec `size`

La méthode `size` retourne le nombre d'éléments dans la liste.

```java
System.out.println(fruits.size()); // 2
```

## Boucles For

La boucle `for` est utilisée pour exécuter un bloc de code un nombre défini de fois.

```java
for (int i = 0; i < 5; i++) {
    System.out.println("Compteur : " + i);
}
```

### Boucle For-Each

La boucle `for-each` est une variante simplifiée de la boucle `for` utilisée pour parcourir des collections ou des tableaux.

```java
int[] nombres = {1, 2, 3, 4, 5};
for (int nombre : nombres) {
    System.out.println("Nombre : " + nombre);
}
```

## Boucles While

La boucle `while` exécute un bloc de code tant qu'une condition est vraie.

```java
int compteur = 0;
while (compteur < 5) {
    System.out.println("Compteur : " + compteur);
    compteur++;
}
```

## `continue` et `break`

Les mots-clés `continue` et `break` permettent de contrôler le flux des boucles.

```java
for (int i = 0; i < 10; i++) {
    if (i == 5) {
        continue; // Passe à l'itération suivante
    }
    if (i == 8) {
        break; // Sort de la boucle
    }
    System.out.println(i);
}
```

