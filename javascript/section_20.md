---
title: Runtime Environment
description: Slim notes.
order: 20
---

### What is a Runtime Environment?

A _runtime environment_ is where your program will be executed. It determines what global objects your program can access and it can also impact how it runs. This article covers the two JavaScript runtime environments:

1. the runtime environment of a browser (like [Chrome](https://www.google.com/chrome/), or [Firefox](https://www.mozilla.org/en-US/firefox/))
2. the Node runtime environment

### A Browser’s Runtime Environment

The most common place where JavaScript code is executed is in a browser. For example, using any [text editor](https://www.codecademy.com/articles/visual-studio-code), you could create a file on your own computer called **my_website.html** and put the following HTML code inside:

```html
<!-- my_website.html -->
<html> 
<body>
	<h1> My Website </h1>
	<script> window.alert('Hello World'); </script>
</body>
</html>
```

Save your file, then open your favorite browser. Most browsers will allow you to load websites that you have created locally by going to the menu File > Open File > **my_website.html**.

Upon loading, the embedded `<script></script>` will execute and the `window.alert()` method will create a pop-up box in your browser with the text `"Hello World"`. How is this possible? Where did the `window.alert()` method come from and how can it control your browser?

The answer is that you are executing this code in the _browser’s runtime environment_. The [`window.alert()`](https://developer.mozilla.org/en-US/docs/Web/API/Window/alert) method is built into this environment and any program executed in a browser has access to this method. In fact, the [`window`](https://developer.mozilla.org/en-US/docs/Web/API/Window) object provides access to a huge amount of data and functionality relating to the open browser window beyond just `.alert()`.

> Try replacing `window.alert()` with `window.prompt()` or `window.confirm()`

Applications created for and executed in the browser are known as _front-end_ applications. For a long time, JavaScript code could only be executed in a browser and was used exclusively for creating front-end applications. In order to create _back-end_ applications that could run on a computer WITHOUT a browser, you would need to use other programming languages such as Java or PHP.
