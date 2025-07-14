---
title: Linters
description: Slim notes.
order: 151
---

PHP_CodeSniffer and PHP-CS-Fixer are both tools commonly used in PHP development, but they serve different purposes and have distinct functionalities:

1. **PHP_CodeSniffer**:

   - **Purpose**: PHP_CodeSniffer is primarily a code quality tool that focuses on enforcing coding standards and style guidelines in PHP code.
   
   - **Functionality**:
     - It checks your PHP code against predefined or custom coding standards (e.g., PSR-1, PSR-2, PSR-12) and reports violations.
     - It provides detailed reports on coding standard violations, including information about the location of issues.
     - PHP_CodeSniffer can be used to ensure that your code adheres to consistent coding practices across your team or project.
     - It doesn't automatically fix issues but reports them for manual correction.

   - **Typical Use Case**: PHP_CodeSniffer is often used in code review processes or as part of a continuous integration (CI) pipeline to ensure that code adheres to coding standards.

2. **PHP-CS-Fixer (PHP Coding Standards Fixer)**:

   - **Purpose**: PHP-CS-Fixer is a code formatting and style fixing tool. Its primary purpose is to automatically correct coding standard violations and format code according to specified standards.
   
   - **Functionality**:
     - It automatically scans your PHP code and fixes common coding standard violations, such as indentation, spacing, and brace style, following predefined or custom rulesets (e.g., PSR-1, PSR-2).
     - PHP-CS-Fixer can be configured to apply various coding style rules, and it can automatically fix issues in your code without requiring manual intervention.
   
   - **Typical Use Case**: PHP-CS-Fixer is commonly used to ensure that code is consistently formatted according to coding standards. It can be integrated into development workflows to automatically fix code style issues during development.

In summary, PHP_CodeSniffer is primarily a static analysis tool that identifies and reports coding standard violations without automatically fixing them, while PHP-CS-Fixer is a tool focused on automatically correcting coding standard violations to ensure consistent code formatting. Depending on your project's needs, you may use one or both of these tools to maintain code quality and style.

---


```php

```



### Keeping Credentials Secure in PHP

See [here](https://www.codementor.io/@ccornutt/keeping-credentials-secure-in-php-kvcbrk55z)

One of the most difficult things in any kind of application (not just web applications) is how to protect "secret" values. These values might be API keys, database passwords or even special bypass codes. Ideally, you're not having to define these directly in the application and can have them loaded from another source.

While a lot of the issues around protecting secrets can be removed by better secret handling, it seems like there's still always a need for some kind of secret value to exist in an application. Using this sort of pattern is, obviously, recommended against. The Common Weakness Enumeration database even has an entry specifically about it: [CWE-798](https://cwe.mitre.org/data/definitions/798.html). Hard-coding credentials, especially plain-text ones, can be a huge risk if an attacker were able to somehow access the code and read them directly.


