---
title: Lesson P.6 - Persist Authenticated User Object Throughout The Request
description: Slim notes.
order: 110
---

See [P6-End](https://github.com/paulpiazza/gio-formation-expennies/commits/P6_End)

See [P6](https://github.com/paulpiazza/gio-formation-expennies/commit/aef1ec1dfd42c36428f265a6d7ff594b7fddc2e7)

The idea is to search one time the user by its id and to attach the user data to each request with middleware.

Step 1
Create middleware for authenticate.

app/Middleware/AuthenticateMiddleware.php

Auth middleware only check if the user is logged or not.
This one authenticate from session.

You get the id of the user in the session and you search the user in the db with the entity manager.

Transmit the request by adding the user attribute in requestWithAttribute.

Step 2

Update the HomeController


HOWEVER !!! There is a better way !

Step 1

Create contracts namespace.

app/Contracts/AuthInterface.php
app/Contracts/UserInterface.php
app/Contracts/UserProviderServiceInterface.php

make app/Entity/User.php implements user interface.

create app/Services/UserProviderService.php implements UserProviderServiceInterface.ph

create app/Auth.php implements AuthInterface.

Step 2
Inject nterfaces into container DI.
configs/container/container_bindings.php

Add new middlewares.
configs/middleware.php

