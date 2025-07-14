---
title: Lesson 2.19 - Object Serialization
description: Slim notes.
order: 55
---

[00:00](https://www.youtube.com/watch?v=Jnm2m_Iw5CI&t=0s) - Serialization

Serialization is the process of converting complex data structures, such as objects and arrays, into a format that can be easily stored, transmitted, or later reconstructed. This process is particularly useful for tasks like data storage, data transmission between applications, or for saving the state of an object for later use.

In PHP, you can use the `serialize()` function to serialize data, and the `unserialize()` function to reverse the process and retrieve the original data structure. Serialized data is typically represented as a string that contains a compact and portable representation of the original data.

Here's a simple example of serialization and deserialization in PHP:

```php
<?php
$data = array(
    'name' => 'John',
    'age' => 30,
    'email' => 'john@example.com',
    'hasDriverLicence' => true
);

// Serialize the data
$serializedData = serialize($data);

/**
a:4:{s:4:"name";s:4:"John";s:3:"age";i:30;s:5:"email";s:16:"john@example.com";s:15:"hasDriverLicence";b:1;}
*/

// Save the serialized data to a file
file_put_contents('data.txt', $serializedData);

// Read the serialized data from the file
$readSerializedData = file_get_contents('data.txt');

// Deserialize the data
$deserializedData = unserialize($readSerializedData);

print_r($deserializedData);
```

In this example:

1. The `$data` array contains some sample data.
2. The `serialize()` function is used to serialize the array, creating a serialized string.
3. The `file_put_contents()` function is used to save the serialized data to a file.
4. The `file_get_contents()` function is used to read the serialized data from the file.
5. The `unserialize()` function is used to deserialize the serialized string back into an array.
6. The `print_r()` function is used to print the deserialized array to the screen.

Serialization is particularly useful when you need to store or transmit complex data structures in a compact format. However, keep in mind that not all data structures can be easily serialized, especially if they contain resources or references.

[01:12](https://www.youtube.com/watch?v=Jnm2m_Iw5CI&t=72s) - Serializing objects

Serializing objects involves converting an object into a format that can be easily stored, transmitted, or reconstructed later. In PHP, you can use the `serialize()` and `unserialize()` functions to achieve this. When serializing an object, the object's properties and their values are stored in the serialized data, but the methods and class definitions are not included.

Here's an example of how to serialize and unserialize objects in PHP:

```php
class Person {
    public $name;
    public $age;

	// not serialized
	private $id;

	// serialized with prefix *
	protected $value;

    public function __construct($name, $age) {
        $this->name = $name;
        $this->age = $age;
    }
}

$person = new Person('John', 30);

// Serialize the object
$serializedObject = serialize($person);

// Save the serialized object to a file
file_put_contents('person.txt', $serializedObject);

// Read the serialized object from the file
$readSerializedObject = file_get_contents('person.txt');

// Unserialize the object
$unserializedObject = unserialize($readSerializedObject);

echo $unserializedObject->name . ' is ' . $unserializedObject->age . ' years old.';
```

In this example:

1. The `Person` class defines a simple class with properties `name` and `age`.
2. An instance of the `Person` class is created and serialized using the `serialize()` function.
3. The serialized object is saved to a file using `file_put_contents()`.
4. The serialized object is read from the file using `file_get_contents()`.
5. The unserialized object is obtained using `unserialize()` and its properties are accessed.

Keep in mind that when unserializing objects, the class definition must be available. If the class definition is missing or has changed, unserialization may fail. This can be a limitation if you intend to unserialize objects in a different environment or after changes to the class structure.

[04:07](https://www.youtube.com/watch?v=Jnm2m_Iw5CI&t=247s) - Serializing boolean false & return false on failed unserialization

When serializing boolean `false` and handling unserialization failures, here's how you can approach it in PHP:

```php
$data = false;

// Serialize the data
$serializedData = serialize($data);
$serializedFalse = serialize(false);

// Save the serialized data to a file
file_put_contents('data.txt', $serializedData);

// Read the serialized data from the file
$readSerializedData = file_get_contents('data.txt');

// Unserialize the data
$unserializedData = unserialize($readSerializedData);

if ($unserializedData === false) {
    if($serializedData !== $serializedFalse) {
        echo "Unserialization failed.";
    }
} else {
    echo "Unserialization succeeded. Data: " . var_export($unserializedData, true);
}
```

In this example:

1. A boolean value `false` is serialized using the `serialize()` function.
2. The serialized data is saved to a file.
3. The serialized data is read from the file.
4. The `unserialize()` function is used to attempt unserialization.
5. If unserialization fails, the result will be `false`. You can check this using `$unserializedData === false`. If it's true, you can handle the failure case.

When unserialization fails, the result will be `false`. It's important to handle this possibility, as unserialization can fail for various reasons, such as if the data is corrupted or the class definition has changed.

You can use JSON to serialize. It will provides more data validation than legacy PHP lanaguage.

[05:11](https://www.youtube.com/watch?v=Jnm2m_Iw5CI&t=311s) - Magic methods intro & Serializable interface

The `Serializable` interface is used for implementing custom serialization and deserialization logic for objects. It requires the implementation of two methods: `serialize()` and `unserialize()`. 

By implementing these methods, you can control how your objects are serialized and unserialized.

`__sleep()` and `Serializable`'s `__serialize()` are both related to object serialization in PHP, but they serve different purposes and are used in different contexts.

1. **`__sleep()`**:
   - `__sleep()` is a magic method that you can define in a class to control which object properties should be serialized when the object is serialized using `serialize()`.
   - It should return an array of property names that you want to include in the serialized data. Only the properties listed in this array will be serialized.
   - If you implement `__sleep()`, PHP will call it before serializing the object. This gives you control over which parts of the object's state are persisted.
   - It's typically used when you want to exclude sensitive or large properties from being serialized.

```php
class MyClass {
    public $property1;
    public $property2;

    public function __sleep() {
        return ['property1'];
    }
}
```

2. **`__serialize()`**:
   - `__serialize()` is a method provided by the `Serializable` interface, which you can implement in your class to define how the object should be serialized.
   - This method is used instead of the default serialization mechanism provided by `serialize()`.
   - If your class implements `Serializable`, the `__serialize()` method will be called for serialization instead of the standard serialization process.
   - You have full control over the format and content of the serialized data.

```php
class MyClass implements Serializable {
    public $property1;
    public $property2;

    public function __serialize(): array {
        return [$this->property1];
    }

    public function serialize() {
        // Not needed if __serialize() is defined
    }

    public function unserialize($serialized) {
        // Implement unserialization logic
    }
}
```

If you have both `__serialize()` method will take precedence and `__sleep()` method will be ignore.

`__sleep()` is used to specify which properties should be included in the default serialization process, while `__serialize()` provides a more fine-grained control over how the object should be serialized, allowing you to completely customize the serialization process.

 `unserialize()` is a global PHP function used to deserialize objects, and it's different from the `__wakeup()` method. `__wakeup()` is a method defined within a class and is called after the object is unserialized to perform any necessary post-unserialization actions.

[06:21](https://www.youtube.com/watch?v=Jnm2m_Iw5CI&t=381s) - __sleep & \ __wakeup magic methods

The `__sleep()` and `__wakeup()` magic methods in PHP are used to control the serialization and deserialization process of objects when implementing the `Serializable` interface. These methods allow you to customize what data should be serialized and how it should be restored when unserialized.

1. `__sleep()`: This method is called before an object is serialized. It should return an array of property names that you want to include in the serialized data. If this method is not defined, all properties of the object will be serialized.

```php
class MyClass implements Serializable {
    private $data;
    private $status;

    public function __construct($data, $status) {
        $this->data = $data;
        $this->status = $status;
    }

    public function serialize() {
        return serialize([$this->data, $this->status]);
    }

    public function unserialize($serialized) {
        list($this->data, $this->status) = unserialize($serialized);
    }

    public function __sleep() {
        return ['data'];
    }
}

$obj = new MyClass('Some data', 'Active');
$serialized = serialize($obj);

$unserialized = unserialize($serialized);

print_r($unserialized); // Only 'data' property will be restored
```

In this example, the `__sleep()` method specifies that only the 'data' property should be serialized.

2. `__wakeup()`: This method is called after an object is unserialized. It allows you to perform any necessary cleanup or restoration of the object's state.

```php
class MyClass implements Serializable {
    private $data;

    public function __construct($data) {
        $this->data = $data;
    }

    public function serialize() {
        return serialize($this->data);
    }

    public function unserialize($serialized) {
        $this->data = unserialize($serialized);
    }

    public function __wakeup() {
        echo "Object is waking up!";
    }
}

$serialized = serialize(new MyClass('Some data'));
$unserialized = unserialize($serialized); // Outputs: Object is waking up!
```

In this example, the `__wakeup()` method outputs a message when the object is being unserialized.

Both `__sleep()` and `__wakeup()` methods give you more control over the serialization and deserialization process of objects, allowing you to customize how properties are saved and restored.

[07:44](https://www.youtube.com/watch?v=Jnm2m_Iw5CI&t=464s) - __serialize & \ __unserialize magic methods


The `Serializable` interface is used for implementing custom serialization and deserialization logic for objects. It requires the implementation of two methods: `serialize()` and `unserialize()`. By implementing these methods, you can control how your objects are serialized and unserialized using the `serialize()` and `unserialize()` functions.

Here's a basic example of how to implement the `Serializable` interface:

```php
class MyClass implements Serializable {
    private $data;

    public function __construct($data) {
        $this->data = $data;
    }

    public function serialize() {
        return serialize($this->data);
    }

    public function unserialize($serialized) {
        $this->data = unserialize($serialized);
    }
}

$obj = new MyClass(array('name' => 'John', 'age' => 30));

$serialized = serialize($obj);

$unserialized = unserialize($serialized);

print_r($unserialized);
```

In this example, the `MyClass` class implements the `Serializable` interface and defines the `serialize()` and `unserialize()` methods to handle serialization and deserialization of the `$data` property. When the object is unserialized, the data is restored and can be accessed in the same way as before serialization.
