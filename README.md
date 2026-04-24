# Portfolio — ABS Astreon

A multi-page, zero-build portfolio site. Editorial/archival aesthetic: warm paper palette, Fraunces serif display, JetBrains Mono for technical captions, hand-composed SVG cover plates for each project.

## What's in the box

```
portfolio/
├── index.html                   # catalogue (live projects + workshop)
├── styles.css                   # shared stylesheet for all pages
├── projects/
│   ├── notchwise.html           # detail page: App Store, GitHub, blog links
│   ├── bastion.html             # detail page: CLI install, GitHub, pricing
│   ├── parkmoto.html            # detail page: map launch, OSM, policies
│   └── lovable-eject.html       # detail page: CLI install, GitHub, npm
├── assets/
│   ├── avatar.png               # ink portrait used in hero
│   ├── covers/
│   │   ├── notchwise.svg        # MacBook notch + flashcard plate
│   │   ├── bastion.svg          # terminal + shield plate
│   │   ├── parkmoto.svg         # street grid + pin plate
│   │   ├── lovable-eject.svg    # eject glyph + CLI plate
│   │   ├── orbit.svg            # orbital rings + financial glyphs (workshop)
│   │   ├── nebula.svg           # dashboard + reticle (workshop)
│   │   └── solis.svg            # engraved sun + widgets (workshop)
│   └── screenshots/
│       └── nebula-dashboard.png # full Nebula dashboard screenshot (reference)
└── README.md
```

No build step, no dependencies beyond two Google Fonts. Upload the folder to GitHub Pages and you're live.

## Deploy to GitHub Pages

### Option A — Root user site (recommended)

Clean URL: `https://<your-username>.github.io`

1. Create a public repo named **exactly** `<your-username>.github.io`.
2. Push the entire `portfolio/` contents to the repo root:
   ```bash
   cd portfolio
   git init
   git add .
   git commit -m "Initial portfolio"
   git branch -M main
   git remote add origin git@github.com:<your-username>/<your-username>.github.io.git
   git push -u origin main
   ```
3. In the repo → **Settings → Pages** → source: `Deploy from a branch → main / (root)`.
4. Live at `https://<your-username>.github.io` in ~30 seconds.

### Option B — Project site

Live at `https://<your-username>.github.io/portfolio/`.

1. Create any public repo (e.g. `portfolio`), push these files.
2. **Settings → Pages → Deploy from branch → main / (root)**.

### Optional — Custom domain

1. Buy a domain (Porkbun, Cloudflare, Namecheap — ~£10/yr).
2. Add a `CNAME` file to the repo root containing just your domain (e.g. `portfolio.example.com`).
3. At your DNS provider, add a `CNAME` record pointing to `<your-username>.github.io`.
4. **Settings → Pages → Custom domain** → paste the domain. Tick "Enforce HTTPS" once the cert issues (~5 min).

## Customising

### Your name & identity

Search-and-replace these across all `.html` files:

- `ABS Astreon` → your name or studio name
- `absastreon` → your GitHub handle
- `ABS-Projects-2026` → your org name (if any)
- `hello@example.com` → your email
- Twitter / LinkedIn `href="#"` → your actual URLs

### The hero headline

Edit the `<h1>` inside `<section class="hero">` in `index.html`. The `<em>` wraps the italic accent word (it also turns red via the accent colour).

### The maker portrait

Swap `assets/avatar.png` for any portrait — works best as a roughly portrait-orientation image on a light/neutral background. The CSS applies `mix-blend-mode: multiply` so the image integrates with the paper background; if your portrait has a pure white or coloured background, remove that line from `.hero-avatar img` in `styles.css`.

