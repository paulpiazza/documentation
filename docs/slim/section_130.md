---
title: Lesson P.26 - Decorating Entity Manager to Avoid Inheritance
description: Slim notes.
order: 130
---

To decorate an entity manager in Doctrine ORM and avoid inheritance, you can use composition instead. This involves creating a decorator class that wraps the entity manager and adds additional functionality without modifying the behavior of the entity manager itself. 

One way to achieve this is to create a decorator class that implements the same interface as the entity manager, and then delegates all method calls to the underlying entity manager. You can then add additional functionality to the decorator class by implementing additional methods or overriding existing ones. 

For example, you could create a decorator class that adds caching functionality to the entity manager by caching the results of certain queries. This would involve implementing a `find` method in the decorator class that first checks if the requested entity is in the cache, and if not, delegates the call to the underlying entity manager and caches the result before returning it to the caller.

By using composition instead of inheritance, you can avoid modifying the behavior of the entity manager itself, which can help keep your code more maintainable and easier to reason about.

[1]: https://stackoverflow.com/questions/19830686/doctrine-entitymanager-clear-method-in-nested-entities
[2]: https://www.doctrine-project.org/projects/doctrine-orm/en/2.9/reference/inheritance-mapping.html
[3]: https://stackoverflow.com/questions/44913271/doctrine-inheritance-for-entities-common-fields
[4]: https://stackoverflow.com/questions/12548105/how-to-attache-detached-entity-in-doctrine

