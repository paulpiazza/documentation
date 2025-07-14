---
title: Lesson 2.4 - Namespaces
description: Slim notes.
order: 40
---

Namespaces Docs - [https://www.php.net/manual/en/languag...](https://www.youtube.com/redirect?event=video_description&redir_token=QUFFLUhqbG5mUFB3U3FRZFFRUGZ5RURsV0gtLW04STg4d3xBQ3Jtc0tsaENWdXdIdUM2OUVKNEJIYjlDX0VIRVAyVVJCdEhYN3ZnNk9XaF9lZTBQWVNGWDFJYkJ0QVRfU3JzTjJxVHNyX294VjlmYWhqamg3azhGUFozUlhlZWdQaUc2SHJKZ3ZjczZWckp1bHZrejl2T2RTdw&q=https%3A%2F%2Fwww.php.net%2Fmanual%2Fen%2Flanguage.namespaces.php&v=Jni9c0-NjrY) 
Name Resolution Rules - [https://www.php.net/manual/en/languag...](https://www.youtube.com/redirect?event=video_description&redir_token=QUFFLUhqbGppeDdjUFFBeVlsbFBfV2VUMXVGWmV2dkltd3xBQ3Jtc0tuMHdtSVJzTlhud0gxd1dFRFZPMXlYY2xucXctS1BuZDlXaE9GakQ4S0RLVmhaWUh0OEpRRm51dlVfb2w5dHhqTmlRanV4ZFhRQTBtS3BFZmVMOG0zc1lZMHFLdFp4RF9rc3AxQ013RUx4T1BKVUZoWQ&q=https%3A%2F%2Fwww.php.net%2Fmanual%2Fen%2Flanguage.namespaces.rules.php&v=Jni9c0-NjrY) 
How does a name like \my\name or \name resolve? [https://www.php.net/manual/en/languag...](https://www.youtube.com/redirect?event=video_description&redir_token=QUFFLUhqa25ZRlRsOFJlNnY3d2JRSFdOdU9PeE1NaVJ3QXxBQ3Jtc0tsS0dIQzkwR0pVNXVrbmRmVzdjZHRTTXAyd1EyVU1KX3BacUpoYkp6ZGFNcFprTFQ5c3ZGWFJzUjhfT25QdTB0WThqUldZdWxTblEtSEZfVE41RHRsV29wcmptQTFhRzRtUTlyMmZ6MTBSelB2SWpsTQ&q=https%3A%2F%2Fwww.php.net%2Fmanual%2Fen%2Flanguage.namespaces.faq.php%23language.namespaces.faq.full&v=Jni9c0-NjrY) 
How does a name like my\name resolve? [https://www.php.net/manual/en/languag...](https://www.youtube.com/redirect?event=video_description&redir_token=QUFFLUhqbEN4OE93Z04yNS1RUElmb1J2VkZzS0oyM2lsQXxBQ3Jtc0trWGV5eXp3Q1pFbWtRVFh0SGUyNEZHNGxoLUdxNGZnUkdHSUVfZTkzc1lRVjNvSWZ5SzlRQm9tU2lyd0JuMGR4VUM3aEtjUVZpMjhkdWhXTnlwOE96bXJ0UkE1SzBwRVkzMm5TLU80czlkT2ZVRE1NSQ&q=https%3A%2F%2Fwww.php.net%2Fmanual%2Fen%2Flanguage.namespaces.faq.php%23language.namespaces.faq.qualified&v=Jni9c0-NjrY) 
How does an unqualified class name like name resolve? [https://www.php.net/manual/en/languag...](https://www.youtube.com/redirect?event=video_description&redir_token=QUFFLUhqa1hiR2VPUHNJbUxkWkE0NFBsX3diME1iTktjUXxBQ3Jtc0tudXc4QlBLeFNGb1FDTmlsN1MtQmIwQVI2UGVvVDNUR3ZVbHBlMXdBdGROemVJOUdZQWotbE9RRVJQNUcyU2s3X1BPSUNBd1JXYmFEM1Y0Z0swdlRoekVGSDVVRTRiek96RlhkTXlZcUVUbVhsamZaZw&q=https%3A%2F%2Fwww.php.net%2Fmanual%2Fen%2Flanguage.namespaces.faq.php%23language.namespaces.faq.shortname1&v=Jni9c0-NjrY) 
How does an unqualified function name or an unqualified constant name like name resolve? [https://www.php.net/manual/en/languag...](https://www.youtube.com/redirect?event=video_description&redir_token=QUFFLUhqazM1QlZnMjNCRDdfdkt0aG1PZ1R6TTlTLVRKQXxBQ3Jtc0tsb0FEdWFhWEhJcFZBQ05uUmVudVROSXg1S05jeWh6TnNoLVpZUU1XZDVINUM0UlltUU5uVDdKbko2S2NuemhhOXcxRlVyV2RWdUhIRjQwTVJJM3pKWGhRT2hMT2hCOHVUV2lmY2hYMGFNa0RqQU9rVQ&q=https%3A%2F%2Fwww.php.net%2Fmanual%2Fen%2Flanguage.namespaces.faq.php%23language.namespaces.faq.shortname2&v=Jni9c0-NjrY) 
Defining Multiple Namespaces In The Same File [https://www.php.net/manual/en/languag...](https://www.youtube.com/redirect?event=video_description&redir_token=QUFFLUhqa3plX0R5TGNSdW40a1lxY0tyemdMVG5ZZXp0Z3xBQ3Jtc0tuV1Y0V2o1REp4V2MtOVh3MGhHV2U3eG1SdWdSVDJYQlY0M3lHYng1NW41dHBZQjJLNDUxckNBbXphcHhlNzBmSXVhYTc5SnVuUnQtSWE1clhIRVI1MDNwX3F6dGZXVG9VVFdyeEljakpoeXAwSDFXbw&q=https%3A%2F%2Fwww.php.net%2Fmanual%2Fen%2Flanguage.namespaces.definitionmultiple.php&v=Jni9c0-NjrY)


Namespaces in PHP provide a way to organize and encapsulate code to prevent naming conflicts and create a logical structure for your classes, functions, and constants.

Namespaces help to avoid collisions between class names and other symbols, especially when working on projects that involve multiple developers or third-party libraries.

It's a good practice that the namespaces names matches the folders structure.


1. **Definition and Declaration**: You define a namespace using the `namespace` keyword. This is typically placed at the top of your PHP file before any other code. For example:

   ```php
   namespace MyProject\Utilities;
   ```

2. **Using Namespaces**: Once a namespace is defined, any classes, functions, or constants declared within that file will be part of that namespace. If you're using a class or function from another namespace, you need to either provide the full namespace path or import it using the `use` keyword.

   ```php
   use MyProject\Utilities\MyClass; // Import MyClass from the namespace
   
   $object = new MyClass(); // Using the class from the imported namespace
   ```

3. **Global Namespace**: If you don't provide a namespace, your code belongs to the global namespace. Namespaces provide a way to avoid clashes with names in the global namespace.

4. **Subnamespaces**: You can define subnamespaces to further organize your code. For example, if you have a namespace `MyProject\Utilities`, you could have subnamespaces like `MyProject\Utilities\Text` and `MyProject\Utilities\IO`.

5. **Alias**: You can also alias namespaces to make them easier to use, especially if they have long names.

   ```php
   use MyProject\Utilities as Util; // Alias for MyProject\Utilities
   
   $object = new Util\MyClass(); // Using the alias
   ```

6. **Autoloading**: Namespaces work well with autoloading, which allows you to automatically load classes when they're needed, improving code organization and performance.

7. **PSR-4 Standard**: The PSR-4 autoloading standard is widely used in the PHP community for autoloading classes based on namespace. This helps maintain a consistent structure across projects.

Namespaces are particularly important in larger projects or when you're collaborating with other developers, as they help prevent naming conflicts and make your code more organized and readable.

And here is the syntax for importing multiple functions:

```php
use namespace_name\{function1, function2, function3};
```

Best Practices for Using Namespaces

- Use descriptive and meaningful names for namespaces to avoid conflicts and improve code readability.
- Use the PSR-4 Autoloader standard to manage autoloading of classes and files.
- Do not use `global` or `namespace` keywords inside classes, as it makes the code hard to follow.
- Use `use` statements sparingly to prevent cluttering the code with too many imports.
- Avoid long namespaces that may cause performance issues, especially when using a large number of classes or files.

PHP's name resolution rules dictate how PHP determines the location of classes, functions, and constants within namespaces. These rules are important for understanding how PHP interprets and processes code within different namespaces. The name resolution rules can be summarized as follows:

1. **Unqualified Name**: An unqualified name refers to a class, function, or constant without a namespace prefix. PHP first looks for the name in the current namespace. If not found, it searches in the global namespace.

2. **Qualified Name**: A qualified name includes the namespace prefix. For example, `MyNamespace\MyClass`. PHP will look for the qualified name in the specified namespace.

3. **Fully Qualified Name**: A fully qualified name is an absolute reference to a class, function, or constant. It starts with a namespace separator `\` and includes the complete namespace path, such as `\MyNamespace\MyClass`.

4. **Relative Name**: A relative name starts with the namespace alias, followed by the unqualified name. It allows you to access classes, functions, and constants within a specified namespace alias.

5. **Use Declarations**: The `use` keyword is used to import classes, functions, or constants from another namespace into the current scope. This can help reduce the verbosity of code.

6. **Namespace Operators**: The `::` operator is used to access static members of a class. The `->` operator is used to access instance members.

7. **Aliases**: When two classes with the same name exist in different namespaces, you can use aliases to resolve the ambiguity. Aliases are defined using the `as` keyword in the `use` statement.

8. **Global Namespace**: The global namespace is referred to by using the namespace separator `\`. This allows you to access global functions and constants.

These rules help PHP determine the appropriate context for resolving names in different namespaces and ensure that code remains organized and free from naming conflicts. Understanding these rules is crucial for effective use of namespaces in PHP.

 