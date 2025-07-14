---
title: Lesson 2.24 - Superglobals - $_GET/$_POST - Forms
description: Slim notes.
order: 60
---

`$_GET` and `$_POST` are superglobal arrays in PHP that are used to retrieve data from HTML forms submitted via the HTTP GET and POST methods, respectively. These arrays allow you to access form data sent to the server and use it in your PHP scripts.

Here's how they work:

1. **`$_GET`**: This superglobal array is used to collect data from forms submitted using the HTTP GET method. When a form is submitted using GET, the form data is appended to the URL as query parameters.

   Example HTML form:
   ```html
   <form action="process.php" method="get">
       <input type="text" name="name">
       <input type="submit" value="Submit">
   </form>
   ```

   In the PHP script (`process.php`):
   ```php
   $name = $_GET['name'];
   echo "Hello, $name!";
   ```

2. **`$_POST`**: This superglobal array is used to collect data from forms submitted using the HTTP POST method. When a form is submitted using POST, the form data is sent in the request body and is not visible in the URL.

   Example HTML form:
   ```html
   <form action="process.php" method="post">
       <input type="text" name="name">
       <input type="submit" value="Submit">
   </form>
   ```

   In the PHP script (`process.php`):
   ```php
   $name = $_POST['name'];
   echo "Hello, $name!";
   ```

It's important to note that both `$_GET` and `$_POST` are associative arrays, and the keys correspond to the `name` attributes of the form elements. Always sanitize and validate the data obtained from these arrays to prevent security vulnerabilities like SQL injection and cross-site scripting (XSS) attacks.

`$_REQUEST` is another superglobal array in PHP that combines data from `$_GET`, `$_POST`, and `$_COOKIE` arrays. It provides a way to access data sent via both GET and POST methods, as well as data stored in cookies. However, it's important to note that relying heavily on `$_REQUEST` can lead to security risks, as it combines multiple sources of data, and it's recommended to use `$_GET`, `$_POST`, and `$_COOKIE` directly when possible.

Here's an example of how `$_REQUEST` can be used:

```php
<input type="text" name="username">
<input type="password" name="password">
<input type="submit" value="Login">
```

In the PHP script:
```php
$username = $_REQUEST['username'];
$password = $_REQUEST['password'];

// Process login logic
```

While `$_REQUEST` can be convenient in certain cases, it's generally recommended to use `$_GET` and `$_POST` directly depending on the method used to submit data (GET or POST). This provides more clarity and reduces the risk of unexpected behavior due to mixing different data sources.

For security reasons, it's essential to sanitize and validate data from all superglobal arrays (`$_GET`, `$_POST`, `$_COOKIE`, etc.) before using it in your application to prevent potential security vulnerabilities.

Sanitizing data input is a crucial step in web development to prevent security vulnerabilities like SQL injection, cross-site scripting (XSS), and other forms of attacks. Here are some best practices for sanitizing and validating user input in PHP:

1. **Validate Input:**
   Ensure that input adheres to expected formats. For example, validate email addresses, phone numbers, and numeric values. PHP provides various functions like `filter_var` for this purpose.

2. **Use Prepared Statements:**
   When dealing with databases, use prepared statements and parameterized queries to prevent SQL injection. Libraries like PDO (PHP Data Objects) and MySQLi provide support for prepared statements.

3. **Avoid Directly Executing Input:**
   Never directly execute input as code, query, or command. Always sanitize input before using it in any context.

4. **Escape Output:**
   When echoing data to HTML pages, use functions like `htmlspecialchars` to escape special characters and prevent XSS attacks.

5. **Limit Input Length:**
   Define maximum input lengths for fields to prevent potential buffer overflow attacks.

6. **Use Whitelists:**
   When expecting specific values (e.g., user roles), use whitelists to only allow predefined values.

7. **File Uploads:**
   Validate and sanitize file uploads. Use functions like `move_uploaded_file` to ensure files are uploaded to a safe location and not directly accessible.

8. **Use Security Libraries:**
   Libraries like "HTMLPurifier" for HTML sanitization and "AntiXSS" libraries can be helpful in preventing XSS attacks.

Here's a basic example using `filter_var` and `htmlspecialchars`:

```php
if(!isset($_POST['input_field'])) {
	exit;
}

$input = $_POST['input_field'];

// Validate and sanitize input
$filteredInput = filter_var($input, FILTER_SANITIZE_STRING);

// Escaping for output to HTML
$escapedOutput = htmlspecialchars($filteredInput, ENT_QUOTES, 'UTF-8');

echo "Safe output: $escapedOutput";
```

Remember that security measures depend on the context of usage. Always follow security guidelines and keep up-to-date with best practices to ensure your application remains secure against evolving threats.