---
title: Start with the C# with console App
description: .NET framework
order: 2
---
Dans cet exercice, vous allez utiliser C# pour afficher « Hello World! » dans la console. Entrez le code suivant dans l’éditeur .NET :

```C#
Console.WriteLine("Hello World!");
```

Appuyez sur le bouton vert Exécuter pour compiler et exécuter votre code. Vous devriez voir « Hello World! » dans la console de sortie.

Si vous rencontrez des erreurs, vérifiez la syntaxe, car C# est sensible à la casse. Par exemple, utilisez « Console » et non « console », et entourez les chaînes de caractères avec des guillemets doubles.

Pour commenter une ligne de code, utilisez deux barres obliques :

```C#
 // Console.WriteLine("Hello World!");
```

Ajoutez de nouvelles lignes de code :

```C#
Console.Write("Congratulations!");
Console.Write(" ");
Console.Write("You wrote your first lines of code.");
```

Exécutez à nouveau pour voir :

```
Congratulations! You wrote your first lines of code.
```

La différence entre `Console.WriteLine()` et `Console.Write()` est que le premier ajoute un saut de ligne, tandis que le second n'en ajoute pas. Mettez à jour votre code pour :

```C#
Console.WriteLine("Congratulations!");
Console.Write("You wrote your first lines of code.");
```

Vous obtiendrez :

```
Congratulations!
You wrote your first lines of code.
```

## Commentaires et règles d'écritures

1. **Noms descriptifs** : Donnez des noms qui expliquent clairement l'objectif des variables.
2. **Commentaires pour désactiver du code** : Utilisez des commentaires pour ignorer temporairement du code sans le supprimer.
3. **Commentaires pour expliquer le code** : Expliquez pourquoi un morceau de code existe ou ce qu'il fait.
4. **Espaces blancs** : Structurez visuellement le code avec des espaces et des indentations pour le rendre lisible.

### Choisir un nom descriptif pour les variables, qui décrit leur objectif et leur intention

Donner des noms descriptifs aux variables est une bonne pratique en programmation, car cela rend le code plus lisible et compréhensible, non seulement pour vous, mais aussi pour d'autres développeurs qui pourraient lire ou maintenir votre code. Le nom d'une variable doit refléter clairement son rôle ou sa fonction dans le programme.

```csharp
// Mauvais exemple : les noms des variables ne sont pas explicites
int x = 25;
int y = 30;

// Bon exemple : les noms des variables décrivent leur objectif
int ageUtilisateur = 25;
int nombreArticles = 30;
```

Dans cet exemple, `ageUtilisateur` et `nombreArticles` sont des noms explicites qui indiquent clairement ce qu'ils représentent. Cela rend le code plus facile à comprendre.

