---
title: Introduction to Data Security
description: Slim notes.
order: 77
---

See what you’ll be learning in the Data Security Unit.

Web applications are constantly under threat. From malicious threat actors to curious teenagers, malicious code or hacking attempts are coming from every angle. Using the OWASP Top 10’s list of the most critical security risks to web applications as a guide, you can protect your users, and yourself, from threats to your Node.js applications. The goal of this Unit is to explore Transport Layer Security (TLS), Role-Based Access Control (RBAC), Authentication & Authorization in Postgres, and managing sensitive data in Node.js.

After this unit, you’ll be able to:

- Explain TLS and SSL and certificates
- Design a Role-Based Access Control System
- Improve Authentication & Authorization when using a Postgres database
- Manage and secure environment variables, API keys, and files in Node.js

You will put all of this knowledge into practice with upcoming an upcoming portfolio project.

Learning is social. Whatever you’re working on, be sure to connect with the Codecademy community in the [forums](https://discuss.codecademy.com/). Remember to check in with the community regularly, including for things like asking for code reviews on your project work and providing code reviews to others in the [projects category](https://discuss.codecademy.com/c/project/1833), which can help to reinforce what you’ve learned.


### Transport Layer Security (TLS)

In this article, you’ll learn about TLS: One of the protocols that runs the modern internet.

#### What we’ll be Learning

**Transport Layer Security (TLS)** is an incredibly important protocol for the modern web. This article will teach you what TLS does, the basics of how it works, and the role it plays in modern communications. You will also learn briefly about the history of TLS, and why people keep calling it SSL.

#### What is TLS?

Transport Layer Security (TLS) is a protocol for establishing secure connections between computers. TLS’s largest claim to fame is that it powers [HTTPS](https://www.codecademy.com/resources/docs/general/http), the protocol that lets us browse the web securely.

As suggested by its name, TLS provides security for data that is sent through transport layer protocols. It does this by creating a secure connection (often conceptualized as a _tunnel_) through which data can be transmitted to its destination. You can think of TLS as a wrapper for transport layer protocols. TLS makes use of other [algorithms](https://www.codecademy.com/resources/docs/general/algorithm) and protocols to handle things like encryption and key exchange. However, TLS is not itself an encryption algorithm.

!["An image showing that the Logical path of Data Encrypted by TLS goes directly from the PC to the server. The Logical Path of Unencrypted Data passes between many routers where it's easier for hackers to potentially intercept the data."](https://static-assets.codecademy.com/content/paths/web-security/tls/TLS-tunnel-bgfill.svg)

TLS uses public-key _certificates_ in order to make sure that [servers](https://www.codecademy.com/resources/docs/general/server) (and sometimes clients) are who they say they are. These certificates are created using the ability of asymmetric cryptography to digitally sign data, verifying its authenticity and provenance.

#### TLS vs SSL

##### What is SSL anyway?

[Secure Sockets Layer (SSL)](https://www.codecademy.com/resources/docs/general/ssl) is the predecessor of TLS. Like TLS, it is a protocol meant to establish secure communications between computers. The primary difference between SSL and TLS is that SSL has a history of serious security vulnerabilities, with the final version being deprecated in 2015.

##### Why do we still talk about SSL?

Both SSL and TLS use the same kind of certificate, and TLS was originally created to replace SSL. Because SSL was around first, it’s still common to refer to ‘SSL/TLS certificates’ as just ‘SSL certificates’. For the most part, whenever you hear someone talk about SSL, you can probably assume they’re actually talking about TLS.

#### How TLS works

##### One complicated handshake

TLS handshakes are a multistep process used to create a secure connection between a client and a server. In order to create a secure connection, two things need to happen:

1. The client needs to authenticate the server.
    
2. The client and server need to exchange a shared secret with which to communicate.
    

The details of the handshake differ depending on the encryption and key exchange algorithms supported by the client and the server. In general, the process works like this:

1. Client sends a “hello” message to the server, containing their supported protocol versions, cipher suites, and a random string of data called the _client random_.
2. The server responds with its TLS/SSL certificate, the cipher suite it has chosen, and another random string of data called the _server random_.
3. The client uses the server’s TLS/SSL certificate to authenticate the server.
4. The client and the server exchange a piece of information called a _premaster secret_. The details of this exchange vary depending on the key exchange algorithm, but the result is that both the client and the server end up with the same premaster secret. The client and the server use the premaster secret, client random, and server random to generate session keys.
5. The client and server send each other messages encrypted using the session keys to test the connection.
6. If everything worked correctly, an encrypted connection has been established.

!["An image showing the handshake process already illustrated in the article."](https://static-assets.codecademy.com/content/paths/web-security/tls/TLS-Handshake-light.svg)

##### Authentication

TLS uses [public key infrastructure (PKI)](https://www.codecademy.com/article/public-key-infrastructure) to handle authentication for servers. PKI is a system where a trusted 3rd party called a _certificate authority_ verifies ownership of a server’s public key, and digitally signs the server’s SSL/TLS certificate. A client can verify the certificate’s authenticity using the certificate authority’s public key. In practice, this involves a hierarchy of certificate authorities and certificates, some of which are a part of a computer’s operating system.

#### Conclusion

TLS is a core protocol for the modern internet, enabling secure communications, web browsing, and more. Websites that don’t support TLS will find themselves unable to use HTTPS to securely communicate with visitors, running the risk of sensitive data exposure. Additionally, modern browsers flag any website that does not use HTTPS, or has expired/invalid TLS certificates as insecure, often preventing users from visiting them. How you implement TLS will depend on the combination of technologies you’re using, but, in order to create a secure experience on the modern web, developers need to ensure their websites support TLS.


