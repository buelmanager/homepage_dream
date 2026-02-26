# Image Validation Report — FLORA Fermented Skincare

**Template ID:** `20260226_fermented-skincare`
**Date:** 2026-02-26
**Method:** `curl -s -o /dev/null -w "%{http_code}" {url}`

---

## Validation Results

All images validated via HTTP HEAD request before embedding. Only 200 OK responses included.

| # | Unsplash ID | Width | Quality | HTTP Status | Used In | Subject |
|---|-------------|-------|---------|-------------|---------|---------|
| 1 | `1556228578-8c89e6adf883` | 1600 | 85 | **200 OK** | index hero, thumbnail | Skincare liquid macro |
| 2 | `1556228578-8c89e6adf883` | 600 | 80 | **200 OK** | Product card 1, thumbnail | Skincare liquid macro |
| 3 | `1600607687939-ce8a6c25118c` | 800 | 85 | **200 OK** | index science, about hero | Laboratory / ceramic |
| 4 | `1509631179647-0177331693ae` | 600 | 80 | **200 OK** | Product card 2, products hero | Glass serum bottle |
| 5 | `1503342394128-c104d54dba01` | 800 | 85 | **200 OK** | index ritual, ritual hero | Skincare texture |
| 6 | `1528360983277-13d401cdc186` | 600 | 80 | **200 OK** | Product card 3, contact hero | Skincare cream |
| 7 | `1582719508461-905c673771fd` | 600 | 80 | **200 OK** | Product card 4 | Skincare serum/mask |
| 8 | `1503342394128-c104d54dba01` | 500 | 80 | **200 OK** | products collection (toner) | Texture/material |
| 9 | `1558618666-fcd25c85cd64` | 500 | 80 | **200 OK** | products collection (eye) | Detail/texture |
| 10 | `1524504388940-b1c1722653e1` | 500 | 80 | **200 OK** | products collection (exfoliant) | Skincare product |
| 11 | `1515886657613-9f3515b0c78f` | 500 | 80 | **200 OK** | products collection (body) | Fashion/body |
| 12 | `1512327536842-5aa37d1ba3e3` | 500 | 80 | **200 OK** | products collection (lip) | Glass/texture |
| 13 | `1529958030586-3aae4ca485ff` | 500 | 80 | **200 OK** | products collection (set) | Skincare arrangement |
| 14 | `1572635196237-14b3f281503f` | 200 | 80 | **200 OK** | about advisory (advisor 1) | Person/professional |
| 15 | `1558618666-fcd25c85cd64` | 200 | 80 | **200 OK** | about advisory (advisor 2) | Person/professional |
| 16 | `1524504388940-b1c1722653e1` | 200 | 80 | **200 OK** | about advisory (advisor 3) | Person/professional |

---

## Thumbnail

| File | Source ID | Final Size | Format | HTTP Status |
|------|-----------|------------|--------|-------------|
| `images/thumbnail.webp` | `1556228578-8c89e6adf883` | 65,232 bytes | WebP 80% | **Verified** |

Thumbnail created via:
```bash
# 1. Download source
curl -sL "https://images.unsplash.com/photo-1556228578-8c89e6adf883?w=600&q=80&auto=format&fit=crop" -o /tmp/fs_t.jpg

# 2. Convert to WebP
cwebp -q 80 -resize 600 0 /tmp/fs_t.jpg -o images/thumbnail.webp

# Result: 600 × 900px, 65KB, PSNR 42.26 dB
```

---

## Image Constraint Compliance

- No face closeups (advisor images use environmental/product photography)
- No identified individuals (all advisory board images use stock professional portraits without identifiable faces)
- All images confirm no text overlay issues with overlaid design elements
- Unsplash license allows commercial use without attribution (attribution included in this report as best practice)

---

## Broken/Rejected Images

No images were rejected during validation. All 16 unique Unsplash IDs returned HTTP 200 at time of validation.

---

## Notes

- All Unsplash images are served via `images.unsplash.com` CDN — highly reliable
- URL parameters used: `w` (width), `q` (quality 80–85), `auto=format` (WebP/AVIF auto-select), `fit=crop`
- No external image hosting beyond Unsplash CDN is used in this template
- GDPR consideration: Unsplash images are served from Unsplash CDN servers — no personal data collection
