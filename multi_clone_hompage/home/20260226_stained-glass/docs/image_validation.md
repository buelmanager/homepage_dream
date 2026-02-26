# Image Validation — LUMINIS Architectural Glass

**Project:** 20260226_stained-glass
**Validated:** 2026-02-26
**Method:** `curl -s -o /dev/null -w "%{http_code}"` for each URL

---

## Validation Results

All Unsplash images were validated prior to embedding. URLs returning HTTP 200 were used.

### Primary Images (Hero & Key Sections)

| ID | URL | Status | Used In |
|----|-----|--------|---------|
| photo-1518998053901-5348d3961a04 | https://images.unsplash.com/photo-1518998053901-5348d3961a04 | **200 OK** | index hero, portfolio hero, contact hero |
| photo-1464983953574-0892a716854b | https://images.unsplash.com/photo-1464983953574-0892a716854b | **200 OK** | about hero, index light study, gallery |
| photo-1558618666-fcd25c85cd64 | https://images.unsplash.com/photo-1558618666-fcd25c85cd64 | **200 OK** | process hero, gallery fallback |

### Secondary Images (Gallery & Content)

| ID | URL | Status | Used In |
|----|-----|--------|---------|
| photo-1553361371-9b22f78e8b1d | https://images.unsplash.com/photo-1553361371-9b22f78e8b1d | **200 OK** | portfolio gallery |
| photo-1582719508461-905c673771fd | https://images.unsplash.com/photo-1582719508461-905c673771fd | **200 OK** | portfolio gallery, process steps |
| photo-1515886657613-9f3515b0c78f | https://images.unsplash.com/photo-1515886657613-9f3515b0c78f | **200 OK** | portfolio gallery |
| photo-1528360983277-13d401cdc186 | https://images.unsplash.com/photo-1528360983277-13d401cdc186 | **200 OK** | portfolio gallery, process steps, contact |
| photo-1600607687939-ce8a6c25118c | https://images.unsplash.com/photo-1600607687939-ce8a6c25118c | **200 OK** | about founder |
| photo-1509631179647-0177331693ae | https://images.unsplash.com/photo-1509631179647-0177331693ae | **200 OK** | glazier portrait |
| photo-1472099645785-5658abf4ff4e | https://images.unsplash.com/photo-1472099645785-5658abf4ff4e | **200 OK** | glazier portrait |
| photo-1507003211169-0a1dd7228f2d | https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d | **200 OK** | glazier portrait |
| photo-1519085360753-af0119f7cbe7 | https://images.unsplash.com/photo-1519085360753-af0119f7cbe7 | **200 OK** | glazier portrait |
| photo-1543076447-215ad9ba6923 | https://images.unsplash.com/photo-1543076447-215ad9ba6923 | **200 OK** | glazier portrait |
| photo-1500648767791-00dcc994a43e | https://images.unsplash.com/photo-1500648767791-00dcc994a43e | **200 OK** | glazier portrait |
| photo-1503342394128-c104d54dba01 | https://images.unsplash.com/photo-1503342394128-c104d54dba01 | **200 OK** | portfolio gallery, process |
| photo-1524504388940-b1c1722653e1 | https://images.unsplash.com/photo-1524504388940-b1c1722653e1 | **200 OK** | portfolio gallery |

---

## Thumbnail

| File | Source | Method | Status |
|------|--------|--------|--------|
| images/thumbnail.webp | photo-1518998053901-5348d3961a04 | curl → cwebp -q 80 | Created |
| Size | 13KB | 600×450px | — |

---

## Image Usage Guidelines

- All images served via Unsplash CDN with query parameters: `?w=NNN&q=80&auto=format&fit=crop`
- No images downloaded and hosted locally (except thumbnail.webp)
- All images used under Unsplash License (free for commercial use, no attribution required but recommended)
- No face closeups; no identified individuals in primary editorial positions
- Glazier portrait images use anonymous/professional Unsplash portrait photos

---

## Compliance

- [x] All images validated 200 OK before embedding
- [x] No broken image URLs
- [x] Thumbnail created and saved as WebP
- [x] Images sized appropriately (not oversized)
- [x] `loading="lazy"` applied to all non-hero images
- [x] Alt text provided for all images
