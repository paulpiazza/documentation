---
title: Les composants
description: Section 3 description
order: 3
---

## Cours approfondi sur les composants Angular

### Single File Component (SFC)

Structure unifiée regroupant dans un fichier unique (souvent `.component.ts`) :  
- Template HTML  
- Styles CSS/SCSS  
- Logique TypeScript  

**Bonnes pratiques** :  
```typescript
@Component({
  selector: 'app-exemple',
  templateUrl: './exemple.component.html', // Externalisation recommandée
  styleUrls: ['./exemple.component.css'], // Style encapsulé
  host: { 'class': 'active' } // Configuration du host
})
export class ExempleComponent {}
```

**Erreur fréquente** :  
Éviter les templates inline pour les composants complexes (> 10 lignes)

### Interpolation des chaînes

L’interpolation de chaînes est une technique de programmation permettant d’intégrer dynamiquement des variables, des expressions ou des appels de fonctions directement dans une chaîne de caractères. Elle simplifie la concaténation traditionnelle et améliore la lisibilité du code.

Non compatible avec les attributs HTML, il faudra utiliser *property binding*.

**Syntaxe** : `{{ valeur }}`

```html
<p>Résultat : {{ calculateur(5) | currency:'EUR' }}</p> <!-- Pipe intégré -->
<p>Display : {{ 5 + 10 }}</p>
<p>Display : {{ isActive ? 'yes' : 'No' }}</p>
<p>Display : {{ user?.cardNumber }} </p>

```

**Sécurité** :  
```typescript
// Sanitization automatique contre les XSS
dangerousContent = this.sanitizer.bypassSecurityTrustHtml('<script>...</script>');
```

### Liaison de propriétés ([prop])

Mécanisme permettant d'affecter dynamiquement une valeur d'un composant Angular à un élément du DOM (attribut, propriété native ou directive). La donnée circule du composant vers la vue (one-way binding).

**Cas d'usage** :  
```html
<img [src]="cheminImage" [alt]="description">
<app-enfant [data]="dataset"></app-enfant>
```

**Optimisation** :  
```typescript
// ChangeDetectionStrategy.OnPush pour les composants statiques
@Component({... changeDetection: ChangeDetectionStrategy.OnPush })
```

**Différence clé** :  
- `[attr.disabled]` → Attribut HTML  
- `[disabled]` → Propriété DOM

Pour les classes
```typescript
<!-- Classe appliquée quand isActive est true -->
<button [class.active]="isActive">Menu</button>

// compoment
export class MenuItemComponent {
  // Déclaration basique
  isActive: boolean = false;
}
```

### Liaison d'événements ((event))

Mécanisme pour réagir à des actions utilisateur (clic, saisie, etc.) en exécutant une méthode du composant. La donnée circule de la vue vers le composant.

**Pattern avancé** :  
```html
<button (click)="enregistrer($event)">Sauvegarder</button>
<input (keyup.enter)="rechercher()">
```

**Débogage** :  
```typescript
@HostListener('document:click', ['$event']) 
logClicks(event: MouseEvent) {
  console.log('Coordonnées:', event.clientX, event.clientY);
}
```

**Performance** :  
Éviter les handlers lourds dans les templates (préférer les observables)

### Double liaison [(ngModel)]

En Angular, la double liaison de données (ou two-way data binding) permet une synchronisation bidirectionnelle entre les données du composant (modèle) et l'interface utilisateur (vue). Elle combine la liaison de propriété ([property]) et la liaison d'événement ((event)), symbolisée par la syntaxe [( )], souvent appelée "banane dans une boîte".

En Angular, la **double liaison de données** (ou *two-way data binding*) permet une synchronisation bidirectionnelle entre les données du composant (modèle) et l'interface utilisateur (vue). Elle combine la liaison de propriété (`[property]`) et la liaison d'événement (`(event)`), symbolisée par la syntaxe `[( )]`, souvent appelée *"banane dans une boîte"*.

`ngModel` est une directive Angular utilisée pour la double liaison dans les formulaires. Voici un cas concret :

```typescript
// app.module.ts
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    FormsModule  // Nécessaire pour ngModel
  ]
})
export class AppModule { }
```

```html
<!-- app.component.html -->
<input type="text" [(ngModel)]="nomUtilisateur">
<p>Bonjour, {{ nomUtilisateur }} !</p>
```

```typescript
// app.component.ts
export class AppComponent {
  nomUtilisateur = '';  // La valeur est mise à jour en temps réel
}
```

### Host Binding/Listerners

En Angular, la propriété **`host`** dans le décorateur **`@Component`** permet de définir des interactions entre le composant et son élément hôte (l'élément DOM dans lequel le composant est instancié).

Privilégiez `host` dans `@Component` pour des configurations simples. Pour une logique plus dynamique ou réactive, utilisez `@HostBinding` et `@HostListener`.

Déclencher des méthodes du composant en réponse à des événements du DOM sur l'élément hôte :

```typescript
@Component({
  selector: 'app-example',
  host: {
    '(click)': 'onClick($event)',       // Clic sur l'élément hôte
    '(mouseenter)': 'onHover()'         // Survol de l'élément
  }
})
```

Définir ou modifier dynamiquement des attributs HTML de l'élément hôte :
```typescript
host: {
  '[attr.role]': "'button'",          // Attribut fixe
  '[attr.disabled]': 'isDisabled'     // Attribut dynamique
}
```

Ajouter/retirer des classes CSS conditionnellement :
```typescript
host: {
  '[class.active]': 'isActive',       // Ajoute la classe "active" si isActive = true
  '[class.error]': 'hasError'
}
```

Modifier les styles directement :
```typescript
host: {
  '[style.backgroundColor]': 'bgColor', // Change la couleur de fond
  '[style.width.px]': 'width'           // Largeur en pixels
}
```

### **Synthèse des bonnes pratiques**  
1. **Encapsulation** : Utiliser `ViewEncapsulation.ShadowDom` pour l'isolation CSS  
2. **Performance** :  
   - `trackBy` pour les listes dynamiques  
   - `async` pipe avec observables  
3. **Maintenabilité** :  
   - Convention de nommage : `[nom]Input()`, `nomChange()`  
   - Documentation avec Compodoc  
