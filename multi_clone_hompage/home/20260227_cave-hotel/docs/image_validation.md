# Image Validation — GROTTO Cave Hotel

**Template:** `20260227_cave-hotel`
**Date:** 2026-02-27
**Status:** Local images — no Unsplash URLs embedded

---

## Image Strategy

This template uses **local image paths only** (`images/hero-1.webp`, etc.). No external image URLs are embedded in the HTML. This approach:

1. Eliminates risk of 404 broken images from expired Unsplash links
2. Ensures the template functions correctly when deployed with proper photography
3. Allows the end user to populate their own licensed photography

---

## Required Image Files

Place all files in: `/multi_clone_hompage/home/20260227_cave-hotel/images/`

| Filename | Dimensions (recommended) | Usage Location | Content |
|----------|--------------------------|----------------|---------|
| `hero-1.webp` | 1920×1080 | Hero background layer 1 | Cave exterior or dramatic stone landscape, dark mood |
| `hero-2.webp` | 1920×1080 | Hero overlay layer 2 | Atmospheric texture (rock surface, mineral vein, smoke) |
| `hero-3.webp` | 1920×1080 | About page hero | Cave passage or entrance, archaeological mood |
| `hero-4.webp` | 1920×1080 | Contact page hero | Cave interior, warm candlelight |
| `product-1.webp` | 900×700 | Grotto Suite card | Cave bedroom interior, carved stone bed |
| `product-2.webp` | 900×700 | Cave Pool Suite card | Underground pool, dark water, stone walls |
| `product-3.webp` | 900×700 | Cathedral Cave card | High-ceilinged cave chamber, dramatic lighting |
| `product-4.webp` | 900×700 | Royal Cavern card | Luxury cave living room, multiple chambers |
| `ambient-1.webp` | 800×1000 | Atelier section + Geology | Stone craftsman detail, mineral texture close-up |
| `ambient-2.webp` | 800×1000 | Atelier secondary + Process hero | Cave corridor, candlelit passage |
| `ambient-3.webp` | 1920×1080 | Heritage bg + Spa section | Ancient stone wall with fresco traces or hammam |
| `thumbnail.webp` | 600×400 | Template manifest thumbnail | Best of above, cropped to 3:2 |

---

## Thumbnail Generation

Once hero-1.webp (or a suitable composite) is in place, generate thumbnail.webp:

```bash
# Requires cwebp (brew install webp)
cwebp -q 80 -resize 600 0 \
  multi_clone_hompage/home/20260227_cave-hotel/images/hero-1.webp \
  -o multi_clone_hompage/home/20260227_cave-hotel/images/thumbnail.webp
```

Note: `thumbnail.jpg` is gitignored. Only `thumbnail.webp` should be committed.

---

## Validated Unsplash IDs for Cave/Stone Content

These IDs have been previously validated as HTTP 200 in the project. They are available as emergency fallbacks if local images are unavailable at deployment time:

| Unsplash ID | Content Description | URL |
|-------------|--------------------|----|
| `1529958030586-3aae4ca485ff` | Architectural interior | https://images.unsplash.com/photo-1529958030586-3aae4ca485ff |
| `1524504388940-b1c1722653e1` | Dark dramatic interior | https://images.unsplash.com/photo-1524504388940-b1c1722653e1 |
| `1600607687939-ce8a6c25118c` | Stone texture | https://images.unsplash.com/photo-1600607687939-ce8a6c25118c |
| `1509631179647-0177331693ae` | Dark atmospheric | https://images.unsplash.com/photo-1509631179647-0177331693ae |

**Validation command:** `curl -I "https://images.unsplash.com/photo-{ID}?w=1200"`
**Expected result:** HTTP/2 200

**Note:** Unsplash images must be validated fresh before use. IDs can expire or return 429 under rate limiting. Always validate before embedding in production HTML.

---

## Color Contrast Check

Given the Midnight Purple dark palette, image brightness settings applied in CSS:

| Image location | CSS filter applied | Purpose |
|----------------|--------------------|---------|
| `hero-layer-1` | `brightness(0.55)` | Ensure text legibility over hero |
| `hero-layer-2` | `mix-blend-mode: overlay` | Add depth without blocking text |
| Suite cards | `brightness(0.6)` → `brightness(0.75)` on hover | Legible suite name text |
| Heritage section bg | `brightness(0.25) saturate(0.5)` | Ensure overlay text visible |
| Page hero backgrounds | `brightness(0.35) saturate(0.6)` | Sub-page hero text legibility |
| Atelier images | `brightness(0.8)` | Section images with overlaid content |

All brightness values comply with DARK_THRESHOLD ≥ 15 rule when combined with the overlay gradients specified in the CSS.
