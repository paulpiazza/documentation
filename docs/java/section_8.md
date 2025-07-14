---
title: Les packages
description: Java
order: 8
---

## Introduction aux packages

Un package en Java est un regroupement logique de classes et d'interfaces. Il permet d'organiser le code et d'éviter les conflits de noms entre les classes. Les packages facilitent également la gestion des droits d'accès et la modularité du code.

```java
package com.example.util;

public class MyClass {
    public void displayMessage() {
        System.out.println("Bonjour depuis le package com.example.util !");
    }
}
```

## Packages et sous-packages

Un sous-package est simplement un package à l'intérieur d'un autre package. Les sous-packages permettent une organisation hiérarchique du code.

```java
package com.example.util.math;

public class Calculator {
    public int add(int a, int b) {
        return a + b;
    }
}
```

Dans cet exemple, `math` est un sous-package de `com.example.util`.

## Les imports

Pour utiliser une classe d'un autre package, il est nécessaire de l'importer à l'aide du mot-clé `import`. Cela permet d'accéder aux classes sans avoir à spécifier leur chemin complet.

```java
import com.example.util.MyClass;

public class Main {
    public static void main(String[] args) {
        MyClass myClass = new MyClass();
        myClass.displayMessage();
    }
}
```

Il est également possible d'importer toutes les classes d'un package en utilisant un astérisque (`*`), mais cela est déconseillé pour éviter les ambiguïtés.

```java
import com.example.util.*;

public class Main {
    // Toutes les classes du package com.example.util sont accessibles
}
```

## Mot clé Protected

Le mot-clé `protected` en Java est utilisé pour restreindre l'accès aux membres d'une classe. Un membre `protected` est accessible dans le même package et dans les sous-classes, même si elles se trouvent dans un autre package.

```java
package com.example.base;

public class BaseClass {
    protected void display() {
        System.out.println("Méthode protégée !");
    }
}
```

```java
package com.example.derived;

import com.example.base.BaseClass;

public class DerivedClass extends BaseClass {
    public void show() {
        display(); // Accessible grâce à l'héritage
    }
}
```

Dans cet exemple, la méthode `display` est accessible dans `DerivedClass` car elle est déclarée comme `protected` et `DerivedClass` hérite de `BaseClass`.

