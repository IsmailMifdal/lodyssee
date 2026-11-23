# 🧭 L'Odyssée — exploration urbaine gamifiée

> Prépare ta liste de lieux à découvrir, tamponne ton carnet sur place, débloque des pages secrètes…
> et transforme ton carnet en souvenir imprimé.

**🔗 Démo en ligne : [lodyssee.vercel.app](https://lodyssee.vercel.app)** (prototype interactif, à ouvrir de préférence sur mobile)

![React](https://img.shields.io/badge/React-18-61dafb) ![TypeScript](https://img.shields.io/badge/TypeScript-5-blue) ![Vite](https://img.shields.io/badge/Vite-5-646cff) ![Tailwind CSS](https://img.shields.io/badge/Tailwind-CSS-38bdf8) ![Framer Motion](https://img.shields.io/badge/Framer-Motion-ff0055)

---

## 💡 Le concept

L'Odyssée transforme la découverte d'une ville en carnet de voyage à compléter :

| Étape | Ce que fait l'utilisateur |
|---|---|
| **1. Préparer** | Il choisit les lieux qu'il veut découvrir et compose sa *Bucket List*. |
| **2. Explorer** | Il se rend sur place, fait un *check-in* et tamponne son carnet. |
| **3. Débloquer** | Certains lieux ouvrent des **pages secrètes** et des *Hidden Gems*. |
| **4. Garder** | Le carnet terminé peut devenir un **souvenir imprimé**. |

La dimension sociale motive l'exploration : classement, fil d'activité de l'équipe et notifications.

## 📱 Écrans du prototype

Le parcours est complet, de la première ouverture à l'offre premium :

| Parcours | Écrans |
|---|---|
| Arrivée | Onboarding · Connexion · Bucket List |
| Exploration | Carte · Fiche d'un lieu · Check-in · Hidden Gem (page secrète) |
| Carnet | Carnet de voyage · Carnet imprimé · Ticket |
| Communauté | Classement · Fil d'équipe · Notifications |
| Compte | Profil · Packs premium |

Les transitions entre écrans sont animées (Framer Motion), dans un design « carnet de voyage » (textures papier, tampons).

## 🛠️ Stack technique

- **React 18 + TypeScript**, bundlé avec **Vite**
- **Tailwind CSS** et **shadcn/ui** (composants Radix UI accessibles)
- **Framer Motion** pour les transitions
- **React Router**, **TanStack Query**, **React Hook Form** et **Zod**
- **Vitest** pour les tests, **ESLint** pour la qualité
- Déploiement continu sur **Vercel**

## 🚀 Lancer le projet

```bash
git clone https://github.com/IsmailMifdal/lodyssee.git
cd lodyssee
npm install
npm run dev        # http://localhost:8080
```

| Commande | Rôle |
|---|---|
| `npm run dev` | Serveur de développement |
| `npm run build` | Build de production (`dist/`) |
| `npm run preview` | Prévisualise le build |
| `npm test` | Tests (Vitest) |
| `npm run lint` | Lint (ESLint) |

## 📂 Structure

```
src/
├── pages/Index.tsx            # Navigation entre écrans et animations
├── components/
│   ├── MobileShell.tsx        # Cadre mobile et barre d'onglets
│   ├── screens/               # Un composant par écran du parcours
│   └── ui/                    # Composants shadcn/ui
└── assets/places/             # Photos des lieux
```

## 🗺️ Prochaines étapes

- Brancher une vraie carte et la géolocalisation pour le check-in.
- Back-end : comptes, carnets et classement persistants.
- Commande et impression du carnet.

---

Projet réalisé par **Ismail Mifdal**, développeur Full Stack.
[Portfolio](https://ismail-mifdal.vercel.app) · [GitHub](https://github.com/IsmailMifdal)
