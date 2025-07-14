---
title: Lesson 3.4 - DI Container With & Without Reflection API
description: Slim notes.
order: 74
---
> [!todo]


See [PHP-DI](https://php-di.org/)
See [Standard](https://www.php-fig.org/psr/psr-11/)
See [PHP Reflection](https://www.php.net/manual/en/book.reflection.php)

Sure, let's walk through a basic implementation of a PSR-11 compatible Dependency Injection (DI) container in PHP. We'll also cover autowiring and how to implement reflection-based autowiring for automatic dependency resolution.

First, let's define the basic structure of our DI container:

```php
interface ContainerInterface {
    public function get($id);
    public function has($id);
}

class Container implements ContainerInterface {
    private $services = [];

    public function set($id, $service) {
        $this->services[$id] = $service;
    }

    public function get($id) {
        if (!$this->has($id)) {
            throw new NotFoundException("Service not found: " . $id);
        }

        return $this->services[$id] instanceof Closure
            ? $this->services[$id]($this)
            : $this->services[$id];
    }

    public function has($id) {
        return isset($this->services[$id]);
    }
}
```

In this simple DI container implementation, we have the `Container` class that implements the `ContainerInterface`. The container uses an associative array to store services with their corresponding IDs.

To use the container, you can register services using the `set` method and retrieve services using the `get` method:

```php
$container = new Container();

$container->set('logger', function ($c) {
    return new Logger();
});

$logger = $container->get('logger');
```

Now, let's talk about autowiring. Autowiring is the process of automatically resolving and injecting dependencies into a class based on their type. To implement reflection-based autowiring, we can modify our `Container` class:

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

        // Perform reflection-based autowiring
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

    // ...
}
```

In this modified container, when you request a service, it checks if the service has dependencies in its constructor. If there are dependencies, it uses reflection to automatically instantiate and inject them based on their types.

Please note that this is a basic example for educational purposes. Real-world DI containers like Symfony's or Laravel's provide much more advanced features and optimizations.

Remember that understanding Dependency Injection, containers, and autowiring is fundamental in modern PHP development, as it greatly improves code organization, maintainability, and testability.