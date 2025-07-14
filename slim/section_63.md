---
title: Lesson 2.27 - Intro to MVC
description: Slim notes.
order: 63
---

The MVC (Model-View-Controller) pattern is a design pattern commonly used in software development, including in web applications built with PHP. It separates an application's concerns into three distinct components: Model, View, and Controller. This separation enhances modularity, maintainability, and code organization.

Here's an overview of each component and how they interact:

1. **Model:**
   The Model represents the application's data and business logic. It manages data storage, retrieval, manipulation, and validation. It abstracts the database and provides an interface to interact with the application's data.

2. **View:**
   The View is responsible for rendering the data to the user interface. It's in charge of presenting the data in a format that's understandable and visually appealing. Views are often templates that include placeholders for data to be filled in dynamically.

3. **Controller:**
   The Controller acts as an intermediary between the Model and the View. It receives user input, processes it, interacts with the Model to retrieve or update data, and selects the appropriate View to display the results. The Controller essentially orchestrates the flow of data and logic.

Here's a basic implementation of the MVC pattern in PHP:

1. **Model:**
   The Model typically includes classes and methods that interact with the database. In this example, we'll use a simple array as a representation of data.

   ```php
   class TaskModel {
       private $tasks = [];

       public function getAllTasks() {
           return $this->tasks;
       }

       public function addTask($task) {
           $this->tasks[] = $task;
       }
   }
   ```

2. **View:**
   The View is responsible for rendering data. In this example, we'll use a simple template to display tasks.

   ```php
   class TaskView {
       public function renderTasks($tasks) {
           echo "<ul>";
           foreach ($tasks as $task) {
               echo "<li>{$task}</li>";
           }
           echo "</ul>";
       }
   }
   ```

3. **Controller:**
   The Controller manages user input and coordinates interactions between the Model and View.

   ```php
   class TaskController {
       private $model;
       private $view;

       public function __construct($model, $view) {
           $this->model = $model;
           $this->view = $view;
       }

       public function displayTasks() {
           $tasks = $this->model->getAllTasks();
           $this->view->renderTasks($tasks);
       }

       public function addTask($task) {
           $this->model->addTask($task);
       }
   }
   ```

Now, you can use these components together to create an application:

```php
$model = new TaskModel();
$view = new TaskView();
$controller = new TaskController($model, $view);

$controller->addTask("Buy groceries");
$controller->addTask("Finish project");
$controller->displayTasks();
```

This example demonstrates the basic concepts of the MVC pattern in PHP. In real-world applications, frameworks like Laravel, Symfony, and Yii provide more advanced and organized ways to implement MVC, making development more efficient and scalable.