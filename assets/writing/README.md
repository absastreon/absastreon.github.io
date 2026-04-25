# Writing screenshots

Drop PNG screenshots here. They are referenced from the writing posts as
`../assets/writing/<filename>.png`.

Recommended sizing:
- Width ~1600px (for retina), height variable
- File size 200-300KB (compress with TinyPNG or similar)
- PNG with transparency where useful

## Currently expected files

### ParkMoto post (`how-i-built-parkmoto.html`)
- `parkmoto-map.png` — main map view, central London with bays visible
- `parkmoto-pricing.png` — bay tap-state showing borough fee rules
- `parkmoto-navigation.png` — navigation chooser (Google Maps / Waze)

### Bastion post (`how-i-built-bastion.html`)
- `bastion-cli.png` — CLI invocation in a clean terminal
- `bastion-scan.png` — scan in progress or just-finished
- `bastion-prompt.png` — fix prompt expanded, paste-ready text

### Lovable-Eject post (`how-i-built-lovable-eject.html`)
- `lovable-eject-terminal.png` — terminal showing the eject in action

## Swapping a placeholder for a real screenshot

In the post HTML, find this block:

```html
<figure class="writing-figure">
  <!-- Replace with: <img src="..." alt="..."> -->
  <div class="figure-placeholder" aria-hidden="true">
    ...
  </div>
  <figcaption>...</figcaption>
</figure>
```

Replace the `<div class="figure-placeholder">...</div>` with the `<img>` tag from
the comment above it (uncomment and use). The figcaption stays as-is.
