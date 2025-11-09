# Copilot Instructions — Dev2Production.Tech (3D Business Website)

> **Purpose:** A single, end-to-end Copilot prompt pack and implementation guide to build an extraordinary, enterprise-grade 3D business website for **Dev2Production.Tech**, optimized for GitHub Pages deployment. Designed for a React codebase with modern tooling, a performance-first approach, and production-ready developer experience.

---

## Project Summary (one-line)
Build a fast, accessible, and SEO-friendly React site with an immersive 3D hero and subtle 3D touches site-wide, clear enterprise messaging, lead-capture CTAs, secure contact flow, and automated GitHub Pages deployment.

## High-level constraints & rules (must obey)
- **No pricing tables.**
- **No fake client logos.**
- **No portfolio or project case listings.**
- Enterprise tone — concise, data-driven, action-oriented language.
- Mobile-first responsiveness and accessibility (WCAG AA baseline).
- Minimal external tracking; privacy-respecting analytics optional (e.g., Plausible).
- All 3D elements must be optimized (Lod, compressed glTF / DRACO, baked lighting when reasonable).
- Use progressive enhancement: page works without WebGL (fallback to static hero image / SVG).
- Assume repository name: `dev2production.tech`.

---

## Recommended stack & libraries
- **Tooling:** Vite + React + TypeScript
- **Styling:** Tailwind CSS (utility-driven) + CSS variables for brand tokens
- **3D:** `@react-three/fiber` + `@react-three/drei` + `three` + `postprocessing` (optional)
- **Animations:** Framer Motion for UI transitions
- **Routing:** `react-router` or Vite's SPA routing (React Router v6)
- **Forms:** Formspree / Netlify Forms / simple serverless endpoint (choose one) — include honeypot and reCAPTCHA v3 option
- **Linting/Formatting:** ESLint, Prettier, TypeScript
- **Testing:** Vitest + React Testing Library (basic smoke tests)
- **CI/CD:** GitHub Actions for build and deploy to GitHub Pages (gh-pages npm package or actions-gh-pages)
- **Optional analytics:** Plausible or self-hosted—no Google Analytics by default

---

## Project structure (suggested)
```
dev2production.tech/
├─ public/
│  ├─ index.html
│  └─ assets/
├─ src/
│  ├─ components/
│  │  ├─ layout/
│  │  │  ├─ Header.tsx
│  │  │  ├─ Footer.tsx
│  │  │  └─ Container.tsx
│  │  ├─ hero/
│  │  │  ├─ Hero3D.tsx        # react-three-fiber scene
│  │  │  └─ HeroFallback.tsx  # static fallback for no-webgl
│  │  ├─ services/
│  │  │  └─ ServiceCard.tsx
│  │  ├─ ctas/
│  │  │  └─ PrimaryCTA.tsx
│  │  └─ ui/
│  │     └─ Tag, Badge, Modal, FormControls
│  ├─ pages/
│  │  ├─ Home.tsx
│  │  ├─ About.tsx
│  │  ├─ Services.tsx
│  │  └─ Contact.tsx
│  ├─ styles/
│  │  └─ tailwind.css
│  ├─ utils/
│  │  └─ analytics, seo, helpers
│  ├─ App.tsx
│  └─ main.tsx
├─ .github/workflows/
│  └─ deploy.yml
├─ package.json
└─ README.md
```

---

## Page map & content blocks (required pages)
- **Home** (Hero 3D, Short value props, Services snapshot, Why Choose Us, Lead CTA, Contact preview)
- **About** (Mission, Approach, Team summary — brief bios, certifications)
- **Services** (Page listing service categories & benefits — not project portfolio)
- **Contact** (Form, Calendly link optional, email `info@dev2production.tech`, location/Timezone)
- **Blog** (optional, basic CMS-ready structure — can be static markdown)
- **Privacy / Terms** pages

Each page must include a clear Primary CTA (Get a Free DevOps Assessment or Talk to an Expert).

---

## Visual and UX brief
**Branding:** Dark or graphite primary theme with neon teal + electric orange accents. Use high-contrast, modern typography (e.g., Inter + variable weights).

