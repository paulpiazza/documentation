---
title: Lesson 3.10 - Attributes - Simple Router With Attributes
description: Slim notes.
order: 81
---

Attributes, introduced in PHP 8, are a way to add metadata or annotations to classes, methods, properties, and other code elements. They provide a standardized and more structured way to attach additional information to your code, which can be used for various purposes like documentation, code analysis, and custom functionality.

Here's how attributes work in PHP:

1. **Defining an Attribute**: To create a new attribute, you define a class that extends the `Attribute` core PHP class. This class represents your custom attribute.

   ```php
   #[Attribute]
   class MyCustomAttribute {
       public $value;

       public function __construct($value) {
           $this->value = $value;
       }
   }
   ```

   In this example, `MyCustomAttribute` is defined as an attribute class. It takes a single parameter in its constructor, which allows you to pass data when applying the attribute to a code element.

2. **Applying an Attribute**: You apply an attribute to a code element (e.g., a class, method, or property) using the `#[AttributeName]` syntax. You can pass arguments to the attribute constructor within parentheses.

   ```php
   #[MyCustomAttribute("Some value")]
   class MyClass {
       #[MyCustomAttribute("Another value")]
       public $myProperty;
   
       #[MyCustomAttribute("Yet another value")]
       public function myMethod() {
           // ...
       }
   }
   ```

   In this example, `MyCustomAttribute` is applied to the `MyClass` class, its `$myProperty` property, and the `myMethod` method, each with different argument values.

3. **Accessing Attribute Data**: You can access the data associated with an attribute using reflection. For example, you can use the `ReflectionClass`, `ReflectionProperty`, or `ReflectionMethod` classes to inspect and retrieve attribute information.

   ```php
   $class = new ReflectionClass(MyClass::class);
   
   $classAttribute = $class->getAttributes(MyCustomAttribute::class)[0];
   $classData = $classAttribute->newInstance();
   echo $classData->value; // Output: "Some value"
   
   $property = $class->getProperty('myProperty');
   $propertyAttribute = $property->getAttributes(MyCustomAttribute::class)[0];
   $propertyData = $propertyAttribute->newInstance();
   echo $propertyData->value; // Output: "Another value"
   
   $method = $class->getMethod('myMethod');
   $methodAttribute = $method->getAttributes(MyCustomAttribute::class)[0];
   $methodData = $methodAttribute->newInstance();
   echo $methodData->value; // Output: "Yet another value"
   ```

   You can use the `getAttributes()` method to retrieve the attributes applied to a code element, and then instantiate the attribute to access its data.

Attributes provide a structured way to attach metadata to code elements and can be useful for a wide range of purposes, including custom documentation generators, code analysis tools, and custom behavior in your PHP applications.

In PHP 8 and later versions, you can create a simple router using attributes to define routes and associate them with specific methods in your application. Here's an example of a basic router using custom attributes:

```php
// Define a custom attribute for routes
#[Attribute]
class Route {
    public function __construct(public string $path, public string $method = 'GET') {}
}

// Sample controller class with route attributes
class MyController {
    #[Route('/', 'GET')]
    public function home() {
        return "Welcome to the home page!";
    }

    #[Route('/about', 'GET')]
    public function about() {
        return "About Us";
    }

    #[Route('/contact', 'POST')]
    public function contact() {
        return "Contact Us";
    }
}

// Router class
class Router {
    private array $routes = [];

    public function addRoute(string $path, string $method, callable $handler) {
        $this->routes[] = ['path' => $path, 'method' => $method, 'handler' => $handler];
    }

    public function handleRequest(string $path, string $method) {
        foreach ($this->routes as $route) {
            if ($route['path'] === $path && $route['method'] === $method) {
                $handler = $route['handler'];
                echo $handler();
                return;
            }
        }
        echo "404 Not Found";
    }
}

// Create an instance of the router
$router = new Router();

// Add routes from the controller
$controller = new MyController();
$reflection = new ReflectionClass($controller);

foreach ($reflection->getMethods(ReflectionMethod::IS_PUBLIC) as $method) {
    $attributes = $method->getAttributes(Route::class);
    if (!empty($attributes)) {
        $routeAttribute = $attributes[0]->newInstance();
        $router->addRoute($routeAttribute->path, $routeAttribute->method, fn() => $controller->{$method->getName()}());
    }
}

// Simulate incoming requests
$router->handleRequest('/', 'GET');        // Home page
$router->handleRequest('/about', 'GET');   // About Us
$router->handleRequest('/contact', 'POST'); // Contact Us
$router->handleRequest('/nonexistent', 'GET'); // 404 Not Found
```

In this example:

1. We define a custom attribute `Route` to annotate methods with route information (path and HTTP method).

2. The `MyController` class contains methods annotated with `Route` attributes, specifying the path and HTTP method for each route.

3. The `Router` class manages routes and their corresponding handlers. It has methods to add routes and handle incoming requests.

4. We create an instance of the `Router`, extract routes from the `MyController` class using reflection, and add them to the router.

5. Finally, we simulate incoming requests and handle them using the router. The appropriate controller method is executed based on the requested route and HTTP method.

This is a simplified example of a router using attributes. In a real application, you might want to add more features like route parameters, middleware, and error handling. Additionally, you could use existing router libraries like Symfony's Router or FastRoute for more robust routing solutions.