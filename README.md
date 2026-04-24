# Portfolio · ABS Astreon

A small static site that lists the things I've built. No build step, no framework, just HTML and CSS. Drop the folder on GitHub Pages and it's live.

## What's in here

```
portfolio/
├── index.html                   # the homepage (live projects + workshop)
├── styles.css                   # stylesheet shared by every page
├── projects/
│   ├── notchwise.html           # detail page with App Store and GitHub links
│   ├── bastion.html             # detail page with CLI install and pricing
│   ├── parkmoto.html            # detail page with map link and OSM info
│   └── lovable-eject.html       # detail page with CLI install and npm
├── assets/
│   ├── avatar.png               # ink portrait used in the hero
│   ├── covers/
│   │   ├── notchwise.svg        # MacBook notch and a flashcard
│   │   ├── bastion.svg          # terminal window and a shield
│   │   ├── parkmoto.svg         # street grid and a pin
│   │   ├── lovable-eject.svg    # eject glyph and CLI line
│   │   ├── orbit.svg            # orbital rings (workshop)
│   │   ├── nebula.svg           # dashboard sketch (workshop)
│   │   └── solis.svg            # engraved sun (workshop)
│   └── screenshots/
│       └── nebula-dashboard.png # actual Nebula screenshot, for reference
└── README.md
```

The only external dependencies are two Google Fonts (Fraunces and JetBrains Mono).

## Deploy to GitHub Pages

### Option A: user site (the clean URL)

Goes live at `https://<your-username>.github.io`.

1. Create a public repo named exactly `<your-username>.github.io`.
2. Push the contents of this folder to it:
   ```bash
   cd portfolio
   git init
   git add .
   git commit -m "Initial portfolio"
   git branch -M main
   git remote add origin git@github.com:<your-username>/<your-username>.github.io.git
   git push -u origin main
   ```
3. In the repo, go to Settings, then Pages. Set the source to "Deploy from a branch", pick `main` and `(root)`.
4. Give it about 30 seconds and you're live.

### Option B: project site

Goes live at `https://<your-username>.github.io/portfolio/`.

1. Create any public repo, push these files.
2. Settings, Pages, deploy from branch `main`, root.

### Custom domain (optional)

1. Buy a domain. Porkbun, Cloudflare, and Namecheap are all around £10 a year.
2. Add a `CNAME` file at the root of the repo with your domain inside (e.g. `portfolio.example.com`).
3. At your DNS provider, add a CNAME record pointing to `<your-username>.github.io`.
4. Back in Settings, Pages, enter the domain in the Custom domain field. Tick "Enforce HTTPS" once the certificate is ready (usually a few minutes).

## Customising it

### Name and links

Find and replace these across every `.html` file:

- `ABS Astreon` becomes your name
- `absastreon` becomes your GitHub username
- `ABS-Projects-2026` becomes your org, if you have one
- `hello@example.com` becomes your email
- The two `href="#"` placeholders (Twitter and LinkedIn) become your actual URLs

### The hero headline

Edit the `<h1>` inside `<section class="hero">` in `index.html`. The `<em>` wraps the italic accent word, which is also the word that turns red.

### The portrait

Swap `assets/avatar.png` for your own. It works best as a portrait-orientation image on a neutral background. The CSS uses `mix-blend-mode: multiply` so the image blends into the paper colour of the page. If your image has a pure white or coloured background, remove that line from `.hero-avatar img` in `styles.css`.

You can also turn the portrait into a favicon. Convert it to a square ICO (favicon.io is the easiest way) and drop `favicon.ico` at the repo root.

### Editing the workshop

The three cards under `<section id="workshop">` are for projects that aren't public yet. Edit the title, number, description, and stack tags directly in `index.html`. Each card uses its own cover plate from `assets/covers/`. When one of them goes live, swap the cover for a screenshot and move the card into the main `<div class="projects">` section with its own detail page.

### The Nebula screenshot

There's a real screenshot of Nebula at `assets/screenshots/nebula-dashboard.png`. When Nebula goes live, you have two options:

