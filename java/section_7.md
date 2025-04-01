---
title: POO
description: Java
order: 7
---

## Introduction à la POO
La programmation orientée objet (POO) est un paradigme de programmation basé sur le concept d'objets, qui contiennent des données sous forme de champs (attributs) et de code sous forme de méthodes.

```java
// Exemple de classe et objet
class Person {
    String name;
    int age;
    
    void sayHello() {
        System.out.println("Hello, my name is " + name);
    }
}

Person person = new Person();
person.name = "Alice";
person.age = 30;
person.sayHello();
```

## Les classes et objets
Une classe est un modèle ou un plan pour créer des objets. Un objet est une instance d'une classe.

```java
class Car {
    String brand;
    int year;
}

Car car = new Car();
car.brand = "Toyota";
car.year = 2020;
```

## Les attributs et constructeurs
Les attributs sont des variables définies dans une classe pour stocker l'état d'un objet. Les constructeurs sont des méthodes spéciales utilisées pour initialiser les objets.

```java
class Book {
    String title;
    String author;

    // Constructeur
    Book(String title, String author) {
        this.title = title;
        this.author = author;
    }
}

Book book = new Book("1984", "George Orwell");
```

## Les méthodes
Les méthodes définissent le comportement des objets. Elles peuvent manipuler les attributs et effectuer des actions spécifiques.

```java
class Calculator {
    int add(int a, int b) {
        return a + b;
    }

    @Override
    public String toString() {
        return "Calculator instance";
    }
}

Calculator calc = new Calculator();
int result = calc.add(5, 3); // Résultat: 8
System.out.println(calc.toString());
```

## Les accesseurs
Les accesseurs (getters et setters) permettent de lire ou de modifier les attributs d'un objet tout en respectant l'encapsulation.

```java
class Student {
    private String name;

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }
}

Student student = new Student();
student.setName("John");
System.out.println(student.getName());
```

## L'héritage
L'héritage permet à une classe (classe fille) de réutiliser les propriétés et méthodes d'une autre classe (classe parent).

```java
class Animal {
    void eat() {
        System.out.println("This animal eats food.");
    }
}

class Dog extends Animal {
    @Override
    void eat() {
        System.out.println("The dog eats bones.");
    }

    void bark() {
        System.out.println("The dog barks.");
    }
}

Dog dog = new Dog();
dog.eat();
dog.bark();
```

## Les méthode de comparaison d'objets et d'affichage
Les méthodes comme `equals()` et `toString()` permettent de comparer des objets ou de fournir une représentation textuelle de ceux-ci.

```java
class Point {
    int x, y;

    Point(int x, int y) {
        this.x = x;
        this.y = y;
    }

    @Override
    public boolean equals(Object obj) {
        if (this == obj) return true;
        if (obj == null || getClass() != obj.getClass()) return false;
        Point point = (Point) obj;
        return x == point.x && y == point.y;
    }

    @Override
    public String toString() {
        return "Point(" + x + ", " + y + ")";
    }
}

Point p1 = new Point(1, 2);
Point p2 = new Point(1, 2);
System.out.println(p1.equals(p2)); // true
System.out.println(p1); // Point(1, 2)
```

## Les records
Les records sont des classes immuables introduites dans Java 14 pour représenter des données de manière concise.

```java
record Person(String name, int age) {}

Person person = new Person("Alice", 30);
System.out.println(person.name()); // Alice
System.out.println(person.age()); // 30
```

## Les interfaces
Les interfaces définissent un contrat que les classes implémentantes doivent respecter. Elles contiennent des méthodes abstraites et des constantes.

```java
interface Animal {
    @FunctionalInterface
    void makeSound();
}

class Cat implements Animal {
    @Override
    public void makeSound() {
        System.out.println("Meow");
    }
}

Animal cat = new Cat();
cat.makeSound();
```

## Les classes abstraites
Les classes abstraites sont des classes qui ne peuvent pas être instanciées directement et qui peuvent contenir des méthodes abstraites et concrètes.

```java
abstract class Shape {
    abstract double area();
}

class Circle extends Shape {
    double radius;

    Circle(double radius) {
        this.radius = radius;
    }

    @Override
    double area() {
        return Math.PI * radius * radius;
    }
}

Shape circle = new Circle(5);
System.out.println(circle.area());
```

## Les classes internes
Les classes internes sont définies à l'intérieur d'une autre classe et ont accès aux membres de la classe englobante.

```java
class OuterClass {
    private String message = "Hello from OuterClass";

    class InnerClass {
        void displayMessage() {
            System.out.println(message);
        }
    }
}

OuterClass outer = new OuterClass();
OuterClass.InnerClass inner = outer.new InnerClass();
inner.displayMessage();
```

## Les énumérations
Les énumérations (enums) sont des types spéciaux qui définissent un ensemble de constantes prédéfinies.

```java
enum Day {
    MONDAY, TUESDAY, WEDNESDAY, THURSDAY, FRIDAY, SATURDAY, SUNDAY
}

Day today = Day.MONDAY;
System.out.println(today);
