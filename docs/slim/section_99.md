---
title: Lesson 3.28 - Intro to Slim PHP Framework
description: Slim notes.
order: 99
---

In this PHP tutorial, the basics of the Slim PHP framework are covered, including its similarities to the code already built in the series. The Slim framework is a micro framework that has abilities to route requests and send back responses, with the ability to add on and install more components as needed. The video also includes instructions on how to install and use Twig and Di in conjunction with Slim.

Slim is close to Silex which is another minimalist framework.

See [Slim](https://www.slimframework.com/docs/v4/)

Detailed Summary for [Intro to Slim PHP Framework - Full PHP 8 Tutorial](https://www.youtube.com/watch?v=wCZUD6LBdRg&list=PLr3d3QYzkw2xabQRUpcZ_IBk9W50M9pe-&index=96&t=544s) by [Monica](https://monica.im)

[00:00](https://www.youtube.com/watch?v=wCZUD6LBdRg&list=PLr3d3QYzkw2xabQRUpcZ_IBk9W50M9pe-&index=96&t=544s&t=0.55) Introduction to Slim PHP framework as a micro framework for routing requests and sending responses.
- Slim PHP is a micro framework that receives an HTTP request, invokes an appropriate callback routine, and returns an HTTP response.
- It is not a batteries-included framework like Laravel or Symfony.
- Slim PHP is similar to the code that has been built throughout the series and is flexible enough to add on more components as needed.
    
[02:49](https://www.youtube.com/watch?v=wCZUD6LBdRg&list=PLr3d3QYzkw2xabQRUpcZ_IBk9W50M9pe-&index=96&t=544s&t=169.92) The Slim PHP framework allows adding only required components, and middleware is executed before and after the Slim application.
- Slim framework allows adding only required components like Doctrine Twig and Symphony components.
- Middleware is a set of actions executed before and after the Slim application.
- Middleware stack is executed from the outside to the inside, and then traversed in reverse order.
- Slim supports PSR-7 interfaces for request and response objects.
    
[05:39](https://www.youtube.com/watch?v=wCZUD6LBdRg&list=PLr3d3QYzkw2xabQRUpcZ_IBk9W50M9pe-&index=96&t=544s&t=339.12) Installation of Slim PHP framework and dependencies
- Need to install a PSR-7 implementation compatible with Slim PHP
- Copy and paste composer command to install PSR-7 implementation in terminal
- Copy code snippet from documentation and paste it in public index.php file
- Open browser to verify installation, then remove unnecessary dependencies from composer.json and run composer install to install remaining dependencies.
    
[08:30](https://www.youtube.com/watch?v=wCZUD6LBdRg&list=PLr3d3QYzkw2xabQRUpcZ_IBk9W50M9pe-&index=96&t=544s&t=510.08) Adding Twig Middleware to the Slim Application
- Twig object needs to be created and twig middleware needs to be added to the application
- The path and settings need to be adjusted according to the app class
- The tweak object needs to have the extension added to it
- To render the tweak template, the view render function is called with the psr 7 response interface, the template name, and the data (if any)
    
[11:20](https://www.youtube.com/watch?v=wCZUD6LBdRg&list=PLr3d3QYzkw2xabQRUpcZ_IBk9W50M9pe-&index=96&t=544s&t=680.24) The video shows how to use Slim Twig components and the PSR 7 request and response interface objects to render templates without the need for a dependency injection container.
- Controller methods accept PSR 7 request and response interface objects.
- Slim Twig components can be used to render templates without the need for a dependency injection container.
- The PSR 11 container implementation can be used to enable dependency injection and auto wiring.
- The Doctrine ORM and migrations need to be set up to get the invoice controller to work.
    