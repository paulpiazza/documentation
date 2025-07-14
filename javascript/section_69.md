---
title: Express js
description: Slim notes.
order: 69
---

See [guide](https://expressjs.com/en/4x/api.html)

After this unit, you will be able to:

- Create a web server with Express.js
- Design/serve RESTful APIs with Express.js
- Use Postman to test API routes
- Explain what CORS is
- Explain Express.js routing and middleware

If you are interested in learning more about these topics, here are some additional resources:

- Reading: [Eloquent Javascript Chapter 20: Node.js, Marijn Haverbeke](https://eloquentjavascript.net/20_node.html)
- Tutorial: [Express web framework (Node.js/JavaScript), MDN](https://developer.mozilla.org/en-US/docs/Learn/Server-side/Express_Nodejs)
- Article: [Going out to eat and understanding the basics of Express.js, Kevin Kononenko](https://www.freecodecamp.org/news/going-out-to-eat-and-understanding-the-basics-of-express-js-f034a029fb66/)
- Resource: [Express.js: Express Middleware Modules](https://expressjs.com/en/resources/middleware.html)

See my production:
* [MyBlog](https://github.com/paulpiazza/MyBlog/blob/main/index.js)
* 
#### What is a Server-Side Framework

Let’s first start with what a _framework_ is — which is a collection of code to make it easier to accomplish a specific task. A framework is particular in that developers must follow the rules and syntax put forth by the framework to use it properly. With that in mind, a _server-side framework_ is used to run web applications and handle web development workflows on the server-side or back-end. This workflow might include things like accessing databases, generating HTML, handling URL routing, and more!

#### Why Use a Server-Side Framework?

As you just read, there’s a lot to consider when constructing a back-end. A server-side framework can handle a lot of the back-end responsibilities without you needing to come up with a custom solution, which saves a lot of time. Other benefits could include:

- access to libraries built to work with the framework
- existing resources and documentation for solving common problems
- improved security

There are some tradeoffs to consider as well — as noted earlier, you would need to learn the patterns of the framework. Now let’s look at a specific example of a server-side framework, Express.js.

#### Node.js and Express.js

As you recall, Node.js is an open-source runtime environment for executing JavaScript outside of a browser. You can create a back-end entirely with Node.js. However, you can also use [Express.js](https://expressjs.com/), a server-side framework written in JavaScript and built to work with Node.js. The Express.js framework comes with included code that makes implementing some core functionality much quicker than doing it from scratch. By using Express, you have a simpler developer experience and thus can focus more on business logic (functionality).

Let’s take a look at a code snippet that showcases Express code. The code below sets up a route on a server:

```
const express = require('express');const app = express();  app.get('/', (req, res) => {  res.send('<h1>Hello from your Express.js server!!</h1>');});  app.listen(8000, () => {  console.log('Server listening on port 8000');});
```

Which would render load on `localhost:8000`:

![Text of "Hello from your Express.js server!!" in the browser as a result of an Express server serving up the root page of a back-end.](https://static-assets.codecademy.com/Courses/express/express_server.jpeg)

With a few lines of code, you can see the simplistic approach Express uses for back-end development. It is also because of Express.js’s minimalist approach and built-in features, Express is one of the most popular frameworks to use with Node. You will see this first-hand as you get to learn the Express framework.

Creating a router and managing routes in Node.js with Express is a fundamental part of building web applications. Here's a step-by-step guide on how to do this:

### Build Node Express back end
#### Step 1: Setting Up Your Project

Before you begin, make sure you have Node.js installed on your system. You can download it from the official Node.js website.

1. Create a new directory for your project and navigate into it.
2. Initialize a new Node.js project by running `npm init -y` in your terminal.
3. Install Express by running `npm install express`.

#### Step 2: Creating an Express Application

Create a file named `app.js` (or `server.js`, depending on your preference) in your project directory. This will be the entry point of your application.

Add the following code to `app.js` to set up a basic Express application:

```javascript
const express = require('express');
const app = express();
const port = 3000;

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
```

#### Step 3: Setting Up Routes

Within the same `app.js` file, you can define routes using the `app.get()`, `app.post()`, `app.put()`, and `app.delete()` methods for handling GET, POST, PUT, and DELETE requests, respectively.

Here's an example of setting up a simple GET route:

```javascript
app.get('/', (req, res) => {
  res.send('Hello World!');
});
```

#### Step 4: Creating a Router

For better organization, especially in larger applications, you can use the Express Router. Create a new file named `router.js` and add the following code:

```javascript
const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.send('Home Page');
});

router.get('/about', (req, res) => {
  res.send('About Page');
});

module.exports = router;
```

#### Step 5: Using the Router in Your Application

Back in your `app.js` file, you need to import the router and tell your Express application to use it:

```javascript
const express = require('express');
const app = express();
const port = 3000;
const router = require('./router'); // Import the router

app.use('/', router); // Use the router for all paths starting with '/'

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
```

#### Step 6: Running Your Application

Run your application by executing `node app.js` in your terminal. If everything is set up correctly, you should see the message that the server is running on port 3000.

Navigate to `http://localhost:3000/` in your web browser, and you should see "Home Page". If you go to `http://localhost:3000/about`, you should see "About Page".

#### Additional Tips

- For each resource in your application, you might want to create a separate router file that handles all routes related to that resource.
- Middleware can be used with routers to handle errors, authentication, etc.
- You can use route parameters and query strings to make your routes more dynamic.

This is a basic guide to get you started with routing in Express. As you progress, you'll learn about more complex routing patterns, middleware integration, and other advanced topics.

### Router

The router object is an instance of the Express router that you can use to declare routes in a modular way. As shown in the previous example, routes can be declared for different HTTP methods and paths.

#### Route Parameters

Route parameters are named URL segments that are used to capture values specified at their position in the URL. Here's how you handle them:

```javascript
router.get('/users/:userId', (req, res) => {
  const userId = req.params.userId;
  res.send(`User ID is: ${userId}`);
});
```

In the above route, `:userId` is a route parameter.

#### Handling Query Strings

Query strings are parts of the URL used to pass data to the server as key-value pairs. Express automatically parses the query strings and attaches them to the `req.query` object:

```javascript
// get /search?q=info
router.get('/search', (req, res) => {
  const query = req.query.q;
  res.send(`Search for ${query}`);
});
```

#### Middleware

Middleware functions can perform tasks such as executing code, making changes to the request and response objects, ending the request-response cycle, or calling the next middleware in the stack.

```javascript
router.use((req, res, next) => {
  console.log('Time:', Date.now());
  next();
});
```

You can also use middleware specifically for routes:

```javascript
router.get('/users/:userId', (req, res, next) => {
  console.log('Request Type:', req.method);
  next();
}, (req, res) => {
  res.send('User Info');
});
```

#### Route Handlers

You can provide multiple callback functions that behave like middleware to handle a request. The only difference is these callbacks might invoke `next('route')` to bypass the remaining route callbacks.

```javascript
router.get('/example/b',
  (req, res, next) => {
    console.log('the response will be sent by the next function ...');
    next();
  }, (req, res) => {
    res.send('Hello from B!');
});
```

#### Response Methods

The response object (`res`) has many methods to send a response back to the client:

- `res.send()`: Send a response of various types.
- `res.json()`: Send a JSON response.
- `res.sendFile()`: Send a file as an octet stream.
- `res.redirect()`: Redirect a request.
- `res.render()`: Render a view template.

#### Chaining Route Handlers

You can create chainable route handlers for a route path by using `router.route()`:

```javascript
router.route('/book')
  .get((req, res) => {
    res.send('Get a random book');
  })
  .post((req, res) => {
    res.send('Add a book');
  })
  .put((req, res) => {
    res.send('Update the book');
});
```

#### Modular Routers

For larger applications, you might want to break up your routing into separate modules. Each module can then be mounted on a parent router or the main application:

```javascript
// users.js
const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.send('User list');
});

module.exports = router;

// In app.js
const usersRouter = require('./users');
app.use('/users', usersRouter);
```

#### Router-Level Middleware

Just like application-level middleware, you can also define router-level middleware. It works the same way but is bound to an instance of `express.Router()`.

#### Router Instance Properties

The router instance has properties like `router.stack` which is an array of middleware functions.

#### Exemple

```js
const express = require('express');

const app = express();

  

const { getElementById, getIndexById, updateElement,

  seedElements, createElement } = require('./utils');

  

const PORT = process.env.PORT || 4001;

// Use static server to serve the Express Yourself Website

app.use(express.static('public'));

  

const expressions = [];

seedElements(expressions, 'expressions');

const animals = [];

seedElements(animals, 'animals');

  

// Get all expressions

app.get('/expressions', (req, res, next) => {

  res.send(expressions);

});

  

// Get a single expression

app.get('/expressions/:id', (req, res, next) => {

  const foundExpression = getElementById(req.params.id, expressions);

  if (foundExpression) {

    res.send(foundExpression);

  } else {

    res.status(404).send();

  }

});

  

// Update an expression

app.put('/expressions/:id', (req, res, next) => {

  const expressionIndex = getIndexById(req.params.id, expressions);

  if (expressionIndex !== -1) {

    updateElement(req.params.id, req.query, expressions);

    res.send(expressions[expressionIndex]);

  } else {

    res.status(404).send();

  }

});

  

// Create an expression

app.post('/expressions', (req, res, next) => {

  const receivedExpression = createElement('expressions', req.query);

  if (receivedExpression) {

    expressions.push(receivedExpression);

    res.status(201).send(receivedExpression);

  } else {

    res.status(400).send();

  }

});

  

// Delete an expression

app.delete('/expressions/:id', (req, res, next) => {

  const expressionIndex = getIndexById(req.params.id, expressions);

  if (expressionIndex !== -1) {

    expressions.splice(expressionIndex, 1);

    res.status(204).send();

  } else {

    res.status(404).send();

  }

});

  

// Get all animals

app.get('/animals', (req, res, next) => {

  res.send(animals);

});

  

// Get a single animal

app.get('/animals/:id', (req, res, next) => {

  const animal = getElementById(req.params.id, animals);

  if (animal) {

    res.send(animal);

  } else {

    res.status(404).send();

  }

});

  

// Create an animal

app.post('/animals', (req, res, next) => {

  const receivedAnimal = createElement('animals', req.query);

  if (receivedAnimal) {

    animals.push(receivedAnimal);

    res.status(201).send(receivedAnimal);

  } else {

    res.status(400).send();

  }

});

  

// Update an animal

app.put('/animals/:id', (req, res, next) => {

  const animalIndex = getIndexById(req.params.id, animals);

  if (animalIndex !== -1) {

    updateElement(req.params.id, req.query, animals);

    res.send(animals[animalIndex]);

  } else {

    res.status(404).send();

  }

});

  

// Delete a single animal

app.delete('/animals/:id', (req, res, next) => {

  const animalIndex = getIndexById(req.params.id, animals);

  if (animalIndex !== -1) {

    animals.splice(animalIndex, 1);

    res.status(204).send();

  } else {

    res.status(404).send();

  }

});

  

app.listen(PORT, () => {

  console.log(`Server is listening on ${PORT}`);

});

```


### CORS

#### What is CORS?

Resources on servers (like web pages) often make requests to load resources on other servers. In this article, you’ll learn how these requests are managed with CORS.

Although you may not notice it, the web pages you visit make frequent requests to load assets like images, fonts, and more, from many different places across the Internet. If these requests for assets go unchecked, the security of your browser may be at risk. For example, your browser may be subject to hijacking, or your browser might blindly download malicious code. As a result, many modern browsers follow _security policies_ to mitigate such risks.

#### What is a security policy?

Servers are used to host web pages, applications, images, fonts, and much more. When you use a web browser, you are likely attempting to access a distinct website (hosted on a server). Websites often request these hosted resources from different locations (servers) on the Internet. Security policies on servers mitigate the risks associated with requesting assets hosted on different server. Let’s take a look at an example of a security policy: _same-origin_.

The same-origin policy is very restrictive. Under this policy, a document (i.e., like a web page) hosted on server A can only interact with other documents that are also on server A. In short, the same-origin policy enforces that documents that interact with each other have the same _origin_.

An origin is made up of the following three parts: the protocol, host, and port number. The details of these individual parts aren’t necessary at the moment, but it is important to illustrate how the same-origin policy uses these parts.

Consider the following URL:

```
http://www.example.com/foo-bar.html
```

Let’s call it **URL1** (for short).

If you used a web browser to navigate from **URL1** to `http://www.example.com/hello-world.html`, you would be allowed to do so because the protocol (HTTP), host (example.com), and port (80) of each URL match one another. (Port 80 is the default port.) The same-origin policy requires that all parts of the origin match.

Navigating to `https://www.en.example.com/hello.html` from URL1, however, would not be allowed because of the different protocol (HTTPS) and host (en.example.com).

As you can see, not having a security policy can be risky, but a security policy like same-origin is a bit too restrictive. Thankfully, there are security policies that strike a mix of both, like _cross-origin_, which has evolved into the _cross-origin resource sharing_ standard, often abbreviated as CORS.

[![](https://content.codecademy.com/articles/what-is-cors/same-origin.svg)](https://content.codecademy.com/articles/what-is-cors/same-origin.svg)

#### What is CORS?

A request for a resource (like an image or a font) outside of the origin is known as a _cross-origin_ request. CORS (cross-origin resource sharing) manages cross-origin requests.

Once again, consider the following URL:

```
http://www.example.com/foo-bar.html
```

Let’s call it _URL1_ (for short).

Unlike same-origin, navigating to `https://www.ejemplo.com/hola.html` from **URL1** could be allowed with CORS. Allowing cross-origin requests is helpful, as many websites today load resources from different places on the Internet (stylesheets, scripts, images, and more).

Cross-origin requests, however, mean that servers must implement ways to handle requests from origins outside of their own. CORS allows servers to specify who (i.e., which origins) can access the assets on the server, among many other things.

You can think of these interactions as a building with a security entrance. For example, if you need to borrow a ladder, you could ask a neighbor in the building who has one. The building’s security would likely not have a problem with this request (i.e., same-origin). If you needed a particular tool, however, and you ordered it from an outside source like an online marketplace (i.e., cross-origin), the security at the entrance may request that the delivery person provide identification when your tool arrives.

[![](https://content.codecademy.com/articles/what-is-cors/cross-origin.svg)](https://content.codecademy.com/articles/what-is-cors/cross-origin.svg)

#### Why is CORS necessary?

The CORS standard is needed because it allows servers to specify not only who can access the assets, but also _how_ they can be accessed.

Cross-origin requests are made using the standard HTTP request methods. Most servers will allow `GET` requests, meaning they will allow resources from external origins (say, a web page) to read their assets. HTTP requests methods like `PATCH`, `PUT`, or `DELETE`, however, may be denied to prevent malicious behavior. For many servers, this is intentional. For example, it is likely that server A does not want servers B, C, or D to edit or delete its assets.

With CORS, a server can specify who can access its assets and which HTTP request methods are allowed from external resources.

#### How does CORS manage requests from external resources?

An HTTP header is a piece of information associated with a request or a response. Headers are passed back and forth between your web browser (also referred to as a client) and a server when the web page you are on wants to use resources hosted on a different server. Headers are used to describe requests and responses. The CORS standard manages cross-origin requests by adding new HTTP headers to the standard list of headers. The following are the new HTTP headers added by the CORS standard:

- `Access-Control-Allow-Origin`
- `Access-Control-Allow-Credentials`
- `Access-Control-Allow-Headers`
- `Access-Control-Allow-Methods`
- `Access-Control-Expose-Headers`
- `Access-Control-Max-Age`
- `Access-Control-Request-Headers`
- `Access-Control-Request-Method`
- `Origin`

These are all important, but let’s focus on the following header:

- `Access-Control-Allow-Origin`

The `Access-Control-Allow-Origin` header allows servers to specify how their resources are shared with external domains. When a `GET` request is made to access a resource on Server A, Server A will respond with a value for the `Access-Control-Allow-Origin` header. Many times, this value will be `*`, meaning that Server A will share the requested resources with _any_ domain on the Internet. Other times, the value of this header may be set to a particular domain (or list of domains), meaning that Server A will share its resources with that specific domain (or list of domains). The `Access-Control-Allow-Origin` header is critical to resource security.

You can find a description of each CORS header at the following: [CORS Headers](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers#CORS).

#### Pre-flight Requests

As mentioned before, most servers will allow `GET` requests but may block requests to modify resources on the server. Servers don’t just blindly block such requests though; they have a process in place that first checks and then communicates to the client (your web browser) which requests are allowed.

When a request is made using any of the following HTTP request methods, a standard _preflight_ request will be made before the original request.

- `PUT`
- `DELETE`
- `CONNECT`
- `OPTIONS`
- `TRACE`
- `PATCH`

Preflight requests use the `OPTIONS` header. The preflight request is sent _before_ the original request, hence the term “preflight.” The purpose of the preflight request is to determine whether or not the original request is safe (for example, a `DELETE` request). The server will respond to the preflight request and indicate whether or not the original request is safe. If the server specifies that the original request is safe, it will allow the original request. Otherwise, it will block the original request.

The request methods above aren’t the only thing that will trigger a preflight request. If any of the headers that are automatically set by your browser (i.e., user agent) are modified, that will also trigger a preflight request.

[![](https://content.codecademy.com/articles/what-is-cors/preflight.svg)](https://content.codecademy.com/articles/what-is-cors/preflight.svg)
#### How do I implement CORS?

Implementing the request headers to set up CORS correctly depends on the language and framework of the backend.

For example, if you are using Node, you can use `setHeader()`, as shown below:

```
response.setHeader('Content-Type', 'text/html');
```

If you are using Express, you can use CORS middleware:

```
$ npm install cors
```

```js
var express = require('express');
var cors = require('cors');
var app = express();

app.use(cors());
app.get('/hello/:id', function (req, res, next) {
	res.json({msg: 'Hello world, we are CORS-enabled!'});
});

app.listen(80, function () {  
	console.log('CORS-enabled web server is listening on port 80');
});
```

#### Conclusion

There are many resource sharing solutions for all web technologies. The overall concepts, however, will always be the same. By understanding security policies like CORS, you can understand how risky behavior — like downloading assets from external origins — are mitigated.




### Node and SQL

See [postgre](https://node-postgres.com/)

### Comparing SQL, query builders, and ORMs

Relational Databases

> This article was originally posted in [Prisma’s Data Guide](https://www.prisma.io/dataguide/types/relational/comparing-sql-query-builders-and-orms). [Prisma](https://www.prisma.io/) is an open-source ORM for Node.js and TypeScript that helps developers build faster and make fewer errors. [Prisma’s Data Guide](https://www.prisma.io/dataguide/) is an online, constantly expanding resource of tutorials and articles on databases with resources on how to choose databases, use them in your application, and understand how they work.
#### Introduction

Using a database to manage your application data is one of the most common choices for data persistence. Databases allow fast information storage and retrieval, provide data integrity guarantees, and offer persistence beyond the lifetime of an individual application instance. There are [countless types of databases available](https://www.prisma.io/dataguide/intro/comparing-database-types) to meet your project’s requirements and your preferences.

However, working directly with databases from your application isn’t always easy. Differences in the way data structures are represented often leads to challenges. The difficulty in expressing subtleties about relationships between different entities can also cause issues. To address this, many different tools have been created to help act as an interface between the core application and the data layer.

In this guide, we’ll look at some of the differences that arise between three common approaches: raw SQL, query builders, and ORMs (object-relational mappers). We’ll compare some of the benefits and drawbacks of each approach and then finish with a glossary of commonly used terms to help familiarize yourself with some key concepts.

As a simplified summary, here is a general view of each approach’s strengths and weaknesses:

|Approach|Database / Programming focused|Hands-on management|Level of abstraction|Level of complexity|
|---|---|---|---|---|
|Raw SQL|database-oriented|high|none|low|
|Query builders|mixed|low|low|low|
|ORMs|programming-oriented|low|high|high|

---

#### Managing data with raw SQL or another database-native querying language

Some applications interface directly with the database by writing and executing queries using the native language supported by the database engine. Often, a database driver is all that is needed to connect, authenticate, and communicate with the database instance.

Developers can send queries written in the database’s native language through the connection. In return, the database will provide the query results, also in one of its native formats. For many relational databases, the querying language of choice is SQL.

Most [relational databases](https://en.wikipedia.org/wiki/Relational_database), as well as some non-relational databases, support [structured query language](https://en.wikipedia.org/wiki/SQL), also known as SQL, to build and execute powerful queries. SQL has been used to manage data since the 1970s, so it is well-supported and standardized to a degree.

### Benefits of native querying

Using SQL or another database-native language has some clear benefits.

One advantage is that developers write and manage the database queries and handle the results explicitly. While this can be a lot of additional work, it means that there are few surprises in terms of what the database is storing, how it is representing your data, and how it will supply that data when it is retrieved later. The lack of abstraction means that there are fewer “moving parts” that can lead to uncertainty.

One example of this is performance. While sophisticated abstraction layers generate SQL queries by translating programming statements, the generated SQL can be very inefficient. Unnecessary clauses, overly broad queries, and other mishaps can lead to slow database operations that can be fragile and difficult to debug. By writing natively in SQL, you can employ all of your domain knowledge and common sense to avoid many classes of querying problems

Another reason to use database-native querying is flexibility. No abstraction is likely to be able to be as flexible as the native database querying language. Higher levels of abstraction attempt to bridge the gap between two different paradigms, which can restrict the types of operations they can express. When writing in raw SQL, however, you can take advantage of all of the features of your database engine and express more complex queries.

### Drawbacks of native querying

While native querying has some definite strong points, it is not without its problems.

When interacting with a database from an application using plain SQL, you must understand the underlying data structure in order to compose valid queries. You are completely responsible for translating between the data types and structures that your application employs and the constructions available within the database system.

Another thing to keep in mind when working with raw SQL is that it is entirely up to you to manage the safety of your input. This is especially true if you are storing data provided by external users, where specially crafted input could induce your database to exposing information you hadn’t intended to allow.

This type of exploit is called [SQL injection](https://en.wikipedia.org/wiki/SQL_injection) and is a potential issue whenever user input can affect the database state. Higher abstraction tools often sanitize user input automatically, helping you avoid this class of problems.

Working with native querying languages almost always means composing queries with regular strings. This can be a painful process in cases where you must escape input and concatenate strings together to create a valid query. Your database operations can become wrapped up in many layers of string manipulation that has a high potential to accidentally mangle data.

### Native querying summary

While we’ve primarily talked about SQL in this section, most of the information here applies equally well to any native database querying language. To summarize, raw SQL or direct use of any equivalent querying language gets you closest to the abstractions used by the database to store and manage the data, but forces you to do all of the heavy lifting of managing your data manually.

### Managing data with query builders

An alternative approach to using database-native querying languages like SQL is to use a tool or library called a query builder to talk to your database.

##### What are SQL query builders?

An SQL query builder adds a layer of abstraction above raw database-native querying languages. They do this by formalizing querying patterns and providing methods or functions that add input sanitation and automatically escape items for easier integration into applications.

The structures and actions supported by the database layer are still fairly recognizable when using SQL query builders. This allows you to work with data programmatically while still remaining relatively close to the data.

Usually, query builders provide an interface that uses methods or functions to add a condition to a query. By chaining methods together, developers can compose complete database queries from these individual “clauses”.

### Benefits of SQL query builders

Because query builders use the same constructions (methods or functions) as the rest of your application, developers often find them easier to manage long-term than raw database queries written as strings. It is simple to tell the difference between operators and data and it is easy to decompose queries into logical chunks that handle specific parts of a query.

For some developers, another advantage of using a SQL query builder is that it doesn’t always hide the underlying querying language. Although the operations might use methods instead of strings, it can be fairly transparent, which makes it easier for those familiar with the database to understand what an operation will do. This isn’t always the case when using greater levels of abstraction.

SQL query builders often also support multiple data backends, abstracting some of the subtle differences in various relational databases, for instance. This allows you to use the same tools for projects that use different databases. It may even make migrating to a new database slightly easier.

##### Drawbacks of SQL query builders

SQL query builders suffer from a few of the same disadvantages as native querying languages.

One popular criticism is that SQL query builders still require you to understand and account for the database’s structures and capabilities. This is not a useful enough abstraction for some developers. This means that you must have a fairly good grasp of SQL in addition to the specific syntax and capabilities of the query builder itself.

Additionally, SQL query builders still require you to define how the data you retrieve relates to your application data. There is no automatic synchronization between your in-memory objects and those in the database.

While query builders often emulate the querying language they are designed to work with, the additional layer of abstraction can mean that sometimes certain operations are not possible using the provided methods. Usually, there is a “raw” mode to send queries directly to the backend, bypassing the query builder’s typical interface, but this sidesteps the problem rather than solving it.

##### Summary of SQL query builders

Overall, SQL query builders offer a thin layer of abstraction that specifically targets some of the major pain points of working directly with database-native languages. SQL query builders almost function as a templating system for querying, allowing developers to walk the line between working directly with the database and adding additional layers of abstraction.

---

#### Managing data with ORMs

A step further up the abstraction hierarchy are ORMs. ORMs generally aim for a more complete abstraction with the hope of integrating with the application data more fluidly.

##### What are ORMs?

[Object-relational mappers](https://en.wikipedia.org/wiki/Object-relational_mapping), or ORMs, are pieces of software dedicated to translating between the data representations in relational databases and the representation in memory used with object-oriented programming (OOP). The ORM provides an object-oriented interface to data within the database, attempting to use familiar programming concepts and reduce the amount of boilerplate code necessary in order to speed up development.

In general, ORMs serve as an abstraction layer meant to help developers work with databases without drastically changing the object-oriented paradigm. This can be helpful by reducing the mental load of adapting to the specifics of a database’s storage format.

In particular, objects in object-oriented programming tend to encode a lot of states within them and can have complex relationships with other objects through inheritance and other OOP concepts. Mapping this information reliably into a table-oriented relational paradigm is often not straightforward and can require a good understanding of both systems. ORMs attempt to lighten this burden by automating some of this mapping and by providing expressive interfaces to the data within the system.

##### Are the challenges of ORMs specific to object-oriented programming and relational databases?

By definition, ORMs are specifically designed to interface between object-oriented application languages and relational databases. However, trying to map and translate between the data structure abstractions used within programming languages and those used by database stores is a more general problem that can exist whenever abstractions don’t align cleanly.

Depending on the programming paradigm (object-oriented, functional, procedural, etc.) and the database type (relational, document, key-value, etc.), different amounts of abstraction might be helpful. Oftentimes, the complexity of the data structures within the application dictates how easy it is to interface with the data store.

Object-oriented programming tends to produce a lot of structures with significant states and relationships that must be accounted for. Some other programming paradigms are more explicit about where the state is stored and how it is managed. For instance, purely functional languages don’t allow mutable states, so a state is often an input for functions or objects that output a new state. This clean separation of data from actions, as well as the explicitness of state life cycles, can help simplify the interaction with the database.

Either way, the option to interface with a database through software that maps between two different representations is often available. So while ORMs describe a specific subset of these with unique challenges, mapping between application memory and persistent storage often requires consideration regardless of details.

##### Active record vs data mapper ORMs

Different ORMs employ different strategies to map between application and database structures. The two major categories are the active record pattern and the data mapper pattern.

The [active record pattern](https://en.wikipedia.org/wiki/Active_record_pattern) attempts to encapsulate the database’s data within the structure of objects within your code. Objects contain methods to save, update, or delete from the database, and changes to your objects are meant to be easily reflected in the database. In general, an active record object in your application represents a record within a database.

Active record implementations allow you to manage your database by creating and connecting classes and instances within your code. Since these generally map class instances directly to database records, it is easy to conceptualize what is in your database if you understand what objects are used in your code.

Unfortunately, this can also come with some [major downsides](http://calpaterson.com/activerecord.html). Applications tend to be very tightly coupled with the database, which can cause problems when trying to migrate to a new database or even when testing your code. Your code tends to rely on the database to fill in gaps that were offloaded from your objects. The “magic” translation between these two domains can also lead to performance problems as the system tries to seamlessly map complex objects to the underlying data structure.

The [data mapper pattern](https://en.wikipedia.org/wiki/Data_mapper_pattern) is the other common ORM pattern. Like the active record pattern, the data mapper attempts to act as an independent layer between your code and your database that mediates between the two. However, instead of trying to seamlessly integrate objects and database records, it focuses on trying to decouple and translate between them while letting each exist independently. This can help separate your business logic from database-related details that deal with mappings, representation, serialization, etc.

So rather than letting the ORM system figure out how to map between the objects and the database tables, the developer is responsible for explicitly mapping between the two. This can help avoid tight coupling and behind-the-scenes operations at the expense of significantly more work in figuring out appropriate mappings.

##### Benefits of ORMs

ORMs are popular for many reasons.

They help abstract the underlying data domain to something that is easy to reason about within the context of your application. Rather than thinking of data storage as an independent system, ORMs help you access and manage data systems as an extension of your current work. This can help developers work faster on core business logic instead of getting bogged down in the nuances of their storage backends.

Another side effect of this is that ORMs remove a lot of the boilerplate necessary to interface with databases. ORMs often come with migration tools that help you manage database schema changes based on changes made in your code. You don’t need to necessarily figure out the perfect database schema up front if your ORM can help manage changes to the database structure. Your application and database changes are often the same thing or closely related, which helps track changes to your database as you make changes to your code.

##### Drawbacks of ORMs

ORMs are not without their flaws. In many cases, these arise from the same decisions that make ORMs useful.

One of the fundamental problems with ORMs is the attempt at hiding the details of the database backend. This obfuscation makes working with ORMs easier in simple cases or on small time scales but often leads to problems down the line as complexity grows.

The abstraction is never 100% complete and attempting to use an ORM without understanding the underlying querying language or database structure often leads to problematic assumptions. This can make debugging and performance tuning difficult or impossible.

Perhaps the most well-known problem of working with ORMs is [object-relational impedance mismatch](https://en.wikipedia.org/wiki/Object-relational_impedance_mismatch), a term used to describe the difficulty of translating between object-oriented programming and the relational paradigm used by relational databases. The incompatibilities between the data models used by these two categories of technology mean that additional, imperfect abstraction is necessary with every increase in complexity.

In general, ORMs tend to be slower than alternatives, especially with complex queries. ORMs often generate complicated queries for relatively simple database operations, because they employ general patterns that must be flexible enough to handle other cases. The reliance on the ORM to do the right thing in all circumstances can lead to costly mistakes that can be hard to catch up front.

##### Summary of ORMs

ORMs can be useful abstractions that make working with databases a lot easier. They can help you design and iterate quickly and bridge the conceptual differences between the application logic and database structures. However, many of these advantages act as a double-edged sword. They can prevent you from understanding your databases and can make it challenging to debug, change paradigms, or increase performance.

#### Glossary

When working with technologies that interface between databases and applications, you might encounter some terminology that you’re not familiar with. In this section, we’ll briefly go over some of the most common terms you might come across, some of which were covered earlier in this article and some of which were not.

- **Data mapper**: A [data mapper](https://www.martinfowler.com/eaaCatalog/dataMapper.html) is a design pattern or piece of software that maps programming data structures to those stored in a database. Data mappers attempt to synchronize changes between the two sources while keeping them independent of each other. The mapper itself is responsible for maintaining a working translation, freeing developers to iterate the application data structures without concern for the database representation.
    
- **Database driver**: A [database driver](https://en.wikipedia.org/wiki/Open_Database_Connectivity#Drivers_and_Managers) is a piece of software designed to encapsulate and enable connections between an application and a database. Database drivers abstract the low-level details of how to make and manage connections and provide a unified, programmatic interface to the database system. Typically, database drivers are the lowest level of abstraction that developers use to interact with databases, with higher-level tools building on the capabilities provided by the driver.
    
- **Injection attack**: An [injection attack](https://en.wikipedia.org/wiki/SQL_injection) is an attack in which a malicious user attempts to execute unwanted database operations using specially crafted input in user-facing application fields. Often, this is used to retrieve data that should not be accessible or to delete or mangle information in the database.
    
- **ORM** : [ORMs](https://en.wikipedia.org/wiki/Object-relational_mapping), or object-relational mappers, are abstraction layers that translate between the data representations used in relational databases and the representation in memory used with object-oriented programming. The ORM provides an object-oriented interface to data within the database, attempting to reduce the amount of code and use familiar archetypes to speed up development.
    
- **Object-relational impedance mismatch**: Object-relational impedance mismatch refers to the difficulty of translating between an object-oriented application and a relational database. Since the data structures vary significantly, it can be difficult to faithfully and performantly mutate and transcribe the programmatic data structures to the format used by the storage backend.
    
- **Persistence framework**: A [persistence framework](https://en.wikipedia.org/wiki/Persistence_framework) is a middleware abstraction layer developed to bridge the gap between program data and databases. Persistence frameworks may also be ORMs if the abstraction they employ maps objects to relational entities.
    
- **Query builder**: A [query builder](https://softwareengineering.stackexchange.com/q/138115) is an abstraction layer that helps developers access and control databases by providing a controlled interface that adds usability, safety, or flexibility features. Typically, query builders are relatively lightweight, focus on easing data access and data representation, and do not attempt to translate the data into a specific programming paradigm.
    
- **SQL**: [SQL](https://en.wikipedia.org/wiki/SQL), or structured query language, is a domain-specific language developed for managing relational database management systems. It can be used to query, define, and manipulate data within a database as well as its organizational structures. SQL is ubiquitous among relational databases.
    

---

#### Conclusion

In this article, we took a look at a few different options for interfacing with your database from your application. We examined the different levels of abstraction and the flexibility offered by using database-native querying languages like SQL, using a query builder to help safely craft queries, and ORMs to provide a more complete level of abstraction.

Each of these approaches has its uses and some may be well-suited for certain types of applications than others. It is important to understand your application requirements, your organization’s database knowledge, and the costs of the abstractions (or lack thereof) that you choose to implement. Overall, understanding each approach will give you the best chance of selecting the option that will be a good fit for your projects.

### Introduction to Deployment

Learn how developers transform a problem into a developed solution and deliver it to end-users through the concept of deployment!

#### Introduction

Imagine we have just finished creating an e-commerce web application that allows users to buy and sell clothing. The application code, database, and assets (e.g., images) are located on a personal computer (our “machine”). How do we make our application available to users to interact with over the internet? That is where deployment comes into play!

We can think of **deployment** as a set of activities that make a piece of software available for other users. Before the invention of the internet, deployment looked like storing software on floppy disks or CD-ROMs, shipping them to users, and having those users manually install the software on their own devices. This process was slow and expensive, and many bugs slipped through the cracks. Today, software can be deployed via the internet with greater ease and speed of delivery than ever before. However, deployment isn’t as simple as clicking a big red button labeled “deploy”. There are multiple activities and processes involved to ensure that deployment occurs with no issues.

To explore deployment, in this article, we will explore:

- [Deployment in the software development life cycle](https://www.codecademy.com/paths/back-end-engineer-career-path/tracks/becp-22-deploying-a-server/modules/becp-23-deploying-back-ends-with-render/articles/introduction-to-deployment#heading-deployment-in-the-software-development-life-cycle-sdlc)
- [The typical deployment process for software engineering teams](https://www.codecademy.com/paths/back-end-engineer-career-path/tracks/becp-22-deploying-a-server/modules/becp-23-deploying-back-ends-with-render/articles/introduction-to-deployment#heading-typical-deployment-process)

Let’s jump into the world of deployment!

#### Deployment in the Software Development Life Cycle (SDLC)

Before an application can be deployed, several steps must occur. For example, for our e-commerce application, we likely spent a large chunk of time planning features, writing code, and testing that the code works. These steps are part of a process known as the **Software Development Life Cycle (SDLC)**. The SDLC is a structured cycle of steps used to create high-quality software. While a few slightly different variations of the life cycle are used by software engineering teams, the phases typically include:

1. **Planning**: This first phase of the SDLC involves defining the problem to solve, and any objectives or requirements the software should meet are gathered.
    
2. **Defining/Analysis**: After developing a solid plan, information must be gathered before software engineers can create the new software. This could include defining what resources (like hardware or network) will be needed to run a prototype of the software or even research to find existing or similar software.
    
3. **Design**: In this phase, the technical details of the project are designed. The requirements gathered in the planning phase are transformed into concrete specifications.
    
4. **Development/Implementation**: The software starts to come alive within this stage as the code is built. This is when code is written to meet the specifications and goals of the software.
    
5. **Testing/Integration**: Testing is a crucial step in the SDLC. This step confirms that all of the software components are working seamlessly together. Any major issues or bugs are ideally caught during this stage prior to the application reaching the hands of the users.
    
6. **Deployment**: In this phase, a version of the software is packaged and made available so it can be used by other members of the development team (e.g., QA engineers), non-development team members (e.g., project managers), or real users. During the deployment process, the software can be tried out on different environments, like, for example, a testing environment only available to beta users (more on this later).
    
7. **Maintenance**: Lastly, once the software is out in the world, it is crucial to maintain it. This phase involves fixing bugs, as well as the continued development of new features. Any changes follow the same SDLC cycle of defining the problem (bug/feature), designing a solution, implementing the fix, testing, and deployment.
    

When visualized, the process looks like this:

![A diagram that shows the 7 steps of the Software Development Lifecycle progressing from one step to the other in the shape of a circle with step 7 maintenance connecting back to step 1](https://static-assets.codecademy.com/Courses/deploy-with-render/ART_2056_(SDLC).svg)

Each phase of the SDLC can be broken down into a series of activities needed to complete that phase. For example, in the development phase, teams might engage in the following activities:

- Team members splitting up and assigning the work of specific features
- Team members writing the code for their assigned features
- Team members reviewing each other’s code when it is complete

Similarly, the deployment phase also includes various activities. Let’s dive a bit deeper into the deployment phase and explore what the typical deployment process looks like.

#### Typical Deployment Process

In most software engineering teams, developers deploy code across multiple **environments** during the development process. An environment is the subset of infrastructure resources (e.g., computers, memory) used to execute a program under specific constraints. Though the names of environments may vary, a common set of environments includes:

- The local development environment: This is where software is first written and tested, typically on a developer’s own computer.
- The staging environment: This is where the software can be tested in a production-like environment, but before real users are involved.
- The production environment: This is where software is accessible by real users!

![Diagram of the deployment process as broken down into local development, staging, and production environments](https://static-assets.codecademy.com/Courses/DevOps/intro-course/What-is-deployment-environments.svg)

If we refer to the above SDLC process, this means that even though deployment is listed after the development and testing phases, in most cases, developers also deploy software between development and testing, typically into the staging environment. Once the code is properly tested in the staging environment, it can be deployed into the production environment. The deployment at this stage is typically also referred to as the **software release**, where it becomes available for non-development team users.

Additionally, most software engineering teams use automated deployment tools to handle the heavy lifting of moving software between environments and can deploy code multiple times a day (or on a custom schedule)! There are a vast number of deployment tools available. ​Some popular options include [Render](https://render.com/), [Amazon Web Services](https://aws.amazon.com/), and [Google Cloud Platform](https://cloud.google.com/).



### Introduction to Deployment with Render

Learn how to get set up and started with Render in order to deploy your applications!

#### Introduction

For most modern software engineering teams, deployment plays a key role in ensuring software can eventually be accessed by an end-user. The deployment process can be complex and, at times, involves the collaboration of multiple engineering team members. It requires careful planning and execution to ensure the software is deployed smoothly. In recent years, [cloud-based](https://www.codecademy.com/resources/docs/cloud-computing) deployment solutions have become a popular option for helping developers quickly deploy applications without requiring extensive infrastructure or technical expertise.

In this article, we will:

- [Examine one type of cloud-based deployment solution called a PaaS](https://www.codecademy.com/paths/back-end-engineer-career-path/tracks/becp-22-deploying-a-server/modules/becp-23-deploying-back-ends-with-render/articles/introduction-to-deployment-with-render#heading-platform-as-a-service-paas)
- [Explore a popular PaaS provider called Render](https://www.codecademy.com/paths/back-end-engineer-career-path/tracks/becp-22-deploying-a-server/modules/becp-23-deploying-back-ends-with-render/articles/introduction-to-deployment-with-render#heading-introduction-to-render)
- [Break down how Render handles deployment](https://www.codecademy.com/paths/back-end-engineer-career-path/tracks/becp-22-deploying-a-server/modules/becp-23-deploying-back-ends-with-render/articles/introduction-to-deployment-with-render#heading-introduction-to-render)
- [Setup a Render account](https://www.codecademy.com/paths/back-end-engineer-career-path/tracks/becp-22-deploying-a-server/modules/becp-23-deploying-back-ends-with-render/articles/introduction-to-deployment-with-render#heading-getting-started-with-render)
- [Explore the plan options that Render offers](https://www.codecademy.com/paths/back-end-engineer-career-path/tracks/becp-22-deploying-a-server/modules/becp-23-deploying-back-ends-with-render/articles/introduction-to-deployment-with-render#heading-render-plans-and-services)

Let’s get started!

#### Platform as a Service (PaaS)

One popular type of cloud-based deployment solution is called a Platform as a Service (PaaS). A **PaaS** is an all-in-one platform for building, deploying, and managing applications over the internet. A PaaS often uses a set of assumptions about the things most software teams need as a way of simplifying the complex task of setting up infrastructure. This allows developers to no longer have to focus on setting up and managing resources and infrastructure on their own. Most PaaS providers offer an easy-to-use user interface that lets developers tweak the setup to meet their application’s needs. They typically charge a per-usage fee to utilize their infrastructure, but some offer free, resource-limited tiers.

Other benefits of using a PaaS provider include the following:

- The PaaS provider handles the building and running of the developer’s code
- Some PaaS providers offer additional resources, such as databases, for the developer to integrate and use within the project
- The PaaS provider handles the regular upgrades and maintenance of the infrastructure components
- The PaaS provider may handle some security aspects of the infrastructure
- The PaaS provider may provide options for easily scaling resources, either manually or automatically, to accommodate a growing number of users that are using the application

While there are plenty of PaaS providers, in this article, we will focus on exploring a PaaS called Render.

#### Introduction to Render

[Render](https://render.com/) is a popular PaaS product that handles the building and deployment of code and provides the resources necessary to host various applications and services. By using Render for deployment, we can quickly deploy a running prototype of an application to potential users. Render supports several different programming languages, including Python, Ruby, and Javascript. Render also offers other features such as managed databases, static site hosting, and integration with popular developer tools like GitHub and Slack.

To dive into the basics of how Render handles deployment, let’s imagine we have a simple, completed e-commerce application. Let’s assume two things:

We have finished developing our application, and all of our code is hosted within a GitHub repository. Our application is a full-stack application with both a front-end and a back-end. Our back-end component uses Express.js and is powered by a PostgreSQL (PSQL) database. Our front-end component is simple HTML and CSS files, as well as some static assets like images.

For us to use Render as our deployment solution for our full-stack application, we will need to connect Render to the GitHub repository. The dashboard to connect a repository will look similar to this:

![Render-GitHub-Repo](https://static-assets.codecademy.com/Courses/heroku-audit/Introduction-to-Deployment-with-Render-Screenshots/render-github-connection.png)

Notice in the dashboard above, a GitHub account (“Codecademy-Curriculum”) is connected on the right-hand side. We can then select the specific repository we want to connect.

Connecting Render to a repository provides Render the access required to deploy our application’s code but does not automatically handle hosting and connecting our PSQL database server. Fortunately, Render provides a cloud-hosted [PSQL database service](https://render.com/docs/databases) that can be used with our application. We can create a cloud database and have several options for accessing the database from an application’s server-side code. Render also provides steps for taking a backup of existing database data and importing it into the newly created, Render-hosted database so that data can be easily transferred.

We can create a new PostgreSQL service via the Render dashboard. The setup will look similar to this:

![PSQL Service](https://static-assets.codecademy.com/Courses/heroku-audit/Introduction-to-Deployment-with-Render-Screenshots/PSQL-Service.png)

Once the application code and database are connected, the final step is to ensure that our deployed application can be accessed by users over the Internet. Any application that is deployed via Render is provided a free publicly available URL link that resembles `<your-web-service-name>.onrender.com`. We can also customize the domain with a custom name at a later point!

Visually, the architecture of the setup resembles this:

![Render Architecture](https://static-assets.codecademy.com/Courses/heroku-audit/ART-2057-%5BHeroku-Audit%5D-Render-Architecture-v2.svg)

To summarize:

- Our application code lives in the GitHub repository and is connected to Render
- Render handles setting up the application’s infrastructure and deploying the code.
- The application code connects to the Render-hosted PostgreSQL database using the connection information provided by Render upon database setup.
- When the application is ready, it is made publicly available via a `.onrender.com` domain

Note that, once connected, any commits made to the repository will result in Render automatically deploying the application. This setting is called “Auto Deploy.” It can be turned off if we do not want Render to deploy our application with each new commit automatically.

Now, let’s take the first step of working with Render (and eventually setting up our own applications), by signing up for an account. Throughout the process, we will explore more about the features and services that Render offers!

**Before moving on, let’s review:**

Free response

In your own words, describe some advantages of using a PaaS service like Render to deploy an application.

Submit Response

Stuck? Get a Hint

#### Getting Started with Render

Let’s create a Render account so that we can start deploying our own applications! First, navigate to the [Render sign-up page](https://dashboard.render.com/register). Render allows new users to sign up with a GitHub, GitLab, or Google account or by using an email and creating a password. By default, when we sign up, we start with a free Individual plan (more on plans in a bit).

![Render Sign Up](https://static-assets.codecademy.com/Courses/heroku-audit/Introduction-to-Deployment-with-Render-Screenshots/Render-Signup.png)

Once logged in, since we don’t have any services set-up already, Render will present a dashboard listing all the application and service types that can be deployed. It will look similar to this:

![Render First Time Dashboard](https://static-assets.codecademy.com/Courses/heroku-audit/Introduction-to-Deployment-with-Render-Screenshots/Render-first-time.png)

Notice two services that would come in handy for our example application from earlier. The first is called “[Web Services](https://render.com/docs/web-services)“. This service allows us to deploy web applications using multiple frameworks and languages. Render even provides quick templates for different frameworks to get an application running quickly. The second is the PostgreSQL service. This service lets us set up a cloud PSQL database that is managed by Render.

Additionally, while viewing the Render dashboard, notice that some of the services, like the Private Services option, require a paid plan subscription. A paid service will require payment information to be entered before it can be configured and created.

Let’s briefly cover the plan options that Render offers.

##### Render Plans and Services

Render offers several plans to meet the needs of an individual or team. Any plan other than “Individual” offers the ability to add multiple team members to the account and additional features such as automatic resource scaling, more application bandwidth, and even additional support from the Render team.

![Render Pricing](https://static-assets.codecademy.com/Courses/heroku-audit/Introduction-to-Deployment-with-Render-Screenshots/render-pricing.png)

It is important to note that plans are separate from the individual instances of computing power used by an account. For each service we choose to use, we can choose the “Instance Type” we think is the best fit for the service. Higher-tier instance types provide increased resource (e.g., RAM, CPU) allocation. Here is the computing cost chart for a “Web Service”:

![Render Web Service Pricing](https://static-assets.codecademy.com/Courses/heroku-audit/Introduction-to-Deployment-with-Render-Screenshots/render-pricing-2.png)

For example, if we wanted to upgrade our compute plan for an application to the “Starter” instance type tier (from “Free”), we would gain additional CPU resources, which provides benefits such as faster build times and unlimited usage hours. However, no matter the account type we use, we are always given access to a “Free” instance type which, regardless of the limitations, can be useful for experimentation.

For both the Web Service and the Postgres Service, here are the limitations to be aware of for a “Free” instance:

|Render Service|Free Instance Limitations|
|---|---|
|Web Services (e.g., Express.js)|- Service is spun down after 15 minutes of inactivity<br>- Cannot scale manually or automatically<br>- Slower builds|
|PostgreSQL database|- Database expires 90 days after creation<br>- Only one free database active at a time<br>- Limit to 1GB of storage<br>- Limit to 256MB of RAM<br>- Not backed up|

Full details of all of Render’s plan and compute tiers, as well as the features offered within each, can be found [here](https://render.com/pricing).

#### Wrap Up

In this article, we familiarized ourselves with the basics of what deployment is and how PaaS products can help simplify the process. We also took a look at what Render, which is an example of a PaaS product, offers. Let’s recap what was covered:

- A Platform as a Service (PaaS) is one type of cloud-based deployment solution that handles the hardware, software, and networking resources for a project to get the project up and running for users
- Render is a type of PaaS provider that offers many advantages for deploying applications and services
- Render connects to a code repository in order to build and deploy the application code
- A Render account can be easily set up using an email and password or through linking an existing GitHub, GitLab, or Google account
- Render offers several tiers of paid subscription plans, but also has a free, Individual Plan geared towards hobbyists, students, and learners
- Several features and limitations come with the free, Individual Plan and free instance types you can use within Render

We have only covered the most basic features and capabilities available during the process of deployment via Render. To explore more Render features, take a look over the [documentation](https://render.com/docs), explore the Render [community](https://www.codecademy.com/paths/back-end-engineer-career-path/tracks/becp-22-deploying-a-server/modules/becp-23-deploying-back-ends-with-render/articles/community.render.com) (a great place for help with troubleshooting), and read more about [Render’s free tier](https://www.codecademy.com/paths/back-end-engineer-career-path/tracks/becp-22-deploying-a-server/modules/becp-23-deploying-back-ends-with-render/articles/render.com/docs/free).

#### Introduction

In today’s fast-paced digital landscape, it’s crucial to have reliable and efficient deployment processes for applications. With popular Platform as a Service (PaaS) products like [Render](https://render.com/), we can set up and launch our applications to end-users quickly and efficiently.

In this tutorial, we will practice deploying a simple application using Render and go over:

- [Forking a sample Render code repository on GitHub](https://www.codecademy.com/paths/back-end-engineer-career-path/tracks/becp-22-deploying-a-server/modules/becp-23-deploying-back-ends-with-render/articles/deploying-a-simple-application-with-render#heading-forking-a-sample-render-application)
- [Connecting a GitHub repository to Render](https://www.codecademy.com/paths/back-end-engineer-career-path/tracks/becp-22-deploying-a-server/modules/becp-23-deploying-back-ends-with-render/articles/deploying-a-simple-application-with-render#heading-deployment-with-render)
- [Configuring a web service deployment](https://www.codecademy.com/paths/back-end-engineer-career-path/tracks/becp-22-deploying-a-server/modules/becp-23-deploying-back-ends-with-render/articles/deploying-a-simple-application-with-render#heading-configuring-a-web-service)
- [Deploying a new Render web service](https://www.codecademy.com/paths/back-end-engineer-career-path/tracks/becp-22-deploying-a-server/modules/becp-23-deploying-back-ends-with-render/articles/deploying-a-simple-application-with-render#heading-building-and-deploying-the-web-service)

> Note: This tutorial requires access to a GitHub account and assumes familiarity with using GitHub. If you are unfamiliar with GitHub or need help setting up an account, we recommend visiting the [Learn GitHub: Introduction](https://www.codecademy.com/learn/learn-github-introduction) course first.

Let’s get started!

#### Forking a Sample Render Application

To get started with deploying with Render, we will first need an application. We can use an existing application we have written previously or one provided by Render. Render provides a few different [sample applications](https://github.com/render-examples) that span a variety of popular languages and frameworks. These applications are hosted on GitHub that can be used for quickly setting up, configuring, and testing the deployment process.

For the purposes of this tutorial, we will be using the [`express-hello-world`](https://github.com/render-examples/express-hello-world) sample application, which is a simple web application built with Node.js and Express.js. While knowing Node.js or Express.js may help and provide context, it is not necessary to have prior experience with either. The full application code is provided by the Render team and we will be forking the code repository. To fork the repository, click the “Fork” button on the top-right corner.

![Screenshot of Render's sample github repo showing the placement of the fork button, located between the "watch" and "star" buttons](https://static-assets.codecademy.com/Courses/heroku-audit/Introduction-to-Deployment-with-Render-Screenshots/fork-example-repo.png)

We will need to configure a few settings to fork the repository correctly for this tutorial:

- Ensure the GitHub username is correct.
- Select a name for the forked repository. The name can also be left as the default, original repository name.
- Add an optional description describing what this code repository does. This field can also be left as the default, original repository description.
- We are only interested in the code found in the `main` branch for our application, so leave that checkbox selected.

When completed, the settings should look something like this:

![Screenshot of fork settings fields including Owner, repository name, description, and a checkbox to copy the "main" branch only](https://static-assets.codecademy.com/Courses/heroku-audit/Introduction-to-Deployment-with-Render-Screenshots/fork-settings.png)

Once the settings are confirmed, click the “Create fork” button. Then, take a moment to browse the files in the repository. Notice that the repository has a file called `app.js`, which holds the main HTML and JavaScript code used to display the web application content. Two more files, `yarn.lock` and `package.json` can also be found in the repository and are used to build and deploy the application. Don’t worry too much about the files just yet, we will have a chance to explore them once we create more complicated deployments.

Now, with our forked repository, we can start learning how to deploy it using Render!

#### Deployment with Render

To start the process of deployment, we need to navigate to the [Render dashboard](https://dashboard.render.com/) (make sure to be logged in to see the dashboard). From the top-right of the menu, we can click the blue, “New +” button to configure our deployment. From the dropdown, select the “Web Service” option to deploy our application to a web server.

![Screenshot showing Render's options after clicking the "New +" button, revealing a "Web Service" option](https://static-assets.codecademy.com/Courses/heroku-audit/Introduction-to-Deployment-with-Render-Screenshots/New-web-service.png)

Once a service is selected, we will need to select our method to deploy the web service. In this case we’ll select “Build and deploy from a Git repository”:

[Screenshot showing the two options to “build and deploying from a git repository” or “deploy an existing image from a registry”](https://static-assets.codecademy.com/Courses/deploy-with-render/deploy-simple/render_options_for_connecting.png)

Now we will need to connect a GitHub or GitLab account and repository. For this tutorial, we’ll stick with GitHub. The page will look like:

![Screenshot displaying the "Create a new Web Service" page that prompts the user to connect to a GitHub or GitLab account](https://static-assets.codecademy.com/Courses/deploy-with-render/deploy-simple/connecting_github_or_gitlab.png)

After choosing to connect a GitHub account, we should be able to install Render on our GitHub account for all repositories repository or select specific repositories we want to deploy as a web service. It should look like this:

![Screenshot displaying the "Install Render" page that prompts the user to install Render on their personal GitHub account](https://static-assets.codecademy.com/Courses/deploy-with-render/deploy-simple/render_repo_access.png)

With Render installed on our GitHub account, we’ll be navigated back to the Render site to choose the repository we would like to connect to.

![Screenshot displaying the "Create a new Web Service" page that shows repositories connected to a GitHub account](https://static-assets.codecademy.com/Courses/heroku-audit/Introduction-to-Deployment-with-Render-Screenshots/Connect-repo-to-service.png)

Select the “Connect” button to give Render permission to access the forked repository from earlier. Once it finishes connecting, we can start configuring the deployment.

#### Configuring a Web Service

To start, notice that Render has automatically detected the type of code we are using in our application to determine the environment needed for deployment.

![Render's message that shows auto detect, alerting the user that it has detected node and autofilled fields accordingly, but reminding users to still check over the values](https://static-assets.codecademy.com/Courses/heroku-audit/Introduction-to-Deployment-with-Render-Screenshots/Node-auto-detect.png)

By detecting what type of application we are deploying, Render is able to pre-populate some of the configuration fields for us. While having these fields pre-populated saves us some time configuring our deployment, we can modify them as needed. Let’s go through the main settings to be aware of:

- **Name**: This field represents the unique name we want for our web service. It is important to note that the name chosen here will also be used to generate the Render-provided URL. So if we select `"my-hello-word-app"`, our application URL will be `"my-hello-world-app.onrender.com"`.
    
- **Region**: Since Render manages the infrastructure (e.g., memory, storage) and hosting of the server, the service can be hosted in a variety of regions. It is recommended to select a region that is closest to where a majority of the application’s users will be located. For the purposes of the tutorial, we can leave the default region that Render selects for us. However, know that in a production application, the region field is important for determining the latency, i.e. the server’s response time.
    
- **Branch**: This setting will point to the branch within our forked repository that we want to deploy the code from. Typically, this will be the “main” branch; however, we may want to deploy several instances of your application pointing to different branches. For example, we could have a “test” branch, a “pre-production” branch, and a “production” branch and have three different deployment instances for each.
    
- **Root Directory**: This optional setting tells Render the repository directory location to run all deployment commands. If this field is left empty, it will default to the root directory of the connected repository.
    
- **Runtime**: Earlier, we mentioned that Render was able to automatically pre-populate some configuration settings for us by scanning the files in the connected repository. For our sample application, Render has pre-selected **Node** for the runtime environment. Make sure to double-check that the correct runtime is selected when starting a new project.
    
- **Build Command**: This setting sets the command Render uses to install libraries or packages needed for the associated application to run. It will use it when it attempts to deploy the application (we will see an example in a bit). For our Node.js Render sample application, and per the instructions of the sample application `Readme.md` file, we need to use the build command `yarn` to install our dependencies. Since Render already detected the Node.js application, it has pre-populated the command into the field.
    
- **Start Command**: Similar to the “Build Command” option, Render also requires a “Start Command” that will run from the “Root Directory” location and starts up all the processes needed to run the application. Since we are creating a web service, this command is used to start the web server. This code is found in `app.js`. We can also dig into `package.json` and find the `script` property and see that `start` runs the `node app.js` command, i.e. use Node to execute the `app.js` file to boot up the server.
    
- **Instance Type**: This field selects which instance type we will use for the deployment. Render offers a “Free” instance tier which provides sufficient resources for deploying our simple application. Explore the features and limitations of a free instance type in the [Render documentation](https://render.com/docs/free).
    

Whew! That was a whole lot of settings. Don’t worry, setting up service configurations will become a breeze once we have deployed a few more times. Now that the web service is configured, let’s deploy it!

> Note: There is an additional “Advanced Settings” option on the service configuration page that is not covered above.

Multiple choice

Which of the following web service configuration settings tells Render which package dependencies to install in order for the application to build and deploy successfully?

Region

Start Command

Runtime

Build Command

#### Building and Deploying the Web Service

At the bottom of the web service configuration page, there will be a blue “Create Web Service” button. Click this to start building and deploying your application.

![Screenshot showing where the "Create Web Service" Button is, under the "Advanced" dropdown](https://static-assets.codecademy.com/Courses/heroku-audit/Introduction-to-Deployment-with-Render-Screenshots/Create-webservice-button.png)

We will then be redirected to a different page, the web service dashboard page, that will have a console window that will show the initial build steps using the configuration settings we supplied. Take a look at the console and observe the steps it takes. It will look similar to this:

![Screenshot of Render's provided terminal that shows lines of output, the last one being "Example app listening on port 10000, indicating that the deploy was successful](https://static-assets.codecademy.com/Courses/heroku-audit/Introduction-to-Deployment-with-Render-Screenshots/deploy-successful.png)

To summarize, Render will attempt to deploy by performing the following operations:

1. First, Render will clone the GitHub repo and check out the branch specified in the configuration. In this case, notice it is the “main” branch.
2. Next, Render will build the application using the command specified in the configuration. In this case, notice it says it is building via the “yarn” command. This build step may do several operations like validate, fetch, and build packages.
3. Next, under the hood, Render uses containerization technology to spin up a cloud-based infrastructure for your web app.
4. Lastly, once Render is done deploying the application, it will start the web service. In this case, notice it runs the `node app.js` command.

We can confirm that the application is running by verifying the green “Live” state above the console window.

![Screenshot of the live state, located above the app's log/terminal](https://static-assets.codecademy.com/Courses/heroku-audit/Introduction-to-Deployment-with-Render-Screenshots/render-live.png)

With our application now deployed and running, we can try accessing the application Render-provided URL at the top left.

![Screenshot showing where the Render URL is located, in a container that shows the Web Service's metadata](https://static-assets.codecademy.com/Courses/heroku-audit/Introduction-to-Deployment-with-Render-Screenshots/render-url.png)

Clicking this link should open a new browser window where our application will be running!

![Screenshot of the working app that displays a message "Hello from Render" with confetti](https://static-assets.codecademy.com/Courses/heroku-audit/Introduction-to-Deployment-with-Render-Screenshots/render-hello.png)

Congratulations! We’ve just successfully deployed our first application using Render!

#### Wrap Up

As we’ve seen, Render’s intuitive interface and sample pre-made applications make it an excellent choice for quick application deployment. To recap, in this article, we covered how to do the following:

- Fork a sample Render code repository in GitHub
- Connect a code repository in Render to create a web service
- Configure the Render settings to deploy a web service
- Deploy a new Render web service

Now that we have completed a full web service deployment, continue exploring Render and take advantage of its powerful features to practice deploying more existing or new applications!



#### Introduction

One benefit of using Render as a **Platform as a Service** (**PaaS**) provider is the ability to create a PostgreSQL database that can be accessed and used within our deployed applications. Render even provides all of the connection information needed to access the newly created database, which in turn will allow us to create tables within the database that can be connected to, modified, and queried.

In this tutorial, we will walk through how to create a database on Render. This database will contain a single table that will hold text data. We will learn:

- [Creating a PostgreSQL Database in Render](https://www.codecademy.com/paths/back-end-engineer-career-path/tracks/becp-22-deploying-a-server/modules/becp-23-deploying-back-ends-with-render/articles/creating-a-postgresql-database-with-render#header-creating-a-postgresql-database-in-render): configure a new database instance using Render
    
- [Connecting to the Database](https://www.codecademy.com/paths/back-end-engineer-career-path/tracks/becp-22-deploying-a-server/modules/becp-23-deploying-back-ends-with-render/articles/creating-a-postgresql-database-with-render#header-connecting-to-the-database): connect to the newly created database using the Render-provided connection information
    
- [Creating a Table](https://www.codecademy.com/paths/back-end-engineer-career-path/tracks/becp-22-deploying-a-server/modules/becp-23-deploying-back-ends-with-render/articles/creating-a-postgresql-database-with-render#header-creating-a-table): create a table within the database
    

Let’s get started!

#### Creating a PostgreSQL Database in Render

Log into Render and navigate to the [dashboard](https://dashboard.render.com/). From the top-right of the menu, click the blue, “New +” button to reveal a dropdown menu and then select “PostgreSQL” to set up our new database.

Please note, you cannot have more than one free tier active database at a time. If you find that you need multiple active databases, consider [Render’s paid offerings](https://render.com/pricing).

![Screenshot creating a new PostgreSQL database in Render](https://static-assets.codecademy.com/Courses/deploy-with-render/deploy-fs/new_postgresql_db.png)

Let’s go through the main settings to be aware of:

- **Name**: This field represents the unique name we want for our PostgreSQL instance. The name should be unique from any other PostgreSQL instances we have created under our Render account. For this tutorial, let’s imagine we’re creating a database instance to store text about activities. We’ll set this field to `my-activity-database`.

![Screenshot configuring the new PostgreSQL instance name in Render](https://static-assets.codecademy.com/Courses/deploy-with-render/deploy-fs/pgsql_name.png)

- **Database**: This represents the name of the database. We’ll set this field to `activity_database`.

![Screenshot configuring the new PostgreSQL database name in Render](https://static-assets.codecademy.com/Courses/deploy-with-render/deploy-fs/pgsql_database.png)

- **User **: If we have a specific username we would like to create to access the database instance and tables, we can specify it here. Leave this field blank to generate a random username. We will use the username `activities_user` here.

![Screenshot configuring the new PostgreSQL username in Render](https://static-assets.codecademy.com/Courses/deploy-with-render/deploy-fs/pgsql_user.png)

- **Region**: This indicates the region where the PostgreSQL database service will run. In order to privately access our database, the region where we deployed our web service must match the region chosen here. By having the resources in the same region, we can simply use the internal database URL to access the database. If we use a different region for the database, we would need to use the Render-provided external database URL to access the database, which can lead to [decreased performance](https://render.com/docs/databases#connecting-from-apps-on-render). We will discuss these URLs in a bit more detail soon.

![Screenshot configuring the new PostgreSQL region in Render](https://static-assets.codecademy.com/Courses/deploy-with-render/deploy-fs/pgsql_region.png)

- **PostgreSQL Version**: We can select the version of PostgreSQL that we want to use for our database. For this tutorial, we will use the current latest version. Note that for future deployed applications, they may require a different/specific version of PostgreSQL depending on the project needs.

![Screenshot configuring the new PostgreSQL version number in Render](https://static-assets.codecademy.com/Courses/deploy-with-render/deploy-fs/pgsql_version.png)

- **Datadog API Key**: Since this tutorial will not cover Datadog monitoring, we can leave this field blank.

![Screenshot configuring the new PostgreSQL Datadog API key in Render](https://static-assets.codecademy.com/Courses/deploy-with-render/deploy-fs/pgsql_datadog.png)

- **Instance Type**: Finally, there is a setting to select which instance type we will use for the database. Render offers a “Free” instance tier which provides sufficient resources for deploying our full-stack application. However, note that Render will expire free tier databases after 90 days and will not perform any automatic backups of the database. Explore the features and limitations of the free instance type in the [Render documentation](https://render.com/docs/free).

Free response

What are the benefits to keeping the Render PostgreSQL database in the same region as other Render-deployed web services?

Submit Response

Stuck? Get a Hint

Now that our settings are configured, let’s create our database! Click the blue “Create Database” button at the bottom of the page.

We’ll see that the database is now in a “Creating” status. We can also easily view the 90-day expiration date in which our database will expire, as well as the settings we just configured earlier.

![Screenshot configuring the new PostgreSQL version number in Render](https://static-assets.codecademy.com/Courses/deploy-with-render/deploy-fs/creating_status_pgsql.png)

If we scroll down further, we will see a section called **Connections** that will detail how we can connect to our database. Once our database is ready, we can see that our database has a hostname and port number. We can also see the username we set earlier and that our username now has a generated password that can be viewed. These credentials can be used to log in to the database locally via a terminal.

There are also two fields that provide URLs (that are starred out by default). One is an internal database URL, which can only be used if the deployed application and database are located in the same region. The internal database URL is a full connection string that provides the username, password, and table information all in one string. Make note of this internal URL as we will need it later to access the database from our source code. The external database URL is a full connection string that is used when we need to access our database from sources outside of Render (or from deployed applications that are not in the same region as our database). Conveniently, Render also provides a PSQL command that can be executed on the local computer’s terminal in order to connect to the database instance. Since these provided connection URLs do contain sensitive information like our username and password, we should be sure to keep our connection information protected.

![Screenshot showing our newly created PostgreSQL database connection information](https://static-assets.codecademy.com/Courses/deploy-with-render/deploy-fs/pgsql_connection_info.png)

Now that we created a database, we need to add at least one database table so that we can add data to the table from our code.

#### Connecting to the Database

In order to create a table within our new database, we need to first connect to the database. Recall in the previous step, Render provided us with information to connect to the database in the “Connections” section. Within this list of connection information, is a value called “PSQL Command”. This command can be copied into a terminal window in order to connect to the database. Here’s an example of what the command should look like:

```
 PGPASSWORD=<password_goes_here> psql -h <hostname>.ohio-postgres.render.com -U activities_user activity_database 
```

After running this command, we will be connected to the `activity_database` database that we created in Render. The terminal should now show:

```
activity_database=> 
```

#### Creating a Table

Now that we have connected to our database, we need to add a table to it. Let’s add a table named `my_activities` that will contain activity names as text data types.

To add a table with this name, we need to run the following command from the same terminal window where we are connected to our database:

```
CREATE TABLE my_activities (activity text); 
```

The full line in the terminal should look like this:

```
activity_database=> CREATE TABLE my_activities (activity text); 
```

Breaking down this command, we can see that it defines a new table named `my_activities`, with a single column: `activity`, that has a data type of `text`.

The command will return `CREATE TABLE` confirming the table was created. If your command doesn’t return `CREATE TABLE`, double check that you’re including the semicolon `;` to terminate the command. We can also check that the table was created by running the `\dt` command to see all tables:

```
\dt 
```

We should have one table named `my_activities`.

![Screenshot showing successful table creation in the new PostgreSQL database](https://static-assets.codecademy.com/Courses/deploy-with-render/deploy-fs/pgsql_create_table.png)

Now that our table has been created, we can close our database connection to keep our database secure. We can do this by running the following command:

```
activity_database=> \q 
```

After running this command, we will see that we have exited the PSQL console and have returned to our main terminal console.

Congratulations! You’ve created and set up your first PostgreSQL database through Render! Now you can access your database through your code to add, remove, and query data from your tables.

### Monitoring and Maintaining a Deployed Render Application

Learn how to monitor events, metrics, and logs of your deployed Render applications!

#### Introduction

Monitoring and maintenance are essential to ensure an application is performing optimally. Thoughtfully, Render provides convenient features for monitoring events and metrics related to our deployed application.

In this article, we will explore how to leverage Render’s monitoring and maintenance features on deployed applications. Specifically, we will:

- [**Use the “Metrics” and “Events” dashboards to monitor a deployed application**](https://www.codecademy.com/paths/back-end-engineer-career-path/tracks/becp-22-deploying-a-server/modules/becp-23-deploying-back-ends-with-render/articles/monitoring-and-maintaining-a-deployed-render-application#heading-deployment-monitoring)
    
- [**Trigger automated re-deployments upon code commits**](https://www.codecademy.com/paths/back-end-engineer-career-path/tracks/becp-22-deploying-a-server/modules/becp-23-deploying-back-ends-with-render/articles/monitoring-and-maintaining-a-deployed-render-application#heading-deployment-maintenance)
    
- [**Perform health checks on a deployed application**](https://www.codecademy.com/paths/back-end-engineer-career-path/tracks/becp-22-deploying-a-server/modules/becp-23-deploying-back-ends-with-render/articles/monitoring-and-maintaining-a-deployed-render-application#heading-health-check-path)
    
- [**Explore how to suspend or delete a deployed application web service**](https://www.codecademy.com/paths/back-end-engineer-career-path/tracks/becp-22-deploying-a-server/modules/becp-23-deploying-back-ends-with-render/articles/monitoring-and-maintaining-a-deployed-render-application#heading-deployment-maintenance)
    

Let’s get started!

> Note: This article assumes comfort with basic deployment with Render and uses a pre-deployed application as an example. If you are unfamiliar with deploying with Render, we recommend visiting the [Deploying a simple application with Render](https://www.codecademy.com/courses/deploying-with-render/articles/deploying-a-simple-application-with-render) article first!

#### Deployment Monitoring

Deployment monitoring is one of the core features Render offers. On the left-hand side of a deployed application’s dashboard, we will find a few different features that Render provides for our deployment. We will explore the “Events” and “Metrics” tabs.

![Screenshot showing the deployed service menu options](https://static-assets.codecademy.com/Courses/deploy-with-render/monitoring/deployed_service_menu.png)

##### Events

The “Events” tab displays all events and their statuses related to our deployments. Each event will list the commit revision number and commit message along with a date timestamp of when the deployment was attempted. A few examples of events include:

- **First deploy**: The initial deployment.
    
- **Deploy live**: This indicates that a deployment was successfully deployed to a live running state.
    
- **Deploy started**: This is triggered when an automated or manual deployment occurs after a code commit.
    
- **Deploy canceled**: This occurs when a deployment is canceled before it has been completed.
    
- **Deploy failed**: If a deployment fails, this event will be shown. Some things that may cause a deployment to fail may be missing dependencies or errors in the application code.
    

Another useful feature of the “Events” tab is that we can re-deploy a previously successful deployment by clicking “Rollback to this deploy” next to the deployment event that we want to rollback to. This option can be helpful, for instance, if we find our current deployment has a bug or broken functionality and we want to return the deployment to a previously successful version.

![Screenshot showing the deploy events in Render for a deployed web service](https://static-assets.codecademy.com/Courses/deploy-with-render/monitoring/web_service_events.png)

##### Metrics

The “Metrics” tab is helpful for tracking data about our application. Specifically, Render tracks metrics like “ “Usage” and “Bandwidth” metrics. The “Usage” graph is specific to those Render services running with the “Free” plan and will show how many hours our application has been running. It can also help with tracking both total and average usage. The “Bandwidth” graph will show the total amount of data that our application is sending.

![Screenshot showing the the deployed web service’s usage metrics](https://static-assets.codecademy.com/Courses/deploy-with-render/monitoring/updated_usage_graph.png)

Clicking the “View breakdown” link underneath the usage graph, we can see exactly the amount of build minutes and bandwidth that we have consumed within our instance type tier. Another important metric that can be tracked here is our available “Free Instance Hours”, which represents how many free hours are left to run all of our deployed, free instance web services. Free web services will consume these hours as long as they are actively running, but not if they are [spun down](https://render.com/docs/free#spinning-down-on-idle). In the event that we run out of “Free Instance Hours”, “Free Bandwith”, or “Free Build Minutes”, our deployed applications will become unavailable until the first day of the following month, when the hours are reset. If we choose to buy additional hours, we can also set monthly spending limits to cap how many additional hours are purchased.

![Screenshot showing the deployed web service’s build minutes and bandwith](https://static-assets.codecademy.com/Courses/deploy-with-render/monitoring/web_service_free_usage_metrics.png)

#### Deployment Maintenance

After a service is initially configured, we may need to modify settings. To do so, we can return back to the service dashboard and visit the “Settings” menu option. Here, we can modify any of the previously set configuration fields. There are also a few new options we haven’t explored yet:

- **Repository**: This setting allows us to update the link to the code repository that hosts the application. This is helpful if we ever move application code to another repository location or even another platform (e.g. GitHub to GitLab).
    
- **Auto Deploy**: This setting allows Render to automatically re-deploy the application whenever code change commits are made to the branch. Enabling this setting helps us quickly view deployed changes on the live website. Turning this setting off will require us to do manual deployments in order for code-commit changes to be deployed to the live website.
    
- **Custom Domains**: By clicking “Add Custom Domain”, we are able to point the application to a domain that we own. The deployed application can then be accessible via both the custom domain and the Render-provided URL.
    
- **PR Previews**: By enabling this setting, we are able to access a preview URL that contains all of the changes present in any pull request (PR) that is opened within our connected code repository. This is helpful to visually preview the changes within our pull requests before they are merged into our main branches. Note that every running PR preview does count against our total free instance hours. We can enable this setting by clicking **Edit** and selecting **Enabled** from the dropdown menu.
    
- **Health & Alerts**: There are additional settings that can notify us when a web service or the deployment process has failed. Also in this section is an option to provide an endpoint that can be called within the application that will check the health of the application. We will cover this concept of a **Health Check Path** more in just a bit.
    
- **Delete or Suspend**: At the far bottom of the **Settings** page are red buttons for either deleting the web service or suspending it. While the web service is suspended, we will not be billed for any resources. Once a web service has been deleted, all deployment history and events will be deleted and the live website will be terminated. It’s important to note that a deleted web service cannot be recovered, however, this action doesn’t affect the code repository itself.
    

You can read more about these settings and how they work at the [Render docs](https://render.com/docs).

##### Health Check Path

We discussed an option in the **Settings** page that allows Render to call an endpoint from the web service to check on the application’s health. This endpoint should always return a `200 OK` response, indicating that the application is in a healthy, responsive state. Render will periodically call this endpoint as a means to monitor the health of your application, which helps prevent application downtime.

With the **Auto Deploy** setting turned on, let’s try modifying our code and committing a change to trigger a re-deployment of our application. Navigate to the code repository and open the `app.js` file. Click the pencil icon to edit the file.

![Screenshot showing the edit pencil in GitHub to edit a file in the code repository](https://static-assets.codecademy.com/Courses/deploy-with-render/monitoring/github_edit_file.png)

Let’s say we want to add a new endpoint that Render can use as the health check path. Within our `app.js` file, let’s add the following lines of code directly underneath line 5. Add the code where the comment “Add a new route for the health endpoint” begins:

```
app.get("/", (req, res) => res.type('html').send(html));`: // Add a new route for the health endpoint app.get("/health", (req, res) => {   res.sendStatus(200); }); 
```

![Screenshot showing the app.js file with the newly added lines of code](https://static-assets.codecademy.com/Courses/deploy-with-render/monitoring/github_appjs_edit.png)

Commit the changes and provide a commit message, for example: “Adding health check path endpoint”. This change can be committed directly to the `main` branch.

Return to the Render web service dashboard and refresh the **Events** page. You should see the deployment now running on the commit revision that you just committed (you will also see your commit message).

![Screenshot showing the auto-deploy event starting](https://static-assets.codecademy.com/Courses/deploy-with-render/monitoring/render_health_check_commit.png)

Wait for the deployment to succeed.

Click the Render-provided URL to navigate to the deployed website. In the browser, append “/health” to the URL to navigate to your newly added endpoint. You should see “OK” displayed on the page since our endpoint simply returns a `200 OK` response.

![Screenshot showing the newly added endpoint in a web browser](https://static-assets.codecademy.com/Courses/deploy-with-render/monitoring/web_service_health_ok.png)

If we want to disable **Auto Deploy**, we can manually deploy our changes by navigating to the web service Dashboard and selecting the **Manual Deploy** button in the top right corner. We can deploy either the latest commit or choose a specific commit revision to deploy.

![Screenshot showing the manual deploy options](https://static-assets.codecademy.com/Courses/deploy-with-render/monitoring/manual_deploy.png)

Let’s briefly review the “Auto Deploy” feature:

Free response

What are some benefits to having **Auto Deploy** enabled?

Submit Response

Stuck? Get a Hint

Next, we’ll try linking our new endpoint to the Render Health Check Path.

Return to the **Settings** page and navigate to the **Health Check Path** configuration. In the field box, select **Edit**, type `/health` and then click Save. This value will match the newly added `/health` endpoint that we added to our `app.js` file in the previous steps.

![Screenshot showing the configuration option to add a health check path](https://static-assets.codecademy.com/Courses/deploy-with-render/monitoring/health_check_path_setting.png)

Render will re-deploy the application and there will be a message that it is performing the health check using the provided health check endpoint.

![Screenshot showing Render executing the health check and waiting for it to return a successful response](https://static-assets.codecademy.com/Courses/deploy-with-render/monitoring/running_health_check.png)

Once the health check and deployment succeeds, the application will move to a green, “Live” state again.

##### Deployment Troubleshooting

Back on our web service dashboard, we have a menu option to view **Logs**. Log files list out messages related to the build and deployment processes as well as messages that occur during the application runtime — which can be very helpful when troubleshooting issues or bugs within our code. Logs are also useful for displaying regular informational messages, such as messages that we include in our application code. In the sample logfile, there are messages that show the webserver starting and the application running successfully:

![Screenshot showing the deployed web service’s logs](https://static-assets.codecademy.com/Courses/deploy-with-render/monitoring/web_service_logs.png)

#### Wrap up

- How to monitor events, metrics, and logs for a deployed application
    
- How to update and modify settings for a deployed application
    
- How to suspend or delete a deployed application
    
- How to auto deploy committed changes within the code repository
    
- How to add a health check path for Render to monitor application health
    

With the ease of configuring, creating, and maintaining a web service using Render, getting applications into the hands of the end-users is much faster, done more efficiently, all while upholding near-zero application downtimes.

### Deploying a Back-End Application with Render

Learn how to deploy a back-end application using Render!

#### Introduction

In this tutorial, we will practice using Render to deploy a back-end application. You may have experience with [deploying a Node and Express application](https://www.codecademy.com/courses/deploying-with-render/articles/deploying-a-simple-application-with-render), but this application will also include a database and HTTP requests to an external API. Our app was built using Node and Express with endpoints for inserting data into a PostgreSQL database.

- [**Forking the Back-End Application Code Repository**](https://www.codecademy.com/paths/back-end-engineer-career-path/tracks/becp-22-deploying-a-server/modules/becp-23-deploying-back-ends-with-render/articles/deploying-a-back-end-application-with-render#heading-forking-the-back-end-application-code-repository): fork a sample back-end application to use for our deployment
    
- [**Configuring and Deployment with Render**](https://www.codecademy.com/paths/back-end-engineer-career-path/tracks/becp-22-deploying-a-server/modules/becp-23-deploying-back-ends-with-render/articles/deploying-a-back-end-application-with-render#header-configuring-a-web-service): configure a Web Service Render deployment, including more advanced settings like configuring environment variables
    
- [**Connecting to an Existing Database using Environment Variables**](https://www.codecademy.com/paths/back-end-engineer-career-path/tracks/becp-22-deploying-a-server/modules/becp-23-deploying-back-ends-with-render/articles/deploying-a-back-end-application-with-render#header-connecting-to-an-existing-database-using-environment-variables): connect an existing PostgreSQL database to our forked application source code
    
- [**Verifying Deployment with Added Environment Variables**](https://www.codecademy.com/paths/back-end-engineer-career-path/tracks/becp-22-deploying-a-server/modules/becp-23-deploying-back-ends-with-render/articles/deploying-a-back-end-application-with-render#header-verifying-deployment-with-added-environment-variables): verify a successful deployment after adding environment variables through Render
    

> Note: This tutorial requires access to a GitHub account and assumes familiarity with using GitHub. If you are unfamiliar with GitHub or need help setting up an account, we recommend visiting the [Learn GitHub: Introduction](https://www.codecademy.com/learn/learn-github-introduction) course first!

Let’s get started!

#### Forking the Back-End Application Code Repository

To get started with deploying a back-end application with Render, we will use an existing Node and Express back-end application that inserts randomly generated text of activity names into a database. The back-end also makes requests to an external API to retrieve text with randomized activity names. The application offers its own API endpoint that when accessed, calls the function that retrieves the random activity, and then inserts it into the database. A PostgreSQL database is used to keep track of these inserted activities.

For this tutorial, we will be using the [`deploying-backend-with-render-sample`](https://github.com/Codecademy-Curriculum/deploying-backend-with-render-sample) back-end application. We’ll need to connect our GitHub account to Render and then connect our desired repository. For a refresher on the set-up process and how to fork a GitHub repository, check out [Deploying a Simple App with Render](https://www.codecademy.com/courses/deploying-with-render/articles/deploying-a-simple-application-with-render).

After the repository has successfully been forked, we can confirm that the code now lives under our GitHub username ownership and was forked from `Codecademy`.

![Screenshot of a forked repository in GitHub showing the repository was forked from the Codecademy deploying-a-backend-with-render-sample repository](https://static-assets.codecademy.com/Courses/deploy-with-render/deploy-be/deploying_backend_forked.png)

Take a moment to browse the files in the repository closely.

Notice that the repository has a file called `app.js`, which holds the code used to retrieve the generated activity names and also creates the API endpoints to insert and retrieve the activities from our database.

There is also a `package.json` file which will later tell Render which Node packages need to be installed in order to build, deploy, and run our back-end application.

Now that our application code is ready and available within our repository, we can practice deploying it using Render.

#### Deployment with Render

To start the deployment process, we need to navigate to the [Render dashboard](https://dashboard.render.com/). Make sure to be logged in to see the dashboard. From the top-right of the menu, we can click the blue, “New +” button to create and configure our deployment. From the dropdown, select the “Web Service” option to deploy our application to a web server. For a recapon how to deploy a Web Service in Render, check out [Deploying a Simple App with Render](https://www.codecademy.com/courses/deploying-with-render/articles/deploying-a-simple-application-with-render#heading-deployment-with-render)

We will then be able to connect the GitHub repository that we just forked in order to deploy it as a web service.

#### Configuring a Web Service

Notice that Render has automatically detected that we are using Node for our application and has pre-populated some of the configuration fields for us. As we step through the deployment settings, we can also modify any of the pre-populated fields as needed.

![Screenshot of the message displayed when connecting to the forked repository to create a new web service](https://static-assets.codecademy.com/Courses/deploy-with-render/deploy-be/deploying_using_node.png)

Configure the **Name**, **Region**, and **Branch** settings for the deployment based on personal preferences and forked repository setup. Next, we will leave the **Root Directory** blank so that we use the repository’s default root directory. We should see that the **Runtime** has been set to `Node` already, which we will leave as is since our application uses Node. For our **Build Command**, recall from viewing our forked source code files that we have a `package.json` file that lists which packages need to be installed in order to build and deploy our application. For this field, you may type `npm install` which will instruct Render to run that command during the deployment to install the necessary packages and dependencies. For the **Start Command** field, we can use the command `node app.js` to run our application.

![Screenshot of the configuration settings when creating the back-end web service](https://static-assets.codecademy.com/Courses/deploy-with-render/deploy-be/backend_web_service_configurations_node.png)

We can leave the “Instance Type” set to the “Free” tier.

We will discuss the “Advanced” menu settings in more detail later. For now, let’s deploy our application as is!

#### Building and Deploying the Web Service

At the bottom of the web service configuration page, click on the “Create Web Service” button to start building and deploying the application.

We will be redirected to the log console window that shows the current build and install steps occurring to deploy the application. At first, the console will be empty, but as the deployment processes, we’ll see our build and install commands being run:

![Screenshot of the deployed web service logs showing the build and install commands running](https://static-assets.codecademy.com/Courses/deploy-with-render/deploy-be/backend_deployment_progress_node.png)

> Note: While Render’s default Node version is currently Node 14, we can update our Node version by following these [steps to specify a Node version](https://render.com/docs/node-version).

Once the deployment finishes, we should see a green “Live” state above the console window. Now, we can try accessing the application using the Render-provided URL at the top left.  Clicking the provided link should open a new browser tab where our back-end application should be running. But wait! We will see the following error displayed instead:

```
{“status”:“error”,“message”:“connect ECONNREFUSED 127.0.0.1:5432”} 
```

The error indicates an issue connecting to the database. The default port number that PostgreSQL uses is 5432. So, the best place to start debugging is our database connection.

Returning to our code repository, in the `app.js` file, we can see that we attempt to use something called an **environment variable** to set the URL of our database. The environment variable we are trying to read from is called `DATABASE_URL`, but remember, we did not set any values for this. In fact, we don’t even have a database to point our code to yet!

Fortunately, Render provides the ability to create a PostgreSQL database that we can access. To learn more about how to set up this PostgreSQL database in Render, or how to add tables to your database, take a look at the article on [Creating a PostgreSQL Database with Render](https://www.codecademy.com/courses/deploying-with-render/articles/creating-a-postgresql-database-with-render). Once you have your Render-created PostgreSQL database ready, take note of the “Internal Database URL” value from the “Connections” section as we will need it later.

Looking at our `app.js` file again, we can see that we are making database query calls to a table named `my_activities`. So be sure there is a PostgreSQL database that has at least one table called `my_activities` and that it contains one column called `activity`, which is a text data type. This table should resemble the following:

![Screenshot of a console with the command `\dt` that prints out a table showing a database with the name `my_activities` and other metadata](https://static-assets.codecademy.com/Courses/deploy-with-render/deploy-fs/psql_activity_db.png)

With a configured PostgreSQL database and table ready to go, we will learn how to connect to our database through our code using environment variables.

#### Connecting to an Existing Database using Environment Variables

We now have our active database instance that contains the table we need for our application. It’s time to connect to it by adding [environment variables](https://www.codecademy.com/learn/seasp-data-security/modules/seasp-managing-environment-variables-api-keys-files/cheatsheet#heading-environment-variables). **Environment variables** are dynamic key and value pairs where the values can be updated or changed during the runtime of our code, that can affect the behavior of our applications. Recall, in our `app.js` file, we can see that we are trying to access an environment variable called `DATABASE_URL` that should have some associated value that equals the database URL string. But we can imagine that if we need to test our application, we can set up a dedicated database for testing — without affecting our production database. With our environment variable, we can set the `DATABASE_URL` to the exact database URL we need. This helps us separate our environments and reduce repetitive code.

Now that we’ve covered what environment variables are and how they can be used, let’s navigate back to Render and access our deployed web service dashboard. We can do this by clicking “Dashboard” in the top menu and then selecting our `my-backend-activity-app` web service.

From the left-hand menu, we’ll select “Environment”. Then, we’ll see a button to “Add Environment Variable”. We’ll click this to start adding the environment variable to link our internal database URL.

![Screenshot showing how to add environment variables to a deployed web service](https://static-assets.codecademy.com/Courses/deploy-with-render/deploy-fs/add_environment_var.png)

For the “Key” field, supply the `DATABASE_URL` name that our `app.js` source code is searching for. For the “Value” field, supply the internal database URL from the PostgreSQL “Connections” information that we noted earlier. Note that we can also click the “Generate” button within the “Value” field in order to generate a random 32-character alpha-numeric value. This is helpful when we need to generate a random value for things like secret keys, passwords, and other confidential values.

![Screenshot showing how to add an environment variable and value](https://static-assets.codecademy.com/Courses/deploy-with-render/deploy-fs/database_url_env_var.png)

Notice that our `app.js` file also attempts to access an environment variable named `PORT` which should represent the port that the server serving the web service is running on.

Render defaults to running the web service on port 10000 so we will add another environment variable to set the port to 10000. We will click the “Add Environment Variable” button to add an additional environment variable with a **Key** set to `PORT` and **Value** set to `10000`.

Click the “Save Changes” button to save the environment variable.

Multiple choice

What is a benefit of using environment variables in Render?

By setting and using environment variables, developers can streamline the deployment processes by configuring different environment variable values for different deployed environments.

Environment variables can only be set when configuring the deployment settings.

Render only allows for one environment variable to be set per web service.

Environment variables cannot be generated by Render and must be supplied by the user.

#### Verifying Deployment with Added Environment Variables

When an environment variable is added or modified, Render will automatically redeploy the web service.

In our deploy console window, we should see the application build and deploy successfully, and we will see the green “Live” indicator at the top again once the deployment is complete.

![Screenshot showing a successfully deployed back-end application](https://static-assets.codecademy.com/Courses/deploy-with-render/deploy-be/backend_successful_deploy.png)

Now, let’s click our Render-provided URL at the top left again. We should now see the return JSON showing the activities currently in our database and the number count of activities.

```
{"activity_count":"0","activities":[]} 
```

> Note: If you are using an existing PostgreSQL database, any previously added activities to this database table will display.

Next, try inserting a new activity by accessing the following endpoint in the browser window: `https://<UNIQUE-RENDER-APP-NAME.onrender.com/insert_activity`. There should be new JSON output that shows the name of the activity that was successfully inserted into the database.

```
{"status":"success","message":"Activity \"Pot some plants and put them around your house\" inserted successfully"} 
```

Congratulations! We’ve just successfully deployed our back-end application using a Render Web Service and PostgreSQL database!

#### Wrap Up

As we’ve seen, Render provides a straightforward tool for creating and configuring our own PostgreSQL database that we can then use within our deployed source code via the setting of environment variables. To recap, in this article, we covered how to do the following:

- Fork a sample back-end code repository in GitHub
    
- Connect a code repository in Render to create a web service
    
- Create and configure a PostgreSQL database instance
    
- Create and add environment variables to a deployed web service
    

Now that we have completed the deployment of a back-end application, try deploying another application!



