#!/bin/bash

# Script de build pour Netlify
set -e

echo "🚀 Début du build pour Netlify"

# Vérifier la version de Node
echo "📦 Version Node.js: $(node --version)"
echo "📦 Version npm: $(npm --version)"

# Nettoyer le répertoire de sortie
echo "🧹 Nettoyage des fichiers de build précédents"
npm run clean 2>/dev/null || true

# Installer les dépendances
echo "📚 Installation des dépendances"
npm ci

# Build du projet
echo "🔨 Build du projet avec Compiiile"
npm run build

# Vérifier que le build a réussi
if [ -d ".compiiile/dist" ]; then
    echo "✅ Build réussi! Dossier de sortie: .compiiile/dist"
    echo "📁 Contenu du dossier de sortie:"
    ls -la .compiiile/dist
else
    echo "❌ Erreur: Le dossier de sortie n'existe pas"
    exit 1
fi

echo "🎉 Build terminé avec succès!"
