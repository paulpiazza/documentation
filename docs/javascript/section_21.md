---
title: The Node Runtime Environment
description: Slim notes.
order: 21
---

In 2009, the _Node runtime environment_ was created for the purpose of executing JavaScript code without a browser, thus enabling programmers to create _full-stack_ (front-end and back-end) applications using only the JavaScript language.

Node is an entirely different runtime environment, meaning that browser-environment data values and functions, like `window.alert()`, can’t be used. Instead, the Node runtime environment gives back-end applications access to a variety of features unavailable in a browser, such as access to the server’s file system, database, and network.

For example, suppose you created a file called **my-app.js**. We can check to see the directory that this file is located in using the Node runtime environment variable `process`:

```
// my-app.jsconsole.log(process.env.PWD);
```

> Notice that we are using `console.log` now instead of `window.alert()` since the `window` object isn’t available

`process` is an object containing data relating to the JavaScript file being executed. `process.env` is an object containing environment variables such as `process.env.PWD` which contains the current working directory (and stands for “**P**rint **W**orking **D**irectory”).

To execute the JavaScript code in this file, first make sure that you have [set up Node on your computer](https://www.codecademy.com/articles/setting-up-node-locally). Then, open up a [terminal](https://www.codecademy.com/learn/learn-the-command-line) and run the following command:

```shell
node my-app.js/path/to/working/directory
```

The `node` command tells your computer to execute the `my-app.js` file in the Node environment. You can also use the `node` command without a file argument to open up the Node **R**ead-**E**val-**P**rint-**L**oop (REPL):

```shell
node> process.env.HOME'/home/ccuser'
```

### Summary

A _runtime environment_ is where your program will be executed. JavaScript code may be executed in one of two runtime environments:

1. a browser’s runtime environment
2. the Node runtime environment

In each of these environments, different data values and functions are available, and these differences help distinguish front-end applications from back-end applications.

- Front-end JavaScript applications are executed in a browser’s runtime environment and have access to the `window` object.
- Back-end JavaScript applications are executed in the Node runtime environment and have access to the file system, databases, and networks attached to the server.

