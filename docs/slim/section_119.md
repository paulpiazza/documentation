---
title: Lesson P.15 - Ajax Request Validation
description: Slim notes.
order: 119
---

See [P15_End](https://github.com/paulpiazza/gio-formation-expennies/commits/P15_End)

This video covers how to handle validation errors in an Ajax request and how to send a proper JSON response. It also demonstrates how to check if a request is an XHR request and handle it accordingly. Additionally, it shows how to validate route parameters in Laravel.

resources/js/ajax.js


[00:00](https://www.youtube.com/watch?v=Cb_AhMWkAJo&t=0.299) To update the category name, call the update method on the category service with the category entity and new name as arguments.
- Remove the response data and call the update method within the Ajax request.
- The update method sets the new name for the category entity and returns the updated category entity.
- The update method can be made to return void or the updated category entity.
    
[02:40](https://www.youtube.com/watch?v=Cb_AhMWkAJo&t=160.62) To handle validation errors in an Ajax request, we need to check if the request is an XHR request and prepare a proper JSON response with validation errors and the proper status code.
- Validation should be handled within the update category request validator class.
- XHR stands for XML HTTP request and allows making requests to the server without the need for page refresh.
- Some libraries like jQuery and Axios automatically add the X-Requested-With header, but the Fetch API does not set it by default, so we have to pass that header ourselves.
- We need to obstruct the Fetch API call to avoid setting the header everywhere.
    
[05:20](https://www.youtube.com/watch?v=Cb_AhMWkAJo&t=320.78) The Ajax.js file is explained, including the get and post functions and the Ajax function that accepts URL, method, and data.
- The get method accepts URL and data as arguments, opens the edit category model if no data is present.
- The post request passes the data object containing name and logs the response.
- The Ajax function sets default headers, checks if the request method is a csrf method, and stringifies the data object if it is.
- If the request method is GET, the query parameters are added to the URL using URLSearchParams and the fetch function is called.
    
[08:04](https://www.youtube.com/watch?v=Cb_AhMWkAJo&t=484.56) The video discusses how to check if a request is an XMLHttpRequest (XHR) and handle it accordingly.
- Create a method to check if the request is an XHR or not.
- If the request is an XHR, return a JSON response with a status code of 422.
- If the request is not an XHR, handle it as before by getting the referrer, flashing the session, and redirecting the user.
    
[10:45](https://www.youtube.com/watch?v=Cb_AhMWkAJo&t=645.18) The video demonstrates how to fix a validation error in an Ajax request by appending the arguments passed to the URL.
- The request service is injected in the constructor.
- The validation error occurs because the ID is not passed as part of the payload.
- The fix involves merging the parsed body and arguments arrays using the plus operator.
- The validation errors are no longer present after making the fix.
    
[13:28](https://www.youtube.com/watch?v=Cb_AhMWkAJo&t=808.5) Regular expression matching can be used in route definitions to validate route parameters, allowing for more precise control over which routes are invoked.
- Regular expressions can be added to route definitions to specify the format of route parameters.
- If a route parameter does not match the specified regular expression, the route will not be invoked.
- Validation can be done within the routes or using a validator, depending on the complexity of the validation required.

#### x-requested-with

X-Requested-With is an HTTP header that is used to identify Ajax requests. Specifically:

- Ajax requests are requests made by JavaScript code running in the browser to retrieve data from a web server asynchronously in the background. This allows the webpage to be updated dynamically without needing to reload the entire page.

- The XMLHttpRequest (XHR) object in JavaScript is commonly used to make Ajax requests. 

- When JavaScript code makes an Ajax request using XHR, the browser will automatically add the X-Requested-With: XMLHttpRequest header to the HTTP request. 

- This header allows the web server to identify that the request came from an Ajax call rather than a regular page load. The server can then respond appropriately, for example by sending back JSON or XML data rather than a full HTML page.

So in summary, the X-Requested-With: XMLHttpRequest header is a standard way for JavaScript Ajax requests to identify themselves to the web server that they are Ajax requests. The server can check for the presence of this header to determine if the request is an Ajax call or not.
