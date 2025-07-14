---
title: Lesson P.4 - Flash Errors & Old Form Data To Session
description: Slim notes.
order: 108
---

See [P4-End](https://github.com/paulpiazza/gio-formation-expennies/commits/P4_End)

See [P4](https://github.com/paulpiazza/gio-formation-expennies/commit/a21f96a9db4dc4fd5c9dcf60ab7b8b4f86061554)

We need to persist requests. We will use sessions.

See [[#[Lesson 2.25 - Superglobals - Sessions & Cookies - Output Buffering](https //youtu.be/6vM-9ou1ARo)]]

We need to create a session and store errors. We will use middlewares.

Step 1
Create start session middleware.

Step 2
We need to make sure that the session has not already been started before.
Throw a new session exception. app/Exception/SessionException.php

See `session_status` and `headers_sent`

End the script with `session_write_close`

Step 3
Add the middleware in  configs/middleware.php

But ho to manage errors ?

Step 4
Get the errors from the session and passes them down to all twig.
there is a twig feature for that.

app/Middleware/ValidationExceptionMiddleware.php
app/Middleware/ValidationErrorsMiddleware.php

display flash errors (use bootstrap)
resources/views/auth/register.twig

Step 5
We need to make errors go away. Errors are display one-time only.

app/Middleware/ValidationErrorsMiddleware.php

`unset($_SESSION['errors']);`


Step 6
because it's hard for client to re-write all fields after an error. It will be nice to save old data (not the password) and reload the form with username, (and others) already filled.

app/Middleware/OldFormDataMiddleware.php
app/Middleware/ValidationExceptionMiddleware.php

Step 7
You should save password in session without hashing. (the best is to not have them in the session global)

app/Middleware/ValidationExceptionMiddleware.php


#### Explanations

app/Middleware/StartSessionsMiddleware.php

This code is a PHP middleware class called `StartSessionsMiddleware`. Middleware is a software layer that sits between the server and the application to provide additional functionality. In this case, the middleware checks if a session has already been started and if headers have been sent before starting a new session. If the checks pass, the middleware starts a new session, processes the request, and then closes the session. 

The `session_status()` function checks if a session has already been started. If it returns `PHP_SESSION_ACTIVE`, then a session has already been started and an exception is thrown.

The `headers_sent()` function checks if headers have already been sent to the client. If headers have been sent, then an exception is thrown.

`session_start()` starts a new session.

`$handler->handle($request)` processes the request and returns a response.

`session_write_close()` writes session data and closes the session.

The code is designed to prevent errors that can occur when starting a new session, such as starting a new session after headers have already been sent.

The `session_write_close()` function writes session data to the storage and ends the session. It is important to call this function after processing a request to ensure that all session data is saved and the session is properly closed. If the session is not closed properly, it can cause issues with subsequent requests or cause data loss. Therefore, it is a good practice to close the session as soon as possible after it is no longer needed.

