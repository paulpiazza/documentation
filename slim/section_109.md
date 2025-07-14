---
title: Lesson P.5 - Session Based Authentication - Session Hijacking & Fixation
description: Slim notes.
order: 109
---

See [P5-End](https://github.com/paulpiazza/gio-formation-expennies/commits/P5_End)

See [P5](https://github.com/paulpiazza/gio-formation-expennies/commit/a21f96a9db4dc4fd5c9dcf60ab7b8b4f86061554)

See Cookies

Step 1
protect routes

app/Middleware/AuthMiddleware.php

if the client ask an url that have no session, get 302 error.

decide which one

configs/routes/web.php


Step 2
In app/Controllers/AuthController.php login

1. validate the request data
2. check the credentials
3. save user id in the session
4. redirect to the home page

Step 3
Update twig views
resources/views/auth/login.twig
resources/views/auth/register.twig

Step 4

app/Controllers/AuthController.php
app/Middleware/StartSessionsMiddleware.php


#### Hijacking

In the context of a PHP project, hijacking can refer to a type of security vulnerability called session hijacking. This occurs when an attacker is able to steal a user's session ID, which allows them to impersonate the user and access sensitive information or perform actions on the user's behalf. This can be prevented by properly securing session management and using techniques such as session ID regeneration and HTTPS encryption.

Method 1

![[Pasted image 20231010192057.png]]

Method 2

![[Pasted image 20231010192148.png]]

How to protect app against session hijacking & fixation

A few things that we can do to protect against such attacks.
One of course is to use secure connection like https to prevent men in the middle attacks whichwill help avoid session hijacking.
We can also configure the cookie options to set the secure flag and set the HTTP only to ensure that cookies are not accessible  via JavaScript we can also Implement protection against the cross-site scripting attacks which will also be covered in a separate lesson.
Another thing that we can and should do to protect against such attacks is to regenerate this session ID anytime there is a change in the user's authentication State user logging in qualifies as an authentication State change. So therefore we should regenerate the session ID there that would make the attackers fake such an ID useless because the user would be getting a new session ID whenever they would be logging in we can use PHP session regenerate ID function to do that. So before we set the user's ID in the session we can call the session regenerate ID function now let's try this out now so I'm going to delete this again we're logged out the session was generated.

Cookie options & configuration

About some of these cookie options that we see here like HTTP only secure same site and so on the domain and the path basically Define the scope of the cookie like to which URLs the cookie should be sent to expires and max age is the life time of the cookie session here indicates that this is a session cookie and are usually expired or deleted whenever the browser session ends like whenever the browser is closed however some browsers like chromium-based browsers restore the sessions which may seem confusing at first because if you close the browser and reopen it you might think that it would be logged out but you're not because these browsers restore the sessions HTTP only and secure if enabled ensure that cookies are sent over a secure connection only and can't be accessed by client-side scripts like JavaScript so you can't access the cookies by using document cookie so if we go to the console here and try to do document.cookie we see that we can access the session ID this way but if I enable the HTTP only and try to access it again we see that it no longer Returns the cookie the other option that I want to talk about is the same site this option basically lets us specify if and when the cookies should be sent with the cross site requests we can specify the value to be either strict lacks or none none means that cookies will be sent on both first party and cross-site requests while strict and lacks are similar in the way they function strict means that cookie will be sent only if the request originates on the first party domain meaning only for the requests that originate from the same site where the cookie was created like  an email within Gmail for example if you get an email that contains the link to your site if you click it it won't include the cookie with a strict option because request did not originate on your site Lux is a bit less restrictive where it allows the user to navigate to the site like clicking on a link from within an email which would then include the cookies in the header but it still prevents the cross site requests whether it's to load images or frames now we can configure the session cookie options by use using session set cookie params function so let's head over to the PHP documentation to see how we can configure the cookie params as stated here we need to call the function before


#### regenerate the session id

The function `session_regenerate_id()` is a PHP function used to regenerate the session ID for a user's session. 

In web development, a session is a way to store and track user-specific information across multiple requests. Each session is assigned a unique identifier, known as the session ID. The `session_regenerate_id()` function generates a new session ID, which helps to improve the security of the session by preventing session fixation attacks.

By calling `session_regenerate_id()`, a new session ID is generated and associated with the current session. This is typically done when there is a change in the user's authentication status or when there is a need to refresh the session ID to mitigate potential security risks.

It's important to note that `session_regenerate_id()` should be used with caution and in the appropriate context, as it may have implications on the functionality and performance of the application.


