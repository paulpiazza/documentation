---
title: Lesson P.27 - Implement Route Model Binding With Slim
description: Slim notes.
order: 131
---

To implement route model binding with Slim, you can use the `add` method on a Slim instance to define your routes and specify the model class as a parameter in the route definition. Then, you can use the `resolve` method on the container to retrieve an instance of the model based on the route parameter.

Here's an example:

```php
use Slim\Factory\AppFactory;
use Psr\Http\Message\ResponseInterface as Response;
use Psr\Http\Message\ServerRequestInterface as Request;

require __DIR__ . '/vendor/autoload.php';

// Instantiate Slim
$app = AppFactory::create();

// Define your route with a model parameter
$app->get('/users/{user}', function (Request $request, Response $response, $args) {
    // Retrieve the user instance from the container
    $user = $this->get('UserModel')->find($args['user']);
    
    // Do something with the user instance
    // ...

    return $response;
})->add(function ($request, $handler) use ($app) {
    // Register your model with the container
    $container = $app->getContainer();
    $container->set('UserModel', function () use ($container) {
        return new UserModel($container->get('db'));
    });

    return $handler;
});

// Run the application
$app->run();
```

In this example, we define a route for `/users/{user}`, where `{user}` is a route parameter representing the ID of a user. We then add a closure to the route definition that retrieves the user instance from the container using the `UserModel` key, which we registered with the container in the middleware using `$container->set('UserModel', ...)`. 

Note that `UserModel` is just a placeholder for your actual model class name. You'll need to define your own model class and replace `UserModel` with its name.

I hope that helps! Let me know if you have any further questions.
