---
title: OAuth 2.0
description: Slim notes.
order: 76
---

In this article, you’ll learn how an application can use OAuth 2.0 for authentication and authorization.

When it comes to securing systems, there are two key concepts that come up often: _authentication_ and _authorization_.

- Authentication is the verification of _who you are_
- Authorization is the verification of _what you have the right to do_

In this article, we’ll specifically explore OAuth 2.0 and how it works.

In this lesson, we will learn how to implement OAuth 2.0, which is a rewrite of OAuth 1.0 that simplifies the process and introduces the following four OAuth Roles:

- _Resource Owner_: the user who authorizes an application to an account
- _Resource Server_: the [API](https://www.codecademy.com/resources/docs/general/api) [server](https://www.codecademy.com/resources/docs/general/server) that accepts access tokens and verifies their validity
- _Authorization Server_: the server that issues access tokens
- _Client_: the application that requests the access tokens

![[Pasted image 20240222111128.png]]

### How Does a Website Give Me Access After I Log In?

When the user enters their username and password on a website and hits “Submit”, what happens? Your web browser submits that information to the server’s API to authenticate you. An _API_ is the part of a server that sends and receives data. There are three main types of API authentication:

- HTTP Basic Auth
- API Keys
- OAuth

#### HTTP Basic Auth

HTTP Basic Auth is the oldest (since 1999) and simplest method of authentication. It simply requires you to send your username and password every time you communicate with the web page. The reason this isn’t necessary when you use your browser is because of cookies. _Cookies_ store your credentials so that you don’t need to send them every time you click on a button.

#### API Keys

API Keys are similar to HTTP Basic Auth except, instead of a username and password, you use something called an _API token_. An API token is a unique string of letters and numbers generated for each user. API Keys are frequently used by developers to authenticate their own scripts or applications when interacting with another application’s API. API Keys have the added advantage of being long and difficult to guess.

Unfortunately, API Keys are too long and complex to be practical for everyday users to use them to log in, and, like the credentials used in HTTP Basic Auth, they are vulnerable to interception when they are submitted for authentication.

#### OAuth

Sometimes we don’t even have to create a username and password for a new account. Instead, we can sign in with Google, LinkedIn, Twitter, and more. This is possible because of OAuth. How does this work? Here’s how it looks on Codecademy:

If you go to the Codecademy sign-up screen, at the bottom you have the option to authenticate using LinkedIn, Google, Facebook, or Github. Let’s say you choose the “Sign in with GitHub” option.

![An image of the Codecademy login screen. It has multiple options for OAuth.](https://static-assets.codecademy.com/Courses/introduction-to-cybersecurity/authentication-authorization/login_page.png)

##### Step 1: Redirect User to Provider for Authorization

The GitHub button will take you to the following link:

`https://www.codecademy.com/users/auth/github?scope=public_repo%2Cuser%3Aemail`

That will redirect you to a specific Github login screen that looks like this:

![An image showing a login screen that says "Sign in to GitHub to continue to Codecademy" and asks for a username and password.](https://static-assets.codecademy.com/Courses/introduction-to-cybersecurity/authentication-authorization/github.png)

##### Step 2: User Grants Authorization

You can now log in to your GitHub to authenticate yourself — without Codecademy ever receiving your GitHub password. All of the normal login protocols on Github will still be active. For example, if you have MFA enabled on your GitHub (and you should!) this will be the next screen you see:

![An image showing that GitHub has sent a 6-digit code to an email address.](https://static-assets.codecademy.com/Courses/introduction-to-cybersecurity/authentication-authorization/verification.png)

Once you input the OTP sent to your email, GitHub will tell you exactly what permissions Codecademy is requesting, and will ask you whether you want to grant Codecademy access to these permissions.

##### Step 3: Redirect User to Application

If you choose to authorize Codecademy, you will be redirected back to Codecademy along with a short authorization code.

##### Step 4: Exchange for Access Grant

Codecademy will request an access token from the GitHub API, which will provide the authorization code and other authentication details in a POST request.

##### Step 5: Grant Access Token

Finally, after receiving this request, GitHub can either generate one or two tokens. If it only generates one, then it will generate an **access token**.

##### Step 6: Create Connection

The access token grants the requested permissions to Codecademy so that you can log in.

![An image showing the back and forth steps between the consumer and service provider in OAuth before access is granted to the consumer.](https://static-assets.codecademy.com/Courses/introduction-to-cybersecurity/authentication-authorization/Cybersecurity_OAuth_v2-05.svg)

Multiple choice

True or False:

When you use OAuth to create an account on a third-party website by utilizing your Gmail credentials, that third-party website stores your Gmail credentials.

True

False

#### OAuth Tokens

##### Access Tokens

Authentication in OAuth is facilitated by the use of _access tokens_. Access tokens are used to make API requests on behalf of the user and represent the authorization of a specific application to access specific parts of a user’s data. These API requests are made over HTTPS connections.

Access tokens are very short-lived, and they only last anywhere from a few minutes to just hours. Their ephemeral nature limits the amount of time an attacker can use a stolen token.

![An image showing an example access token](https://static-assets.codecademy.com/content/paths/web-security/oauth2/access_token.png)

_Refresh tokens_ are longer lived than access tokens and are used by applications to get new access tokens without prompting the user. Refresh tokens can expire, like access tokens, but they can also be revoked by the authorization server.

#### OAuth 2.0 Grant Types

OAuth 2.0 _grant types_, also known as flows, describe multiple ways to obtain access tokens. Flows involve two main parts:

- Redirecting the user to the OAuth provider and obtaining an access token
- Using the access token to gain restricted access

Each grant type is optimized for a specific type of application based on complexity and severity. The grant type chosen will depend on whether the code can securely store a secret key and the trust level between a user and a client.

![Diagram comparing Client Credentials, Authorization Code and Device Code grant types](https://static-assets.codecademy.com/content/paths/web-security/oauth2/grant-types-bgfill-v3.svg)

##### Client Credentials Grant

A _Client Credentials Grant_ is used when applications request an application token to access their own resource. This grant type has a limited use case because it’s only used when the resource server and the authentication server are the same entity.

##### Authorization Code Grant

The _Authorization Code Grant_ is the most widely used grant for publicly available applications. This was the grant type we showed earlier in this article. To use this grant type, the webserver must have the capability to store client credentials securely.

This approach uses browser redirection to communicate between the resource server and the authorization server. The client will obtain an authorization code and then exchange it for an access token.

##### Proof Key for Code Exchange (PKCE)

_PKCE_ is an extension to the Authorization Code flow, and it is used to prevent attacks and to securely perform the OAuth exchange from public clients. This extension helps prevent authorization code injection from malicious actors.

##### Implicit Grant - Deprecated

The _Implicit Grant_ is similar to the authorization code grant except in the case of single-page applications that cannot store client credentials. In this case, the authorization server will return an access token directly. The Implicit flow is deprecated, but might still be seen in legacy code. It has been replaced by the PKCE extension.

##### Device Code Grant

The _Device Code Grant_ is used for devices that have no browser and/or have limited input capability to input an access token. Some examples of this might be smart TV apps.

##### Resource Owner Password Credential Grant - Deprecated

This grant is used when an application exchanges the user’s username and password for an access token. It’s important to note that third-party applications should never be allowed to ask the user for their password! The Resource Owner Password Credential flow would only be used if you had a high trust relationship with the client application. The Resource Owner Password Credential flow is deprecated, but might still be seen in legacy code.

#### OAuth 1.0 vs OAuth 2.0

There are two versions of OAuth, known as **OAuth 1.0** and **OAuth 2.0**. Today OAuth 2.0, the type described in the example above, is more common. The main argument against OAuth 1.0 is that it is difficult to implement for software developers; it is more complex than OAuth2 and disrupts the user experience on mobile applications by requiring a user to open their browser. The complexity of OAuth1 is partially due to additional layers of security, like cryptography, built-in, and OAuth2 trades these additional cryptography protections for easier implementation and a better user experience, since [HTTPS protocol already provides encryption.](https://stackoverflow.com/questions/4113934/how-is-oauth-2-different-from-oauth-1)

Large authenticators, such as Google, no longer support OAuth1; however, it is still used, [most notably by Twitter.](https://www.synopsys.com/blogs/software-security/oauth-2-0-vs-oauth-1-0/)

#### Threats to OAuth

OAuth tokens are great at defending users against data breaches because, even if websites that use OAuth to log in are hacked, there are no passwords contained in databases. Even if an attacker were to obtain the access tokens, the usually short-lived nature of the access tokens means an attacker would not be able to do much with them.

However, OAuth is also vulnerable to a different sort of threat. Remember, OAuth both authorizes and authenticates - in the above example, Codecademy was authorized to only view the user’s private email address, but it could have asked for much more data.

Let’s assume that an attacker sets up a malicious website, and tells a user that they must authenticate with OAuth through GitHub. Instead of asking for just an email, the website asks for access to private repositories and secret gists. If the user isn’t paying attention, or has been socially engineered into believing that this access is required, they could grant access to the malicious application.

If a user grants this access to the malicious application, the attacker would have access to all of the user’s private information on Github — without ever knowing their password! This was the [method successfully used by the hacking group Fancy Bear](https://www.trendmicro.com/en_us/research/17/d/pawn-storm-abuses-open-authentication-advanced-social-engineering-attacks.html) (also known as APT28 and Pawn Storm) to [attack the Democratic National Convention in 2016](https://www.trendmicro.com/vinfo/us/security/news/cyber-attacks/espionage-cyber-propaganda-two-years-of-pawn-storm).

All methods of authorization have advantages and vulnerabilities and OAuth is no exception; however, it remains a generally secure and convenient way to authenticate yourself on trusted applications.

### Conclusion & Further Readings

Authentication is a challenging concept, not least because of how many ways there are for users to authenticate themselves. For example, there are other authentication protocols that are similar to OAuth, such as [SAML](https://developer.okta.com/docs/concepts/saml/).



