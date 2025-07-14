---
title: Lesson 3.23 - Data Transfer Objects - What Are DTOs
description: Slim notes.
order: 94
---

Data Transfer Objects (DTOs) are objects used to transfer data between different layers of an application or between different parts of a distributed system. DTOs serve as a container for data, carrying multiple values or fields but typically having no behavior or logic associated with them. They are used to encapsulate and transfer data efficiently, especially in situations where you need to pass data across network boundaries, between different components, or from a database to an application layer.

Key characteristics and uses of DTOs include:

1. **Data Structure:** DTOs are essentially data structures that represent a subset of the data from one part of the system to another. They often mirror the structure of database tables, API responses, or other data sources.

2. **Encapsulation:** DTOs encapsulate data, often in a read-only manner. This means that DTO properties or fields are typically exposed through getters but may not have setters, making them immutable or effectively read-only.

3. **Reduced Data:** DTOs may contain only a subset of the fields from a larger entity or object. This is useful when you want to minimize the amount of data transferred over a network or passed between layers of an application.

4. **Security:** DTOs can be used to restrict the data that is exposed to external systems or client applications. They allow you to control what information is shared while hiding sensitive or internal data.

5. **Versioning:** DTOs can help manage versioning when the structure of the data changes over time. Old DTOs can still be used for backward compatibility, and new DTOs can be introduced as needed.

6. **Transformation:** DTOs often involve the transformation of data from one format to another. For example, you might transform complex database records into simpler DTOs for presentation.

7. **Performance:** DTOs can improve performance by reducing the overhead of sending or processing unnecessary data. This is especially important in distributed systems where network latency can be a concern.

8. **Decoupling:** DTOs promote loose coupling between different parts of an application or between distributed components. Changes to the data structure do not necessarily affect all parts of the system.

DTOs are commonly used in web applications, microservices architectures, and when working with APIs. For example, when an HTTP request is made to a RESTful API, the request data can be deserialized into a DTO on the server side, processed, and then converted back into a JSON or XML response for the client.

Overall, DTOs are a valuable design pattern for maintaining separation of concerns and managing data transfer and transformation in complex software systems.

Data Transfer Objects (DTOs) are used in various scenarios in software development to facilitate the transfer of data between different layers of an application or between different components of a distributed system. Here are some common use cases for DTOs:

1. **APIs and Web Services:** When building web APIs or RESTful services, DTOs are often used to define the structure of request and response data. They help standardize the data format exchanged between clients and servers.

2. **Data Validation and Transformation:** DTOs can be used to validate and transform incoming data from external sources (e.g., form submissions, API requests) before processing it in the application. This helps ensure data integrity and consistency.

3. **Database Interaction:** When working with databases, DTOs can represent database records or query results. They help decouple the database schema from the application logic and provide a structured way to interact with the database.

4. **Presentation Layer:** In MVC (Model-View-Controller) and related design patterns, DTOs are often used to transfer data from the application's business logic (Model) to the user interface (View). This separation helps keep the UI code clean and focused on presentation.

5. **Remote Method Invocation:** In distributed systems, DTOs are used to marshal and unmarshal data when invoking remote methods on different nodes or microservices. They help serialize data for transport and deserialize it on the receiving end.

6. **Microservices Communication:** In microservices architectures, DTOs play a crucial role in communication between microservices. They define the contract for data exchange between services and help maintain boundaries between services.

7. **Versioning:** DTOs can be versioned to support backward compatibility when changes to the data structure are introduced. Old versions of DTOs can still be used to handle requests from clients that rely on previous data formats.

8. **Security and Privacy:** DTOs allow you to control which data is exposed to external systems or clients. You can create DTOs that exclude sensitive information, ensuring data privacy and security.

9. **Performance Optimization:** By transmitting only the necessary data, DTOs can improve the performance of an application, especially when dealing with large datasets or slow network connections.

10. **Testing and Mocking:** In unit testing and mocking scenarios, DTOs can be used to represent the expected input and output data for functions or methods under test.

11. **Cross-Platform Integration:** When integrating with external systems or services, DTOs help standardize data formats, making it easier to work with heterogeneous technologies.

12. **Message Queues:** In message queue systems like RabbitMQ or Apache Kafka, DTOs are used to serialize and deserialize messages sent between producers and consumers.

13. **Data Import/Export:** When importing or exporting data from/to different formats or systems, DTOs can serve as a bridge for data transformation.

14. **Reporting and Analytics:** DTOs can structure and represent data for reporting and analytics purposes, helping generate meaningful insights from raw data.

DTOs are a versatile tool in software development, providing a structured way to manage data transfer and maintain separation of concerns. Their usage can vary depending on the specific requirements and architecture of an application or system.

Simple example of a Data Transfer Object (DTO) class in PHP to represent data related to a user registration form. In this example, we'll define a `UserRegistrationDTO` class that encapsulates user registration data, such as username, email, and password.

```php

// the purpose is only to transfer data
// no logic / behaviors here!!!
// only serialization, and parsing
class UserRegistrationDTO
{
    private $username;
    private $email;
    private $password;

	/**
		or you can use readonly (since php 8)
		because attributes of a DTO class are immutable
		
		readonly public $username
		readonly public $email
		readonly public $password
	*/

    public function __construct(string $username, string $email, string $password)
    {
        $this->username = $username;
        $this->email = $email;
        $this->password = $password;
    }

    public function getUsername(): string
    {
        return $this->username;
    }

    public function getEmail(): string
    {
        return $this->email;
    }

    public function getPassword(): string
    {
        return $this->password;
    }
}

// Usage example:

// Simulate data received from a registration form
// data have any form but the goal is to unify and encapsulate the data
// for the future manipulation in the application
// without pay attention to the origin
$formData = [
    'login' => 'john_doe',
    'mail' => 'john@example.com',
    'pwd' => 'secretpassword',
];

// imagine you also receive this data provided from another api
$formData = [
    'user' => 'john_doe',
    'e-mail' => 'john@example.com',
    'token' => 'secretpassword',
];

// Create a UserRegistrationDTO object using the form data
$userRegistrationDTO = new UserRegistrationDTO(
    $formData['login'],
    $formData['mail'],
    $formData['pwd']
);

// Accessing user registration data through the DTO
echo "Username: " . $userRegistrationDTO->getUsername() . PHP_EOL;
echo "Email: " . $userRegistrationDTO->getEmail() . PHP_EOL;
echo "Password: " . $userRegistrationDTO->getPassword() . PHP_EOL;
```

In this example:

- We define a `UserRegistrationDTO` class with private properties for `username`, `email`, and `password`.

- The constructor of the `UserRegistrationDTO` class accepts these properties and initializes the object.

- Getter methods (`getUsername`, `getEmail`, and `getPassword`) are provided to access the private properties. These methods ensure that the data is read-only and cannot be modified after the object is created.

- In the usage example, we simulate data received from a user registration form (`$formData` array).

- We create a `UserRegistrationDTO` object using the form data and then access the user registration data through the DTO using its getter methods.

This example demonstrates how a DTO can be used to encapsulate and transfer user registration data, allowing for structured and controlled access to the data while maintaining immutability.