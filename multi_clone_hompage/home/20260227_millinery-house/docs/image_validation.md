# Image Validation — CHAPEAU NOIR Millinery House

## Image Asset Requirements

All images referenced in this template are **local assets** stored in the `images/` directory. No external Unsplash or CDN image URLs are used.

## Required Images

| File | Used In | Description |
|------|---------|-------------|
| `images/hero-1.webp` | index.html (hero layer-1), used as layer background | Millinery scene — hat/atelier atmosphere, landscape orientation |
| `images/hero-2.webp` | index.html (hero layer-2, fading layer) | Second millinery scene for parallax fade cycle |
| `images/hero-3.webp` | collection.html (featured banner) | Fedora Noir featured piece image |
| `images/hero-4.webp` | contact.html (page hero right column) | Client consultation / hat presentation scene |
| `images/product-1.webp` | index.html, collection.html, process.html, about.html | Hat product — dark fascinator or structured hat |
| `images/product-2.webp` | index.html, collection.html | Hat product — second colourway or style |
| `images/product-3.webp` | index.html, collection.html | Hat product — third style (wide-brim or bridal) |
| `images/product-4.webp` | index.html, collection.html, process.html | Hat product — fourth style (fedora or embellished) |
| `images/ambient-1.webp` | index.html (atelier section), about.html (founder + team) | Atelier interior or milliner at work |
| `images/ambient-2.webp` | about.html (heritage, team), process.html (blocking step) | Heritage or workshop scene |
| `images/ambient-3.webp` | about.html (team), process.html (hero bg + shaping step) | Third atelier/craft scene |
| `images/thumbnail.webp` | meta.json, manifest | 600px-wide thumbnail of the site (required for deployment) |

## Thumbnail Generation

When local images are available, generate `thumbnail.webp` with:

```bash
# Capture fullpage screenshot first
python3 scripts/capture-page.py 20260227_millinery-house

# Convert to webp thumbnail
cwebp -q 80 -resize 600 0 \
  multi_clone_hompage/home/20260227_millinery-house/images/thumbnail.jpg \
  -o multi_clone_hompage/home/20260227_millinery-house/images/thumbnail.webp
```

**Critical:** Only `thumbnail.webp` should be committed to git. `thumbnail.jpg` and `fullpage.png` are gitignored.

## Image Orientation Guidelines

For best visual results with this template:

| Usage | Ideal Aspect Ratio | Min Resolution |
|-------|-------------------|----------------|
| Hero backgrounds (hero-1 to hero-4) | 16:9 or wider | 1920×1080 |
| Product images (product-1 to product-4) | 3:4 (portrait) | 800×1067 |
| Ambient/atelier images (ambient-1 to ambient-3) | 4:3 or 3:4 | 1200×900 |

## Placeholder Fallback Behaviour

If image files are missing, elements will display as:
- Hero layers: solid `var(--surface2)` background (dark grey)
- Product cards: `var(--surface2)` background with `aspect-ratio: 3/4` preserved
- Ambient images: `var(--surface)` background

No broken image icons will appear as alt text is set and no `src` produces an error that breaks layout.

## Alt Text Standard

All images in this template follow the pattern:
`[Subject description] — [context or photographer credit if known]`

Example: `"Chapeau Noir Paris atelier — master milliner at the blocking stand"`
