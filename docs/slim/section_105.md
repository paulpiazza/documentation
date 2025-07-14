---
title: Lesson P.1 - Let's Do Some Data Modeling & Create Entities
description: Slim notes.
order: 105
---

See [P1 - end](https://github.com/paulpiazza/gio-formation-expennies/commit/8364fefe008785e8e249f99f0a1a9df39581f634)
See [DrawSql](https://drawsql.app/diagrams)

See [[#[Lesson 3.15 - Intro to Doctrine - DataBase Abstraction Layer - DBAL](https //youtu.be/bfTIVQvS5JI)]]

**Step 1**
Prepare your work. Create Data Modeling and Entity Diagrams.

![[Pasted image 20231008151603.png]]

Step 2
Create entities in the folder App/Entity

Step 3
Create Relationships between entities.

Step 4
Create constructors.

Step 5
Add setters and getters. Check.

Step 6
Create a migration and migrate.

```shell
# crate a migration
php expennies diff

# migrate
php expennies migrations:migrate
```

Check migration and database.

#### Collection

Collection types in PHP refer to data structures that allow you to store and manipulate groups of related data. According to my research, there are different types of collection classes available in PHP, such as Laravel's Collection class ([1]), Ds\Collection ([2]), and other collection types like array lists, linked lists, maps, and sets ([3], [4]).

In Doctrine, There are several collection types available in Doctrine, including ArrayCollection, PersistentCollection, and ArrayCollectionBridge. Each type has its own set of features and use cases, so it's important to choose the right one for your specific needs.

To summarize, collection types in PHP are useful for storing and manipulating related data. There are different collection classes available in PHP, including Laravel's Collection class, Ds\Collection, and other collection types like array lists, linked lists, maps, and sets.