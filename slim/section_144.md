---
title: Session Regeneration and Session setting in PHP configs
description: Slim notes.
order: 144
---

Session regeneration, along with using secure and HTTP-only flags for session cookies, is a good practice to enhance the security of your PHP sessions. Here's an example of how to implement session regeneration using these techniques:

```php
session_start(); // Start or resume the session

// Check if session ID needs to be regenerated (e.g., after login)
if (!isset($_SESSION['regenerated'])) {
    // Regenerate the session ID and mark it as regenerated
    session_regenerate_id(true);
    $_SESSION['regenerated'] = true;
}

// Store and retrieve session data
$_SESSION['username'] = 'john_doe';
// ... other session data ...

// Set secure and HTTP-only flags for the session cookie
session_set_cookie_params([
    'lifetime' => 0, // Use default expiration (session)
    'path' => '/',
    'domain' => $_SERVER['HTTP_HOST'],
    'secure' => true,    // Use 'true' for HTTPS
    'httponly' => true,
    'samesite' => 'Lax', // Adjust this based on your needs
]);

// Send the session cookie
session_start();
```

In this example, when a user logs in or performs any action that requires a new session, we regenerate the session ID using `session_regenerate_id(true)` and mark it as regenerated in the session data. This helps prevent session fixation attacks by changing the session ID on user activity.

Additionally, we use the `session_set_cookie_params()` function to set secure and HTTP-only flags for the session cookie. The `'secure' => true` flag ensures that the cookie is only sent over HTTPS, enhancing security. The `'httponly' => true` flag prevents JavaScript from accessing the cookie, adding another layer of protection against cross-site scripting (XSS) attacks.

Keep in mind that the `'samesite'` attribute in the `session_set_cookie_params()` function controls when the browser sends the session cookie along with requests. `'Lax'` is a common value that balances security and usability by allowing cookies to be sent with top-level navigation (GET requests) but not with cross-origin POST requests initiated by forms.

Remember to adjust these settings based on your application's security requirements and user experience.

You can configure PHP session settings using the `php.ini` configuration file. The `php.ini` file allows you to control various aspects of sessions, including session storage, session behavior, and security settings. Here are some common session-related configuration options that you can adjust in the `php.ini` file:

1. **session.save_handler:** Determines where session data is stored. Possible values include `files`, `memcached`, `redis`, `database`, etc.
   
   Example: `session.save_handler = files`

2. **session.save_path:** Specifies the location where session data is stored for the `files` save handler. For other save handlers, this might refer to connection details.

   Example: `session.save_path = "/tmp"`

3. **session.cookie_lifetime:** Sets the lifetime of the session cookie in seconds. Use `0` for a session cookie that expires when the browser is closed.

   Example: `session.cookie_lifetime = 3600`

4. **session.cookie_secure:** Specifies whether the session cookie should only be transmitted over HTTPS. Set to `1` for secure transmission.

   Example: `session.cookie_secure = 1`

5. **session.cookie_httponly:** Controls whether the session cookie is accessible only through the HTTP protocol (i.e., not accessible via JavaScript).

   Example: `session.cookie_httponly = 1`

6. **session.use_only_cookies:** Forces sessions to use only cookies for session ID transmission.

   Example: `session.use_only_cookies = 1`

7. **session.name:** Specifies the name of the session cookie.

   Example: `session.name = PHPSESSID`

8. **session.gc_maxlifetime:** Sets the maximum lifetime of sessions in seconds. After this period of inactivity, sessions are considered garbage and are cleaned up.

   Example: `session.gc_maxlifetime = 1440`

9. **session.gc_probability and session.gc_divisor:** Control the probability that the garbage collection process (session cleanup) is executed.

   Example: `session.gc_probability = 1` and `session.gc_divisor = 100`

Remember to restart your web server (or PHP service) after making changes to the `php.ini` file for the changes to take effect.

Please note that the session-related options in `php.ini` can have security and performance implications. Make sure to carefully configure these options based on your application's requirements and security considerations.
