---
title: Les Collections
description: Java
order: 6
---

## Les Tableaux

Les tableaux en Java sont des structures de données fixes qui permettent de stocker plusieurs éléments du même type. Ils sont déclarés avec une taille fixe et ne peuvent pas être redimensionnés.

### 
```java
int[] nombres = new int[5];
nombres[0] = 10;
nombres[1] = 20;
// Accès à un élément
System.out.println(nombres[0]); // Affiche 10
```

### Opérations possibles :
- **Accéder à un élément** : `nombres[index]`
- **Modifier un élément** : `nombres[index] = valeur`

## Création de listes et tableaux

Java propose plusieurs méthodes pour créer des listes et des tableaux. Voici un aperçu des principales options et leurs différences.

### `Arrays.asList`

Cette méthode permet de créer une liste mutable basée sur un tableau fixe. Cependant, la taille de la liste ne peut pas être modifiée (pas d'ajout ou de suppression d'éléments).

```java
List<String> mutable = Arrays.asList("Rouge", "Vert", "Bleu");
System.out.println(mutable.get(1)); // Affiche "Vert"
// couleurs.add("Jaune"); // Provoque une UnsupportedOperationException
```

### `List.of`

Introduite avec Java 9, cette méthode permet de créer une liste immuable. Toute tentative de modification de la liste (ajout, suppression, modification) provoque une exception.

```java
List<String> immuable = List.of("Alice", "Bob", "Charlie");
System.out.println(immuable.get(1)); // Affiche "Bob"
// immuable.add("David"); // Provoque une UnsupportedOperationException
```

### `new ArrayList<>()`

Cette méthode crée une liste mutable et dynamique. Vous pouvez ajouter, supprimer ou modifier des éléments librement.

```java
List<String> noms = new ArrayList<>();
noms.add("Alice");
noms.add("Bob");
System.out.println(noms.get(0)); // Affiche "Alice"
noms.add("Charlie"); // Ajout possible
```
### Tableaux avec `new`

Pour créer un tableau fixe, vous pouvez utiliser la syntaxe `new`. Les tableaux sont immuables en taille, mais leurs éléments peuvent être modifiés.

```java
int[] nombres = new int[3];
nombres[0] = 10;
nombres[1] = 20;
System.out.println(nombres[0]); // Affiche 10
```

### Différences principales

| Méthode                     | Mutable | Taille modifiable | Immuable |
|-----------------------------|---------|-------------------|----------|
| `Arrays.asList`             | Oui     | Non               | Non      |
| `List.of`                   | Non     | Non               | Oui      |
| `new ArrayList<>()`         | Oui     | Oui               | Non      |
| Tableaux (`new`)            | Oui     | Non               | Non      |

Cette section vous aide à choisir la méthode adaptée à vos besoins en fonction des contraintes de mutabilité et de taille.

## Les interfaces des collections

Java fournit plusieurs interfaces pour manipuler des collections de données dynamiques, comme `List`, `Set`, et `Map`. Ces interfaces définissent des méthodes communes pour ajouter, supprimer, ou manipuler des éléments.

### Méthodes communes :
- `add(E e)` : Ajoute un élément.
- `remove(Object o)` : Supprime un élément.
- `size()` : Retourne la taille de la collection.
- `clear()` : Vide la collection.

## Les listes : `List`

Une liste est une collection ordonnée qui permet les doublons. Les éléments sont accessibles par leur index.

### Implémentations :
- `ArrayList` : Liste basée sur un tableau dynamique, rapide pour l'accès par index.
- `LinkedList` : Liste chaînée, efficace pour les insertions et suppressions fréquentes.

### 
```java
List<String> noms = new ArrayList<>();
noms.add("Alice");
noms.add("Bob");
noms.add("Alice"); // Les doublons sont autorisés
System.out.println(noms.get(0)); // Affiche "Alice"

// Exemple avec List.of (liste immuable)
List<String> immuable = List.of("Alice", "Bob", "Charlie");
System.out.println(immuable.get(1)); // Affiche "Bob"

// Exemple de Arrays.asList (liste mutable)
List<String> couleurs = Arrays.asList("Rouge", "Vert", "Bleu");
System.out.println(couleurs.get(1)); // Affiche "Vert"
```

### Opérations possibles :
- **Ajouter un élément** : `add(E e)`
- **Supprimer un élément** : `remove(Object o)` ou `remove(int index)`
- **Obtenir un élément** : `get(int index)`
- **Modifier un élément** : `set(int index, E element)`

## Les ensembles : `Set`

Un ensemble est une collection non ordonnée qui ne permet pas les doublons.

### Implémentations :
- `HashSet` : Basé sur une table de hachage, rapide pour les opérations de recherche.
- `TreeSet` : Basé sur un arbre binaire, maintient les éléments triés.
- `LinkedHashSet` : Maintient l'ordre d'insertion.

### 
```java
Set<String> fruits = new HashSet<>();
fruits.add("Pomme");
fruits.add("Banane");
fruits.add("Pomme"); // Ignoré car doublon
System.out.println(fruits.size()); // Affiche 2
```

### Opérations possibles :
- **Ajouter un élément** : `add(E e)`
- **Supprimer un élément** : `remove(Object o)`
- **Vérifier la présence d'un élément** : `contains(Object o)`

## Les associations clés / valeurs `Map`

Une `Map` est une collection qui associe des clés à des valeurs. Les clés doivent être uniques.

### Implémentations :
- `HashMap` : Basé sur une table de hachage, rapide pour les recherches.
- `TreeMap` : Basé sur un arbre binaire, maintient les clés triées.
- `LinkedHashMap` : Maintient l'ordre d'insertion.

### 
```java
Map<String, Integer> ages = new HashMap<>();
ages.put("Alice", 25);
ages.put("Bob", 30);
System.out.println(ages.get("Alice")); // Affiche 25
```

### Opérations possibles :
- **Ajouter ou modifier une association** : `put(K key, V value)`
- **Supprimer une association** : `remove(Object key)`
- **Obtenir une valeur** : `get(Object key)`
- **Vérifier la présence d'une clé** : `containsKey(Object key)`

## Le hashCode

La méthode `hashCode` est utilisée pour générer un code de hachage pour un objet. Elle est souvent utilisée dans les collections comme `HashSet` ou `HashMap`.

### 
```java
class Personne {
    private String nom;

    @Override
    public int hashCode() {
        return nom.hashCode();
    }
}
```

### Points importants :
- Deux objets égaux (`equals`) doivent avoir le même `hashCode`.
- Un bon `hashCode` améliore les performances des collections basées sur le hachage.

## Comparaison des collections

Voici un tableau récapitulatif des principales différences entre `List`, `Set`, et `Map` :

| Caractéristique         | `List`                     | `Set`                      | `Map`                          |
|--------------------------|----------------------------|----------------------------|--------------------------------|
| **Cas d'utilisation**    | Gestion de listes ordonnées avec doublons, ex. une liste de tâches | Gestion d'ensembles uniques, ex. un ensemble de tags | Gestion de relations clé-valeur, ex. un dictionnaire ou une table de configuration |
| **Ordre des éléments**   | Ordonné                   | Non ordonné                | Non applicable                |
| **Doublons autorisés**   | Oui                       | Non                        | Non applicable (clés uniques) |
| **Accès par index**      | Oui                       | Non                        | Non applicable                |
| **Clé/valeur**           | Non                       | Non                        | Oui                           |
| **Exemples d'implémentations** | `ArrayList`, `LinkedList` | `HashSet`, `TreeSet`, `LinkedHashSet` | `HashMap`, `TreeMap`, `LinkedHashMap` |