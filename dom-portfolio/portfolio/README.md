# Dom DeCarlo — Portfolio

A design-heavy, animation-focused personal portfolio built with **Next.js**, **Tailwind**, and **Motion** (formerly Framer Motion). Smooth scrolling via **Lenis**, custom cursor, parallax depth layers, scroll-triggered reveals, and an editorial "Late Night Studio" aesthetic.

---

## Quick start

```bash
# 1. install
npm install

# 2. run dev server
npm run dev

# 3. open http://localhost:3000
```

## Build

```bash
npm run build
npm start
```

---

## Deploy to Vercel (≈ 30 seconds)

1. Push this folder to a new GitHub repo:
   ```bash
   git init
   git add .
   git commit -m "first commit"
   git remote add origin <your-repo-url>
   git push -u origin main
   ```
2. Go to [vercel.com/new](https://vercel.com/new) → import the repo → click **Deploy**. No config needed.

Your site will be live at `<project>.vercel.app`. To use a custom domain, add it under Project Settings → Domains.

---

## Customizing

Everything you'll want to edit lives in two places:

### `lib/data.ts`
Single source of truth for resume content. Edit projects, experience, coursework, skills, contact info — the whole site updates automatically.

For each project, fill in:
- `github` — the repo URL (renders the "View on GitHub" button on the `/projects` page).
- `site` — uncomment the placeholder line and paste your live URL to reveal a filled "Visit live site" button next to GitHub.
- `tags` — the tech-stack pills shown under the project blurb. Sample values are in place; replace with the real stack per project.

### `public/dom.jpg`
Drop your photo at `public/dom.jpg`. Then in `components/sections/hero.tsx`, replace the `<PhotoCard>` placeholder body with:

```tsx
import Image from "next/image";

<Image
  src="/dom.jpg"
  alt="Dominic DeCarlo"
  fill
  className="object-cover"
  priority
/>
```
(Replace the placeholder div, keep the gradient overlay & meta line.)

### Resume PDF
Save your resume PDF as `public/Dom_Resume.pdf`. The "Download PDF" link on the `/resume` page already points there.

---

## Design tokens

Defined in `app/globals.css` and `tailwind.config.ts`. The site supports **dark** and **light** modes — every color resolves to a CSS variable on `<html data-theme="...">`.

### Dark (default)
| Token         | Value     | Use                              |
|---------------|-----------|----------------------------------|
| `--bg`        | `#0E0C0A` | Background (warm black)          |
| `--bg-2`      | `#15110D` | Elevated surfaces                |
| `--fg`        | `#EDE6D6` | Primary text (cream)             |
| `--fg-dim`    | `#B8AE9D` | Secondary text                   |
| `--accent`    | `#FFB81C` | **Pitt gold** — primary accent   |
| `--muted`     | `#8B8275` | Captions / labels                |
| `--line`      | `#2A2520` | Borders / dividers               |

### Light
| Token         | Value     | Use                                          |
|---------------|-----------|----------------------------------------------|
| `--bg`        | `#F5EFE3` | Background (warm cream)                      |
| `--bg-2`      | `#EAE2D2` | Elevated surfaces                            |
| `--fg`        | `#1F1A14` | Primary text (warm black)                    |
| `--fg-dim`    | `#5C5246` | Secondary text                               |
| `--accent`    | `#8F6500` | Deeper Pitt gold (AA contrast on cream)      |
| `--line`      | `#C8BEA8` | Borders / dividers                           |
| `--line-strong` | `#8C8068` | Stronger borders (GPA dial track, etc.)    |

### Pitt accents (used in education section)
| Token              | Dark / Light              | Use                                                        |
|--------------------|---------------------------|------------------------------------------------------------|
| `--pitt-blue`      | `#1E4FB5` / `#003594`     | GPA dial arc, school label, ribbon, H2P watermark, sweep   |
| `--pitt-blue-strong` | `#003594` / `#002870`   | Reserved for darker accent variants                        |
| `--pitt-gold`      | `#FFB81C` / `#8F6500`     | Ampersand, ribbon, dial accent dot, sweep                  |

The dark mode `--pitt-blue` is the brighter `#1E4FB5` so the navy reads on near-black backgrounds. In light mode it switches to the official `#003594`, which has strong contrast on the cream background.

**Theme toggle**: Sun/moon button in the nav (top right). The choice persists across visits via `localStorage`. A pre-paint inline script in `<head>` reads the saved value and applies `data-theme` *before* React hydrates, so there's no flash of wrong theme.

**Fonts**: Instrument Serif (display) + Geist (body) + JetBrains Mono (labels), all loaded from Google Fonts.

---

## File structure

```
app/
  layout.tsx          # root – grain, cursor, smooth-scroll, nav, ThemeProvider + pre-paint script
  globals.css         # design tokens (dark+light), cursor, marquee, timeline animations, Pitt-underline
  page.tsx            # home page (composes all sections)
  projects/page.tsx   # full project portfolio
  contact/page.tsx    # contact form (mailto)
  resume/page.tsx     # editorial resume
components/
  cursor.tsx          # custom cursor with hover state
  smooth-scroll.tsx   # Lenis wrapper
  nav.tsx             # top nav + scroll progress bar + theme toggle
  theme-provider.tsx  # dark/light state + localStorage persistence
  theme-toggle.tsx    # sun/moon button
  reveal.tsx          # scroll-triggered fade/slide helper
  marquee.tsx         # scrolling text band
  section-bits.tsx    # SectionLabel + DisplayHeading
  sections/
    hero.tsx          # landing
    about.tsx         # about + stats
    education.tsx     # Pitt-accented degree card + animated GPA dial + coursework
    projects-preview.tsx
    experience.tsx    # center-line timeline + alternating cards + campus involvement
    skills.tsx        # opposing icon marquees + iconified category grid
    footer.tsx
lib/
  data.ts             # resume data, including skill icon paths
public/
  img/skills/         # 32 skill icons (Python, TS, React, PyTorch, etc.)
  dom.jpg             # (drop your photo here)
  Dom_Resume.pdf      # (drop your resume here)
```

---

## Animation map

| Element            | Effect                                                              |
|--------------------|---------------------------------------------------------------------|
| Hero text          | Letter-by-letter mask reveal on load (Motion)                       |
| Hero bg orbs       | Parallax-y on scroll (slower than content)                          |
| Photo card         | Mouse-tracking 3D tilt + rotation                                   |
| Page scrolls       | Lenis smooth scroll, all routes                                     |
| Cursor             | Dot + delayed-follow ring, expands on hover                         |
| Top marquee        | CSS infinite horizontal scroll                                      |
| **Theme toggle**   | Sun/moon swap with rotate + scale (Motion `AnimatePresence`)        |
| Sections           | IntersectionObserver fade + slide-up, staggered children            |
| **Pitt education** | Animated GPA dial (Pitt-blue arc fills on view, gold accent dot at the leading edge), blue/gold corner ribbon, H2P watermark fade-in on hover |
| **Coursework chip**| Pitt blue + gold sweep on hover                                     |
| **Experience timeline** | Center dotted line (animated dash-flow), pulsing accent nodes, alternating cards flip in (rotateY + x-offset) |
| Project rows       | Hover: accent-border draw, padding shift, color change              |
| **Skills marquees**| Two opposing rows (left ↔ right), pause on hover, edge fades        |
| **Skill pills**    | Icon + label, accent border on hover                                |
| Nav                | Backdrop-blur on scroll, scroll-progress bar at top                 |

---

## Notes

- The custom cursor hides automatically on screens < 900px (mobile gets normal cursor).
- All routes use the same nav, cursor, grain, and smooth-scroll wrappers via `app/layout.tsx`.
- `motion/react` (rather than legacy `framer-motion`) is the current correct import path.
