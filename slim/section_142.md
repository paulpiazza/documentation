---
title: Https
description: Slim notes.
order: 142
---

Here is how you can implement HTTPS on a PHP project using Nginx:

1. Generate SSL certificates 

You can use Let's Encrypt or create self-signed certificates. Let's Encrypt provides free trusted certificates.

2. Configure Nginx to use the certificates

In your Nginx config for the PHP site, add the certificate paths:

```nginx
server {
  listen 443 ssl;
  ssl_certificate /path/to/fullchain.pem;
  ssl_certificate_key /path/to/privkey.pem;

  # other server config
}
```

3. Redirect all HTTP traffic to HTTPS

Add a server block to redirect HTTP requests to HTTPS:

```nginx 
server {
  listen 80;
  server_name www.yourdomain.com;
  return 301 https://$host$request_uri;
}
```

4. Expose both ports 80 and 443 in Docker

Update your docker-compose.yml file to expose the SSL port:

```yaml
ports:
  - "80:80"
  - "443:443"
```

5. Rebuild images and restart containers

For the changes to take effect, rebuild your images and restart the containers.

6. Force HTTPS on the PHP app

You can also force HTTPS on the application level, by checking `$_SERVER['HTTPS']` in PHP.

This will make your PHP app and site be served only over HTTPS. Make sure to enable HSTS as well for additional security.

For Let's Encrypt certificates, use certbot's Nginx plugin to automate renewal on a cron job.

