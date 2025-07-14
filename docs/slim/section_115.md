---
title: Lesson P.11 - XSS Explained - What Is Cross Site Scripting
description: Slim notes.
order: 115
---

ccccccc
See [Twig escape](https://twig.symfony.com/doc/3.x/filters/escape.html)
See [phphtmlspecialchars](https://www.php.net/htmlspecialchars)
See [XSS in PHP](https://www.geeksforgeeks.org/how-to-prevent-xss-with-html-php/?locale=en)


The video explains what cross-site scripting (XSS) is and how applications can be protected against XSS attacks by properly escaping or encoding the output. It also demonstrates XSS vulnerabilities in PHP templates and showcases how to mitigate them using the HTML special chars function and the Escape filter in Twig.

XSS stands for Cross-Site Scripting. It is a type of security vulnerability that allows attackers to inject malicious scripts into web pages viewed by other users. This can lead to various attacks, such as stealing sensitive information or performing unauthorized actions on behalf of the user. It is important for developers to implement proper input validation and output encoding techniques to prevent XSS attacks.

XSS (Cross-Site Scripting) and CSRF (Cross-Site Request Forgery) are both web security vulnerabilities, but they differ in terms of their attack vectors and goals.

XSS allows an attacker to inject and execute malicious scripts within the context of a victim's browser. This can lead to various attacks, such as stealing sensitive information, session hijacking, or defacing websites. The injected script is executed within the victim's browser, making it appear as if it came from a trusted source.

On the other hand, CSRF involves tricking a victim into performing unintended actions on a website without their knowledge or consent. This is achieved by exploiting the trust that a website has in a user's browser. The attacker crafts a malicious request that is automatically sent to the targeted website using the victim's authenticated session. This can lead to actions like changing account settings, making unauthorized transactions, or performing actions on behalf of the victim.

In summary:
- XSS focuses on injecting and executing malicious scripts within a victim's browser.
- CSRF focuses on tricking a victim into performing unintended actions on a website using their authenticated session.

Both XSS and CSRF are serious security risks that can have significant consequences if not properly mitigated. Web developers should employ various security measures, such as input validation, output encoding, and CSRF tokens, to protect against these vulnerabilities.

[1]: [PortSwigger - XSS vs CSRF](https://portswigger.net/web-security/cross-site-scripting/cheat-sheet)
[2]: [GeeksforGeeks - Difference between XSS and CSRF](https://www.geeksforgeeks.org/difference-between-xss-and-csrf/)
[3]: [Bright Security - CSRF vs XSS: What are their similarity and differences](https://brightsecurity.medium.com/csrf-vs-xss-what-are-their-similarity-and-differences-2c0fde3b4f2a)
[4]: [Crashtest Security - XSS vs CRSF - The differences fully explained](https://www.crashtest-security.com/blog/xss-vs-csrf-the-differences-fully-explained/)



[00:00](https://www.youtube.com/watch?v=gPU_jyKDYx0&t=0.299) XSS attacks involve injecting malicious scripts into trusted websites through user input and output without proper validation or encoding.
- These attacks are widespread and can occur anywhere a web application uses user input within its output.
- The video provides an example of how the attacker can exploit a vulnerability in the registration form of an expense app.
- The video also explains how the app globally passes down user information to tweak templates.
    
[02:43](https://www.youtube.com/watch?v=gPU_jyKDYx0&t=163.5) User input should never be trusted, as it can potentially be harmful, including the injection of malicious code, such as JavaScript, CSS, and URL. Properly escaping or encoding the output is the solution, and Twig has already covered this.
- User input should never be trusted, always assume the worst.
- Injected code can include malicious JavaScript that can send private data to attackers or redirect users.
- Escaping or encoding the output is the solution, and Twig has already covered this.
- If using PHP templates, the output must be escaped manually.
    
[05:28](https://www.youtube.com/watch?v=gPU_jyKDYx0&t=328.86) Disabling automatic escape in Twig templates can allow for JavaScript injection attacks.
- Twig and most other templating engines use PHP function HTML special Choice to handle escaping.
- HTML special charts convert special HTML characters to HTML entities to prevent them from being rendered as valid HTML tags.
- Disabling escaping can be done globally or for specific fields using the raw filter.
- Disabling escaping can allow for JavaScript code injection attacks.
    
[08:14](https://www.youtube.com/watch?v=gPU_jyKDYx0&t=494.759) XSS vulnerabilities can be present not only within HTML body, but also in attributes, CSS, JavaScript variables, and URLs, and it is important to properly escape them using a templating engine like Twig or HTML special characters function in PHP.
- XSS vulnerabilities can be present in HTML attributes, CSS, JavaScript variables, and URLs.
- Properly escaping is important to prevent XSS attacks.
- Templating engines like Twig or HTML special characters function in PHP can be used for proper escaping.
    
[11:00](https://www.youtube.com/watch?v=gPU_jyKDYx0&t=660.899) Sanitizing data before saving it in the database may not always be a good idea due to the need for raw data and potential impact on user experience.
- Sanitizing data is a good option for fields like the name field to ensure valid input.
- Stripping away all tags and special characters from text may not be ideal because it can affect the raw data and user experience.
- Saving data as it is in the database is recommended unless special characters need to be stripped in certain cases.
- It is important to escape the output when displaying data to prevent XSS exploitation.
    
[13:46](https://www.youtube.com/watch?v=gPU_jyKDYx0&t=826.92) To prevent XSS attacks, use the Escape filter with HTML attribute context in Twig.
- Close the title attribute and div element to execute the script.
- Use auto escaping to prevent script execution.
- Use Escape filter or its short version "e" for attribute context in Twig.
    