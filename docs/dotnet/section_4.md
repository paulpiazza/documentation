---
title: Strings
description: .NET framework
order: 4
---
## Mise en forme de chaînes littérales

En C#, la **mise en forme de chaînes littérales** consiste à manipuler et afficher des chaînes de caractères de manière structurée et lisible. Cela inclut l'insertion de variables dans des chaînes, le formatage des données (comme les nombres ou les dates) et l'utilisation de techniques modernes comme les chaînes interpolées.
1. **Concaténation** : Simple mais peu lisible.
2. **`String.Format`** : Puissant pour le formatage, mais un peu verbeux.
3. **Interpolation (`$`)** : Pratique, lisible, et moderne.
4. **Littéraux multi-lignes (`@`)** : Idéal pour les chaînes multi-lignes.
5. **Formatage avancé** : Utilisez des spécificateurs de format pour personnaliser l'affichage des nombres et des dates.

### Concaténation de chaînes

C'est la méthode la plus simple et la plus ancienne pour assembler des chaînes.
- Peu lisible avec plusieurs variables.
- Moins performant si beaucoup de chaînes sont concaténées.

```csharp
string firstName = "Alice";
string lastName = "Smith";
string fullName = "Full Name: " + firstName + " " + lastName;
Console.WriteLine(fullName);

// Full Name: Alice Smith
```

### Utilisation de `String.Format`

`String.Format` insère des valeurs dans une chaîne en utilisant des **placeholders** (`{}`) où les valeurs sont remplacées.
- Plus lisible que la concaténation.
- Permet de formater les nombres, les dates, etc.

```csharp
string firstName = "Alice";
string lastName = "Smith";
string fullName = String.Format("Full Name: {0} {1}", firstName, lastName);
Console.WriteLine(fullName);
// Full Name: Alice Smith

double price = 34.5678;
Console.WriteLine("Price: {0:C2}", price);
// Formate le prix en devise avec 2 décimales
//Price: $34.57 (ou une autre devise selon la culture)
```

### Interpolation de chaînes (C# 6 et versions ultérieures)

L'interpolation de chaînes est une méthode moderne et concise pour insérer des variables dans une chaîne en utilisant le préfixe `$`.
- Plus lisible et intuitif.
- Permet d'insérer directement des expressions (calculs, appels de méthodes, etc.).

```csharp
// $"texte {variable} texte"

string firstName = "Alice";
string lastName = "Smith";
string fullName = $"Full Name: {firstName} {lastName}";
Console.WriteLine(fullName);
// Full Name: Alice Smith

int a = 5, b = 10;
Console.WriteLine($"The sum of {a} and {b} is {a + b}");
// The sum of 5 and 10 is 15

double price = 34.5678;
Console.WriteLine($"Price: {price:C2}");
// Formate en devise avec 2 décimales
// Price: $34.57 (ou une autre devise selon la culture)
```

### Méthode `string.Concat`

La méthode `string.Concat` est utilisée pour combiner plusieurs chaînes.

```csharp
string firstName = "Alice";
string lastName = "Smith";
string fullName = string.Concat("Full Name: ", firstName, " ", lastName);
Console.WriteLine(fullName);
// Full Name: Alice Smith
```

### Méthode `string.Join`

`string.Join` est utile pour joindre une collection d'éléments avec un séparateur.

```csharp
string[] names = { "Alice", "Bob", "Charlie" };
string allNames = string.Join(", ", names);
Console.WriteLine(allNames);
// Alice, Bob, Charlie
```
### Manipulation de chaînes multi-lignes

En C#, vous pouvez travailler avec des chaînes multi-lignes grâce aux **littéraux de chaînes verbatim** (`@`) ou aux chaînes interpolées multi-lignes.

```csharp
string multiLine = @"This is a multi-line string.
It spans across multiple lines.";
Console.WriteLine(multiLine);

/*
This is a multi-line string.
It spans across multiple lines.
*/

string firstName = "Alice";
string lastName = "Smith";
string message = $@"
Hello {firstName},
Your last name is {lastName}.
";
Console.WriteLine(message);

/*
Hello Alice,
Your last name is Smith.
*/
```

### Formatage avancé des données

C# permet de formater les dates, les nombres et d'autres types dans les chaînes.

```csharp
double value = 12345.6789;
Console.WriteLine($"Value: {value:N2}");
// Formate avec 2 décimales et séparateurs de milliers
// Value: 12,345.68

DateTime today = DateTime.Now;
Console.WriteLine($"Today is {today:dddd, MMMM dd, yyyy}"); // Formate la date
// Today is Sunday, January 05, 2025
```

###  Échappement de caractères spéciaux

Certains caractères comme les guillemets ou les sauts de ligne nécessitent un échappement avec `\`.

```csharp
string message = "She said, \"Hello!\"";
Console.WriteLine(message);
// She said, "Hello!"
```

#### Avec littéraux verbatim (`@`) :

Avec `@`, vous n'avez pas besoin d'échapper les guillemets doubles, mais vous devez doubler les guillemets pour les inclure.

```csharp
string message = @"She said, ""Hello!""";
Console.WriteLine(message);
// She said, "Hello!"
```

### Méthode `string.Format` avec cultures spécifiques

Vous pouvez spécifier une culture pour formater les données (utile pour les nombres et les dates).

```csharp
using System.Globalization;

double price = 1234.56;
Console.WriteLine(string.Format(CultureInfo.GetCultureInfo("fr-FR"), "Prix : {0:C}", price));

