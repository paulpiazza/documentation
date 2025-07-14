---
title: Lesson P.7 - Refactor Sessions & Create Session Interface
description: Slim notes.
order: 111
---

See [P7-End](https://github.com/paulpiazza/gio-formation-expennies/commits/P7_End)
See [P7](https://github.com/paulpiazza/gio-formation-expennies/commit/4bc1d723827c98022cd20e0b30f5e4bd7bf0a361)

Create a session interface.

Step 1
Create Start session middleware, and all for interface.
app/Middleware/StartSessionsMiddleware.php
app/Exception/SessionException.php
app/Contracts/SessionInterface
[app/Session](https://github.com/paulpiazza/gio-formation-expennies/blob/main/app/Session.php)

Start the session with cookie.

Step 2
Update container, app configs, etc...

create a session config class.

config for cookie.
samesite = lax
secure = true
httponly = true


Step 3
Use that in Auth class. Refactor also auth and guest middlewares.

  
#### Samesite lax

Samesite=Lax is a value for the SameSite attribute in cookies. It allows the cookie to be sent on some cross-site requests, such as top-level navigation or GET requests, but not on others, such as POST requests or iframes. This is in contrast to SameSite=Strict, which never allows the cookie to be sent on a cross-site request. SameSite cookie restrictions are a browser security mechanism that provide partial protection against a variety of cross-site attacks, including CSRF, cross-site leaks, and some CORS exploits [msdn](https://developer.mozilla.org/en-US/docs/Web/HTTP/Cookies)

#### `session_set_cookie_params`

The `session_set_cookie_params` function is a PHP function that sets cookie parameters defined in the php.ini file. According to the PHP manual, the effect of this function only lasts for the duration of the script. Thus, you need to call `session_set_cookie_params()` for every request and before `session_start()` is called.

This function is used to customize the cookie parameters that are used by PHP's session management system. By default, PHP uses its own defaults for these parameters, but you can use `session_set_cookie_params()` to override these defaults with your own values [2].

It is important to note that this function only sets the parameters for the current script and does not affect other scripts or requests [4]. 

#### headers_sent [see](https://www.w3docs.com/learn-php/headers-sent.html)

The `headers_sent` function is a PHP function that checks whether or not HTTP headers have already been sent to the browser. 

When PHP sends output to the browser, it also sends HTTP headers along with it. These headers contain information such as the content type, status codes, and other metadata. Once the headers are sent, it is not possible to modify them.

The `headers_sent` function can be used to determine if any output has been sent to the browser before trying to modify the headers. It returns `true` if headers have already been sent, and `false` otherwise.

This function can be useful in scenarios where you need to ensure that headers are set before sending any output to the browser. It allows you to handle errors or make necessary adjustments before headers are sent.

If `headers_sent` returns `true`, it means that some output has been sent to the browser, and you should avoid modifying headers at that point.

#### Interfaces

Using interfaces in code has several advantages. Here are some of them:

- **Abstraction:** Interfaces allow you to program to an abstraction, which is the smallest, thinnest, and least complicated thing you can couple your code to. This means that you can write code that is more flexible and easier to maintain. [1]

- **Make implementation changes less painful:** If you use interfaces, making changes to the implementation of a class will be less painful because the interface will remain the same. This means that the rest of the code that uses the interface will not need to be changed. [2]

- **Encourage testable code:** Interfaces make it easier to write testable code because you can use mock objects in your tests. This means that you can test your code in isolation without having to worry about dependencies. [2]

- **Foster the single responsibility principle and interface segregation principle:** Interfaces encourage you to write code that follows the single responsibility principle and interface segregation principle. This means that your code will be more modular and easier to understand. [2]

- **Implement multiple inheritance:** In some programming languages like Java, interfaces are used to implement multiple inheritance. This means that a class can implement multiple interfaces and inherit behavior from all of them. [4]

In summary, using interfaces in code has several advantages that can make your code more flexible, easier to maintain, and more testable.
