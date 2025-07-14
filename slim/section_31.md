---
title: Lesson 1.29 - Apache Configuration & Virtual Hosts
description: Slim notes.
order: 31
---

[00:38](https://www.youtube.com/watch?v=ytVPiYILz80&t=38s) - Apache configuration file - httpd.conf

The `httpd.conf` file is the main configuration file for the Apache HTTP Server (often referred to simply as Apache). It contains directives that control various aspects of the server's behavior, such as server settings, virtual hosts, modules, security, and more. The configuration file is an essential part of configuring and customizing your Apache web server.

The location of the `httpd.conf` file can vary depending on the operating system and how Apache was installed. Here are some common locations:

- **Unix-like Systems (e.g., Linux):**
  - Typically found in `/etc/httpd/conf/httpd.conf`
  - Or `/etc/apache2/apache2.conf` for Debian/Ubuntu-based systems

- **Windows Systems:**
  - Often located in `C:\Program Files\Apache Group\Apache2\conf\httpd.conf`

Here's a brief overview of some important sections and directives you might find in the `httpd.conf` file:

1. **Server Settings:**
   - `ServerRoot`: Specifies the root directory of the server installation.
   - `Listen`: Defines the IP address and port on which the server listens for incoming requests.

2. **Modules:**
   - `LoadModule`: Loads Apache modules that provide additional functionality (e.g., `mod_rewrite`, `mod_ssl`).

3. **Directory and Access Control:**
   - `DocumentRoot`: Sets the root directory for serving documents.
   - `<Directory>`: Defines access control and configuration directives for a directory.
   - `AllowOverride`: Specifies which directives can be overridden in `.htaccess` files.

4. **Virtual Hosts:**
   - `<VirtualHost>`: Defines a virtual host configuration with its own settings and document root.

5. **Logging:**
   - `ErrorLog`: Specifies the location of the error log file.
   - `CustomLog`: Defines the format and location of access log files.

6. **Security:**
   - `ServerTokens`: Controls the amount of information included in the server signature.
   - `ServerSignature`: Specifies whether the server signature appears in error documents.

7. **Performance Tuning:**
   - `MaxClients`: Sets the maximum number of simultaneous connections the server can handle.

8. **MIME Types:**
   - `AddType`: Associates file extensions with specific MIME types.

The `httpd.conf` file provides a powerful way to configure and customize your Apache web server. It's important to make changes carefully, and regularly backup the configuration file before making significant modifications. After editing the file, you'll typically need to restart or reload the Apache server for the changes to take effect.

Keep in mind that the `httpd.conf` file may include other configuration files using the `Include` directive, allowing you to organize your configuration into multiple files for easier management.

[05:12](https://www.youtube.com/watch?v=ytVPiYILz80&t=312s) - Virtual hosts

Virtual hosts, also known as virtual hosting or server blocks, are a feature of the Apache HTTP Server that allows you to run multiple websites or web applications on a single physical server. Each virtual host has its own configuration settings, including its own document root, domain names, and other settings, making it appear as if each virtual host is running on its own server.

Virtual hosts are particularly useful for shared hosting environments, where a single server hosts multiple websites belonging to different individuals or organizations. They allow you to efficiently use server resources and provide isolation between different websites.

Here's how you can set up virtual hosts in the Apache `httpd.conf` configuration file:

1. **Enable Name-Based Virtual Hosting:**

First, you need to make sure that name-based virtual hosting is enabled. This is typically done by uncommenting or adding the following line in your `httpd.conf` file:

```apache
NameVirtualHost *:80
```

This line tells Apache to listen for incoming requests on port 80 (HTTP) and use the requested domain name to determine which virtual host to serve.

2. **Define Virtual Hosts:**

Next, define your virtual hosts using the `<VirtualHost>` directive. Each virtual host block contains its own configuration settings, including the `ServerName` (domain name) and `DocumentRoot` (path to the website's files).

```apache
<VirtualHost *:80>
    ServerName example.com
    DocumentRoot /var/www/example.com/public_html
</VirtualHost>

<VirtualHost *:80>
    ServerName another-example.com
    DocumentRoot /var/www/another-example.com/public_html
</VirtualHost>
```

In this example, two virtual hosts are defined. Requests for `example.com` will be served from the `/var/www/example.com/public_html` directory, and requests for `another-example.com` will be served from the `/var/www/another-example.com/public_html` directory.

3. **Restart Apache:**

After defining your virtual hosts, save the `httpd.conf` file and restart or reload the Apache server to apply the changes:

```bash
sudo service apache2 restart   # On Debian/Ubuntu
sudo systemctl restart apache2 # On CentOS
```

Remember to update your DNS records to point the domain names to the IP address of your server.

Virtual hosts allow you to host multiple websites on a single server, and they are a fundamental feature in web hosting environments. Keep in mind that this is a basic overview, and there are more advanced configurations and options available for virtual hosting in Apache.

[07:22](https://www.youtube.com/watch?v=ytVPiYILz80&t=442s) - .htaccess files

An `.htaccess` file, short for "Hypertext Access," is a configuration file used by the Apache web server to control various settings for a specific directory, subdirectory, or even individual files. It allows you to override or supplement the server's global configuration settings without directly modifying the main server configuration (`httpd.conf`).

Here are some common uses and features of `.htaccess` files:

1. **URL Rewriting:** One of the most common uses of `.htaccess` is to implement URL rewriting, often used for creating search-engine-friendly URLs (SEF URLs) or routing requests to different scripts or locations.

2. **Access Control:** `.htaccess` files allow you to restrict access to specific directories or files using various authentication methods (Basic, Digest, etc.), IP-based access control, or password protection.

3. **Error Handling:** You can customize error pages (like 404 Not Found) for your website by specifying error documents in an `.htaccess` file.

4. **Caching and Compression:** Control browser caching, gzip compression, and other caching-related settings for improved website performance.

5. **MIME Types:** Specify custom MIME types for file extensions that are not recognized by default.

6. **Redirects:** Redirect visitors from one URL to another using permanent (301) or temporary (302) redirects.

7. **Hotlink Protection:** Prevent other websites from directly linking to your site's resources (images, videos, etc.).

8. **Headers:** Set custom HTTP headers for security, content type, caching, and more.

9. **Deny Access:** Block specific IP addresses or user agents from accessing your website.

Here's an example of a simple `.htaccess` file that performs URL rewriting and redirects requests:

```apache
RewriteEngine On
RewriteBase /

# Redirect www to non-www
RewriteCond %{HTTP_HOST} ^www\.example\.com [NC]
RewriteRule ^(.*)$ http://example.com/$1 [L,R=301]

# Rewrite URLs
RewriteRule ^articles/(.*)$ articles.php?slug=$1 [QSA,L]
```

This example redirects `www.example.com` to `example.com` and rewrites URLs like `/articles/my-article` to `/articles.php?slug=my-article`.

Please note:

- Not all web hosts allow the use of `.htaccess` files, so check with your hosting provider.
- Incorrectly configured `.htaccess` files can cause server errors, so make sure to back up your files before making changes.
- `.htaccess` files are read on every request, which can impact server performance if used extensively. Use them judiciously.
- For more complex configurations, consider using the main server configuration (`httpd.conf`) for better performance and organization.

Always test your `.htaccess` configurations thoroughly to ensure they work as intended.

**DNS**

Updating DNS records involves configuring the Domain Name System (DNS) settings to associate a domain name with a specific IP address. This process ensures that when someone enters your domain name in a web browser, the correct server is reached.

Here's a general overview of how to update DNS records to point domain names to the IP address of your server:

1. **Access Domain Registrar:**
   Log in to your domain registrar's website. This is the company where you purchased or manage your domain name.

2. **Find DNS Management:**
   Look for the DNS management or domain settings section within your registrar's dashboard.

3. **Locate DNS Records:**
   Find the existing DNS records for your domain. These might include records like A, CNAME, MX, and TXT.

4. **Edit or Add A Record:**
   To point your domain to a specific IP address, you need to edit or add an A (Address) record.
   - If you have an existing A record for the domain, edit it to replace the old IP address with the new one.
   - If there's no existing A record, add a new one with your domain name and the server's IP address.

5. **Save Changes:**
   Save your changes. Note that DNS changes might take some time (usually up to 24-48 hours) to propagate across the internet.

Here's a step-by-step example of updating DNS records with a fictional domain registrar:

1. Log in to your domain registrar's website.
2. Navigate to the DNS Management or Domain Settings section.
3. Locate the A record for your domain (e.g., example.com).
4. Edit the A record's IP address to match your server's IP address (e.g., 123.456.789.123).
5. Save the changes.

After DNS propagation is complete, when someone enters your domain name (e.g., `http://example.com`) in a web browser, the DNS system will direct the request to the correct server's IP address.

Remember:
- DNS changes can affect website and email accessibility, so ensure you make the necessary updates accurately.
- DNS propagation time varies, and visitors might still see the old IP address until the changes are fully propagated.
- If your server is behind a load balancer or proxy, update DNS records accordingly.

For specific instructions, refer to your domain registrar's documentation or support resources.

The "hosts" file is a local text file on your computer that maps domain names to IP addresses. It is used as a simple form of DNS (Domain Name System) resolution, allowing you to override or specify IP addresses for specific domain names. The hosts file is often used for testing, development, or blocking access to certain websites.

On most operating systems, including Windows, macOS, and Linux, you can find the hosts file in the following locations:

- **Windows:**
  ```
  C:\Windows\System32\drivers\etc\hosts
  ```

- **macOS and Linux:**
  ```
  /etc/hosts
  ```

Here's an example of how the hosts file works and how you might use it:

Suppose you have a web server running locally with the IP address `127.0.0.1` and you want to access it using the domain name `example.local`.

1. Open the hosts file in a text editor with administrative privileges.
2. Add a new line at the end of the file:
   ```
   127.0.0.1    example.local
   ```
3. Save the file.

Now, when you enter `http://example.local` in your web browser, your computer will use the IP address `127.0.0.1` to access the local web server.

Here are some common use cases for the hosts file:

1. **Development and Testing:**
   You can use the hosts file to associate local IP addresses with domain names for testing websites or applications before they go live.

2. **Block or Redirect Websites:**
   You can block access to certain websites by redirecting their domain names to a non-functional IP address (e.g., `127.0.0.1`).

3. **Local Network Resolution:**
   In a local network, you can use the hosts file to assign meaningful names to devices or services that are not registered with a public DNS.

4. **Bypass DNS Restrictions:**
   By modifying the hosts file, you can access websites that might be blocked by your ISP or network administrator.

Keep in mind that changes to the hosts file only affect the computer on which the file is modified. They do not impact other devices on the network. Also, be cautious when editing the hosts file, as incorrect entries can cause issues with network connectivity.