// Prix : 1 234,56 €
```


## Manipulation des chaînes de caractères

En C#, lors de la manipulation des chaînes de caractères, il est souvent nécessaire d'insérer des caractères spéciaux ou de représenter des valeurs spécifiques dans une chaîne. Voici une explication détaillée des différentes techniques mentionnées :

###  Utiliser des séquences d’échappement pour insérer des caractères spéciaux

Les séquences d’échappement permettent d’insérer des caractères spéciaux dans une chaîne littérale. Elles commencent par un **antislash (`\`)**, suivi d’un caractère ou d’une lettre qui représente l’opération souhaitée.

| Séquence | Signification                   | Exemple dans une chaîne            | Résultat à l’affichage         |
|----------|---------------------------------|-------------------------------------|---------------------------------|
| `\t`     | Tabulation                      | `"Hello\tWorld"`                   | `Hello    World`               |
| `\n`     | Nouvelle ligne                  | `"Line 1\nLine 2"`                 | `Line 1` <br> `Line 2`         |
| `\"`     | Guillemets doubles              | `"She said, \"Hello!\""`           | `She said, "Hello!"`           |
| `\\`     | Barre oblique inverse (antislash) | `"C:\\Program Files\\MyApp"`       | `C:\Program Files\MyApp`       |
| `\'`     | Apostrophe ou guillemet simple  | `"It\'s a nice day"`               | `It's a nice day`              |

```csharp
string example = "Here is a tab:\t, a new line:\n, and a quote: \"Hello!\"";
Console.WriteLine(example);

// Here is a tab:	, a new line:
// , and a quote: "Hello!"
```

### Utiliser `\\` pour insérer une barre oblique inverse

La barre oblique inverse (`\`) est un caractère spécial utilisé pour les séquences d'échappement. Si vous voulez insérer une barre oblique inverse dans une chaîne, vous devez l'échapper en utilisant **`\\`**.

```csharp
string path = "C:\\Users\\John\\Documents";
Console.WriteLine(path);
// C:\Users\John\Documents
```

#### **Pourquoi ?**
Sans l’échappement, le compilateur interpréterait la barre oblique inverse comme le début d’une séquence d’échappement, ce qui entraînerait une erreur ou un comportement inattendu.


### Utiliser le préfixe `@` pour créer un littéral de chaîne textuel

Le préfixe **`@`** permet de créer des **littéraux de chaînes verbatim**. Ces chaînes :
- Ignorent les séquences d’échappement (pas besoin d’échapper les barres obliques inverses).
- Conservent les espaces blancs et les retours à la ligne tels qu’ils sont écrits dans le code.

```csharp
string path = @"C:\Users\John\Documents";
Console.WriteLine(path);
//C:\Users\John\Documents
```

### Utiliser `\u` pour insérer des caractères Unicode

En C#, vous pouvez utiliser la séquence `\u` suivie d’un code hexadécimal à **quatre chiffres** pour représenter un caractère Unicode (UTF-16). Cela permet d’insérer des caractères spéciaux ou des symboles dans une chaîne.

```csharp
string unicodeExample = "The heart symbol: \u2665";
Console.WriteLine(unicodeExample);
// The heart symbol: ♥
```

#### **Usage courant :**
- Ajouter des caractères spéciaux (comme des symboles mathématiques ou des emoji).
- Travailler avec des langues ou alphabets spécifiques.

```csharp
string unicodeText = "\u0048\u0065\u006C\u006C\u006F"; // Correspond à "Hello"
Console.WriteLine(unicodeText);
// Hello
```

### Limitations des caractères Unicode

Dans certaines applications, les caractères Unicode peuvent ne pas s’afficher correctement, par exemple :
- Si la police utilisée ne prend pas en charge le caractère Unicode.
- Si le système ou l’environnement d’exécution ne gère pas correctement l’encodage Unicode.

Si une application ne prend pas en charge un caractère Unicode, elle peut afficher un carré ou un point d’interrogation à la place :

```
The heart symbol: □
```

#### **Solution :**
- Assurez-vous que la police utilisée prend en charge le caractère.
- Vérifiez que l’encodage de la sortie (comme UTF-8) est correctement configuré.

### **Résumé des bonnes pratiques :**

| Technique                           | Quand l’utiliser ?                                                                 |
| ----------------------------------- | ---------------------------------------------------------------------------------- |
| **Séquences d’échappement (`\`)**   | Pour insérer des caractères spéciaux comme `\n`, `\t`, `\"` ou `\\`.               |
| **Barres obliques inverses (`\\`)** | Pour représenter une barre oblique inverse dans une chaîne.                        |
| **Littéraux verbatim (`@`)**        | Pour conserver la mise en forme et éviter d’échapper les barres obliques inverses. |
| **Unicode (`\u`)**                  | Pour insérer des caractères Unicode spécifiques dans une chaîne.                   |

#### **Exemple combiné :**

```csharp
using System;

class Program
{
    static void Main()
    {
        string path = @"C:\Users\John\Documents";
        string multiLine = @"This is a multi-line
string literal.";
        string unicodeHeart = "Heart symbol: \u2665";
        string escapedText = "She said, \"Hello!\"\nAnd then left.";

        Console.WriteLine(path);
        Console.WriteLine(multiLine);
        Console.WriteLine(unicodeHeart);
        Console.WriteLine(escapedText);
    }
}
```

#### **Sortie :**

```shell
C:\Users\John\Documents
This is a multi-line
string literal.
Heart symbol: ♥
She said, "Hello!"
And then left.
```
