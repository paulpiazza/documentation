---
title: Lesson 3.26 - How To Install Xdebug 3 with Docker & PhpStorm
description: Slim notes.
order: 97
---

See [Xdebug](https://xdebug.org/wizard)

Xdebug is a popular tool for debugging and profiling PHP code.

With Docker

```shell
# install xdebug
RUN pecl install xdebug \
    && docker-php-ext-enable xdebug

COPY xdebug.ini "${PHP_INI_DIR}/conf.d"
```

The Dockerfile snippet you provided is used to install the Xdebug extension for PHP within a Docker container. 

1. `RUN pecl install xdebug`: This command is executed during the image building process. It uses the `pecl` command to install the Xdebug extension for PHP. The `pecl` tool is a package manager for PHP extensions. It fetches the Xdebug extension from the PHP Extension Community Library (PECL) and installs it.

2. `&&`: The `&&` operator is used to run multiple commands sequentially. In this case, it ensures that the installation of Xdebug is successful before proceeding to the next command.

3. `docker-php-ext-enable xdebug`: After Xdebug is installed, this command enables the extension within the PHP configuration. It creates a symlink or configures PHP to load the Xdebug extension when PHP is executed.

4. `COPY xdebug.ini "${PHP_INI_DIR}/conf.d"`: This command copies a configuration file named `xdebug.ini` into the PHP configuration directory (`"${PHP_INI_DIR}/conf.d"`). The `${PHP_INI_DIR}` environment variable points to the directory where PHP configuration files are located in the Docker image.

   - `xdebug.ini`: This is a custom configuration file for Xdebug. It contains settings specific to Xdebug, such as remote debugging configuration and profiler settings.
   - `conf.d`: In PHP, the `conf.d` directory is often used to store additional configuration files for PHP extensions. By placing `xdebug.ini` in this directory, you're telling PHP to include the Xdebug-specific settings when it starts.

Overall, this Dockerfile snippet ensures that Xdebug is installed, enabled, and properly configured for use with PHP within the Docker container. It's a common setup for development environments where debugging and profiling PHP code is essential.

To know if Xdebug work, add `xdebug_info();` in the php file and execute it. You will see better debugging in the page in your browser.

```ini
# xdebug.ini

zend_extension=xdebug
xdebug.mode=debug
xdebug.start_with_request=yes
xdebug.discover_client_host=1
xdebug.client_host=host.docker.internal
xdebug.remote_enable=1
xdebug.remote_autostart=1
xdebug.remote_port=9003
```

The `xdebug.ini` configuration file you've provided contains settings for the Xdebug extension for PHP. Let's go through each of these settings:

1. `xdebug.mode=develop,debug`: This setting configures the mode in which Xdebug operates. In your configuration, you have specified two modes: "develop" and "debug." These modes enable various features of Xdebug, such as remote debugging and profiling.

   - "develop" mode typically includes features useful during development, such as remote debugging and profiling.
   - "debug" mode provides more detailed debugging information.

2. `xdebug.start_with_request=yes`: This setting determines whether Xdebug should be activated with every HTTP request or not. By setting it to "yes," Xdebug will be enabled for every request, allowing you to debug your PHP code more conveniently.

3. `xdebug.discover_client_host=0`: This setting controls whether Xdebug should automatically discover the client host (your development environment) or not. Setting it to "0" means that Xdebug won't try to automatically detect the client host.

4. `xdebug.client_host=host.docker.internal`: This setting specifies the host where your debugging client (such as your IDE) is running. In this case, you've set it to "host.docker.internal," which is a special hostname recognized by Docker to refer to the host machine running the Docker containers. This allows Xdebug to connect to your debugging client running on your local machine.

By configuring `xdebug.ini` with these settings, you've set up Xdebug to work in a development-friendly mode, enabling debugging and connecting to your debugging client running on your host machine. This is a common setup for PHP development within Docker containers, as it allows you to debug code running inside the container from your local development environment.

>[!info]
>if the console show "xdebug already loaded", it means that this line `zend_extension=xdebug` is already loaded somewhere.

The extra host options are not needed on windows.

In your `app` service, you have the following configuration for `extra_hosts`:

```yaml
extra_hosts:
  - "host.docker.internal:host-gateway"
```

This configuration is used to allow the `app` service to access services running on your host machine (the one running Docker) via the "host.docker.internal" hostname. However, the usage of "host.docker.internal" may vary depending on your operating system.

Here are some considerations:

1. **On macOS and Windows**:
   - You can use "host.docker.internal" to access services running on your host machine.
   - This should work as intended.

2. **On Linux**:
   - "host.docker.internal" might not resolve as expected.
   - In this case, you should use the IP address of your host machine or the actual hostname or IP where the services you want to connect to are running.

To ensure your configuration works across different operating systems, you might want to make this part of your Docker Compose file conditional based on the operating system. Here's an example that sets the `extra_hosts` based on the operating system:

```yaml
extra_hosts:
  - ${EXTRA_HOSTS}
```

Then, in your environment, you can define `EXTRA_HOSTS` as needed for your specific environment. For example, in a `.env` file:

```dotenv
EXTRA_HOSTS=host.docker.internal:host-gateway
```

This way, you can easily adjust the `extra_hosts` value based on the operating system without modifying the Docker Compose file itself.

The server name in Nginx must be put to localhost. It's needed for Xdebug to recognize the server.

```txt
server {
    listen 80;
    index index.php;
    server_name localhost;               #<== here !!!!
    error_log  /var/log/nginx/error.log;
    access_log /var/log/nginx/access.log;
    error_page 404 /index.php;
    root /var/www/public;
    location ~ \.php$ {
        try_files $uri =404;
        fastcgi_pass app:9000;
        fastcgi_index index.php;
        include fastcgi_params;
        fastcgi_param SCRIPT_FILENAME $document_root$fastcgi_script_name;
    }

    location / {
        try_files $uri $uri/ /index.php?$query_string;
        gzip_static on;
    }
}
```

Make sure that the port is the same every where. Also pay attention to the work dir.

```yml
services:
  app:
    build:
		working_dir: /var/www/
		ports:
	      - 9003:9003
```

in the vscode settings:

```json
{
	"name": "Docker: Listen for Xdebug",
	"type": "php",
	"request": "launch",
	"port": 9003,
	"pathMappings": {
		"/var/www": "${workspaceFolder}"
	},
	"hostname": "localhost"
}
```

Check also the xdebug.ini in your project docker folder.