#### Conseils :
- Utilisez des noms en **camelCase** pour les variables (par convention en C#).
- Préférez des noms complets plutôt que des abréviations ambiguës (par exemple, `nombreArticles` au lieu de `nbrArt`).
- Évitez les noms génériques comme `data`, `temp`, ou `value`, sauf si leur rôle est évident dans le contexte.
- Les noms de variables peuvent contenir des caractères alphanumériques et le trait de soulignement (_). Les caractères spéciaux comme le signe dièse (#), le tiret (-) et le symbole dollar ($) ne sont pas autorisés.
- Les noms de variables doivent commencer par une lettre de l’alphabet ou un trait de soulignement, et non pas par un chiffre. L’utilisation d’un trait de soulignement au début d’un nom de variable est généralement réservée aux champs d’instance privés. Vous trouverez un lien vers des informations supplémentaires dans le résumé du module.
- Les noms de variables NE peuvent PAS être un mot clé C#. Par exemple, ces déclarations de noms de variables ne sont pas autorisées : `float float;` ou `string string;`.
- Les noms de variable respectent la casse. Ainsi, string MyValue; et string myValue; sont deux variables différentes.
- Les noms de variables doivent utiliser une casse mixte. Il s’agit d’un style d’écriture qui utilise une lettre minuscule au début du premier mot et une lettre majuscule au début de chaque mot suivant. Par exemple : `string thisIsCamelCase;`.
- Les noms de variables doivent être descriptifs et explicites dans votre application. Vous devez choisir pour votre variable un nom qui représente le type de données qu’elle va contenir (pas le type de données). Par exemple : bool orderComplete;, PAS bool isComplete;.
- Les noms de variables doivent être constitués d’un ou plusieurs mots entiers ajoutés les uns aux autres. N’utilisez pas de contractions, car le nom de la variable pourrait ne pas être clair pour les autres personnes qui lisent votre code. Par exemple : `decimal orderAmount;` , PAS `decimal odrAmt;`.
- Les noms de variables ne doivent pas inclure le type de données de la variable. Vous pourriez recevoir le conseil d’utiliser un style comme `string strMyValue;`. Ce style était assez répandu il y a quelques années. Toutefois, la plupart des développeurs ne suivent plus ces conseils et il existe de bonnes raisons de ne pas l’utiliser.

### Utiliser des commentaires de code pour indiquer temporairement au compilateur d’ignorer des lignes de code

Vous pouvez utiliser des commentaires pour désactiver temporairement des lignes de code sans les supprimer. Cela peut être utile pour tester une nouvelle fonctionnalité ou pour déboguer un problème.

En C#, les commentaires peuvent être faits de deux manières :
- **Commentaire sur une ligne** : Utilisez `//` pour commenter une seule ligne.
- **Commentaire sur plusieurs lignes** : Utilisez `/* */` pour commenter un bloc de code.

```csharp
using System;

class Program
{
    static void Main()
    {
        int a = 10;
        int b = 20;

        // Console.WriteLine(a + b); // Cette ligne est temporairement désactivée

        Console.WriteLine("La somme est calculée.");
    }
}
```

Dans cet exemple, la ligne `Console.WriteLine(a + b);` est ignorée par le compilateur grâce au commentaire. Cela permet de tester uniquement la seconde ligne sans supprimer la première.


### Utiliser des commentaires de code pour décrire des spécifications générales ou un objectif pour un passage de code

Les commentaires sont également utiles pour expliquer pourquoi un morceau de code existe ou ce qu'il est censé faire. Cela aide les autres développeurs (et vous-même) à comprendre l'objectif du code, surtout si le code est complexe.

```csharp
using System;

class Program
{
    static void Main()
    {
        // Cette méthode affiche les nombres pairs entre 1 et 10
        for (int i = 1; i <= 10; i++)
        {
            if (i % 2 == 0)
            {
                Console.WriteLine(i);
            }
        }
    }
}
```

Dans cet exemple, le commentaire au-dessus de la boucle explique son objectif. Cela est particulièrement utile lorsque le code devient plus complexe ou lorsque vous travaillez en équipe.

#### Conseils :
- Placez les commentaires au-dessus du code qu'ils décrivent.
- Évitez les commentaires inutiles pour des choses évidentes (par exemple, `// Incrémente i` pour `i++`).
- Soyez concis mais clair.

---

### Écrire du code qui utilise efficacement des espaces blancs pour refléter la relation entre les lignes de code

L'utilisation des espaces blancs (lignes vides, indentations) est essentielle pour organiser visuellement le code. Un code bien structuré est plus lisible et plus facile à comprendre. En C#, l'indentation standard est de **4 espaces** par niveau de bloc.

```csharp
using System;

class Program
{
    static void Main()
    {
        // Mauvais exemple : absence d'espaces blancs
        int a=10;int b=20;if(a<b){Console.WriteLine("a est plus petit que b");}

        // Bon exemple : utilisation d'espaces blancs pour organiser le code
        int a = 10;
        int b = 20;

        if (a < b)
        {
            Console.WriteLine("a est plus petit que b");
        }
    }
}
```

Dans le mauvais exemple, tout le code est écrit sur une seule ligne, ce qui le rend difficile à lire. Dans le bon exemple, les espaces blancs sont utilisés pour séparer les déclarations de variables et pour organiser le bloc `if`.

#### Conseils :
- Ajoutez une ligne vide entre des blocs de code logiquement distincts (par exemple, entre les déclarations de variables et les instructions conditionnelles).
- Indentez correctement les blocs à l'intérieur des structures comme `if`, `for`, ou `while`.
- Ne surchargez pas une ligne avec trop de code.

