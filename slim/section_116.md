---
title: Lesson P.12 - Let's Build CRUD Actions For Categories
description: Slim notes.
order: 116
---

This video demonstrates how to build CRUD actions for categories in an expense tracker app using PHP 8, covering create, read, update, and delete functionalities. The video walks through the changes made to the categories controller, the web routes file, and the JavaScript code. It also discusses how to handle validation, creation of entities, and handling delete requests.

See [P12-End](https://github.com/paulpiazza/gio-formation-expennies/commits/P12_End)


[00:00](https://www.youtube.com/watch?v=kITCm6nTepU&t=0.299) This section introduces the concept of CRUD actions and focuses on building the categories component for the expense application.
- CRUD stands for create, read, update, and delete, which are basic actions that can be performed on data.
- The categories component allows users to add, edit, and delete categories.
- The changes made include creating a new categories controller with empty methods, setting up routes for the categories component, and adding a form and table to the categories management page.
    
[03:19](https://www.youtube.com/watch?v=kITCm6nTepU&t=199.26) The categories index Twig template contains a new category button, a form to create a new category, a table with a list of categories, and buttons to edit and delete categories, with event listeners added in the categories.js file.
- The index.twig extends the layout and loads necessary JavaScript.
- The new category button opens a modal with a form containing a single input.
- The table with a list of categories is rendered if categories are set, with a row for each category displaying the name, created and updated dates, and edit/delete buttons.
- The categories.js file adds an event listener to all edit category buttons to extract the category ID and log it in the console.
    
[06:36](https://www.youtube.com/watch?v=kITCm6nTepU&t=396.84) Steps to create CRUD actions for categories in an expense tracker app
- First step is to adjust the register user request validator to create category request validator
- Then, create a category service class to abstract the entity manager part for creating and persisting a new category entity
- Inject the category service in the controller's constructor
- Add a create method in the category service class to create a new category entity and persist it using the entity manager.
    
[09:56](https://www.youtube.com/watch?v=kITCm6nTepU&t=596.22) The video discusses the need to pass the user as an argument and introduces the use of a trait called "has timestamps" to set the created at and updated at dates for entities.
- User entity uses lifecycle callbacks and update timestamps to set created at and updated at dates.
- The category entity needs to manually set the created at and updated at dates.
- Instead of duplicating code, a trait called "has timestamps" is introduced to set the dates for entities.
    
[13:15](https://www.youtube.com/watch?v=kITCm6nTepU&t=795.72) The video shows how to fetch and display categories using a service class and Twig template.
- The service class is used to fetch the list of categories and pass them down to the Twig template.
- Twig is able to access private properties of an entity object by calling its getter method.
- The date filter is used on the created at and updated at properties within the index template.
    
[16:36](https://www.youtube.com/watch?v=kITCm6nTepU&t=996.839) To enable delete functionality, a hidden input field with the name "method" and value "delete" is added, and the method overwrite middleware is used to override the request method.
- Browsers support GET and POST request methods, so a hidden input field is added to enable the DELETE request method.
- The method overwrite middleware is added to allow methods to be overridden.
- The middleware first looks for the method header, and if not present, it checks if the method is contained within the body of the request.
    
[19:55](https://www.youtube.com/watch?v=kITCm6nTepU&t=1195.86) There are multiple ways to handle the flash method for CRUD operations, but for now, the method will remain as is with the create method calling the persistent flush.
- Flash method is called on every persist operation, which may not be efficient in certain cases.
- One solution is to accept a Boolean argument to determine whether to flush or not.
- Another solution is to remove the flash method from the create method and call it from somewhere else after persisting everything.
- An alternative approach is to have a separate method called "make" responsible for creating a new category entity, while the create method handles persisting and flushing.
- The current implementation will be kept as is for now, but future refactoring may be considered for more efficient operations.
    
