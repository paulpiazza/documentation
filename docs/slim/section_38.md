---
title: Lesson 2.2 - Classes & Objects
description: Slim notes.
order: 38
---

There are 4 compounds types:
* array
* object
* callable
* iterable

The curse will now cover objects.

[00:56](https://www.youtube.com/watch?v=6FW72q5fIx8&t=56s) - Creating class & object

In PHP, you can define classes to model real-world entities, and then create objects (instances) based on those classes. 

**Define a Class**:
To define a class, use the `class` keyword followed by the class name. Inside the class, you can define properties (attributes) and methods (functions) that describe the behavior of the class.

```php
class Car {
    // Properties
    public $make;
    public $model;
    
    // Methods
    public function startEngine() {
        echo "Engine started for $this->make $this->model.";
    }
}
```

**Create Objects**:
To create an object (instance) of a class, use the `new` keyword followed by the class name and parentheses.

```php
// Create objects
$car1 = new Car();
$car2 = new Car();

// Set properties
$car1->make = "Toyota";
$car1->model = "Camry";

$car2->make = "Ford";
$car2->model = "Mustang";

// Call methods
$car1->startEngine(); // Output: Engine started for Toyota Camry.
$car2->startEngine(); // Output: Engine started for Ford Mustang.
```

In this example, we defined a `Car` class with properties (`make` and `model`) and a method (`startEngine`). We then created two objects (`$car1` and `$car2`) based on the `Car` class and set their properties before calling the `startEngine` method.

[02:58](https://www.youtube.com/watch?v=6FW72q5fIx8&t=178s) - Class properties

Class properties are variables that belong to a class and represent the attributes or characteristics of objects created from that class. 

They store data that defines the state of objects and can be accessed and manipulated through object instances.

Class properties play a crucial role in object-oriented programming (OOP) by encapsulating data and providing a way to manage the state of objects.

**Defining Class Properties**:
Class properties are declared within the class scope. They can have different access modifiers (`public`, `protected`, or `private`) to control their visibility and accessibility.

```php
class Person {
    public $name; // Public property
    protected $age; // Protected property
    private $email; // Private property
    
    // ...
}
```

**Accessing Class Properties**:
You can access class properties using object instances. The `->` operator is used to access and modify the properties.

```php
$person = new Person();
$person->name = "John";
$person->age = 30; // Not accessible due to protected visibility
$person->email = "john@example.com"; // Not accessible due to private visibility
```

**Using Constructors to Initialize Properties**:
Constructors are special methods that are automatically called when an object is created. They can be used to initialize class properties during object instantiation.

```php
class Person {
    public $name;
    protected $age;
    private $email;
    
    public function __construct($name, $age, $email) {
        $this->name = $name;
        $this->age = $age;
        $this->email = $email;
    }
    
    // ...
}

$person = new Person("Alice", 25, "alice@example.com");
```

**Getters and Setters**:
To control access to class properties and add validation or logic, you can use getter and setter methods.

```php
class Person {
    private $name;
    
    public function getName() {
        return $this->name;
    }
    
    public function setName($name) {
        $this->name = $name;
    }
}

$person = new Person();
$person->setName("Bob");
echo $person->getName(); // Output: Bob
```


In PHP, properties can have different access modifiers that determine their visibility and accessibility. There are three main types of property visibility: public, protected, and private.

1. **Public Properties**:
   - Public properties are accessible from anywhere, both within the class and from outside the class.
   - They can be accessed directly using object instances.
   - Public properties are often used to represent attributes that should be widely accessible.

Example:
```php
class Circle {
    public $radius;
    
    public function __construct($radius) {
        $this->radius = $radius;
    }
}

$circle = new Circle(5);
echo $circle->radius; // Output: 5
```

2. **Protected Properties**:
   - Protected properties are only accessible within the class and its subclasses (derived classes).
   - They cannot be accessed directly using object instances from outside the class hierarchy.
   - Protected properties are often used when you want to provide controlled access to subclasses.

Example:
```php
class Vehicle {
    protected $color;
    
    public function __construct($color) {
        $this->color = $color;
    }
}

class Car extends Vehicle {
    public function getColor() {
        return $this->color;
    }
}

$car = new Car("blue");
echo $car->getColor(); // Output: blue
```

3. **Private Properties**:
   - Private properties are only accessible within the class itself.
   - They cannot be accessed directly using object instances from outside the class.
   - Private properties are used when you want to encapsulate data and prevent external access.

Example:
```php
class BankAccount {
    private $balance;
    
    public function __construct($initialBalance) {
        $this->balance = $initialBalance;
    }
    
    public function getBalance() {
        return $this->balance;
    }
}

$account = new BankAccount(1000);
echo $account->getBalance(); // Output: 1000
```

[04:43](https://www.youtube.com/watch?v=6FW72q5fIx8&t=283s) - Typed properties

In PHP 8.2, you can type properties. You can also declare that it can be null.

```php
class Person {
    public string $name; 
    protected integer $age;
    
	// can be null => just add ? before the type
    private ?float $amount; 
}
```

The property should not be accessed before the initialization. it has uninitialized state.

```php
$paul = new Person();
echo $paul->$name; // error because property $name has not been initialized.

var_dump($paul);
/*
object(Person)#1 (0) {
  ["name"]=>uninitialized(string)
  ["age":protected]=>uninitialized(int)
  ["amount":"Person":private]=>uninitialized(?float)
}
*/
```

You can put default values. Attention, you can not have complex expression here. Only Constant expression.

```php
class Person {
    public string $name = 'Smith'; 
    protected integer $age = function() { return 10;} ; // does not work!
    private ?float $amount = null; // possible thanks to ?. However, it will output an error. 
}
```



[07:50](https://www.youtube.com/watch?v=6FW72q5fIx8&t=470s) - Class constructor, $this, & constructor arguments

A class constructor is a magic method in a class that is automatically called when an object is created from that class. It is used to initialize the object's properties and perform any necessary setup. In PHP, the constructor method is named `__construct()`.
c

[09:54](https://www.youtube.com/watch?v=6FW72q5fIx8&t=594s) - Methods

Methods in PHP are functions that are defined within a class and encapsulate the behavior or actions associated with objects of that class. 

They allow you to define the behavior of objects and perform actions that are specific to the class's purpose.

Methods provide a way to organize and encapsulate code, making it easier to manage and maintain.

```php
class Calculator {
    // Method to add two numbers
    public function add($a, $b) {
        return $a + $b;
    }
    
    // Method to subtract two numbers
    public function subtract($a, $b) {
        return $a - $b;
    }
}

// Create an object of the Calculator class
$calculator = new Calculator();

// Call the methods
$sum = $calculator->add(5, 3); // Output: 8
$difference = $calculator->subtract(10, 4); // Output: 6

echo "Sum: $sum, Difference: $difference";
```

In this example, the `Calculator` class defines two methods: `add()` and `subtract()`. These methods take arguments and perform mathematical operations on those arguments. When you create an object of the class and call its methods using the object instance (`$calculator->add(...)`), the methods are executed with the provided arguments.

Key points about methods:

1. **Method Visibility**:
   Methods can have different access modifiers (`public`, `protected`, or `private`) that determine their visibility and accessibility.

2. **Method Parameters**:
   Methods can accept parameters (arguments) that are passed when the method is called.

3. **Method Return Values**:
   Methods can return values using the `return` statement. If no `return` statement is used, the method returns `null`.

4. **$this**:
   Inside a method, you can use the `$this` keyword to access properties and other methods of the current object.

5. **Constructor and Destructor**:
   Special methods named `__construct()` and `__destruct()` are used for object initialization and cleanup, respectively.

[11:34](https://www.youtube.com/watch?v=6FW72q5fIx8&t=694s) - Method chaining

Method chaining is a technique in object-oriented programming where multiple methods are called on the same object in a sequential chain. Instead of writing separate lines of code to call each method, you can directly chain the method calls together, making the code more concise and readable. Method chaining is particularly useful when working with objects that provide fluent interfaces.

To enable method chaining, each method in the chain typically returns the object itself (`$this`) after performing its operation. This allows you to immediately call another method on the same object.

```php
class StringBuilder {
    private $string = '';

    public function append($text) {
        $this->string .= $text;
        return $this; // Return $this to enable chaining
    }

    public function uppercase() {
        $this->string = strtoupper($this->string);
        return $this; // Return $this to enable chaining
    }

    public function reverse() {
        $this->string = strrev($this->string);
        return $this; // Return $this to enable chaining
    }

    public function getString() {
        return $this->string;
    }
}

$text = new StringBuilder();
$result = $text->append('hello')
               ->uppercase()
               ->append('world')
               ->reverse()
               ->getString();

echo $result; // Output: DLROW OLLEH

// other way
$result = (new StringBuilder())
				->append('hello')
                ->uppercase()
                ->append('world')
                ->reverse()
                ->getString();


```

Key points about method chaining:

- Each method returns `$this` at the end to allow chaining.
- Chained methods are called in a sequence from left to right.
- Method chaining can improve code readability and reduce the number of temporary variables.
- It is commonly used in fluent interfaces to create a more expressive and intuitive API.

[13:44](https://www.youtube.com/watch?v=6FW72q5fIx8&t=824s) - Creating objects using variables

In PHP, you can create objects using variables by dynamically specifying the class name as a string stored in a variable. This can be useful when you need to instantiate different classes based on runtime conditions or user inputs. You can use the `new` keyword along with the variable containing the class name to create objects.

```php
class Circle {
    private $radius;

    public function __construct($radius) {
        $this->radius = $radius;
    }

    public function getArea() {
        return pi() * pow($this->radius, 2);
    }
}

// Determine which class to instantiate
$shapeType = "Circle"; // or "Rectangle"

// Create an object using a variable
$shape = new $shapeType(5);

// Call the getArea method
echo "Area: " . $shape->getArea(); // Output: Area: 78.539816339745
```

In this example, the class name is determined by the value of the `$shapeType` variable. The appropriate class (`Circle` or `Rectangle`) is instantiated based on the value of the variable, and the object's methods are then called accordingly.

It's important to note that using variables to determine the class name should be done carefully, as it can introduce potential security risks if the variable's value is not properly sanitized. Make sure to validate and sanitize any user inputs or dynamic values used to create objects.

[14:05](https://www.youtube.com/watch?v=6FW72q5fIx8&t=845s) - Creating multiple objects of the same class

```php
// Create objects
$car1 = new Car();
$car2 = new Car();

// Set properties
$car1->make = "Toyota";
$car1->model = "Camry";

$car2->make = "Ford";
$car2->model = "Mustang";

// Call methods
$car1->startEngine(); // Output: Engine started for Toyota Camry.
$car2->startEngine(); // Output: Engine started for Ford Mustang.
```


[14:40](https://www.youtube.com/watch?v=6FW72q5fIx8&t=880s) - Class destructor

In PHP, a class destructor is a magic method that is automatically called when an object is no longer referenced or explicitly destroyed. 

The destructor method is named `__destruct()` and is used to perform cleanup tasks, release resources, or perform any necessary actions before an object is removed from memory.

Here's how you define and use a class destructor in PHP:

```php
class MyClass {
    public function __construct() {
        echo "Object created.<br>";
    }

    public function __destruct() {
        echo "Object destroyed.<br>";
    }
}

// Create an object
$obj = new MyClass();

// The object will be automatically destroyed when it's no longer referenced
unset($obj); // Output: Object created. Object destroyed.
```

In this example, the `MyClass` class has a constructor and a destructor. When an object of the class is created using `$obj = new MyClass();`, the constructor is called, and "Object created." is echoed. When the object is no longer referenced and is explicitly destroyed using `unset($obj);`, the destructor is automatically called, and "Object destroyed." is echoed.

Key points about class destructors:

- Destructors are not guaranteed to be executed immediately after an object is no longer referenced. They are called by PHP's garbage collector when the object's reference count reaches zero.
- You cannot explicitly call a destructor method like you do with constructors.
- Destructors are typically used for cleanup tasks such as closing open files, releasing database connections, or releasing other resources held by the object.

It's important to note that in modern PHP versions, explicit resource management is less common due to PHP's garbage collection mechanism and automatic resource cleanup. However, if you're dealing with resources that need explicit cleanup, using destructors can be beneficial.

[18:05](https://www.youtube.com/watch?v=6FW72q5fIx8&t=1085s) - stdClass, json_decode & object casting

In PHP, `stdClass` is a special predefined class that is used to create generic objects. It is often used when you need an object to hold arbitrary data without the need to define a class explicitly.

`stdClass` objects can have properties dynamically added to them, making them versatile for various purposes.

Here's an example of using `stdClass` to create and work with generic objects:

```php
// Creating a stdClass object
$person = new stdClass();

// Adding properties to the object
$person->name = "John Doe";
$person->age = 30;

// Displaying object properties
echo "Name: " . $person->name . "<br>";
echo "Age: " . $person->age . "<br>";

// Converting stdClass to an associative array
$personArray = (array) $person;

// Displaying the array
print_r($personArray);
```

```
Name: John Doe
Age: 30
Array ( [name] => John Doe [age] => 30 )
```

In this example, an instance of `stdClass` named `$person` is created. Properties are then added dynamically to the object using the arrow (`->`) notation. After that, the object's properties are accessed and displayed. Finally, the object is cast to an associative array using `(array)` casting.

Object casting, as shown above, allows you to convert an object to an array. However, it's important to note that casting to an array only includes public properties of the object in the resulting array.

Keep in mind that while `stdClass` objects provide flexibility for creating ad-hoc objects, they lack the structure and methods of custom classes. In many cases, defining custom classes with specific properties and methods is preferred for better organization and encapsulation of data and behavior.

When you use the `json_decode` function in PHP to decode a JSON string, it returns an object of type `stdClass` by default. This means that if the JSON data represents an object, the resulting PHP object will be an instance of `stdClass`.

```php
$jsonData = '{"name": "John", "age": 30, "city": "New York"}';

// Decode JSON string
$object = json_decode($jsonData);

// Access object properties
echo "Name: " . $object->name . "<br>";
echo "Age: " . $object->age . "<br>";
echo "City: " . $object->city . "<br>";
```

```
Name: John
Age: 30
City: New York
```

In this example, the JSON string is decoded using `json_decode`, and the resulting object is of type `stdClass`. You can access the object's properties using the arrow (`->`) notation.

If you want to decode the JSON data into an associative array instead of a `stdClass` object, you can pass the second argument `true` to the `json_decode` function:

```php
$jsonData = '{"name": "John", "age": 30, "city": "New York"}';

// Decode JSON string into an associative array
$array = json_decode($jsonData, true);

// Access array elements
echo "Name: " . $array['name'] . "<br>";
echo "Age: " . $array['age'] . "<br>";
echo "City: " . $array['city'] . "<br>";
```

By passing `true`, the decoded JSON data is returned as an associative array instead of an object.

You can cast an array to an object in PHP using the `(object)` casting syntax. This will create an instance of the `stdClass` object and populate its properties with the array's keys and values. 

```php
// Create an associative array
$array = [
    "name" => "John",
    "age" => 30,
    "city" => "New York"
];

// Cast the array to an object
$obj = (object) $array;

// Access object properties
echo "Name: " . $obj->name . "<br>";
```

You can cast an integer (int) to an object using the `(object)` casting syntax in PHP. However, it's important to note that the resulting object will have limited properties, as integers are not associative arrays like arrays. The object will have only one property named "scalar" that holds the integer value;

```php
$integerValue = 42;

// Cast the integer to an object
$obj = (object) $integerValue;

// Access the object property
echo "Integer value: " . $obj->scalar . "<br>";
```
