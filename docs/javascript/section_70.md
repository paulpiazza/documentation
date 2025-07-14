---
title: API Development with Swagger and OpenAPI
description: Slim notes.
order: 70
---

See what you’ll be learning in the API Development with Swagger and OpenAPI Unit.

> A portion of the content of this Unit comes from articles originally posted by [SmartBear](https://smartbear.com/). SmartBear is a software quality company offering tools for teams to better design, develop, and test their software at scale. You can learn more by visiting [SmartBear’s blog](https://smartbear.com/blog/).


The goal of this unit is to dive deeper into API development by exploring two of the most critical parts of the development process: design and documentation.

After this unit, you will be able to:

- Describe the key parts of the API Development Lifecycle
- Use API design and documentation best practices
- Read and write a YAML file
- Differentiate between the Design First and Code First API development methodology
- Differentiate between Swagger and OpenAPI
- Differentiate the different types of Swagger tooling and their uses
- Apply the OpenAPI specification and Swagger tooling to design and document an API from scratch.

You will put all of this knowledge into practice with an upcoming Portfolio Project. You can complete the Portfolio Project either in parallel with or after taking the prerequisite content—it’s up to you!

Learning is social. Whatever you’re working on, be sure to connect with the Codecademy community in the [forums](https://discuss.codecademy.com/). Remember to check in with the community regularly, including for things like code review on your project work and what material you will need to accomplish your goals.


### What is the API development lifecycle?

Application Programming Interfaces, or APIs, have become a vital tool for both engineers and businesses as a whole. APIs enable two different services to interact and complement each other, opening the doors to many engineering and business possibilities.

However, developing an API by itself is no easy task. Creating an API encompasses a series of steps, each with its own complex processes. This collection of steps is known as the _API development lifecycle_. To understand how to develop successful APIs, we must first understand each stage of the lifecycle.

While there are many frameworks and methodologies for the API lifecycle, there are typically five chronological stages:

1. Planning and Designing the API
2. Developing the API
3. Testing the API
4. Deploying and Managing the API
5. Retiring the API

Each of these stages is a vital piece to making sure an API is successful. Let’s dive in and explore the details of each stage.

### Planning and Designing the API

API planning and design is the first stage of the API development lifecycle. This stage involves ideating and mapping out the various resources and operations and their associated use cases before the API is fully implemented in code.

Typically business team members (or sometimes even engineers) will begin by mapping out the capabilities of the API and the data it should expose. This process usually captures the API audience’s needs and the requirements from various stakeholders.

When the API requirements are done being mapped out, engineering teams can then begin laying out the architecture of the API. Naming conventions, protocols, technology, and much more are debated and finalized.

### Developing the API

Once the requirements are mapped out and the engineering team has a plan, the development stage begins. This stage focuses on implementing the API based on the plan and design and is when engineering teams will do the necessary work to bring the API to life.

Typically this is also where the API is documented. Often when APIs are treated as a product (that the team or business makes revenue from), teams will spend just as much time documenting their API as they will on any of the other phases. A good example is the [IMDB Movie API](https://imdb-api.com/) that offers free and paid services. Note the extent of the APIs documentation found [here](https://imdb-api.com/).

### Testing the API

In the testing phase, the API would be thoroughly tested and monitored for performance issues. This phase typically catches any issues so that engineering teams can refine the API before it is released to the _end-users_ (sometimes referred to as _end-consumers_) — the person or persons who will use the product (e.g., the API).

### Deploying and Managing the API

Ultimately, APIs must satisfy a use case for an end consumer, be it an internal developer team, a partner company, or the general public. After the testing phase, APIs are ready for release and are deployed to a secure environment to facilitate easy discovery and consumption.

On some occasions, mainly when APIs are public-facing, APIs are released into beta where end-users (sometimes only a small percentage) can test and experiment with the API and give feedback and report bugs. The beta helps finalize any outstanding issues as well as gain valuable feedback before a full API release.

This phase is also where APIs are managed for the rest of their lifetime to deliver guaranteed and high-quality API performance. Management includes but is not limited to performance tracking, usage analysis, community building, and a lot more!

### Retiring the API

Lastly, the final phase of the API lifecycle is deprecation. This phase is where support for an API’s version, or in many cases, an entire API itself, is discontinued.

Deprecation involves creating a detailed plan on migrating users away from the API and releasing the APIs resources. Deprecation needs to be handled with extreme care as it may impact many end-users and associated products that utilize the API.

### Wrap up

To summarize, we learned:

- What the API development lifecycle is
- What happens during the API design and planning phase
- What happens during the API development and management phase
- What happens during the API testing phase
- What happens during the API deployment phase
- What happens during the API retirement phase

Learning to master the intricate processes in each stage of the API development lifecycle will bring us and the teams we work on closer to implementing successful API solutions.

### Defining API design and why it matters

Building successful APIs is difficult. Apart from the various stakeholders (engineers, designers, etc.) and technology decisions, there are a lot of finer details that can get overlooked. One slip-up can result in endless support requests from end-users and eventually result in a bad reputation. It’s crucial to plan, plan, and plan even more before actually implementing an API. This is why _API design_, typically the first step in the API development lifecycle, is so important.

API design is defined as the iterative collection of decisions that lead to a concrete plan for developing, implementing, and maintaining an API. The design process is not just about the developers who are building the API but also about understanding the API’s end-user, their needs, and how best the API can meet those needs. There are notable benefits in investing time and resources into the design phase of the API development lifecycle. Some of the benefits include:

- **Effective Implementation**: A detailed API design can significantly help in the APIs implementation (usually by developers) phase by preventing ambiguity.
    
- **Incremental Development**: Having a straightforward design helps know precisely which resource, or sub-resources, would need to be updated (or retired), preventing confusion and leading to less duplicated work.
    
- **Better Documentation**: A solid initial API design makes documenting the API faster and less error-prone.
    

But how exactly do we know we have created a well-designed API? Let’s explore a few characteristics most well-designed APIs share.

### Characteristics of a Well-Designed API

Typically, a well-designed API will have the following characteristics:

- **Easy to read and work with**: A well-designed API will be easy to work with, and its resources and associated operations can quickly be memorized by developers who work with it regularly.
    
- **Hard to misuse**: Implementing and integrating with a well-designed API will be a straightforward process and less error-prone. It has informative feedback and doesn’t enforce strict guidelines on the API’s end-user.
    
- **Complete and concise**: A well-designed API is a complete API. This means the API exposes any data that the end-user expects it to expose. Most APIs are completed over a long period of time – implementing end-user feedback and releasing new versions along the way.
    
- **Well documented**: Finding any information about endpoints, integrations, and features should be simple with a well-designed API. The documentation will cover and explain all the available functionality of the API.
    
- **Reliable**: An API’s end-user will depend on an API to be available and functioning when they need it. They also expect functionality to not arbitrarily change without any proper notice.
    

But how do we make sure our APIs have these characteristics? Well, let’s go through some standard, applicable best practices to create and maintain a well-designed API. By doing so, we will see how small changes in our APIs design can help bring us closer to achieving the characteristics listed above.

Before we dive in, let’s imagine a hypothetical photo-sharing application. The application allows end-users to upload photos, characterizing them by the location of where the photos were taken. End-users can also hashtag the photo to describe the emotions associated with them. Keep this application in mind as we will explore the best practices of three distinct parts of an APIs design:

- Collections, Resources, and Their URLs
- Requests
- Responses

**Before moving on, let’s review:**

Free response

In your own words, what is API design?

Submit Response

Stuck? Get a Hint

### Collections, Resources, and Their URLs

#### Nouns are Your Best Friend

For any resource or collection that represents some data in an API, the base URL should always be neat, elegant, and, most importantly, intuitive. A long and difficult-to-read base URL is not just bad to look at but can also provide a more error-prone and challenging experience for the end-user. For example, let’s take a look at a set of potential URLs (and associated HTTP verbs) for our previously mentioned photo-sharing application:

|API Route|Purpose|HTTP Verb|
|---|---|---|
|/retrieveEveryPhoto|Retrieve all photos|GET|
|/getSinglePhoto/1|Retrieve a single photo|GET|

While these API URLs might seem easy to comprehend, it’s easy to imagine our URLs getting very lengthy and confusing in the future. There is also no clear consistency between what and how each of the resources is called (ex. “get” vs. “retrieve”). This is why it is best to keep API URLs consistent by only using nouns. Here are the same API resources re-written with a single noun:

|API Route|Purpose|HTTP Verb|
|---|---|---|
|/photos|Retrieve all photos|GET|
|/photos/1|Retrieve a single photo|GET|

There’s no hard rule on keeping the resource nouns singular or plural, though having the same plurality across all resources and collections helps achieve a level of consistency.

#### Describe resource functionality with HTTP methods

Recall, RESTful APIs are comprised majorly of HTTP methods that have well-defined and unique actions for any resource. These methods help all APIs achieve a level of consistency in the type of operations end-users expect to occur when using an HTTP method. For example, here’s a list of commonly used HTTP methods that define the CRUD operations for any resource or collection in our photo-sharing app:

|HTTP Verb|Description|Example|
|---|---|---|
|GET|Retrieve a resource|GET /photos/1|
|POST|Add a resource|POST /photos|
|PUT|Update a resource|PUT /photos/34|
|PATCH|Update a resource|PATCH /photos/4|
|DELETE|Delete a resource|DELETE /photos/12|

Mapping these HTTP methods to describe the typical CRUD operations of our applications allows developers to know exactly what they should expect to occur.

### Responses

#### Give Feedback to Help Developers Succeed

Providing good feedback to developers on how well they are using an API goes a long way in improving adoption and retention. Good feedback involves positive validation on correct implementations and an informative error on incorrect implementations that can help developers debug and correct how they use the API.

For APIs, errors (and relevant error codes) are a great way to provide context when things go wrong! In general, there are three possible error outcomes when using an API:

1. The client application behaved erroneously (client error - 4xx response code)
2. The API behaved erroneously (server error - 5xx response code)
3. The client and API worked (success - 2xx response code)

When designing an API, describe these error responses well, but keep them concise and neat. In addition, use specific response codes to detail errors accordingly in the API ([check out this great resource on error codes](http://www.restapitutorial.com/httpstatuscodes.html)). Lastly, provide enough information in the error codes for an end-user to start work on fixing the cause, and, if there’s more information needed, provide links to additional documentation.

### Requests

#### Handle complex requests elegantly

An API should be able to access many different types of data, so we want to be mindful of organizing it to best help our end-user. We want to make sure that our data is complete, available, and accounts for relationships between different types of data. In the interest of performance, we’d only want to surface the relevant data that an end-user needs and even consider limiting the amount of data they get in the response.

We’ve already seen how we can retrieve individual resources (e.g. `/photos/1`) and a collection (e.g. `/photos`), but how can we add more complex behavior to our requests? One way to account for specific properties and limit responses is to use a _query parameter_, adding a `?` with key-value pairs that list out what a user needs.

Let’s take the example of our photo-sharing app. Someone might want to get photos from a specific location and a specific hashtag. We might also want to limit the number of results to 10 per API call to prevent server load. If the user wants to find the top 10 photos in Boston with a hashtag `#winter`, the call would be:

```
GET /photos?location=boston&hashtag=winter&limit=10
```

Notice how the complexities have now been reduced to a simple association with a query parameter. These are just some of the ways we could design parameters that strive towards API completion and help our end developers use our API intuitively.

Also, when in doubt, leave it out. Developing and maintaining APIs is a continuous process, so we can wait for feedback from our end-users to see how we can improve our API. This way, we account for the immediate and future needs of the API.

**Before wrapping up, let’s review:**

Multiple choice

Which of the following is NOT a benefit of successful API design?

Higher adoption for your API.

Increased user confusion.

Faster documentation.

Improved developer experience.

### Wrap up

To summarize, we learned:

- What API design is and the benefits of investing in it
- Common characteristics of a well-designed API
- Common best practices when approaching API resource naming, requests, and responses

There isn’t a single approach to API design that will work for every individual or organization. The above suggestions are just that — advice and recommendations which can be used or discarded depending on our end-users needs.

### Defining API Documentation

APIs can provide a lot of value internally to a company and also externally to end-users. However, for an API to be valuable, it must be easy to understand. This is where _API documentation_ comes into the picture.

API documentation is technical content containing instructions about how to effectively use and integrate with an API. It’s a concise reference manual containing all the information required to work with the API. Documentation typically includes tutorials with examples and details about the functions, classes, return types, arguments, and much more. API Documentation is traditionally created using regular content creation (e.g., text editors) and maintenance tools.

Among all the phases in the API lifecycle, documentation is the area showing the most growth. This is especially true with the tooling ecosystem around documentation. Since documentation is traditionally something that fell on the backburner for development teams, it also means that there’s a lot of room for growth. We can have the best functional API, but no one will use it if they don’t know how to.

**Before we continue, lets review:**

Multiple choice

Which of the following is NOT something that might be a part of API documentation?

Examples

Instructions

Tutorials

The actual code that makes up the API

### Benefits of Well-Crafted API Documentation

So, what exactly do we gain by investing in API documentation? Well, some benefits include:

- **Improved End-User Adoption:** Adoption patterns are already shifting towards developers in the technology sphere. One big reason for having good API documentation is that it improves the experience for developers using the API, which directly correlates with API adoption. People adopt APIs they enjoy using, and if we get documentation right, more people will find value in the services easily, leading to better growth and adoption.
    
- **Improved Developer Experience (DX):** The third-party developer, typically one of many end-users for an API, is busy solving complex programming challenges. These developers want to integrate as quickly as possible to move forward in their software development, meaning they should immediately understand the value and usage of the API. The aggregate experience of the developer when discovering, learning to use, and finally integrating with an API is termed as _developer experience_ (DX) — and excellent API documentation is the key to a great DX.
    
- **Increased Awareness:** Satisfied end-users will be an APIs biggest advocates. As more end-users adopt an API and reach critical mass, there will be a probable increase in evangelism and word-of-mouth publicity by satisfied end-users.
    
- **Saves Support Time and Costs:** In addition to driving increased awareness and adoption of an API, good documentation also decreases the amount of time spent onboarding new end-users, be it internal developers or external partners. Poor or no documentation means more frustrated users rely on a team to understand how to work with the API. In contrast, individuals and teams save countless hours responding to support requests when end-users are given the ability to try out the API before implementing it and are armed with detailed documentation to get started.
    
- **Easier Maintenance:** Documentation leads to good API maintenance. It helps internal teams know the details of an API’s resources, methods, and their associated requests and responses, making maintenance and updates quicker.
    

**Before we wrap up, lets review:**

Multiple choice

Which of the following is NOT a benefit of API documentation?

Faster initial release

Easier maintenance

Increased awareness

Improved user adoption

### Wrap up

To summarize, we learned:

- What API documentation is
- What Developer Experience (DX) is
- The benefits of investing in a well-crafted API documentation

Documentation is the key to a great experience when consuming an API. It not only enables end-user satisfaction but also allows API adoption to increase.


### API Documentation Best practice Introduction

APIs are only as good as their documentation — a great API can be rendered useless if people don’t know how to use it. However, creating and maintaining good documentation that’s easy to read, enjoyable to interact with, and sets the end-user up for success, can be extremely challenging. Creating excellent documentation requires effort and patience, but it has direct implications for API adoption and maintainability. In this article, we’ll start by looking at who we should design documentation for and then follow up with exploring some common best practices. Let’s dive in!

### Who is the API documentation for?

Most likely, an API is meant to solve real-world problems faced by companies in a specific industry and will directly be integrated into applications by software engineers. As such, there are two types of potential audiences of an API who will influence an API’s consumption and its adoption usage:

- **Decision-makers:** Decision-makers are the people who evaluate an APIs services and decide if it makes sense for the development team to spend time exploring the service. They are looking to use an API to solve potential challenges in their product or service strategy. In many cases, they don’t directly work with the API, but they are the main points of contact for influencing an organization’s decision to consume it. Examples of decision-makers are CTOs or Product Managers.
    
- **Users:** Users are the people who will be directly working with an API. They need to learn the ins and outs of the API and how it applies to their use case. This could mean learning how to call and integrate with many, or all, of the resources the API exposes. They are critical to the sustainability of an API. They are analytical, work on significant and complex engineering problems, and have a shortage of time. Hence, an API must be easy to use and have excellent documentation so these users can successfully integrate with an API as quickly as possible. Examples of API users are front-end and back-end developers.
    

![](https://static1.smartbear.co/swagger/media/blog/wp/apidecisionmakers.png)  

Ideally, an API’s documentation needs to cater to both personas. This can be challenging, but it ensures the documentation is sustainable and complete, ensuring long-term success. So, how do we accomplish these goals and serve both user groups? Well, let’s run through some common best practices that will set up our next API documentation for success!

**Before we move on, let’s review:**

Multiple choice

Who should the API documentation be written for?

Neither technical nor non-technical users

Both technical and non-technical users

Non-technical users such as clients and managers

Technical users such as developers and testers

### Best Practices in API Documentation

Now that we’ve understood who to document APIs for, it’s time to understand what goes into good API documentation. Let’s dive into some best practices all well-documented APIs follow!

##### Detailed Error Messages

Error messages are important because they tell end-users when they’re integrating with an API incorrectly. Explain error standards and provide solutions on how to overcome them when an end-user gets an error.

#### A List of All Exposed Resources

Resources are the core components of an API that end-users will constantly be interacting with. An API should list all of its exposed resources and understand how end-users may integrate with them.

### A Terms of Use Agreement

Terms of use is a legal agreement between the end-user and an organization, defining how the end-user should ideally use the API’s services. These terms should include API limits under best practices, with terms and conditions. Constraints also need to be clearly stated so that end-users understand what API usage and practices are permitted, so they don’t accidentally have their access restricted.

#### A Changelog

A changelog is a document, usually published on an APIs website, that should detail updates and versions of an API and how it might affect API end-users. This will help end-users know the stability of the API and see if any changes need to be made to their integration with the API.

#### Less Technical Jargon

Keep in mind that many end-users working with an API may not have intimate knowledge of the domain to understand technical jargon. Documentation should cater to the “very technical” developer audience and the less technical decision-makers. A big mistake technical writing teams make is assuming their audience is entirely technical and has a complete understanding of how to work with APIs. If an API does have technical or domain-specific jargon, it is helpful to link those specific items to further documentation explaining the terms.

#### Examples of all Requests and Responses

An API call response is a guide for end-users, indicating whether they’re on the right track or are doing something wrong. An API end-user should know exactly what to expect from a successful API call. Ideally, an API provides examples for every single object it is supposed to return and examples of parameters that end-users can add for a successful call.

It is also best to describe the entire sample response body in every supported format. Think of standard formats like XML or JSON, but also HTTP headers, error codes, and messages.

#### An Authentication Guide

An API’s documentation should have a section dedicated to any authentication (if it exists) required to start consuming the API’s data. Most APIs have authentication schemes, and end-users have to authenticate before gaining access to the API. Make sure this section is adequately documented and hand-holds end-users to authenticate against the API successfully.

### Arm Documentation with Resources

Excellent API documentation goes beyond the essential content and ensures end-users reach success with an API as quickly as possible. Let’s examine some potential candidates for resources to include in the documentation.

#### A Getting Started Guide

The getting started guide provides a detailed account of how to start working with the API quickly. The emphasis in the guide should be on ensuring end-users reach success with the API as soon as possible, hand-holding them throughout the journey.

#### SDKs and Libraries

Code libraries help developers quickly call different resources. Having quick and easy methods in different languages to work with an API allows developers to feel more comfortable working with it. _Software Development Kits_ (SDKs) - a set of libraries or tools that end-users can work with out of the box, are challenging to build, and aren’t crucial for launch, but can significantly improve API adoption.

#### A Interactive Console

One way to encourage end-users to test what they read in the API documentation immediately, is to provide an interactive API console. Experimentation is powerful, and a console makes getting started easy, with limited liability from the end-users perspective. An interactive console can go a long way in helping developers learn about an API’s value very quickly.

**Before we wrap up, let’s review:**

Free response

In your own words, describe the importance of excellent API documentation.

Submit Response

Stuck? Get a Hint

### Wrap up

To summarize, we learned:

- The two types of people API documentation is typically written for
- A few best practices to follow when writing API documentation
- Key resources that API documentation should provide

Although it may seem challenging and time-consuming, following these practices and creating these resources will help make excellent API documentation that is effective and helpful to all individuals who use it.


### Design First 

When it comes to using API development, two popular schools of thought have emerged: The “Design First” and the “Code First” approach to API development. To understand the two approaches better, let’s look at the general process followed during the API lifecycle.

First, the concept of the API starts with a team (or individual) identifying an opportunity. The opportunity is analyzed, and a plan to capitalize on it is created in a text document by strategists, analysts, and other business folks. This document is then passed along to the development team, where the plan takes some tangible form. There are two possibilities from here on to develop the API:

1. **Design First:** The API design plan is converted to a human and machine-readable contract from which the code is built.
2. **Code First:** Based on a business plan, an API is directly coded, from which a human and machine-readable document can be generated.

Both approaches depend on a _API contract_ - a document, usually written in a human and machine-readable language (e.g., JSON, YAML) that describes the API’s capabilities, endpoints, and finer details. Typically the API contract serves both as a plan for the API implementation but also as the APIs documentation.

In the “Design-First” approach, the API contract serves as a blueprint for the APIs structure and features and guides the development process. In the “Code-First” approach, since the API is already implemented, it typically serves the role of documentation. Here is a visual breakdown of the process:

![](https://static-assets.codecademy.com/Courses/Swagger-OpenAPI/design-first-vs-code-first-swaggerhub-graphic.png)  

**Before we continue, let’s review:**

Free response

In your own words, describe the difference between the Design First and Code First approaches to API development.

Submit Response

Stuck? Get a Hint

### Choosing the right approach

There are advantages and disadvantages associated with both approaches. Choosing the right approach boils down to a team’s immediate technological and strategic needs that they wish to solve with the API. Let’s dive into when and why we would choose each approach for our next API project.

#### Design First Approach

##### When Developer Experience Matters

A well-designed API can do wonders for the adoption and consumption of the API, and good design is typically better achieved with the Design First approach (since it is in the earlier stages of the lifecycle). If an APIs strategy involves the need for high adoption and retention of users integrating with the API, then good Developers Experience (DX) matters.

##### When Delivering Mission Critical APIs

The biggest reason to adopt the Design First approach is when an APIs target audiences are external customers or partners. In such a case, the API is a crucial distribution channel so that end-users can consume the services we want to provide, and good design plays a key role in determining customer satisfaction.

##### When Ensuring Good Communication

The API contract can act as the central draft that keeps all team members aligned on an API’s objectives and how the API’s resources will be exposed. Identifying bugs and issues in the APIs architecture with a team becomes more straightforward when working with a human-readable design document such as the API contract. Spotting issues in the design before writing any code is a much more efficient and streamlined approach than doing so after the implementation is already in place.

#### Code First Approach

##### When Delivery Speedy Matters

Developers can start implementing an API much faster by coding the API directly from the requirements document. This is important if an APIs go-to-market strategy emphasizes speed and agility as essential factors for the success of the API program. The fact that automation is much easier in the code-first approach helps strengthen this case, with many libraries supporting scaffolding server code, functional testing, and deployment automation.

##### When Developing Internal APIs

The Code First approach affords speed, automation, and reduced process complexity, at the cost of good developer experience. If the API will only be consumed by the team or company building it, then the Code First approach is an ideal solution. This is especially true if the API developed is small, with only a few endpoints being used internally.

### Wrap Up

To summarize, we learned:

- The two different approaches to API development: Design First and Code First
- The reasons for choosing Design First or Code First approach for API development

There are positives and negatives to both approaches. The approach we take to developing our APIs will play a vital role in determining how they’re consumed and maintained. Consider three important questions when choosing an approach:

1. Who are the API’s end-users?
2. What needs do the end-users have?
3. What problem is the API trying to solve for the end-users?

These are the types of questions that should guide decision-making when choosing a suitable methodology for API development.


### YAML Structure

To begin exploring YAML, let’s take a look at an example YAML file called `example.yaml`:

```
---# Our first YAML documentbottle: winecapitals:  Japan: Tokyo  Argentina: Buenos Airesoceans:  - Indian  - Atlantic  - Arctic  - Pacific…
```

Note the following about the contents of this file:

- A YAML document begins with three dashes (`---`) and ends with three dots (`…`). These characters can separate multiple YAML documents within a single file. In a YAML file with a singular document (e.g., the above example), most parsers treat these characters as optional.
    
- The second line begins with `#`, which makes it a comment. Comments are ignored by parsers but are helpful since YAML files are often shared by different developers and can provide insight into the document’s purpose.
    
- The bulk of this YAML document consists of mappings or key-value pairs, which are separated by a colon and a space (`:` ). Every key must be a string and must be unique. Values can be nested mappings, as is the case with the value of `capitals`. They can also be sequences, as with the value of `oceans`, or scalars, as with the value of `bottle`. We’ll learn more about these data types a bit later in this article.
    
- The use of whitespace is a crucial aspect of YAML. Notice how a line break separates each mapping. When objects are nested, indentation indicates which objects are a part of the same value. Indentation must consist of one or more spaces. Tabs, however, are forbidden in YAML.
    
- While not explicitly shown, note that YAML files should end with the extension `.yaml` or `.yml`.


### Introduction to the OpenAPI Specification

An introduction to creating human-readable API contracts with the OpenAPI Specification

> This article was originally posted by [SmartBear](https://smartbear.com/). SmartBear is a software quality company offering tools for teams to better design, develop, and test their software at scale. You can learn more by visiting [SmartBear’s blog](https://smartbear.com/blog/), and you can read the original article [OpenAPI-Driven API Design](https://swagger.io/blog/api-design/openapi-driven-api-design/) by Keshav Vasudevan.

#### Introduction

Good design is the reason why monuments become wonders, and why products become great. Design can be the cornerstone for excellent usability and adoption. In the world of APIs, design can be thought of as modeling the contract between the server and client. Designing an API means providing an effective interface that helps an API’s end-user better understand, use, and integrate with it. Every product needs a usage manual, and an API is no exception.

Tony Tam, the creator of the original “Swagger” Specification (now known as the OpenAPI), explains that designing an API involves “planning for failures.” This article will explore how using a standard like OpenAPI will help us create human-readable API contracts that support internal and external stakeholders to understand what to do and how they can better work together to build a great API.

### Designing an API using OAS 3.0

The _OpenAPI Specification_ (_OAS_) is one of the most popular standards for designing human-readable API contracts. The OAS specifies the rules and syntax required to describe an API’s interface. The OAS has evolved to meet the needs of modern API teams and continues to introduce updates to make the specification simpler to use and easier for humans and computers to understand.

Here is the general structure of an OAS defined API contract using OAS 3.0:

![](https://static-assets.codecademy.com/Courses/Swagger-OpenAPI/openapi3structure.png)  

The above figure breaks down the various sections in an API designed by the OAS. Let’s go over what each section means and how it can be used.

#### Info & OpenAPI

The `info` and `openapi` section of the API contract contains essential metadata. There are both required and optional fields such as contact information, license information, terms of service links, and more! Essentially, the info object should give an API’s end-users and internal developers a high-level overview of what the API does. Take a look at the example below:

```
openapi: 3.0.0info:  title: Simple Pet Store  version: 1.0.0  description: This is a sample server for a pet store.  termsOfService: http://example.com/terms/  contact:    name: API Blogger    email: support@example.com    url: http://example.com/support  license:    name: Apache 2.0    url: http://www.apache.org/licenses/LICENSE-2.0.html
```

For more information, check out the [openapi object](https://github.com/OAI/OpenAPI-Specification/blob/main/versions/3.1.0.md#openapi-object) and [info object](https://github.com/OAI/OpenAPI-Specification/blob/main/versions/3.1.0.md#info-object) in the official OAS documentation.

#### Servers

An API is a contract between the end-user and a server (usually the server hosting the API). The `servers` object can give a client information on where the API’s servers are located through its URL. Unlike the 2.0 version of the spec, which only allowed an API definition to have one server URL, OAS 3.0 supports multiple servers. This is useful since, in the real world, APIs exist in numerous environments, and each environment can have its own purpose. Here is an example:

```
servers:- url: https://development.gigantic-server.com/v1  description: Development server- url: https://staging.gigantic-server.com/v1  description: Staging server- url: https://api.gigantic-server.com/v1  description: Production server
```

For more information on this section, check out the [server object](https://github.com/OAI/OpenAPI-Specification/blob/main/versions/3.1.0.md#serverObject) in the official OAS documentation.

#### Paths

An OAS contract’s `paths` object shows the various endpoints an API exposes and the corresponding HTTP methods. It’s also under each method that the actual request-response cycle is detailed. The requests are described by `parameter` objects and the responses by the `responses` objects. This section gives all parties a clear sense of the data the API will expose and helps with planning, documenting, and implementing the API.

Here is an example of a single defined path:

```
paths:  /pet/{petId}:    get:      summary: Find pet by ID      description: Returns a single pet      parameters:      - name: petId        in: path        description: ID of pet to return        required: true        schema:          type: integer          format: int64      responses:        200:          description: successful operation        400:          description: Invalid ID supplied          content: {}        404:          description: Pet not found          content: {}
```

Notice two critical parts of the defined path:

- **Parameters:** Parameters are the variable parts of a request. There are four types of parameters that can be specified using the OAS 3.0:
    
    - path parameters, such as `/users/{id}`
    - query parameters, such as `/users?role=admin`
    - header parameters, such as `X-MyHeader: Value`
    - cookie parameters, which are passed in the Cookie header, such as `Cookie: debug=0; csrftoken=BUSe35dohU3O1MZvDCU`
- **Responses:** Responses are the objects returned on a request. Every response is defined by its HTTP status code, and the data is returned. The HTTP status codes are used to define whether the request was successful or unsuccessful.
    

This overview barely scratches the surface of the `paths` object options. For more information, take a look at the [paths object](https://github.com/OAI/OpenAPI-Specification/blob/main/versions/3.1.0.md#paths-object) in the official documentation.

#### External Docs

Any additional information that an API can offer to ease consumption and integration with the API is always a good idea. OAS 3.0 allows an API to reference external documentation via the external documentation object.

```
description: Find more info hereurl: https://example.com
```

Find out more info about the [external documentation object](https://github.com/OAI/OpenAPI-Specification/blob/main/versions/3.1.0.md#externalDocumentationObject) in the official documentation.

#### Tags

Tags are friendly categories to group various API operations. This allows end-users of the API to better segment and identify what they want to use the API for. These tags can also be handled by other third-party tools which integrate or read the OAS.

Tags can automatically be added to every path operation using the tags object. Tags can also be given descriptions by adding an optional tags section in the root level of the API definition.

```
paths:  /pet/findByStatus:    get:      summary: Finds pets by Status      tags:        - pets  /pet:     post:       summary: Adds a new pet to the store       tags:         - petstags:- name: pets  description: Everything about your Pets
```

#### Components

As an API needs to expose more resources and operations, the contract can tend to get really long. The API may repeat a lot of existing parameters or response descriptions in many different paths and operations, and rewriting them every time makes them prone to inconsistent descriptions and can be very time-consuming.

The component object can hold a set of reusable objects for an APIs design. The reusable objects can be schemas, responses, parameters, examples, and more. The exact reusable component can then be referenced in any path item.

Here’s an example of the components object:

```
paths:  /pets/{petId}:    get:      summary: Get a pet by ID      parameters:        ...      responses:        '200':          description: A single pet.          content:            application/json:              schema:                $ref: '#/components/schemas/Pet'  /pets:    get:      summary: Get all pets      responses:        '200':          description: A list of pets.          content:            application/json:              schema:                type: array                items:                  $ref: '#/components/schemas/Pet'components:  schemas:    Pet:      type: object      properties:        id:          type: integer        name:          type: string
```

#### Wrap Up

To summarize, in this article we learned:

- What the OpenAPI Specification is
- Benefits of designing APIs with OAS
- The different sections of an API as defined by the OAS

Of course, this is just a general overview of the various sections associated with an OpenAPI designed API. Design is subjective, and while the OAS gives the required rules and items to describe an API, how we use them to effectively communicate the value of the API is what makes for a great design.

> Note: The one OAS component we did not cover in this article was the security component. This is due to the various different ways that API security can be implemented. To learn more about this component, check out the [OAS documentation](https://swagger.io/docs/specification/authentication/) and learn the basics of API security in our [Authentication and OAuth article](https://www.codecademy.com/article/authentication-and-oauth).



### Introduction to Swagger Tooling

##### Introduction

Let’s say we came up with an excellent idea for a new web application, and we want to develop an API for it. It’s essential that we create a blueprint of how our API works before jumping into the programming; otherwise, we might have to redo code, and we might run into bugs and other issues. This leads us to decide to use the Design First approach for our API. This means we will write out an API contract before diving into writing the code.

Another thing to consider is that writing the skeleton code (or structural code which does not yet contain logic) can take a long time and can be very tedious. In addition, while we are working on our code and once it is finished, how are we going to explain it easily to other people, document it, or even visualize it for debugging? These points make it seem like a lot of hard work to create an API for our shiny new web application. Thankfully, a software quality company called [SmartBear](https://smartbear.com/), as well as the development community, has created a set of tools that will make our process of creating our API much easier.

[Swagger](https://swagger.io/tools/) is the name for a set of tools that help with each step of designing, developing, testing, and visualizing an API. In this article, we will be exploring three specific open-source tools: [Swagger Editor](https://swagger.io/tools/swagger-editor/), [Swagger Codegen](https://swagger.io/tools/swagger-codegen/), and [Swagger UI](https://swagger.io/tools/swagger-ui/). We will take a look at each tool, examine what it accomplishes, and see how we can use all three together to build an API. By the end of this article, we will better understand how these three tools can help us and the teams we work on to develop APIs more efficiently. Let’s dive in!

**_A note on Swagger_**:

The year 2017 marked the official release of OpenAPI 3.0, the latest version of the OpenAPI specification. OpenAPI 3.0 was the first official release of the specification since it was donated to the OpenAPI Initiative by SmartBear Software and renamed from the Swagger Specification to OpenAPI specification in 2015. This means there may be resources on the web that still refer to Swagger as a specification rather than a set of tools. The easiest way to understand the difference is:

- OpenAPI = Specification
- Swagger = Tools for implementing the specification

Information about the changes from Swagger 2.0 to OpenAPI 3.0 can be found at [SmartBears’s blog post that explains the changes](https://swagger.io/blog/api-strategy/difference-between-swagger-and-openapi/).

**Let’s review!**

Multiple choice

What is Swagger?

Swagger is the current name of a popular open-source API definition format.

Swagger is equivalent to the YAML format.

Swagger is one tool which is responsible for designing APIs.

Swagger is a set of tools used to design, build, and document APIs.

Free response

What is the difference between Swagger and OpenAPI?

Submit Response

Stuck? Get a Hint

### Swagger Editor

As we noted earlier, our first step in designing our shiny new API would be to create an API contract. This is where the Swagger Editor tool comes into play. This tool is primarily used to design, define and document RESTful APIs. This editor accepts different OpenAPI versions, includes the option to convert a written specification to YAML (or JSON), and highlights any errors that might be occurring in the specification. The other two tools (Swagger Codegen and Swagger UI) can also be used directly from the Swagger Editor, but we will touch more on that later in this article.

The Swagger Editor can be accessed two ways:

- Via a web browser by visiting [Swagger’s online editor](https://editor.swagger.io/).
- Via a local machine by downloading the editor from [Swagger’s GitHub repository](https://github.com/swagger-api/swagger-editor).

Here’s how it looks:

![](https://i.postimg.cc/BbT3MpVY/image.png)

##### Swagger Codegen

Once our API specification has been designed, now it’s time for the grueling task of writing out the code for the backend logic and frontend interactions, right? Wrong! Using Swagger Codegen and a provided API specification, we can generate server and client-side code in many different languages. The generated code will even include documentation from the provided specification. Besides saving time by easily generating code, the Swagger Codegen tool provides more consistent code than writing it manually from scratch.

Since code generation typically occurs after the design process, the Swagger Editor tool allows you to generate the code directly through its options. Here is an example:

![](https://static-assets.codecademy.com/Courses/Swagger-OpenAPI/Swagger-editorl.gif)  

Swagger Codegen can also be downloaded via its [GitHub repository](https://github.com/swagger-api/swagger-codegen) and used locally through a Command Line Interface (CLI).

##### Swagger UI

Lastly, once we have a specification in place, and have created (or generated) our server and client-side code, we will need to document the API. The Swagger UI tool allows anyone — be it a development team or end-users — to visualize and interact with an API’s resources without having any of the implementation logic in place. This means we don’t even have to have any code written for an end-user to see the APIs resources, end-points, and even execute mock API calls. Here’s what it looks like:

![](https://i.postimg.cc/0NksZ7YZ/image.png)  

Swagger UI can primarily be accessed two ways:

- Via the online [Swagger Editor](https://editor.swagger.io/) tool. The right-hand side of the editor tool neatly displays any valid specification using Swagger UI. This means Swagger Editor already has Swagger UI built into it and generates the specification documentation live as it is created.
- Via a local machine by downloading from the [Swagger UI GitHub repo](https://github.com/swagger-api/swagger-ui).

**Before we wrap up, let’s review:**

Free response

How do the three main open-source Swagger tools work together when creating an API?

Submit Response

Stuck? Get a Hint

##### Wrap Up

To summarize, we learned:

- What Swagger is
- The difference between the OpenAPI and Swagger
- What the Swagger Editor, Swagger Codegen, and Swagger UI open-source tools are and what they can help us accomplish

These tools can make designing, building, and maintaining an API a much more efficient process. Give them all a try and check out more details on each tool on the [Swagger homepage](https://swagger.io/tools/).


### Designing and Documenting an API with Swagger

Build an API from scratch using the Design-First API development approach and open-source Swagger tooling.

#### Introduction

In the last article, we learned about Swagger and the three main open-source tools used to design, develop, and document APIs. We learned that we could create an API specification (API contract) using the Swagger Editor, generate code based on a specification using Swagger Codegen, and visualize the specification in an easy-to-read way using Swagger UI.

In this article, we will be downloading and using these tools locally to develop an API for the backend of an application that manages store orders. Our API will retrieve existing orders, create new orders, change an order’s status, and delete existing orders.

Before we begin, download the starter code from [here](https://static-assets.codecademy.com/Courses/Swagger-OpenAPI/orders_project_starting.zip).

##### Prerequisites

- Make sure that you are familiar with the OpenAPI specification and YAML format
- Make sure that you are familiar with Node.js
- Make sure that you are familiar with Express.js
- Ensure that you have downloaded and installed Node.js
- Ensure that you have downloaded and installed Express.js

If any of the concepts mentioned seem unfamiliar, this is an excellent time to pause and review the previous articles in the course. Additionally, note that while this tutorial primarily uses a Javascript-based tech stack (Node, Express), any tech stack that can build a RESTful API will suffice.

##### Designing the API contract using Swagger Editor

We are going to be using a Design-First approach when creating our simple API. To make it easier, let’s download and run the Swagger Editor locally. To do this, follow these steps:

1. Download or clone the code from: [https://github.com/swagger-api/swagger-editor](https://github.com/swagger-api/swagger-editor)
2. If Node.js and npm are installed, run `npm start` to spin up the editor. Make sure to run the command from inside the downloaded Swagger Editor directory. Otherwise, open the `index.html` file from the downloaded repository.

The Swagger Editor should now be open in a browser window and look something like this:

![](https://static-assets.codecademy.com/Courses/Swagger-OpenAPI/1.png)

##### Using the Swagger Tools

Now that we have Swagger Editor setup locally, let’s begin by deleting the existing “Petstore” example provided by default by the Swagger Editor. For the first line of our specification, add the specification format version. For this tutorial, we will be using version 3.0.1, so on the first line, add `openapi: 3.0.1`. By adding this, we will gain access to the “Insert” tab on the top options bar of the editor.

![](https://static-assets.codecademy.com/Courses/Swagger-OpenAPI/Swagger-editor-insert.gif)

##### Adding Info

The first part of our specification we need to fill in is the `info` section. Fortunately, using the Swagger Editor “Insert” tab, we can quickly and easily add this into our specification without having to worry about the YAML format at all. Select the “Add Info” option from the “Insert” tab. A window should pop up, and we can fill in the basic information of our web app. It should look something like this:

![](https://static-assets.codecademy.com/Courses/Swagger-OpenAPI/2.png)  

Select the “Add Info” button and tada! Part of the OpenAPI specification has been automatically generated for us! Some formatted info appears on the side of the screen as well. This is Swagger UI automatically updating based on the specification provided. As we add to our specification, Swagger UI will continue to populate with more info. We will dive into that soon! For now, the editor should look close to this:

![](https://static-assets.codecademy.com/Courses/Swagger-OpenAPI/3.png)  

At this point, Swagger UI should be displaying a structural error saying that we are missing our paths. This is another helpful feature of the tool because, in addition to populating with specification info, Swagger UI will also notify us of any problems in our specification. Let’s fill in a path to resolve the error!

##### Adding Paths

Similar to the last step, we can use the “Add Path Item” option in the “Insert” tab to easily add in our first path. A box will appear, which we can fill in with our first path called `/orders`. This path will serve as a way to retrieve all the orders we have in our API. Here is what our path details for `/orders` will look like:

![](https://static-assets.codecademy.com/Courses/Swagger-OpenAPI/4.png)  

Repeat this process to add the following three paths and their associated descriptions to the API specification:

- A `/neworder` path
    - This path is used to add a new order to the `orders.json` file.
- A `/update/{id}` path
- This path is used to change the status of an order matching the provided id. It modifies the `state` attribute of each order.
- A `/delete/{id}` path
    - This path is used to delete an order with a matching id.

Now our specification should be similar to this:

![](https://static-assets.codecademy.com/Courses/Swagger-OpenAPI/5.png)  
Note: There will be errors about the `id` parameter, which we will address later.

##### Adding Operations

Now that we have our paths defined, let’s add our operations. For this API, we will only have one operation for each path, but typically, there could be multiple. For each operation that we add, we will also add a tag to organize them in a meaningful way. This is especially helpful when viewing them through the Swagger UI panel. Let’s start by adding the `GET` operation for the `/orders` path.

Use the “Add Operation” option in the “Insert” tab to do so. In the form, select the `/orders` path and `get` operation. Continue filling in the fields with information describing how the `get` operation will return the list of orders. Make sure to add a tag at the bottom of the form. Here is an example of what it could look like:

![](https://static-assets.codecademy.com/Courses/Swagger-OpenAPI/6.png)

Now add the rest of the paths by using the following information:

- The `/neworder` path uses a `POST` operation to add a new order to the `orders.json` file.
- The `/update/{id}` path uses a `PUT` operation to update the `state` of an order with a matching id in the `orders.json` file.
- The `/delete/{id}` path uses a `DELETE` operation to delete an order with a matching id from the `orders.json` file.

Once all of the operations have been added, Swagger UI should generate this:

![](https://static-assets.codecademy.com/Courses/Swagger-OpenAPI/7.png)

##### Adding Example Responses

Now that we have all of our paths and operations defined, we can add more details, such as example responses. To do this, we once again use the “Insert” tab and select “Add Example Response”. We can add a new `200` successful example response to our `GET` operation to show what data will be returned on a successful call to the route. In this example, we can copy the contents of the `orders.json` file located in the main project directory and paste it into the text box. It will be formatted nicely for us in Swagger UI. Here is what the form should look like:

![](https://static-assets.codecademy.com/Courses/Swagger-OpenAPI/8.png)  

When expanding the `/orders` path in Swagger UI, a nicely formatted example response should now be visible:

![](https://static-assets.codecademy.com/Courses/Swagger-OpenAPI/9.png)  

Now, take some time to add some example responses for the different HTTP response status codes that our four operations can return.

##### Adding example request bodies and parameters

We are almost done with the API specification! Lastly, we are going to add example request bodies and parameters for the operations which require them. For example, our `POST` operation for the `/neworder` path requires that an `application/json` request body be sent since we are creating a new order. In order to add details about this, we can manually add it into the Swagger Editor text box. Within the `/neworder` path and associated `POST` operation, add this code above the `responses:` section:

```
requestBody:  description: A new order object  content:    application/json:      schema:        $ref: '#/components/schemas/Order'
```

Ensure the YAML code is indented correctly and starts with the same indention depth as the `responses` section. Note that the code we just added uses the OpenAPI [schema feature](https://github.com/OAI/OpenAPI-Specification/blob/main/versions/3.1.0.md#schemaObject). This will allow us to reuse an order component throughout the rest of our specification. To complete the schema, scroll down to the bottom of the editor and add the order component:

```
components:  schemas:    Order:      type: object      properties:        name:          type: string        id:          type: string        state:          type: string      xml:        name: Order
```

Make sure the `components` section is not nested at all. It should look like this:

![](https://static-assets.codecademy.com/Courses/Swagger-OpenAPI/10.png)  

You can also describe the parameters in a similar way. In the `/update/{id}` and `/delete/{id} paths`, add the following text below the `operationId` section:

```
parameters:  - name: id    in: path    description: 'The id of the order.'    required: true    schema:      type: string
```

Ensure that the YAML code is indented correctly and is on the same indentation level as `operationId`. This will update Swagger UI to describe that the `id` parameter is required and that it represents the id of an order.

Go through the API specification and add any more missing pieces of information, then open the provided specification in the project files to compare. Look at each of the components in the Swagger UI section to see how each part is labeled and how it is much easier to read.

To see a completed version of the API specification, download it [here](https://static-assets.codecademy.com/Courses/Swagger-OpenAPI/openapi.yaml).

##### Writing the Code

Now that we have completed the specification, it is time to write the code for the API. Typically at this stage, we could use Swagger Codegen to generate code and save ourselves time. This is useful in a large project with a giant specification, however, since our API isn’t huge, it is not necessary. Even so, select the “Generate Server” tab and the “nodejs-server” option. This will download some code onto your device. Take a look at the way the code is structured and the files in the “controllers” directory. Here we have code that we could use to fill in our logic, however, we are going to write it from scratch.

Exit out of the generated code from Swagger Codegen and navigate to the [code directory](https://static-assets.codecademy.com/Courses/Swagger-OpenAPI/orders_project_starting.zip) that was provided at the beginning of this article. To begin, open the `server.js` file in the project directory. Some setup code has been included so that we only need to add in the missing code from our API specification.

###### All Orders

In Swagger UI, select the `/orders` path and take a look at the info from the specification. It should show that no parameters and no request body are accepted but that a response is returned in the form of a JSON object. Here is what our API request should look like in express.js:

```
server.get('/orders',(request,response)=>{ response.json(orderData);});
```

Here we take the `orderData` variable that was provided in the starter code and set the response to a call to the `/orders` route to send a JSON response with all of the orders.

###### Creating New Orders

Next, select the `/neworder` path in Swagger UI. The `POST` operation accepts a JSON body in the request and has a success message as the response. For the logic, we are going to add the order to our orders JSON object and overwrite the `orders.json` file to save the change. Here is what that looks like:

```
server.post('/neworder', express.json(), (request,response)=>{ orderData.orders.push(request.body); fs.writeFileSync('orders.json', JSON.stringify(orderData)); response.send("Success") console.log("Success");});
```

Here we use the `express.json()` built-in middleware function to parse an incoming `POST` request with new order data. We then push the body of the request (the new order information) into the `orderData` object. Lastly, we commit the changes to the `orders.json` file and send a response indicating that the operation of creating a new order was a success.

###### Updating Existing Orders

The `/update/{id}` path in Swagger UI shows that a parameter called `id` and a request body string are both needed for this `PUT` operation. The logic will replace the `state` attribute of the matching order object. Here is what that looks like:

```
server.put('/update/:id', express.text({type: '*/*'}), (request,response)=>{ var items = orderData.orders items.forEach(function(o) {   console.log(o)     if (o.id == request.params.id){       console.log('Modifying order!')       o.state = request.body;      }    }); fs.writeFileSync('orders.json', JSON.stringify(orderData));  response.send('Success'); console.log('Success');});
```

Here we set up a `PUT` route to handle an update request for a specific order. We use the `express.text()` middleware built-in function to parse the data. We then loop through each item inside of `orderData.orders` and find the specific order we want to modify and update the information. Lastly, we write the new order data to `orders.json` and send a response indicating the operation was successful.

###### Deleting Orders

Finally, Swagger UI shows that the `/delete/{id}` only accepts the `id` parameter which is the id of an order. For out logic, we can loop through and replace the order list with orders that do not have the matching id. Here is what that looks like:

```
server.delete('/delete/:id', (request,response)=>{ var items = orderData.orders var newData = {"orders": []} items.forEach(function(o) {   console.log(o)     if (o.id == request.params.id){       console.log('Deleting order!')      } else{       newData.orders.push(o)     }  }); fs.writeFileSync('orders.json', JSON.stringify(newData)); response.send('Success'); console.log('Success');});
```

Here we do mostly the same operations we performed on the update route, except we create a new orders object called `newData` to store all orders that are not the one that is getting deleted.

##### Testing the API

In order for us to test that the API functions, we will be using some terminal commands to ping our server. At this point, if you are feeling stuck, feel free to download the completed tutorial code [here](https://static-assets.codecademy.com/Courses/Swagger-OpenAPI/orders_project_finished.zip) to follow along.

Before we get started, run `npm install` and `npm start` from a terminal inside the project directory. The API server should boot up, and we can now interact with it. Let’s try calling our API routes!

###### Getting All Orders

To test the `/orders` path, we can simply navigate to `http://localhost:3000/orders` in a browser. The data should appear on the screen.

###### Creating a New Order

Next, to test our `/neworder` path, we can use the `curl` command in a terminal. Open a terminal window (or command prompt) and navigate to the project directory. From here, run the following command:

```
curl --header "Content-Type: application/json" -d "@new_order.json" http://localhost:3000/neworder
```

This will make a `POST` request to the `/neworder` path using the data from the `new_order.json` file in the provided project directory. Try making the `GET` request again from the browser, and the new order should appear.

###### Updating an Existing Order

Now try using this curl command from the terminal:

```
curl -X PUT -d complete http://localhost:3000/update/001
```

This command makes a `PUT` request which modifies the `state` of the order with an id of `001`. It will change it to the text `complete`. Use the `GET` request again by refreshing the server on the browser to see the changes in the first order.

###### Deleting an Existing Order

Finally, use this curl command to make a `DELETE` request to our `/delete/{id}` endpoint:

```
curl -X DELETE http://localhost:3000/delete/002
```

Using the `GET` request by refreshing the server on the browser should show that the order with an id of `002` has been removed from the orders list.

##### Wrap Up

Great work! This has been a lengthy tutorial going through each of the main three open-source Swagger tools for API development. Specifically, we learned:

- To utilize Swagger Editor to design an API contract using the OpenAPI specification and YAML
- To utilize Swagger UI to generate API documentation
- To use an API contract to create a working RESTful API

Using these tools can significantly speed up the process of creating APIs, and having it visualized can make it much easier for a development team to take over and fill in the missing logic. From here, feel free to expand the API and add more features or review the API we created. Happy Coding!



