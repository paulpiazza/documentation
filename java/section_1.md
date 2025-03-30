---
title: Introduction to Learn Java
description: Java
order: 1
---
## Java
Java est un langage de programmation orienté objet, robuste et portable. Il est utilisé pour développer des applications allant des logiciels d'entreprise aux applications mobiles et aux systèmes embarqués. Java est connu pour sa philosophie "écrire une fois, exécuter partout" (Write Once, Run Anywhere), grâce à la machine virtuelle Java (JVM).

## Comment fonctionne Java
Java fonctionne en compilant le code source en bytecode, qui est ensuite exécuté par la JVM. Voici les étapes principales :
1. **Écriture du code source** : Le développeur écrit le code dans un fichier avec l'extension `.java`.
2. **Compilation** : Le compilateur Java (`javac`) transforme le code source en bytecode, stocké dans un fichier `.class`.
3. **Exécution** : La JVM interprète le bytecode et l'exécute sur la machine hôte. Cela permet à Java d'être indépendant de la plateforme.

La JVM inclut également un ramasse-miettes (garbage collector) qui gère automatiquement la mémoire, réduisant ainsi les risques de fuites de mémoire.

## Installation sur Linux
1. Téléchargez le JDK (Java Development Kit) depuis le site officiel d'Oracle ou utilisez un gestionnaire de paquets comme `apt` ou `yum`.
2. Installez le JDK :
Installation `sudo apt update && sudo apt install default-jdk`
4. Vérifiez l'installation : `java -version`
5. Configurez les variables d'environnement si nécessaire (par exemple, `JAVA_HOME`).

```shell
#Trouver le chemin d'installation 
readlink -f $(which java)

# Modifier le fichier de configuration (par exemple, ~/.bashrc ou ~/.profile) pour ajouter :
export JAVA_HOME=/usr/lib/jvm/java-17-openjdk-amd64
export PATH=$PATH:$JAVA_HOME/bin

# reload le source
source ~/.bashrc
```

## Installation sur MacOS
1. Téléchargez le JDK depuis le site officiel d'Oracle ou utilisez Homebrew.
2. Installez le JDK avec Homebrew : `brew install openjdk@11`
3. Configurez le chemin d'accès :
   - Ajoutez `export PATH="/usr/local/opt/openjdk@11/bin:$PATH"` à votre fichier `.zshrc` ou `.bash_profile`.
4. Vérifiez l'installation : `java -version`

## Installation sur Windows
1. Téléchargez le JDK depuis le site officiel d'Oracle.
2. Exécutez l'installateur et suivez les instructions.
3. Configurez les variables d'environnement :
   - Ajoutez le chemin du dossier `bin` du JDK à la variable `PATH`.
   - Créez une variable `JAVA_HOME` pointant vers le dossier d'installation du JDK.
4. Vérifiez l'installation : Ouvrez une invite de commande et tapez `java -version`.

## Démarrer une application Console
Pour démarrer une application console en Java, suivez ces étapes :

1. **Créer un fichier source** : Écrivez le code Java dans un fichier avec l'extension `.java`. Par exemple :
   ```java
   public class Main {
       public static void main(String[] args) {
           System.out.println("Hello, World!");
       }
   }
   ```

2. **Compiler le fichier** : Utilisez la commande `javac` pour compiler le fichier source en bytecode :
   ```bash
   javac Main.java
   ```

   Cela génère un fichier `Main.class`.

3. **Exécuter le programme** : Utilisez la commande `java` pour exécuter le bytecode :
   ```bash
   java Main
   ```

   Résultat attendu :
   ```
   Bonjour, monde !
   ```

4. **Ajouter des interactions** : Vous pouvez lire les entrées utilisateur avec `Scanner` pour rendre l'application interactive :
   ```java
   import java.util.Scanner;

   public class Main {
       public static void main(String[] args) {
           Scanner scanner = new Scanner(System.in);
           System.out.print("Entrez votre nom : ");
           String nom = scanner.nextLine();
           System.out.println("Bonjour, " + nom + " !");
       }
   }
   ```
