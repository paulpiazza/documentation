---
title: Boucles
description: .NET framework
order: 12
---

## Boucles

- La **boucle `for`** est utilisée pour un nombre fixe d'itérations.
- La **boucle `foreach`** est idéale pour parcourir des collections.
- Le mot-clé **`break`** interrompt complètement une boucle.
- Le mot-clé **`continue`** saute à l'itération suivante sans terminer la boucle.

Les boucles sont des structures fondamentales en programmation, permettant de répéter une série d'instructions plusieurs fois. En C#, les boucles les plus courantes sont `for` et `foreach`. Les mots-clés `break` et `continue` permettent de contrôler l'exécution de ces boucles.



### La boucle `for`

La boucle `for` est utilisée lorsque vous savez à l'avance combien de fois vous voulez exécuter une série d'instructions. Elle est composée de trois parties :
- **Initialisation** : Une variable est initialisée avant que la boucle commence.
- **Condition** : Tant que cette condition est vraie, la boucle continue de s'exécuter.
- **Incrément/Décrément** : Une opération est effectuée après chaque itération pour modifier la variable.

```csharp
for (initialisation; condition; incrément/décrément)
{
    // Instructions à exécuter
}
```

Affichons les nombres de 1 à 5.

```csharp
for (int i = 1; i <= 5; i++)
{
    Console.WriteLine($"i = {i}");
}
```

**Explication :**
1. **Initialisation** : `int i = 1` → La variable `i` commence à 1.
2. **Condition** : `i <= 5` → Tant que `i` est inférieur ou égal à 5, la boucle continue.
3. **Incrément** : `i++` → Après chaque itération, `i` est augmenté de 1.

**Sortie :**
```
i = 1
i = 2
i = 3
i = 4
i = 5
```

### La boucle `foreach`

La boucle `foreach` est utilisée pour parcourir tous les éléments d'une collection (comme un tableau ou une liste). Elle est plus simple à utiliser que la boucle `for` lorsqu'il s'agit de traiter chaque élément d'une collection, car elle ne nécessite pas de gérer manuellement les index.

```csharp
foreach (type element in collection)
{
    // Instructions à exécuter pour chaque élément
}
```

Affichons tous les éléments d'un tableau.

```csharp
string[] fruits = { "Pomme", "Banane", "Orange" };

foreach (string fruit in fruits)
{
    Console.WriteLine($"Fruit : {fruit}");
}
```

1. La boucle parcourt chaque élément du tableau `fruits`.
2. À chaque itération, la variable `fruit` contient un élément du tableau.

```
Fruit : Pomme
Fruit : Banane
Fruit : Orange
```


### Le mot-clé `break`

Le mot-clé `break` est utilisé pour **interrompre une boucle** avant qu'elle ne se termine normalement. Lorsque `break` est rencontré, la boucle s'arrête immédiatement et le programme continue après la boucle.

Arrêtons une boucle dès que nous rencontrons un nombre particulier.

```csharp
for (int i = 1; i <= 10; i++)
{
    if (i == 5)
    {
        Console.WriteLine("On arrête la boucle à i = 5");
        break; // La boucle s'arrête ici
    }
    Console.WriteLine($"i = {i}");
}
```

1. La boucle commence à `i = 1` et s'incrémente jusqu'à `10`.
2. Si `i == 5`, le mot-clé `break` est exécuté, ce qui interrompt la boucle.

```
i = 1
i = 2
i = 3
i = 4
On arrête la boucle à i = 5
```

### Le mot-clé `continue`

Le mot-clé `continue` est utilisé pour **passer directement à l'itération suivante** de la boucle, en sautant les instructions restantes pour l'itération en cours.

Ignorons un nombre particulier dans une boucle.

```csharp
for (int i = 1; i <= 5; i++)
{
    if (i == 3)
    {
        Console.WriteLine("On saute i = 3");
        continue; // Passe à l'itération suivante
    }
    Console.WriteLine($"i = {i}");
}
```

1. La boucle commence à `i = 1` et s'incrémente jusqu'à `5`.
2. Si `i == 3`, le mot-clé `continue` est exécuté, ce qui saute l'instruction `Console.WriteLine($"i = {i}")` pour cette itération.

```
i = 1
i = 2
On saute i = 3
i = 4
i = 5
```

| **Mot-clé**  | **Effet**                                                                 |
|--------------|---------------------------------------------------------------------------|
| **`break`**  | Arrête complètement la boucle et sort de celle-ci.                        |
| **`continue`** | Ignore le reste des instructions de l'itération en cours et passe à la suivante. |



Le mot-clé **`continue`** peut également être utilisé avec une boucle **`while`** en C#. Comme avec une boucle `for`, il permet de **passer à l'itération suivante**, en sautant les instructions restantes pour l'itération en cours.


### La boucle `while`

Une boucle `while` continue d'exécuter le bloc d'instructions tant que la condition spécifiée est vraie. Si un `continue` est rencontré, l'exécution saute immédiatement à la prochaine évaluation de la condition de la boucle.

- Une boucle **`while`** continue d'exécuter son bloc tant que la condition est vraie.
- Le mot-clé **`continue`** saute les instructions restantes de l'itération actuelle et revient à l'évaluation de la condition.
- Attention à toujours mettre à jour la variable de contrôle pour éviter les boucles infinies.

```csharp
while (condition)
{
    // Instructions avant le continue (facultatives)
    if (condition_particulière)
    {
        continue; // Passe directement à l'évaluation de la condition
    }
    // Instructions après le continue (ne seront pas exécutées si continue est appelé)
}
```

Exemple :

```csharp
int i = 1;

while (i <= 10)
{
    if (i % 2 == 0) // Si le nombre est pair
    {
        i++; // Incrémenter pour éviter une boucle infinie
        continue; // Passer à l'itération suivante
    }

    Console.WriteLine($"Nombre impair : {i}");
    i++; // Incrémenter
}
```

1. La boucle commence avec `i = 1`.
2. Si `i` est pair (`i % 2 == 0`), le mot-clé `continue` est exécuté :
   - Cela saute le reste des instructions de la boucle.
   - La condition `while` est réévaluée pour passer à l'itération suivante.
3. Si `i` est impair, le nombre est affiché normalement.

```
Nombre impair : 1
Nombre impair : 3
Nombre impair : 5
Nombre impair : 7
Nombre impair : 9
```

Lorsque vous utilisez `continue` dans une boucle `while`, il est important de s'assurer que la condition de la boucle sera mise à jour correctement. Sinon, vous risquez de créer une **boucle infinie**.

```csharp
int i = 1;

while (i <= 5)
{
    if (i % 2 == 0)
    {
        continue; // Passe à l'itération suivante, mais i n'est jamais incrémenté ici !
    }

    Console.WriteLine($"i = {i}");
    i++;
}
```


