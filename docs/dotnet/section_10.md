---
title: Tableaux et Boucles
description: .NET framework
order: 10
---

## Arrays

En .NET, un tableau est une structure spéciale qui vous permet de stocker plusieurs éléments de données associés dans une seule variable. Par exemple, si vous voulez stocker les âges de plusieurs personnes, au lieu de créer une variable pour chaque âge, vous pouvez utiliser un tableau. Tous les éléments d’un tableau doivent être du même type, comme des entiers (`int`), des chaînes de caractères (`string`), etc. Un tableau est particulièrement utile lorsque vous travaillez avec des collections de données.

Pour déclarer un tableau, vous devez suivre un format spécifique. Prenons un exemple simple. Si vous voulez créer un tableau pour stocker 5 nombres entiers, vous pouvez écrire ceci :  
```csharp
int[] nombres = new int[5];
```  
Ici, `int[]` signifie que vous créez un tableau d’entiers. Le mot-clé `new` initialise le tableau et `[5]` indique que le tableau peut contenir 5 éléments. Vous pouvez également initialiser un tableau avec des valeurs directement, comme ceci :  
```csharp
int[] nombres = [ 10, 20, 30, 40, 50 ];

// ancienne écriture
int[] nombres = { 10, 20, 30, 40, 50 };
```  
Cela crée un tableau contenant déjà 5 valeurs.

Pour accéder à un élément d’un tableau, vous utilisez un index. L’index d’un tableau commence toujours à zéro en .NET. Cela signifie que le premier élément est à l’index 0, le deuxième à l’index 1, et ainsi de suite. Par exemple, si vous voulez afficher le troisième élément du tableau `nombres`, vous écrirez :  
```csharp
Console.WriteLine(nombres[2]);
```  
Cela affichera `30`, car l’élément à l’index 2 est 30. Vous pouvez également modifier la valeur d’un élément en utilisant son index. Par exemple :  
```csharp
nombres[2] = 100;
Console.WriteLine(nombres[2]);
```  
Cela remplacera la valeur `30` par `100` et affichera `100`.

Attention, si vous essayez d’accéder à un index qui dépasse la taille du tableau, vous obtiendrez une erreur au moment de l’exécution. Cette erreur s’appelle une exception `IndexOutOfRangeException`. Par exemple, si vous avez un tableau de 5 éléments et que vous essayez d’accéder à `nombres[5]`, une exception sera levée, car les indices valides pour ce tableau vont de 0 à 4.

La propriété `Length` est très utile pour connaître la taille du tableau, c’est-à-dire le nombre d’éléments qu’il contient. Par exemple :  
```csharp
int[] nombres = [ 10, 20, 30, 40, 50 ];
Console.WriteLine(nombres.Length);
```

Cela affichera `5`, car le tableau contient 5 éléments. Vous pouvez utiliser cette propriété pour parcourir un tableau avec une boucle `for` sans risquer de dépasser ses limites. Voici un exemple :  
```csharp
for (int i = 0; i < nombres.Length; i++)
{
    Console.WriteLine(nombres[i]);
}
```  
Cela affichera tous les éléments du tableau un par un.

En résumé, un tableau est une structure pratique pour regrouper plusieurs données du même type. Vous devez toujours utiliser des indices pour accéder ou modifier les éléments d’un tableau, en commençant par zéro. 

La propriété `Length` vous aide à travailler avec des tableaux en connaissant leur taille, et il est important de respecter les limites du tableau pour éviter des erreurs.

## Boucle Foreach

La boucle `foreach` en .NET est un moyen simple et pratique de parcourir tous les éléments d’un tableau ou d’une collection sans avoir besoin de gérer manuellement les indices. Elle est particulièrement utile lorsque vous voulez accéder à chaque élément d’un tableau sans modifier son contenu.

### Fonctionnement de la boucle `foreach`

La boucle `foreach` fonctionne en parcourant chaque élément d’un tableau, un par un, et en l’affectant à une variable temporaire que vous pouvez utiliser dans le corps de la boucle. Contrairement à une boucle `for`, vous n’avez pas besoin de connaître la taille du tableau ni de gérer les indices, ce qui rend le code plus lisible et moins sujet aux erreurs.

### Syntaxe de base

Voici la syntaxe générale d’une boucle `foreach` :

```csharp
foreach (type variable in tableau)
{
    // Code à exécuter pour chaque élément
}
```

- `type` : Le type des éléments dans le tableau (par exemple, `int`, `string`, etc.).
- `variable` : Une variable temporaire qui représente l’élément actuel du tableau.
- `tableau` : Le tableau ou la collection que vous voulez parcourir.

### Exemple simple avec un tableau d’entiers

Prenons un tableau contenant des nombres et utilisons une boucle `foreach` pour afficher chaque élément :

```csharp
using System;

class Program
{
    static void Main()
    {
        int[] nombres = { 10, 20, 30, 40, 50 };

        Console.WriteLine("Les éléments du tableau sont :");
        foreach (int nombre in nombres)
        {
            Console.WriteLine(nombre);
        }
    }
}
```

Dans cet exemple :
- `nombres` est le tableau que nous parcourons.
- `nombre` est une variable temporaire qui prend la valeur de chaque élément du tableau à chaque itération.
- La boucle s’exécute automatiquement pour chaque élément du tableau, du premier au dernier.

### Exemple avec un tableau de chaînes de caractères

Voici un autre exemple avec un tableau de chaînes de caractères :

```csharp
using System;

class Program
{
    static void Main()
    {
        string[] fruits = { "Pomme", "Banane", "Orange", "Mangue" };

        Console.WriteLine("Liste des fruits :");
        foreach (string fruit in fruits)
        {
            Console.WriteLine(fruit);
        }
    }
}
```

Ici, la boucle `foreach` parcourt chaque élément du tableau `fruits` et affiche son contenu.

### Différences avec une boucle `for`

1. **Simplicité** : Avec une boucle `foreach`, vous n’avez pas besoin de gérer manuellement les indices. Cela réduit les risques d’erreurs comme dépasser les limites du tableau.
2. **Lecture seule** : La variable temporaire utilisée dans une boucle `foreach` est en lecture seule. Cela signifie que vous ne pouvez pas modifier directement les éléments du tableau à l’intérieur de la boucle. Par exemple, le code suivant ne fonctionnera pas :
   ```csharp
   foreach (int nombre in nombres)
   {
       nombre = nombre * 2; // Erreur : impossible de modifier 'nombre'
   }
   ```
   Si vous devez modifier les éléments, utilisez une boucle `for` à la place.

### Parcourir un tableau multidimensionnel

Vous pouvez également utiliser une boucle `foreach` pour parcourir un tableau multidimensionnel. Cependant, dans ce cas, la boucle parcourra tous les éléments en ligne, sans distinction des dimensions.

Exemple avec un tableau 2D :

```csharp
using System;

class Program
{
    static void Main()
    {
        int[,] tableau2D = { { 1, 2 }, { 3, 4 }, { 5, 6 } };

        Console.WriteLine("Éléments du tableau 2D :");
        foreach (int valeur in tableau2D)
        {
            Console.WriteLine(valeur);
        }
    }
}
```
