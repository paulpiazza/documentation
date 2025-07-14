---
title: Lesson 2.12 - Magic Methods
description: Slim notes.
order: 48
---

See [Resources](https://www.php.net/manual/en/language.oop5.magic.php)

Magic methods in PHP are special methods that start with the double underscore (`__`) prefix. These methods are automatically called by the PHP interpreter in response to certain events or actions in your code. They provide a way to define custom behavior for built-in PHP functions or language constructs.

Magic methods are often used to implement functionality that's not directly supported by regular methods, such as overloading operators, handling property access, and managing object lifecycle events. Here are some commonly used magic methods:

1. **`__construct`:** The constructor method is called when a new object is created. It's used to initialize object properties or perform setup tasks.

2. **`__destruct`:** The destructor method is called when an object is no longer referenced or is explicitly destroyed using the `unset()` function. It's used for cleanup tasks.

3. **`__get` and `__set`:** These methods are called when getting or setting inaccessible properties. They allow you to control the behavior of property access. You should not use them because it breaks the encapsulation. You also need to put in place validation of variable.

4. **`__isset` and `__unset`:** These methods are called when using the `isset()` and `unset()` functions on inaccessible properties.

5. **`__call` and `__callStatic`:** This method is called when invoking methods that are not accessible or do not exist. Used in Laravel. Use them to defer the calls to another object. Or, to test if the method exists before to call it.

6. **`__toString`:** This method is called when an object is treated as a string, such as when using `echo`. It also implicitly implements an php interface integrated in the source.
   
```php
	var_dump($invoice instanceof Stringable);
	//if $invoice has __toString defined, it will display TRUE   
```

7. **`__invoke`:** This method is called when an object is used as a function. Implement single action class Super Used! See below.

8. **`__clone`:** This method is called when an object is cloned using the `clone` keyword. It's used to perform deep or customized copying of object properties.

9. **`__autoload` (deprecated in PHP 7.2):** This method was used to automatically load classes that are not yet defined. It's recommended to use an autoloader function instead.

10. **`__debugInfo`:** This method is called when using the `var_dump()` function on an object. It's used to customize the information displayed.

Here's a simple example that demonstrates the use of some magic methods:

```php
class MagicExample {
    private $data = [];

    public function __construct() {
        echo "Constructor called.\n";
    }

    public function __get($name) {
        if (isset($this->data[$name])) {
            return $this->data[$name];
        }
        return null;
    }

    public function __set($name, $value) {
        $this->data[$name] = $value;
    }

    public function __toString() {
        return "MagicExample Object";
    }
}

$magicObj = new MagicExample();
$magicObj->name = "John";
echo $magicObj->name . "\n";  // Output: John

echo $magicObj;  // Output: MagicExample Object
```

In this example, the `__construct` method is the constructor, the `__get` and `__set` methods control property access, and the `__toString` method defines the string representation of the object.

The `__invoke` magic method this allows you to treat an object of the class as a callable, similar to a function. Here's an example of a single action class using `__invoke`:

```php
class GreetingAction {
    private $message;

    public function __construct($message) {
        $this->message = $message;
    }

    public function __invoke($name) {
        echo "{$this->message}, $name!\n";
    }
}

$greet = new GreetingAction("Hello");
$greet("Alice");  // Output: Hello, Alice!
$greet("Bob");    // Output: Hello, Bob!
```

In this example, the `GreetingAction` class defines a constructor to set the greeting message and uses the `__invoke` method to implement the action. When an object of this class is created and then invoked like a function, it performs the action defined in the `__invoke` method.
 
Using the `__invoke` method is a convenient way to create single-action classes that can be invoked as callable objects. This can be useful in scenarios where you want to encapsulate behavior within a class but still have the class itself behave like a function.

Magic methods provide a way to extend and customize the behavior of your classes in various situations, but it's important to use them judiciously and document their usage for clarity.