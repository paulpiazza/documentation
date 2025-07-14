---
title: Web App and SPA
description: Slim notes.
order: 46
---

A web app, short for web application, is a software application that runs on web browsers. It is accessed over the internet and does not require installation on the user's device. Web apps are typically built using web technologies such as HTML, CSS, and JavaScript. They can provide a wide range of functionalities and services, similar to traditional desktop or mobile applications.

A Single-Page Application (SPA) is a type of web app that dynamically updates the content on a single web page, without requiring a full page reload. SPAs use JavaScript frameworks like React, Angular, or Vue.js to handle client-side rendering and data manipulation. The initial page load retrieves the necessary resources, and subsequent interactions with the app are handled through AJAX requests to the server to fetch data or perform actions without refreshing the entire page.

SPAs offer a smoother and more responsive user experience since they can update specific parts of the page dynamically, providing a more desktop-like application feel. They are commonly used for interactive and data-driven applications like social media platforms, email clients, project management tools, and more.

It's important to note that while all SPAs are web apps, not all web apps are SPAs. Traditional web apps can have multiple pages that require full page reloads for each interaction, while SPAs aim to provide a more seamless and interactive experience by minimizing page reloads.

### Pros

- SPAs are fast. The main selling point of a SPA is that it feels like a desktop or mobile application. By eliminating requests for new files and only relying on smaller amounts of data from the server, SPAs provide a real-time interface with their users.
- Reuse of code is a big bonus when using SPAs because it saves time within a project and across multiple projects. Many SPA libraries and frameworks advise that components be general enough that they can be reused from project to project.
- SPAs provide an easier path to migrate code to a mobile application. With a SPA, the back-end of the application feeds data to the decoupled front-end interface. This separation of tasks allows the creation of a mobile app UI while maintaining the back-end logic of the application.

### Cons

- SPAs require more files to run at startup so the load time of the application can be longer. This is something to consider if a user will not want to visit a site that takes too long to load. SPA load time can be minimized through strategically loading resources throughout the run of an application.
- Search Engine Optimization (SEO) has some pitfalls when it comes to SPAs. Search engines, like Google or DuckDuckGo, index pages of a website to rank the content. This can be difficult with only one page that may not have content until it is loaded by JavaScript. SEO is an ever-changing world so strategies already exist to mitigate these downsides.
- SPAs may not function as expected within the browser. For example, the back button or browsing history can act differently while using a single-page application. This can be frustrating for users who are expecting certain functionality within their browsers.
