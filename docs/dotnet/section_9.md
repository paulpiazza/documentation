---
title: Conditions
description: .NET framework
order: 9
---

### Using an `if` Statement
- An **`if` statement** is used to create a **branch** in your code's logic.
- It works by checking a **boolean expression** (an expression that evaluates to `true` or `false`).
- If the boolean expression is **`true`**, the code inside the **block of code** (enclosed in `{}`) is executed.
- If the boolean expression is **`false`**, the code block is skipped, and the program continues with the next line of code after the block.

#### Example:
```csharp
int age = 18;

if (age >= 18) // Boolean expression: "age >= 18"
{
    Console.WriteLine("You are an adult."); // This will run if the expression is true
}
Console.WriteLine("This line runs regardless.");
```

Here:
- If `age >= 18` evaluates to `true`, the message "You are an adult." is printed.
- If `age >= 18` evaluates to `false`, the program skips the code inside the `if` block and continues to the next line.

Here is the full syntax for if, else if, and else statements in C#:

```csharp
if (condition1)
{
    // Code to execute if condition1 is true
}
else if (condition2)
{
    // Code to execute if condition2 is true
    // (and condition1 is false)
}
else if (condition3)
{
    // Code to execute if condition3 is true
    // (and all previous conditions are false)
}
else
{
    // Code to execute if none of the conditions are true
}
```

### Boolean Expressions
- A **boolean expression** is any expression that returns a **boolean value** (`true` or `false`).
- Boolean expressions are often used in decision-making statements like `if`.

```csharp
int x = 10;
int y = 20;

bool isXGreaterThanY = x > y; // Boolean expression: "x > y"
Console.WriteLine(isXGreaterThanY); // Prints "false" because 10 is not greater than 20
```

### Boolean Operators
- **Boolean operators** are used to compare values and perform logical operations. They return a `true` or `false` result.

#### Common Boolean Operators:
1. **Equality (`==`)**: Checks if two values are equal.
   ```csharp
   int a = 5, b = 5;
   Console.WriteLine(a == b); // true
   ```
2. **Inequality (`!=`)**: Checks if two values are not equal.
   ```csharp
   int a = 5, b = 10;
   Console.WriteLine(a != b); // true
   ```
3. **Greater than (`>`)** and Less than (`<`)**:
   ```csharp
   Console.WriteLine(10 > 5); // true
   Console.WriteLine(5 < 3);  // false
   ```
4. **Greater than or equal (`>=`)** and Less than or equal (`<=`)**:
   ```csharp
   Console.WriteLine(5 >= 5); // true
   Console.WriteLine(3 <= 2); // false
   ```

### Code Blocks
- A **code block** is a group of one or more lines of code enclosed in **curly braces `{}`**.
- The code inside a block is treated as a single unit and is executed together.

#### Example:
```csharp
if (true)
{
    Console.WriteLine("Line 1");
    Console.WriteLine("Line 2");
}
```

Here:
- Both "Line 1" and "Line 2" are part of the same block and will execute together if the condition is `true`.

### Logical AND (`&&`)
- The **logical AND operator (`&&`)** combines two boolean expressions.
- The entire expression evaluates to `true` **only if both sub-expressions are `true`**.

```csharp
int age = 25;
bool hasID = true;

if (age >= 18 && hasID) // Both conditions must be true
{
    Console.WriteLine("You are allowed to enter.");
}
```

Here:
- The `if` block will only execute if:
  1. `age >= 18` is true.
  2. `hasID` is true.

### Logical OR (`||`)
- The **logical OR operator (`||`)** combines two boolean expressions.
- The entire expression evaluates to `true` **if at least one of the sub-expressions is `true`**.

#### Example:
```csharp
bool isWeekend = true;
bool isHoliday = false;

if (isWeekend || isHoliday) // At least one condition must be true
{
    Console.WriteLine("You can relax today!");
}
```

Here:
- The `if` block will execute if:
  1. `isWeekend` is true, OR
  2. `isHoliday` is true.

### Key Points
- **`if` Statement**: Executes a block of code if a boolean condition is `true`.
- **Boolean Expression**: An expression that evaluates to `true` or `false`.
- **Boolean Operators**: Used to compare values and make decisions.
- **Code Blocks**: Group of statements enclosed in `{}` that are executed together.
- **Logical AND (`&&`)**: Both conditions must be `true` for the entire expression to be `true`.
- **Logical OR (`||`)**: At least one condition must be `true` for the entire expression to be `true`.



## Comparaison de chaînes de caractères (`string`)

### Méthodes principales pour comparer des chaînes :
En C#, comparer des chaînes peut se faire de plusieurs façons.

Comparaison avec `==` ou `!=`
- En C#, l'opérateur `==` compare le contenu des chaînes, et non pas leurs références (contrairement à certains langages comme Java).
- Exemple :
  ```csharp
  string str1 = "hello";
  string str2 = "hello";
  string str3 = "world";

  Console.WriteLine(str1 == str2); // True
  Console.WriteLine(str1 == str3); // False
  Console.WriteLine(str1 != str3); // True
  ```

