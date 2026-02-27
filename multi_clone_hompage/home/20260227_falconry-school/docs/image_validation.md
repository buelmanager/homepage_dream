# Image Validation — TALON Ancient Falconry School

**Template:** `20260227_falconry-school`
**Date:** 2026-02-27

---

## Image Strategy

This template uses **local image placeholders only**. All image references use relative paths to local files in the `images/` folder. No external Unsplash or CDN URLs are embedded in the HTML.

---

## Required Images

All images must be placed in:
`multi_clone_hompage/home/20260227_falconry-school/images/`

| Filename | Usage | Recommended Dimensions |
|---|---|---|
| `hero-1.webp` | Hero background (index.html), programs hero bg | 1920×1080 min |
| `hero-2.webp` | Master Falconer portrait, mews section, image break (process.html) | 900×1200 |
| `hero-3.webp` | Heritage section portrait, process.html hero bg | 900×1200 |
| `hero-4.webp` | About hero bg, contact bg accent | 1920×1080 min |
| `product-1.webp` | Beginner Course program card | 800×600 |
| `product-2.webp` | Advanced Hawking program card | 800×600 |
| `product-3.webp` | Mews weathering ground | 600×600 |
| `product-4.webp` | Private Sessions program card | 800×600 |
| `ambient-1.webp` | Medieval Hunt card, team card 1 | 800×600 |
| `ambient-2.webp` | Mews tall image, team card 2 | 600×1200 |
| `ambient-3.webp` | Team card 3 | 800×1000 |
| `thumbnail.webp` | Template manifest thumbnail | 600px wide |

---

## Image Content Guidelines

Suggested subject matter for placeholder acquisition:

| File | Suggested Content |
|---|---|
| `hero-1.webp` | Falcon in flight, dramatic sky, aerial |
| `hero-2.webp` | Falconer with bird on glove, low angle |
| `hero-3.webp` | Stone mews exterior, moorland |
| `hero-4.webp` | Wide estate landscape, golden hour |
| `product-1.webp` | Harris Hawk close-up, side profile |
| `product-2.webp` | Peregrine in stoop or perched |
| `product-3.webp` | Traditional leather equipment (hood, glove, jesses) |
| `product-4.webp` | Falconer and bird, one-to-one moment |
| `ambient-1.webp` | Moorland landscape, hunting terrain |
| `ambient-2.webp` | Stone architecture, medieval estate |
| `ambient-3.webp` | Bird perched on bow perch, weathering ground |

---

## Thumbnail Generation

After placing images:

```bash
# Generate thumbnail.webp from a hero or collection image
cwebp -q 80 -resize 600 0 \
  multi_clone_hompage/home/20260227_falconry-school/images/hero-1.webp \
  -o multi_clone_hompage/home/20260227_falconry-school/images/thumbnail.webp

# If starting from JPG
cwebp -q 80 -resize 600 0 \
  multi_clone_hompage/home/20260227_falconry-school/images/hero-1.jpg \
  -o multi_clone_hompage/home/20260227_falconry-school/images/thumbnail.webp
```

---

## Validation Status

| File | Status |
|---|---|
| All image paths | Local — no external URL to validate |
| No Unsplash IDs used | Confirmed |
| No broken CDN images | Confirmed |
| `thumbnail.webp` | Required before manifest generation |

---

## Notes

- No face closeups of real individuals should be used
- All images should be licensed for commercial use
- Minimum file size for hero images: 400KB (avoid pixelation at 1920px wide)
- Maximum file size per image: 500KB (WebP at quality 80 achieves this)
- Run `npm run generate-manifest` after placing `thumbnail.webp`
