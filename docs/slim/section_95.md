---
title: Lesson 3.24 - Value Objects Practical Example
description: Slim notes.
order: 95
---

A Value Object (VO) is an object that represents a descriptive aspect of the domain with no conceptual identity. They are immutable, meaning their values cannot be changed once they are set. Value Objects are typically used to encapsulate and represent attributes or properties of entities within a domain. 

A VO is not an entity which has an Identity. The DTO has no identifier.

Let's say you're building a domain model for a system that deals with geometric shapes, and you want to represent a point in 2D space with X and Y coordinates. You can create a `Point` Value Object to encapsulate these coordinates.

```php
class Point
{
    private $x;
    private $y;

    public function __construct(float $x, float $y)
    {
        $this->x = $x;
        $this->y = $y;
    }

    public function getX(): float
    {
        return $this->x;
    }

    public function getY(): float
    {
        return $this->y;
    }

    // Value objects can have methods for operations or calculations
    public function distanceTo(Point $otherPoint): float
    {
        $dx = $this->x - $otherPoint->getX();
        $dy = $this->y - $otherPoint->getY();
        return sqrt($dx * $dx + $dy * $dy);
    }

    // Equality check for Value Objects
    public function equals(Point $otherPoint): bool
    {
        return $this->x === $otherPoint->getX() && $this->y === $otherPoint->getY();
    }
}

// Usage example:

$point1 = new Point(1.0, 2.0);
$point2 = new Point(3.0, 4.0);

// Accessing coordinates
echo "Point 1: X={$point1->getX()}, Y={$point1->getY()}\n";
echo "Point 2: X={$point2->getX()}, Y={$point2->getY()}\n";

// Calculating distance between points
$distance = $point1->distanceTo($point2);
echo "Distance between Point 1 and Point 2: $distance\n";

// Equality check
if ($point1->equals($point2)) {
    echo "Point 1 is equal to Point 2\n";
} else {
    echo "Point 1 is not equal to Point 2\n";
}
```

In this example:

- The `Point` class is a Value Object representing a point in 2D space.
- It has private properties for `x` and `y` coordinates, which are set in the constructor.
- Getter methods (`getX` and `getY`) allow access to the coordinates but do not allow modification.
- The `distanceTo` method calculates the Euclidean distance between two points.
- The `equals` method checks if two `Point` objects have the same coordinates.
- In the usage example, we create two `Point` objects, access their coordinates, calculate the distance between them, and check if they are equal.

Value Objects are useful for modeling domain concepts that have no identity but are important for representing the state of entities or concepts in your application's domain. They ensure immutability and provide strong encapsulation for the attributes they represent.