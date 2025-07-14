---
title: Calling Methods and Class from Libraries
description: .NET framework
order: 8
---

## Calling Methods in a Class

In C#, methods are functions defined inside a class. To call a method from a class, you use the format:

```csharp
ClassName.MethodName();
```

Here, the `.` operator is used to access the method inside the class, and the `()` are used to actually call the method.

## Calling a Stateless Method

If a method does **not depend on any data stored in an object** (i.e., it is **stateless**), you can call it directly without creating an instance of the class. These methods are usually marked as `static`.

### Example: Console Class
The `Console.WriteLine()` method is a good example of a stateless method. You don’t need to create a `Console` object to call it:

```csharp
Console.WriteLine("Hello, World!");
```

Here:
- `Console` is the class.
- `WriteLine` is the method.
- The `()` calls the method, and `"Hello, World!"` is the parameter passed to it.

This works because `WriteLine` is a **static** method, meaning it belongs to the class itself, not to any specific object.

## Calling a Stateful Method

If a method **depends on the data stored in an object**, you need to create an instance (an **object**) of the class first. This is because the method works with the data specific to that object.

To create an instance of a class, you use the `new` keyword. Once you have the object, you can call the method on it.

### Example: Dice Class
Let’s say you have a `Dice` class that represents a dice. It has a method called `Roll()` that simulates rolling the dice. Since `Roll()` depends on the dice object (e.g., it could store the last rolled number), you need to create an instance of the `Dice` class first.

```csharp
// Define the Dice class
class Dice
{
    private Random random = new Random(); // A random number generator
    public int Roll()
    {
        return random.Next(1, 7); // Simulate rolling a dice (1 to 6)
    }
}

// Use the Dice class
class Program
{
    static void Main(string[] args)
    {
        Dice myDice = new Dice(); // Create an instance of the Dice class
        int result = myDice.Roll(); // Call the Roll method on the Dice object
        Console.WriteLine($"You rolled a {result}!");
    }
}
```

Here:
- `Dice` is the class.
- `myDice` is an instance (object) of the `Dice` class, created using the `new` keyword.
- `Roll()` is a stateful method because it uses the `random` field inside the object to generate a number.
- You must call `myDice.Roll()` on the object, not directly on the class.

## Key Points

1. **Stateless Methods**
   - Do not depend on any object-specific data.
   - Can be called directly using the class name (e.g., `Console.WriteLine()`).
   - Usually marked as `static`.

2. **Stateful Methods**
   - Depend on the data stored in an object.
   - Require creating an instance (object) of the class using the `new` keyword.
   - Called on the object (e.g., `myDice.Roll()`).

3. **Objects**
   - An **object** is an instance of a class.
   - It is created using the `new` keyword.
   - Objects store data (state) and provide methods to interact with that data.


Here’s an explanation of these concepts in **C#** in simple terms:


### Methods Can Take No Parameters or Multiple Parameters
- A **method** can be designed to take **no parameters** or **one or more parameters**, depending on how it is implemented.
- When you call a method that takes multiple parameters, you separate the parameters with a **comma (`,`)**.

#### Example:
```csharp
class Program
{
    static void PrintMessage() // No parameters
    {
        Console.WriteLine("Hello, World!");
    }

    static void PrintSum(int a, int b) // Two parameters
    {
        Console.WriteLine(a + b);
    }

    static void Main(string[] args)
    {
        PrintMessage(); // Call method with no parameters
        PrintSum(5, 10); // Call method with two parameters (5 and 10)
    }
}
```

Here:
- `PrintMessage()` takes no parameters.
- `PrintSum(int a, int b)` takes two parameters (`a` and `b`), separated by a comma.


### Methods Can Return a Value or Return Nothing
- A method can **return a value** after completing its task.
  - For example, it can return a number, a string, or any other data type.
- If a method **does not return any value**, it is declared with the keyword **`void`**.

#### Example:
```csharp
class Program
{
    static int Add(int a, int b) // Returns an integer
    {
        return a + b;
    }

    static void PrintMessage() // Returns nothing (void)
    {
        Console.WriteLine("This method returns nothing.");
    }

    static void Main(string[] args)
    {
        int result = Add(3, 7); // Call method that returns a value
        Console.WriteLine("Sum: " + result);

        PrintMessage(); // Call method that returns nothing
    }
}
```

Here:
- `Add(int a, int b)` returns an integer (`int`) value.
- `PrintMessage()` is a `void` method, so it doesn’t return anything.

### Method Overloading
- **Method overloading** allows you to define **multiple versions of a method** with the **same name** but **different method signatures**.
- A **method signature** is defined by:
  - The **number of parameters**.
  - The **types of parameters**.
  - The **order of parameters**.

This allows you to call the same method name with different arguments.

#### Example:
```csharp
class Program
{
    static void PrintMessage() // No parameters
    {
        Console.WriteLine("Hello, World!");
    }

    static void PrintMessage(string name) // One parameter
    {
        Console.WriteLine($"Hello, {name}!");
    }

    static void PrintMessage(string name, int age) // Two parameters
    {
        Console.WriteLine($"Hello, {name}! You are {age} years old.");
    }

    static void Main(string[] args)
    {
        PrintMessage(); // Calls the version with no parameters
        PrintMessage("Alice"); // Calls the version with one parameter
        PrintMessage("Alice", 25); // Calls the version with two parameters
    }
}
```

Here:
- The method `PrintMessage` is **overloaded** with three versions:
  - One with no parameters.
  - One with a single `string` parameter.
  - One with a `string` and an `int` parameter.


### IntelliSense Helps Write Code Faster
- **IntelliSense** is a feature in Visual Studio (or other C# editors) that helps you write code faster and with fewer errors.
- It provides:
  - **Quick information** about methods, including their parameters, return types, and overloaded versions.
  - **Autocomplete suggestions** as you type.

#### Example of IntelliSense in Action:
When you type `Console.WriteLine(`, IntelliSense will show:
- The **description** of the `WriteLine` method.
- The **return type** (`void`).
- The **list of overloaded versions** of the method (e.g., `WriteLine(string)`, `WriteLine(int)`, etc.).
- The **types of parameters** each version of the method accepts.

### Use Learn.microsoft.com for Reference
- When you need detailed information about how a method works, you can refer to the official Microsoft documentation at **[learn.microsoft.com](https://learn.microsoft.com)**.
- It provides:
  - Detailed descriptions of methods.
  - Examples of how to use them.
  - Information on their parameters, return values, and overloaded versions.

## Keys Points

1. **Parameters**: Methods can take no parameters or multiple parameters, separated by commas.
2. **Return Values**: Methods can return a value or nothing (`void`).
3. **Overloading**: You can define multiple versions of a method with the same name but different parameters.
4. **IntelliSense**: Helps you write code faster by providing information about methods and their usage.
5. **Documentation**: Use `learn.microsoft.com` as the go-to resource for understanding .NET methods.
