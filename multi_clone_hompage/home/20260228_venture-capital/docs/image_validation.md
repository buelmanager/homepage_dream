# Image Validation Report — 20260228_venture-capital (APEX Ventures)

**Date:** 2026-02-28
**Method:** Local images only (no external URLs)
**Status:** ALL LOCAL — No URL validation required

---

## Summary

This template uses exclusively local image files stored in the `images/` directory. No external CDN or Unsplash URLs are embedded in any HTML file. All image paths follow the format `images/<filename>.webp`.

**External URL count: 0**
**Broken image risk: None (local files, no network dependency)**

---

## Image Inventory

| File | Format | Usage Pages | Alt Text Provided |
|---|---|---|---|
| `images/hero-1.webp` | WebP | index.html (hero bg), collection.html (featured) | Yes |
| `images/hero-2.webp` | WebP | index.html (gallery), about.html (strip), contact.html (hero bg) | Yes |
| `images/hero-3.webp` | WebP | index.html (gallery), about.html (team), process.html (terms) | Yes |
| `images/hero-4.webp` | WebP | index.html (gallery), about.html (team) | Yes |
| `images/product-1.webp` | WebP | index.html (portfolio card), collection.html (Deep Tech) | Yes |
| `images/product-2.webp` | WebP | index.html (portfolio card), collection.html (Climate) | Yes |
| `images/product-3.webp` | WebP | index.html (portfolio card), collection.html (AI) | Yes |
| `images/product-4.webp` | WebP | index.html (gallery), collection.html (portfolio card) | Yes |
| `images/ambient-1.webp` | WebP | index.html (testimonial avatar, gallery), about.html (story) | Yes |
| `images/ambient-2.webp` | WebP | index.html (testimonial avatar), about.html (team card) | Yes |
| `images/ambient-3.webp` | WebP | index.html (testimonial avatar), contact.html (map section) | Yes |

**Total images:** 11
**Format:** All WebP (appropriate for web delivery)

---

## Image Usage per HTML File

### index.html
```
images/hero-1.webp     → #hero background (brightness 0.45 filter)
images/hero-2.webp     → .gallery-item (full width)
images/hero-3.webp     → .gallery-item
images/hero-4.webp     → .gallery-item
images/product-1.webp  → .portfolio-card (Deep Tech)
images/product-2.webp  → .portfolio-card (Climate)
images/product-3.webp  → .portfolio-card (AI)
images/product-4.webp  → .gallery-item
images/ambient-1.webp  → .testimonial-avatar
images/ambient-2.webp  → .testimonial-avatar
images/ambient-3.webp  → .testimonial-avatar
```

### about.html
```
images/hero-2.webp     → .hero-image-strip (full-width strip)
images/ambient-1.webp  → .story-img
images/hero-3.webp     → .team-photo (Jonathan Mercer)
images/hero-4.webp     → .team-photo (Dr. Anika Sharma)
images/ambient-2.webp  → .team-photo (Wei-Lin Zhang)
images/ambient-3.webp  → .team-photo (Elena Vasquez)
```

### collection.html
```
images/product-1.webp  → Portfolio card (Axiom Fusion — Deep Tech)
images/product-2.webp  → Portfolio card (Quantum Dynamics — Deep Tech)
images/product-3.webp  → Portfolio card (BioSynth Labs — Deep Tech)
images/product-4.webp  → Portfolio card (Carbyne Materials — Climate)
images/hero-2.webp     → Portfolio card (Solar Lattice — Climate)
images/hero-3.webp     → Portfolio card (Meridian Ocean — Climate)
images/hero-4.webp     → Portfolio card (Neural Foundry — AI)
images/ambient-1.webp  → Portfolio card (Cortex Robotics — AI)
images/ambient-2.webp  → Portfolio card (Prism Intelligence — AI)
images/hero-1.webp     → Featured spotlight (Axiom Fusion hero)
```

### process.html
```
images/hero-3.webp     → .terms-image (investment parameters visual)
```

### contact.html
```
images/hero-2.webp     → .page-hero-bg (hero background)
images/ambient-3.webp  → .map-section (global offices image)
```

---

## Accessibility Notes

All `<img>` elements have:
- `alt` attributes with descriptive text
- No decorative images missing alt="" (decorative elements use CSS backgrounds)

Testimonial avatars use image elements with alt="Founder" (acceptable for ambiguous portrait usage).

---

## Performance Notes

- All images are WebP format — optimal compression for modern browsers
- Hero background uses CSS `filter: brightness(0.45)` — no pre-darkened image needed
- Team/testimonial images use `filter: grayscale(20%)` — subtle desaturation applied via CSS
- Portfolio card images use `transition: transform 0.6s` zoom on hover — GPU-accelerated
- No `<img>` elements use `loading="lazy"` on above-the-fold images (correct behavior)

---

## Forbidden Unsplash ID Compliance

Per design brief, the following IDs were forbidden:
- photo-1558618666-fcd25c85cd64 ❌
- photo-1524504388940-b1c1722653e1 ❌
- photo-1551488831-00ddcb6c6bd3 ❌
- photo-1543076447-215ad9ba6923 ❌
- photo-1503342394128-c104d54dba01 ❌

**Result:** Not applicable — no Unsplash URLs used. All images are local files.

---

## Validation Result

**PASSED** — All images are local WebP files. No broken URLs possible. No forbidden IDs used. All images have appropriate alt text. Template is safe for deployment.
