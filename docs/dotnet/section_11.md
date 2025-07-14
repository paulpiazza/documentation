---
title: Portée des variables et espaces de noms
description: .NET framework
order: 11
---

## Comprendre l’impact de la déclaration et de l’initialisation de variables à l’intérieur et à l’extérieur des blocs de code

En C#, la portée (ou "scope") d'une variable dépend de l'endroit où elle est déclarée. Cela a un impact direct sur :
- **La visibilité de la variable** (où elle peut être utilisée).
- **La durée de vie de la variable** (combien de temps elle existe en mémoire).

### Déclaration à l’extérieur d’un bloc de code

Quand une variable est déclarée à l'extérieur d'un bloc de code (par exemple, dans une méthode mais hors d'une boucle ou d'une condition), elle est accessible dans tout le bloc où elle est déclarée.

```csharp
void Exemple()
{
    int x = 10; // La variable x est déclarée ici, donc elle est accessible partout dans la méthode.
    
    if (x > 5)
    {
        Console.WriteLine($"x est {x}"); // OK, x est accessible ici.
    }

    for (int i = 0; i < 3; i++)
    {
        Console.WriteLine($"x est toujours {x}"); // OK, x est accessible ici aussi.
    }
}
```

### Déclaration à l’intérieur d’un bloc de code

Quand une variable est déclarée à l'intérieur d'un bloc de code (par exemple, dans une boucle, une condition `if`, etc.), elle n'est accessible que dans ce bloc.

```csharp
void Exemple()
{
    if (true)
    {
        int y = 20; // La variable y est déclarée dans ce bloc.
        Console.WriteLine($"y est {y}"); // OK, y est accessible ici.
    }
    
    // Console.WriteLine(y); // Erreur : y n'est pas accessible ici, car elle est déclarée dans le bloc if.
}
```

- **Déclarer à l’extérieur** : Utile si la variable doit être utilisée dans plusieurs blocs ou sur une longue portion de code.
- **Déclarer à l’intérieur** : Réduit le risque d’erreurs (comme utiliser une variable par accident) et économise de la mémoire, car la variable est détruite dès que le bloc se termine.


## Supprimer les blocs de code dans les instructions `if` pour améliorer la lisibilité

En C#, si une instruction `if` ou une boucle contient **une seule ligne de code**, vous pouvez omettre les accolades `{}`. Cela rend le code plus lisible et compact.

```csharp
if (x > 5)
{
    Console.WriteLine("x est supérieur à 5");
}
```

```csharp
if (x > 5)
    Console.WriteLine("x est supérieur à 5");
```

- Plus lisible et compact, surtout pour des instructions simples.
- Cela est souvent utilisé dans des projets où les équipes suivent des conventions de style.

Il faut être prudent, car omettre les accolades peut rendre le code plus difficile à maintenir si on ajoute une deuxième ligne par accident.

```csharp
if (x > 5)
    Console.WriteLine("x est supérieur à 5");
    Console.WriteLine("Ceci sera toujours exécuté, même si x <= 5 !");
```

Dans cet exemple, la deuxième ligne `Console.WriteLine` sera toujours exécutée, car elle n'est pas liée au `if`. Pour éviter ce genre d'erreur, il est souvent préférable de toujours utiliser des accolades dans des projets complexes.


## Décrire l’objectif et la hiérarchie d’étendue des espaces de noms, des classes et des méthodes

En C#, tout code est organisé selon une hiérarchie stricte. Comprendre cette hiérarchie est essentiel pour écrire du code structuré et maintenable.

### Espaces de noms (`namespace`)
- Les espaces de noms sont utilisés pour **organiser le code** en regroupant des classes, interfaces, etc.
- Ils permettent d’éviter les conflits de noms entre différents composants.
- Exemple : Le framework .NET utilise des espaces de noms comme `System`, `System.Collections.Generic`, etc.

```csharp
namespace MonApplication
{
    class MaClasse
    {
        void MaMethode()
        {
            Console.WriteLine("Bonjour !");
        }
    }
}
```

- Les espaces de noms sont au **plus haut niveau** de la hiérarchie.
- Vous pouvez imbriquer des espaces de noms pour mieux organiser le code.

```csharp
namespace MonApplication
{
    namespace SousNamespace
    {
        class MaClasse
        {
            void MaMethode() { }
        }
    }
}
```

### Classes
- Une classe est un **plan** ou un **modèle** pour créer des objets.
- Les classes regroupent des données (champs/propriétés) et des comportements (méthodes).
- Les classes sont définies à l’intérieur d’un espace de noms.

```csharp
namespace MonApplication
{
    class Voiture
    {
        public string Marque { get; set; }
        public void Rouler()
        {
            Console.WriteLine($"{Marque} roule !");
        }
    }
}
```

- Les classes sont définies **dans des espaces de noms**.
- Elles contiennent des **membres** comme des champs, des propriétés et des méthodes.

### méthode de classe
- Une méthode est un **bloc de code** qui exécute une tâche spécifique.
- Les méthodes sont définies à l’intérieur des classes.
- Elles peuvent contenir des blocs de code, des variables locales, des conditions, etc.

```csharp
namespace MonApplication
{
    class Calculatrice
    {
        public int Addition(int a, int b)
        {
            return a + b;
        }
    }
}
```

- Les méthodes sont définies **dans des classes**.
- Elles sont au **niveau le plus bas** de la hiérarchie.