You can also use the portrait as your **favicon** — convert to a small square ICO (e.g. via [favicon.io](https://favicon.io)) and drop `favicon.ico` in the repo root.

### Editing workshop cards

The three cards in `<section id="workshop">` are for local/in-dev projects. Edit the title, meta (`05`, `In development`), description, and stack tags directly in `index.html`. Each uses its own cover plate at `assets/covers/<name>.svg` — swap for a screenshot when the project goes live, then promote it into the `<div class="projects">` section with a detail page.

### Nebula's real screenshot

The actual Nebula dashboard screenshot lives at `assets/screenshots/nebula-dashboard.png` for reference. When Nebula goes live, either:

- **Replace the SVG cover** directly: `<img src="assets/screenshots/nebula-dashboard.png" ...>` — the 16:9 crop looks great in the 3:2 cover frame.
- **Or keep the editorial plate** for visual consistency and embed the screenshot inside the detail page prose instead.

### Adding a new project

**1. Add a cover plate.** Copy one of the existing SVGs in `assets/covers/` as a starting point, or drop in a PNG/JPG screenshot of your project — e.g. `assets/covers/new-project.png`. Keep the aspect ratio around 3:2 for consistency on the index.

**2. Add the project card to `index.html`.** Copy any `<a class="project">` block in the `<div class="projects">` section:

```html
<a class="project" href="projects/new-project.html">
  <div class="project-cover">
    <img src="assets/covers/new-project.svg" alt="New Project cover" loading="lazy" />
  </div>
  <div class="project-content">
    <p class="project-meta-row">
      <span class="num">05</span>
      <span class="sep"></span>
      <span>MMXXVI</span>
      <span class="sep"></span>
      <span class="live">Live · Web</span>
    </p>
    <h3 class="project-title">New <em>Project</em></h3>
    <p class="project-description">One or two sentences…</p>
    <div class="project-stack">
      <span>Tag</span>
      <span>Tag</span>
    </div>
    <span class="project-cta">Open the record <span class="arrow">→</span></span>
  </div>
</a>
```

**3. Create the detail page.** Copy one of the existing detail pages (e.g. `projects/notchwise.html`) as a starting template and edit:

- `<title>` and `<meta>` in `<head>`
- `.detail-meta` row (number, year, status, tags)
- `.detail-title` and `.detail-tagline`
- Cover `<img src="../assets/covers/...">`
- "The work" prose
- Features list
- Stack tags
- Links grid — this is where project-specific links live (App Store, GitHub, npm, docs, etc.)
- `.next-project` link at the bottom — point to the next detail page for easy navigation

### Replacing SVG covers with real screenshots

The SVG plates are designed to look complete on day one. When you're ready to swap in real screenshots:

1. Take a clean screenshot of each project (1800×1200px is a good size, 3:2 ratio).
2. Save as `assets/covers/notchwise.png` (or `.jpg`).
3. Update the `<img src>` in both `index.html` and the detail page to point to the new file.

The `.project-cover` class crops with `object-fit: cover`, so any aspect-ratio-reasonable image works.

### Tweaking the aesthetic

All colours, fonts, spacing live at the top of `styles.css` in `:root`:

```css
:root {
  --paper: #f1ebdd;          /* page background */
  --ink: #1a1814;            /* primary text */
  --accent: #a6421c;         /* letterpress red */
  --serif: "Fraunces", ...;  /* display font */
  --mono: "JetBrains Mono";  /* technical captions */
}
```

Swap the accent to change the overall mood in one edit. For a cool-grey variant try `#1e4d6b`, for a deep green `#3a5a3a`, for a navy `#1a2e52`.

## Extending — link card glyphs

Each `link-card` in the detail pages shows a small glyph beside the link. Current set:

| Glyph | Use for |
|-------|---------|
| `↗` | external site / main project URL |
| `{ }` | GitHub source / repo |
| `` | App Store |
| `▶` | demo / play |
| `✎` | blog post / writing |
| `⎉` | privacy policy |
| `§` | terms / legal |
| `✓` | checklist / free tool |
| `£` / `$` | pricing |
| `◨` | dashboard / app |
| `◎` | map / location |
| `⊕` | contribute / fork |
| `◼` | package registry |

Any Unicode symbol works — keep them to one character for consistency.

## Also worth doing

1. **Profile README.** Create a repo called `<your-username>/<your-username>` with a README.md — it renders on your GitHub profile page. Link it to this portfolio. Five-minute task, big visibility win.
2. **Pin your best repos** on your GitHub profile (click "Customize your pins").
3. **OG image.** Drop a `og.png` (1200×630) into the root and add `<meta property="og:image" content="og.png" />` to each page's `<head>`. Link previews go from plain to professional.
4. **Favicon.** Add `favicon.ico` or `favicon.svg`, reference in `<head>`: `<link rel="icon" href="/favicon.svg" type="image/svg+xml">`.

## Tech notes

- **No build step.** Pure HTML/CSS, drag-and-drop hostable.
- **~45KB total** (excluding fonts), one stylesheet cached across all pages.
- **Respects `prefers-reduced-motion`.**
- **Responsive** from 320px upward.
- **Semantic HTML** throughout — good for screen readers and SEO.
- **Uses Fraunces' variable axes** (OPSZ, SOFT, WONK) for the italic accents you see in the project titles.

## Changelog

- **v1.2** — Added maker portrait to the hero, replaced bench placeholders with a proper "In the workshop" section featuring three local-only projects (Orbit, Nebula, Solis) with full cover plates. Nav renamed Workshop.
- **v1.1** — Added detail pages per project, SVG cover plates, shared stylesheet, links grid with project-specific destinations.
- **v1.0** — Initial single-file portfolio.

## License

Do whatever you like with this.
