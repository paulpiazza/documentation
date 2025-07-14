---
title: Lesson 2.6 - Class Constants
description: Slim notes.
order: 42
---

PHP 8.1 Enums - [https://www.php.net/manual/en/language.enumerations.php)

Class constants in PHP are similar to regular constants, but they are associated with a specific class. They are defined using the `const` keyword within a class and provide a way to define and use constant values that are scoped to that class. Class constants are accessed using the class name without the need to create an instance of the class.

Here's how class constants are defined and used:

```php
class MathOperations {
    const PI = 3.14159;
    const EULER = 2.71828;
}

// Accessing class constants
echo MathOperations::PI;     // Output: 3.14159
echo MathOperations::EULER;  // Output: 2.71828
```

Key points to note about class constants:

1. **Visibility**: Class constants are implicitly `public`, meaning they can be accessed from outside the class. They cannot have explicit visibility modifiers like methods or properties.

2. **No Dollar Sign**: Unlike variables, class constants do not use a dollar sign `$` before their names.

3. **No \$this**: Class constants do not belong to instances of the class, so they cannot be accessed using `$this->constantName`. Instead, they are accessed using the class name as shown in the example above.

4. **Static Context**: Class constants are accessed in a static context, even if you're within an instance method.

5. **Naming Conventions**: Class constants typically use uppercase letters and underscores to separate words (e.g., `MAX_LENGTH`).

6. **Global Scope**: Class constants are in the global scope and can be accessed from anywhere using the class name.

Class constants are especially useful when you want to define values that are associated with a class and should remain constant across all instances of that class. They are a way to define symbolic names for specific values and enhance code readability and maintainability.

In PHP, `self` is a keyword that refers to the current class in which it is used. It is commonly used within class methods to access class constants, static properties, and static methods.

1. **Accessing Class Constants**:
   You can use `self` to access class constants within the same class. This is helpful when you want to use the constant's value in a method or property of the same class.

   ```php
   class MathOperations {
       const PI = 3.14159;
       
       public function printPi() {
           echo self::PI;
       }
   }
   ```

2. **Accessing Static Properties and Methods**:
   You can also use `self` to access static properties and methods of the same class.

   ```php
   class Counter {
       private static $count = 0;
       
       public static function increment() {
           self::$count++;
       }
       
       public static function getCount() {
           return self::$count;
       }
   }
   ```

3. **Within a Static Method**:
   When using `self` within a static method, it refers to the current class itself. This is in contrast to `$this`, which is used to refer to the current instance when inside an instance method.

   ```php
   class MyClass {
       public static function showClassName() {
           echo self::class;
       }
   }
   ```

Look at this example : 

```php

// src/Entities/Transaction.php

<?php declare(strict_types=1);

namespace App\Entities;

class Transaction
{
    const STATUS_PAID = 'paid';
    const STATUS_UNPAID = 'unpaid';

    /**
     * Look up table
     */
    public const ALL_STATUS = [
        self::STATUS_PAID => 'paid',
        self::STATUS_UNPAID => 'unpaid',
    ];


    public function __construct(
        private Status $status = ''
    ) {
        $this->setStatus(self::STATUS_UNPAID);
    }


    public function setStatus(string $string): self
    {
        if(! isset(self::ALL_STATUS[$string])) {
            throw new \InvalidArgumentException('status unknown');
        }
        $this->status = $string;
        return $this;
    }

    public function getStatus(): string
    {
        return $this->status;
    }
}

// index.php
<?php

require_once "vendor/autoload.php";

use App\Entities\Transaction;

$transaction = new Transaction();
$transaction->setStatus(Transaction::STATUS_PAID);
echo $transaction->getStatus(); // display PAID
```


See the use of class. It's more readable.


```php

// src/Enums/Status.php
namespace App\Enums ;

class Status {
    const PAID = 'paid';
    const UNPAID = 'unpaid';

    /**
     * Look up table
     */
    public const ALL_STATUS = [
        self::PAID => 'paid',
        self::UNPAID => 'unpaid',
    ];
}

// src/Entities/Transaction.php
<?php declare(strict_types=1);

namespace App\Entities;
use App\Enums\Status;

class Transaction
{
    public function __construct(
        private string $status = ''
    ) {
        $this->setStatus(self::UNPAID);
    }

    public function setStatus(string $string): self
    {
        if(! isset(self::ALL_STATUS[$string])) {
            throw new \InvalidArgumentException('status unknown');
        }
        $this->status = $string;
        return $this;
    }

    public function getStatus(): string
    {
        return $this->status;
    }
}

// index.php
<?php

require_once "vendor/autoload.php";

use App\Entities\Transaction;
use App\Enums\Status;

$transaction = new Transaction();
$transaction->setStatus(Status::PAID); // more readable
echo $transaction->getStatus(); // display PAID
```

With enum:

```php

// src/Enums/Status.php
<?php declare(strict_types=1);

namespace App\Enums;

enum Status: string {
    case Paid = 'paid';
    case Unpaid = 'unpaid';
}

// src/Entities/Transaction.php
<?php declare(strict_types=1);

namespace App\Entities;

use App\Enums\Status;

class Transaction
{
    public function __construct(
        private ?Status $status = Status::Unpaid
    ) {}

    public function setStatus(Status $status): self
    {
        $this->status = $status;
        return $this;
    }

    public function getStatus(): Status
    {
        return $this->status;
    }
}

// index.php
<?php

require_once "vendor/autoload.php";

use App\Entities\Transaction;
use App\Enums\Status;

$transaction = new Transaction();
$transaction->setStatus(Status::Paid);
echo $transaction->getStatus()->value;
```


