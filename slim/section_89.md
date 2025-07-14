---
title: Lesson 3.18 - Doctrine Migrations
description: Slim notes.
order: 89
---


See [Doctrine Migrations](https://www.doctrine-project.org/projects/doctrine-migrations/en/3.6/index.html)

Installation of the migrations doctrine. 

Create a directory /migrations.

```php

// configs/migrations.php

<?php

return [
    'table_storage' => [
        'table_name' => 'doctrine_migration_versions',
        'version_column_name' => 'version',
        'version_column_length' => 191,
        'executed_at_column_name' => 'executed_at',
        'execution_time_column_name' => 'execution_time',
    ],

    'migrations_paths' => [
        'Migrations' => 'migrations',
    ],

    'all_or_nothing' => true,
    'transactional' => true,
    'check_database_platform' => true,
    'organize_migrations' => 'none',
    'connection' => null,
    'em' => null,
];

// cli-config.php

<?php declare(strict_types=1);

require __DIR__ . '/vendor/autoload.php';

use Doctrine\ORM\EntityManager;
use Doctrine\ORM\Tools\Setup;
use Doctrine\Migrations\Configuration\EntityManager\ExistingEntityManager;

$dotenv = Dotenv\Dotenv::createImmutable(__DIR__);
$dotenv->load();

use Doctrine\DBAL\DriverManager;
use Doctrine\Migrations\Configuration\Connection\ExistingConnection;
use Doctrine\Migrations\Configuration\Migration\PhpFile;
use Doctrine\Migrations\DependencyFactory;

$config = new PhpFile('configs/migrations.php');

$params = [
    'dbname' => $_ENV['DB_DATABASE'],
    'user' => $_ENV['DB_USERNAME'] ?? 'root',
    'password' => $_ENV['DB_PASSWORD'],
    'host' => $_ENV['DB_HOSTNAMEs'] ?? 'localhost',
    'driver' => $_ENV['DB_DRIVER'] ?? 'pdo_mysql',
    'port' => $_ENV['DB_PORT']
];

$entityManager = EntityManager::create($params, Setup::createAttributeMetadataConfiguration([__DIR__, 'app/Entity']));

return DependencyFactory::fromEntityManager($config, new ExistingEntityManager($entityManager));

```

#### Create Migration

Now you can use commands.

```shell
# generate a migration
./vendor/bin/doctrine-migrations generate
```

In that case you will be force to write manually your migrations.

```php
// src/Migrations/VersionYYYYMMDDHHMMSS.php
namespace App\Migrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

class VersionYYYYMMDDHHMMSS extends AbstractMigration
{
    public function up(Schema $schema): void
    {
        // Create a new table named 'example'
        $table = $schema->createTable('example');

        // Add columns to the 'example' table
        $table->addColumn('id', 'integer', ['autoincrement' => true]);
        $table->addColumn('name', 'string', ['length' => 255]);
        $table->setPrimaryKey(['id']);

        // You can add more columns as needed
    }

    public function down(Schema $schema): void
    {
        // Drop the 'example' table if needed
        $schema->dropTable('example');
    }
}

```

#### Migration Commands

Now that you have created a migration, you can use the following commands to manage your migrations:

1. **Migrate to the Latest Version:**

   To apply all pending migrations and update the database schema to the latest version, run:

   ```bash
   ./vendor/bin/doctrine-migrations migrate
   ```

2. **Migrate to a Specific Version:**

   You can migrate to a specific version using the `VERSION` option:

   ```bash
   ./vendor/bin/doctrine-migrations migrate YYYYMMDDHHMMSS
   ```

   Replace `YYYYMMDDHHMMSS` with the timestamp of the migration you want to reach.

3. **Revert to a Previous Version:**

   To revert to a previous version, use the `migrate prev` command:

   ```bash
   ./vendor/bin/doctrine-migrations migrate prev
   ```

4. **Move to the Next Version:**

   To move to the next version (if you've previously reverted), use the `migrate next` command:

   ```bash
   ./vendor/bin/doctrine-migrations migrate next
   ```

5. **Check Migration Status:**

   You can check the current status of migrations with:

   ```bash
   ./vendor/bin/doctrine-migrations status
   ```

6. **Check Migration First:**

   You can check the first status of migrations with:

   ```bash
   ./vendor/bin/doctrine-migrations migrate first
   ```

7. **Generate a Migration Diff:**

   If you've made changes to your entities and want to update your database schema, you can generate a migration diff:

   ```bash
   ./vendor/bin/doctrine-migrations diff
   ```

   This command compares the current state of your entities with the database schema and generates a migration to update the schema accordingly.

Remember that the `diff` method will create a new migration file with `up()` and `down()` methods that reflect the changes you've made to your entities. You can then execute the generated migration using `doctrine:migrations:migrate` to apply those changes to the database.

#### Update the DB

1. modify you entity. For example add an attribute, or change metadata.

2. Create a script in your composer.

```json
    "scripts": {
        "migrate": [
            "./vendor/bin/doctrine-migrations diff",
            "./vendor/bin/doctrine-migrations migrate"
        ]
    }
```

3. Update the db by running the script.
