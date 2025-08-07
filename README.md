# 🚀 Dashboard Vincennes

Dashboard public dynamique basé sur Vite + JavaScript Modules.

## 🌐 Déploiement GitHub Pages

Ce projet est automatiquement déployé sur GitHub Pages grâce à GitHub Actions.

### ✅ Stack utilisée
- Vite
- Modules JavaScript
- GitHub Pages (déploiement auto)

---

## 🔧 Commandes disponibles

```bash
npm install       # Installe les dépendances
npm run dev       # Lance le serveur de dev
npm run build     # Compile le projet dans le dossier /dist
npm run preview   # Lance un serveur local pour prévisualiser /dist
```

---

## 🛠️ Structure des modules

Chaque fichier de `/modules/` récupère une source (météo, bus, etc.) via `fetchWithTimeout()` depuis `modules/api.js`.

---

## 🚀 Déploiement manuel

1. Commit sur `main` déclenche automatiquement le build + déploiement
2. Pages visibles dans **Settings > Pages**
3. URL typique : `https://<utilisateur>.github.io/<repo>/`

---

## 💡 Améliorations futures
- [ ] Ajouter des tests unitaires (Vitest ou Jest)
- [ ] Ajouter un linter (ESLint)
- [ ] Optimiser accessibilité (ARIA, contrastes)
- [ ] Ajouter support mobile (media queries)

---

## 📁 Dossier `/dist`

Ce dossier est généré automatiquement par `vite build` et ne doit **pas** être modifié manuellement.

---

## 🔗 Liens utiles

- [Vite Docs](https://vitejs.dev/)
- [GitHub Pages](https://pages.github.com/)
- [GitHub Actions Docs](https://docs.github.com/en/actions)
