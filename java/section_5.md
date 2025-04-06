---
title: Les Fonctions
description: Java
order: 5
---

## Introduction aux fonctions

Les fonctions en Java sont des blocs de code réutilisables qui exécutent une tâche spécifique. Elles permettent de structurer le code, de réduire la duplication et d'améliorer la lisibilité. Une fonction est définie avec 
- un type de retour, 
- un nom, et éventuellement
- des paramètres.


```java
public int addition(int a, int b) {
    return a + b;
}
```

## Paramètres et Arguments

Les paramètres sont les variables définies dans la déclaration de la fonction, tandis que les arguments sont les valeurs passées à la fonction lors de son appel.


```java
public void afficherMessage(String message) {
    System.out.println(message);
}

// Appel de la fonction
afficherMessage("Bonjour, Java !");
```

## Passage par référence ou par valeur

En Java, les types primitifs (int, double, etc.) sont passés par valeur, ce qui signifie que la fonction reçoit une copie de la valeur. Les objets, en revanche, sont passés par référence, mais Java utilise une "copie de la référence", ce qui signifie que les modifications sur l'objet affectent l'original.


```java
public void modifierValeur(int x) {
    x = 10; // Ne modifie pas la variable originale
}

public void modifierObjet(StringBuilder sb) {
    sb.append(" ajouté"); // Modifie l'objet original
}
```

## Documentation des fonctions

Il est important de documenter les fonctions pour expliquer leur rôle, leurs paramètres et leur valeur de retour. En Java, cela se fait généralement avec des commentaires Javadoc.


```java
/**
 * Additionne deux nombres entiers.
 * @param a Le premier nombre.
 * @param b Le second nombre.
 * @return La somme des deux nombres.
 */
public int addition(int a, int b) {
    return a + b;
}
```

## Les annotations de marquage (marker annotation) de fonction

Les annotations en Java sont des métadonnées ajoutées au code pour fournir des informations supplémentaires au compilateur ou à l'environnement d'exécution. Elles sont souvent utilisées pour indiquer des comportements spécifiques ou pour fournir des instructions au compilateur.

Ces annotations permettent d'améliorer la lisibilité et la maintenabilité du code tout en fournissant des informations utiles au compilateur et aux développeurs.

Il est même possible de les ajouter.
```java
@Deprecated
@SuppressWarnings("unchecked")
public void ancienneMethode() {
    System.out.println("Cette méthode est obsolète");
}
```


### @Deprecated

L'annotation `@Deprecated` est utilisée pour marquer une méthode, une classe ou un champ comme obsolète. Cela signifie qu'il ne devrait plus être utilisé, car il pourrait être supprimé dans une version future.

```java
@Deprecated
public void ancienneMethode() {
    System.out.println("Cette méthode est obsolète");
}
```

### @SuppressWarnings

L'annotation `@SuppressWarnings` est utilisée pour demander au compilateur d'ignorer certains avertissements spécifiques. Elle est souvent utilisée pour éviter des avertissements inutiles dans le code.

```java
@SuppressWarnings("unchecked")
public void methode() {
    List liste = new ArrayList();
    liste.add("Exemple");
}
```

