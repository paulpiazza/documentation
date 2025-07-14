---
title: Présentation de .Net et C#
description: .NET framework
order: 1
---
Pour comprendre le code, il est essentiel de connaître les langages de programmation comme C#, qui permettent d'écrire des instructions pour l'ordinateur. Chaque langage a sa propre syntaxe, mais ils partagent des concepts communs. Le code source, écrit par les développeurs, doit être compilé par un compilateur pour être compris par l'ordinateur. La compilation traduit le code lisible par l'humain en instructions compréhensibles par le processeur.

La syntaxe, qui définit les règles d'écriture du code, est similaire à la grammaire des langues humaines. Par exemple, dans C#, la ligne `Console.WriteLine("Hello World!");` utilise une classe (Console) et une méthode (WriteLine) pour afficher un message. Les parenthèses indiquent les paramètres d'entrée, et le point-virgule marque la fin de la déclaration.

Il est important de comprendre que le flux d'exécution des instructions se fait ligne par ligne. Des erreurs peuvent survenir, mais elles peuvent être corrigées et le code réexécuté. Créez un aide-mémoire pour les commandes clés et préparez-vous à écrire du code en C# dans le prochain module.

La compilation en C# est le processus par lequel le code source que vous écrivez est transformé en un format que l'ordinateur peut comprendre et exécuter. Voici une explication détaillée de ce processus :

1. **Code Source** : Lorsque vous écrivez du code en C#, vous utilisez une syntaxe spécifique pour donner des instructions à l'ordinateur. Ce code est appelé "code source".

2. **Compilateur** : Pour que l'ordinateur puisse exécuter ce code, il doit être converti en un format binaire, que le processeur peut comprendre. Cela est réalisé par un programme spécial appelé **compilateur**. Dans le cas de C#, le compilateur le plus couramment utilisé est le **Roslyn**.

3. **Processus de Compilation** :
   - **Analyse Lexicale** : Le compilateur commence par analyser le code source pour identifier les différents éléments (mots-clés, identifiants, opérateurs, etc.).
   - **Analyse Syntaxique** : Ensuite, il vérifie si le code respecte les règles de syntaxe du langage C#. Si des erreurs de syntaxe sont détectées, le compilateur renvoie des messages d'erreur.
   - **Génération de Code Intermédiaire** : Si le code est correct, le compilateur génère un code intermédiaire (CIL - Common Intermediate Language) qui est indépendant de la plateforme.
   - **Compilation Just-In-Time (JIT)** : Lorsque vous exécutez le programme, le code intermédiaire est ensuite compilé en code machine spécifique à la plateforme par le compilateur JIT, ce qui permet au processeur d'exécuter les instructions.

4. **Exécution** : Une fois le code compilé, il peut être exécuté par l'ordinateur. Le processeur exécute les instructions en activant ou désactivant des millions de commutateurs, ce qui correspond aux opérations définies dans votre code.

5. **Importance de la Compilation** : La compilation est essentielle car elle permet de détecter les erreurs de syntaxe avant l'exécution du programme, ce qui facilite le débogage. De plus, elle optimise le code pour une exécution plus rapide.

En résumé, la compilation en C# est un processus crucial qui transforme le code source en un format exécutable, permettant ainsi à l'ordinateur de comprendre et d'exécuter les instructions que vous avez écrites.