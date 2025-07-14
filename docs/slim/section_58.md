---
title: Lesson 2.22 - Iterable Data Type & Iterators
description: Slim notes.
order: 58
---

Use `foreach` is not the best way for objects.

see [iterators](https://www.php.net/manual/en/class.iterator.php)
see [object iterations](https://www.php.net/manual/en/language.oop5.iterations.php)
see [spl](https://www.php.net/manual/en/language.oop5.iterations.php)
see [iterator Aggregate](https://www.php.net/manual/en/class.iteratoraggregate.php)

[01:33](https://www.youtube.com/watch?v=QFPP9B-Q3zM&t=93s) - Traversable, Iterator & IteratorAggregate interfaces

In PHP, the `Traversable`, `Iterator`, and `IteratorAggregate` interfaces play crucial roles in working with iterative structures such as arrays, collections, and other data sources. These interfaces provide a standardized way to traverse and iterate over data, making it easier to work with different types of objects that hold multiple values.

1. **Traversable Interface**:
   The `Traversable` interface is not intended to be implemented directly by classes. Instead, it serves as a marker interface to indicate that a class can be traversed using the `foreach` loop. All objects that can be iterated over (e.g., arrays, objects implementing the `Iterator` or `IteratorAggregate` interface) are considered to be "traversable," even though they don't explicitly implement the `Traversable` interface.

2. **Iterator Interface**:
   The `Iterator` interface defines methods that must be implemented by classes that wish to provide their own custom iteration logic. These methods include `current()`, `key()`, `next()`, `rewind()`, and `valid()`, which correspond to the behavior of the `foreach` loop. By implementing the `Iterator` interface, you can define how the iteration progresses and what values are returned at each step.

3. **IteratorAggregate Interface**:
   The `IteratorAggregate` interface allows you to define an object that can be iterated over using the `foreach` loop by providing a custom iterator (usually an instance of a class implementing the `Iterator` interface). This is useful when you want to encapsulate the iteration logic in a separate class.

`MyIterator` implements the `Iterator` interface, providing custom logic for iteration. The `foreach` loop then utilizes the implemented methods to traverse and iterate over the data.

```php
class MyIterator implements Iterator {
    private $data = ['apple', 'banana', 'cherry'];
    private $position = 0;

    public function current() {
        return $this->data[$this->position];
    }

    public function key() {
        return $this->position;
    }

    public function next() {
        $this->position++;
    }

    public function rewind() {
        $this->position = 0;
    }

    public function valid() {
        return isset($this->data[$this->position]);
    }
}

$myIterator = new MyIterator();

foreach ($myIterator as $key => $value) {
    echo "$key: $value\n";
}
```

[02:11](https://www.youtube.com/watch?v=QFPP9B-Q3zM&t=131s) - Implement simple collection class using Iterator interface

`MyIterator` implements the `Iterator` interface, providing custom logic for iteration. The `foreach` loop then utilizes the implemented methods to traverse and iterate over the data.

```php

class InvoiceCollection implements \Iterator
{
    public function __construct(
        public array $invoices
    ) {
        echo __METHOD__ . " " . count($invoices) . " invoices ". PHP_EOL;
    }

    public function current()
    {
        echo __METHOD__.PHP_EOL;
        return current($this->invoices);
    }
    
    public function key()
    {
        echo __METHOD__.PHP_EOL;
        return key($this->invoices);
    }
    
    public function next()
    {
        echo __METHOD__.PHP_EOL;
        return next($this->invoices);
    }

    public function rewind()
    {
        echo __METHOD__.PHP_EOL;
        reset($this->invoices);
    }

    public function valid()
    {
        echo __METHOD__.PHP_EOL;
        return current($this->invoices) !== false;
    }
}
```

[07:50](https://www.youtube.com/watch?v=QFPP9B-Q3zM&t=470s) - SPL iterators & refactoring collection to use IteratorAggregate interface

The Standard PHP Library (SPL) provides a set of powerful iterator classes that implement the `Iterator` interface. These iterator classes allow you to traverse various data structures and objects efficiently. Additionally, we'll refactor the `SimpleCollection` class to use the `IteratorAggregate` interface.

```php
// Using SPL Iterators
$numbers = new ArrayIterator([1, 2, 3, 4, 5]);

// LimitIterator to iterate over a subset of the array
$limitedNumbers = new LimitIterator($numbers, 1, 3);

foreach ($limitedNumbers as $number) {
    echo "$number ";
}
// Output: 2 3 4

// Refactoring SimpleCollection to use IteratorAggregate
class SimpleCollection implements IteratorAggregate {
    private $data = [];

    public function addItem($item) {
        $this->data[] = $item;
    }

    public function getIterator() {
        return new ArrayIterator($this->data);
    }
}

$collection = new SimpleCollection();
$collection->addItem('Item 1');
$collection->addItem('Item 2');
$collection->addItem('Item 3');

foreach ($collection as $item) {
    echo "$item\n";
}
```

In this example, we first use the `ArrayIterator` class to wrap an array of numbers. We then use `LimitIterator` to iterate over a subset of the numbers.

Next, we refactor the `SimpleCollection` class to implement the `IteratorAggregate` interface. The `getIterator()` method returns an instance of `ArrayIterator` containing the collection data. This allows the collection object to be directly iterable using a `foreach` loop.

Using SPL iterators provides you with powerful tools to work with different types of data structures and objects, while the `IteratorAggregate` interface enables you to create custom iterable objects with ease.

[10:26](https://www.youtube.com/watch?v=QFPP9B-Q3zM&t=626s) - Iterable type & type-hinting

In PHP, the `iterable` type is a built-in pseudo-type introduced in PHP 7.1 that allows you to type-hint a variable or parameter as being iterable. An iterable is something that can be looped over, like an array or an object that implements the `Traversable` interface (e.g., classes that implement the `Iterator` or `IteratorAggregate` interfaces).

```php
function processIterable(iterable $data) {
    foreach ($data as $item) {
        echo "$item\n";
    }
}

$arrayData = [1, 2, 3];
$iteratorData = new ArrayIterator([4, 5, 6]);

processIterable($arrayData);     // Output: 1 2 3
processIterable($iteratorData);   // Output: 4 5 6
```
