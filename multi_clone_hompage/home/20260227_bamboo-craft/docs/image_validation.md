# Image Validation — TAKE Bamboo Craft Atelier

**Template:** `20260227_bamboo-craft`
**Date:** 2026-02-27

## Image Strategy

This template uses **local image paths only**. No external image URLs (Unsplash, Pexels, etc.) are embedded in any HTML file. All `<img>` tags and CSS `background-image` properties reference the local `images/` directory.

## Required Image Files

All images must be in **WebP format** at the specified local paths:

| Path | Used In | Recommended Subject |
|---|---|---|
| `images/hero-1.webp` | index.html (hero bg), collection.html (furniture), process.html (intro) | Bamboo grove or workshop wide shot |
| `images/hero-2.webp` | index.html (heritage grid), collection.html (furniture 2), process.html (harvesting) | Arashiyama bamboo grove or craftsman at work |
| `images/hero-3.webp` | about.html (master portrait), collection.html (vases 1), contact.html (visit) | Craftsman hands or workshop detail |
| `images/hero-4.webp` | about.html (kyoto grid), collection.html (vases 2) | Kyoto landscape or bamboo exterior |
| `images/product-1.webp` | index.html (collection 1), collection.html (baskets, screens 1) | Woven bamboo basket |
| `images/product-2.webp` | index.html (collection 2), collection.html (baskets 2, screens 2) | Bamboo tea utensils or market basket |
| `images/product-3.webp` | index.html (collection 3), collection.html (tea 1, screens 3) | Bamboo flower vase or chasen |
| `images/product-4.webp` | about.html (kyoto grid 3), collection.html (tea 2), process.html (finishing), collection featured | Bamboo tea scoop or finished piece detail |
| `images/ambient-1.webp` | index.html (workshop), collection.html (baskets 3, furniture 3), process.html (drying) | Workshop interior or drying bamboo |
| `images/ambient-2.webp` | index.html (heritage grid), collection.html (tea 3), process.html (splitting) | Craftsman splitting bamboo or close-up tools |
| `images/ambient-3.webp` | index.html (heritage grid), collection.html (vases 3), process.html (weaving) | Weaving close-up or bamboo strip detail |
| `images/thumbnail.webp` | meta.json, manifest | Hero composite — 600px wide max |

## Thumbnail Generation

After adding source images, generate the thumbnail:

```bash
# Using cwebp
cwebp -q 80 -resize 600 0 \
  multi_clone_hompage/home/20260227_bamboo-craft/images/hero-1.webp \
  -o multi_clone_hompage/home/20260227_bamboo-craft/images/thumbnail.webp

# Or from a screenshot (fullpage.png)
cwebp -q 80 -resize 600 0 \
  multi_clone_hompage/home/20260227_bamboo-craft/images/fullpage.png \
  -o multi_clone_hompage/home/20260227_bamboo-craft/images/thumbnail.webp
```

## Image Quality Requirements

- Minimum resolution: 1200px wide for hero images
- Minimum resolution: 800px wide for product images
- Format: WebP preferred; JPEG acceptable as fallback
- File size target: Under 300KB per image after compression
- Aspect ratios expected by CSS:
  - Hero background: any (full-cover)
  - Workshop image: 3:4 portrait
  - Heritage images: 1:1 square (2) + 16:9 landscape (1 spanning 2 cols)
  - Collection items: 4:3 landscape
  - Featured piece: 3:4 portrait
  - Master portrait: 3:4 portrait

## Validated External URLs

No external image URLs are used in this template. If adding Unsplash URLs in future, validate with:

```bash
curl -I "https://images.unsplash.com/photo-{ID}?w=1200&auto=format&fit=crop"
```

Only embed after confirming HTTP 200 response.

## Git Deployment Rules

- `thumbnail.webp` — INCLUDE in git (small, needed for manifest)
- `thumbnail.jpg` — EXCLUDE (in .gitignore)
- `fullpage.png` — EXCLUDE (300MB+, in .gitignore)
- `images/*.webp` (hero/product/ambient) — INCLUDE if under 500KB each
- `/public/templates/` — EXCLUDE (auto-generated at build time)
