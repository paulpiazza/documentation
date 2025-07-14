---
title: Lesson 3.21 - PHP cURL API Tutorial & Emailable API Integration
description: Slim notes.
order: 92
---
See [cURL](https://www.php.net/manual/en/book.curl.php)

cURL (Client URL) is a library and command-line tool for transferring data with URLs. In the context of PHP, cURL is often used as an extension or library to make HTTP requests from PHP scripts to interact with web services, APIs, and remote resources. It provides an easy way to send HTTP requests, handle responses, and work with remote servers.

Here are some key features and use cases of cURL in PHP:

1. **Sending HTTP Requests:** You can use cURL in PHP to send HTTP requests to web servers. This includes making GET, POST, PUT, DELETE, and other HTTP method requests to retrieve data, submit forms, or interact with web services.

2. **Handling Cookies:** cURL allows you to manage cookies during HTTP requests and maintain stateful sessions with remote servers. This is essential when interacting with websites that require authentication or session management.

3. **Customizing Request Headers:** You can set custom HTTP headers, such as User-Agent, Accept-Language, or Authorization, to send along with your requests.

4. **Uploading and Downloading Files:** cURL can handle file uploads to remote servers and file downloads from them. This is useful when working with file transfer services or APIs.

5. **Handling SSL/TLS:** cURL provides SSL/TLS support, allowing you to connect to secure (HTTPS) endpoints and verify SSL certificates.

6. **Follow Redirects:** cURL can automatically follow HTTP redirects, making it easy to handle resources that have moved or require redirection.

7. **Timeouts and Retries:** You can set timeout values and specify the number of retries for failed requests, ensuring robustness in unreliable network conditions.

8. **Proxy Support:** cURL supports connecting through proxy servers, enabling you to make requests from behind a proxy network.

In PHP, you can use cURL in two ways:

1. **cURL Extension:** PHP has a cURL extension that provides a set of functions for making HTTP requests. You can enable this extension in your PHP configuration or by installing it as a separate package.

   Example of using the cURL extension in PHP:

   ```php
   $ch = curl_init('https://example.com');
   curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
   $response = curl_exec($ch);
   curl_close($ch); // <= it's not more need since php 8
   ```

2. **cURL Library with `curl_exec` Function:** You can use the `curl_exec` function to make HTTP requests without the cURL extension. This method is available if the cURL extension is not enabled or you prefer not to use it.

   Example of using the cURL library in PHP:

   ```php
   $ch = curl_init('https://example.com');
   curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
   $response = curl_exec($ch);
   curl_close($ch);
   ```

cURL in PHP is a versatile tool for interacting with web resources and APIs, making it a valuable tool for web development and data retrieval tasks. It provides a flexible and programmatic way to work with remote data sources and external services.

To add the cURL command-line tool to a Docker image, you can create a Dockerfile that starts with a base image, installs cURL within the image, and then sets any additional configuration you need. Here's how you can create a Dockerfile to add cURL:

1. **Create a Dockerfile:**

   Create a new file named `Dockerfile` (without an extension) in your project directory or any directory where you want to build your Docker image.

2. **Define the Base Image:**

   Start your Dockerfile by specifying a base image. The base image serves as the starting point for your image. You can choose a base image based on your project's requirements. For this example, we'll use a Debian-based image as an example:

   ```Dockerfile
   # Use a Debian-based image as the base
   FROM debian:buster-slim
   ```

   You can replace `debian:buster-slim` with any other base image you prefer, depending on your specific needs.

3. **Install cURL:**

   Next, install cURL within the Docker image. You can use the package manager specific to the base image you chose. For a Debian-based image, you can use `apt-get`:

   ```Dockerfile
   RUN apt-get update && apt-get install -y curl
   ```

   This command updates the package list and installs cURL.

4. **Set Additional Configuration (Optional):**

   If you have any additional configuration steps or requirements for your Docker image, add them here. This could include copying files into the image, setting environment variables, or configuring entry points.

5. **Clean Up (Optional):**

   To reduce the image size, you can clean up any unnecessary files or cache created during the installation process. This step is optional but can help minimize the image size:

   ```Dockerfile
   RUN apt-get clean && rm -rf /var/lib/apt/lists/*
   ```

6. **Define the Container's Behavior:**

   Finally, specify the behavior of the container when it starts. This can include setting an entry point or command to execute when the container runs. For example:

   ```Dockerfile
   CMD ["curl", "--help"]
   ```

   In this example, when you run a container from this image, it will execute the `curl --help` command.

7. **Build the Docker Image:**

   Navigate to the directory containing your Dockerfile and execute the following command to build the Docker image:

   ```bash
   docker build -t my-curl-image .
   ```

   Replace `my-curl-image` with a name of your choice.

8. **Run a Container:**

   You can now run a container from the image you built, and cURL will be available inside the container:

   ```bash
   docker run -it my-curl-image
   ```

   This will start an interactive shell in the container, and you can use cURL as needed.

By following these steps, you can create a Docker image that includes the cURL command-line tool, making it available for various use cases within your containers.

To catch and handle errors when using cURL in PHP, you can use the `curl_errno` and `curl_error` functions provided by the cURL library. These functions allow you to check for errors that may occur during the execution of cURL requests. Here's how you can use them:

```php
// Initialize a cURL session
$ch = curl_init('https://example.com');

// Set cURL options as needed
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);

// Execute the cURL request
$response = curl_exec($ch);

// Check for cURL errors
if (curl_errno($ch)) {
    $error_message = curl_error($ch);
    // Handle the error, log it, or perform other actions
    echo "cURL Error: $error_message";
} else {
    // No cURL errors, continue processing the response
    echo "Response: $response";
}

// Close the cURL session
curl_close($ch);
```

In this example:

1. `curl_init`: Initializes a cURL session with the specified URL.
2. `curl_setopt`: Sets cURL options, such as `CURLOPT_RETURNTRANSFER`, which makes `curl_exec` return the response data instead of outputting it directly.
3. `curl_exec`: Executes the cURL request and stores the response in the `$response` variable.

After executing the request, we use `curl_errno` to check if any cURL-specific errors occurred. If `curl_errno` returns a non-zero value, it indicates an error. In such cases, you can retrieve the error message using `curl_error` and handle the error as needed. This might include logging the error, displaying a user-friendly message, or taking corrective actions.

If `curl_errno` returns 0, it means there were no cURL errors, and you can continue processing the response data as shown in the `else` block.

By using `curl_errno` and `curl_error`, you can effectively catch and handle cURL errors in your PHP code, ensuring robust error management when making HTTP requests with cURL.
