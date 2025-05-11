---
title: Introduction
description: Section 1 description
order: 1
---

## Introduction à Angular et aux Bundlers

### Définition

Un **bundler** est un outil qui regroupe des fichiers multiples (JavaScript, CSS, images) en un ou plusieurs bundles optimisés.  
- **Exemple** : Un projet Angular contient des centaines de fichiers `.ts`, `.html`, `.scss`. Le bundler les fusionne en quelques fichiers `.js` et `.css` pour le navigateur.

### Fonctionnement

- **Étape 1** : Analyse des dépendances (fichiers d’entrée comme `main.ts`).  
- **Étape 2** : Création d’un "arbre de dépendances".  
- **Étape 3** : Transformation des fichiers (TypeScript → JavaScript, SASS → CSS).  
- **Étape 4** : Optimisations (minification, suppression du code mort).  
- **Étape 5** : Génération des bundles finaux.

### Pourquoi utiliser un bundler avec Angular ?

- **Réduction des requêtes HTTP** : Un seul fichier `bundle.js` au lieu de centaines.  
- **Compatibilité navigateur** : Transpile le code TypeScript et les syntaxes modernes.  
- **Optimisation des performances** : Minification, compression, *tree-shaking* (suppression du code inutilisé), *splitting* (generation de chunks).
- **Gestion des assets** : Intégration automatique des CSS, polices, images.

### Outils populaires dans l'écosystème Angular


**Résultats Attendus** 

- **Développement** :  
  - Serveur local démarré en < 1 seconde.  
  - Mises à jour des composants en < 100ms.  
- **Production** :  
  - Taille du bundle réduite de 40% vs Webpack.  
  - Build 5x plus rapide qu'avec Webpack.  


- **Webpack** (par défaut avec Angular CLI) :  
  Configurable via `angular.json` et `webpack.config.js`.  
- **Vite.js** :  
  - **Avantage en développement** : Serveur local ultra-rapide grâce à l’utilisation de modules ES natifs.  
  - **Exemple de configuration** :  
    ```bash
    npm create vite@latest mon-projet-angular -- --template angular
    ```
- **Esbuild** :  
  - Utilisé en production pour sa vitesse (compilation 10x plus rapide que Webpack).  
  - Intégré avec Vite via `vite build`.

| **Critère**       | **Vite.js (Développement)**       | **Esbuild (Production)**          |
|--------------------|-----------------------------------|-----------------------------------|
| **Vitesse**        | Optimisé pour le HMR (Hot Module Replacement) | Compilation ultra-rapide          |
| **Usage**          | Serveur local + rechargement instantané | Builds optimisés pour le déploiement |
| **Intégration**    | Supporte les plugins Angular      | Souvent combiné avec d’autres outils (ex. Rollup) |



| **Critère**          | **Vite.js (Développement)**              | **Esbuild (Production)**               |  
|----------------------|------------------------------------------|----------------------------------------|  
| **Vitesse**          | < 500ms pour le HMR                      | Build en 8-10 secondes                 |  
| **Optimisations**    | Aucune minification                      | Minification, compression, tree-shaking|  
| **Usage**            | Développement interactif                 | Déploiement                            |  
| **Compatibilité**    | Modules ES natifs                        | Cibles définies dans `browserslistrc`  |  



### Cas pratique avec Angular

Pour migrer un projet Angular vers Vite :  
1. Installer les dépendances :  
   ```bash
   npm install vite @vitejs/plugin-angular --save-dev
   ```
2. Créer un fichier `vite.config.ts` :  
   ```typescript
   import { defineConfig } from 'vite';
   import angular from '@vitejs/plugin-angular';

   export default defineConfig({
     plugins: [angular()],
   });
   ```
3. Mettre à jour `angular.json` pour désactiver Webpack.


### **FAQ (Points clés à retenir)**  

❓ **Pourquoi ne pas utiliser Webpack partout ?**  
→ Vite offre un meilleur DX (*Developer Experience*) grâce à son serveur léger, tandis qu’Esbuild accélère les builds en prod.  

❓ **Le tree-shaking est-il automatique ?**  
→ Oui, avec des bundlers comme Rollup/Webpack 5+, mais dépend de la structure du code (modules ES6).  

❓ **Angular CLI utilise-t-il Esbuild ?**  
→ Depuis Angular 17, oui ! La CLI utilise Esbuild pour les builds de production par défaut.


## Cas Pratique : Intégration de Vite.js en Développement et Esbuild en Production avec Angular

Configurer un projet Angular pour utiliser :  
- **Vite.js** en développement : Serveur local rapide avec HMR (*Hot Module Replacement*).  
- **Esbuild** en production : Build optimisé via Angular CLI (v17+).

**Avantages de Vite.JS** :  
  - Chargement instantané des modules (ESM natifs).  
  - HMR pour les composants Angular (mises à jour sans rechargement).  
  - Temps de compilation divisé par 3 vs Webpack.


### Création du Projet Angular

```bash
ng new mon-projet-vite --standalone --style=scss --routing
cd mon-projet-vite
```

### Installation des Dépendances Vite

```bash
npm install vite @vitejs/plugin-angular --save-dev
```

### Configuration de Vite (`vite.config.ts`)

```typescript
import { defineConfig } from 'vite';
import angular from '@vitejs/plugin-angular';

export default defineConfig({
  plugins: [
    angular({
      tsconfig: 'tsconfig.app.json', // Chemin vers la config TypeScript
      stylePreprocessorOptions: {
        includePaths: ['src/styles']
      }
    })
  ],
  server: {
    port: 4200, // Port par défaut d'Angular
    hmr: true    // Activation du Hot Module Replacement
  }
});
```

