# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

| Command | Description |
|---------|-------------|
| `npm run dev` | Start Vite dev server (localhost:5173) |
| `npm run build` | Production build to `dist/` |
| `npm run preview` | Preview the production build |
| `npm run lint` | ESLint all JS/JSX files (flat config) |
| `docker compose up -d` | Build & serve via Docker Compose (port 8080) |

No testing framework or TypeScript configured — the project is pure JSX.

## Architecture

A single-page React 19 portfolio app with **client-side routing via `react-router-dom`** (`BrowserRouter` in `src/main.jsx`). Home section navigation still uses smooth-scroll via `react-scroll`.

### Routes (`src/main.jsx`)

| Route | Page | Description |
|-------|------|-------------|
| `/` | `src/pages/Home.jsx` | Landing page — all sections render sequentially |
| `/portofolio` | `src/pages/PortofolioPage.jsx` | Project grid, cards 2-col mobile / 3-col desktop |
| `/portofolio/:id` | `src/pages/PortofolioDetailPage.jsx` | Project detail: image, description, tech stack, live link |
| `*` | redirect → `/` | |

`src/components/Layout.jsx` wraps all routes (Navbar + `<Outlet/>` + Footer + scroll-to-top on navigation).

### Section Order (`src/pages/Home.jsx`)

1. **Navbar** — fixed top, backdrop-blur, scroll links
2. **Hero** — 3D astronaut model (Three.js), parallax mountains, flip-word heading
3. **About** — bio, tech stack orbits, copy-email button
4. **Projects** — project list with hover preview + detail modals
5. **Experiences** — scroll-driven timeline
6. **Sertivication** — marquee of certificate images (lazy-loaded)
7. **Contact** — currently **commented out** (EmailJS form, fully implemented)
8. **Footer** — social links, copyright (rendered by `Layout.jsx`, not `Home.jsx`)

### Key Directories

- `src/pages/` — routed pages (Home, Portofolio grid, Portofolio detail)
- `src/selections/` — home-page sections (one per file, named after the section)
- `src/components/` — reusable UI components: 3D scenes, animations, card grids, timelines, particle effects
- `src/components/ui/` — shadcn/ui primitives (`card`, `badge`, `button`) themed via CSS variables in `src/index.css`
- `src/lib/utils.js` — shadcn `cn()` helper
- `src/constants/` — content data that drives the portfolio:
  - `data.js` — projects, social links, experience, reviews (the primary data source)
  - `certivicate.js` — certificate filenames
  - `project.json` / `workExperience.json` — secondary data stubs
- `public/models/` — 3D GLTF model files
- `public/assets/` — images grouped by type (logos/, socials/, personal/, projects/, sertivicate/)

### Tech Stack

- **Framework:** React 19, Vite 7, React Router 7 (client-side routing)
- **Styling:** Tailwind CSS v4 (`@import "tailwindcss"` + `@theme` directive), custom color palette defined in `src/index.css`
- **UI kit:** shadcn/ui components (`src/components/ui/`), themed with the site palette through CSS variables (`--background`, `--primary`, etc.) in `src/index.css`
- **3D:** Three.js via `@react-three/fiber` + `@react-three/drei` (astronaut model, particle effects, globe)
- **Animations:** `motion` v12 (`from "motion/react"`) — successor to Framer Motion
- **Email:** `@emailjs/browser` (hardcoded service/template keys in Contact section)

### Data Flow

Content is **constants-driven**. Edit `src/constants/data.js` to update projects, social links, experience entries, or testimonials. New projects, certificates, or images should be added to the relevant array; assets go in `public/assets/` under the appropriate subdirectory.

### Deployment

Docker multi-stage build (`Dockerfile`): `node:26-alpine` builds, `nginx:stable-alpine` serves with an SPA fallback (`nginx.conf` → `try_files ... /index.html`, required for direct URLs like `/portofolio`). `docker-compose.yml` maps host 8888 → container 80.
