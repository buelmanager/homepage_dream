# Image Validation — AURUM Gilding Atelier

**Template:** `20260227_gilding-atelier`
**Date:** 2026-02-27
**Status:** Local image slots only — no external URLs embedded

---

## Image Strategy

This template uses **local image paths only**. All `background-image` and `<img>` references point to `images/*.webp` files within the template directory. No Unsplash, Pexels, or other external image service URLs are embedded in the HTML files.

This approach:
- Eliminates 404 risk from external service changes
- Allows deploying users to substitute their own photography
- Avoids CDN-dependent image loading
- Complies with project thumbnail-deploy rules (thumbnail.webp only)

---

## Required Image Slots

The following image files must be placed in `images/` for the template to display correctly:

| Filename | Used In | Recommended Subject |
|----------|---------|---------------------|
| `hero-1.webp` | index.html (hero background) | Gilded surface, gold leaf close-up, atelier interior |
| `hero-2.webp` | process.html (process intro) | Gilder's hands working, bole application |
| `hero-3.webp` | index.html (heritage grid) | Antique gilded frame detail |
| `hero-4.webp` | index.html (heritage grid), contact.html (visit section) | Workshop exterior or Parisian street scene |
| `product-1.webp` | collection.html, index.html (service card 1) | Gold leaf picture frames |
| `product-2.webp` | collection.html, index.html (service card 2) | Gilded furniture — chair, console, mirror |
| `product-3.webp` | collection.html, index.html (service card 3) | Restoration work — before/after or in-progress |
| `product-4.webp` | collection.html, index.html (service card 4) | Architectural gilding — dome, ceiling, cornice |
| `ambient-1.webp` | index.html (workshop), about.html (founder portrait bg), process.html (step I img) | Atelier interior, tools, bench environment |
| `ambient-2.webp` | index.html (heritage), about.html (apprenticeship), process.html (step III img) | Gilding process in progress, gold cushion, tips |
| `ambient-3.webp` | (reserved, optional) | Additional atmospheric detail |
| `thumbnail.webp` | manifest, meta.json | 600px wide composite or hero crop |

---

## Unsplash Suggested Search Queries

For sourcing appropriate imagery from Unsplash or similar services (validate URLs before use):

| Slot | Suggested Query |
|------|----------------|
| hero-1..4 | `gold leaf`, `gilded frame`, `atelier interior`, `craft workshop` |
| product-1 | `picture frame gold`, `ornate frame`, `gilded frame antique` |
| product-2 | `gilded furniture`, `gold chair`, `louis xvi furniture` |
| product-3 | `art restoration`, `conservation studio`, `museum restoration` |
| product-4 | `gilded dome`, `church ceiling gold`, `baroque interior` |
| ambient-1..3 | `workshop tools`, `craft hands`, `atelier detail`, `gold leaf roll` |

---

## Validation Protocol

Before adding any external image URL to this or related templates:

1. Run: `curl -I {url}` → verify HTTP 200
2. Confirm image is not a redirect to a placeholder
3. Add validated URL to the project's Known Valid Unsplash IDs list
4. Never embed 404-risk URLs in production HTML

## Thumbnail Requirements

Per project rules (docs/thumbnail-deploy-fix.md):
- `thumbnail.webp` — REQUIRED, included in git
- `thumbnail.jpg` — FORBIDDEN (gitignored)
- `fullpage.png` — FORBIDDEN (gitignored, too large for Vercel)

Generate thumbnail:
```bash
cwebp -q 80 -resize 600 0 \
  multi_clone_hompage/home/20260227_gilding-atelier/images/thumbnail.jpg \
  -o multi_clone_hompage/home/20260227_gilding-atelier/images/thumbnail.webp
```
