---
title: Simple Operations
description: .NET framework
order: 5
---

## Operations en C#
### Opérations simples 

Les opérations simples incluent l'addition, la soustraction, la multiplication, la division et le modulo. Ces opérations sont réalisées à l'aide des opérateurs arithmétiques.

1. **Opérations simples :**
   - Addition (`+`), soustraction (`-`), multiplication (`*`), division (`/`), modulo (`%`).
2. **Ordre des calculs :**
   - Parenthèses > Multiplication/Division/Modulo > Addition/Soustraction.
   - Calculs de gauche à droite pour les opérateurs de même priorité.
3. **Opérateurs combinés :**
   - Simplifient les calculs répétitifs (`+=`, `-=`, etc.).
4. **Incrémentation et décrémentation :**
   - `++` et `--` pour modifier une variable de 1.
5. **Promotion de type :**
   - Les types sont ajustés automatiquement pour éviter les pertes de données.

### **Opérateurs arithmétiques de base :**

| Opérateur | Description                | Exemple | Résultat |
| --------- | -------------------------- | ------- | -------- |
| `+`       | Addition                   | `5 + 3` | `8`      |
| `-`       | Soustraction               | `5 - 3` | `2`      |
| `*`       | Multiplication             | `5 * 3` | `15`     |
| `/`       | Division                   | `6 / 3` | `2`      |
| `%`       | Modulo (reste de division) | `5 % 3` | `2`      |

```csharp
using System;

class Program
{
    static void Main()
    {
        int a = 10;
        int b = 3;

        Console.WriteLine($"Addition: {a + b}");         // 13
        Console.WriteLine($"Soustraction: {a - b}");    // 7
        Console.WriteLine($"Multiplication: {a * b}"); // 30
        Console.WriteLine($"Division: {a / b}");       // 3 (division entière)
        Console.WriteLine($"Modulo: {a % b}");         // 1 (reste de la division)
    }
}
```


### **Division entière vs division décimale :**

En C#, si vous divisez deux **entiers (`int`)**, le résultat sera un entier (division entière). Pour obtenir un résultat décimal, vous devez utiliser des types comme `double` ou `float`.

```csharp
int x = 5;
int y = 2;

Console.WriteLine(x / y);          // Résultat : 2 (division entière)
Console.WriteLine((double)x / y);  // Résultat : 2.5 (division décimale)
Console.WriteLine(5m/9m);          // Résultat : 0,5555555555555555555555555556
```


### Ordre des calculs (priorité des opérateurs)

L'ordre des calculs en C# suit les **règles de priorité des opérateurs**, similaires aux mathématiques. Voici l'ordre de priorité :

#### Priorité des opérateurs 

1. **Parenthèses** : Les calculs dans les parenthèses sont effectués en premier.
2. **Multiplication (`*`), division (`/`), modulo (`%`)** : Ces opérations ont une priorité plus élevée que l'addition et la soustraction.
3. **Addition (`+`), soustraction (`-`)** : Ces opérations sont effectuées après la multiplication, la division et le modulo.
4. **De gauche à droite** : Si plusieurs opérateurs ont la même priorité, les calculs sont effectués de gauche à droite.

```csharp
int result = 5 + 3 * 2;
Console.WriteLine(result); // Résultat : 11 (multiplication avant addition)

int result = (5 + 3) * 2;
Console.WriteLine(result); // Résultat : 16 (parenthèses avant multiplication)

int result = 10 / 2 + 3 * 4 - 1;
Console.WriteLine(result); // Résultat : 17
// Étapes : 
// 10 / 2 = 5
// 3 * 4 = 12
// 5 + 12 = 17
// 17 - 1 = 16
```

### Opérations combinées et raccourcis

C# offre des **opérateurs combinés** pour simplifier les calculs avec une variable.

#### **Opérateurs combinés :**

| Opérateur | Description                   | Exemple   | Résultat    |
| --------- | ----------------------------- | --------- | ----------- |
| `+=`      | Addition et affectation       | `a += 5;` | `a = a + 5` |
| `-=`      | Soustraction et affectation   | `a -= 3;` | `a = a - 3` |
| `*=`      | Multiplication et affectation | `a *= 2;` | `a = a * 2` |
| `/=`      | Division et affectation       | `a /= 2;` | `a = a / 2` |
| `%=`      | Modulo et affectation         | `a %= 3;` | `a = a % 3` |

```csharp
int a = 10;

a += 5;  // a = a + 5 => 15
a -= 3;  // a = a - 3 => 12
a *= 2;  // a = a * 2 => 24
a /= 4;  // a = a / 4 => 6

Console.WriteLine(a); // Résultat : 6
```

#### Opérateurs d'incrémentation et de décrémentation :

| Opérateur | Description                             | Exemple        | Résultat    |
| --------- | --------------------------------------- | -------------- | ----------- |
| `++`      | Incrémente la valeur de 1 (pré ou post) | `a++` ou `++a` | `a = a + 1` |
| `--`      | Décrémente la valeur de 1 (pré ou post) | `a--` ou `--a` | `a = a - 1` |

#### **Différence entre pré-incrémentation et post-incrémentation :**

- **Pré-incrémentation (`++a`)** : La variable est incrémentée avant d’être utilisée.
- **Post-incrémentation (`a++`)** : La variable est utilisée avant d’être incrémentée.

```csharp
int a = 5;

Console.WriteLine(a++); // Affiche 5, puis a devient 6
Console.WriteLine(++a); // Incrémente a (7), puis affiche 7
```

### Opérations mixtes avec des types différents (Promotion de Type)

Lorsque vous effectuez des opérations avec des types différents (par exemple, `int` et `double`), C# effectue une **promotion de type** pour éviter les pertes de données.

```csharp
int a = 5;
double b = 2.5;

double result = a + b; // a est converti en double
Console.WriteLine(result); // Résultat : 7.5
```

