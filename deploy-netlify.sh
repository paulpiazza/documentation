#!/bin/bash

# Script de déploiement Netlify
# Ce script peut être utilisé pour des tests locaux ou comme référence

echo "🚀 Préparation du déploiement Netlify"

# Vérifications préalables
if [ ! -f "package.json" ]; then
    echo "❌ Erreur: package.json introuvable"
    exit 1
fi

if [ ! -f "netlify.toml" ]; then
    echo "❌ Erreur: netlify.toml introuvable"
    exit 1
fi

# Afficher les informations de build
echo "📋 Informations de build:"
echo "  - Command: npm run build"
echo "  - Publish dir: .compiiile/dist"
echo "  - Node version: $(cat .nvmrc)"

# Vérifier si Netlify CLI est installé (pour tests locaux)
if command -v netlify &> /dev/null; then
    echo "✅ Netlify CLI détecté"
    echo "🔧 Pour tester localement, exécutez:"
    echo "   netlify dev"
    echo "🚀 Pour déployer manuellement:"
    echo "   netlify deploy --prod"
else
    echo "ℹ️  Pour installer Netlify CLI (optionnel):"
    echo "   npm install -g netlify-cli"
fi

echo ""
echo "📝 Instructions de déploiement Netlify:"
echo "1. Connectez votre repository GitHub à Netlify"
echo "2. Les paramètres sont configurés automatiquement via netlify.toml"
echo "3. Chaque push déclenche un déploiement automatique"
echo ""
echo "🔗 Configuration Netlify UI:"
echo "   - Build command: npm run build"
echo "   - Publish directory: .compiiile/dist"
echo "   - Node version: 24"