**Hero experience (3D):**
- A clean, interactive 3D scene representing the delivery pipeline (abstract shapes, moving nodes, arrows, and a glowing endpoint labeled "production").
- Interactions: subtle parallax following pointer or device tilt; click-to-highlight pipeline stages with microcopy tooltips.
- Performance: limit objects, use baked textures or simple PBR, enable adaptive pixel ratio.
- Fallback: an SVG/PNG that matches the visual.

**Micro-interactions:** smooth motion on nav open/close, buttons, hover states. Use reduced-motion preference.

**Accessibility:** keyboard navigable, semantic HTML, ARIA attributes for complex widgets, focus outlines maintained, color contrast >= 4.5:1 for body text.

---

## 3D implementation notes (detailed)
1. **Scene composition:** Use `Canvas` from `@react-three/fiber` with `<Suspense>` and lazy-loaded GLTF components. Keep camera outside the scene for CSS overlay controls.
2. **Model strategy:** Prefer procedural geometry for hero (spheres, lines, extruded shapes) or lightweight GLTF (<200 KB). If using GLTF, compress with DRACO and provide LOD.
3. **Lighting:** One directional light + ambient + small rim lights. Avoid expensive real-time shadows on mobile; use baked ambient occlusion textures if necessary.
4. **Controls:** Implement `OrbitControls` limited to rotation/zoom but disabled on mobile or reduced interaction via `drei`.
5. **Postprocessing:** Optional bloom and subtle vignette using `postprocessing` package; gate by a performance check (only if deviceMemory > 2GB).
6. **Fallback strategy:** Detect WebGL context; if unavailable, render `HeroFallback` with an SVG that matches layout.
7. **Performance:** set `frameloop='demand'` for non-animated scenes or control rendering frequency; throttle pointer events; memoize objects; use `useGLTF.preload()`.

---

## SEO, meta, and social previews
- Per-page meta titles and descriptions using `react-helmet-async` or server-injected tags (for GitHub Pages, prerender the home page using SSG step or static meta in index.html).
- Structured data (Organization schema + WebSite + ContactPoint) embedded in JSON-LD on the homepage.
- Open Graph and Twitter Card tags with a 1200×630 hero fallback image.

---

## Copilot prompt recipes (use these to generate files/components)

### 1. Project bootstrap prompt
`"Create a Vite + React + TypeScript starter for a business website named dev2production.tech. Configure Tailwind CSS, ESLint, Prettier, and TypeScript paths. Add scripts for build, dev, preview, and deploy to GitHub Pages. Include a sample Home page and Header/Footer components. Ensure no portfolio or pricing sections are scaffolded."`

### 2. Hero 3D component prompt
`"Generate a React component Hero3D.tsx using @react-three/fiber and @react-three/drei. Scene: abstract pipeline with 5 nodes connected by lines; nodes pulse subtly; pointer hover highlights node and shows a small HTML tooltip with stage name. Implement fallback component HeroFallback for no-webgl. Optimize for performance and include reduced-motion support."`

### 3. Services section prompt
`"Write a responsive Services.tsx page that lists categories: DevOps Automation, Cloud Engineering, Monitoring & Reliability, FinOps, DevSecOps. For each category include 3 short benefit bullets and a 'Request Assessment' CTA. Keep language concise and enterprise-focused."`

### 4. Contact form prompt
`"Create a Contact.tsx with a secure contact form that posts to Formspree (or Netlify Forms) including name, company, email, message, hidden honeypot, and GDPR consent checkbox. Add client-side validation and success/failure states."`

### 5. GitHub Actions deploy prompt
`"Add a GitHub Actions workflow file that installs dependencies, builds the site, and deploys to GitHub Pages on push to main using actions-gh-pages. Ensure the deploy uses a build artifact and sets correct base path for GitHub Pages."`

Use Copilot to iterate on each generated file; always run lint tests and unit tests after scaffolding.

---

