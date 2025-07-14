---
title: Lesson 3.7 - WeakMap
description: Slim notes.
order: 78
---

> [!Todo]

See [weakmap](https://www.php.net/manual/en/class.weakmap)

A WeakMap is a specialized class in PHP that provides a way to associate metadata or data with objects without preventing those objects from being garbage-collected when they are no longer used or referenced. 

Unlike regular associative arrays or maps, a WeakMap doesn't hold strong references to its keys, which allows the objects used as keys to be collected by the garbage collector when they are no longer reachable from the code.

Here's how a WeakMap works and some of its characteristics:

1. **Weak References**: When you use an object as a key in a WeakMap, the WeakMap holds a weak reference to that object. This means that the object can be garbage-collected if there are no other strong references to it.

2. **Garbage Collection Friendly**: When an object used as a key in a WeakMap is no longer reachable, it becomes eligible for garbage collection. This is particularly useful when you want to associate data with objects, but you don't want to prevent those objects from being cleaned up by the garbage collector.

3. **Use Cases**: WeakMaps are often used for caching or associating metadata with objects in a way that doesn't interfere with the object's lifecycle. For example, you could use a WeakMap to store additional information about objects in a way that doesn't prevent those objects from being released from memory when they are no longer needed.


```php
$weakMap = new WeakMap();

$object1 = new stdClass();
$object2 = new stdClass();

$weakMap[$object1] = "Metadata for Object 1";

// At this point, $object1 still exists in the WeakMap.
echo $weakMap[$object1]; // Output: Metadata for Object 1

unset($object1);

// After unsetting $object1, it is no longer strongly referenced.
// The object can now be garbage-collected, and the WeakMap entry will be automatically removed.
```

In the example above, even if we unset `$object1`, the associated data in the WeakMap will be automatically removed when the object is garbage-collected.

It's important to note that WeakMaps have certain limitations and behavior specific to their use of weak references, and they are generally used for specific scenarios where you want to associate data with objects without preventing the objects from being cleaned up by the garbage collector.

See [WeakMap](https://www.php.net/manual/en/class.weakmap.php)

WeakMap is a data structure in PHP that allows you to associate values (objects) with keys (also objects) in a way that does not prevent those keys from being garbage collected when they are no longer referenced anywhere else in your code. This can be particularly useful in situations where you want to attach additional data to objects without preventing them from being automatically cleaned up by PHP's garbage collector when they're no longer needed. We call that a weak reference.

Here's a basic explanation of WeakMap in PHP:

1. **Associative Data Storage**: WeakMap is used to create an association between objects (keys) and values. Each key-value pair consists of a key (an object) and a corresponding value (can be any type of data).

2. **Weak References**: Unlike a regular Map or array, the keys in a WeakMap are stored as weak references. This means that if there are no strong references to a key object elsewhere in your code, the key object can be automatically garbage collected. This is in contrast to traditional arrays or Maps, which keep strong references to their keys, preventing them from being collected even if they're no longer needed.

3. **Automatic Cleanup**: When a key in a WeakMap becomes unreachable and is collected by the garbage collector, the associated value is also automatically removed from the WeakMap. This can help prevent memory leaks in situations where objects are no longer needed.

Here's a simple example of how you might use a WeakMap in PHP:

```php
// Create a new WeakMap
$weakMap = new WeakMap();

// Create some objects
$key1 = new stdClass();
$key2 = new stdClass();

// Associate values with these objects in the WeakMap
$weakMap[$key1] = "Value 1";
$weakMap[$key2] = "Value 2";

// Check if the keys are still present in the WeakMap
var_dump(isset($weakMap[$key1])); // true
var_dump(isset($weakMap[$key2])); // true

// Now, let's unset all strong references to $key1
unset($key1);

// After a while, the garbage collector may collect $key1

// Check if $key1 is still present in the WeakMap
var_dump(isset($weakMap[$key1])); // false, as $key1 was collected

// Check if $key2 is still present in the WeakMap
var_dump(isset($weakMap[$key2])); // true
```

In this example, `$key1` gets garbage collected when there are no more strong references to it, and as a result, its association in the WeakMap is automatically removed. This is what makes WeakMap useful in managing associations with objects that have a limited lifecycle.

#### Strong Reference

`SplObjectStorage` is a useful data structure in PHP for associating objects with data. It allows you to attach data to objects and manage those associations efficiently. However, there are a few issues and gotchas to be aware of when using `SplObjectStorage`:

1. **Identity-Based**: `SplObjectStorage` is identity-based, which means it uses the identity of objects (their memory address) as keys. If you have two different objects that are structurally identical (i.e., they have the same properties and values), `SplObjectStorage` will treat them as distinct keys because they have different memory addresses. This can be counterintuitive if you expect structural equality rather than identity.

   Example:
   ```php
   $obj1 = new stdClass();
   $obj2 = new stdClass();

   $storage = new SplObjectStorage();

   $storage[$obj1] = "Value 1";
   $storage[$obj2] = "Value 2";

   // These are treated as different keys even though the objects have the same structure
   var_dump(isset($storage[$obj1])); // false
   ```

2. **Garbage Collection**: `SplObjectStorage` keeps a strong reference to the objects used as keys. This means that as long as objects are used as keys in an `SplObjectStorage`, they won't be garbage collected, even if there are no other references to them. This can lead to memory leaks if you're not careful.

   Example:
   ```php
   $obj = new stdClass();
   $storage = new SplObjectStorage();

   $storage[$obj] = "Value";

   // Even if you unset $obj, it won't be garbage collected because of the reference in $storage
   unset($obj);

   // $storage still holds a reference to the object
   var_dump(isset($storage[$obj])); // true
   ```

   To avoid this issue, you can manually remove objects from `SplObjectStorage` using the `detach()` method before unsetting or letting go of the object.

3. **Performance Overhead**: `SplObjectStorage` provides flexibility and convenience but may introduce some performance overhead compared to using simple arrays for object storage when you don't need the specific features it offers. If performance is a critical concern in your application, you should measure and benchmark the impact of using `SplObjectStorage` versus alternative data structures like arrays or plain objects.

Despite these issues, `SplObjectStorage` can be a valuable tool when you need to associate data with objects in a way that respects object identity and provides features like attaching metadata to objects or efficiently checking for object existence. Just be aware of its behaviors and potential pitfalls to use it effectively in your PHP applications.


`WeakMap` is a data structure that can be valuable in various programming scenarios where you want to associate data with objects without preventing those objects from being garbage collected when they are no longer needed. Here are some common use cases for `WeakMap`:

1. **Caching with Dynamic Data**: `WeakMap` can be used as a caching mechanism for dynamic data associated with objects. Since it uses weak references, it allows you to cache data without preventing the objects themselves from being garbage collected when they are no longer used.

2. **Metadata Attachment**: You can attach metadata or additional information to objects without affecting the object's lifecycle. For example, you might attach user-specific data to user objects, and when the user object is no longer needed, it can be garbage collected without needing to explicitly remove the associated metadata.

3. **Resource Management**: In resource management scenarios, such as file handles, network connections, or database connections, you can use `WeakMap` to associate these resources with objects. When the objects go out of scope or are no longer referenced, the associated resources can be automatically released.

4. **Event Handling**: When managing event listeners or callbacks associated with objects, `WeakMap` can be used to hold these references. When the object is no longer used or needed, the event listeners or callbacks can be automatically unregistered without manual intervention.

5. **Cache Expiration**: For caching strategies where cached items should automatically expire after a certain duration or when related objects are no longer in use, `WeakMap` can be employed to manage both the cached data and the objects' references.

6. **Distributed Systems**: In distributed systems or microservices, you can use `WeakMap` to associate data or metadata with remote service handles or client objects. When those objects are no longer in use, the associated data can be cleaned up.

7. **Custom Observers and Observables**: Implementing custom observer patterns where objects act as observers and subjects, `WeakMap` can help manage the relationships. When observers are no longer needed, they can be garbage collected, and their references in the `WeakMap` will be automatically removed.

8. **Dynamic Configuration**: In situations where you need to associate dynamic configuration settings with objects, `WeakMap` can be useful. When objects are discarded or no longer relevant, their associated configuration can be automatically cleaned up.

9. **Memory-Efficient Data Structures**: If you want to build custom memory-efficient data structures, you can use `WeakMap` to associate auxiliary data with objects while allowing objects to be collected when they are no longer needed.

Remember that `WeakMap` is particularly helpful when you want to maintain associations with objects that have a shorter lifecycle than the data or resources associated with them. It helps prevent memory leaks by allowing the objects to be garbage collected when they become unreachable, while still providing a way to manage related data or resources effectively.


### garbage collector

In PHP, the garbage collector is a fundamental component of the runtime environment responsible for automatically reclaiming memory that is no longer in use by the PHP script. It helps prevent memory leaks by identifying and freeing up memory occupied by objects and data structures that are no longer reachable or referenced by the program. Here's an overview of how the PHP garbage collector works:

1. **Reference Counting**: PHP primarily uses reference counting as its garbage collection mechanism. Each variable (zval) in PHP contains a reference count, which tracks how many references point to the same value or object. When an object's reference count drops to zero, it means there are no more references to that object, and it becomes a candidate for garbage collection.

2. **Cyclic References**: Reference counting alone may not handle circular references effectively. Circular references occur when objects reference each other in a way that creates an unbroken chain of references. PHP 7.3 and later versions use a cycle collector that can identify and clean up such circular references.

3. **Zend Memory Manager**: PHP's Zend Engine employs a memory manager that manages the allocation and deallocation of memory for variables and objects. When an object's reference count drops to zero, the memory manager marks it as eligible for destruction.

4. **Garbage Collection Cycle**: The garbage collector runs periodically or when certain conditions are met, such as when memory is running low. During a garbage collection cycle, it scans the list of objects and variables to find those with reference counts equal to zero. These objects are then destroyed, and their memory is returned to the pool of available memory.

5. **Manual Garbage Collection**: In PHP, you can also trigger garbage collection manually using the `gc_collect_cycles()` function. This function forces a cycle collection, helping to clean up cyclic references explicitly.

6. **Weak References**: PHP introduced support for weak references with the `WeakReference` class. Weak references allow you to hold references to objects without preventing them from being collected by the garbage collector when they are no longer in use.

7. **PHP Extensions**: Some PHP extensions, like the OPcache extension, can affect the behavior of the garbage collector. For instance, they may store objects or data in shared memory, bypassing the standard garbage collection process.

It's important to note that PHP's garbage collector is generally effective in managing memory automatically. However, developers should still be mindful of their code to prevent memory leaks. Common practices to avoid memory leaks include:

- Unsetting or nullifying variables and object references when they are no longer needed.
- Using weak references when appropriate to avoid creating strong reference cycles.
- Profiling and optimizing code to minimize memory usage.
- Monitoring server resources to detect potential memory issues.

By following these practices and understanding how PHP's garbage collector works, you can write more efficient and memory-safe PHP applications.

Here's an example of creating two objects in PHP and then unsetting one of them:

```php
class MyClass {
    public $property;

    public function __construct($value) {
        $this->property = $value;
    }
}

// Create two objects
$obj1 = new MyClass("Object 1");
$obj2 = new MyClass("Object 2");

// Display their properties
echo $obj1->property; // Output: "Object 1"
echo $obj2->property; // Output: "Object 2"

// Unset one of the objects
unset($obj2);

// Attempt to access the property of the unset object
// This will result in a Notice because $obj2 is no longer defined
echo $obj2->property; // Generates a Notice: "Undefined variable: obj2"
```

In this example:

1. We define a simple class `MyClass` with a public property called `$property`.

2. We create two instances of `MyClass` named `$obj1` and `$obj2` with different property values.

3. We display the property values of both objects to confirm that they were created successfully.

4. We then unset `$obj2` using `unset($obj2)`. This removes the reference to `$obj2`, making it eligible for garbage collection.

5. Finally, when we attempt to access the property of `$obj2` after unsetting it, it generates a Notice because `$obj2` is no longer defined.

Keep in mind that in a real-world application, you should always check if an object or variable is set before attempting to access it, especially after potentially unsetting it, to avoid Notices or errors in your code.

In the example I provided, when you unset `$obj2`, you remove the reference to the object `$obj2`, which effectively reduces its reference count by one. Since there are no more references to `$obj2` in your code, it becomes a candidate for garbage collection.

Here's what happens in terms of the garbage collector:

1. **Reference Count Drops**: When you call `unset($obj2)`, PHP reduces the reference count of the object that `$obj2` was pointing to. The reference count of `$obj2` drops to zero because there are no more references to it in your code.

2. **Garbage Collection Cycle**: PHP's garbage collector runs periodically or when specific conditions are met (e.g., when memory is running low). During a garbage collection cycle, it scans the list of objects and variables to identify objects with reference counts equal to zero, which indicates they are no longer reachable or referenced by the program.

3. **Destruction of Unreferenced Object**: In this case, `$obj2` is such an object with a reference count of zero. During the garbage collection cycle, PHP identifies that `$obj2` is no longer reachable, and it can safely destroy it.

4. **Memory Reclamation**: The memory previously occupied by the `$obj2` object is now freed and returned to the pool of available memory. This helps prevent memory leaks by cleaning up objects that are no longer in use.

It's important to note that PHP's garbage collector operates automatically in the background, and you typically don't need to intervene in most cases. PHP manages memory and garbage collection for you.

However, there are scenarios where manual intervention or careful coding practices are necessary to avoid memory leaks, especially when dealing with circular references, long-lived scripts, or resource-intensive applications. In such cases, you may use techniques like weak references, unset variables explicitly, or trigger garbage collection cycles manually using the `gc_collect_cycles()` function.

In summary, in your example, when you unset `$obj2`, it becomes eligible for garbage collection. The garbage collector eventually identifies it as unreferenced and safely frees up the associated memory. This process ensures efficient memory management in PHP applications.
