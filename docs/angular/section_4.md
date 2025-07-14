---
title: Gestion des Styles et CSS
description: Section 4 description
order: 4
---

## Gestion des Styles et CSS dans Angular

### Shadow DOM et Encapsulation des Styles

Le Shadow DOM crée un contexte CSS isolé pour les composants, empêchant les conflits de styles entre composants.

```typescript
@Component({
  selector: 'app-bouton',
  template: `<button class="btn-custom">Cliquez-moi</button>`,
  styles: [`
    .btn-custom {
      background: #4CAF50;  // Style isolé au composant
    }
  `],
  encapsulation: ViewEncapsulation.ShadowDom // Activation explicite
})
```

### ViewEncapsulation Modes

Angular utilise le ViewEncapsulation pour contrôler la portée des styles CSS d'un composant, évitant les conflits entre composants.

| Mode                      | Comportement                                                                 | Cas d'Usage                  |
|---------------------------|-----------------------------------------------------------------------------|------------------------------|
| **ShadowDom**             | Crée un vrai Shadow DOM (nécessite support navigateur)                      | Isolation maximale           |
| **Emulated** (Défaut)     | Simule l'encapsulation via attributs uniques (`_ngcontent-abc`)             | Compatibilité cross-browser  |
| **None**                  | Désactive l'encapsulation → styles globaux                                  | Override de styles externes  |


#### ViewEncapsulation.Emulated (Défaut)

Simule l'isolation des styles via des attributs HTML uniques (ex: _ngcontent-abc), sans utiliser le vrai Shadow DOM.

- Compatibilité avec tous les navigateurs
- Isolation "douce" pour 90% des cas d'usage

```typescript
@Component({
  styles: [`.btn { color: red; }`],
  encapsulation: ViewEncapsulation.Emulated // Optionnel (valeur par défaut)
})
```

→ Génère :

```typescript
<style>.btn[_ngcontent-abc] { color: red; }</style>
<button _ngcontent-abc class="btn">Bouton</button>
```

#### ViewEncapsulation.ShadowDom

Utilise l'API native Shadow DOM du navigateur pour créer un DOM isolé.

- Composants réutilisables (ex: bibliothèques)
- Isolation stricte (styles parents n'affectent pas le composant)
- Nécessite un navigateur moderne
- Incompatible avec certains polyfills

```typescript
@Component({
  template: `<button class="btn">Shadow Button</button>`,
  styles: [`.btn { font-size: 1.2rem; }`],
  encapsulation: ViewEncapsulation.ShadowDom
})
```

→ Génère :

```typescript
#shadow-root (open)
  <style>.btn { font-size: 1.2rem; }</style>
  <button class="btn">Shadow Button</button>
```

#### ViewEncapsulation.None

Désactive toute encapsulation → les styles deviennent globaux.

- Override de styles externes
- Intégration avec du CSS legacy
- Risque élevé de conflits CSS
- À utiliser avec parcimonie

```typescript
@Component({
  styles: [`.alert { padding: 20px; }`],
  encapsulation: ViewEncapsulation.None
})
```

→ Génère :

```html
<style>.alert { padding: 20px; }</style> <!-- Global ! -->
<div class="alert">Message</div>
```


### Liaison de Styles Dynamiques

**a. Style Unique** :  
```html
<div [style.fontSize.px]="isLarge ? 24 : 16">Texte adaptable</div>
```

**b. Style avec Unité** :  
```html
<button [style.width.%]="buttonWidth">Bouton responsive</button>
```

**c. Multi-Styles (NgStyle)** :  
```typescript
getTextStyles() {
  return {
    'font-weight': this.isBold ? 'bold' : 'normal',
    'text-decoration': this.hasError ? 'underline red' : 'none'
  };
}
```
```html
<p [ngStyle]="getTextStyles()">Contenu dynamique</p>
```

### Liaison de Classes Dynamiques

**a. Classe Unique Conditionnelle** :  
```html
<div [class.error]="hasError">Message</div>
```

**b. Chaîne de Classes** :  
```html
<div class="base-class" [class]="additionalClasses">...</div>
```
```typescript
additionalClasses = 'active highlight';  // Classes ajoutées
```

**c. Tableau de Classes** :  
```html
<div [class]="['card', theme, size]">...</div>
```

**d. Objet de Classes (Recommandé)** :  
```typescript
stateClasses = {
  'loading': isLoading,
  'disabled': !isActive,
  'success': operationSucceeded
};
```
```html
<button [class]="stateClasses">Action</button>
```


### Bonnes Pratiques sur les styles

- **Encapsulation** :  
  - Préférez `Emulated` pour 95% des cas  
  - Utilisez `:host-context` pour les thèmes plutôt que `::ng-deep` (déprécié)

- **Performances** :  
  - Évitez les liaisons de style/class complexes dans les templates  
  - Utilisez `ngStyle`/`ngClass` avec des méthodes plutôt que des expressions inline

- **Maintenabilité** :  
  - Centralisez les styles communs dans `styles.scss`  
  - Utilisez des variables CSS pour les thèmes :
  ```scss
  :root {
    --primary-color: #3F51B5;
    --error-color: #FF5252;
  }
  ```
  ```css
  .error-message {
    color: var(--error-color);
  }
  ```


**Exercice Pratique** :  
Créez un composant `alert` avec :  
- Fond coloré dynamique via `[style.backgroundColor]`  
- Classe `dismissible` conditionnelle  
- Styles encapsulés en mode `Emulated`  
- Utilisation de `:host-context` pour un thème sombre

```typescript
@Component({
  selector: 'app-alert',
  template: `
    <div [style.backgroundColor]="bgColor" 
         [class.dismissible]="isDismissible">
      <ng-content></ng-content>
    </div>
  `,
  styles: [`
    :host-context(.dark-theme) div {
      color: white;
    }
  `]
})
```
