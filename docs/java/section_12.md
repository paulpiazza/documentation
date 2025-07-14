---
title: La programmation fonctionnelle
description: Java
order: 12
---

## Introduction à la programmation fonctionnelle

La programmation fonctionnelle est un paradigme de programmation qui traite les calculs comme l'évaluation de fonctions mathématiques. Elle favorise l'utilisation de fonctions pures, l'immutabilité et l'absence d'effets de bord. Voir la liste des méthodes de l'API [Documentation JAVA - Method Summary](https://docs.oracle.com/en/java/javase/21/docs/api//java.base/java/util/stream/Stream.html#method-summary)

```java
Function<Integer, Integer> carre = x -> x * x;
System.out.println(carre.apply(5)); // Affiche 25
```

## Interfaces fonctionnelles

Une interface fonctionnelle est une interface qui ne contient qu'une seule méthode abstraite. Elle peut être utilisée comme cible pour une expression lambda ou une référence de méthode.

```java
@FunctionalInterface
interface Calcul {
    int operation(int a, int b);
}

public class ExempleInterfaceFonctionnelle {
    public static void main(String[] args) {
        Calcul addition = (a, b) -> a + b;
        System.out.println(addition.operation(5, 3)); // Affiche 8
    }
}
```

## Les expressions lambdas

Les expressions lambdas permettent de définir des fonctions anonymes de manière concise. Elles sont souvent utilisées pour implémenter des interfaces fonctionnelles.

```java
Runnable runnable = () -> System.out.println("Exécution d'un thread");
new Thread(runnable).start();
```

## API Stream

L'API Stream permet de traiter des collections de données de manière fonctionnelle. Elle offre des méthodes pour filtrer, transformer et collecter des données.

```java
List<String> noms = Arrays.asList("Alice", "Bob", "Charlie");
noms.stream()
    .filter(nom -> nom.startsWith("A"))
    .forEach(System.out::println); // Affiche "Alice"
```

## API Stream : les méthodes intermédiaires

Les méthodes intermédiaires retournent un nouveau Stream et permettent de chaîner plusieurs opérations.

```java
List<Integer> nombres = Arrays.asList(1, 2, 3, 4, 5);
nombres.stream()
    .map(n -> n * n)
    .filter(n -> n > 10)
    .forEach(System.out::println); // Affiche 16 et 25
```

## API Stream : les méthodes terminales

Les méthodes terminales déclenchent le traitement du Stream et retournent un résultat ou effectuent une action.

```java
List<Integer> nombres = Arrays.asList(1, 2, 3, 4, 5);
int somme = nombres.stream()
    .reduce(0, Integer::sum);
System.out.println(somme); // Affiche 15
```
