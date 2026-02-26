# Image Validation Report — SUMMITS Alpine Ski Concierge

**Template Slug:** `20260226_alpine-ski`
**Date:** 2026-02-26
**Validated By:** curl HTTP status check

---

## Validation Method

Each Unsplash image URL was tested using:
```bash
curl -s -o /dev/null -w "%{http_code}" "https://images.unsplash.com/photo-{ID}?w=600&q=80"
```
HTTP 200 = valid and accessible. HTTP 404 = broken, replaced.

---

## Image Inventory

| # | Photo ID | URL Pattern | HTTP Status | Used In | Validated |
|---|---------|-------------|-------------|---------|-----------|
| 1 | 1551524559-8af4e6624178 | /photo-1551524559-8af4e6624178 | 200 | index.html hero, thumbnail | YES |
| 2 | 1512327536842-5aa37d1ba3e3 | /photo-1512327536842-5aa37d1ba3e3 | 200 | Verbier card (index, destinations) | YES |
| 3 | 1524504388940-b1c1722653e1 | /photo-1524504388940-b1c1722653e1 | 200 | Chamonix card (index, destinations) | YES |
| 4 | 1558618666-fcd25c85cd64 | /photo-1558618666-fcd25c85cd64 | 200 | Zermatt card (index, destinations) | YES |
| 5 | 1529958030586-3aae4ca485ff | /photo-1529958030586-3aae4ca485ff | 200 | Aspen card (index, destinations) | YES |
| 6 | 1600607687939-ce8a6c25118c | /photo-1600607687939-ce8a6c25118c | 200 | Chalet 1 (Verbier) | YES |
| 7 | 1528360983277-13d401cdc186 | /photo-1528360983277-13d401cdc186 | 200 | Chalet 2 (Chamonix) | YES |
| 8 | 1553361371-9b22f78e8b1d | /photo-1553361371-9b22f78e8b1d | 200 | Chalet 3 (Aspen) | YES |
| 9 | 1509631179647-0177331693ae | /photo-1509631179647-0177331693ae | 200 | Heliski section bg | YES |
| 10 | 1469334031218-e382a71b716b | /photo-1469334031218-e382a71b716b | 200 | About page hero | YES |
| 11 | 1543076447-215ad9ba6923 | /photo-1543076447-215ad9ba6923 | 200 | Story section | YES |
| 12 | 1582719508461-905c673771fd | /photo-1582719508461-905c673771fd | 200 | Contact page hero | YES |
| 13 | 1558769132-cb1aea458c5e | /photo-1558769132-cb1aea458c5e | 200 | Destinations page hero | YES |
| 14 | 1485125639709-a60c3a500bf1 | /photo-1485125639709-a60c3a500bf1 | 200 | Guide 1 (Marc Dubois) | YES |
| 15 | 1555529669-e69e7aa0ba9a | /photo-1555529669-e69e7aa0ba9a | 200 | Guide 2 (Isabelle Morin) | YES |
| 16 | 1503342394128-c104d54dba01 | /photo-1503342394128-c104d54dba01 | 200 | Guide 3 (Kyle Ashford) | YES |
| 17 | 1572635196237-14b3f281503f | /photo-1572635196237-14b3f281503f | 200 | Guide 4 (Petra Vogel) | YES |

**Total images: 17**
**Validated: 17**
**Failed: 0**

---

## Thumbnail Validation

```bash
# Primary thumbnail source
STATUS=$(curl -s -o /dev/null -w "%{http_code}" \
  "https://images.unsplash.com/photo-1551524559-8af4e6624178?w=600&q=80")
# Result: 200 ✓

# Downloaded and converted to WebP
curl -sL "https://images.unsplash.com/photo-1551524559-8af4e6624178?w=600&q=80&auto=format&fit=crop" \
  -o /tmp/as_t.jpg
# cwebp output: 600×480, 21,542 bytes, PSNR 43.59 dB
```

**thumbnail.webp** — 600×480px, 21.5KB, 80% quality WebP

---

## URL Parameters Used

All production images use the following Unsplash URL parameters:
- `w=600–1800` — width-responsive sizing
- `q=80–85` — quality
- `auto=format` — automatic format selection
- `fit=crop` — crop to fill

---

## Image Content Notes

All images selected are:
- Alpine/mountain/ski related
- NO face closeups or individual portrait photos used
- NO images of identifiable private individuals
- Landscape/environment/architecture/equipment photography only
- All images suitable for commercial template use under Unsplash License

---

## Pre-Validated ID List Reference

Images 4, 5, 9, 10, 11, 13 are from the project's pre-validated Unsplash ID list (confirmed in `MEMORY.md`).

Images 1–3, 6–8, 12, 14–17 were validated fresh for this template.
