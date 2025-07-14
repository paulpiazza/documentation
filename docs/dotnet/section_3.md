---
title: Variables and Declarations
description: .NET framework
order: 3
---
En .NET, les **types primitifs** sont des types de données de base intégrés au langage, qui servent à stocker des valeurs simples. Voici une liste des types primitifs les plus courants, une explication de leur utilité, et un exemple pour chacun :

### 1. **`byte`**
   - **Description** : Stocke un entier non signé (valeurs positives uniquement).
   - **Taille** : 8 bits (1 octet).
   - **Plage de valeurs** : 0 à 255.
   - **Exemple** :
     ```csharp
     byte age = 25;
     ```

### 2. **`sbyte`**
   - **Description** : Stocke un entier signé (valeurs positives et négatives).
   - **Taille** : 8 bits (1 octet).
   - **Plage de valeurs** : -128 à 127.
   - **Exemple** :
     ```csharp
     sbyte temperature = -10;
     ```

### 3. **`short`**
   - **Description** : Stocke un entier signé de petite taille.
   - **Taille** : 16 bits (2 octets).
   - **Plage de valeurs** : -32,768 à 32,767.
   - **Exemple** :
     ```csharp
     short year = 2025;
     ```

### 4. **`ushort`**
   - **Description** : Stocke un entier non signé.
   - **Taille** : 16 bits (2 octets).
   - **Plage de valeurs** : 0 à 65,535.
   - **Exemple** :
     ```csharp
     ushort port = 8080;
     ```

### 5. **`int`**
   - **Description** : Stocke un entier signé standard.
   - **Taille** : 32 bits (4 octets).
   - **Plage de valeurs** : -2,147,483,648 à 2,147,483,647.
   - **Exemple** :
     ```csharp
     int population = 1000000;
     ```

### 6. **`uint`**
   - **Description** : Stocke un entier non signé.
   - **Taille** : 32 bits (4 octets).
   - **Plage de valeurs** : 0 à 4,294,967,295.
   - **Exemple** :
     ```csharp
     uint distance = 1500;
     ```

### 7. **`long`**
   - **Description** : Stocke un entier signé de grande taille.
   - **Taille** : 64 bits (8 octets).
   - **Plage de valeurs** : -9,223,372,036,854,775,808 à 9,223,372,036,854,775,807.
   - **Exemple** :
     ```csharp
     long distanceToSun = 149600000000;
     ```

### 8. **`ulong`**
   - **Description** : Stocke un entier non signé de grande taille.
   - **Taille** : 64 bits (8 octets).
   - **Plage de valeurs** : 0 à 18,446,744,073,709,551,615.
   - **Exemple** :
     ```csharp
     ulong starsInGalaxy = 100000000000000000;
     ```

### 9. **`float`**
   - **Description** : Stocke un nombre à virgule flottante simple précision.
   - **Taille** : 32 bits (4 octets).
   - **Plage de valeurs** : Environ ±1.5 × 10⁻⁴⁵ à ±3.4 × 10³⁸.
   - **Exemple** :
     ```csharp
     float temperature = 36.6f;
     ```

### 10. **`double`**
   - **Description** : Stocke un nombre à virgule flottante double précision.
   - **Taille** : 64 bits (8 octets).
   - **Plage de valeurs** : Environ ±5.0 × 10⁻³²⁴ à ±1.7 × 10³⁰⁸.
   - **Exemple** :
     ```csharp
     double pi = 3.14159265359;
     ```

### 11. **`decimal`**
   - **Description** : Stocke un nombre à virgule flottante haute précision (souvent utilisé pour les calculs financiers).
   - **Taille** : 128 bits (16 octets).
   - **Plage de valeurs** : Environ ±1.0 × 10⁻²⁸ à ±7.9 × 10²⁸.
   - **Exemple** :
     ```csharp
     decimal price = 19.99m;
     ```

### 12. **`char`**
   - **Description** : Stocke un caractère Unicode unique.
   - **Taille** : 16 bits (2 octets).
   - **Plage de valeurs** : U+0000 à U+FFFF.
   - **Exemple** :
     ```csharp
     char initial = 'A';
     ```

