---
title: La console
description: Java
order: 10
---

## Introduction à la console en Java

La console en Java est un moyen simple et efficace pour interagir avec l'utilisateur. Elle permet d'afficher des messages et de recevoir des entrées utilisateur via le terminal.

### Afficher des messages dans la console

Pour afficher des messages dans la console, on utilise la méthode `System.out.println()` ou `System.out.print()` :

```java
// Exemple d'affichage
System.out.println("Bonjour, utilisateur !");
System.out.print("Entrez votre nom : ");
```

- `System.out.println()` ajoute une nouvelle ligne après le message.
- `System.out.print()` n'ajoute pas de nouvelle ligne.

### Lire des entrées utilisateur

Pour lire des données saisies par l'utilisateur, on utilise la classe `Scanner` du package `java.util` :

```java
import java.util.Scanner;

public class ExempleConsole {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        // Lire une chaîne de caractères
        System.out.print("Entrez votre nom : ");
        String nom = scanner.nextLine();
        System.out.println("Bonjour, " + nom + "!");

        // Lire un entier
        System.out.print("Entrez votre âge : ");
        int age = scanner.nextInt();
        System.out.println("Vous avez " + age + " ans.");

        // Lire un nombre décimal
        System.out.print("Entrez votre taille (en mètres) : ");
        double taille = scanner.nextDouble();
        System.out.println("Votre taille est de " + taille + " m.");

        scanner.close(); // Fermer le scanner
    }
}
```

### Demander une réponse Oui/Non

Pour demander une réponse de type Oui/Non à l'utilisateur, vous pouvez utiliser la classe `Scanner` et lire une chaîne de caractères. Ensuite, comparez la réponse avec les valeurs attendues (`"oui"`, `"non"`, etc.).

Voici un 

```java
import java.util.Scanner;

public class OuiNonExemple {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        System.out.print("Voulez-vous continuer ? (oui/non) : ");
        String reponse = scanner.nextLine().trim().toLowerCase();

        if (reponse.equals("oui")) {
            System.out.println("Vous avez choisi de continuer.");
        } else if (reponse.equals("non")) {
            System.out.println("Vous avez choisi d'arrêter.");
        } else {
            System.out.println("Réponse non reconnue. Veuillez répondre par 'oui' ou 'non'.");
        }

        scanner.close();
    }
}
```

### Points importants pour Oui/Non

1. **Normalisation de la saisie** : Utilisez `trim()` pour supprimer les espaces inutiles et `toLowerCase()` pour éviter les problèmes de casse.
2. **Validation des entrées** : Vérifiez que la réponse correspond à une valeur attendue (`"oui"` ou `"non"`).
3. **Boucle pour répétition** : Si nécessaire, utilisez une boucle pour redemander une réponse valide.

Exemple avec une boucle :

```java
import java.util.Scanner;

public class OuiNonBoucle {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        String reponse;

        do {
            System.out.print("Voulez-vous continuer ? (oui/non) : ");
            reponse = scanner.nextLine().trim().toLowerCase();

            if (reponse.equals("oui")) {
                System.out.println("Vous avez choisi de continuer.");
            } else if (reponse.equals("non")) {
                System.out.println("Vous avez choisi d'arrêter.");
            } else {
                System.out.println("Réponse non reconnue. Veuillez répondre par 'oui' ou 'non'.");
            }
        } while (!reponse.equals("oui") && !reponse.equals("non"));

        scanner.close();
    }
}
```

## Points importants

1. **Fermer le Scanner** : Il est recommandé de fermer le `Scanner` après utilisation pour libérer les ressources.
2. **Gestion des erreurs** : Utilisez des blocs `try-catch` pour gérer les erreurs potentielles, comme une saisie incorrecte.
3. **Formatage des sorties** : Utilisez `System.out.printf()` pour formater les sorties.


