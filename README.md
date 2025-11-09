# Dev2Production.Tech — 3D Web Experience

A stunning, production-ready React website featuring cutting-edge 3D web technologies, modern animations, and glassmorphism design. Built to showcase technical excellence and impress potential clients.

## ✨ Features

### 🎨 3D Web Technologies
- **Three.js & React Three Fiber** — Immersive 3D experiences
- **Animated 3D Objects** — Floating geometry, distorted spheres, particle fields
- **WebGL Shaders** — Custom materials and lighting
- **Interactive Canvas** — Responsive 3D scenes that react to user interaction

### 🚀 Modern Stack
- **React 18** with Hooks and functional components
- **Vite** for lightning-fast builds and HMR
- **Tailwind CSS** with custom design system
- **Framer Motion** for smooth page transitions
- **React Router** with HashRouter for GitHub Pages compatibility

### 🎯 Design Excellence
- **Glassmorphism UI** — Frosted glass effects with backdrop blur
- **Gradient Text & Glows** — Eye-catching visual effects
- **Dark Mode** — Modern dark theme with accent colors
- **Responsive Design** — Mobile-first, works on all devices
- **Smooth Animations** — Intersection Observer-triggered animations

### 📱 Pages
- **Home** — Hero with 3D sphere, feature cards, stats, CTA
- **About** — Mission, vision, values with animated cards
- **Services** — 6 service cards with tech stacks and process timeline
- **Portfolio** — Filterable project grid with 9 projects
- **Contact** — Web3Forms integration with glassmorphic form

## 🛠️ Tech Stack

```
React + Vite
├── @react-three/fiber    # React renderer for Three.js
├── @react-three/drei      # Helpers for R3F
├── three                  # 3D library
├── framer-motion         # Animations
├── react-router-dom      # Routing
├── react-helmet-async    # SEO meta tags
├── tailwindcss           # Styling
└── web3forms             # Contact form API
```

## 🚀 Quick Start

### 1. Install Dependencies

```powershell
npm install
```

### 2. Configure Environment

Copy `.env.example` to `.env`:

```powershell
Copy-Item .env.example .env
```

Get your free Web3Forms access key from [https://web3forms.com](https://web3forms.com) and add it:

```env
VITE_WEB3FORMS_ACCESS_KEY=your_access_key_here
```

### 3. Run Development Server

```powershell
npm run dev
```

Visit: `http://localhost:5173/`

## 📦 Build for Production

```powershell
npm run build
```

Preview production build:

```powershell
npm run preview
```

## 🌐 Deploy to GitHub Pages

1. Update `homepage` in `package.json`:

```json
"homepage": "https://yourusername.github.io/dev2production"
```

2. Deploy:

```powershell
npm run deploy
```

## 🎨 Customization

### Colors

Edit `tailwind.config.cjs` to customize the color scheme:

```js
colors: {
  primary: { ... },  // Main brand color
  dark: { ... }      // Background colors
}
```

### 3D Elements

Customize 3D components in `src/components/3d/`:
- `AnimatedSphere.jsx` — Main hero sphere
- `FloatingGeometry.jsx` — Floating shapes
- `ParticleField.jsx` — Background particles
- `Scene3D.jsx` — Complete 3D scene

### Content

- Portfolio items: `src/data/portfolio.js`
- Service cards: `src/pages/Services.jsx`
- About content: `src/pages/About.jsx`

## 📊 Performance

- **Bundle Size**: ~1.2MB (gzipped: 344KB)
- **Lighthouse Score**: 90+ Performance
- **Code Splitting**: Three.js, animations, vendor chunks
- **Lazy Loading**: 3D components with React.Suspense

## 🔧 Key Components

### Hero Section
- Full-screen 3D canvas with animated sphere
- Glassmorphic content overlay
- Gradient text effects
- CTA buttons with hover animations

### Card Component
- Intersection Observer animations
- Hover effects with 3D transforms
- Glassmorphism background
- Gradient borders on hover

### Portfolio Grid
- Category filtering
- 3D card hover effects
- Tech stack badges
- Smooth transitions

## 📝 Browser Support

- Chrome/Edge 90+
- Firefox 88+
- Safari 15+
- Mobile browsers (iOS Safari, Chrome Mobile)

**Note**: WebGL is required for 3D features. Fallback UI shown for unsupported browsers.

## 🤝 Contributing

This is a showcase project. Feel free to fork and customize for your own needs!

## 📄 License

MIT License — Free to use for personal and commercial projects.

---

**Built with ❤️ using React, Three.js, and modern web technologies**
