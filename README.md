# My YouTube

Le but de ce projet est de recréer le front de youtube le plus fidèlement possible avec Nuxt 4 et Nuxt UI. L'idée derrière ce projet est de découvrir et utiliser Nuxt 4 et Nuxt UI.

## Fonctionnalités

- **Interface moderne** avec Nuxt UI et Tailwind CSS
- **Design responsive** adapté à tous les écrans
- **Gestion des abonnements** et notifications
- **Historique** des vidéos visionnées
- **Interface utilisateur** intuitive et rapide

## Stack Technique

- **Framework** : [Nuxt 4](https://nuxt.com/)
- **UI Library** : [Nuxt UI](https://ui.nuxt.com/)
- **Styling** : [Tailwind CSS](https://tailwindcss.com/)
- **Icons** : [Lucide](https://lucide.dev/)
- **TypeScript** : Support complet

## Installation

### Prérequis

- Node.js 18+ 
- pnpm, npm ou yarn

### Installation

```bash
# Cloner le repository
git clone <repository-url>
cd my-youtube

# Installer les dépendances
pnpm install

# Démarrer le serveur de développement
pnpm dev
```

## Démarrage Rapide

1. **Installation des dépendances** :
   ```bash
   pnpm install
   ```

2. **Serveur de développement** :
   ```bash
   pnpm dev
   ```
   L'application sera disponible sur `http://localhost:3000`

## 📁 Structure du Projet

```
my-youtube/
├── app/
│   ├── components/          # Composants Vue
│   │   ├── Header.vue     # Header de l'application
│   │   └── Dashboard.vue  # Composant dashboard
│   ├── pages/              # Pages Nuxt
│   │   ├── index.vue       # Page d'accueil
│   │   └── subscription.vue
│   ├── layouts/            # Layouts Nuxt
│   ├── assets/css/         # Fichiers CSS
│   ├── app.config.ts       # Configuration Nuxt UI
│   └── app.vue           # Composant racine
├── .nuxt/               # Fichiers générés par Nuxt
├── node_modules/          # Dépendances
├── public/               # Fichiers statiques
├── nuxt.config.ts        # Configuration Nuxt
├── package.json           # Configuration du projet
└── README.md             # Documentation
```

<!-- ## 🎨 Composants Principaux

### Header
- Navigation fixe en haut de page
- Logo et branding
- Liens de navigation principaux

### Sidebar
- Menu navigation collapsible
- Gestion des abonnements
- Accès rapide aux fonctionnalités
- Bouton de collapse intégré

### Dashboard
- Interface principale
- Affichage du contenu
- Interactions utilisateur -->

## 🔧 Configuration

### Variables d'environnement

Créer un fichier `.env.local` :
```env
NUXT_PUBLIC_API_URL=https://api.example.com
NUXT_PUBLIC_APP_NAME=My YouTube
```

### Personnalisation

Le thème et les couleurs peuvent être personnalisés dans `app/app.config.ts` :

```typescript
export default defineAppConfig({
  ui: {
    colors: {
      primary: 'red',      // Couleur principale
      neutral: 'zinc'     // Couleur neutre
    }
  },
  title: 'My YouTube'     // Titre de l'application
})
```

<!-- ## 🚀 Déploiement

### Build de production

```bash
# Build pour production
pnpm build

# Preview local
pnpm preview
``` -->

## 📚 Documentation

- [Documentation Nuxt](https://nuxt.com/docs) - Documentation officielle
- [Documentation Nuxt UI](https://ui.nuxt.com/docs) - Composants UI

## 🔗 Liens Utiles

- [Nuxt Documentation](https://nuxt.com/docs)
- [Nuxt UI Components](https://ui.nuxt.com/docs/components)
- [Tailwind CSS](https://tailwindcss.com/docs)
- [Vue 3 Documentation](https://vuejs.org/guide/)

---

