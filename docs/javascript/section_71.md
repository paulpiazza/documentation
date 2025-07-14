---
title: User Authentication and Authorization
description: Slim notes.
order: 71
---

See what you’ll be learning in the User Authentication and Authorization Unit.

### Goals of this Unit

The goal of this unit is to learn how to implement user authentication and authorization in an express application. Authentication and authorization are key pieces to securing any web application that works with user data. In fact, they’re so important that Broken Authentication and Broken Access Control make up two of the OWASP Top Ten’s most critical security risks to web applications. Verifying who your users are and what they’re allowed to do will help create a safe and secure user experience.

Even if you’re not storing information like health data or social security numbers, it’s still important to secure user data. If users lose access to their accounts or find that their data has been altered, this could result in losing users! Or, if a malicious actor gains access to an admin account, this could give them access to data like passwords or email addresses which can be used in clickjacking attacks.

After this unit, you’ll be able to:

- Define Authentication, Authorization, and Encryption
- Explain the purpose of user sessions
- Implement Sessions in Express using `express-session`
- Allow users to log into an Express app using `passport-local`
- Secure user passwords with hashing and salts using `bcrypt.js`
- Add OAuth 2.0 as a login option to an Express app using `oauth2-server`

You will put all of this knowledge into practice with an upcoming portfolio project.