- Use the screenshot as the cover. Change the `<img src>` to point at it. The 16:9 crop sits nicely in the 3:2 cover frame.
- Keep the editorial cover plate for consistency, and put the screenshot inside the detail page prose instead.

### Adding a new project

First, add a cover. Copy one of the SVGs in `assets/covers/` and edit it, or use a screenshot. Anything around 3:2 will look right on the index.

Then add the project card to `index.html`. Copy any `<a class="project">` block inside `<div class="projects">`:

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
    <p class="project-description">One or two sentences.</p>
    <div class="project-stack">
      <span>Tag</span>
      <span>Tag</span>
    </div>
    <span class="project-cta">Read more <span class="arrow">&rarr;</span></span>
  </div>
</a>
```

Finally, create the detail page. Copy one of the existing ones (say `projects/notchwise.html`) and edit the `<title>`, the `<meta>` tags, the `.detail-meta` row, the title and tagline, the cover image path, the prose, the features list, the stack tags, and the links grid. Point the `.next-project` link at the bottom to whichever project should come next.

### Swapping SVG covers for screenshots

The SVG plates are there so the site looks finished on day one. When you're ready to use real screenshots:

1. Take a screenshot at about 1800 by 1200 pixels (3:2 ratio looks right in the frame).
2. Save it to `assets/covers/`, e.g. `notchwise.png`.
3. Update the `<img src>` in both `index.html` and the detail page.

The cover container uses `object-fit: cover`, so most aspect ratios will work.

### Colours and fonts

Most of what you'd want to change lives at the top of `styles.css`:

```css
:root {
  --paper: #f1ebdd;     /* page background */
  --ink: #1a1814;       /* main text colour */
  --accent: #a6421c;    /* the letterpress red */
  --serif: "Fraunces", "Georgia", serif;
  --mono: "JetBrains Mono", ui-monospace, monospace;
}
```

Change the accent colour and the whole site shifts mood. A cool grey like `#1e4d6b` works well, as does a deep green like `#3a5a3a` or a navy like `#1a2e52`.

## Link card glyphs

Each link card on a detail page has a small glyph next to it. The ones I've used:

| Glyph | For |
|-------|-----|
| `↗` | external site or main project URL |
| `{ }` | GitHub |
| `` | App Store |
| `▶` | demo or play |
| `✎` | blog post or writing |
| `⎉` | privacy policy |
| `§` | terms or legal |
| `✓` | checklist or free tool |
| `£` or `$` | pricing |
| `◨` | dashboard or app |
| `◎` | map or location |
| `⊕` | contribute or fork |
| `◼` | package registry |

Any single Unicode character works. Keep them to one character so they line up in the grid.

## Worth doing after you're live

1. Set up a profile README. Create a repo called `<your-username>/<your-username>` with a README.md inside. It shows up on your GitHub profile page. Link it to this portfolio. Takes five minutes.
2. Pin your best repos on your GitHub profile. There's a "Customize your pins" button on the profile page.
3. Add an OG image. Drop `og.png` (1200 by 630 pixels) in the repo and add `<meta property="og:image" content="og.png" />` to each page's `<head>`. It's the difference between a plain link preview and one that looks like a real site.
4. Add a favicon. A small `favicon.ico` or `favicon.svg` at the root, referenced in the `<head>` with `<link rel="icon" href="/favicon.svg" type="image/svg+xml">`.

## Tech notes

No build step. Plain HTML and CSS that you can open from a file URL.

About 45KB total, not counting the fonts. One stylesheet, cached across every page.

It respects `prefers-reduced-motion`, works down to 320px wide, and uses semantic HTML throughout. The project titles use Fraunces' variable axes (OPSZ, SOFT, WONK) for the italic accents.

## Changelog

- **v1.3** Rewrote all copy to sound less like it came out of a marketing handbook.
- **v1.2** Added the portrait to the hero, replaced the bench placeholders with a three-card workshop section (Orbit, Nebula, Solis), added cover plates for all three. Renamed the nav item to Workshop.
- **v1.1** Added detail pages, SVG cover plates, a shared stylesheet, and the links grid with project-specific destinations.
- **v1.0** First version, a single file.

## License

Do whatever you like with it.
