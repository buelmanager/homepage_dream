# Image Validation Report — CANOPY Forest Treehouse Lodge

**Template:** `20260227_treehouse-lodge`
**Date:** 2026-02-27

---

## Image Strategy

All images in this template use **local paths** (`images/filename.webp`). No external Unsplash or CDN image URLs are embedded in any HTML file. This eliminates the risk of broken images from URL expiry, 404 errors, or Unsplash API changes.

---

## Required Image Files

The following images must be placed in:
`multi_clone_hompage/home/20260227_treehouse-lodge/images/`

| Filename | Dimensions (rec.) | Usage | Format |
|---|---|---|---|
| `hero-1.webp` | 1920×1080 min | Hero layer-1 background, process page bg | WebP |
| `hero-2.webp` | 1920×1080 min | Hero layer-2 overlay, contact hero bg | WebP |
| `hero-3.webp` | 1200×800 | Heritage section, collection card (Willow) | WebP |
| `hero-4.webp` | 1200×800 | Heritage section, collection card (Beech) | WebP |
| `product-1.webp` | 1200×675 | Canopy Suite — featured hero card | WebP |
| `product-2.webp` | 800×600 | Forest Loft — collection card | WebP |
| `product-3.webp` | 800×600 | Woodland Nest — collection card | WebP |
| `product-4.webp` | 800×600 | Ash Observatory — collection card | WebP |
| `ambient-1.webp` | 800×1067 | Atelier main (portrait), about origin | WebP |
| `ambient-2.webp` | 800×800 | Atelier accent (square), about founder, dining | WebP |
| `ambient-3.webp` | 800×800 | Heritage visual, about founders | WebP |
| `thumbnail.webp` | 600×400 | Template thumbnail for manifest | WebP |

---

## Placeholder Behavior

All `<img>` elements have `background: var(--surface)` or `background: var(--surface2)` set via CSS. If images are missing:
- A dark green placeholder background will be shown
- No broken image icons will appear
- Layout integrity is maintained

---

## Image Content Guidelines

When sourcing or generating images for this template:

### Hero Images (hero-1, hero-2)
- Ancient forest canopy — dramatic, cinematic
- Dark forest palette compatible (already dark scenes)
- No visible faces or identifiable individuals
- Suggested: aerial canopy view, mist through trees, dawn light filtering through oak branches

### Product Images (product-1 through product-4)
- Treehouse exterior or interior architecture
- Wood, glass, natural materials
- Warm interior lighting acceptable
- No faces or identifiable individuals

### Ambient Images (ambient-1 through ambient-3)
- Forest floor details, interior craftsmanship, natural textures
- Foraged food details, wood joinery, stone, moss
- No faces or identifiable individuals

### Thumbnail
- Must be 600px wide
- Should show the hero or a key card element
- Generate from fullpage.png:
  ```bash
  cwebp -q 80 -resize 600 0 images/thumbnail.jpg -o images/thumbnail.webp
  ```

---

## Validated Unsplash IDs (Alternative Sources)

If generating images from Unsplash, these IDs are pre-validated as of 2026:

| Unsplash ID | Suitable for |
|---|---|
| 1529958030586-3aae4ca485ff | Forest / nature |
| 1512327536842-5aa37d1ba3e3 | Wooden interiors |
| 1558618666-fcd25c85cd64 | Forest path |
| 1524504388940-b1c1722653e1 | Nature / landscape |
| 1515886657613-9f3515b0c78f | Forest canopy |

**Validation command:**
```bash
curl -I "https://images.unsplash.com/photo-{ID}?w=800&q=80" 2>/dev/null | head -1
# Expected: HTTP/2 200
```

---

## No External Images in HTML

Confirmed: no `<img src="https://...">` or `background-image: url('https://...')` patterns appear in any HTML file. All images reference local `images/` paths.

**Validation check:**
```bash
grep -r "https://images.unsplash" multi_clone_hompage/home/20260227_treehouse-lodge/
# Expected: no output (no external image URLs)
```

---

## Thumbnail Deployment Rule

- `thumbnail.webp` → committed to git (small, <100KB target)
- `thumbnail.jpg` → gitignored (never use)
- `fullpage.png` → gitignored (too large, 300MB+)
