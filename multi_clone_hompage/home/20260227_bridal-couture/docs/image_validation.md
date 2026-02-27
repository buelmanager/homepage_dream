# Image Validation — ALBA Bridal Couture

## Template: `20260227_bridal-couture`
## Date: 2026-02-27

---

## Image Strategy

This template uses **local image paths** exclusively. All `<img>` tags reference files in the `images/` directory relative to each HTML file. No external Unsplash URLs are embedded in the production HTML.

This approach was chosen to:
1. Avoid broken image links due to Unsplash API changes or CDN outages
2. Allow operators to replace placeholder images with licensed photography without code changes
3. Ensure consistent rendering in offline or development environments

---

## Required Local Images

The following image files must be present in `images/` for the template to render correctly:

| Filename | Used In | Description | Aspect Ratio |
|---|---|---|---|
| `hero-1.webp` | `index.html` hero bg | Primary bridal hero — full-width editorial | 16:9 landscape |
| `hero-2.webp` | `about.html`, `collection.html` | Isabelle Morel / designer portrait | 3:4 portrait |
| `hero-3.webp` | `about.html`, `collection.html` | Camille Morel / designer portrait | 3:4 portrait |
| `hero-4.webp` | `about.html`, `collection.html` | Arnaud Leclerc / artisan portrait | 3:4 portrait |
| `product-1.webp` | `index.html`, `collection.html` | Classic Eternal gown | 2:3 portrait |
| `product-2.webp` | `collection.html`, `process.html` | Modern Romance gown | 2:3 portrait |
| `product-3.webp` | `collection.html`, `process.html` | Bohemian Reverie gown | 2:3 portrait |
| `product-4.webp` | `collection.html`, `process.html` | Princess Grace gown | 2:3 portrait |
| `ambient-1.webp` | Multiple pages | Atelier interior / workroom | 4:3 or 3:4 |
| `ambient-2.webp` | Multiple pages | Craft detail / hands / draping | 1:1 or 4:3 |
| `ambient-3.webp` | Multiple pages | Heritage / atelier lifestyle | 3:4 portrait |
| `thumbnail.webp` | meta.json | Template preview thumbnail | 600×400px |

---

## Recommended Unsplash Image Sources

The following Unsplash photo IDs are confirmed valid (HTTP 200) and appropriate for each usage. These can be used to populate the `images/` folder during development or screenshot generation.

### Hero Images (hero-1 through hero-4)
- `photo-1582719508461-905c673771fd` — bridal editorial, white gown → **hero-1.webp**
- `photo-1515886657613-9f3515b0c78f` — fashion editorial, woman, elegant → **hero-2.webp**
- `photo-1490481651871-ab68de25d43d` — bridal/fashion portrait → **hero-3.webp**
- `photo-1524504388940-b1c1722653e1` — woman, editorial portrait → **hero-4.webp**

### Product / Gown Images (product-1 through product-4)
- `photo-1551488831-00ddcb6c6bd3` — white dress detail, editorial → **product-1.webp**
- `photo-1469334031218-e382a71b716b` — bridal / white dress → **product-2.webp**
- `photo-1485125639709-a60c3a500bf1` — dress detail, fabric → **product-3.webp**
- `photo-1558618666-fcd25c85cd64` — fabric detail, luxury → **product-4.webp**

### Ambient / Atelier Images (ambient-1 through ambient-3)
- `photo-1529958030586-3aae4ca485ff` — interior, craft workshop → **ambient-1.webp**
- `photo-1512327536842-5aa37d1ba3e3` — craft, hands, detail work → **ambient-2.webp**
- `photo-1503342394128-c104d54dba01` — interior light, workspace → **ambient-3.webp**

---

## Thumbnail Generation

The thumbnail should be generated at 600×400px from the index.html page after local images are placed:

```bash
# Take fullpage screenshot
python3 scripts/capture-page.py 20260227_bridal-couture

# Convert to thumbnail.webp
cwebp -q 80 -resize 600 0 \
  multi_clone_hompage/home/20260227_bridal-couture/images/thumbnail.jpg \
  -o multi_clone_hompage/home/20260227_bridal-couture/images/thumbnail.webp
```

Note: `thumbnail.jpg` → gitignore (do not commit). Only `thumbnail.webp` is committed.

---

## Content Constraints

All image selections must satisfy:
- No individual face close-ups in hero or large format positions
- No recognisable individuals who have not consented to editorial use
- No images of real people presented as fictional characters (Isabelle Morel, Camille Morel, Arnaud Leclerc)
- For portraits: use images that read as "designer" or "artisan" without showing identifiable faces clearly
- No images that depict actual weddings or religious ceremonies (brand is aspirational, not documentary)

---

## Validation Status

| Image | Status | Note |
|---|---|---|
| hero-1.webp | PLACEHOLDER | Awaiting local file placement |
| hero-2.webp | PLACEHOLDER | Awaiting local file placement |
| hero-3.webp | PLACEHOLDER | Awaiting local file placement |
| hero-4.webp | PLACEHOLDER | Awaiting local file placement |
| product-1.webp | PLACEHOLDER | Awaiting local file placement |
| product-2.webp | PLACEHOLDER | Awaiting local file placement |
| product-3.webp | PLACEHOLDER | Awaiting local file placement |
| product-4.webp | PLACEHOLDER | Awaiting local file placement |
| ambient-1.webp | PLACEHOLDER | Awaiting local file placement |
| ambient-2.webp | PLACEHOLDER | Awaiting local file placement |
| ambient-3.webp | PLACEHOLDER | Awaiting local file placement |
| thumbnail.webp | PENDING | Generate after images are placed |

All HTML files use `loading="lazy"` on below-fold images for performance.
Background image for hero is CSS-linked via `background-image: url()` — no `<img>` tag, so no lazy loading applies; this is loaded immediately as part of hero rendering.
