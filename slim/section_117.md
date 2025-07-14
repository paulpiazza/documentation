---
title: Lesson P.13 - First Ajax Request
description: Slim notes.
order: 117
---

See [P13-End](https://github.com/paulpiazza/gio-formation-expennies/commits/P13_End)


The video explores adding the edit category functionality to the expense tracker web application using Ajax calls to create two requests: one to fetch category information and one to save the updated category. The video also covers implementing a response formatter class to generate Json response objects. The tutorial emphasizes keeping the JavaScript code to a minimum and highlights that JavaScript is not a requirement for the course.

[00:00](https://www.youtube.com/watch?v=fDC9b9tDmNo&t=0.299) The video demonstrates the functionality of editing categories in the expense tracker app using Ajax calls.
- Clicking on the edit button opens a new model where the category can be edited.
- The save button currently does not have any functionality.
- The JavaScript code handles the opening of the edit category model.
- The model object is created using the bootstrap library and the necessary data is passed to it.
    
[02:41](https://www.youtube.com/watch?v=fDC9b9tDmNo&t=161.04) The video discusses different ways of implementing Ajax requests and emphasizes keeping JavaScript code to a minimum.
- JavaScript skills of the speaker are rusty, so there may be better and easier ways to do things.
- The speaker aims to minimize the use of JavaScript and dependencies like jQuery and alpine.js.
- JavaScript is not a requirement for the course, but it can be used as much or as little as desired.
- The section focuses on creating an endpoint on the backend side and retrieving information for a specific category.
    
[05:22](https://www.youtube.com/watch?v=fDC9b9tDmNo&t=322.5) The video demonstrates making an asynchronous JavaScript call and setting the content type header for a JSON response.
- The code is updated to return a response instead of redirecting the user.
- The category ID is made nullable to return null if the category is not found.
- The browser is used to test the GET request and verify the JSON response.
- The content type header is set to "application/json" for the response.
- The fetch API is introduced as a method to make Ajax requests.
    
[08:04](https://www.youtube.com/watch?v=fDC9b9tDmNo&t=484.74) The video explains how to use the `then` method to handle the response from a fetch request in JavaScript.
- The `then` method allows us to specify what should happen next after receiving a response.
- We can chain multiple `then` calls to perform different actions with the formatted response.
- The response from the previous `then` call is passed as an argument to the next `then` call.
- The video demonstrates how to parse the response to JSON and log it to the console.
    
[10:45](https://www.youtube.com/watch?v=fDC9b9tDmNo&t=645.36) The video discusses implementing a response formatter for JSON in PHP, including configuring flags for special character conversion and error handling.
- A private read-only response formatter is injected to format the response as JSON.
- The response formatter class is created within the app namespace.
- The "sjson" method is added to the response formatter class to handle JSON formatting.
- The method accepts a data variable of mixed type and returns a response interface.
- Flags are specified to escape or convert special characters, such as tags, ampersands, quotes, and apostrophes.
- The "Json throw on error" flag is used to throw an exception on error.
- The flags can be configured as arguments to the method for flexibility.
- The implementation is tested to ensure it still works after the refactor.
    
