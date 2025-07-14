---
title: PHP-DI
description: Slim notes.
order: 148
---

Certainly! Below is an example of how you can implement a Dependency Injection (DI) container in a Slim 4 application using the `di-php` package. This package allows you to easily manage and resolve dependencies within your application.

1. Install the `di-php` package using Composer:

```bash
composer require di-php/di
```

2. Create a `ContainerBuilder.php` class to configure the DI container:

```php
// src/ContainerBuilder.php

use DI\ContainerBuilder;
use Psr\Container\ContainerInterface;

class ContainerBuilder
{
    public static function build(): ContainerInterface
    {
        $builder = new ContainerBuilder();
        $builder->addDefinitions([
            'settings' => [
                // Your application settings here
            ],
            
            // Add your other dependencies here
            // 'database' => ...
            // 'mailer' => ...
        ]);
        
        return $builder->build();
    }
}
```

3. Create a `App.php` class to bootstrap the Slim application:

```php
// src/App.php

use Slim\Factory\AppFactory;
use Psr\Container\ContainerInterface;

class App
{
    public static function create(ContainerInterface $container): \Slim\App
    {
        AppFactory::setContainer($container);
        $app = AppFactory::create();
        
        // Add your routes and middleware here
        // $app->get('/', MyController::class . ':index');
        
        return $app;
    }
}
```

4. Create an `index.php` file to instantiate the DI container and start the Slim application:

```php
// public/index.php

require __DIR__ . '/../vendor/autoload.php';

$container = ContainerBuilder::build();
$app = App::create($container);

$app->run();
```

In this example, you're creating a simple DI container using the `di-php` package and configuring it with your application's dependencies. Then, you're using the Slim Factory to create your application instance and passing the DI container to it. Finally, the `index.php` file bootstraps the application and runs it.

Remember that this is a basic example. In a real-world scenario, you would define your own services, repositories, and other dependencies in the container, and use them within your controllers and other parts of the application.