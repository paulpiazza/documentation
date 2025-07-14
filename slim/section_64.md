---
title: Lesson 2.28 - HTTP Headers
description: Slim notes.
order: 64
---

See [headers](https://www.php.net/manual/en/function.header.php)
See [headers - MDN](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers)
See [status code](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status)

Sure, let's delve into the basics of HTTP headers, HTTP messages, HTTP response status codes, and the structure of HTTP requests and responses:

1. **HTTP Headers:**
   HTTP headers are metadata added to both requests and responses to provide additional information about the communication. Headers convey important details such as the content type, cache control, authentication credentials, and more. Headers are key-value pairs separated by a colon (:), and multiple headers are usually separated by line breaks (\r\n).

2. **HTTP Messages:**
   An HTTP message is composed of a request or a response. Each message consists of a start line, headers, and an optional message body. The start line varies between requests and responses.

3. **HTTP Response Status Codes:**
   HTTP response status codes are three-digit numbers sent by the server to indicate the outcome of a request. They provide a quick summary of whether the request was successful or encountered an error. Common status codes include:
   - 200 OK: Request successful.
   - 404 Not Found: The requested resource doesn't exist.
   - 500 Internal Server Error: Server encountered an error.

4. **Structure of HTTP Requests:**
   An HTTP request consists of:
   - Start Line: Includes the request method (GET, POST, etc.), the target URI, and the HTTP version.
   - Headers: Additional information about the request, such as User-Agent, Accept, etc.
   - Optional Message Body: Data sent along with the request, often used in POST or PUT requests.

5. **Structure of HTTP Responses:**
   An HTTP response consists of:
   - Start Line: Includes the HTTP version, the response status code, and a reason phrase.
   - Headers: Additional information about the response, such as Content-Type, Location, etc.
   - Optional Message Body: Data sent as the response content, often HTML, JSON, or other formats.

Here's a simplified example of an HTTP request and response:

**HTTP Request:**
```
GET /example HTTP/1.1
Host: www.example.com
User-Agent: Mozilla/5.0
```

**HTTP Response:**
```
HTTP/1.1 200 OK
Content-Type: text/html
Content-Length: 123

<html>
<head>
    <title>Example Page</title>
</head>
<body>
    <p>Hello, world!</p>
</body>
</html>
```

Sure, here are explanations of some common HTTP headers that are frequently used in web applications:

1. **User-Agent:**
   The `User-Agent` header is sent by the client (usually a web browser) to identify itself. It contains information about the client's software, version, and sometimes the operating system. Servers can use this header to determine the type of client making the request.

2. **Content-Type:**
   The `Content-Type` header is used in HTTP responses to indicate the media type of the response body. It tells the client how to interpret the content. For example, `Content-Type: application/json` indicates that the response body is in JSON format.

3. **Accept:**
   The `Accept` header is sent by the client in an HTTP request to specify the media types it can accept in the response. This header helps the server choose an appropriate representation of the resource to send back.

4. **Authorization:**
   The `Authorization` header is used to send credentials (such as a username and password) to access protected resources. It's often used with authentication mechanisms like Basic Auth or Bearer Token Auth.

5. **Location:**
   The `Location` header is used in HTTP responses to specify a URL to which the client should redirect. It's often used after a successful POST request to indicate the new location of a resource.

6. **Cache-Control:**
   The `Cache-Control` header is used to specify caching directives for both the client and intermediary caches. It can control caching behavior, expiration, revalidation, and more.

7. **Set-Cookie:**
   The `Set-Cookie` header is used in HTTP responses to set a cookie on the client's browser. Cookies are small pieces of data that can store information about the user or session.

8. **Referer (Referrer):**
   The `Referer` header (note the spelling) is sent by the client to indicate the URL of the page from which the current request originated. It's often used for tracking and analytics purposes.

9. **User-Cache-Control:**
   The `User-Cache-Control` header is an extension to the `Cache-Control` header that allows the user to specify caching directives for their browser.

10. **Content-Disposition:**
    The `Content-Disposition` header is used in responses to suggest a filename for the downloaded file when the client clicks a link or submits a form that triggers a file download.

These are just a few examples of HTTP headers. There are many more headers available, each serving specific purposes in controlling communication between clients and servers. Understanding and using these headers appropriately can greatly improve the performance, security, and functionality of your web applications.

In PHP, you can use the `header()` function to send HTTP headers to the client's browser. These headers provide instructions or information to the browser about how to handle the response. Here's how you can use the `header()` function:

```php
<?php
// Set a Content-Type header
header('Content-Type: application/json');

// Set a Location header to perform a redirect
header('Location: https://www.example.com');

// Set a custom header
header('X-Custom-Header: Hello World');

// Send a 404 Not Found header
header('HTTP/1.0 404 Not Found');

```

Some things to note:

1. You should call `header()` before any actual output (like HTML content) is sent to the browser. Headers are sent as part of the response before the response body.
   
2. If you want to send multiple headers, you can call `header()` multiple times.

3. For status codes, you need to specify the complete HTTP status line (e.g., `HTTP/1.0 404 Not Found`). The status codes can be found in the official HTTP specification.

4. Some headers, like `Location`, are used for redirection. If you're using `Location` for redirection, make sure to follow it with an `exit()` or `die()` statement to stop further script execution.

5. Be cautious when sending custom headers, as some headers can have security implications.

The `http_response_code()` function in PHP is used to set or get the HTTP response status code. It provides a way to set the status code without manually constructing the full HTTP status line using the `header()` function. It's available from PHP 5.4 and later.

Here's how you can use `http_response_code()`:

```php
<?php
// Set the response code to 404 Not Found
http_response_code(404);

// Get the current response code
$currentCode = http_response_code(); // This will return 404

// Set the response code to 200 OK
http_response_code(200);

```

This function provides a more convenient and cleaner way to set or get the HTTP response status code, especially when you're dealing with multiple status codes in your PHP scripts. Just remember that the `http_response_code()` function should be used after the HTTP headers are sent and before any output is sent to the browser.
