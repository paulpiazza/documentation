---
title: Lesson P.3 - Add Form Validation
description: Slim notes.
order: 107
---

See [P3-End](https://github.com/paulpiazza/gio-formation-expennies/commits/P3_End)
See [P3](https://github.com/paulpiazza/gio-formation-expennies/commit/7de612187c2f7778c535dd8fef4ef76da94482fd)

Step 1
Add [Valitron](https://packagist.org/packages/vlucas/valitron)

(You have also [CakePHP Validator](https://github.com/cakephp/validation) and [Symfony Validation](https://symfony.com/doc/current/validation.html))

Step 2
In app/Controllers/AuthController.php
Validate input values in the register method.

Step 3
If we get a validation exception, send an error page to the client.

We could create a ValidationException extends Runtime Exception.
app/Exception/ValidationException.php

Create an Validation exception middleware and catch the exception according to PSR4 since Slim v4.
app/Middleware/ValidationExceptionMiddleware.php

Add new middleware into configs/middleware.php

Step 4
Add ResponseFactoryInterface in our PHP-DI container.
You can get it from $app. So you have to inject $app logic creation bootstrap into the container bindings.

You will have to adapt all implementation of project because $app is in a container. bootstrap file, and others....

See [Slim Middleware](https://www.slimframework.com/docs/v3/concepts/middleware.html)
See [PSR-15](https://www.php-fig.org/psr/psr-15/)
See [PSR-15 Git](https://github.com/middlewares/awesome-psr15-middlewares)
See [PSR-15 Accepted](https://github.com/php-fig/fig-standards/blob/master/README.md)
#### PSR-15

PSR-15 is a PHP Standards Recommendation of the Framework Interoperability Group (FIG) that describes common interfaces for HTTP server request handlers and middleware components using HTTP messages defined by PSR-7 or subsequent replacement PSRs. HTTP request handlers and middleware are essential components of any web application.

#### PSR-17

An HTTP factory is a method by which a new HTTP object, as defined by PSR-7, is created. HTTP factories MUST implement these interfaces for each object type that is provided by the package.

#### PSR-7

The link you provided is about PSR-7, a set of common interfaces for representing HTTP messages in PHP. It describes the structure of HTTP messages and how to access or manipulate them in order to perform tasks such as making a request to an HTTP API or handling an incoming request. The document also includes specifications for working with uploaded files and server requests.

#### HTTP_REFERER

HTTP_REFERER is an optional HTTP header field that identifies the address of the web page from which a resource has been requested. When a user clicks on a hyperlink in a web browser, causing the browser to request a new web page, the Referer header is sent along with the request to the new page, indicating the URL of the page that the user was on when they clicked the link. The Referer header can be useful for tracking user behavior on a website and for identifying where traffic is coming from. However, it can also pose privacy and security risks. 

In summary, HTTP_REFERER is an HTTP header that provides information about the URL of the page that referred a user to the current page.
