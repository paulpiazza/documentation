---
title: Lesson P.2 - User Registration & Password Hashing
description: Slim notes.
order: 106
---

See [P2_End](https://github.com/paulpiazza/gio-formation-expennies/commits/P2_End)

See [P2-Start](https://github.com/paulpiazza/gio-formation-expennies/commit/e1340b4a9e8988a752c2082ccdf0e0cbcbc3f50e)

* Modify the Docker-compose for having Xdebug.
* Add configs/routes/web.php file with routes
* Add UI for login page (css, js)
* Create AuthController.php

Step 1
In app/Controllers/AuthController.php register 

Get the input data with getParsedBody() from the http request.
Create a user entity by using Entity.

Use the [password_hash](https://www.php.net/manual/en/function.password-hash.php) from php. 
Use BCRYPT and Cost to 12 (min. 10). It depends to your processor.

See [edit](https://github.com/paulpiazza/gio-formation-expennies/commit/25b31037aeb25cbc8726176d73959859f591703a)


Step 2
In app/Entity/User.php

The created_at cannot be null. I want to update dates on creation or update.

Add updateTimestamps method on Prepersist, PreUpdate (see Doctrine).


#### Hashing VS Encryption

See [CrackStation](https://crackstation.net/)

Hashing is a process of converting data (such as text or files) into a fixed-size value called a hash code or hash value. 

Hash functions take input data and generate a unique hash value, which is used for various purposes like data integrity verification, password storage, and data indexing. 

The key characteristics of a good hash function include producing a unique hash value for each unique input, being fast to compute, and being resistant to collisions (where different inputs produce the same hash value).

Hashing and encrypting are two different processes used in cryptography. Hashing is a one-way process of generating a fixed-size value (hash code) from data, while encryption is a two-way process of transforming data into ciphertext that can be decrypted back into the original data. 

The main difference between hashing and encryption is that hashing is irreversible, meaning you cannot retrieve the original data from the hash code, while encryption is reversible if you have the key!

##### Bcrypt

Bcrypt is a widely used cryptographic hashing function that is specifically designed for password hashing. It is known for its security and resistance to brute-force attacks. Bcrypt takes a password as input and generates a hash code that can be stored in a database for later verification.

The main advantage of bcrypt is its ability to slow down the hashing process, making it computationally expensive for attackers to crack passwords through brute-force or dictionary attacks. This is achieved by incorporating a "cost factor" that determines the number of iterations the algorithm performs, making it time-consuming to compute the hash.

Bcrypt also includes a salt, which is a random value appended to the password before hashing. The salt adds an extra layer of security by ensuring that even if two users have the same password, their hash codes will be different.

It is important to note that bcrypt is not an encryption algorithm but a one-way hash function. 

To use bcrypt, it is recommended to use trusted libraries or implementations that provide secure and optimized versions of the algorithm. Additionally, it is important to choose strong passwords that contain a combination of special characters, lowercase and uppercase letters, and numbers to enhance the overall security of the hashing process.

##### Cost

See [determine optimize cost](https://gist.github.com/Antnee/a072b7a3c59334bf1872)

The "cost" refers to the number of iterations or rounds that the algorithm performs to generate the hash code. 

The higher the cost factor, the more iterations the algorithm will perform, and the longer it will take to compute the hash. 

This increases the computational cost of brute-force attacks, making it more difficult and time-consuming for attackers to crack hashed passwords. 

The cost factor is typically set as a parameter when implementing the hashing function and can be adjusted based on the desired level of security and performance requirements. However, increasing the cost factor also increases the time it takes to generate a hash code, so it's important to balance security and performance considerations when choosing a cost factor.

##### Salt

A salt is a random value added to a password before it is hashed, to make the resulting hash code unique and more secure.

In cryptography, a salt is a random value that is added to the password before it is hashed. The purpose of the salt is to make the resulting hash code unique, even if two users have the same password. This adds an extra layer of security to password storage, as it makes it more difficult for attackers to use precomputed hash tables or rainbow tables to crack hashed passwords.

When a user creates a new account or changes their password, the system generates a random salt value and combines it with the user's password before hashing it using a cryptographic hashing function like bcrypt. The resulting hash code is then stored in the database along with the salt value.

When a user logs in, their entered password is combined with the stored salt value and hashed using the same cryptographic hashing function. The resulting hash code is then compared to the stored hash code for authentication.

The salt value should be unique for each user and should be long enough to ensure that it cannot be easily guessed or brute-forced. The use of a salt does not provide complete protection against attacks, but it is an important security measure that can significantly increase the difficulty of cracking hashed passwords.
