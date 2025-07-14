---
title: Session, Cookie, local storage
description: Slim notes.
order: 72
---

In web development, sessions, cookies, and localStorage are used to store data across multiple requests and browser sessions. Here's an overview and comparison of each, along with examples of how they can be used with Node.js and Express.

### Cookies

Cookies are small pieces of data that a server sends to the user's web browser. The browser may store it and send it back with subsequent requests to the same server. Typically, it's used to tell if two requests came from the same browser — keeping a user logged-in, for instance.

In Express, you can use the `cookie-parser` middleware to work with cookies.

**Example: Setting a Cookie in Express**

```javascript
const express = require('express');
const cookieParser = require('cookie-parser');

const app = express();
app.use(cookieParser());

app.get('/set-cookie', (req, res) => {
  res.cookie('username', 'JohnDoe', { maxAge: 900000, httpOnly: true });
  res.send('Cookie set');
});
```

### Sessions

Sessions can be thought of as a way to persist data across requests. When a user accesses your application, they are assigned a unique session ID which is stored in a cookie on the user's browser. The session data is stored server-side.

![[Pasted image 20240222110826.png]]

**Example: Using Sessions in Express**

To use sessions in Express, you can use the `express-session` middleware.

```javascript
const express = require('express');
const session = require('express-session');

const app = express();

app.use(session({
  secret: 'keyboard cat',
  resave: false,
  saveUninitialized: true,
  cookie: { secure: true }
}));

app.get('/', (req, res) => {
  if (req.session.views) {
    req.session.views++;
    res.write(`<p>views: ${req.session.views}</p>`);
    res.end();
  } else {
    req.session.views = 1;
    res.end('Welcome to this page for the first time!');
  }
});
```

### localStorage

`localStorage` is a web storage API that allows JavaScript sites and apps to store and access data right in the browser with no expiration date. This means the data stored in the browser will persist even after the browser window is closed.

However, `localStorage` is purely client-side and is not directly related to Node.js or Express. It's accessible via JavaScript running in the browser.

**Example: Using localStorage in the Browser**

```javascript
// Save data to localStorage
localStorage.setItem('key', 'value');

// Get data from localStorage
let data = localStorage.getItem('key');

// Remove data from localStorage
localStorage.removeItem('key');
```

### Comparison

- **Persistence**: Cookies and localStorage have persistent data storage capabilities (although cookies can be set to expire). Session data is usually cleared after a timeout or when the user ends the session.
- **Storage Location**: Cookies are stored on the client-side but sent to the server with each request. Sessions are typically stored on the server. `localStorage` is stored on the client-side and is not transmitted with every request.
- **Capacity**: Cookies have a size limit of around 4KB per cookie. `localStorage` can store much larger amounts of data (up to 5MB or more per domain).
- **Accessibility**: Cookies and sessions can be manipulated server-side and client-side (though it's recommended to manage sessions server-side only), while `localStorage` can only be accessed via client-side scripts.
- **Security**: Cookies can be made secure by setting the `httpOnly` flag, making them inaccessible via JavaScript and protecting them from XSS attacks. Session IDs stored in cookies can also be hijacked if not properly secured. `localStorage` is vulnerable to XSS attacks because data is easily accessible via client-side scripts.

### Use Cases

- **Cookies**: Storing session IDs, tracking user behavior across sessions for analytics or personalization.
- **Sessions**: Storing user data between HTTP requests, such as login information, shopping cart contents, game scores, or any other server-side user-specific data.
- **localStorage**: Storing client-side preferences, theme settings, or saving state in single-page applications without involving the server.

In summary, each method has its own use cases and choosing between them depends on the specific needs of your application regarding persistence, security, capacity, and where you want the storage to occur.

