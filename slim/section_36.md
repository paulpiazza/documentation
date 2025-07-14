---
title: Lesson 2.1 - Docker - Nginx - FPM
description: Slim notes.
order: 36
---

It seems like you're asking about using Docker to set up an Nginx and PHP-FPM environment. Docker is a platform that allows you to package, distribute, and run applications in isolated containers. Setting up an Nginx and PHP-FPM environment using Docker can help you manage your web application's infrastructure more efficiently.

Here's a basic example of how you can create a Dockerized Nginx and PHP-FPM environment:

1. Create a directory for your project and navigate into it:
   ```sh
   mkdir my-php-app
   cd my-php-app
   ```

2. Create a `Dockerfile` for PHP-FPM:
   Create a file named `Dockerfile` in your project directory and add the following content:
   ```Dockerfile
   # Use an official PHP-FPM base image
   FROM php:7.4-fpm

   # Install required extensions
   RUN docker-php-ext-install pdo pdo_mysql

   # Set working directory
   WORKDIR /var/www/html

   # Expose port for PHP-FPM
   EXPOSE 9000

   # Start PHP-FPM
   CMD ["php-fpm"]
   ```

3. Create an Nginx configuration file:
   Create a file named `nginx.conf` in your project directory and add the following content:
   ```nginx
   server {
       listen 80;
       server_name localhost;
       root /var/www/html;

       location / {
           try_files $uri /index.php$is_args$args;
       }

       location ~ \.php$ {
           fastcgi_pass php-fpm:9000;
           fastcgi_index index.php;
           include fastcgi_params;
           fastcgi_param SCRIPT_FILENAME $document_root$fastcgi_script_name;
           fastcgi_param PATH_INFO $fastcgi_path_info;
       }
   }
   ```

4. Create a `docker-compose.yml` file:
   Create a file named `docker-compose.yml` in your project directory and add the following content:
   ```yaml
   version: '3'
   services:
   
     php-fpm:
       build:
         context: .
         dockerfile: Dockerfile
       volumes:
         - ./src:/var/www/html

     nginx:
       image: nginx:alpine
       volumes:
         - ./src:/var/www/html
         - ./nginx.conf:/etc/nginx/conf.d/default.conf
       ports:
         - "8080:80"
       depends_on:
         - php-fpm
   ```

5. Create a directory named `src` and put your PHP files in it.

6. Build and start the Docker containers:
   ```sh
   docker-compose up --build
   ```

This setup uses Docker Compose to define and manage the Nginx and PHP-FPM containers. Nginx listens on port 8080 and forwards PHP requests to the PHP-FPM container. Your PHP files should be placed in the `src` directory.

Remember that this is a basic example, and you can customize it to match your project's requirements. Make sure to secure your environment and configure additional settings as needed for your specific application.

FPM stands for "FastCGI Process Manager." It is a PHP-FPM (FastCGI Process Manager) is an alternative PHP FastCGI implementation with some additional features useful for high-performance PHP applications.

FastCGI is a protocol for interfacing web servers with applications (e.g. PHP). Unlike the traditional CGI method of executing scripts, which starts a new process for each request, FastCGI uses a persistent process manager to handle multiple requests over time. This approach can significantly improve the performance and efficiency of executing PHP scripts, especially in high-traffic web applications.

PHP-FPM extends the FastCGI protocol and adds a process manager that can manage and control the execution of PHP processes. It allows for features like:

1. **Process Pooling**: PHP-FPM maintains a pool of worker processes that can handle incoming requests. This eliminates the overhead of starting a new PHP process for every request, which can be resource-intensive.

2. **Resource Management**: PHP-FPM provides control over process management, allowing you to set parameters like the number of child processes, maximum requests per process, and more.

3. **Efficient Request Handling**: PHP-FPM can manage the lifecycle of PHP processes, recycling them after a certain number of requests or based on time limits. This helps prevent memory leaks and ensures consistent performance.

4. **Isolation and Security**: PHP-FPM processes are isolated from each other, providing enhanced security. Each process can have its own user and group settings, helping to minimize the impact of security breaches.

5. **Dynamic Configuration**: PHP-FPM allows you to adjust its configuration settings on the fly without restarting the entire PHP server, providing better flexibility and adaptability.

PHP-FPM is commonly used with web servers like Nginx and Apache to process PHP requests. When a request comes in, the web server forwards it to the PHP-FPM process manager, which then routes the request to an available PHP worker process. This architecture helps to efficiently handle a large number of incoming requests and distribute the load across multiple processes.

Overall, PHP-FPM is a critical component for optimizing the performance and scalability of PHP applications, especially in scenarios where high concurrency and rapid request handling are required.
