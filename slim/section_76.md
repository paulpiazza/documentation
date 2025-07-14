---
title: DI Container With PHP-DI and Attributes Injectable-Inject
description: Slim notes.
order: 76
---

See [PHP-DI](https://php-di.org/)
### Get Started

PHP version is at least 8.0 (as attributes were introduced in PHP 8) and set up PHP-DI correctly in your project.

1. **Install PHP-DI via Composer (if not already installed):**

   If you haven't already installed PHP-DI, you can do so using Composer. Navigate to your project directory in the terminal and run the following command:

   ```bash
   composer require php-di/php-di
   ```

2. **Define Your Dependencies:**

   Create classes for your dependencies and mark them with the `#[Injectable]` attribute, which indicates that these classes can be injected by PHP-DI.

   ```php
   #[Injectable]
   class Dependency
   {
       // ...
   }
   ```

3. **Configure PHP-DI Container:**

   In your configuration file (e.g., `config.php`), configure PHP-DI to use annotations for autowiring, including the `#[Inject]` attribute. You can do this by setting the `useAutowiring` and `useAnnotations` options to `true`:

   ```php
   use DI\ContainerBuilder;

   $containerBuilder = new ContainerBuilder();
   
   // Enable autowiring and annotations
   $containerBuilder->useAutowiring(true);
   $containerBuilder->useAnnotations(true);
   
   // Define your dependencies and other configuration here
   
   $container = $containerBuilder->build();
   return $container;
   ```

4. **Annotate Dependency Injection Points:**

   In your classes that need dependencies injected, use the `#[Inject]` attribute on constructor parameters or properties to signal PHP-DI to perform injection.

   ```php
   class SomeClass
   {
       #[Inject]
       public function __construct(private Dependency $dependency)
       {
           // $dependency will be automatically injected by PHP-DI
       }
   }
   ```

5. **Retrieve Dependencies from the Container:**

   In your application code, retrieve instances of your classes from the container. PHP-DI will automatically inject the dependencies based on the `#[Inject]` attribute and any other injection points you've configured.

   ```php
   $container = require 'config.php';
   $someInstance = $container->get(SomeClass::class);
   ```

6. **Add some other dependency (for example Twig)**

   ```php
// config.php

use DI\ContainerBuilder;
use Twig\Environment;
use Twig\Loader\FilesystemLoader;

$containerBuilder = new ContainerBuilder();

// Enable autowiring and annotations
$containerBuilder->useAutowiring(true);
$containerBuilder->useAnnotations(true);

// Define your dependencies
$containerBuilder->addDefinitions([
    // Twig Environment configuration
    Environment::class => function () {
        $loader = new FilesystemLoader('/path/to/templates'); // Specify your templates directory
        return new Environment($loader, [
            // Twig configuration options
        ]);
    },
]);

// Build the container
$container = $containerBuilder->build();
return $container;

   ```
