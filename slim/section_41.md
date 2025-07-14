---
title: Lesson 2.5 - Composer - PSR - Autoloading
description: Slim notes.
order: 41
---

RESOURCES PSR-1 - [https://www.php-fig.org/psr/psr-1/](https://www.youtube.com/redirect?event=video_description&redir_token=QUFFLUhqbkhwZ1BxX3NmMGg3YUViR3pWMXZKREYwXy1BUXxBQ3Jtc0ttTlQ3TEFrSXUzMEdGTlBmR19kTjRnd21MdWFhZDJNYU5xS1gzcXRRTElJLW5Dd3RjMlk3Rkd0WW00ZWwwMkpoOWdjaUM3VElDNDBQUVZFVGxaTks4elplZ2N5NUJrS3IwcUs2b0ViRWdxV1pSdXZmTQ&q=https%3A%2F%2Fwww.php-fig.org%2Fpsr%2Fpsr-1%2F&v=rqzYdHdyMH0) 
PSR-4 - [https://www.php-fig.org/psr/psr-4/](https://www.youtube.com/redirect?event=video_description&redir_token=QUFFLUhqbmhmTlZIMlhRWUJzMWF2cEVJMm1HZms2SmFCUXxBQ3Jtc0trSmZ1WFd5SHJNR3Z1X1JhTlMwV1JtT1Jac0phdmVDRDd6ZC1HcUZ1RHJLcUtTSjJvSnljbS1GaDktZ1RtTVJoU0pfQXhoOWpicDFXSFdzNGZVQWJSUUpCNXJGSHZ3ZlZhTmJVX2lTUHNJUGItTUpiQQ&q=https%3A%2F%2Fwww.php-fig.org%2Fpsr%2Fpsr-4%2F&v=rqzYdHdyMH0) 
PSR-12 - [https://www.php-fig.org/psr/psr-12/](https://www.youtube.com/redirect?event=video_description&redir_token=QUFFLUhqbjJsOUNlV1I4Nm0zNDlhS2wzMllqdVBnOG8tZ3xBQ3Jtc0tsQ3NHSmJhV0tyd01sM0hWODJ0RnphYnpjT2k2NXloLXJVVnR5c1IweVk3dzNqeUhZVzNIdVpmWVRoUW51Vk8zVGgyNzJsY21KdGVtYlRDUjctMjl3M0p1eGZPeWFsbG5KLWxkcjg1VVVyeUppdEpxRQ&q=https%3A%2F%2Fwww.php-fig.org%2Fpsr%2Fpsr-12%2F&v=rqzYdHdyMH0) 
Symfony Coding Standards Fixer - [https://cs.symfony.com/](https://www.youtube.com/redirect?event=video_description&redir_token=QUFFLUhqbXpWeE9iMGhuTTZveEtibjdsVXZzWUxUZXJSQXxBQ3Jtc0ttWlVBZS1WRE1jdVpGc1hSTzJXVF9TazQ5SDJyQmtlMU9Cb0FqamxmaTBTV09IajV4VVZzRDRvLWVDNzdIMURpU1lrX2FNUmhsMU9WT2o0NllEcE1rZEJMME1FT0thbFlmRWlUV1lBajJoOHd5bUI0VQ&q=https%3A%2F%2Fcs.symfony.com%2F&v=rqzYdHdyMH0) 
PHP Code Sniffer - [https://pear.php.net/package/PHP_Code...](https://www.youtube.com/redirect?event=video_description&redir_token=QUFFLUhqblhQY2lwbGJNNF9VY1l6R3RIYjJheldTUDkwUXxBQ3Jtc0tsZW4tam80al9BSGd6WGdoNE1GSXMyaUZaQ3VLYTFuRWJreEdrV21FRGt6UnpaT3pmWFhHcW5jWl93TjVBM1h2dVlILXpsS2tGSGJKSmZGYTdvbTBnekVsUjAzNC1VeFNoRUVFMXZ6LWtNbFN4a0I0bw&q=https%3A%2F%2Fpear.php.net%2Fpackage%2FPHP_CodeSniffer%2F&v=rqzYdHdyMH0) 
Composer - [https://getcomposer.org/](https://www.youtube.com/redirect?event=video_description&redir_token=QUFFLUhqbC1NR3ktUzh6R3ZsZ3I5S2REUlhnNVZWU3p2QXxBQ3Jtc0tuNFRBVEFiWTJ5T1lqbk9PcjNuWEVaakRRRE9NU0xTX01pb3Q4ZzhyNklpRWpiSVBVQnNvb3VNdGp1dUZFa1Jic1JHUWJhMkNHaGtxbHJ0eFVpZnFWZkxJM0pzWWswOEJrb0Y5cmU5TmY2X0xpanRncw&q=https%3A%2F%2Fgetcomposer.org%2F&v=rqzYdHdyMH0) 
Versioning - [https://getcomposer.org/doc/articles/...](https://www.youtube.com/redirect?event=video_description&redir_token=QUFFLUhqbHo0Ym1XeWg2cWdOcmIzcTJHb1VSdk9RcEhFUXxBQ3Jtc0ttSGNCcTBHaDJaYTNldUphUkZqZWpwaDkwSnk1NHd5MFBEZzZJdEoycUNIWGNnaWVMTkF1ZjdaZ0Z1aTlMTnoweF9OUEIyOFdNdm9Xc18tT2pWUjZLamE5TGpDblZRLW1CdXQ0SG0zREdWaW82eXFUaw&q=https%3A%2F%2Fgetcomposer.org%2Fdoc%2Farticles%2Fversions.md&v=rqzYdHdyMH0) 
PHP Autoloading - [https://www.php.net/manual/en/languag...](https://www.youtube.com/redirect?event=video_description&redir_token=QUFFLUhqbUk2VDJDeUxxTzYyQU0zd3hyblh6bEdQU1pQZ3xBQ3Jtc0tuYl9RY3Z5WnA5V1JMdkpLR0dOTF9BRDFHWGpTVkRYd3JXakYwdERiNEFoRGlBdFEyekVyeS1wQmFoNlRKSGhYY1hJcVprU3gtWEVhSFEtdDZuYU1mSE5FWEdCbEdObkI0X0dsU1JmN0xfYzF0Qy1fYw&q=https%3A%2F%2Fwww.php.net%2Fmanual%2Fen%2Flanguage.oop5.autoload.php&v=rqzYdHdyMH0) 
PEAR Coding Standards - [https://pear.php.net/manual/en/standa...](https://www.youtube.com/redirect?event=video_description&redir_token=QUFFLUhqbGV6OUxNdFhEcWVIVl8xeThGVmdLVXJLSDRyZ3xBQ3Jtc0trMktOcGFRTmdoZnRrbFdQY01TYW81a2lmaEI0M095eHlyZzh4Sk1KQU1OZE9MdE1icl82VmtTc2oxaExMOXNKbUpNVlkzX3BQNzVxeFZYZjJINElmZ1BDY3lfWjFheUxDMU1RaWFsSU83ZW9vd2pSVQ&q=https%3A%2F%2Fpear.php.net%2Fmanual%2Fen%2Fstandards.php&v=rqzYdHdyMH0) 
Symfony Coding Standards - [https://symfony.com/doc/current/contr...](https://www.youtube.com/redirect?event=video_description&redir_token=QUFFLUhqbmlmNEhCRzFQU2tyNFdCQjR0VzQxVUtUVG9TZ3xBQ3Jtc0trRVlCNHFqcEkybEVzV2dPb1JRZEdmWmxrVlpHSi1NMXhVSkhUbnhGNjE3dVVMUzRzSXhpcTJhTTVWZjZ5NzhwWTBvRVdBNVNOdTRiYURwTXAxNlB3YXhEZmwyX2gyUU9CbzZ4SGhYRVRyUTlTNWZaVQ&q=https%3A%2F%2Fsymfony.com%2Fdoc%2Fcurrent%2Fcontributing%2Fcode%2Fstandards.html&v=rqzYdHdyMH0)

[00:00](https://www.youtube.com/watch?v=rqzYdHdyMH0&t=0s) - Autoloading

Autoloading is a feature in PHP that allows you to automatically load classes, interfaces, and traits without manually requiring or including their corresponding files. This makes it more convenient and efficient to work with a large number of classes and namespaces in your project. Autoloading helps maintain a clean and organized codebase by only loading the necessary files when they are actually needed.

There are different approaches to autoloading in PHP, with the most common one being the PSR-4 standard. Here's how autoloading works and how to implement it using the PSR-4 standard:

1. **Class Naming and Directory Structure**: Following the PSR-4 standard, the class name corresponds to a file path within your project. For example, the class `MyNamespace\MyClass` would be located at `MyNamespace/MyClass.php`.

2. **Autoloading Function**: You define an autoloading function that gets invoked whenever a class is used but not yet loaded. This function is responsible for including the appropriate file based on the class name.

3. **Register Autoloader**: You register your autoloading function using `spl_autoload_register()`, which allows you to add multiple autoloaders if needed.

Here's an example of how to implement autoloading using the PSR-4 standard:

```php
// Autoloading function
spl_autoload_register(function ($className) {
    // Convert class name to file path
    $filePath = str_replace('\\', DIRECTORY_SEPARATOR, $className) . '.php';
    
    // Load the class file
    require_once $filePath;
});

// Usage of classes
$obj1 = new MyNamespace\MyClass();
$obj2 = new AnotherNamespace\AnotherClass();
```

In this example, when you try to instantiate `MyNamespace\MyClass`, the autoloading function will be called and it will include the `MyNamespace/MyClass.php` file automatically. Similarly, if you instantiate `AnotherNamespace\AnotherClass`, the function will include the corresponding file.

Using autoloading helps keep your codebase organized, reduces manual `require` and `include` statements, and improves the overall maintainability of your project. There are also various tools and frameworks available that provide advanced autoloading capabilities, making it even more efficient to manage class loading in larger projects.


But you should not to memorize all, you have tools like CodeSniffer...

[05:52](https://www.youtube.com/watch?v=rqzYdHdyMH0&t=352s) - PSR

PSR stands for "PHP Standards Recommendation." It refers to a set of coding standards and guidelines created by the PHP community to establish a consistent and interoperable structure for PHP projects. The primary goal of PSRs is to ensure that code written in PHP is readable, maintainable, and can be easily shared and used by other developers.

PSRs cover various aspects of coding conventions, including coding style, autoloading, coding standards, and more. These standards help developers work together effectively, regardless of their specific project or coding style.

1. **PSR-1: Basic Coding Standard**: Provides basic guidelines for code layout, naming conventions, and other fundamental coding practices.

2. **PSR-2: Coding Style Guide**: Defines a more specific coding style guide with recommendations for indentation, line lengths, naming conventions, and more.

3. **PSR-3: Logger Interface**: Defines a common interface for logging libraries, ensuring compatibility and ease of integration across different logging implementations.

4. **PSR-4: Autoloading Standard**: Specifies how classes should be autoloaded based on namespaces and directory structures, enhancing code organization and eliminating manual `require` and `include` statements.

5. **PSR-7: HTTP Message Interface**: Defines a set of interfaces for representing HTTP messages, such as requests and responses, to ensure interoperability between different HTTP-related libraries.

6. **PSR-12: Extended Coding Style Guide**: Builds upon PSR-2 to provide more comprehensive coding style recommendations, covering areas such as type hints, nullability, and more.

7. **PSR-16: Simple Cache**: Describes a simple and consistent caching interface to be implemented by different caching libraries.

These standards are developed by the PHP Framework Interoperability Group (PHP-FIG), which is a group of representatives from various PHP projects and communities. Adhering to PSRs helps improve the quality of PHP code, encourages collaboration among developers, and promotes the use of best practices within the PHP ecosystem.

[10:27](https://www.youtube.com/watch?v=rqzYdHdyMH0&t=627s) - Composer & dependency management

Composer is a popular dependency management tool for PHP that simplifies the process of including external libraries, packages, and components into your projects. It allows you to manage your project's dependencies efficiently, ensuring that the required libraries are available and up-to-date.

1. **Installation**: Composer needs to be installed on your system. You can download and install it globally or use it per-project by including the `composer.phar` file in your project directory.

2. **composer.json File**: In your project directory, you create a `composer.json` file. This JSON file specifies the project's metadata, including its name, version, and required dependencies.

3. **Dependencies**: You list the required dependencies and their versions in the `composer.json` file. Composer uses the Packagist repository to fetch these dependencies.

4. **Running Composer**: After defining the dependencies in the `composer.json` file, you run Composer using the command line. Composer will read the file, resolve dependencies, and download the required packages to a directory called `vendor`.

5. **Autoloading**: Composer generates an autoloader that allows you to autoload classes from the `vendor` directory. This eliminates the need for manual `require` or `include` statements for each library.

6. **Updating Dependencies**: You can update the dependencies in your project by modifying the `composer.json` file and running the `composer update` command. This fetches the latest versions of the specified packages.

7. **Autoloading Custom Code**: You can also autoload your project's custom code by specifying its namespace and directory structure in the `composer.json` file.

Using Composer provides several benefits:

- **Efficiency**: Composer automates the process of fetching, installing, and updating dependencies, saving you time and reducing errors.
- **Reproducibility**: By specifying the exact version of each dependency in the `composer.json` file, you ensure that everyone working on the project uses the same versions of the libraries.
- **Easy Collaboration**: Sharing your project with others becomes easier because they can easily install the required dependencies.
- **Package Management**: Composer connects to the Packagist repository, which hosts a wide range of PHP packages and libraries. This allows you to leverage open-source solutions without reinventing the wheel.

To use Composer effectively, you need to learn how to write and manage `composer.json` files, work with namespaces, and understand the autoloading process. Composer significantly improves the management of external dependencies in PHP projects, making it an essential tool for modern PHP development.

[16:31](https://www.youtube.com/watch?v=rqzYdHdyMH0&t=991s) - Autoloading using composer

**Build and Run**:
In your project directory, run:

```bash
docker-compose up --build
```

This will build and start the containers in detached mode.

**Install Composer**:
Enter the PHP-FPM container to install Composer.

```bash
# list all containers and get the name of your project container
docker ps 

# enter with ssh
docker exec -it <project_name> bash
```

 Inside the container:

```bash
curl -sS https://getcomposer.org/installer | php -- --install-dir=/usr/local/bin --filename=composer
```


Remember that this is a basic setup. Depending on your project's requirements, you might need to customize the Dockerfiles, Nginx configuration, or other aspects of the setup. Additionally, consider using environment variables and more advanced configuration for security and scalability in a production environment.

Autoloading using Composer is a powerful and convenient way to automatically load classes, interfaces, and traits in your PHP project. Composer's autoloader eliminates the need for manual `require` or `include` statements for each library and your custom code, improving code organization and reducing development time. Here's how autoloading works using Composer:

1. **Install Composer**: First, make sure Composer is installed on your system. If not, you can download and install it following the official instructions.

2. **Create `composer.json`**: In your project directory, create a `composer.json` file (if not already present). This file describes your project's dependencies and other metadata.

3. **Define Autoload Section**: In the `composer.json` file, define the `autoload` section. This section specifies the autoloading rules for your project. The most common rule is `psr-4`, which follows the PSR-4 autoloading standard.

```json
{
    "autoload": {
        "psr-4": {
            "MyNamespace\\": "src/"
        }
    }
}
```

In this example, the `MyNamespace` namespace will be autoloaded from the `src/` directory.

4. **Install Dependencies**: If you haven't already, use the `composer install` command in your project directory to install the dependencies defined in the `composer.json` file. This will also generate an autoloader in the `vendor/` directory.

5. **Use Autoloader**: In your code, you can now use the Composer-generated autoloader to automatically load classes. Include the autoloader at the beginning of your script:

```php
require_once 'vendor/autoload.php';
```

6. **Namespace and Directory Structure**: Ensure that your namespace structure matches the directory structure. For example, if you have a class `MyNamespace\MyClass`, place it in the `src/MyNamespace/MyClass.php` file.

7. **Class Usage**: You can now use the classes without manual `require` statements:

```php
use MyNamespace\MyClass;

$obj = new MyClass();
```

8. **Custom Code**: You can also autoload your custom code by defining additional autoloading rules in the `composer.json` file.

Composer's autoloader handles the mapping between namespaces and directory paths, allowing you to focus on writing code rather than managing manual includes. It's a fundamental feature that makes modern PHP development more efficient and organized.



In the context of Composer, `require` and `require-dev` are two different sections in the `composer.json` file that specify different types of dependencies for your project.

1. **require**:
The `require` section contains the list of dependencies that your project needs to run properly in a production environment. These are the libraries and packages that your application relies on to function correctly when deployed to a live server. These dependencies are installed when you run `composer install` or `composer update`.

Example of the `require` section:

```json
{
    "require": {
        "vendor/package-name": "^1.0",
        "another-vendor/another-package": "2.0"
    }
}
```

2. **require-dev**:
The `require-dev` section contains dependencies that are only needed during development, testing, or debugging of your project. These dependencies are not required for the production environment and are often tools, testing frameworks, or libraries used during development, like unit testing or code analysis tools. These dependencies are installed when you run `composer install --dev` or `composer update --dev`.

Example of the `require-dev` section:

```json
{
    "require-dev": {
        "phpunit/phpunit": "^9.0",
        "squizlabs/php_codesniffer": "^3.0"
    }
}
```

In summary:

- Dependencies listed under `require` are necessary for your application to run in production.
- Dependencies listed under `require-dev` are only needed during development and testing.

Using `require-dev` allows you to keep your production environment clean by not including unnecessary development-related dependencies. This separation also helps reduce the size of the installed packages in production and ensures that your application's performance is not affected by unnecessary libraries and tools.

To select a dependency from Packagist for your PHP project using Composer, you need to specify the dependency in the `composer.json` file and then run the Composer commands to install or update the dependencies. Here's how:

1. **Edit `composer.json`**:
   Open your project's `composer.json` file in a text editor.

2. **Specify Dependency**:
   Under the `require` or `require-dev` section (depending on whether it's a production or development dependency), add the package name and the desired version constraint.

   For example, if you want to include the `monolog/monolog` package:

```json
{
   "require": {
	   "monolog/monolog": "^2.0"
   }
}
```

   In this case, the version constraint `^2.0` means any version greater than or equal to 2.0 but less than 3.0.

3. **Run Composer Command**:
   Open your command line or terminal and navigate to your project directory.

   - If you're installing dependencies for the first time, run:

 ```bash
 composer install
 ```

   - If you're updating existing dependencies, run:

 ```bash
 composer update
 ```

   Composer will read the `composer.json` file, resolve the dependencies, and download the specified package along with its required dependencies.

4. **Autoloading**:
   After the dependencies are installed, make sure to include Composer's autoloader in your PHP code to autoload classes from the installed packages.

```php
require_once 'vendor/autoload.php';
```

That's it! Composer will manage the installation and autoloading of the selected dependency for your project. Keep in mind that using version constraints is important to ensure compatibility with your application. You can find package names and version constraints on the Packagist website (https://packagist.org/).

Pay attention to stars, last tickets and if the project is actual. The authors must present and respond to tickets. have a look on future of the project: is it deprecated or will be deprecated ? What are the purposes of future features or issuing bugs...

The `dump-autoload` command in Composer is used to regenerate the autoloader files that allow your project to autoload classes, interfaces, and traits from the installed dependencies. This command is necessary whenever you make changes to your project's namespaces, folder structure, or when you add new dependencies.

Here's how to use the `dump-autoload` command:

1. Open your command line or terminal.

2. Navigate to your project directory where the `composer.json` file is located.

3. Run the following command to regenerate the autoloader files:

   ```bash
   composer dump-autoload
   ```

   This command regenerates the autoloader files based on the information in your `composer.json` file. It scans your project's directories, namespaces, and class files and generates optimized autoloading files in the `vendor` directory.

   You can also use the `--optimize` flag to optimize the autoloader for production use:

   ```bash
   composer dump-autoload --optimize
   ```

After running the `dump-autoload` command, Composer will update the autoloader files, and you can continue to use the autoloaded classes in your project without any issues. This command is particularly useful when you add new classes or namespaces to your project or when you install new dependencies.


When you use Composer's autoloading, it generates different types of autoloaders, including the classmap autoloader. The classmap autoloader is suitable for projects that don't strictly follow the PSR-4 directory structure and where you want to explicitly map class names to file paths.

The `autoload_classmap.php` file is a generated PHP file that's created by Composer as part of its autoloading mechanism. This file contains a map of class names to their corresponding file paths in your project. It's used to efficiently autoload classes without relying on namespaces and directory structures.

Here's how the `autoload_classmap.php` file works:

1. **Generating the Classmap**:
   When you run `composer dump-autoload`, Composer scans your project's directories for PHP files and parses them to discover class declarations. It then generates a map of class names to their respective file paths.

2. **Mapping Classes to Files**:
   The `autoload_classmap.php` file contains an associative array that maps fully qualified class names to their corresponding file paths. This allows Composer to quickly locate and include the required file when a class is used.

```php
return array(
   'MyNamespace\\MyClass' => '/path/to/MyClass.php',
   'AnotherNamespace\\AnotherClass' => '/path/to/AnotherClass.php',
   
   // ...
   
   // common use
   'App' => 'src/'
);
```

3. **Autoloading**:
   When you use a class in your code, Composer's autoloader looks up the class name in the `autoload_classmap.php` file. If a mapping exists, it includes the corresponding file, allowing you to use the class without manually including the file.

4. **Updating the Classmap**:
   Whenever you add, rename, or modify classes in your project, it's important to run `composer dump-autoload` so that Composer can regenerate the `autoload_classmap.php` file to reflect the changes.

The `autoload_classmap.php` file is just one part of Composer's autoloading mechanisms. Depending on your project's structure and adherence to PSR-4 or PSR-0 standards, Composer might also generate other autoloader files, like `autoload_psr4.php` or `autoload_namespaces.php`.

Overall, the `autoload_classmap.php` file enhances the efficiency of autoloading in projects that have complex class and file structures or that need to work with legacy code that doesn't adhere to modern PSR autoloading standards.
