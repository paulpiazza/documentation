---
title: Web Security
description: Slim notes.
order: 45
---

### Cyber Attacks

See [NIST](https://csrc.nist.gov/)
See [OWSAP](https://owasp.org/)
See [cve](https://cve.mitre.org/)

Cyberattacks against websites are extremely common. An attack could result in:

- Website Defacement
- Loss of Website Availability
- Total Denial-of-Service (DoS)
- Leaking of Sensitive Customer Data
- An Attacker Gaining Control Over the Website
- An aAttacker Using the Website as a Vector for Other Attacks
- Loss of User Trust in the Website
- Reputational Damage
- And more


See [tuto codecademy](https://www.codecademy.com/learn/introduction-to-cybersecurity)



![[Pasted image 20231125112614.png]]
_Confidentiality_ refers to protecting private information from eyes that shouldn’t have access to it. It’s the need to enforce access - who can see this, and who shouldn’t? Examples of enforcing confidentiality include implementing robust user authentication and encryption of important user data.

_Integrity_ refers to data integrity here. We need security controls that protect data from being changed or deleted, and that the damage can be reversed if done accidentally. Some techniques related to integrity are database security, keeping backups and using cryptography to check for changes.

_Availability_ refers to data being consistently, reliably available to those authorized. For example, social media websites ensure that even with high traffic or when a server is compromised, information gets to a user’s screen. This is accomplished through constant maintenance of hardware and software, monitoring servers and networks, and having a plan for any disasters.

Security principles are a set of guidelines and best practices that help ensure the security of web applications. Some important security principles in web development include: 

1. Input validation: Ensuring that user input is properly validated and sanitized to prevent malicious code injection.
2. Authentication and authorization: Verifying user identity and only allowing authorized access to sensitive data and functionality.
3. Secure communication: Encrypting data in transit using HTTPS to prevent interception and tampering.
4. Error handling: Providing appropriate error messages to users without revealing sensitive information.
5. Least privilege: Granting users the minimum level of access required to perform their tasks to limit the potential damage of a security breach.
6. Session management: Ensuring secure storage and transmission of session data, and implementing measures to prevent session hijacking.
7. Password management: Enforcing strong password policies and securely storing passwords using hashing and salting techniques.
8. Cross-site scripting (XSS) prevention: Implementing measures to prevent malicious scripts from being injected into web pages.
9. Cross-site request forgery (CSRF) prevention: Implementing measures to prevent unauthorized actions from being performed on behalf of authenticated users.
10. Security testing: Conducting regular security testing and vulnerability assessments to identify and address potential security issues.

Remember that implementing these principles is not a one-time task, but an ongoing process that requires continuous monitoring and improvement to stay ahead of emerging threats.

In summary, the OWASP Top Ten consists of:

- Injection: An attacker “injects” malicious code into an interpreter, usually through an input field, in order to gain access to information or damage a system
- Broken Authentication: An insecure authentication system allows attackers to impersonate other users.
- Sensitive Data Exposure: Sensitive data is improperly or insufficiently protected.
- XML External Entities (XXE): Malicious XML causes an insecure XML processor to access data or execute code that it shouldn’t.
- Broken Access Control: Authorization isn’t properly enforced, allowing attackers to access resources beyond their authorization.
- Security Misconfiguration: Insecure, improper, or a lack of security configurations degrade the security of an environment.
- Cross-Site Scripting (XSS): Malicious input is treated as javascript that can run on victims’ browsers.
- Insecure Deserialization: Data from an untrusted source is deserialized into an object, potentially containing malicious code or data, within a program.
- Using Components with Known Vulnerabilities: Vulnerable components, such as out-of-date packages or software, are included within an environment, allowing attackers to use existing exploits to attack.
- Insufficient Logging and Monitoring: Lack of detailed monitoring makes it easier for attackers to stay undetected, and it makes it harder to respond after an attack has occurred.


### The seven common front-end attacks (2023):

#### [](https://dev.to/tinymce/7-common-front-end-security-attacks-372p?ref=dailydev#1-crosssite-scripting-xss)1. [Cross-site scripting (XSS)](https://www.tiny.cloud/docs/tinymce/6/security/#cross-site-scripting-xss?utm_campaign=devrel_devto_tiny&utm_source=devto&utm_medium=blog):

It is a type of attack that injects malicious client-side code. For example, an attacker could input JavaScript that steals user cookies into a comment form that doesn't sanitize entries. When victims load the compromised page, the script executes to give the attacker access to user accounts.

#### [](https://dev.to/tinymce/7-common-front-end-security-attacks-372p?ref=dailydev#2-dependency-risks)2. [Dependency risks](https://www.tiny.cloud/docs/tinymce/6/security/#keeping-dependencies-up-to-date?utm_campaign=devrel_devto_tiny&utm_source=devto&utm_medium=blog):

Front-end apps rely on many third-party libraries and components. If these have vulnerabilities, they undermine the whole app. Using outdated dependencies with known issues is a common developer oversight.

#### [](https://dev.to/tinymce/7-common-front-end-security-attacks-372p?ref=dailydev#3-crosssite-request-forgery-csrf)3. [Cross-site request forgery (CSRF)](https://owasp.org/www-community/attacks/csrf):

These force victims to execute unwanted actions in an app they're logged into. For example, an attacker could trick users with a disguised link that quietly transfers funds from their account using their stored credentials.

#### [](https://dev.to/tinymce/7-common-front-end-security-attacks-372p?ref=dailydev#4-clickjacking)4. [Clickjacking](https://owasp.org/www-community/attacks/Clickjacking):

Uses transparent overlays on a trusted page to trick users into clicking on something different than they perceive. For example, an attacker could overlay a transfer funds button or a cat video's play button.

#### [](https://dev.to/tinymce/7-common-front-end-security-attacks-372p?ref=dailydev#5-cdn-tampering)5. [CDN tampering](https://www.alibabacloud.com/blog/a-guide-to-cdn-security-protection-managing-tampering-attacks-and-content_596261):

If libraries are loaded from external [CDNs](https://www.tiny.cloud/docs/tinymce/6/webcomponent-cloud?utm_campaign=devrel_devto_tiny&utm_source=devto&utm_medium=blog), attackers could modify them there to inject malicious code that then gets downloaded by app users.

#### [](https://dev.to/tinymce/7-common-front-end-security-attacks-372p?ref=dailydev#6-https-downgrades)6. [HTTPS downgrades](https://auth0.com/blog/preventing-https-downgrade-attacks/):

Stripping away HTTPS encryption facilitates spying on user traffic. Attackers exploit bugs or lack of HSTS headers to downgrade HTTP requests to plain unprotected HTTP.

#### [](https://dev.to/tinymce/7-common-front-end-security-attacks-372p?ref=dailydev#7-maninthemiddle-attacks)7. [Man-in-the-middle attacks](https://csrc.nist.gov/glossary/term/man_in_the_middle_attack):

The attacker secretly relays and possibly alters the way two parties believe they are communicating. This enables spying and spreading of false information between victims.

As more business functionalities move online, the web will continue to grow as an attack vector. JavaScript developers building front-end apps therefore need to step up their security practices. Plus, having an understanding of vulnerabilities from an offender’s perspective, is crucial for shutting down vulnerabilities before they become headlines.

### Injection

_Injection_ is when an attacker injects malicious code into an interpreter in order to gain access to information or damage a system. This is often accomplished by inserting malicious characters into an input field on the website, and this malicious input is then sent to the interpreter. Sometimes, this will cause the interpreter to crash, but it can, in the worst case, cause the interpreter to start running code supplied by the attacker.

Interpreters for query languages such as SQL are a common target, but not the only one. In some cases, Injection attacks can even target the operating system the webserver is running, passing data that is executed as a terminal command.

Here is an example of normal Java code that searches for a product by name:

```ts
query = "SELECT product_name, product_cost FROMproduct_table WHERE product_name = " + USER_INPUT + "'";
```

Here is a malicious query that searches for the product “soap” while attaching a `UNION` command to steal usernames and passwords:

```sql
soap' UNION SELECT username,password,NULL FROM user_table;-- -
```

Here is what the code interpreter sees when the malicious query is added:

```sql
SELECT product_name, product_cost FROMproduct_table WHERE product_name = 'soap' UNION SELECT username,password,NULL FROM user_table;-- -';
```

Injection attacks are usually mitigated by sanitizing and validating all user input as well as writing code so that the interpreter can’t get confused about what is and isn’t data.

### Broken Authentication

The owners of the website made an effort to secure it, but security is only as strong as its weakest link. In this case, the weakest link was a “temporary” admin account that was created for use only while the website was being built and has since been forgotten… By everyone except the hacker who had just logged in using `admin` as the username and password.

_Broken Authentication_ is a broad term for vulnerabilities that allow attackers to impersonate other users. Vulnerabilities like insecure default credentials, lack of rate limiting for login attempts, and session hijacking all fall into this category. In the worst case, a malicious hacker would be able to gain access to an administrative account, and all the authorization that accompanies it. 

For example: login Admin - pwd Admin. this is a broken Authentication.

There is no single cure for broken authentication; web developers and security teams need to be diligent in making sure that they follow the best practices for the technologies they’re using.

### Sensitive Data Exposure

When data breaches happen, that’s not the end of the story. The stolen information gets sold and resold on the dark web, often ending up in sets of personal information known as _fullz_. Fullz contain information someone could use to commit the kinds of fraud that can ruin a victim’s life for years, and most of this information is on sale for $25 or less.

Most websites handle sensitive data of some sort, and _Sensitive Data Exposure_ refers to insufficient protections being put in place for that data. This is a broad category of vulnerabilities that covers things like insecure storage, the transmission of sensitive data, or revealing sensitive data to unauthorized parties. This type of vulnerability can have serious, life-altering consequences for the people whose data is exposed.

As a broad category, there isn’t a single technique for preventing sensitive data exposure. Data privacy laws and regulations often provide a good place to start, but organizations that handle sensitive data have a responsibility to be proactive about securing the sensitive data they handle.

![[Pasted image 20231125113453.png]]

### XML External Entities (XXE)

Computers take things very literally; give them an instruction and they’ll follow it exactly, even when it’s not actually what you wanted. Servers are computers that have been instructed to respond to requests for data, and if you’re not careful, they’ll respond to requests like “details of every account on the OS the server is running” or “what happens if you run this piece of code?”.

Similar to Injection, _XML External Entities (XXE)_ is a type of vulnerability that allows maliciously crafted data to produce unintended behavior on the backend of a website.

Unlike injection, where the malicious input is usually from an input field, XXE involves an attacker uploading a maliciously crafted XML file. XML is a markup language that supports potentially insecure features, and if a website is using an XML processor with those features enabled, an attacker can use XXE to wreak havoc. In the worst case, the attacker may be able to execute arbitrary code - just about the worst case scenario for security.

While XXE can be mitigated by ensuring XML processors are properly configured and updated, and that input is validated before processing, the simplest solution is to not use XML.

### Broken Access Control

We know not to trust user input, but the website doesn’t necessarily know not to trust user input. The webpages themselves were made securely, but none of the engineers ever bothered to ask “Isn’t the URL user input too?”. The attacker is now changing the URL in order to grab the personal information of every profile on the website; just because there weren’t links to other user’s profiles on the homepage didn’t mean the attacker can’t request profiles by changing the URL.

_Broken Access Control_ is when authorization is improperly enforced, allowing users access to privileges they should not have. This category is more about vulnerabilities within the authorization system than it is about bypassing the system entirely. Because broken access control is such a broad category of vulnerabilities, it can have a wide range of consequences. Access to sensitive user data is one fairly common result, but the sky’s the limit.

Broken access control has no single method of mitigation. Mitigation can involve things like rate limits for logins, ensuring server-side validation of requests, and implementing default-deny for permissions.

### Security Misconfiguration

All the security software in the world won’t protect you if it isn’t properly configured. When the attacker started trying injection attacks, the alarms remained silent. When the attacker opened a backdoor to the server, the firewall didn’t block it. And when the attacker started stealing credit card data, the endpoint security software sent warning after warning, but it all went unseen until the following Monday.

_Security Misconfiguration_ has been a problem since the early days of the internet, and it continues to be a problem today. Whether due to operator error or insecure default settings, insecure configurations can severely hamper the security of an environment.

Examples of Security Misconfiguration include things like:

- Forgetting to protect cloud storage
- Leaving unnecessary features enabled on server software
- Disabling automatic updates
- Displaying overly detailed error messages that give details about the way the backend is set up

It also includes improperly configured security software, such as weak or ineffective rules for Firewalls and Intrusion Detection Systems (IDSs).

Preventing security misconfiguration requires regular review of configurations. It’s not possible to simply “set and forget” software. As the environment continues to grow and change, security and hardening needs to be treated as a continuous, ongoing processes.

### Cross-Site Scripting (XSS)

When a malicious hacker found a cross-site scripting vulnerability in a popular social media platform, they couldn’t pass up the opportunity: They crafted a self-sharing post that would rapidly spread and install malware on anyone’s device who viewed it; a rather dark twist on the concept of “going viral”.

_Cross-Site Scripting (XSS)_ is a web vulnerability that targets the browser-side of the website, rather than the server-side. XSS happens when a browser is tricked into running malicious javascript. It usually happens when a website allows user input without sanitizing and unarming dangerous input. If this happens, an attacker can pass input to the website that a victim’s browser will run as javascript.

XSS can be a severe vulnerability, particularly when the malicious input is stored by the website and displayed to many users. XSS has a wide range of uses, from defacing websites to bypassing authentication to stealing passwords.

Preventing XSS involves making sure that special characters like `<`, `>`, `"`, `=`, and more are properly escaped to prevent a browser from parsing them as code rather than regular text.


In this workspace, if you type something in the input field, it will be shown in the output field. This echoing of user input is fairly common, and it is used for things like search pages.

Unfortunately, this website is vulnerable to _Cross-Site Scripting_.

1. The simplest method of XSS is to just use a `<script>` tag, like so:

```js
<script>alert("xss")</script>
```

Simple methods like these don’t often work (as is the case here). Type this into the input box and press the Try it now! button; the output goes blank, showing that the `<script>` tags are being treated as HTML tags, but the script does not run. This is likely because of protections in place to prevent XSS.

1. Lets try a different approach, to bypass those protections. Type:

```js
 <iframe src="javascript:alert('XSS')">`
```

into the input box and click the Try it now! button. You should see an alert box pop up on your screen. This script only pops up an alert, but it could be easily substituted with a malicious script. Because this example does not use a `<script>` tag, it may be able to bypass protections that rely on looking for `<script>` tags.

1. Finally, let’s look at a more complicated example:

```js
<a href="&#0000106avascript:alert('XSS')">XSS</a>
```

Again, this example doesn’t use a `<script>` tag. Instead, it creates a link that, when you click on it, executes the embedded script to pop up an alert on the page.

### Insecure Deserialization

If there’s only one thing you take away from this lesson, let it be “Don’t trust user input”. Especially if that user input will interact directly with your server.

Serialization is the process of turning an object within a program into formatted data. Deserialization is the process of turning formatted data into an object within code. _Insecure Deserialization_ is when this process can be exploited to cause unintended behavior.

If an attacker is able to modify the data that is going to be deserialized, they can change the resulting object, modifying data or adding malicious behaviors. In the worst case, this can allow for arbitrary code execution.

There are a few different ways to prevent insecure deserialization, but the easiest and most reliable way is to just not deserialize external data.

![[Pasted image 20231125114448.png]]


### Using Components with Known Vulnerabilities

When it comes to vulnerabilities, the unknown is scary, but sometimes it’s the known you have to worry about. If an attacker wants to attack you with a new vulnerability, the attacker first has to discover this new vulnerability and then figure out how to exploit it. With known vulnerabilities, it could be as simple as the attacker pressing enter.

_Using Components with Known Vulnerabilities_ means using software or package versions that are known to be vulnerable. Vulnerabilities are common in software, but they usually get patched as new updates are released. However, older versions of the software remain vulnerable!

The [Common Vulnerabilities and Exposures system](https://cve.mitre.org/) has detailed records of publicly-known vulnerabilities that have been exploited. This is usually used to help people protect themselves and patch these vulnerabilities, but this knowledge can also be used by malicious actors. There are even tools to do this research automatically, and these tools can determine what software a server is running and suggest exploit kits that could attack it.

Usually, this can be prevented by keeping software such as operating systems, hosts, database software, etc up to date. If a piece of software is abandoned, it’s time to find a new, actively-maintained replacement.

![[Pasted image 20231125114626.png]]

### Insufficient Logging and Monitoring

In security, knowledge is power. Knowing what’s going on within a system is important for detecting, preventing, and responding to attacks. Early detection can mean the difference between an incident that causes an internal memo, and an incident that makes headlines for weeks.

_Insufficient Logging and Monitoring_ refers to an overall lack of tools that monitor, record, and report events within a system. Events include logins and login attempts, webpage requests, and more. Having these logs allows monitoring software to scan for suspicious behavior, such as 1000 login attempts in 5 seconds or connections to or from known malicious IP addresses.

When logging and monitoring is insufficient, it’s more difficult to investigate attacks. Insufficient logging and monitoring also gives attackers more time to do damage before they are detected, meaning that attacks can be more severe as well.

Logs should be easy to read, and they should record sufficient information and context about auditable events. Monitoring tools should be properly configured and able to respond in real-time to suspicious behavior.

Exeample of good logs :

```txt
2021-5-27 17:15:28:11 [event][login failure] account: administrator ipv4: 104.17.212.81
2021-5-27 17:15:28:56 [event][login failure] account: administrator ipv4: 104.17.212.81
2021-5-27 17:15:29:02 [event][login failure] account: administrator ipv4: 104.17.212.81
2021-5-27 17:15:29:20 [event][login failure] account: administrator ipv4: 104.17.212.81
2021-5-27 17:15:29:51 [event][login] account: some_dude29 ipv4: 104.18.199.63
2021-5-27 17:15:29:73 [event][login failure] account: administrator ipv4: 104.17.212.81
2021-5-27 17:15:30:19 [event][login failure] account: administrator ipv4: 104.17.212.81
2021-5-27 17:15:30:26 [event][login failure] account: administrator ipv4: 104.17.212.81
2021-5-27 17:15:30:47 [event][login failure] account: administrator ipv4: 104.17.212.81
2021-5-27 17:15:30:78 [event][login failure] account: administrator ipv4: 104.17.212.81
2021-5-27 17:15:31:37 [event][login] account: administrator ipv4: 104.17.212.81
```
