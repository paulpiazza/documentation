---
title: Lesson 1.27 - PHP.INI - Configuration File
description: Slim notes.
order: 29
---

See [init list](https://www.php.net/manual/en/ini.list.php)
See [init core]()https://www.php.net/manual/en/ini.core.php

>[!info]
> 'Changeable' means that you should use the flag named into these functions `ini_set()` or `ini_get()` if you want to configure it at the beginning of the file.

The `php.ini` configuration file is a crucial part of PHP that allows you to customize various settings and behaviors of the PHP interpreter. It controls how PHP behaves and interacts with the server, applications, and other resources. While the most useful configuration settings can vary depending on the specific requirements of your PHP application, some commonly used and important ones include:

1. `display_errors`: This setting controls whether PHP should display errors and warnings directly on the screen. In production environments, it is recommended to set this to `Off` to prevent sensitive information from being exposed.

2. `error_reporting`: Determines which types of errors and warnings are displayed. It is recommended to set this to an appropriate level (e.g., `E_ALL` for development) to ensure all errors are logged and addressed.

3. `date.timezone`: Sets the default timezone used by PHP date and time functions. It's essential to set the timezone to match your application's requirements accurately.

4. `max_execution_time`: Limits the maximum time (in seconds) a PHP script is allowed to run. Useful for preventing long-running scripts from consuming excessive server resources.

5. `upload_max_filesize`: Defines the maximum file size (in bytes) that can be uploaded via HTTP POST. Adjust this value based on your application's requirements.

6. `post_max_size`: Specifies the maximum size (in bytes) of POST data that PHP will accept. Should be greater than or equal to `upload_max_filesize`.

7. `memory_limit`: Sets the maximum amount of memory (in bytes) that PHP scripts can consume. Adjust based on the memory requirements of your application.

8. `session.save_path`: Specifies the directory where session data is stored. Make sure this directory is writable by the web server.

9. `short_open_tag`: Enables or disables the use of short tags (`<? ?>`) for PHP code. It's generally recommended to avoid using short tags for better compatibility.

10. `opcache.enable`: Enables or disables the OPcache extension, which helps improve PHP performance by caching compiled bytecode.

11. `opcache.revalidate_freq`: Specifies how often (in seconds) the OPcache should check for changes to the PHP files.

These are just a few examples of the essential configuration settings in the `php.ini` file. Depending on your specific application's requirements, you may need to adjust other settings related to database connections, file handling, security, and more. Always refer to the official PHP documentation and consider the specific needs of your application when configuring `php.ini`. Additionally, keep in mind that some settings may vary between different PHP versions, so it's essential to be aware of the specific settings available for your PHP version.
