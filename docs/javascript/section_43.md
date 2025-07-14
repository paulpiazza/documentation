---
title: HTTP requests
description: Slim notes.
order: 43
---

HTTP stands for Hypertext Transfer Protocol and is used to structure requests and responses over the internet. HTTP requires data to be transferred from one point to another over the network.

HTTP (Hypertext Transfer Protocol) is the protocol used for transmitting data over the web. It allows clients (such as web browsers) to communicate with servers and retrieve web resources.

TCP (Transmission Control Protocol) is a reliable transport protocol that ensures the delivery of data packets between devices over a network. It provides a connection-oriented communication channel for HTTP to work on top of.

Here's a simplified explanation of how HTTP and TCP work together:

1. Client-Server Communication: When a client (e.g., a web browser) wants to retrieve a web resource, it sends an HTTP request to the server. The request includes information like the resource's URL, request method (e.g., GET, POST), headers, and optional data.

2. TCP Connection Establishment: Before any data can be transmitted, a TCP connection needs to be established between the client and the server. This process involves a three-way handshake, where the client and server exchange SYN (synchronize) and ACK (acknowledge) packets to establish a reliable connection.

3. HTTP Request Transmission: Once the TCP connection is established, the client sends the HTTP request to the server. The request is divided into packets and sent over the TCP connection. TCP ensures that the packets are delivered reliably and in order.

4. Server Processing: Upon receiving the HTTP request, the server processes it. This may involve retrieving data from a database, executing server-side code, or performing other tasks based on the request.

5. HTTP Response Transmission: After processing the request, the server generates an HTTP response. The response includes status codes, headers, and the requested resource (e.g., HTML, images). The response is divided into packets and sent back to the client over the established TCP connection.

6. Client Processing: The client receives the TCP packets containing the HTTP response and reassembles them into a complete response. It then processes the response, which may involve rendering HTML, executing scripts, or displaying images.

7. TCP Connection Termination: Once the HTTP response is fully received and processed, the client and server can close the TCP connection. This is done through a four-way handshake, where both sides exchange FIN (finish) and ACK packets to gracefully terminate the connection.

### https

HTTPS stands for Hypertext Transfer Protocol Secure. It is the secure version of HTTP, which is the primary protocol used for sending data between a web browser and a website. The main purpose of HTTPS is to increase the security of data transfer over the internet. It achieves this by encrypting the communication between the client (web browser) and the server (website) using cryptographic protocols like Transport Layer Security (TLS) or Secure Sockets Layer (SSL).

In simple terms, HTTPS ensures that the data transmitted between your web browser and a website is encrypted, making it difficult for unauthorized parties to intercept and read the information being exchanged. This encryption helps protect sensitive data such as login credentials, personal information, and financial transactions from being accessed by hackers or malicious entities.

When you visit a website using HTTPS, you can usually see a padlock icon in the browser's address bar, indicating that the connection is secure. This provides users with confidence that their data is being transmitted securely.

It's important to note that HTTPS not only encrypts the data but also verifies the authenticity of the website through digital certificates issued by trusted certificate authorities. These certificates ensure that you are connecting to the intended website and not a malicious imposter.

In summary, HTTPS is a secure version of HTTP that encrypts the communication between web browsers and websites, providing confidentiality and integrity of data transfer [1]. It plays a crucial role in protecting sensitive information and maintaining the security of online transactions and communications.

### APIs

API stands for Application Programming Interface. It is a set of rules and protocols that allows different software applications to communicate and interact with each other. APIs define how different software components should interact, what data can be exchanged, and what operations can be performed.

There are several types of APIs, each serving a specific purpose. Here are some common types of APIs:

1. Web APIs: These APIs are designed to enable communication between different web-based applications. Web APIs are typically based on protocols like HTTP (Hypertext Transfer Protocol) and use formats like JSON (JavaScript Object Notation) or XML (eXtensible Markup Language) to exchange data. They allow developers to access and manipulate web resources, such as retrieving data from a server or submitting data to a server.

2. REST APIs: REST (Representational State Transfer) is an architectural style for designing networked applications. REST APIs follow a set of principles, including the use of standard HTTP methods (GET, POST, PUT, DELETE) to perform operations on resources. They are widely used for building web services that can be easily consumed by a variety of clients.

3. SOAP APIs: SOAP (Simple Object Access Protocol) is a protocol for exchanging structured information in web services using XML. SOAP APIs provide a standardized way of communication between applications and often include features like encryption, authentication, and error handling.

4. GraphQL APIs: GraphQL is a query language and runtime for APIs that provides a more flexible and efficient way of querying and manipulating data. With GraphQL APIs, clients can specify the exact data they need, reducing the amount of data transferred over the network and improving performance.

These are just a few examples of API types, and there are many other specialized APIs available for specific purposes such as payment processing, social media integration, geolocation services, and more.

