---
title: Lesson 3.31 - Create & Run CLI Commands With Symfony Console
description: Slim notes.
order: 102
---

#### installation

See [Doctrine Console](https://www.doctrine-project.org/projects/doctrine-orm/en/2.16/reference/tools.html)

Adapt to your project.

```php
<?php

// myApp.php

use Doctrine\ORM\EntityManager;
use Doctrine\ORM\Tools\Console\ConsoleRunner;
use Doctrine\ORM\Tools\Console\EntityManagerProvider\SingleManagerProvider;

$app = require_once 'bootstrap.php';

$entityManager = $app
                    ->getContainer()
                    ->get(EntityManager::class);  

$commands = [

];

ConsoleRunner::run(
    new SingleManagerProvider($entityManager),
    $commands
);

```

You can test if it works.

```shell
php myApp.php list
```

It should display all available commands. See the list on the reference page or see the `ConsoleRunner.php` in the Doctrine Console project.

You note that migrations commands are missing. We will able to add them into custom commands.

Remember in the [Lesson 3.18 - Doctrine Migrations](https //youtu.be/peXlH04Hecc)

Go to the `ConsoleRunner.php` in the Doctrine Migration project. Copy and paste commands.


```php
<?php

// (project root) /myApp.php

use Doctrine\Migrations\Configuration\EntityManager\ExistingEntityManager;
use Doctrine\Migrations\Configuration\Migration\PhpFile;
use Doctrine\Migrations\DependencyFactory;
use Doctrine\Migrations\Tools\Console\Command\CurrentCommand;
use Doctrine\Migrations\Tools\Console\Command\DumpSchemaCommand;
use Doctrine\Migrations\Tools\Console\Command\ExecuteCommand;
use Doctrine\Migrations\Tools\Console\Command\GenerateCommand;
use Doctrine\Migrations\Tools\Console\Command\LatestCommand;
use Doctrine\Migrations\Tools\Console\Command\ListCommand;
use Doctrine\Migrations\Tools\Console\Command\MigrateCommand;
use Doctrine\Migrations\Tools\Console\Command\RollupCommand;
use Doctrine\Migrations\Tools\Console\Command\StatusCommand;
use Doctrine\Migrations\Tools\Console\Command\SyncMetadataCommand;
use Doctrine\Migrations\Tools\Console\Command\UpToDateCommand;
use Doctrine\Migrations\Tools\Console\Command\VersionCommand;
use Doctrine\ORM\EntityManager;
use Doctrine\ORM\Tools\Console\ConsoleRunner;
use Doctrine\ORM\Tools\Console\EntityManagerProvider\SingleManagerProvider;

$app = require_once 'bootstrap.php';

$entityManager = $app
                    ->getContainer()
                    ->get(EntityManager::class);  
// add dependencies
$dependencyFactory = DependencyFactory::fromEntityManager(
    $config,
    new ExistingEntityManager($entityManager)
);

// paste here commands
$commands = [
	new CurrentCommand($dependencyFactory),
	new DumpSchemaCommand($dependencyFactory),
	new ExecuteCommand($dependencyFactory),
	new GenerateCommand($dependencyFactory),
	new LatestCommand($dependencyFactory),
	new MigrateCommand($dependencyFactory),
	new RollupCommand($dependencyFactory),
	new StatusCommand($dependencyFactory),
	new VersionCommand($dependencyFactory),
	new UpToDateCommand($dependencyFactory),
	new SyncMetadataCommand($dependencyFactory),
	new ListCommand($dependencyFactory),
	
	// be careful!!!
	new DiffCommand($dependencyFactory),
];

ConsoleRunner::run(
    new SingleManagerProvider($entityManager),
    $commands
);

```


#### Symfony Console

See [Symfony Console](https://symfony.com/doc/current/components/console.html)

Install the dependency composer require symfony console.

```php
<?php

// (project root) /myApp.php

use Doctrine\Migrations\Configuration\EntityManager\ExistingEntityManager;
use Doctrine\Migrations\Configuration\Migration\PhpFile;
use Doctrine\Migrations\DependencyFactory;
use Doctrine\Migrations\Tools\Console\Command\CurrentCommand;
use Doctrine\Migrations\Tools\Console\Command\DumpSchemaCommand;
use Doctrine\Migrations\Tools\Console\Command\ExecuteCommand;
use Doctrine\Migrations\Tools\Console\Command\GenerateCommand;
use Doctrine\Migrations\Tools\Console\Command\LatestCommand;
use Doctrine\Migrations\Tools\Console\Command\ListCommand;
use Doctrine\Migrations\Tools\Console\Command\MigrateCommand;
use Doctrine\Migrations\Tools\Console\Command\RollupCommand;
use Doctrine\Migrations\Tools\Console\Command\StatusCommand;
use Doctrine\Migrations\Tools\Console\Command\SyncMetadataCommand;
use Doctrine\Migrations\Tools\Console\Command\UpToDateCommand;
use Doctrine\Migrations\Tools\Console\Command\VersionCommand;
use Doctrine\ORM\EntityManager;
use Doctrine\ORM\Tools\Console\ConsoleRunner;
use Doctrine\ORM\Tools\Console\EntityManagerProvider\SingleManagerProvider;
use Symfony\Component\Console\Application;

$app = require_once 'bootstrap.php';

$entityManager = $app
                    ->getContainer()
                    ->get(EntityManager::class);  

$dependencyFactory = DependencyFactory::fromEntityManager(
    $config,
    new ExistingEntityManager($entityManager)
);

$commands = [
	new CurrentCommand($dependencyFactory),
	new DumpSchemaCommand($dependencyFactory),
	new ExecuteCommand($dependencyFactory),
	new GenerateCommand($dependencyFactory),
	new LatestCommand($dependencyFactory),
	new MigrateCommand($dependencyFactory),
	new RollupCommand($dependencyFactory),
	new StatusCommand($dependencyFactory),
	new VersionCommand($dependencyFactory),
	new UpToDateCommand($dependencyFactory),
	new SyncMetadataCommand($dependencyFactory),
	new ListCommand($dependencyFactory),
	new DiffCommand($dependencyFactory),
];

$appConfig = require 'configs/app.php';

// add the application from symfony console
$application = new Application(
    name:       $appConfig['app_name'],
    version:    $appConfig['app_version']
);

// you are allowed to see the ConsoleRunner file of Doctrine.
// and understand the creation here
ConsoleRunner::addCommands(
    $application,
    new SingleManagerProvider($entityManager)
);

$application->addCommands($commands);

$application->run();

```

The file `cli-config.php` is no more needed.

>[!info]
>If you get `php_network_getaddresses` probably you may update the host name with 'localhost' in your config file!

You can run commands :

```shell
php myApp.php list
php myApp.php migrations:migrate
```

#### Create your customs commands

You can now add a file call `MyCommand`. See [Console](https://symfony.com/doc/current/console.html)

```php
<?php

declare(strict_types=1);

namespace App\Commands;

use Symfony\Component\Console\Command\Command;
use Symfony\Component\Console\Input\InputInterface;
use Symfony\Component\Console\Output\OutputInterface;

class MyCommand extends Command
{
    protected static $defaultName = 'app:my-command';
    protected static $defaultDescription = 'My first command in Symfony console.';
    
    protected function execute(InputInterface $input, OutputInterface $output): int
    {
        // outputs multiple lines to the console (adding "\n" at the end of each line)
        $output->write('hello world', true);

        return Command::SUCCESS;
    }
}
```

You have to add the command in the list of commands in the `myApp.php`

Run:

```shell
php myApp.php app:my-command
```

Exemple of command:


```php

// Services/InvoiceService.php

<?php declare(strict_types=1);


namespace App\Services;


use App\Entity\Invoice;
use DI\Attribute\Inject;
use DI\Attribute\Injectable;
use Doctrine\ORM\EntityManager;

  
#[Injectable]
class InvoiceService
{

    #[Inject]
    public function __construct(
        private EntityManager $em
    ) {}


    public function getAllInvoices()
    {
        $queryBuilder = $this->em->createQueryBuilder();

        return $queryBuilder
            ->select('i')
            ->from(Invoice::class, 'i')
            ->getQuery()
            ->getResult();
    }
}

// Commands/MyCommand.php

<?php

declare(strict_types=1);

namespace App\Commands;

use Symfony\Component\Console\Command\Command;
use Symfony\Component\Console\Input\InputInterface;
use Symfony\Component\Console\Output\OutputInterface;

class MyCommand extends Command
{
    protected static $defaultName = 'app:my-command';
    protected static $defaultDescription = 'My first command in Symfony console.';
    
	#[Inject]
    public function __construct(
        private readonly InvoiceService $invoiceService
    ) {
        parent::__construct();
    }

    protected function execute(InputInterface $input, OutputInterface $output): int
    {

        $invoices = $this->invoiceService->getAllInvoices();

        if (count($invoices) > 0) {
            $response = array_map(
                fn($v) => $v->__toString(),
                $invoices
            );
        } else {  
            $response = [
                'NO INVOICES FOUND.',
                'Please modify your request.'
            ];
        }
        
        $output->writeln($response);

        return Command::SUCCESS;
    }
}

// add the MyCommand in the list of command with the container.
// in myApp.php

$commands = [

	...
	
    new ListCommand($dependencyFactory),
    new DiffCommand($dependencyFactory),
	
	// add here
    $container->get(MyCommand::class),

];

```


Note you can remove the `.php`

> [!info]
> You can run the script without the .php
> `php myApp app:my-command`
> 
> It will works!

You can also see the Shebang method on a Linux distribution.
