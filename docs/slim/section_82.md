---
title: Lesson 3.11 - Enums
description: Slim notes.
order: 82
---

See [Enums](https://www.php.net/manual/en/language.enumerations.php)

[00:00](https://www.youtube.com/watch?v=5Cgio2OfOYk&list=PLr3d3QYzkw2xabQRUpcZ_IBk9W50M9pe-&index=79&t=0s) - Intro

Enums, short for "enumerations," are a valuable feature introduced in PHP 8.1 that allow developers to define a set of named, constant values representing a distinct type. Enums are used to improve code readability, maintainability, and type safety when you have a set of related, constant values that should not change during the execution of a program.

An enum is a new data type introduced in PHP 8.1. It is similar to classes and can be thought of as a collection of named, constant values.

Common use cases for enums include representing sets of related options, states, statuses, or choices. They are particularly useful in scenarios where you want to ensure that only a specific set of values is used.

Enums are a powerful addition to PHP, enhancing code quality and making it easier to understand and maintain your codebase. They provide a structured and self-documenting way to work with constant values.


[00:26](https://www.youtube.com/watch?v=5Cgio2OfOYk&list=PLr3d3QYzkw2xabQRUpcZ_IBk9W50M9pe-&index=79&t=26s) - Constant approach & the problem with constants

Constants are a way to define and manage fixed values in PHP. While they are useful in many scenarios, there are situations where the constant approach may have limitations and drawbacks. Let's discuss the benefits of constants and some of the problems associated with them.

**Benefits of Constants:**

1. **Readability and Maintainability:** Constants provide meaningful names for values, making the code more readable and self-explanatory. Instead of using magic numbers or hard-coded strings, you can use named constants to give context to the values.

2. **Global Accessibility:** Constants are globally accessible within a PHP script, making them available throughout the entire codebase. This can be beneficial for sharing configuration values or commonly used constants across different parts of an application.

3. **Compile-Time Values:** Constants are resolved at compile time, which means that they don't incur runtime performance overhead. This makes them efficient for defining configuration settings and other constants.

4. **Type Safety:** Constants are inherently type-safe, as their values cannot be changed once defined. This ensures that the data remains consistent throughout the program's execution.

**Problems with Constants:**

1. **Limited Expressiveness:** Constants are limited to primitive data types (e.g., strings, integers, floats, booleans). They cannot represent more complex data structures or objects. This limitation can make it challenging to represent structured or hierarchical data.

2. **Inflexibility:** Constants are static and cannot be changed at runtime. This is useful for ensuring that configuration values remain constant, but it can be restrictive when dynamic changes are needed.

3. **Lack of Namespace Support:** PHP constants exist in a global namespace. This can lead to naming conflicts if different parts of your application define constants with the same name. This problem can be mitigated by using unique prefixes, but it's not as clean as using namespaces.

4. **No Autoloading:** Constants do not benefit from PHP's autoloading mechanisms, which means that they must be defined in files that are included or required explicitly. This can lead to a less organized code structure when dealing with a large number of constants.

5. **No Enumerations:** PHP lacked built-in support for enumerations until PHP 8.1. Before that, developers often used constants to simulate enumerations, but this approach was less expressive and didn't provide type safety.

6. **Not Suitable for Complex Logic:** Constants are not suitable for implementing complex logic or behaviors. They are best used for straightforward data values.

7. **Limited Data Validation:** Constants do not provide built-in mechanisms for data validation or transformation. You must manually validate and sanitize values before defining them as constants.

In summary, while constants are a valuable tool for defining fixed values and configuration settings in PHP, they have limitations, particularly when dealing with complex or structured data. With the introduction of features like enumerations (in PHP 8.1) and attributes (in PHP 8), developers now have additional options for representing and managing data in a more expressive and structured manner. The choice between constants and these newer features depends on the specific requirements and design goals of your application.


While you could achieve similar results using PHP constants, enums offer several advantages:

   - Improved readability: Enum values are self-descriptive and provide context.
   - Type safety: Enums restrict values to a predefined set, reducing the risk of using incorrect values.
   - Namespace: Enums can be organized in namespaces, avoiding naming conflicts.

[04:57](https://www.youtube.com/watch?v=5Cgio2OfOYk&list=PLr3d3QYzkw2xabQRUpcZ_IBk9W50M9pe-&index=79&t=297s) - Enums approach & the solution

Enums are a relatively new feature introduced in PHP 8.1, offering a structured and more expressive way to define and manage sets of named, constant values. Let's compare enums with traditional constants to understand their differences and advantages.

**Enums vs. Constants:**

1. **Readability and Self-Documentation:**

   - **Constants:** Constants use a single namespace for all defined constants, which can lead to naming conflicts and make it challenging to provide clear documentation for each constant. Developers often use prefixes to avoid naming clashes.
   
   - **Enums:** Enums have their own namespace, which means that each enum type defines its set of constants. This leads to better organization and self-documentation. Enum values are accessed using the `EnumType::CONSTANT_NAME` syntax.

   ```php
   // Constants
   const RED = 'red';
   const GREEN = 'green';
   const BLUE = 'blue';

   // Enums
   enum Color {
       case RED;
       case GREEN;
       case BLUE;
   }
   ```

2. **Type Safety:**

   - **Constants:** Constants do not inherently provide type safety. You can assign any value to a constant, even if it's not the intended type.
   
   - **Enums:** Enums are inherently type-safe. You can only assign values from the defined set of enum constants to an enum variable.

   ```php
   // Constants (no type safety)
   const MAX_ITEMS = '10';
   $count = MAX_ITEMS; // No type check

   // Enums (type safety)
   enum Size {
       case SMALL = 1;
       case MEDIUM = 2;
       case LARGE = 3;
   }

   $size = Size::SMALL; // Type-checked
   ```

3. **Autoloading and Namespace Support:**

   - **Constants:** Constants are not affected by PHP's autoloading mechanisms and exist in a global namespace. To avoid naming conflicts, developers often use unique prefixes.
   
   - **Enums:** Enums benefit from PHP's autoloading and have their own namespaces, making them more organized and less prone to naming conflicts.

4. **Dynamic and Expressive:**

   - **Constants:** Constants are static and cannot be changed at runtime. They are primarily used for defining fixed values like configuration settings.
   
   - **Enums:** Enums are more dynamic. You can create instances of enums, use them as parameters, and work with them more expressively. Enums can also have methods.

   ```php
   enum Operation {
       case ADD;
       case SUBTRACT;

       public function apply(int $a, int $b): int {
           if ($this === self::ADD) {
               return $a + $b;
           } elseif ($this === self::SUBTRACT) {
               return $a - $b;
           }
       }
   }

   $operation = Operation::ADD;
   $result = $operation->apply(5, 3); // Result: 8
   ```

5. **Enhanced IDE Support:**

   - **Constants:** While IDEs provide some support for constants, they cannot provide type hints or autocompletion based on constants.
   
   - **Enums:** Enums offer better IDE support with type hints, autocompletion, and documentation lookup. IDEs can understand the enum structure and provide context-aware suggestions.

In summary, enums in PHP 8.1 provide a more organized, self-documenting, and type-safe way to define and work with sets of constant values compared to traditional constants. They offer better readability, maintainability, and expressive power, particularly in scenarios where you need to represent a fixed set of related values. Enums are especially beneficial for improving code quality and reducing naming conflicts.

You declare an enum using the `enum` keyword, followed by the name of the enum type and a list of constant values enclosed in curly braces `{}`. Each constant value is defined using the `const` keyword.

```php
enum DaysOfWeek {
    const MONDAY = 'Monday';
    const TUESDAY = 'Tuesday';
    const WEDNESDAY = 'Wednesday';
    const THURSDAY = 'Thursday';
    const FRIDAY = 'Friday';
    const SATURDAY = 'Saturday';
    const SUNDAY = 'Sunday';
}
```

In this example, we've defined an `DaysOfWeek` enum with seven constant values representing days of the week.

You can use enums in your code just like any other data type. You can assign enum values to variables, pass them as function parameters, and compare them.

```php
$today = DaysOfWeek::WEDNESDAY;

if ($today === DaysOfWeek::WEDNESDAY) {
    echo "It's Wednesday!";
}
```

Enums provide type safety, so you can't accidentally assign a value that doesn't belong to the enum.

Enums are **automatically initialized** with the constant names as values. You can access the values of enum constants using the `::` notation.

```php
echo DaysOfWeek::MONDAY; // Output: "Monday"
```


[09:36](https://www.youtube.com/watch?v=5Cgio2OfOYk&list=PLr3d3QYzkw2xabQRUpcZ_IBk9W50M9pe-&index=79&t=576s) - Pure & backed enums

In PHP 8.1, which introduced native support for enums, there are two types of enums: "pure" enums and "backed" enums. These two types of enums provide different approaches for defining and working with enumerated types. Let's explore the differences between them:

1. **Pure Enums:**

   - **Definition:** Pure enums are defined without explicit values. The enum constants are assigned automatically with ordinal values (0, 1, 2, ...) based on their order of declaration within the enum.

   - **Example:**
   
     ```php
     enum Day {
         case MONDAY;
         case TUESDAY;
         case WEDNESDAY;
         // ...
     }
     ```
   
   - **Use Cases:** Pure enums are useful when you want to represent a set of related constants without assigning specific values to them. They are particularly helpful when the actual values of the constants are not significant, and you want to improve code readability and maintainability.

2. **Backed Enums:**

   - **Definition:** Backed enums allow you to associate specific values (backing values) with each enum constant. These backing values can be of various types, such as integers, floats, strings, or even objects.

   - **Example:**
   
     ```php
     enum Status: string {
         case PENDING = 'pending';
         case APPROVED = 'approved';
         case REJECTED = 'rejected';
     }
     ```
   
   - **Use Cases:** Backed enums are useful when you need to associate meaningful values or data with each enum constant. For example, you might use backed enums to represent status codes, error messages, or any scenario where the value of the constant carries specific information.

**Key Differences:**

- **Automatic Values:** Pure enums automatically assign ordinal values (0, 1, 2, ...) to their constants, while backed enums allow you to specify custom values.

- **Type Annotation:** Backed enums require a type annotation for the enum, indicating the type of the backing values. Pure enums don't require this annotation.

- **Type Safety:** Both pure and backed enums provide type safety for the constants, but backed enums also enforce type safety for the backing values.

- **Examples:** Pure enums are often used for scenarios where the specific value of the constant doesn't matter, such as days of the week or menu options. Backed enums are used when you need to associate meaningful data with each constant, such as status codes or user roles.

In summary, whether to use pure enums or backed enums depends on your specific use case. Pure enums are more suitable when you want to represent a simple set of related constants without assigning specific values. Backed enums are appropriate when you need to associate meaningful data or values with each enum constant. Both types of enums provide type safety and help improve code readability and maintainability.

[12:48](https://www.youtube.com/watch?v=5Cgio2OfOYk&list=PLr3d3QYzkw2xabQRUpcZ_IBk9W50M9pe-&index=79&t=768s) - Get enum object from the raw value

In PHP 8.1 and later versions, you can retrieve an enum object from its raw value using the `::from()` method provided by the enum type. This method allows you to obtain the enum object associated with a specific raw value.

Here's how you can get an enum object from its raw value:

Assuming you have the following enum:

```php
enum Color {
    case RED = 'red';
    case GREEN = 'green';
    case BLUE = 'blue';
}
```

You can use the `::from()` or `::tryFrom()` method to retrieve an enum object based on its raw value:

```php
$rawValue = 'green';

// Get the enum object based on the raw value
$color = Color::from($rawValue);

// Now, $color contains the Color::GREEN enum object
```

In this example, we retrieved the `Color::GREEN` enum object based on the raw value `'green'`.

It's important to note that if the provided raw value doesn't match any of the enum constants, PHP will throw an `Error` to indicate that the value is not a valid enum value. Therefore, you should handle such cases gracefully, either by using a `try-catch` block or by ensuring that the raw value is valid before calling `::from()`.

[15:04](https://www.youtube.com/watch?v=5Cgio2OfOYk&list=PLr3d3QYzkw2xabQRUpcZ_IBk9W50M9pe-&index=79&t=904s) - Methods in enums

In PHP 8.1 and later versions, you can define methods within enum types. Enum methods allow you to associate behavior with enum constants, making your code more organized and expressive. Here's how you can define and use methods within enums:

```php
enum Status {
    case PENDING;
    case APPROVED;
    case REJECTED;

    public function getDescription(): string {
        switch ($this) {
            case self::PENDING:
                return "This request is pending approval.";
            case self::APPROVED:
                return "This request has been approved.";
            case self::REJECTED:
                return "This request has been rejected.";
        }
    }

    public static function isValid(string $value): bool {
        return in_array($value, [self::PENDING, self::APPROVED, self::REJECTED]);
    }
}
```

In the example above, we have defined two methods within the `Status` enum:

1. `getDescription()`: This instance method returns a description for each enum constant. It uses a `switch` statement to determine the description based on the enum constant.

2. `isValid(string $value)`: This static method checks if a given string is a valid enum value. It uses `in_array` to validate whether the provided value exists among the enum constants.

You can use these methods as follows:

```php
$status = Status::PENDING;

// Calling the getDescription() method
$description = $status->getDescription();
echo $description; // Output: "This request is pending approval."

// Calling the static isValid() method
$isApproved = Status::isValid('approved');
echo $isApproved ? 'Valid' : 'Invalid'; // Output: "Valid"
```

Here's a breakdown of how to work with enum methods:

- Instance methods are defined within the enum, allowing you to call them on enum objects created from the constants.
- Static methods can be called directly on the enum type itself without creating an enum object.
- Enum methods can provide behavior, logic, or descriptions associated with each enum constant, enhancing code readability and maintainability.
- You can use enum methods to perform actions or validations specific to each enum constant, making your code more expressive and self-documenting.

Enums with methods are particularly useful when you need to associate behavior or properties with each constant, such as returning descriptions, validating values, or performing enum-specific actions in your code.

[19:28](https://www.youtube.com/watch?v=5Cgio2OfOYk&list=PLr3d3QYzkw2xabQRUpcZ_IBk9W50M9pe-&index=79&t=1168s) - Static methods in enums

In PHP 8.1 and later versions, you can define static methods within enum types to provide functionality that is associated with the enum as a whole rather than with specific enum constants. Static methods within enums allow you to encapsulate logic and behaviors that are relevant to the entire enum type. Here's how you can define and use static methods within enums:

```php
enum Status {
    case PENDING;
    case APPROVED;
    case REJECTED;

    public static function getAllStatuses(): array {
        return [self::PENDING, self::APPROVED, self::REJECTED];
    }

    public static function getStatusCount(): int {
        return count(self::getAllStatuses());
    }
}
```

In the example above, we have defined two static methods within the `Status` enum:

1. `getAllStatuses()`: This static method returns an array containing all the enum constants (statuses).

2. `getStatusCount()`: This static method returns the count of all the enum constants.

You can use these static methods as follows:

```php
// Calling the static getAllStatuses() method
$statuses = Status::getAllStatuses();
print_r($statuses); // Output: Array([0] => Status::PENDING, [1] => Status::APPROVED, [2] => Status::REJECTED)

// Calling the static getStatusCount() method
$statusCount = Status::getStatusCount();
echo "Total status count: $statusCount"; // Output: "Total status count: 3"
```

Here's a summary of working with static methods in enums:

- Static methods within enums are defined using the `public static` modifier.
- These methods can be called directly on the enum type itself (e.g., `Status::getAllStatuses()`) without creating an enum object.
- Static methods are useful for encapsulating behavior or logic that pertains to the entire enum, such as providing lists of constants, calculating aggregate values, or performing operations that involve multiple enum constants.

Static methods in enums are valuable for enhancing code organization and encapsulating logic related to the enum type. They help maintain a clean and modular code structure, making it easier to work with and extend enums in your PHP applications.

[20:24](https://www.youtube.com/watch?v=5Cgio2OfOYk&list=PLr3d3QYzkw2xabQRUpcZ_IBk9W50M9pe-&index=79&t=1224s) - Refactoring hardcoded values with enums in attributes

Refactoring with enums can lead to cleaner, more readable, and more maintainable code. Enumerated types provide a structured way to represent a set of related constants, making your code self-documenting and reducing the potential for errors. Here are some common refactoring scenarios where enums can be beneficial:

1. **Replacing Magic Constants:**

   Replace magic constants (e.g., string literals or numeric values) with enums to improve code readability and maintainability. For example, instead of using `'pending'` and `'approved'` as status values throughout your code, you can define an enum like this:

   ```php
   enum Status {
       case PENDING;
       case APPROVED;
       case REJECTED;
   }
   ```

   Then, use the `Status` enum constants in your code:

   ```php
   // Before
   $status = 'pending';

   // After
   $status = Status::PENDING;
   ```

2. **Simplifying Switch Statements:**

   Refactor complex or lengthy `switch` statements that handle different cases into more readable code using enums. Enums make the code self-explanatory and easier to maintain.

   ```php
   // Before
   switch ($status) {
       case 'pending':
           // Handle pending status
           break;
       case 'approved':
           // Handle approved status
           break;
       // ...
   }

   // After
   switch ($status) {
       case Status::PENDING:
           // Handle pending status
           break;
       case Status::APPROVED:
           // Handle approved status
           break;
       // ...
   }
   ```

3. **Parameterizing Functions:**

   If a function takes a parameter that represents a limited set of values, use enums to specify valid input values. This enforces type safety and clarifies the expected values.

   ```php
   function processStatus(Status $status) {
       // Process the status
   }

   // Usage
   processStatus(Status::PENDING);
   ```

4. **Replacing Arrays of Constants:**

   If you have arrays of constants or strings that represent a set of related options, consider using enums. Enums provide better type checking and self-documentation.

   ```php
   // Before
   $colors = ['red', 'green', 'blue'];

   // After
   enum Color {
       case RED;
       case GREEN;
       case BLUE;
   }

   $colors = [Color::RED, Color::GREEN, Color::BLUE];
   ```

5. **Enhancing Code Documentation:**

   Enums inherently provide better code documentation by naming each constant. This makes your code more self-documenting, reducing the need for extensive comments to explain the purpose of constants.

   ```php
   enum Role {
       case USER;
       case ADMIN;
   }
   ```

6. **Improving Type Safety:**

   Using enums enforces type safety, reducing the chances of passing incorrect values to functions or methods.

   ```php
   function processRole(Role $role) {
       // Process the user role
   }

   // This is valid
   processRole(Role::USER);

   // This would result in a type error
   processRole('admin');
   ```

When refactoring with enums, consider the specific needs of your application and how enums can improve code clarity and maintainability. Using enums appropriately can lead to more robust and self-documenting code, making it easier to understand and maintain in the long run.

[23:33](https://www.youtube.com/watch?v=5Cgio2OfOYk&list=PLr3d3QYzkw2xabQRUpcZ_IBk9W50M9pe-&index=79&t=1413s) - Interfaces & traits in enums

Enums can implement interfaces directly. This feature allows you to define a common set of methods in an interface and have each enum constant provide its own implementation of those methods. Here's how you can implement interfaces in enums:

```php
interface StatusInterface {
    public function getDescription(): string;
}

enum Status implements StatusInterface {
    case PENDING;
    case APPROVED;
    case REJECTED;

    public function getDescription(): string {
        switch ($this) {
            case self::PENDING:
                return "This request is pending approval.";
            case self::APPROVED:
                return "This request has been approved.";
            case self::REJECTED:
                return "This request has been rejected.";
        }
    }
}

// Usage
$status = Status::PENDING;
$description = $status->getDescription();
```

In this example, we have an `StatusInterface` interface with a `getDescription()` method. The `Status` enum implements this interface, and each enum constant (`PENDING`, `APPROVED`, and `REJECTED`) provides its own implementation of the `getDescription()` method.

When you call the `getDescription()` method on an enum constant, it will use the implementation provided by that constant. This approach allows you to define a common set of behaviors for all enum constants while customizing the behavior for each constant as needed.

It's important to note that when an enum implements an interface, all of its constants are required to provide an implementation for the interface's methods. This ensures that each enum constant adheres to the interface's contract.


You can use traits alongside enums or within classes that use enums. You can define methods and properties within traits that work with enum constants or provide additional functionality. Here's an example of how you can use traits in conjunction with enums:

```php
enum Status {
    case PENDING;
    case APPROVED;
    case REJECTED;
}

trait StatusHelper {

    public function getStatusDescription(Status $status): string {
        switch ($status) {
            case Status::PENDING:
                return "This request is pending approval.";
            case Status::APPROVED:
                return "This request has been approved.";
            case Status::REJECTED:
                return "This request has been rejected.";
            default:
                return "Unknown status";
        }
    }
}

class Order {
    use StatusHelper;

    private Status $status;

    public function __construct(Status $status) {
        $this->status = $status;
    }

    public function getStatusDescription(): string {
        return $this->getStatusDescription($this->status);
    }
}

$order = new Order(Status::PENDING);
$description = $order->getStatusDescription(); // "This request is pending approval."
```


While you can't directly use enums within traits, you can certainly use traits within classes that work with enums, allowing you to encapsulate and reuse common functionality related to enum constants.

>[!info]
> You **can not** use traits in enums class.


[24:57](https://www.youtube.com/watch?v=5Cgio2OfOYk&list=PLr3d3QYzkw2xabQRUpcZ_IBk9W50M9pe-&index=79&t=1497s) - Enum rules

Enums in PHP, introduced in PHP 8.1, come with certain rules and conventions that you should be aware of when working with them. Understanding these rules is important for using enums effectively in your PHP code. Here are some key rules and guidelines for PHP enums:

1. **Enum Declaration:**

   - To define an enum, you use the `enum` keyword followed by the enum name and a list of constants enclosed in curly braces `{}`.

   ```php
   enum Status {
       case PENDING;
       case APPROVED;
       case REJECTED;
   }
   ```

2. **Enum Constants:**

   - Enum constants are declared using the `case` keyword within the enum declaration.
   - Each constant must be semicolon-terminated.
   - Constants are typically named in UPPERCASE to follow naming conventions.

3. **Accessing Enum Constants:**

   - Enum constants can be accessed using the `EnumName::CONSTANT_NAME` syntax.
   - Enums provide type safety, so attempting to access an undefined constant results in a fatal error.

   ```php
   $status = Status::PENDING;
   ```

4. **Auto-Incremented Values:**

   - Enum constants are auto-incremented by default, starting from 0 for the first constant and increasing by 1 for each subsequent constant.
   - You can explicitly specify values for constants if needed.

5. **Enum Type Annotation:**

   - You can specify a data type annotation for an enum, indicating the data type of the constants' values.
   - Type annotations are declared after the enum name, separated by a colon.

   ```php
   enum Color: string {
       case RED = 'red';
       case GREEN = 'green';
       case BLUE = 'blue';
   }
   ```

6. **Enum Methods:**

   - You can define methods within an enum to associate behavior with enum constants.
   - Enum methods can be both instance methods and static methods.

   ```php
   enum Status {
       case PENDING;
       case APPROVED;
       case REJECTED;

       public function getDescription(): string {
           // Method implementation
       }

       public static function isValid(string $value): bool {
           // Method implementation
       }
   }
   ```

7. **Enum Values as Objects:**

   - Enums can store values of any type, including objects.
   - This flexibility allows you to associate complex data with enum constants if needed.

8. **Comparing Enums:**

   - You can compare enum values using equality operators (`===` and `!==`).
   - Enums provide strict type checking when comparing values.

   ```php
   if ($status === Status::PENDING) {
       // Condition is true
   }
   ```

9. **Enum Operations:**

   - You can perform operations and switch statements on enum constants to execute code based on the value of the enum.

   ```php
   switch ($status) {
       case Status::PENDING:
           // Handle pending status
           break;
       case Status::APPROVED:
           // Handle approved status
           break;
       case Status::REJECTED:
           // Handle rejected status
           break;
   }
   ```

10. **Enum Backing Values:**

    - You can assign specific values (backing values) to enum constants when needed.
    - Backing values must match the data type specified in the enum type annotation.

These are some of the fundamental rules and conventions associated with enums in PHP. Enums provide a powerful and expressive way to work with a fixed set of named constants, enhancing type safety and code readability in your applications.

[25:51](https://www.youtube.com/watch?v=5Cgio2OfOYk&list=PLr3d3QYzkw2xabQRUpcZ_IBk9W50M9pe-&index=79&t=1551s) - Access list of all cases

You can iterate over enum values using a `foreach` loop.

```php
foreach (DaysOfWeek::values() as $day) {
    echo $day . PHP_EOL;
}
```

Or, you can use `::cases()` will return a packed array of all cases in an enumeration, in order of declaration.

```php
enum Suit  
{  
	case Hearts;  
	case Diamonds;  
	case Clubs;  
	case Spades;  
}  
  
var_dump(Suit::cases());
```

[26:59](https://www.youtube.com/watch?v=5Cgio2OfOYk&list=PLr3d3QYzkw2xabQRUpcZ_IBk9W50M9pe-&index=79&t=1619s) - New function & reflection classes

PHP 8.1 introduced new functions and reflection classes specifically designed for working with enums. These additions enhance the functionality and ease of use of enums in PHP. Below are some of the new functions and reflection classes related to enums:

`enum_exists()` : Checks if the enum has been defined

**ReflectionEnum Class:**

   - PHP 8.1 introduced the `ReflectionEnum` class, which is a reflection class specifically designed for enums.
   - You can use this class to inspect and interact with enums, including retrieving their constants and metadata.

   ```php
   enum Status {
       case PENDING;
       case APPROVED;
       case REJECTED;
   }

   $reflection = new ReflectionEnum(Status::class);

   // Get all constants as ReflectionEnumConstant objects
   $constants = $reflection->getConstants();

   // Check if a specific constant exists
   $exists = $reflection->hasConstant('PENDING');

   // Retrieve the name of the enum
   $enumName = $reflection->getName();
   ```

These additions make it easier to work with enums in PHP by providing functions for obtaining enum values, converting raw values into enum objects, and introspecting enum types using reflection classes.

Please note that these features are based on PHP 8.1, and there may have been updates or additional enhancements in subsequent PHP versions. Always refer to the latest PHP documentation and release notes for the most up-to-date information on enums and related features.