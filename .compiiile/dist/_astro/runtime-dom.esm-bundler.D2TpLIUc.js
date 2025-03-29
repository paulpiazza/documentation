import{l as O,m as x,p as g,q as B,s as p,u as U,v as W,x as S,y as G,z as $,A as F,B as X,C as R,D as q,E as Z,G as Q,H as Y}from"./runtime-core.esm-bundler.C1gC1cZQ.js";const k=[{uuid:"18cbc9d7-0682-49eb-a9b8-85a8b3073e13",textContent:"This site has been created with Compiiile with AtroJS",title:"README",fullPath:"README.md",meta:{title:"README"},routePath:"/"},{uuid:"b08c4421-35dd-4c7b-959e-2ce823ac5929",textContent:`
Java
Java est un langage de programmation orienté objet, robuste et portable. Il est utilisé pour développer des applications allant des logiciels d’entreprise aux applications mobiles et aux systèmes embarqués. Java est connu pour sa philosophie “écrire une fois, exécuter partout” (Write Once, Run Anywhere), grâce à la machine virtuelle Java (JVM).
Comment fonctionne Java
Java fonctionne en compilant le code source en bytecode, qui est ensuite exécuté par la JVM. Voici les étapes principales :
Écriture du code source : Le développeur écrit le code dans un fichier avec l’extension .java.
Compilation : Le compilateur Java (javac) transforme le code source en bytecode, stocké dans un fichier .class.
Exécution : La JVM interprète le bytecode et l’exécute sur la machine hôte. Cela permet à Java d’être indépendant de la plateforme.
La JVM inclut également un ramasse-miettes (garbage collector) qui gère automatiquement la mémoire, réduisant ainsi les risques de fuites de mémoire.
Installation sur Linux
Téléchargez le JDK (Java Development Kit) depuis le site officiel d’Oracle ou utilisez un gestionnaire de paquets comme apt ou yum.
Installez le JDK :
Sur Debian/Ubuntu : sudo apt update &#x26;&#x26; sudo apt install openjdk-11-jdk
Sur Fedora/CentOS : sudo yum install java-11-openjdk
Vérifiez l’installation : java -version
Configurez les variables d’environnement si nécessaire (par exemple, JAVA_HOME).
Installation sur MacOS
Téléchargez le JDK depuis le site officiel d’Oracle ou utilisez Homebrew.
Installez le JDK avec Homebrew : brew install openjdk@11
Configurez le chemin d’accès :
Ajoutez export PATH="/usr/local/opt/openjdk@11/bin:$PATH" à votre fichier .zshrc ou .bash_profile.
Vérifiez l’installation : java -version
Installation sur Windows
Téléchargez le JDK depuis le site officiel d’Oracle.
Exécutez l’installateur et suivez les instructions.
Configurez les variables d’environnement :
Ajoutez le chemin du dossier bin du JDK à la variable PATH.
Créez une variable JAVA_HOME pointant vers le dossier d’installation du JDK.
Vérifiez l’installation : Ouvrez une invite de commande et tapez java -version.
Démarrer une application Console
Pour démarrer une application console en Java, suivez ces étapes :
Créer un fichier source : Écrivez le code Java dans un fichier avec l’extension .java. Par exemple :
public class Main {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
    }
}
Compiler le fichier : Utilisez la commande javac pour compiler le fichier source en bytecode :
javac Main.java
Cela génère un fichier Main.class.
Exécuter le programme : Utilisez la commande java pour exécuter le bytecode :
java Main
Résultat attendu :
Bonjour, monde !
Ajouter des interactions : Vous pouvez lire les entrées utilisateur avec Scanner pour rendre l’application interactive :
import java.util.Scanner;
public class Main {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        System.out.print("Entrez votre nom : ");
        String nom = scanner.nextLine();
        System.out.println("Bonjour, " + nom + " !");
    }
}
`,title:"Introduction to Learn Java",fullPath:"java/index.md",meta:{title:"Introduction to Learn Java",description:"Java",order:0},routePath:"/c/java/index"},{uuid:"e806ff57-f07f-4867-bae4-4845843afa40",textContent:`
Les variables
Les variables sont des conteneurs permettant de stocker des données. En Java, chaque variable a un type qui détermine la nature des données qu’elle peut contenir.
Exemple :
int age = 25; // Variable entière
String nom = "Alice"; // Variable de type chaîne de caractères
Les types
Java est un langage fortement typé. Voici les principaux types de données :
int : pour les nombres entiers.
double : pour les nombres à virgule flottante.
char : pour les caractères.
boolean : pour les valeurs vraies ou fausses.
Exemple :
double pi = 3.14;
boolean estActif = true;
Les conversions de types
Les conversions de types permettent de transformer une donnée d’un type à un autre. Il existe deux types de conversions :
Conversion implicite : réalisée automatiquement par Java.
Conversion explicite (casting) : réalisée manuellement.
Exemple :
int nombre = 10;
double resultat = nombre; // Conversion implicite
double valeur = 9.7;
int valeurEntiere = (int) valeur; // Conversion explicite
Les opérateurs
Les opérateurs permettent d’effectuer des opérations sur des variables et des valeurs. Voici quelques exemples :
Opérateurs arithmétiques : +, -, *, /, %
Opérateurs de comparaison : ==, !=, &#x3C;, >, &#x3C;=, >=
Opérateurs logiques : &#x26;&#x26;, ||, !
Exemple :
int a = 5, b = 3;
int somme = a + b; // 8
boolean estEgal = (a == b); // false
Mutabilité et immuabilité
En Java, certains objets sont immuables, ce qui signifie que leur état ne peut pas être modifié après leur création. Par exemple, les objets de type String sont immuables.
Exemple :
String texte = "Bonjour";
texte = texte + " tout le monde"; // Une nouvelle chaîne est créée
Les objets mutables, comme les instances de StringBuilder, peuvent être modifiés.
Exemple :
StringBuilder sb = new StringBuilder("Bonjour");
sb.append(" tout le monde"); // Modifie l'objet existant
Le débugger
Le débugger est un outil essentiel pour analyser et corriger les erreurs dans un programme. Il permet d’exécuter le code pas à pas, d’inspecter les variables et de comprendre le flux d’exécution.
Exemple d’utilisation :
Placez un point d’arrêt (breakpoint) dans votre code.
Lancez le programme en mode débogage.
Analysez les valeurs des variables à chaque étape.
Arithmétie en Java
L’arithmétique en Java repose sur les opérateurs arithmétiques. Attention aux priorités des opérateurs et aux erreurs comme la division par zéro.
Exemple :
int x = 10, y = 3;
int division = x / y; // Résultat : 3 (division entière)
double divisionReelle = (double) x / y; // Résultat : 3.333...`,title:"Les bases de Java",fullPath:"java/section_1.md",meta:{title:"Les bases de Java",description:"Java",order:1},routePath:"/c/java/section_1"}],ee=[{uuid:"18cbc9d7-0682-49eb-a9b8-85a8b3073e13",name:"README",isDirectory:!1,children:[]},{uuid:"adf4caf7-8e4c-40fc-9b11-1c6705d2efbd",name:"java",isDirectory:!0,children:[{uuid:"b08c4421-35dd-4c7b-959e-2ce823ac5929",name:"index",isDirectory:!1,children:[]},{uuid:"e806ff57-f07f-4867-bae4-4845843afa40",name:"section_1",isDirectory:!1,children:[]}]}],te=[{path:"/c/java/index",name:"b08c4421-35dd-4c7b-959e-2ce823ac5929",title:"index",fullPath:"java/index.md",meta:{title:"Introduction to Learn Java",description:"Java",order:0}},{path:"/c/java/section_1",name:"e806ff57-f07f-4867-bae4-4845843afa40",title:"section_1",fullPath:"java/section_1.md",meta:{title:"Les bases de Java",description:"Java",order:1}},{path:"/",name:"18cbc9d7-0682-49eb-a9b8-85a8b3073e13",title:"README",fullPath:"README.md",meta:{title:"README"}}],ne={base:"/",data:{},theme:"auto"},Je=Object.freeze(Object.defineProperty({__proto__:null,fileList:k,filesTree:ee,routeList:te,site:ne},Symbol.toStringTag,{value:"Module"}));/**
* @vue/runtime-dom v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let h;const E=typeof window<"u"&&window.trustedTypes;if(E)try{h=E.createPolicy("vue",{createHTML:e=>e})}catch{}const H=h?e=>h.createHTML(e):e=>e,ie="http://www.w3.org/2000/svg",re="http://www.w3.org/1998/Math/MathML",c=typeof document<"u"?document:null,A=c&&c.createElement("template"),se={insert:(e,t,n)=>{t.insertBefore(e,n||null)},remove:e=>{const t=e.parentNode;t&&t.removeChild(e)},createElement:(e,t,n,i)=>{const r=t==="svg"?c.createElementNS(ie,e):t==="mathml"?c.createElementNS(re,e):n?c.createElement(e,{is:n}):c.createElement(e);return e==="select"&&i&&i.multiple!=null&&r.setAttribute("multiple",i.multiple),r},createText:e=>c.createTextNode(e),createComment:e=>c.createComment(e),setText:(e,t)=>{e.nodeValue=t},setElementText:(e,t)=>{e.textContent=t},parentNode:e=>e.parentNode,nextSibling:e=>e.nextSibling,querySelector:e=>c.querySelector(e),setScopeId(e,t){e.setAttribute(t,"")},insertStaticContent(e,t,n,i,r,o){const s=n?n.previousSibling:t.lastChild;if(r&&(r===o||r.nextSibling))for(;t.insertBefore(r.cloneNode(!0),n),!(r===o||!(r=r.nextSibling)););else{A.innerHTML=H(i==="svg"?`<svg>${e}</svg>`:i==="mathml"?`<math>${e}</math>`:e);const a=A.content;if(i==="svg"||i==="mathml"){const l=a.firstChild;for(;l.firstChild;)a.appendChild(l.firstChild);a.removeChild(l)}t.insertBefore(a,n)}return[s?s.nextSibling:t.firstChild,n?n.previousSibling:t.lastChild]}},oe=Symbol("_vtc");function ae(e,t,n){const i=e[oe];i&&(t=(t?[t,...i]:[...i]).join(" ")),t==null?e.removeAttribute("class"):n?e.setAttribute("class",t):e.className=t}const C=Symbol("_vod"),le=Symbol("_vsh"),ce=Symbol(""),ue=/(^|;)\s*display\s*:/;function de(e,t,n){const i=e.style,r=p(n);let o=!1;if(n&&!r){if(t)if(p(t))for(const s of t.split(";")){const a=s.slice(0,s.indexOf(":")).trim();n[a]==null&&f(i,a,"")}else for(const s in t)n[s]==null&&f(i,s,"");for(const s in n)s==="display"&&(o=!0),f(i,s,n[s])}else if(r){if(t!==n){const s=i[ce];s&&(n+=";"+s),i.cssText=n,o=ue.test(n)}}else t&&e.removeAttribute("style");C in e&&(e[C]=o?i.display:"",e[le]&&(i.display="none"))}const M=/\s*!important$/;function f(e,t,n){if(S(n))n.forEach(i=>f(e,t,i));else if(n==null&&(n=""),t.startsWith("--"))e.setProperty(t,n);else{const i=pe(e,t);M.test(n)?e.setProperty(g(i),n.replace(M,""),"important"):e[i]=n}}const y=["Webkit","Moz","ms"],m={};function pe(e,t){const n=m[t];if(n)return n;let i=R(t);if(i!=="filter"&&i in e)return m[t]=i;i=Q(i);for(let r=0;r<y.length;r++){const o=y[r]+i;if(o in e)return m[t]=o}return t}const w="http://www.w3.org/1999/xlink";function j(e,t,n,i,r,o=X(t)){i&&t.startsWith("xlink:")?n==null?e.removeAttributeNS(w,t.slice(6,t.length)):e.setAttributeNS(w,t,n):n==null||o&&!q(n)?e.removeAttribute(t):e.setAttribute(t,o?"":Z(n)?String(n):n)}function L(e,t,n,i,r){if(t==="innerHTML"||t==="textContent"){n!=null&&(e[t]=t==="innerHTML"?H(n):n);return}const o=e.tagName;if(t==="value"&&o!=="PROGRESS"&&!o.includes("-")){const a=o==="OPTION"?e.getAttribute("value")||"":e.value,l=n==null?e.type==="checkbox"?"on":"":String(n);(a!==l||!("_value"in e))&&(e.value=l),n==null&&e.removeAttribute(t),e._value=n;return}let s=!1;if(n===""||n==null){const a=typeof e[t];a==="boolean"?n=q(n):n==null&&a==="string"?(n="",s=!0):a==="number"&&(n=0,s=!0)}try{e[t]=n}catch{}s&&e.removeAttribute(r||t)}function u(e,t,n,i){e.addEventListener(t,n,i)}function fe(e,t,n,i){e.removeEventListener(t,n,i)}const J=Symbol("_vei");function me(e,t,n,i,r=null){const o=e[J]||(e[J]={}),s=o[t];if(i&&s)s.value=i;else{const[a,l]=ve(t);if(i){const V=o[t]=ge(i,r);u(e,a,V,l)}else s&&(fe(e,a,s,l),o[t]=void 0)}}const T=/(?:Once|Passive|Capture)$/;function ve(e){let t;if(T.test(e)){t={};let i;for(;i=e.match(T);)e=e.slice(0,e.length-i[0].length),t[i[0].toLowerCase()]=!0}return[e[2]===":"?e.slice(3):g(e.slice(2)),t]}let v=0;const be=Promise.resolve(),he=()=>v||(be.then(()=>v=0),v=Date.now());function ge(e,t){const n=i=>{if(!i._vts)i._vts=Date.now();else if(i._vts<=n.attached)return;Y(Se(i,n.value),t,5,[i])};return n.value=e,n.attached=he(),n}function Se(e,t){if(S(t)){const n=e.stopImmediatePropagation;return e.stopImmediatePropagation=()=>{n.call(e),e._stopped=!0},t.map(i=>r=>!r._stopped&&i&&i(r))}else return t}const z=e=>e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&e.charCodeAt(2)>96&&e.charCodeAt(2)<123,xe=(e,t,n,i,r,o)=>{const s=r==="svg";t==="class"?ae(e,i,s):t==="style"?de(e,n,i):$(t)?F(t)||me(e,t,n,i,o):(t[0]==="."?(t=t.slice(1),!0):t[0]==="^"?(t=t.slice(1),!1):Ee(e,t,i,s))?(L(e,t,i),!e.tagName.includes("-")&&(t==="value"||t==="checked"||t==="selected")&&j(e,t,i,s,o,t!=="value")):e._isVueCE&&(/[A-Z]/.test(t)||!p(i))?L(e,R(t),i,o,t):(t==="true-value"?e._trueValue=i:t==="false-value"&&(e._falseValue=i),j(e,t,i,s))};function Ee(e,t,n,i){if(i)return!!(t==="innerHTML"||t==="textContent"||t in e&&z(t)&&O(n));if(t==="spellcheck"||t==="draggable"||t==="translate"||t==="form"||t==="list"&&e.tagName==="INPUT"||t==="type"&&e.tagName==="TEXTAREA")return!1;if(t==="width"||t==="height"){const r=e.tagName;if(r==="IMG"||r==="VIDEO"||r==="CANVAS"||r==="SOURCE")return!1}return z(t)&&p(n)?!1:t in e}const _=e=>{const t=e.props["onUpdate:modelValue"]||!1;return S(t)?n=>W(t,n):t};function Ae(e){e.target.composing=!0}function P(e){const t=e.target;t.composing&&(t.composing=!1,t.dispatchEvent(new Event("input")))}const b=Symbol("_assign"),Te={created(e,{modifiers:{lazy:t,trim:n,number:i}},r){e[b]=_(r);const o=i||r.props&&r.props.type==="number";u(e,t?"change":"input",s=>{if(s.target.composing)return;let a=e.value;n&&(a=a.trim()),o&&(a=x(a)),e[b](a)}),n&&u(e,"change",()=>{e.value=e.value.trim()}),t||(u(e,"compositionstart",Ae),u(e,"compositionend",P),u(e,"change",P))},mounted(e,{value:t}){e.value=t??""},beforeUpdate(e,{value:t,oldValue:n,modifiers:{lazy:i,trim:r,number:o}},s){if(e[b]=_(s),e.composing)return;const a=(o||e.type==="number")&&!/^0\d/.test(e.value)?x(e.value):e.value,l=t??"";a!==l&&(document.activeElement===e&&e.type!=="range"&&(i&&t===n||r&&e.value.trim()===l)||(e.value=l))}},Ce=["ctrl","shift","alt","meta"],Me={stop:e=>e.stopPropagation(),prevent:e=>e.preventDefault(),self:e=>e.target!==e.currentTarget,ctrl:e=>!e.ctrlKey,shift:e=>!e.shiftKey,alt:e=>!e.altKey,meta:e=>!e.metaKey,left:e=>"button"in e&&e.button!==0,middle:e=>"button"in e&&e.button!==1,right:e=>"button"in e&&e.button!==2,exact:(e,t)=>Ce.some(n=>e[`${n}Key`]&&!t.includes(n))},ze=(e,t)=>{const n=e._withMods||(e._withMods={}),i=t.join(".");return n[i]||(n[i]=(r,...o)=>{for(let s=0;s<t.length;s++){const a=Me[t[s]];if(a&&a(r,t))return}return e(r,...o)})},ye={esc:"escape",space:" ",up:"arrow-up",left:"arrow-left",right:"arrow-right",down:"arrow-down",delete:"backspace"},_e=(e,t)=>{const n=e._withKeys||(e._withKeys={}),i=t.join(".");return n[i]||(n[i]=r=>{if(!("key"in r))return;const o=g(r.key);if(t.some(s=>s===o||ye[s]===o))return e(r)})},K=G({patchProp:xe},se);let d,D=!1;function we(){return d||(d=U(K))}function je(){return d=D?d:B(K),D=!0,d}const Pe=(...e)=>{const t=we().createApp(...e),{mount:n}=t;return t.mount=i=>{const r=I(i);if(!r)return;const o=t._component;!O(o)&&!o.render&&!o.template&&(o.template=r.innerHTML),r.nodeType===1&&(r.textContent="");const s=n(r,!1,N(r));return r instanceof Element&&(r.removeAttribute("v-cloak"),r.setAttribute("data-v-app","")),s},t},De=(...e)=>{const t=je().createApp(...e),{mount:n}=t;return t.mount=i=>{const r=I(i);if(r)return n(r,!0,N(r))},t};function N(e){if(e instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&e instanceof MathMLElement)return"mathml"}function I(e){return p(e)?document.querySelector(e):e}export{ze as a,De as b,Je as c,Pe as d,k as f,ne as s,Te as v,_e as w};
