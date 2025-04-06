---
title: La gestion des erreurs
description: Java
order: 11
---

## Les exceptions

Les exceptions en Java sont des événements qui interrompent le flux normal d'un programme. Elles sont utilisées pour gérer les erreurs de manière contrôlée.


```java
public class ExempleException {
    public static void main(String[] args) {
        try {
            int division = 10 / 0; // Provoque une ArithmeticException
        } catch (ArithmeticException e) {
            System.out.println("Erreur : Division par zéro !");
        }
    }
}
```

## Les blocs `try-catch-finally`

Le bloc `try` permet d'exécuter du code susceptible de générer une exception. Le bloc `catch` capture et gère cette exception. Le bloc `finally` est optionnel et s'exécute toujours, qu'une exception soit levée ou non.


```java
public class ExempleTryCatchFinally {
    public static void main(String[] args) {
        try {
            int[] tableau = {1, 2, 3};
            System.out.println(tableau[5]); // Provoque une ArrayIndexOutOfBoundsException
        } catch (ArrayIndexOutOfBoundsException e) {
            System.out.println("Erreur : Index hors limites !");
        } finally {
            System.out.println("Bloc finally exécuté.");
        }
    }
}
```

## Personnaliser une exception

Vous pouvez créer vos propres exceptions en étendant la classe `Exception` ou `RuntimeException`.


```java
class MonException extends Exception {
    public MonException(String message) {
        super(message);
    }
}

public class ExempleExceptionPersonnalisee {
    public static void main(String[] args) {
        try {
            verifierValeur(-1);
        } catch (MonException e) {
            System.out.println("Exception capturée : " + e.getMessage());
        }
    }

    public static void verifierValeur(int valeur) throws MonException {
        if (valeur < 0) {
            throw new MonException("La valeur ne peut pas être négative !");
        }
    }
}
```

## Exception Try with resources

Le bloc `try-with-resources` est utilisé pour gérer automatiquement la fermeture des ressources (comme les fichiers ou les connexions réseau) qui implémentent l'interface `AutoCloseable`.


```java
import java.io.BufferedReader;
import java.io.FileReader;
import java.io.IOException;

public class ExempleTryWithResources {
    public static void main(String[] args) {
        try (BufferedReader br = new BufferedReader(new FileReader("fichier.txt"))) {
            String ligne;
            while ((ligne = br.readLine()) != null) {
                System.out.println(ligne);
            }
        } catch (IOException e) {
            System.out.println("Erreur lors de la lecture du fichier : " + e.getMessage());
        }
    }
}
```