It's important to note that the choice of API type depends on various factors, including the specific requirements of the application, the desired level of control and flexibility, and the target audience for the API.

**Citations:**
- TechTarget: [source](https://searchapparchitecture.techtarget.com/definition/API-application-programming-interface)
- MuleSoft: [source](https://www.mulesoft.com/resources/api/types-of-apis)
- RapidAPI: [source](https://rapidapi.com/blog/api-glossary/types-of-apis/)
- Postman Blog: [source](https://blog.postman.com/guide-to-different-types-of-apis/)

### REST API

**Citations:**
- Mozilla Developer Network: [source](https://developer.mozilla.org/en-US/docs/Web/HTTP/Methods)
- RESTful API Design: [source](https://restfulapi.net/http-methods/)
- RESTful API Tutorial: [source](https://restfulapi.net/http-status-codes/)



REST, or Representational State Transfer, is an architectural style for designing networked applications. It provides a set of principles and constraints that aim to make systems more scalable, reliable, and interoperable on the web. RESTful systems, which adhere to these principles, are characterized by being stateless and separating the concerns of the client and server.

In a RESTful architecture, resources are identified by URLs (Uniform Resource Locators), and clients can interact with these resources using standard HTTP methods such as GET, POST, PUT, and DELETE. The server responds with representations of the requested resources, typically in formats like JSON or XML.

![[Pasted image 20231124185213.png]]


The key principles of REST include:

1. Stateless: Each request from a client to a server contains all the necessary information to understand and process the request. The server does not maintain any client-specific state between requests.

2. Uniform Interface: RESTful APIs have a standardized interface that is consistent across different resources and clients. This includes the use of HTTP methods for different operations and the use of resource identifiers (URLs) to access and manipulate resources.

3. Client-Server Separation: The client and server are separate entities that communicate over a network. The client is responsible for the user interface and user experience, while the server is responsible for processing requests, managing resources, and providing responses.

4. Cacheable: Responses from a RESTful API can be cached by clients or intermediary systems to improve performance and reduce the load on the server.

5. Layered System: REST allows for the use of intermediary systems, such as proxies or gateways, to handle requests and responses. This enables scalability, fault tolerance, and security improvements.

RESTful APIs are widely used in web development due to their simplicity, scalability, and compatibility with existing web standards. They provide a flexible and efficient way to build distributed systems that can be easily consumed by different clients.

### Response Status Codes

See [list Status](https://www.restapitutorial.com/httpstatuscodes.html)

HTTP Verbs, Headers and Accept parameters, and CRUD are all important concepts in web development and API design. Let me explain each of these concepts in more detail:

### HTTP Verbs

HTTP Verbs, also known as HTTP methods, are used to indicate the type of action that should be performed on a resource. The most common HTTP verbs are:

- GET: retrieves a representation of the resource identified by the URL.
- POST: submits an entity to be processed by the resource identified by the URL.
- PUT: replaces the representation of the resource identified by the URL.
- DELETE: deletes the resource identified by the URL.
- PATCH: applies partial modifications to a resource.

HTTP verbs are used in conjunction with URLs to specify the operation that should be performed on a resource. For example, a GET request to `https://example.com/api/users` would retrieve a list of users.

### Headers and Accept Parameters

Headers are additional pieces of information that can be sent along with an HTTP request or response. They provide metadata about the request or response, such as the content type, encoding, authentication credentials, and caching directives.

The Accept header is used to indicate the media type(s) that the client is willing to accept in the response. It is typically used in conjunction with content negotiation, which allows the server to select the most appropriate representation of a resource based on the client's preferences.

Some common HTTP header fields include:
* Authorization: contains credentials to authenticate a user agent with a server.
* Cache-Control: specifies directives for caching mechanisms in both requests and responses.
* Content-Type: indicates the media type of the entity-body sent to the recipient or, in the case of the HEAD method, the media type that would have been sent had the request been a GET.
* User-Agent: contains information about the user agent originating the request.
* 
### CRUD

CRUD stands for Create, Read, Update, and Delete. It is a set of common operations that can be performed on resources in a system. CRUD operations correspond to HTTP verbs as follows:

- Create: POST
- Read: GET
- Update: PUT or PATCH
- Delete: DELETE

CRUD operations are often used in API design to provide a consistent and predictable interface for working with resources.

Overall, HTTP verbs, headers and accept parameters, and CRUD operations are all important concepts in web development and API design. They provide a standardized way of working with resources and communicating between clients and servers.

The PUT and PATCH methods are both HTTP verbs used for updating resources, but they have some differences in their behavior and usage.

GET:
  - The GET method is used to retrieve a representation of a resource from a server.
  - When a client sends a GET request to a server, it expects to receive the requested resource in the response.
  - GET requests are safe and idempotent, meaning they should not modify the state of the server or the resource being retrieved.
  - For example, a GET request to `https://example.com/api/users` would retrieve a list of users.

DELETE:
  - The DELETE method is used to request the removal of a specified resource from the server.
  - When a client sends a DELETE request to a server, it instructs the server to delete the resource identified by the URL.
  - DELETE requests are not safe but are idempotent, meaning that multiple identical requests would have the same effect as a single request.
  - For example, a DELETE request to `https://example.com/api/users/123` would delete the user with the ID 123.

POST:
  - The POST method is used to submit data to be processed by the server.
  - When a client sends a POST request, it includes data in the body of the request, which is typically used to create a new resource on the server.
  - POST requests are not safe and not idempotent, as each request can result in a different outcome.
  - For example, a POST request to `https://example.com/api/users` with user data in the request body would create a new user.

PUT:
- The PUT method is used to replace the entire resource at a specific URL with the new representation provided in the request.
- When making a PUT request, the client sends the complete updated representation of the resource to the server.
- If the resource already exists, the server replaces it with the new representation. If it doesn't exist, the server can create a new resource.
- PUT requests are idempotent, meaning that multiple identical requests should have the same effect as a single request.
- In terms of safety, PUT requests are considered unsafe because they have the potential to modify or create resources on the server.

PATCH:
- The PATCH method is used to apply partial modifications to a resource. It allows clients to send only the changes that need to be made instead of sending the entire updated representation.
- When making a PATCH request, the client sends a set of instructions or changes to be applied to the resource on the server.
- The server then applies these changes to the resource, modifying only the specified fields or properties.
- PATCH requests are not idempotent, meaning that multiple identical requests may have different effects.
- In terms of safety, PATCH requests are considered unsafe because they have the potential to modify resources on the server.

In summary, the main difference between PUT and PATCH is that PUT replaces the entire resource with the new representation, while PATCH applies partial modifications to the resource based on the provided instructions or changes. PUT is idempotent, while PATCH is not. Both methods are used for updating resources in RESTful APIs, but their usage depends on the specific requirements of the application.


### JSON

JSON, or JavaScript Object Notation, is a lightweight data interchange format that is commonly used in web development for transmitting and storing data. It is based on JavaScript object syntax and consists of key-value pairs separated by commas, curly braces, and square brackets. In JSON, values can be strings, numbers, objects, arrays, booleans, or null. JSON is often used to exchange data between a server and a web application, or between different parts of a web application.

The syntax for JSON data consists of key-value pairs, where the key is a string enclosed in double quotes and followed by a colon, and the value can be any of the aforementioned data types. JSON strings must also be enclosed in double quotes.

Here are some examples of JSON data:

```json
{
  "name": "John",
  "age": 30,
  "isMarried": true,
  "hobbies": ["reading", "swimming", "traveling"],
  "address": {
    "street": "123 Main St",
    "city": "Anytown",
    "state": "CA",
    "zip": "12345"
  }
}
```

In this example, we have a JSON object with several key-value pairs. The `name` key has a string value of `"John"`, the `age` key has a number value of `30`, the `isMarried` key has a boolean value of `true`, the `hobbies` key has an array value containing three strings, and the `address` key has an object value containing several key-value pairs.

JSON is a popular choice for data exchange because it is easy to read and write, and can be parsed by many programming languages. It is also lightweight and efficient, making it ideal for use in web applications.

### JSON Object vs. JavaScript Object

JSON (JavaScript Object Notation) and JavaScript objects are related but have some differences in their syntax and usage.

JavaScript Object:
- In JavaScript, an object is a data structure that allows you to store key-value pairs.
- JavaScript objects can have methods (functions associated with the object) and properties (variables associated with the object).
- Object properties can be accessed using dot notation (`object.property`) or bracket notation (`object['property']`).
- JavaScript objects can have dynamic properties, meaning you can add or remove properties at runtime.
- Example of a JavaScript object:

```javascript
const person = {
  name: 'John',
  age: 30,
  hobbies: ['reading', 'swimming']
};
```

JSON Object:
- JSON is a data interchange format that is based on a subset of JavaScript object syntax.
- JSON objects are used for data serialization and transmission between different systems.
- JSON objects consist of key-value pairs enclosed in curly braces (`{}`).
- Property names in JSON must be enclosed in double quotes.
- JSON values can be strings, numbers, booleans, arrays, objects, or null.
- JSON objects do not support methods.
- Example of a JSON object:

```json
{
  "name": "John",
  "age": 30,
  "hobbies": ["reading", "swimming"]
}
```

Differences:
- Syntax: JSON objects require property names to be enclosed in double quotes, while JavaScript objects allow unquoted property names if they are valid JavaScript identifiers.
- Usage: JavaScript objects are used for creating and manipulating data within a JavaScript program, while JSON objects are used for data interchange between different systems.

It's important to note that JavaScript objects can be converted to JSON format using the `JSON.stringify()` method, and JSON strings can be parsed into JavaScript objects using the `JSON.parse()` method.