### 13. **`bool`**
   - **Description** : Stocke une valeur booléenne (vrai ou faux).
   - **Taille** : 1 bit (représenté en mémoire par un octet).
   - **Valeurs possibles** : `true` ou `false`.
   - **Exemple** :
     ```csharp
     bool isOnline = true;
     ```

### 14. **`string`**
   - **Description** : Stocke une séquence de caractères Unicode (non techniquement un type primitif, mais souvent considéré comme tel en .NET).
   - **Exemple** :
     ```csharp
     string name = "John Doe";
     ```

### Déclaration de Variable en C#

Pour déclarer une variable en C#, il faut :
1. Spécifier le **type de la variable**.
2. Donner un **nom** à la variable.
3. (Optionnel) L'initialiser avec une valeur.

**Syntaxe Générale** :
```csharp
type nomVariable = valeur;
```
#### Exemples :
1. **Déclaration et initialisation directe** :
   ```csharp
   int age = 30;
   ```

2. **Déclaration sans initialisation** :
   ```csharp
   int age;
   age = 30; // Initialisation ultérieure
   ```

3. **Utilisation de `var` (déduction automatique du type)** :
   ```csharp
   var age = 30; // Le compilateur déduit que c'est un int
   ```


### Règles Importantes

- Une variable doit être **déclarée avant utilisation**.
- Le nom de la variable doit être **unique** dans son scope (portée).
- Les noms de variables doivent respecter la convention camelCase (par exemple : `myVariable`).

### Règles et conventions de nommage des variables

Un développeur de logiciels a un jour prononcé cette célèbre phrase : « La partie la plus difficile du développement de logiciels est de donner un nom aux choses. » Non seulement le nom d’une variable doit suivre certaines règles de syntaxe, mais il doit également être utilisé pour rendre le code plus lisible et plus compréhensible. C’est beaucoup demander à une seule ligne de code !

Voici quelques considérations importantes relatives aux noms de variables :

- Les noms de variables peuvent contenir des caractères alphanumériques et le trait de soulignement. Les caractères spéciaux tels que le symbole de hachage `#` (également appelé symbole de nombre ou symbole dièse) ou le symbole de dollar `$` ne sont pas autorisés.
- Les noms de variables doivent commencer par une lettre de l’alphabet ou un trait de soulignement, et non pas par un chiffre.
- Les noms de variable respectent la casse. Ainsi, `string Value;` et `string value;` sont deux variables différentes.
- Les noms de variables ne doivent **pas** être un mot clé C#. Par exemple, vous ne pouvez pas utiliser les déclarations de variables suivantes : `decimal decimal;` ou `string string;`.

Il existe des conventions de codage qui permettent de garder les variables lisibles et faciles à identifier. À mesure que vous développez des applications plus volumineuses, ces conventions de codage peuvent vous aider à effectuer le suivi des variables parmi d’autres éléments de texte.

Voici quelques conventions de codage applicables aux variables :

- Les noms de variables doivent utiliser la **casse mixte**. Il s’agit d’un style d’écriture qui utilise une lettre minuscule au début du premier mot et une lettre majuscule au début de chaque mot suivant. Par exemple : `string thisIsCamelCase;`.
- Les noms de variables doivent commencer par une lettre alphabétique. Les développeurs utilisent le trait de soulignement à des fins spéciales. Par conséquent, essayez de ne pas les utiliser pour le moment.
- Les noms de variables doivent être descriptifs et explicites dans votre application. Choisissez pour votre variable un nom qui représente le type de données qu’elle contiendra.
- Les noms de variables doivent être un ou plusieurs mots entiers ajoutés les uns aux autres. N’utilisez ni contractions ni abréviations, car les noms des variables (et donc, leur finalité) pourraient ne pas avoir de sens pour les autres utilisateurs qui lisent votre code.
- Les noms de variables ne doivent pas inclure le type de données de la variable. Vous avez probablement vu un conseil d’utiliser un style comme `string strValue;`. Ce conseil n’a plus cours.

