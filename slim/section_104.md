---
title: Lesson P.0 - Expennies Project Setup - NPM & Webpack
description: Slim notes.
order: 104
---

See and follow the source repo [Sources](https://github.com/ggelashvili/expennies/tree/P0_Start)


See [Installation Webpack Encore](https://symfony.com/doc/current/frontend.html#webpack-encore)

In the container initialization.

```php
return [
    Config::class                 => create(Config::class)->constructor(require CONFIG_PATH . '/app.php'),
    
    EntityManager::class          => fn(Config $config) => EntityManager::create(
        $config->get('doctrine.connection'),
        ORMSetup::createAttributeMetadataConfiguration(
            $config->get('doctrine.entity_dir'),
            $config->get('doctrine.dev_mode')
        )
    ),

    Twig::class                   => function (Config $config, ContainerInterface $container) {
        $twig = Twig::create(VIEW_PATH, [
            'cache'       => STORAGE_PATH . '/cache/templates',
            'auto_reload' => AppEnvironment::isDevelopment($config->get('app_environment')),
        ]);

        $twig->addExtension(new IntlExtension());

		//This file is part of the Symfony WebpackEncoreBundle package
        $twig->addExtension(new EntryFilesTwigExtension($container));

		//Twig extension for the Symfony Asset component.
        $twig->addExtension(new AssetExtension($container->get('webpack_encore.packages')));
        return $twig;
    },

    /**
     * The following two bindings are needed for EntryFilesTwigExtension & AssetExtension to work for Twig
     */
    'webpack_encore.packages'     => fn() => new Packages(
        new Package(new JsonManifestVersionStrategy(BUILD_PATH . '/manifest.json'))
    ),
    'webpack_encore.tag_renderer' => fn(ContainerInterface $container) => new TagRenderer(
        new EntrypointLookup(BUILD_PATH . '/entrypoints.json'),
        $container->get('webpack_encore.packages')
    ),
];

```

#### Start the project

**Step 1**
Create .env file and add configs.

**Step 2**
Composer install
NPM install
check git remote, gitignore, ...

**Step 3**
Launch migrations with command file.



See [P0 start](https://github.com/ggelashvili/expennies/tree/P0_Start)