## Les opérateurs ternaires

Un opérateur ternaire est une forme concise d'instruction conditionnelle. En C#, il s'écrit sous la forme suivante :

```csharp
condition ? valeur_si_vrai : valeur_si_faux;
```

```csharp
int a = 10;
int b = 20;

int max = (a > b) ? a : b;
Console.WriteLine(max); // 20
```

- Si la condition `(a > b)` est vraie, l'expression renvoie `a`.
- Sinon, elle renvoie `b`.

```csharp
string str1 = "hello";
string str2 = "world";

string result = (str1 == str2) ? "Les chaînes sont égales" : "Les chaînes sont différentes";
Console.WriteLine(result); // Les chaînes sont différentes
```

Les opérateurs ternaires peuvent être imbriqués, mais cela peut réduire la lisibilité du code.

```csharp
int number = 15;

string result = (number > 0) ? 
                ((number % 2 == 0) ? "Positif et pair" : "Positif et impair") : 
                "Négatif";
Console.WriteLine(result); // Positif et impair
```

## Autres opérateurs utiles avec les chaînes et les conditions

### Opérateur `null-coalescing` (`??`)
- Permet de fournir une valeur par défaut si une variable est `null`.
- Exemple :
  ```csharp
  string str = null;
  string result = str ?? "Valeur par défaut";
  Console.WriteLine(result); // Valeur par défaut
  ```
- Assigne une valeur par défaut à une variable si elle est `null`.
- Exemple :
  ```csharp
  string str = null;
  str ??= "Valeur par défaut";
  Console.WriteLine(str); // Valeur par défaut
  ```

### Opérateur `is`
- Vérifie si un objet est d'un type spécifique.
- Exemple :
  ```csharp
  object obj = "Hello";
  if (obj is string)
  {
      Console.WriteLine("C'est une chaîne !");
  }
  ```


## Structure générale du `switch`

- Le `switch` est une alternative claire et lisible à une série de `if-else`.
- Utilisez-le pour tester une variable avec des valeurs fixes (entiers, chaînes, énumérations, etc.).
- Prenez soin d’utiliser `break` pour éviter des exécutions non désirées.
- Les expressions `switch` modernes (C# 8+) rendent le code encore plus concis.

La structure d'un `switch` en C# ressemble à ceci :

```csharp
switch (variable)
{
    case valeur1:
        // Instructions à exécuter si variable == valeur1
        break;

    case valeur2:
        // Instructions à exécuter si variable == valeur2
        break;

    default:
        // Instructions à exécuter si aucune des valeurs ne correspond
        break;
}
```

1. **`variable`** : C'est la valeur que vous voulez tester. Elle peut être un entier, une chaîne de caractères, un énumérateur, etc.
2. **`case`** : Chaque `case` correspond à une valeur que `variable` peut prendre.
3. **`break`** : Il termine l'exécution du bloc `switch` après l'exécution d'un `case`. Sans `break`, l'exécution continue dans les cases suivantes (on appelle cela un "fall-through").
4. **`default`** : (Optionnel) Ce bloc est exécuté si aucune des valeurs `case` ne correspond.


```csharp
int jour = 5;

switch (jour)
{
    case 1:
        Console.WriteLine("Lundi");
        break;

    case 2:
    case 3:
    case 4:
        Console.WriteLine("Mardi, Mercredi ou Jeudi");
        break;

    case 5:
        Console.WriteLine("Vendredi");
        // Pas de break ici, le compilateur ne le permet pas !
        // un break ou return ou goto est imperatif.

    default:
        Console.WriteLine("Week-end !");
        break;
}
```

En C#, si vous omettez le mot-clé `break`, l'exécution continue dans les cases suivantes.



## `switch` expression (C# 8.0 et versions ultérieures)

Depuis C# 8.0, vous pouvez utiliser une **expression `switch`**, qui est plus concise et fonctionnelle.

```csharp
int jour = 3;

string resultat = jour switch
{
    1 => "Lundi",
    2 => "Mardi",
    3 => "Mercredi",
    4 => "Jeudi",
    5 => "Vendredi",
    _ => "Week-end !" // Le "_" remplace le "default"
};

Console.WriteLine(resultat);
```

- L'expression `switch` retourne directement une valeur en fonction de la variable `jour`.
- Si aucune valeur ne correspond, le cas `_` (équivalent de `default`) est utilisé.


### Différences entre `if-else` et `switch`

| **Caractéristique**        | **`if-else`**                              | **`switch`**                              |
|-----------------------------|--------------------------------------------|------------------------------------------|
| **Conditions complexes**    | Peut évaluer des expressions complexes     | Ne peut comparer qu’une valeur simple    |
| **Lisibilité**              | Moins lisible avec plusieurs conditions    | Plus lisible pour tester plusieurs cas   |
| **Performances**            | Moins performant si beaucoup de conditions| Plus rapide pour des tests simples       |