Learning is social. Whatever you’re working on, be sure to connect with the Codecademy community in the [forums](https://discuss.codecademy.com/). Remember to check in with the community regularly, including for things like asking for code reviews on your project work and providing code reviews to others in the [projects category](https://discuss.codecademy.com/c/project/1833), which can help to reinforce what you’ve learned.


### Authentication vs Authorization vs Encryption

In this article, you’ll get an overview of three key concepts in web security: Authentication, Authorization, & Encryption.

#### What We’ll Be Learning

Authentication, authorization, and encryption are all key concepts in web security, but it’s easy to confuse them. In this article, you’ll learn what these concepts are, and what roles they play in web security.

#### Authentication

Authentication is the verification of _who you are_. For example, let’s say you’ve gone to a concert. At the front door, the security guard asks to see your ticket and ID in order to verify that the name on your ID matches the name on your ticket. This is an example of authentication.

Authentication relies on one or more _factors_ to verify identity, and these factors come in three main types:

- Knowledge is something you know, like a username and password.
- Possession is something you have, like a security card or mobile device
- Inherence is something you are, which generally refers to biometric data such as fingerprints.

(There are additional factors, such as location and time, that can be used to complement existing factors, but are generally not suitable for authentication on their own)

Authentication that relies on a single factor, such as a simple username/password combo, is called _Single-Factor Authentication_, and is becoming increasingly insecure.

![An image showing that the user only needs a password to log in to the website.](https://static-assets.codecademy.com/content/paths/web-security/authentication-authorization-encryption/single-factor-auth.png)

Authentication that requires multiple factors, such as a username/password combo and a code sent to a mobile device, is known as _Multi-Factor Authentication_. This is distinct from Multi-_Step_ authentication, which requires multiple types of authentication within a single factor, such as a password and a PIN.

![An image showing that the user needs a password, a code sent to their phone, and that same code inputted into the website before they can gain access.](https://static-assets.codecademy.com/content/paths/web-security/authentication-authorization-encryption/Cybersecurity_MultiFactorAuth_v2-07.svg)

#### Authorization

Authorization is the verification of _what you are allowed to do_. Returning to our concert example, once the security guard has authenticated you, you then give your ticket to a different security guard who then only allows you to pass into General Admissions (instead of the VIP section). This is an example of authorization.

Authorization is very important for web security, and it is responsible for everything from preventing users from modifying each other’s accounts, to protecting back-end assets from attackers, to granting limited access to external services.

Good authorization will allow you to limit users and services to the privileges they require; just because a user is authorized to manage one group doesn’t mean they should be able to manage all groups, for example.

#### Encryption

One of the core tools for enforcing authentication and authorization is _encryption_. Encryption is the process of transforming data into a format that is unreadable unless you have the correct _key_ to decrypt it. Encryption comes in two main types:

![An image showing the sender and recipient encrypting and decrypting with the same key.](https://static-assets.codecademy.com/content/paths/web-security/authentication-authorization-encryption/Cybersecurity_SymmetricalEncryption_1.svg)_Symmetric encryption_ uses the same key to encrypt and decrypt data.

![An image showing the sender using one key to encrypt the data and the recipient using a different key to decrypt the data.](https://static-assets.codecademy.com/content/paths/web-security/authentication-authorization-encryption/Cybersecurity_AsymmetricalEncryption_12.svg)_Asymmetric encryption_ uses separate keys for encryption and decryption.


### Evolution of Authentication

Learn how and why authentication evolved from simple passwords to modern multi-factor authentication.

#### What We’ll Be Learning

Authentication has been around long before computers, in forms such as simple passphrases, but the widespread adoption of computers caused a dramatic increase in the need for reliable, secure forms of authentication. In a relatively short span of time, we went from passwords and printed ID cards to complex systems relying on multiple factors of authentication (some of which you might not even realize are in use).

In this article, you’ll learn about the history of authentication, as well as the technologies that support it, to get a better understanding of modern authentication practices.

#### Basic Authentication

Authentication is about proving identity through one or more factors, but how does the proof actually work? Most methods for authentication use the concept of challenges and responses. This pattern can be found everywhere you look, from password-based authentication on websites to verification codes sent to your phone to physical locks that require a key or combination to unlock.

Responses to authentication prompts can be categorized into:

- Knowledge-Based: “Something You Know”
- Possession-Based: “Something You Have”
- Inherence-Based: “Something You Are”

![A visual representation of the three factors of authentication: There is a code above "Something You Know", a credit card above "Something You Have", and an eye above "Something You Are"](https://static-assets.codecademy.com/content/paths/web-security/evolution-of-authentication/ThreeFactorsofAuthenticationDiagram-v2.svg)

#### Usernames and Passwords

Passwords are a very common type of knowledge-based authentication that came into digital use in the early 1960s. Early computers were expensive and bulky, so it was common to have multiple users share them using separate terminals. Because computation time was limited and expensive, the administrators needed a way to know who was using the system, and they chose password-based authentication.

Early password systems stored passwords in plaintext, but this proved to be a serious vulnerability! Password storage has gotten more complex with the advance of cryptography, and the current standard for password storage is to use salted hashes.

Multiple choice

What did early computers use passwords for?

Authenticating users on time-sharing computer systems.

Protecting personal computers.

To authorize different roles.

Protecting specific pictures and documents.

#### One-Time Passwords & MFA

Evolving security requirements mean new methods of authentication. In the 1980s, a new authentication technology was developed that paved the way for possession-based authentication: The One-Time Password, or OTP.

A security code that’s sent to your phone or the constantly refreshing code on a company’s security fob are examples of OTP’s. They are passwords that expire and refresh. Humans can’t practically manage these dynamic passwords, so we use digital devices to do it for us.

Multi-factor authentication is another authentication strategy that has gotten very popular, and possession-based authentication is now widely used to supplement knowledge-based authentication.

![An image showing that the user needs a password, a code sent to their phone, and that same code inputted into the website before they can gain access.](https://static-assets.codecademy.com/content/paths/web-security/evolution-of-authentication/Cybersecurity_MultiFactorAuth_v2-07.svg)

While “something you know” and “something you have” are widely used in the context of web security, “something you are” has not been as widely adopted. Usually taking the form of biometric authentication, this type of authentication has flaws that make it both insecure and impractical.

#### PKI: Authenticating the Authenticator

Most authentication relies on the ability to transmit secrets securely. How can you be sure you’re sending your precious credentials to the right place? If you’re logging into a website with a password, you need to be sure you’re actually interacting with the real website, and not a malicious fake.

[Public-Key Infrastructure](https://www.ssh.com/academy/pki), or PKI, solves this problem. PKI is a system that designates trusted authorities who verify that you’re interacting with who you think you are. You’re making use of PKI right now to connect to this website; HTTPS relies on PKI to make it harder for malicious actors to create fake copies of websites.

#### Single Sign-On & OAuth2

The most recent advancement in authentication is Single Sign-On, also known as SSO. If you’ve ever used the ‘Sign in with Google/Facebook/Etc’ buttons on websites, you’ve used SSO. In fact, Codecademy lets you use SSO to log in.

![An image of the Codecademy login screen. It has multiple options for OAuth.](https://static-assets.codecademy.com/content/paths/web-security/evolution-of-authentication/login_page.webp)

With SSO, you authenticate with one service yourself, then use that service to authenticate with other services, but those services never actually have access to the secrets _you_ use to authenticate. This makes it just as secure, if not more, than creating a password for the website itself.

The current standard for SSO is OAuth 2.0, the protocol that powers the ‘Sign in with…’ buttons.

Multiple choice

Which of the following statements about OAuth 2.0 is NOT true?

OAuth 2.0 shows your password to third-party websites.

OAuth 2.0 is a form of Single Sign-On.

OAuth 2.0 is just as secure, if not more secure, than using separate passwords.

OAuth 2.0 allows someone to sign into a website through their Facebook account.

#### Conclusion

Simple password authentication used on the first time-sharing systems has evolved into complex multi-factor authentication that verifies and protects our identity. This change has been relatively rapid, driven by the rising importance of protecting our digital identities.

Even though authentication has gotten quite advanced, there are still vulnerabilities. Security is only as strong as its weakest link, and unfortunately, there are a lot of weak links floating around when it comes to authentication. [OWASP even lists “Broken Authentication” as one of its “Top Ten” critical security risks facing web applications.](https://owasp.org/www-project-top-ten/) Websites routinely get aspects of authentication wrong even today, up to and including things such as storing passwords as plaintext in a database.

Developers need to make sure they handle authentication in accordance with modern best practices, to protect both the systems they create and the people who use them.
