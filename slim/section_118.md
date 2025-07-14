---
title: Lesson P.14 - POST Ajax Request & CSRF Fields
description: Slim notes.
order: 118
---


See [P14End](https://github.com/paulpiazza/gio-formation-expennies/commits/P14_End)

In this video, the presenter demonstrates how to make POST requests with CSRF fields using PHP 8 in the context of an expense tracker app.
The video explains the necessary steps to set up the fetch API to make POST requests and how to include the CSRF token in the request body.
The presenter also shows how to handle CSRF failures by creating a custom CSRF failure handler and demonstrates how to fix the CSRF problem by adding the token name and value to the request body.


[00:00](https://www.youtube.com/watch?v=BsM3KQpr40w&t=0.299) To make post requests using Fetch API and protect against CSRF, we need to pass in options such as method, body, and content type header.
- Post requests are protected by CSRF by default.
- To make post requests using Fetch API, we need to pass in options such as method, body, and content type header.
- The body of the request should be a Json encoded body to access it as an array within the controller.
- We need to create a new post route on the same endpoint and set the method name to update or save.
    
[02:57](https://www.youtube.com/watch?v=BsM3KQpr40w&t=177.66) The video demonstrates how to set up a custom CSRF failure handler by creating a separate class and returning a closure.
- The default Handler sends a response with status 100, content type text plane, and body of "failed csrf check".
- The response can be parsed to text instead of JSON in the categories JS file to see the "failed csrf check" text.
- A custom CSRF failure handler can be set up with an empty body and a status code of 401 or 403.
- The custom CSRF failure handler can be created within a separate CSRF class and called in the container bindings file.
    
[05:56](https://www.youtube.com/watch?v=BsM3KQpr40w&t=356.58) The code is simplified and an arrow function is added to customize the response later on.
- The unnecessary body is removed.
- The response Factory is injected in the Constructor.
- The token name and value are passed along with the request body.
- CSRF fields are added to the edit category model.
    
[08:55](https://www.youtube.com/watch?v=BsM3KQpr40w&t=535.8) Adding body parsing middleware and default body parsers to the middleware stack for POST Ajax requests with CSRF fields.
- The body parsing middleware is added to the middleware stack to instantiate body parts.
- Default body parsers handle JSON type and call JSON decode.
- Hard coding the CSRF name and value names of input fields is unnecessary and can be changed.
    
[11:53](https://www.youtube.com/watch?v=BsM3KQpr40w&t=713.04) The video demonstrates how to extract CSRF values and use them in JavaScript calls.
- Instead of adding input fields to each form, the video shows how to access CSRF values individually.
- A function called "get csrf fields" is created to extract the CSRF values.
- The function uses query selectors to retrieve the CSRF name and value from meta tags.
- The function returns an object with the CSRF name and value as key-value pairs.
    
[14:52](https://www.youtube.com/watch?v=BsM3KQpr40w&t=892.5) The video discusses adding validation to the category name and handling validation exceptions for Ajax requests.
- The validation rules for updating a category are duplicated from the rules for creating a category.
- The response status code should be "ok" when saving a category, but it is not being parsed correctly.
- If an empty category is saved, a validation exception is thrown and the user is redirected back to the categories page.
- The current validation exception handling does not work for Ajax requests, so a different approach is needed.
    