L’exemple `string firstName;` suit toutes ces règles et conventions, en supposant que vous voulez utiliser cette variable pour stocker des données qui représentent le prénom d’une personne.

En C#, il est possible de déclarer des variables locales **implicitement typées** en utilisant le mot-clé `var`. Cela signifie que le type de la variable est **déduit automatiquement par le compilateur** en fonction de la valeur qui lui est assignée lors de l'initialisation. Cependant, il y a des règles et des limitations à respecter.

### Déclaration Implicitement Typée avec `var`

#### Syntaxe 
```csharp
var nomVariable = valeur;
```

- Le mot-clé `var` remplace le type explicite.
- Le type de la variable est déterminé **au moment de la compilation** en fonction de la valeur assignée.
- La variable **doit être initialisée lors de sa déclaration**, sinon le compilateur ne pourra pas déduire son type.

### Exemples de Déclarations Implicitement Typées

1. **Entier (`int`) :**
   ```csharp
   var age = 25; // Le type est déduit comme étant int
   ```

2. **Nombre à virgule flottante (`double`) :**
   ```csharp
   var pi = 3.14; // Le type est déduit comme étant double
   ```

3. **Chaîne de caractères (`string`) :**
   ```csharp
   var name = "Alice"; // Le type est déduit comme étant string
   ```

4. **Booléen (`bool`) :**
   ```csharp
   var isOnline = true; // Le type est déduit comme étant bool
   ```

5. **Liste générique (`List<int>`) :**
   ```csharp
   var numbers = new List<int> { 1, 2, 3 }; // Le type est List<int>
   ```

6. **Objet complexe :**
   ```csharp
   var person = new { Name = "John", Age = 30 }; // Le type est un objet anonyme
   ```

### Règles et Limitations

1. **Obligation d'initialisation :**
   - Une variable déclarée avec `var` doit être initialisée immédiatement :
     ```csharp
     var x; // Erreur : impossible de déduire le type
     ```

2. **Le type est fixe après déduction :**
   - Une fois le type déduit, il ne peut plus être modifié :
     ```csharp
     var number = 10; // Le type est int
     number = "Hello"; // Erreur : incompatible avec int
     ```

3. **`var` ne peut pas être utilisé pour les champs (variables membres d'une classe) :**
   - `var` est réservé aux **variables locales** dans les méthodes ou blocs de code.
     ```csharp
     class MyClass
     {
         var field; // Erreur : interdit
     }
     ```

4. **Lisibilité du code :**
   - Bien que `var` simplifie la syntaxe, il peut nuire à la lisibilité si le type n'est pas évident :
     ```csharp
     var result = SomeComplexMethod(); // Quel type est renvoyé ?
     ```

5. **Pas utilisable pour les types anonymes :**
   - `var` est obligatoire pour les objets de type anonyme, car leur type n'a pas de nom explicite.
     ```csharp
     var person = new { Name = "Alice", Age = 25 }; // Obligatoire
     ```

### Quand Utiliser `var` ?

L'utilisation de `var` est une question de préférence et de style de codage. Voici quelques recommandations :

1. **Utiliser `var` lorsque le type est évident à partir de la valeur assignée :**
   ```csharp
   var age = 30; // Évident que c'est un int
   var name = "Alice"; // Évident que c'est une string
   ```

2. **Éviter `var` lorsque le type n'est pas immédiatement clair :**
   ```csharp
   var result = DoSomething(); // Pas clair : quel est le type de result ?
   ```

3. **Toujours utiliser `var` pour les types anonymes :**
   ```csharp
   var person = new { Name = "John", Age = 30 }; // Obligatoire
   ```

```csharp
using System;
using System.Collections.Generic;

class Program
{
    static void Main()
    {
        // Déclaration avec var
        var age = 25; // int
        var name = "Alice"; // string
        var isOnline = true; // bool
        var numbers = new List<int> { 1, 2, 3 }; // List<int>

        // Affichage des valeurs
        Console.WriteLine($"Name: {name}, Age: {age}, Online: {isOnline}");
        Console.WriteLine("Numbers: " + string.Join(", ", numbers));
    }
}
```
