---
title: Lesson 3.17 - Doctrine ORM Query Builder & DQL
description: Slim notes.
order: 88
---

[Query Builder](https://www.doctrine-project.org/projects/doctrine-orm/en/stable/reference/query-builder.html#the-querybuilder)
[DQL](https://www.doctrine-project.org/projects/doctrine-orm/en/stable/reference/dql-doctrine-query-language.html#doctrine-query-language)
[Events](https://www.doctrine-project.org/projects/doctrine-orm/en/stable/reference/events.html#events)
[Native SQL](https://www.doctrine-project.org/projects/doctrine-orm/en/stable/reference/native-sql.html#native-sql)

DQL stands for "Doctrine Query Language." It is a query language used in the Doctrine Object-Relational Mapping (ORM) framework for PHP. Doctrine is a popular ORM tool that allows developers to interact with databases using object-oriented syntax rather than writing raw SQL queries.

DQL is similar in concept to SQL (Structured Query Language), but instead of working with database tables directly, it operates on PHP objects that are mapped to database tables through the ORM. DQL allows developers to write queries that retrieve and manipulate data as objects, making database interactions more natural and object-oriented.

Here's a simple example of DQL:

```php
$query = $entityManager->createQuery('SELECT u FROM App\Entity\User u WHERE u.age > :age');
$query->setParameter('age', 18);
$users = $query->getResult();
```

In this example, we're using DQL to retrieve all user objects from the database where the age is greater than 18. The `createQuery` method creates a DQL query, and `setParameter` is used to bind a parameter to the query. The `getResult` method then executes the query and returns the result as an array of User objects.

DQL is a powerful tool for working with databases in a more object-oriented way, and it's commonly used in PHP applications built with the Doctrine ORM.

Here's a more detailed example of using DQL with Doctrine, including the `FROM`, `SELECT`, `WHERE`, and other commonly used methods:

```php
// Create a Doctrine EntityManager instance
$entityManager = EntityManager::create($dbParams, $config);

// Create a DQL query builder
$queryBuilder = $entityManager->createQueryBuilder();

// Define the DQL query
$queryBuilder
    ->select('p')                 // Select the "p" alias (represents an entity)
    ->from(Product::class, 'p')        // Specify the entity name and alias
    ->where('p.price > :price')   // Add a WHERE clause
    ->setParameter('price', 100)  // Bind a parameter value
    ->orderBy('p.name', 'ASC');   // Order the results by product name in ascending order

// Get the DQL query as a string (optional)
$dql = $queryBuilder->getDQL();

// Create a prepared query from the DQL query builder
$query = $entityManager->createQuery($dql);

// Execute the query and retrieve the results
$products = $query->getResult();

// Loop through the results
foreach ($products as $product) {
    echo "Product Name: " . $product->getName() . ", Price: " . $product->getPrice() . "<br>";
}
```

In this example:

1. We create an `EntityManager` instance to manage our entities and database connections.
2. We create a `QueryBuilder` instance using the `createQueryBuilder` method.
3. We define the DQL query step by step:
   - We use the `select` method to specify the alias (`p`) representing the entity `Product`.
   - We use the `from` method to specify the entity name (`Product`) and its alias (`p`).
   - We add a `WHERE` clause to filter products with prices greater than a certain value using the `where` method.
   - We bind a parameter (`price`) using `setParameter`.
   - We order the results by product name in ascending order using the `orderBy` method.
4. We can retrieve the DQL query as a string using `$queryBuilder->getDQL()` (optional).
5. We create a prepared query using the `createQuery` method and the DQL string.
6. We execute the query and retrieve the results using `$query->getResult()`.
7. Finally, we loop through the results and display product information.

This example demonstrates how to build a DQL query with various clauses and execute it using Doctrine in a PHP application.


```php
// Define the DQL query
// Working with entities
$queryBuilder
    ->select('p')                 // Select the "p" alias (represents an entity)
    ->from(Product::class, 'p')        // Specify the entity name and alias
    ->where('p.price > :price')   // Add a WHERE clause
    ->setParameter('price', 100)  // Bind a parameter value
    ->orderBy('p.name', 'ASC');   // Order the results by product name in ascending order
    ->getQuery()                  // get the query 
    ->getResult()                 // execute the query to db
```

In Doctrine, when you execute a DQL query, the result is returned as an array of objects, where each object represents an entity from your data model. To ensure that the results are hydrated into your entity objects, you can use the `getResult()` method on the query, and Doctrine will automatically map the query results to your entity classes.

Here's an example of how to execute a DQL query and get the results bound to your entity model:

Assuming you have an entity class called `Product`:

```php
// Create a Doctrine EntityManager instance
$entityManager = EntityManager::create($dbParams, $config);

// Create a DQL query builder
$queryBuilder = $entityManager->createQueryBuilder();

// Define the DQL query
$queryBuilder
    ->select('p')                 // Select the "p" alias (represents an entity)
    ->from(Product::class, 'p')        // Specify the entity name and alias
    ->where('p.price > :price')   // Add a WHERE clause
    ->setParameter('price', 100)  // Bind a parameter value
    ->orderBy('p.name', 'ASC');   // Order the results by product name in ascending order

// Create a prepared query from the DQL query builder
$query = $entityManager->createQuery($queryBuilder->getDQL());

// Execute the query and retrieve the results bound to the entity model
$products = $query->getResult();

// no bound to the model
$products = $query->getArrayResult();

// Loop through the results
foreach ($products as $product) {
    // $product is an instance of your Product entity class
    echo "Product Name: " . $product->getName() . ", Price: " . $product->getPrice() . "<br>";
}
```

In this code, when you execute `$query->getResult()`, Doctrine automatically hydrates the query results into instances of your `Product` entity class. This means that each element in the `$products` array is an object of the `Product` class, and you can access its properties and methods just like you would with any other instance of that class.

So, in the `foreach` loop, you can access and work with the properties and methods of each `Product` entity as you normally would in your application.

In the context of database querying and ORM (Object-Relational Mapping), "hydration" refers to the process of populating objects or data structures with data retrieved from a database query result.

When you perform a database query, the result typically consists of rows and columns of data. Hydration is the step where this tabular data is transformed into objects or data structures that are easier to work with in your programming language. The main goal of hydration is to map the database data to your application's data model.

There are generally two common types of hydration:

1. **Object Hydration**: In this approach, the data is mapped to objects of your application's classes, often referred to as entities in the context of ORM. Each row from the query result is used to create an instance of an object, with the columns of the row mapped to the properties (attributes) of the object. Object hydration is commonly used in ORM frameworks like Doctrine in PHP, Hibernate in Java, and Entity Framework in .NET.

2. **Array Hydration**: In this approach, the data is mapped to arrays or associative arrays. Each row from the query result is represented as an array, with the column names as keys and the corresponding column values as values. Array hydration is used in situations where you don't need full-fledged objects but prefer a more lightweight data structure.

Hydration is a crucial part of the data retrieval process when using ORMs because it abstracts away the details of how data is fetched and transformed from the database. It allows developers to work with database results in a more object-oriented or structured way, making it easier to interact with and manipulate data in their application code.

Keep in mind that the performance and memory usage of your application can be influenced by the hydration strategy you choose. Object hydration typically requires more memory and processing time because it creates full-fledged objects, whereas array hydration is often more lightweight. The choice between these approaches depends on your specific application requirements and performance considerations.

Here's a sample DQL query with multiple `WHERE` clauses and parameters:

```php
// Create a Doctrine EntityManager instance
$entityManager = EntityManager::create($dbParams, $config);

// Create a DQL query builder
$queryBuilder = $entityManager->createQueryBuilder();

// Define the DQL query
$queryBuilder
    ->select('p')                 // Select the "p" alias (represents an entity)
    ->from(Product::class, 'p')        // Specify the entity name and alias
    ->where('p.price > :minPrice') // Add a WHERE clause for minimum price
    ->andWhere('p.category = :category') // Add an additional WHERE clause for category
    ->orWhere('p.createdAt = :createdAt') // Add an additional WHERE clause for category
    ->setParameter('minPrice', 100)  // Bind the minimum price parameter
    ->setParameter('category', 'Electronics') // Bind the category parameter
    ->orderBy('p.name', 'ASC');   // Order the results by product name in ascending order

// Create a prepared query from the DQL query builder
$query = $entityManager->createQuery($queryBuilder->getDQL());

// Execute the query and retrieve the results bound to the entity model
$products = $query->getResult();

// Loop through the results
foreach ($products as $product) {
    // $product is an instance of your Product entity class
    echo "Product Name: " . $product->getName() . ", Price: " . $product->getPrice() . "<br>";
}
```

#### where

If you see DQL values, you will may have surprises in the result because DQL doesn't know how to put parentheses between OR and AND. For being sure about your where claused you can use `expr`.

You can use `expr()` to help solve complex query issues and create more advanced conditions in Doctrine DQL queries. The `expr()` function allows you to build complex expressions using logical operators like `AND` and `OR`, as well as parentheses for grouping conditions. This can help you construct more fine-grained and precise query logic.

Here's an example of how you can use `expr()` to create a DQL query with complex conditions:

```php
use Doctrine\ORM\Query\Expr;

// ...

$queryBuilder
    ->select('p')
    ->from(Product::class, 'p')
    ->where(
        $queryBuilder->expr()->andX(
            $queryBuilder->expr()->gt('p.price', ':minPrice'), // Price is greater than minPrice
            $queryBuilder->expr()->eq('p.category', ':category') // Category equals 'Electronics'
        )
    )
    ->orWhere(
        $queryBuilder->expr()->eq('p.someOtherCondition', ':otherCondition') // Another condition
    )
    ->setParameter('minPrice', 100)
    ->setParameter('category', 'Electronics')
    ->setParameter('otherCondition', 'SomeValue');
```

In this example:

- We use `$queryBuilder->expr()->andX()` to group the price and category conditions with an "AND" logic.
- We use `$queryBuilder->expr()->gt()` to check if the price is greater than `:minPrice`.
- We use `$queryBuilder->expr()->eq()` to check if the category is equal to `:category`.
- We use `$queryBuilder->expr()->eq()` again to add another condition (e.g., `p.someOtherCondition = :otherCondition`) with an "OR" logic.

#### joins

Here are examples of Doctrine DQL queries using the `JOIN`, `SELECT`, and `FROM` methods with different types of joins:

1. **INNER JOIN**:

   ```php
   $query = $entityManager->createQueryBuilder()
       ->select('u', 'p')
       ->from(User::class, 'u')
       ->join('u.products', 'p')
       ->getQuery();
   ```

   This query uses the `select()`, `from()`, and `join()` methods to perform an inner join between the "User" entity and the "products" association, retrieving users along with their associated products.

2. **LEFT JOIN**:

   ```php
   $query = $entityManager->createQueryBuilder()
       ->select('c', 'p')
       ->from(Category::class, 'c')
       ->leftJoin('c.products', 'p')
       ->getQuery();
   ```

   Here, the `leftJoin()` method is used to perform a left join between the "Category" entity and the "products" association. This retrieves all categories, including those without associated products.

3. **SELF JOIN**:

   ```php
   $query = $entityManager->createQueryBuilder()
       ->select('e1', 'e2')
       ->from('Employee', 'e1')
       ->join('e1.supervisor', 'e2')
       ->getQuery();
   ```

   In this example, we use the `join()` method to perform a self-join on the "Employee" entity, retrieving employees and their supervisors. `e1` represents the employee, and `e2` represents the supervisor.

4. **Multiple Joins**:

   ```php
   $query = $entityManager->createQueryBuilder()
       ->select('u', 'p', 'o')
       ->from('User', 'u')
       ->join('u.products', 'p')
       ->join('p.orders', 'o')
       ->getQuery();
   ```

   This query combines multiple joins using the `join()` method. It retrieves users, their associated products, and the orders associated with those products.

5. **Multiple Joins with Aliases**:

   ```php
   $query = $entityManager->createQueryBuilder()
       ->select('u', 'p', 'o')
       ->from('User', 'u')
       ->join('u.products', 'p')
       ->join('p.orders', 'o')
       ->getQuery();
   ```

   This query uses aliases (`u`, `p`, `o`) with the `select()`, `from()`, and `join()` methods to retrieve users, their associated products, and the orders associated with those products.

In these examples, the `createQueryBuilder()` method is used to create a query builder instance, and then the `select()`, `from()`, and `join()` methods are used to construct the DQL query with different types of joins. This provides a flexible way to build complex queries in Doctrine DQL while maintaining readability.

#### transactions

Transactions are essential for managing database operations in a way that ensures data integrity. Below are examples of how to use transactions in Doctrine within a PHP application:

1. **Starting and Committing a Transaction**:

   ```php
   use Doctrine\ORM\EntityManager;
   use Doctrine\ORM\TransactionRequiredException;

   // Create an EntityManager instance
   $entityManager = EntityManager::create($dbParams, $config);

   try {
       // Begin a transaction
       $entityManager->beginTransaction();

       // Perform database operations within the transaction
       $user = new User();
       $user->setName('John Doe');
       $entityManager->persist($user);

       // More database operations...

       // Commit the transaction
       $entityManager->commit();

       echo "Transaction committed successfully!";
   } catch (TransactionRequiredException $e) {
       // Handle exceptions related to transactions
       echo "Transaction failed: " . $e->getMessage();
       $entityManager->rollback();
   }
   ```

   In this example, we start a transaction with `$entityManager->beginTransaction()`, perform multiple database operations, and then commit the transaction with `$entityManager->commit()`. If an exception occurs, we roll back the transaction to maintain data consistency.

2. **Rolling Back a Transaction**:

   ```php
   use Doctrine\ORM\EntityManager;

   // Create an EntityManager instance
   $entityManager = EntityManager::create($dbParams, $config);

   try {
       $entityManager->beginTransaction();

       // Perform database operations that might fail
       // For example, attempting to insert duplicate data

       // Roll back the transaction on failure
       $entityManager->rollback();
   } catch (Exception $e) {
       // Handle the exception and log or display an error message
       echo "Transaction failed: " . $e->getMessage();
   }
   ```

   In this example, we begin a transaction, attempt some database operations that might fail, and then roll back the transaction if an exception occurs.

3. **Using a Transaction Function**:

   ```php
   use Doctrine\ORM\EntityManager;

   // Create an EntityManager instance
   $entityManager = EntityManager::create($dbParams, $config);

   // Use the transaction() function for automatic transaction handling
   $entityManager->transactional(function ($entityManager) {
       // Inside this closure, a transaction is automatically started
       
       // Perform database operations

       // If an exception occurs, the transaction will be rolled back automatically
   });
   ```

   In this example, we use the `transactional()` method to execute a closure with automatic transaction management. If an exception occurs within the closure, Doctrine will automatically roll back the transaction.

These examples demonstrate how to use transactions in Doctrine to ensure that a series of database operations either succeed entirely or leave the database in a consistent state if an error occurs. Transactions are crucial for maintaining data integrity and consistency in database-driven applications.

#### SQL natives

In Doctrine, you can execute native SQL queries using the `createNativeQuery` method on the EntityManager. Here are some examples of running native SQL queries:

1. **Executing a SELECT Query**:

   ```php
   use Doctrine\ORM\EntityManager;

   // Create an EntityManager instance
   $entityManager = EntityManager::create($dbParams, $config);

   // Define your SQL query
   $sql = "SELECT * FROM users WHERE age > :age";

   // Create a native SQL query
   $query = $entityManager->createNativeQuery($sql, $rsm);

   // Bind parameters
   $query->setParameter('age', 18);

   // Execute the query and retrieve the results as an array of associative arrays
   $results = $query->getResult();

   // Loop through the results
   foreach ($results as $row) {
       echo "User: " . $row['username'] . ", Age: " . $row['age'] . "<br>";
   }
   ```

   In this example, we execute a native SQL `SELECT` query and bind a parameter using `setParameter`. The results are returned as an array of associative arrays.

2. **Executing an UPDATE Query**:

   ```php
   use Doctrine\ORM\EntityManager;

   // Create an EntityManager instance
   $entityManager = EntityManager::create($dbParams, $config);

   // Define your SQL query
   $sql = "UPDATE users SET status = 'active' WHERE id = :userId";

   // Create a native SQL query
   $query = $entityManager->createNativeQuery($sql);

   // Bind parameters
   $query->setParameter('userId', 123);

   // Execute the UPDATE query
   $query->execute();
   ```

   In this example, we execute a native SQL `UPDATE` query and bind a parameter to update a specific user's status.

3. **Executing a DELETE Query**:

   ```php
   use Doctrine\ORM\EntityManager;

   // Create an EntityManager instance
   $entityManager = EntityManager::create($dbParams, $config);

   // Define your SQL query
   $sql = "DELETE FROM products WHERE price < :minPrice";

   // Create a native SQL query
   $query = $entityManager->createNativeQuery($sql);

   // Bind parameters
   $query->setParameter('minPrice', 50);

   // Execute the DELETE query
   $query->execute();
   ```

   In this example, we execute a native SQL `DELETE` query and bind a parameter to delete products with a price below a certain threshold.

Remember that when using native SQL queries, you bypass some of Doctrine's ORM features and should exercise caution, especially with user input, to prevent SQL injection vulnerabilities. Always validate and sanitize user input and consider using prepared statements and placeholders when executing native SQL queries.

#### Events

Doctrine allows you to register event listeners and subscribers to respond to various events triggered by the Doctrine ORM. While DQL (Doctrine Query Language) itself doesn't directly trigger events, you can use event listeners to respond to specific DQL query execution events. Here's an example of how you might do that:

```php
use Doctrine\Common\EventSubscriber;
use Doctrine\ORM\Event\OnFlushEventArgs;
use Doctrine\ORM\Events;

class MyDqlEventListener implements EventSubscriber
{
    public function getSubscribedEvents()
    {
        return [
            Events::onFlush, // You can listen to the onFlush event
        ];
    }

    public function onFlush(OnFlushEventArgs $args)
    {
        $em = $args->getEntityManager();
        $unitOfWork = $em->getUnitOfWork();

        // Check if DQL queries have been executed
        $queries = $em->getConfiguration()->getSQLLogger()->queries;

        foreach ($queries as $query) {
            // Process DQL query or take other actions
            // Example: Log the DQL query
            $this->logQuery($query);
        }
    }

    private function logQuery($query)
    {
        // Implement your logging logic here
        // For example, you can log the DQL query to a file or database
        // You can also perform other actions based on the query
        // ...
    }
}
```

In this example:

1. We create an event subscriber class, `MyDqlEventListener`, that implements the `EventSubscriber` interface.

2. In the `getSubscribedEvents` method, we specify that we want to listen to the `onFlush` event. This event is triggered when changes are flushed to the database.

3. In the `onFlush` method, we access the EntityManager and the UnitOfWork to inspect the executed queries. We check if DQL queries have been executed by examining the SQL Logger's `queries` property.

4. We then process the DQL query or take other actions as needed. In this example, we have a `logQuery` method to log the DQL queries, but you can customize this to perform any action you need in response to the DQL queries.

To use this event listener in your Doctrine application, you would need to register it with the Doctrine event manager. Depending on your application's configuration, this registration step may vary.

Keep in mind that DQL queries are typically executed within your application code, so you have control over when and where to trigger events in response to DQL query execution.

**1. Pre-Persist Event:**

```php
use Doctrine\Common\EventSubscriber;
use Doctrine\ORM\Event\LifecycleEventArgs;
use Doctrine\ORM\Events;

class MyPrePersistListener implements EventSubscriber
{
    public function getSubscribedEvents()
    {
        return [
            Events::prePersist,
        ];
    }

    public function prePersist(LifecycleEventArgs $args)
    {
        $entity = $args->getEntity();
        
        // Perform actions before the entity is persisted
        // For example, set timestamps, generate unique keys, etc.
        $entity->setCreatedAt(new \DateTime());
    }
}
```

In this example, the `MyPrePersistListener` class listens for the `prePersist` event. When an entity is about to be persisted, the `prePersist` method is called, and you can perform actions like setting timestamps or generating unique keys.

**2. Post-Persist Event:**

```php
use Doctrine\Common\EventSubscriber;
use Doctrine\ORM\Event\LifecycleEventArgs;
use Doctrine\ORM\Events;

class MyPostPersistListener implements EventSubscriber
{
    public function getSubscribedEvents()
    {
        return [
            Events::postPersist,
        ];
    }

    public function postPersist(LifecycleEventArgs $args)
    {
        $entity = $args->getEntity();

        // Perform actions after the entity is successfully persisted
        // For example, send notifications or trigger other processes
        $this->notifyUser($entity);
    }

    private function notifyUser($entity)
    {
        // Implement your notification logic here
        // You can send emails, create notifications, etc.
    }
}
```

The `MyPostPersistListener` class listens for the `postPersist` event. After an entity has been successfully persisted, the `postPersist` method is called, allowing you to perform actions like sending notifications or triggering other processes.

**3. Flush Event:**

```php
use Doctrine\Common\EventSubscriber;
use Doctrine\ORM\Event\OnFlushEventArgs;
use Doctrine\ORM\Events;

class MyFlushListener implements EventSubscriber
{
    public function getSubscribedEvents()
    {
        return [
            Events::onFlush,
        ];
    }

    public function onFlush(OnFlushEventArgs $args)
    {
        $entityManager = $args->getEntityManager();
        $unitOfWork = $entityManager->getUnitOfWork();

        // Access entities scheduled for insertion, update, or deletion
        $scheduledEntities = array_merge(
            $unitOfWork->getScheduledEntityInsertions(),
            $unitOfWork->getScheduledEntityUpdates(),
            $unitOfWork->getScheduledEntityDeletions()
        );

        foreach ($scheduledEntities as $entity) {
            // Perform actions before the EntityManager is flushed
            // For example, validate data or modify entities
            $this->validateEntity($entity);
        }
    }

    private function validateEntity($entity)
    {
        // Implement your validation logic here
        // You can validate data and modify the entity if needed
    }
}
```

The `MyFlushListener` class listens for the `onFlush` event, which is triggered when the EntityManager is flushed. Inside the `onFlush` method, you can access entities scheduled for insertion, update, or deletion, and perform actions such as data validation or modification before the flush operation.

To use these event listeners in your Doctrine application, you would need to register them with the Doctrine event manager in your application's configuration. These listeners allow you to hook into the entity lifecycle and apply custom logic at specific points in that lifecycle.

When using the `@PrePersist` annotation in Doctrine ORM, you can also include the `LifecycleEventArgs` argument in your callback method if you need access to the entity manager or other information during the pre-persist event. Here's an example:

```php
use Doctrine\ORM\Mapping as ORM;
use Doctrine\Common\Persistence\Event\LifecycleEventArgs;

/**
 * @ORM\Entity
 * @ORM\HasLifecycleCallbacks
 */
class User
{
    // ... other entity properties and methods ...

    /**
     * @ORM\Column(type="datetime")
     */
    private $createdAt;

    /**
     * @ORM\PrePersist
     */
    public function prePersist(LifecycleEventArgs $args)
    {
        $this->createdAt = new \DateTime();

        // You can access the EntityManager if needed
        $entityManager = $args->getObjectManager();
        
        // You can also access other event-related information
        $entity = $args->getObject();
        
        // Perform any additional logic here
    }
}


// or just
use Doctrine\ORM\Mapping as ORM;

/**
 * @ORM\Entity
 * @ORM\HasLifecycleCallbacks
 */
class User
{
    // ... other entity properties and methods ...

    /**
     * @ORM\Column(type="datetime")
     */
    private $createdAt;

    /**
     * @ORM\PrePersist
     */
    public function setCreatedAtValue()
    {
        $this->createdAt = new \DateTime();
    }
}



// use in your application

$user = new User();
// ... set other properties ...
$entityManager->persist($user);
$entityManager->flush();


```

In this updated example:

1. We use `use Doctrine\Common\Persistence\Event\LifecycleEventArgs` to import the `LifecycleEventArgs` class.

2. We modify the `prePersist` method to accept a `LifecycleEventArgs` argument, allowing us to access the entity manager and other event-related information if needed.


Inside the `prePersist` method, you can access the `$entityManager` and the `$entity` being persisted. This can be useful if you need to perform additional operations or interact with other parts of your application during the pre-persist event.