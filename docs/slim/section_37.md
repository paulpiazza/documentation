---
title: Docker - Nginx - FPM
description: Slim notes.
order: 37
---

### Get Started

Here's an example of a Docker Compose setup for a PHP 8.2 application with Nginx, PHP-FPM, and MySQL. This configuration will allow you to run your PHP application with a web server (Nginx), PHP 8.2 using PHP-FPM, and a MySQL database in separate containers.

**Dockerfile (PHP 8.2 with PHP-FPM):**

```Dockerfile

# image docker for php 8
FROM php:8.2-fpm

ARG USER
ARG USER_ID
ARG GROUP_ID

WORKDIR /var/www

# install 
RUN apt-get update && apt-get install -y \
    git \
    zip \
    unzip \
    curl \
    vim \
    libicu-dev

# install Composer globally
RUN curl -sS https://getcomposer.org/installer | php -- --install-dir=/usr/local/bin --filename=composer

# install pdo, intl
RUN docker-php-ext-configure intl
RUN docker-php-ext-install pdo pdo_mysql intl

# install xdebug
RUN pecl install xdebug \
    && docker-php-ext-enable xdebug

COPY xdebug.ini "${PHP_INI_DIR}/conf.d"

# user group setup
RUN groupadd --force -g $GROUP_ID $USER
RUN useradd -ms /bin/bash --no-user-group -g $GROUP_ID -u 1337 $USER
RUN usermod -u $USER_ID $USER

# switching user
USER $USER
```

`USER $USER` changes the user context within the Docker container to the user specified by the `$USER` variable. This is done to run subsequent commands as the specified user, rather than the default root user. Running services and scripts as a non-root user is considered a best practice for security and isolation reasons.

- `groupadd --force -g $GROUP_ID $USER` creates a group with the given ID (`$GROUP_ID`) and name (`$USER`). The `--force` flag ensures that the group is created even if it already exists.
    
- `useradd -ms /bin/bash --no-user-group -g $GROUP_ID -u 1337 $USER` adds a new user with the specified user ID (`-u 1337`), group ID (`-g $GROUP_ID`), and username (`$USER`). The `-ms` flag sets the user's shell to `/bin/bash`, and `--no-user-group` ensures that a group with the same name as the user is not created.
    
- `usermod -u $USER_ID $USER` modifies the user's ID to match the specified `$USER_ID`. This might be useful for ensuring that the user running PHP inside the container has a consistent user ID.


**Nginx Configuration File (`nginx.conf`):**

```nginx
server {
    listen 80;
    server_name localhost;
    root /var/www/html/public; # Adjust this path to your application's public directory

    location / {
        try_files $uri /index.php$is_args$args;
    }

    location ~ \.php$ {
        fastcgi_pass php:9000; # PHP-FPM container hostname and port
        fastcgi_index index.php;
        fastcgi_param SCRIPT_FILENAME $document_root$fastcgi_script_name;
        include fastcgi_params;
    }

    # Additional Nginx configuration can be added here
}
```

**Docker Compose Configuration (`docker-compose.yml`):**

```yaml
version: '3.8'

services:

  app:
    build:
      context: ""
      dockerfile: Dockerfile
      args:
        USER_ID: '${WWWUSER:-1000}'
        GROUP_ID: '${WWWGROUP:-1000}'
        USER: '${USER:-whoami}'
    container_name: expennies-app
    restart: always
    working_dir: /var/www/
    extra_hosts:
      - "host.docker.internal:host-gateway"
    volumes:
      - ../:/var/www

  nginx:
    image: nginx:1.19-alpine
    container_name: expennies-nginx
    restart: always
    ports:
      - "8000:80"
    volumes:
      - ../:/var/www
      - ./nginx:/etc/nginx/conf.d

  db:
    container_name: expennies-db
    image: mysql:8.0
    volumes:
      - ./storage/mysql:/var/lib/mysql
    restart: always
    environment:
      MYSQL_ROOT_PASSWORD: root
    ports:
      - "3306:3306"
```

In this setup:

- The PHP-FPM container uses the official PHP 8.2 FPM image, installs necessary extensions (e.g., `pdo` and `pdo_mysql`), exposes port 9000 for PHP-FPM communication, and starts PHP-FPM.

- The Nginx container uses the official Nginx image, listens on port 80, and uses the `nginx.conf` configuration file. It forwards PHP requests to the PHP-FPM container using the hostname `php`.

- The MySQL container uses the official MySQL 5.7 image and sets up environment variables for the database credentials. Make sure to replace `your_mysql_root_password`, `your_database_name`, `your_mysql_user`, and `your_mysql_password` with your actual database configuration.

- The `docker-compose.yml` file defines three services (`php`, `nginx`, and `mysql`) and sets up a custom network (`app-network`) for communication between the containers.

- The Nginx configuration file (`nginx.conf`) should be placed in the same directory as your `docker-compose.yml` file. Adjust the `root` directive in the Nginx configuration to point to your application's public directory.

- Place your PHP application files in a `src` directory in the same directory as your `docker-compose.yml` file, and they will be mounted into both the PHP and Nginx containers.

To start your PHP application with Nginx, PHP-FPM, and MySQL, run `docker-compose up` in your project directory.

**Build and Run**:
In your project directory, run:

```bash
docker-compose up --build
```

