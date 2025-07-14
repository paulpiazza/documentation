import { defineConfig } from '@compiiile/compiiile'

export default defineConfig({
  title: "Documentation",
  description: "Documentation for the Compilable library",
  
  // Répertoire où se trouvent tes fichiers .md
  contentDir: 'docs',

  // Dossiers à ignorer pendant le scan
  exclude: [
    'node_modules',
    '.git',
    '.obsidian',
    '.vscode',
    'dist',
    '.compiiile',
    'public'
  ]
})