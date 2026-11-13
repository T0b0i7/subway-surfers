# 🏃 Subway Surfers - Progressive Web App (PWA) Mobile

Cette version transforme le jeu Unity WebGL **Subway Surfers: Zurich** en une **PWA (Progressive Web App)** complète et autonome, installable directement sur smartphone (**Android** et **iOS / iPhone**) ainsi que sur PC / Mac, avec support du jeu **hors-ligne**.

---

## ✨ Fonctionnalités ajoutées

- 📲 **PWA Installable** :
  - Manifeste Web App (`manifest.webmanifest` & `manifest.json`)
  - Jeu d'icônes adaptatives et maskables de 72x72 à 512x512
  - Mode d'affichage `standalone` (sans barre d'adresse de navigateur)
  - Orientation verrouillée en portrait optimisé pour mobile
- ⚡ **Support Hors-ligne (Offline)** :
  - Service Worker (`sw.js`) avec mise en cache locale des fichiers du jeu (Wasm, données, scripts, images).
  - Une fois chargé, le jeu fonctionne même en mode avion.
- 👆 **Contrôles Tactiles (Swipe & Double Tap)** :
  - **Glisser vers le haut** : Sauter (Flèche Haut)
  - **Glisser vers le bas** : Roulade (Flèche Bas)
  - **Glisser vers la gauche / droite** : Déplacement latéral
  - **Double Tape sur l'écran** : Activer l'Hoverboard (Espace)
- 🖥️ **Boutons HUD** :
  - Bouton dynamique **Installer** sur Android / Chrome
  - Guide d'installation automatique pour iOS Safari
  - Bouton **Plein écran**

---

## 🚀 Comment lancer et installer le jeu sur votre téléphone

### Option 1 : En local sur le même réseau Wi-Fi

1. Double-cliquez sur **`lancer_serveur.bat`** (ou lancez `python server.py` ou `npm start`).
2. Le terminal affiche l'adresse locale, par exemple :
   ```
   http://192.168.100.157:8080
   ```
3. Connectez votre smartphone au **même réseau Wi-Fi** que votre ordinateur.
4. Ouvrez le navigateur de votre smartphone et tapez cette adresse :
   - **Sur Android (Chrome)** : Un bouton **« Installer »** apparaîtra en haut. Vous pouvez aussi appuyer sur le menu `⋮` > **Ajouter à l'écran d'accueil** ou **Installer l'application**.
   - **Sur iPhone (Safari)** : Appuyez sur le bouton de partage **⎋** (en bas), puis sélectionnez **« Sur l'écran d'accueil » ➕**.
5. L'icône Subway Surfers s'ajoute à votre écran d'accueil comme une véritable application native !

---

### Option 2 : Déploiement en ligne gratuit (HTTPS 24h/24)

Pour avoir un lien permanent accessible partout dans le monde en HTTPS :

#### Avec GitHub Pages :
1. Créez un dépôt GitHub et envoyez les fichiers du dossier.
2. Allez dans les **Settings** > **Pages** du dépôt.
3. Choisissez la branche `main` et enregistrez.
4. En 1 minute, votre jeu est en ligne sur `https://<votre-pseudo>.github.io/<nom-du-projet>/` !

#### Avec Vercel / Netlify :
- Glissez-déposez simplement le dossier du projet sur [vercel.com](https://vercel.com) ou [netlify.com](https://netlify.com) pour obtenir instantanément une URL HTTPS gratuite.
