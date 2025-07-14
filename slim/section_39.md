---
title: Lesson 2.3 - Constructor Property Promotion
description: Slim notes.
order: 39
---

Constructor Property Promotion RFC - [https://wiki.php.net/rfc/constructor_...](https://www.youtube.com/redirect?event=video_description&redir_token=QUFFLUhqbk9RckZwem9vZmN6UUpGLXVkSGRPT2duVFF4Z3xBQ3Jtc0tuNXlNR3E0T19TSHZQbVliZnNLV0ZmOXRqeW1WSjlxdmNoMkxteWp6TkZMOS1vZnNOUFpqS3cyRUhUcnppenlYWjNqUnFKamFfRFVOWGl2ZU5WU2lBbWFNcUlpX0VTLXRDaUc2cVppR0NDOEI1cGFZaw&q=https%3A%2F%2Fwiki.php.net%2Frfc%2Fconstructor_promotion&v=T1PbFz-o6kw)
Null-safe Operator RFC - [https://wiki.php.net/rfc/nullsafe_ope...](https://www.youtube.com/redirect?event=video_description&redir_token=QUFFLUhqbDhNVjRUWEhKM1picl9wT0ZiMENSczBKYjlaUXxBQ3Jtc0tsOTZSd2lXcF96Rmg1a3NSWGFya0Q2aFNsVzZwdFE1Vy1HX1huNUdfSHM0X19pTVdTaWprNHJGUFhNYXhQajQ0emttRHk3YlRoOG5wYjNmMHI4SEZaWlFnb0ZFazFvcE9Pb1V2aHk1Z1NhczBBQUVrbw&q=https%3A%2F%2Fwiki.php.net%2Frfc%2Fnullsafe_operator&v=T1PbFz-o6kw)

[00:00](https://www.youtube.com/watch?v=T1PbFz-o6kw&t=0s) - Constructor Property Promotion

Constructor property promotion is a new PHP 8 convenience feature which helps you minimise code repetition. It lets you combine the definition and initialisation of properties into a single constructor statement.

```php

// traditional way
class BlogPost {

	protected string $Title;
	protected string $Content;
	protected DateTimeImmutable $PostedDate;

	public function __construct(
		string $Title,
		string $Content = 'default',
		?DateTimeImmutable $PostedDate = null) {
	
		$this -> Title = $Title;
		$this -> Content = $Content;
		$this -> PostedDate = $PostedDate;
	}
}

// with constructor property promotion
class BlogPost {

	public function __construct(
		protected string $Title,
		protected string $Content = 'default',
		protected ?DateTimeImmutable $PostedDate = null) {}
}
```

[03:50](https://www.youtube.com/watch?v=T1PbFz-o6kw&t=230s) - Nullsafe operator

The nullsafe operator provides functionality similar to null coalescing, but also supports method calls. Instead of writing this:

```php
$country =  null;
 
if ($session !== null) {
    $user = $session->user;
 
    if ($user !== null) {
        $address = $user->getAddress();
 
        if ($address !== null) {
            $country = $address->country;
        }
    }
}
```

PHP 8 allows you to write this:

```php
$country = $session?->user?->getAddress()?->country;
```