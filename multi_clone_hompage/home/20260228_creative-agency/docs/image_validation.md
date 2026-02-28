# Image Validation — EMBER STUDIO Creative Agency

**Template:** `20260228_creative-agency`
**Date:** 2026-02-28

---

## Image Strategy

All images are **local files only** (`images/` directory). No external Unsplash URLs
are embedded in any HTML file. Images are referenced as:
- `images/hero-1.webp` through `images/hero-4.webp`
- `images/product-1.webp` through `images/product-4.webp`
- `images/ambient-1.webp` through `images/ambient-3.webp`

---

## Required Image Files

| File | Used In | Description |
|------|---------|-------------|
| `hero-1.webp` | index.html hero bg | Full-screen hero — creative workspace / dark agency interior |
| `hero-2.webp` | index.html awards, about.html | Awards/recognition visual |
| `hero-3.webp` | index.html testimonial, gallery | Creative collaboration |
| `hero-4.webp` | process.html, contact.html map | Office/workspace |
| `product-1.webp` | index.html work, about.html team, collection.html, featured case | Vanta Financial brand work |
| `product-2.webp` | index.html work, collection.html, about.html team | Oriole / Slate Urban |
| `product-3.webp` | index.html work, about.html team, collection.html, process.html | Nova / Meridian |
| `product-4.webp` | index.html work, collection.html, about.html team | Echo Studio / Meridian |
| `ambient-1.webp` | index.html gallery, awards, about.html story, process.html | Studio interior |
| `ambient-2.webp` | index.html gallery, collection.html, process.html | Brand board / development |
| `ambient-3.webp` | index.html gallery, collection.html, process.html, contact.html | Strategy session |
| `thumbnail.webp` | Template manifest | 600px wide preview (generate via cwebp) |

---

## Suggested Unsplash Search Terms for Image Sourcing

For hero-1 (full-screen dark hero):
- "creative agency open plan office dark"
- "design studio workspace moody"
- Search IDs from validated list: `1509631179647-0177331693ae`, `1528360983277-13d401cdc186`

For product images (brand/identity work):
- "brand identity mockup desk"
- "design agency board meeting"

For ambient images:
- "creative team collaboration"
- "design studio process"
- "agency office modern interior"

---

## Unsplash IDs to Avoid (Per Brief)

- `photo-1558618666-fcd25c85cd64` (forbidden per design brief)
- `photo-1524504388940-b1c1722653e1` (forbidden per design brief)
- `photo-1551488831-00ddcb6c6bd3` (forbidden per design brief)
- `photo-1543076447-215ad9ba6923` (forbidden per design brief)
- `photo-1503342394128-c104d54dba01` (forbidden per design brief)

---

## Thumbnail Generation Command

```bash
# After capturing fullpage.png:
cwebp -q 80 -resize 600 0 \
  multi_clone_hompage/home/20260228_creative-agency/images/fullpage.png \
  -o multi_clone_hompage/home/20260228_creative-agency/images/thumbnail.webp

# Alternative (from jpg):
cwebp -q 80 -resize 600 0 \
  multi_clone_hompage/home/20260228_creative-agency/images/thumbnail.jpg \
  -o multi_clone_hompage/home/20260228_creative-agency/images/thumbnail.webp
```

---

## Validation Notes

- No external image URLs used — all images are local `.webp` references
- No face closeups or individual profile photos used
- All image usage is decorative/atmospheric — no specific person attribution needed
- Images sourced with generic industry-appropriate keywords only