## Development & deployment checklist (actionable)
1. Initialize repo: `git init` → create `main` branch → push to GitHub `dev2production.tech`.
2. Bootstrap with Vite + React + TypeScript.
3. Install and configure Tailwind CSS.
4. Add `@react-three/fiber`, `@react-three/drei`, `three` and implement `Hero3D` with fallback.
5. Implement core pages: Home, About, Services, Contact, Privacy.
6. Configure ESLint, Prettier, TypeScript; add Husky pre-commit hooks for linting.
7. Add basic Vitest tests (render smoke tests for Header, HeroFallback, Contact form validation).
8. Add metadata + JSON-LD for SEO.
9. Configure GitHub Actions workflow for `gh-pages` deployment.
10. Create `CNAME` file with `dev2production.tech` in `public/`.
11. Test production build locally: `npm run build` → `npm run preview`.
12. Merge to `main`, verify GitHub Pages site publishes and the base path works.

---

## Security, privacy, and compliance notes
- **Secrets:** do not commit secrets. Use GitHub Secrets for any deploy tokens.
- **Forms:** include GDPR consent checkbox and privacy link.
- **Dependencies:** enable Dependabot for security updates.
- **CSP:** set a Content Security Policy header via `meta` or hosting configuration.

---

## Performance & monitoring (post-launch)
- Use Lighthouse audits and aim for: Performance ≥ 90, Accessibility ≥ 90, Best Practices ≥ 90.
- Track errors with Sentry (optional) but notify users about data collection.
- Implement simple uptime checks and weekly performance report via GitHub Actions.

---

## Example CI workflow (summary)
- On push to `main`: run tests, lint, build. If successful, deploy `build/` to GitHub Pages branch via `peaceiris/actions-gh-pages`.

---

## Quality gates for PRs
1. All tests pass.
2. Linting/formatting OK.
3. Accessibility basic checks (axe-core run) — no critical violations.
4. Bundle size check (report from `rollup-plugin-visualizer` or `webpack-bundle-analyzer` equivalent).

---

## Content guidance (copywriting rules)
- Tone: authoritative, concise, outcome-driven.
- Use metrics and outcomes where possible (e.g., “cut deployment time by X%” — mark as example copy unless backed by data).
- CTAs: always ask for an assessment or conversation — do not ask for pricing.
- Keep each hero line to ≤ 10 words and supporting sentence ≤ 20 words.
- Use bulleted benefit lists (3 items) for scannability.

---

## Copilot usage process (how to prompt and iterate)
1. Start with the short scaffolding prompts above.
2. For each generated file, run unit/lint tests locally.
3. If output is not production-grade, ask Copilot to refactor with explicit constraints: `"Make this component accessible, add aria-labels, keyboard support, and unit tests."`
4. Use smaller prompts to generate micro-components (Buttons, Inputs) and then ask Copilot to compose them into pages.
5. Always perform a human review focusing on security, accessibility, and performance before merging.

---

## Deliverables checklist for launch
- [ ] Production build passes locally
- [ ] GitHub Actions deploys successfully to GitHub Pages
- [ ] Hero 3D with fallback implemented
- [ ] Pages: Home, About, Services, Contact, Privacy
- [ ] Contact form verified and working
- [ ] SEO meta + JSON-LD added
- [ ] Accessibility and Lighthouse audits passed
- [ ] README.md with build & deploy instructions

---

## Assumptions (disclose)
- The site will be single-repo, single-tenant, hosted on GitHub Pages.
- The team can accept modern JavaScript stack (Vite/ESM).
- No backend is provided beyond form endpoint (Formspree/Netlify) unless arranged.

---

## Example initial README snippet (for repo root)
```
# Dev2Production.Tech - Website

Tech: Vite + React + TypeScript + Tailwind + react-three-fiber

## Scripts
- `npm run dev` - start dev server
- `npm run build` - build production
- `npm run preview` - preview production build
- `npm run deploy` - deploy to GitHub Pages (configured in CI)

See COPILOT-INSTRUCTIONS.md for development prompts and detailed guidance.
```

---

## Final note for Copilot-driven workflow
Be strict about accessibility, performance, and privacy. Use Copilot as a high-quality scaffolder but enforce human review gates for security and final copy. Keep 3D tasteful and meaningful — it should explain an idea (the Dev→Production pipeline) rather than exist purely as flair.



