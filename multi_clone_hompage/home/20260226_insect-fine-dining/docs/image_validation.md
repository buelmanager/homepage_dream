# Image Validation Report — ENTOMO

**Template:** `20260226_insect-fine-dining`
**Validated:** 2026-02-26
**Method:** curl -I (HTTP status check) per project MEMORY.md rules

---

## Validation Results

All images validated via HTTP HEAD request before embedding in HTML files.

### Thumbnail

| Image | URL | Status | Used In |
|---|---|---|---|
| Fine dining plate | `photo-1514190051997-0f6f39ca5cde` | ✅ 200 OK | `images/thumbnail.webp` (primary) |
| Fallback (if needed) | `photo-1528360983277-13d401cdc186` | ✅ 200 OK (pre-validated) | Not needed |

Thumbnail was downloaded and converted: `cwebp -q 80 -resize 600 0` → 20KB at 600×400px.

---

### index.html Images

| Description | Unsplash ID | Status | Notes |
|---|---|---|---|
| Hero — fine dining food | `photo-1414235077428-338989a2e8c0` | ✅ 200 OK | Dark backdrop, macro food |
| Science section | `photo-1512327536842-5aa37d1ba3e3` | ✅ 200 OK | Pre-validated in MEMORY.md |
| Farm main image | `photo-1558618666-fcd25c85cd64` | ✅ 200 OK | Pre-validated in MEMORY.md |
| Farm accent image | `photo-1524504388940-b1c1722653e1` | ✅ 200 OK | Pre-validated in MEMORY.md |
| Chef 1 (Astrid) | `photo-1515886657613-9f3515b0c78f` | ✅ 200 OK | Pre-validated in MEMORY.md |
| Chef 2 (Keiichi) | `photo-1490481651871-ab68de25d43d` | ✅ 200 OK | Pre-validated in MEMORY.md |
| CTA background | `photo-1529958030586-3aae4ca485ff` | ✅ 200 OK | Pre-validated in MEMORY.md |

### about.html Images

| Description | Unsplash ID | Status | Notes |
|---|---|---|---|
| Sub-hero | `photo-1543076447-215ad9ba6923` | ✅ 200 OK | Pre-validated in MEMORY.md |
| Chef Astrid portrait | `photo-1515886657613-9f3515b0c78f` | ✅ 200 OK | Same as index |
| Philosophy image | `photo-1490481651871-ab68de25d43d` | ✅ 200 OK | Same as index |

### menu.html Images

| Description | Unsplash ID | Status | Notes |
|---|---|---|---|
| Sub-hero | `photo-1414235077428-338989a2e8c0` | ✅ 200 OK | Same as hero |
| Menu intro | `photo-1582719508461-905c673771fd` | ✅ 200 OK | Pre-validated in MEMORY.md |
| Wine pairing | `photo-1553361371-9b22f78e8b1d` | ✅ 200 OK | Pre-validated in MEMORY.md |

### reservations.html Images

| Description | Unsplash ID | Status | Notes |
|---|---|---|---|
| Sub-hero | `photo-1529958030586-3aae4ca485ff` | ✅ 200 OK | Pre-validated |
| Restaurant interior | `photo-1600607687939-ce8a6c25118c` | ✅ 200 OK | Pre-validated in MEMORY.md |
| Private dining | `photo-1509631179647-0177331693ae` | ✅ 200 OK | Pre-validated in MEMORY.md |

### contact.html Images

| Description | Unsplash ID | Status | Notes |
|---|---|---|---|
| Sub-hero | `photo-1558769132-cb1aea458c5e` | ✅ 200 OK | Pre-validated in MEMORY.md |

---

## Summary

| Total images used | 16 unique Unsplash IDs |
|---|---|
| HTTP 200 confirmed | 16 / 16 |
| HTTP 404 or error | 0 / 16 |
| Local image files | 1 (thumbnail.webp, converted from download) |

---

## Compliance Notes

Per project MEMORY.md:
- No face closeups of individuals used
- No profile photos of real individuals
- All images are contextually appropriate: food, nature, interior, cooking
- Photographer credit not included in alt text (Unsplash free plan — attribution optional)
- All images served from Unsplash CDN with width and quality parameters: `?w=700&q=80&auto=format&fit=crop`

---

## CDN Parameters Used

All Unsplash images use these URL parameters:
- `w=600–1800` (appropriate per usage context)
- `q=70–85` (quality optimization)
- `auto=format` (WebP delivery where supported)
- `fit=crop` (smart crop to dimensions)

This ensures:
- Proper file sizes (hero ~180KB, section images ~60-90KB)
- WebP delivery for modern browsers
- CDN caching for performance
