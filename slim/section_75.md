---
title: Lesson 3.5 - DI Container With Interface Support
description: Slim notes.
order: 75
---

> [!todo]


Sure, let's enhance our DI container to support interface injection. This feature will allow the container to automatically resolve the proper concrete implementation for a requested interface. We'll use reflection-based autowiring to achieve this.

Here's how we can modify our `Container` class to support interface injection:

```php
class Container implements ContainerInterface {
    // ...

    public function get($id) {
        if (!$this->has($id)) {
            throw new NotFoundException("Service not found: " . $id);
        }

        if ($this->services[$id] instanceof Closure) {
            return $this->services[$id]($this);
        }

        if (is_string($this->services[$id])) {
            $reflection = new ReflectionClass($this->services[$id]);
            $constructor = $reflection->getConstructor();

            if ($constructor === null) {
                return new $this->services[$id]();
            }

            $parameters = $constructor->getParameters();
            $dependencies = [];

            foreach ($parameters as $parameter) {
                $dependency = $parameter->getClass();
                $dependencies[] = $this->get($dependency->name);
            }

            return $reflection->newInstanceArgs($dependencies);
        }

        return $this->services[$id];
    }

    // ...
}
```

To use interface injection, you can set the interface name as the ID and the concrete implementation as the service. The container will automatically resolve the implementation when you request the interface:

```php
interface DatabaseInterface {
    public function query($sql);
}

class MySQLDatabase implements DatabaseInterface {
    public function query($sql) {
        // MySQL query logic
    }
}

$container = new Container();

$container->set(DatabaseInterface::class, MySQLDatabase::class);

$database = $container->get(DatabaseInterface::class);
$database->query("SELECT * FROM users");
```

In this example, the container resolves the `DatabaseInterface` to the `MySQLDatabase` implementation when `get(DatabaseInterface::class)` is called.

Keep in mind that while this example demonstrates a basic form of interface injection, sophisticated DI containers like Symfony's or Laravel's provide more advanced ways to handle interfaces, including tagging services and aliases.

The most interesting with this method is that you can put whatever you want in the class implements the interface.
