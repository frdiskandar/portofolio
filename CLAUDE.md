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

A single-page React 19 portfolio app. There is **no client-side router** — navigation is smooth-scroll via `react-scroll`. All sections render sequentially in one page.

### Section Order (`src/App.jsx`)

1. **Navbar** — fixed top, backdrop-blur, scroll links
2. **Hero** — 3D astronaut model (Three.js), parallax mountains, flip-word heading
3. **About** — bio, tech stack orbits, copy-email button
4. **Projects** — project list with hover preview + detail modals
5. **Experiences** — scroll-driven timeline
6. **Sertivication** — marquee of certificate images (lazy-loaded)
7. **Contact** — currently **commented out** (EmailJS form, fully implemented)
8. **Footer** — social links, copyright

### Key Directories

- `src/selections/` — full-page sections (one per file, named after the section)
- `src/components/` — reusable UI components (19 files): 3D scenes, animations, cards, timelines, particle effects
- `src/constants/` — content data that drives the portfolio:
  - `data.js` — projects, social links, experience, reviews (the primary data source)
  - `certivicate.js` — certificate filenames
  - `project.json` / `workExperience.json` — secondary data stubs
- `public/models/` — 3D GLTF model files
- `public/assets/` — images grouped by type (logos/, socials/, personal/, projects/, sertivicate/)

### Tech Stack

- **Framework:** React 19, Vite 7
- **Styling:** Tailwind CSS v4 (`@import "tailwindcss"` + `@theme` directive), custom color palette defined in `src/index.css`
- **3D:** Three.js via `@react-three/fiber` + `@react-three/drei` (astronaut model, particle effects, globe)
- **Animations:** `motion` v12 (`from "motion/react"`) — successor to Framer Motion
- **Email:** `@emailjs/browser` (hardcoded service/template keys in Contact section)

### Data Flow

Content is **constants-driven**. Edit `src/constants/data.js` to update projects, social links, experience entries, or testimonials. New projects, certificates, or images should be added to the relevant array; assets go in `public/assets/` under the appropriate subdirectory.

### Deployment

Docker multi-stage build (`Dockerfile`): `node:20-alpine` builds, `nginx:stable-alpine` serves. `docker-compose.yml` maps host 8080 → container 80.
