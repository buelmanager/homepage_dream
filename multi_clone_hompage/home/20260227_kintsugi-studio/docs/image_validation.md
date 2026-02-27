# Image Validation — WABI Kintsugi Studio

**Template**: 20260227_kintsugi-studio
**Date**: 2026-02-27

---

## Image Strategy

This template uses **local image paths only** — no external Unsplash URLs embedded in HTML. All `<img>` tags and CSS `background-image` properties reference local files in the `images/` directory.

This approach eliminates the Unsplash URL validation problem entirely. No 404 risk, no broken images in production.

---

## Required Images

The following images must be placed in `images/` before the template goes live:

### Hero / Background Images

| Filename | Usage | Recommended Content |
|----------|-------|---------------------|
| `hero-1.webp` | index.html hero background | Dark ceramic workshop, kiln, or abstract gold/clay texture |
| `hero-2.webp` | Heritage section / about.html founder portrait | Aged Japanese pottery, Kyoto temple, or ceramic craft |
| `hero-3.webp` | Contact page map placeholder / about.html | Studio interior, hands working with clay or gold |
| `hero-4.webp` | Contact page hero background | Dark atmospheric ceramics or gold powder |

### Product / Service Images

| Filename | Usage | Recommended Content |
|----------|-------|---------------------|
| `product-1.webp` | Emergency Repair service card | Close-up of broken ceramic fragment |
| `product-2.webp` | Full Restoration service card | Gold-repaired kintsugi seam detail |
| `product-3.webp` | Workshops service card | Hands working with ceramic or gold powder |
| `product-4.webp` | Gold Type Selection service card | Gold/silver metallic surfaces or powder |

### Ambient Images

| Filename | Usage | Recommended Content |
|----------|-------|---------------------|
| `ambient-1.webp` | index.html commission section background / process.html urushi stage | Dark atmospheric studio shot |
| `ambient-2.webp` | index.html studio section main image / collection.html workshop | Studio interior or tools |
| `ambient-3.webp` | index.html studio section accent image / process.html gold stage | Ceramic detail or gold application |

### Thumbnail

| Filename | Usage | Dimensions |
|----------|-------|------------|
| `thumbnail.webp` | Template gallery thumbnail | 600px wide, auto height |

---

## Thumbnail Generation

Once `images/thumbnail.jpg` exists (captured via `capture-page.py`):

```bash
cwebp -q 80 -resize 600 0 \
  multi_clone_hompage/home/20260227_kintsugi-studio/images/thumbnail.jpg \
  -o multi_clone_hompage/home/20260227_kintsugi-studio/images/thumbnail.webp
```

**Note**: `thumbnail.jpg` is in `.gitignore` — only `thumbnail.webp` is committed to git.

---

## Image Sourcing Guidelines

When sourcing images for this template:

1. **No face closeups** — avoid images where a specific individual's face is the primary subject
2. **No individual profile photos** — use craft/material/environment shots
3. **Dark, atmospheric aesthetic** — images should filter well to brightness(0.3–0.7)
4. **Ceramic, gold, clay, lacquer** — content should match the kintsugi theme
5. **Validate before use** — confirm `curl -I {url}` returns HTTP 200 before embedding any external URL

### Suggested Unsplash Search Terms
- "kintsugi gold ceramic"
- "japanese pottery workshop"
- "ceramic kiln dark"
- "gold powder texture"
- "lacquer japanese craft"
- "broken pottery repair"
- "wabi sabi ceramic"

---

## CSS Background Images

`background-image: url('images/...')` is used in:
- `index.html` — `.hero-bg` (hero-1.webp), `.commission-section::before` (ambient-1.webp)
- `contact.html` — `.page-hero-bg` (hero-4.webp)

All other images are `<img>` tags with explicit `alt` text.

---

## Accessibility

All `<img>` elements include descriptive `alt` text. Background decorative images have no alt text (correct pattern for purely decorative backgrounds). The `loading="lazy"` attribute is applied to all below-fold images.

---

## Validation Status

- Local image paths: no URL validation needed
- External CDN resources validated at build:
  - GSAP 3.12.2 cdnjs: confirmed available
  - Swiper 11 jsdelivr: confirmed available
  - Google Fonts EB Garamond + Nunito: confirmed available