### Modification d'`angular.json`

Désactivez le serveur Webpack par défaut et liez-le à Vite :  
```json
{
  "projects": {
    "mon-projet-vite": {
      "architect": {
        "serve": {
          "builder": "@angular-devkit/build-angular:dev-server",
          "options": {
            "customWebpackConfig": {
              "path": "./vite.config.ts"
            },
            "port": 4200
          }
        }
      }
    }
  }
}
```

### Mise à Jour des Scripts `package.json`

```json
{
  "scripts": {
    "dev": "vite dev",       // Démarre Vite en mode développement
    "build": "ng build",     // Utilise Esbuild via Angular CLI pour la production
    "preview": "vite preview" // Prévisualisation du build de production
  }
}
```

### Démarrez le Serveur Vite

```bash
npm run dev
```

### Build de Production avec Esbuild

```bash
npm run build
```
- **Résultat** :  
  - Build optimisé dans `dist/`.  
  - Esbuild minifie le code et applique le *tree-shaking*.  
  - Compatibilité navigateur via `browserslistrc`.

### Dépannage Courant

#### Problème 1 : Erreurs de Chemin avec les Assets

Utilisez des imports absolus dans les composants :

```typescript
import monImage from '/src/assets/image.png'; // Au lieu de './assets/image.png'
```

#### Problème 2 : HMR Non Fonctionnel

Ajoutez ceci à `vite.config.ts` :  

```typescript
plugins: [
  angular({
    jit: true // Activation du JIT pour le HMR
  })
]
```

### **Optimisation Avancée**  

#### Cache Esbuild en Production

Activez le cache dans `angular.json` :

```json
{
  "architect": {
    "build": {
      "options": {
        "esbuild": {
          "cache": true,
          "cacheDirectory": ".esbuild-cache"
        }
      }
    }
  }
}
```

### Personnalisation des Plugins Vite

Exemple : Ajoutez un plugin pour analyser les bundles :

```bash
npm install rollup-plugin-visualizer --save-dev
```

```typescript
// vite.config.ts
import { visualizer } from 'rollup-plugin-visualizer';

export default defineConfig({
  plugins: [
    angular(),
    visualizer() // Génère un rapport visuel des bundles
  ]
});
```


### JIT (Just-In-Time Compilation)**  

Le **JIT** est une technique de compilation qui traduit le code (TypeScript/HTML) en JavaScript **directement dans le navigateur** pendant l'exécution de l'application.  

**Fonctionnement dans Angular** :  
- **Étape 1** : Le code Angular (composants, templates) est envoyé au navigateur.  
- **Étape 2** : Le compilateur JIT génère du JavaScript exécutable à la volée.  
- **Étape 3** : Le navigateur exécute le code compilé.  

**Avantages** :  
- Développement plus rapide (pas de compilation lors du build).  
- Débogage facilité (mappage précis entre code source et code compilé).  

**Inconvénients** :  
- Temps de chargement initial plus lent (compilation en temps réel).  
- Non adapté à la production (taille du bundle augmentée).  

### HMR (Hot Module Replacement)

Le **HMR** permet de mettre à jour des modules (composants, services) **sans recharger la page**, préservant l'état de l'application.  

**Fonctionnement avec Vite/Angular** :  
1. Modification d'un fichier (ex. `app.component.ts`).  
2. Vite détecte le changement et envoie uniquement le module modifié.  
3. Angular échange l'ancien module avec le nouveau, sans perte d'état.  

**Avantages** :  
- Gain de temps pendant le développement (mises à jour en < 100 ms).  
- Conservation des données (ex. formulaire rempli reste intact).  

**Configuration dans Vite** :  
```typescript
// vite.config.ts
export default defineConfig({
  server: {
    hmr: {
      overlay: false // Désactive les erreurs en plein écran
    }
  }
});
```

### Cache Esbuild

Mécanisme de stockage temporaire des résultats de compilation pour **accélérer les builds ultérieurs**.  

**Fonctionnement** :  
- **Premier build** : Esbuild compile le code et stocke les artefacts dans `.esbuild-cache`.  
- **Builds suivants** : Réutilisation du cache pour éviter de retraiter les fichiers inchangés.  

**Configuration dans Angular** :  
```json
// angular.json
{
  "architect": {
    "build": {
      "options": {
        "esbuild": {
          "cache": true,
          "cacheDirectory": ".esbuild-cache" // Dossier de stockage
        }
      }
    }
  }
}
```

### **Bonnes Pratiques**  
1. **JIT vs AOT** :  
   - Utilisez le **JIT** en développement pour des builds rapides.  
   - Basculez vers **AOT** (Ahead-of-Time) en production pour optimiser les performances.  

2. **HMR Pro Tips** :  
   - Évitez de modifier les fichiers `environments.ts` pendant le HMR (nécessite un rechargement complet).  
   - Combine HMR avec des outils comme **Reactime** (pour debugger l'état Angular).  

3. **Gestion du Cache** :  
   - Supprimez manuellement le cache (`rm -rf .esbuild-cache`) en cas d'erreurs inexpliquées.  
   - Excluez le cache des systèmes de versioning (ajoutez `.esbuild-cache` à `.gitignore`).  


### **Cas d'Échec Courants**  
- **Problème JIT** :  
  ```bash
  Error: Template parse errors → Vérifiez les syntaxes HTML/TypeScript.
  ```
- **HMR Silencieux** :  
  Si les modifications ne s'appliquent pas, redémarrez Vite avec `npm run dev -- --force`.  
- **Cache Corrompu** :  
  Si le build plante, désactivez le cache via `ng build --cache=false`.  
