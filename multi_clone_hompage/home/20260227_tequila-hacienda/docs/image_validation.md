# Image Validation — AGAVERO Estate Tequila Hacienda

**Template:** 20260227_tequila-hacienda
**Date:** 2026-02-27

---

## Image Strategy

This template uses **local image paths only**. No external Unsplash or CDN URLs are embedded in the HTML files. All `<img>` tags and CSS `background-image` declarations reference relative paths within the `images/` directory.

This approach:
- Eliminates risk of broken Unsplash URLs (403/404 from expired tokens)
- Allows the template user to substitute their own brand photography
- Prevents external resource validation failures

---

## Required Image Files

| Filename | Dimensions (recommended) | Usage | Format |
|---|---|---|---|
| `hero-1.webp` | 2400 × 1600px | Homepage hero BG, still room | WebP |
| `hero-2.webp` | 1200 × 900px | Heritage section, barrel hall | WebP |
| `hero-3.webp` | 1200 × 900px | Tahona step, jimador | WebP |
| `hero-4.webp` | 2400 × 1600px | Terroir, location, fermentation | WebP |
| `product-1.webp` | 800 × 1000px | Blanco expression | WebP |
| `product-2.webp` | 800 × 1000px | Reposado expression | WebP |
| `product-3.webp` | 800 × 1000px | Añejo expression | WebP |
| `product-4.webp` | 800 × 1000px | Extra Añejo expression | WebP |
| `ambient-1.webp` | 1200 × 900px | Distillery interior | WebP |
| `ambient-2.webp` | 1200 × 900px | Vats, collection BG | WebP |
| `ambient-3.webp` | 1200 × 900px | Jimador, copper stills | WebP |
| `thumbnail.webp` | 600 × 400px | Template thumbnail | WebP |

**Total: 12 image slots**

---

## Image Content Guidelines

### Hero Images (hero-1..4.webp)
- Landscape orientation preferred
- Suitable subjects: agave fields, hacienda exteriors, sunset over highlands, barrel rooms, distillery interiors
- Avoid: close-up facial portraits, people as primary subjects, brand-identifiable product shots

### Product Images (product-1..4.webp)
- Portrait orientation preferred (3:4 aspect ratio)
- Suitable subjects: tequila bottles, glass pours, agave piñas, copper stills
- Dark/moody lighting matches the Rust Ember palette

### Ambient Images (ambient-1..3.webp)
- Square or landscape acceptable
- Suitable subjects: interior distillery spaces, fermentation vats, copper pot stills, barrel cellars

### Thumbnail (thumbnail.webp)
- Must be exactly 600px wide
- Represents the homepage hero composition
- Generated via: `cwebp -q 80 -resize 600 0 hero-1.webp -o thumbnail.webp`

---

## Validated Unsplash IDs (for sourcing images)

The following Unsplash photo IDs were confirmed accessible (HTTP 200) as of 2026-02-27. Use these to source appropriate imagery for this template:

**Suitable for Agave / Spirits / Hacienda:**
- `1529958030586-3aae4ca485ff` — warm toned ambient/bar
- `1512327536842-5aa37d1ba3e3` — industrial craft close-up
- `1558618666-fcd25c85cd64` — amber spirits glass
- `1509631179647-0177331693ae` — warm architectural interior
- `1553361371-9b22f78e8b1d` — botanical/plant close-up

**Download command example:**
```bash
curl -L "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=2400&q=80&fm=webp" \
  -o multi_clone_hompage/home/20260227_tequila-hacienda/images/hero-1.webp
```

---

## Validation Status

| File | Status | Notes |
|---|---|---|
| `hero-1.webp` | Placeholder | Requires local image |
| `hero-2.webp` | Placeholder | Requires local image |
| `hero-3.webp` | Placeholder | Requires local image |
| `hero-4.webp` | Placeholder | Requires local image |
| `product-1.webp` | Placeholder | Requires local image |
| `product-2.webp` | Placeholder | Requires local image |
| `product-3.webp` | Placeholder | Requires local image |
| `product-4.webp` | Placeholder | Requires local image |
| `ambient-1.webp` | Placeholder | Requires local image |
| `ambient-2.webp` | Placeholder | Requires local image |
| `ambient-3.webp` | Placeholder | Requires local image |
| `thumbnail.webp` | Placeholder | Generate after hero-1.webp placed |

---

## Notes

- All HTML files gracefully degrade if images are missing (no layout-breaking dependencies)
- CSS `object-fit: cover` on all `<img>` tags ensures proper crop regardless of source dimensions
- `filter: sepia(0.08)` applied to ambient/hero images for palette cohesion — remove if using already warm-toned photography
- `loading="lazy"` on all non-hero images for performance
