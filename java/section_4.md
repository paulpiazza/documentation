---
title: Les strings
description: Java
order: 4
---

## String est-il un objet ?
- Oui, en Java, `String` est une classe et donc un objet. Chaque chaîne de caractères que vous créez est une instance de la classe `String`.
- Les objets `String` sont immuables, ce qui signifie que leur contenu ne peut pas être modifié après leur création.
- Exemple :
  ```java
  String texte = "Bonjour"; // Création d'un objet String
  System.out.println(texte instanceof String); // true
  ```
- Bien que `String` soit un objet, il peut être utilisé comme un type primitif grâce à des optimisations internes (comme le pool de chaînes).

## Opérations sur les Strings en Java

### Création d'une chaîne de caractères
- Une chaîne de caractères en Java est une séquence immuable de caractères. Elle peut être créée en utilisant des guillemets doubles.
- Exemple : 
  ```java
  String texte = "Bonjour";
  String vide = ""; // Chaîne vide
  ```

### Concaténation de chaînes
- La concaténation permet de combiner plusieurs chaînes en une seule. Cela peut être fait avec l'opérateur `+` ou la méthode `concat`.
- Exemple : 
  ```java
  String resultat = "Bonjour" + " " + "le monde";
  String resultat2 = "Bonjour".concat(" le monde");
  ```

### Longueur d'une chaîne
- La méthode `length` retourne le nombre de caractères dans une chaîne.
- Exemple : 
  ```java
  String texte = "Bonjour";
  int longueur = texte.length(); // longueur = 7
  ```

### Accéder à un caractère
- La méthode `charAt` permet d'accéder à un caractère spécifique dans une chaîne en utilisant son index (commençant à 0).
- Exemple : 
  ```java
  String texte = "Bonjour";
  char premierCaractere = texte.charAt(0); // 'B'
  char dernierCaractere = texte.charAt(texte.length() - 1); // 'r'
  ```

### Comparaison de chaînes
- Les chaînes peuvent être comparées avec `equals` (sensible à la casse) ou `equalsIgnoreCase` (insensible à la casse).
- Exemple : 
  ```java
  String texte = "Bonjour";
  boolean estEgal = texte.equals("Bonjour"); // true
  boolean estEgalIgnoreCase = texte.equalsIgnoreCase("bonjour"); // true
  ```

### Vérifier le début ou la fin
- Les méthodes `startsWith` et `endsWith` permettent de vérifier si une chaîne commence ou se termine par une sous-chaîne donnée.
- Exemple : 
  ```java
  String texte = "Bonjour";
  boolean commencePar = texte.startsWith("Bon"); // true
  boolean finitPar = texte.endsWith("jour"); // true
  ```

### Extraire une sous-chaîne
- La méthode `substring` permet d'extraire une partie d'une chaîne en spécifiant les indices de début et de fin.
- Exemple : 
  ```java
  String texte = "Bonjour";
  String sousChaine = texte.substring(0, 4); // "Bonj"
  String reste = texte.substring(4); // "our"
  ```

### Remplacer des caractères ou des sous-chaînes
- La méthode `replace` remplace toutes les occurrences d'un caractère ou d'une sous-chaîne par une autre.
- Exemple : 
  ```java
  String texte = "Bonjour";
  String remplacé = texte.replace("Bonjour", "Salut"); // "Salut"
  String remplacéCaractere = texte.replace('o', 'a'); // "Banjaur"
  ```

### Diviser une chaîne
- La méthode `split` divise une chaîne en un tableau de sous-chaînes en fonction d'un délimiteur.
- Exemple : 
  ```java
  String texte = "Bonjour le monde";
  String[] mots = texte.split(" "); // ["Bonjour", "le", "monde"]
  ```

### Supprimer les espaces inutiles
- La méthode `trim` supprime les espaces au début et à la fin d'une chaîne.
- Exemple : 
  ```java
  String texte = "  Bonjour  ";
  String nettoyé = texte.trim(); // "Bonjour"
  ```

### Conversion en majuscules ou minuscules
- Les méthodes `toUpperCase` et `toLowerCase` convertissent une chaîne en majuscules ou minuscules.
- Exemple : 
  ```java
  String texte = "Bonjour";
  String majuscule = texte.toUpperCase(); // "BONJOUR"
  String minuscule = texte.toLowerCase(); // "bonjour"
  ```

### Rechercher un caractère ou une sous-chaîne
- Les méthodes `indexOf` et `lastIndexOf` permettent de trouver la position d'un caractère ou d'une sous-chaîne.
- Exemple : 
  ```java
  String texte = "Bonjour";
  int position = texte.indexOf("o"); // 1
  int dernierePosition = texte.lastIndexOf("o"); // 4
  ```

### Vérifier si une chaîne est vide
- Les méthodes `isEmpty` et `isBlank` permettent de vérifier si une chaîne est vide ou contient uniquement des espaces.
- Exemple : 
  ```java
  String texte = "";
  boolean estVide = texte.isEmpty(); // true
  boolean estBlanc = texte.isBlank(); // true
  ```

## StringBuilder
- `StringBuilder` est une classe utilisée pour manipuler des chaînes de caractères de manière efficace. Contrairement à `String`, les objets `StringBuilder` sont mutables, ce qui signifie que leur contenu peut être modifié sans créer de nouveaux objets.
- Il est particulièrement utile pour les opérations répétées sur des chaînes, comme la concaténation dans une boucle.

  ```java
  StringBuilder sb = new StringBuilder("Bonjour");
  sb.append(" le monde"); // Ajoute " le monde" à la chaîne
  sb.insert(7, " à tous"); // Insère " à tous" à l'index 7
  sb.replace(0, 7, "Salut"); // Remplace "Bonjour" par "Salut"
  sb.delete(5, 9); // Supprime les caractères entre les indices 5 et 9
  String resultat = sb.toString(); // Convertit en String
  System.out.println(resultat); // "Salut monde"
  ```

- Méthodes principales :
  - `append(String s)`: Ajoute une chaîne à la fin.
  - `insert(int offset, String s)`: Insère une chaîne à un index donné.
  - `replace(int start, int end, String s)`: Remplace une partie de la chaîne.
  - `delete(int start, int end)`: Supprime une partie de la chaîne.
  - `reverse()`: Inverse la chaîne.
- Avantages :
  - Plus performant que la concaténation classique avec `+` dans des boucles.
  - Réduit la consommation de mémoire en évitant la création d'objets intermédiaires.

## Interpolation de chaînes
- L'interpolation de chaînes en Java peut être réalisée en utilisant la méthode `String.format` ou les chaînes textuelles avec `StringBuilder` ou `StringBuffer`.

Exemple avec `String.format` :
  ```java
  String nom = "Alice";
  int age = 25;
  String message = String.format("Bonjour, je m'appelle %s et j'ai %d ans.", nom, age);
  // "Bonjour, je m'appelle Alice et j'ai 25 ans."
  ```

Exemple avec la concaténation classique :
  ```java
  String nom = "Alice";
  int age = 25;
  String message = "Bonjour, je m'appelle " + nom + " et j'ai " + age + " ans.";
  // "Bonjour, je m'appelle Alice et j'ai 25 ans."
  ```

Exemple avec `StringBuilder` :
  ```java
  StringBuilder sb = new StringBuilder();
  sb.append("Bonjour, je m'appelle ").append("Alice").append(" et j'ai ").append(25).append(" ans.");
  String message = sb.toString();
  // "Bonjour, je m'appelle Alice et j'ai 25 ans."
  ```

