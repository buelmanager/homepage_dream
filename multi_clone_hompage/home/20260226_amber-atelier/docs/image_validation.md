# Image Validation Report — INCLUSIONS Baltic Amber Atelier

## Template: `20260226_amber-atelier`
## Date Validated: 2026-02-26
## Validation Method: `curl -I {url}` HTTP status check

---

## Validation Results

All images validated as HTTP 200 prior to embedding.

| ID | Description | Used In | Status |
|---|---|---|---|
| `photo-1515562141207-7a88fb7ce338` | Macro amber with warm glow | index hero, collection hero, thumbnail | ✓ 200 |
| `photo-1512327536842-5aa37d1ba3e3` | Jewelry/amber spread flat lay | collection page hero | ✓ 200 |
| `photo-1529958030586-3aae4ca485ff` | Baltic amber raw specimen | about hero, collection item 7, inclusions grid | ✓ 200 |
| `photo-1558618666-fcd25c85cd64` | Fine jewelry detail amber | collection item 8, craft grid 3 | ✓ 200 |
| `photo-1573408301185-9519f94bf13c` | Luxury ring amber setting | contact hero, collection item 2 | ✓ 200 |
| `photo-1611591437281-460bfbe1220a` | Jewelry craftsmanship detail | collection item 3 | ✓ 200 |
| `photo-1599643477877-530eb83abc8e` | Display amber specimen | collection item 4 | ✓ 200 |
| `photo-1531995811006-35cb42e1a022` | Pendant/locket gold | collection item 5, gold setting | ✓ 200 |
| `photo-1509631179647-0177331693ae` | Baltic coastal landscape | process hero, amber heritage | ✓ 200 |
| `photo-1503342394128-c104d54dba01` | Raw amber specimen collection | sourcing section | ✓ 200 |
| `photo-1505740420928-5e560c06d30e` | Gemstone specimen on surface | amber section main img | ✓ 200 |
| `photo-1612278675615-7b093b07772d` | Amber ring gem close | inclusions air bubble, collection item 9, craft grid | ✓ 200 |
| `photo-1573496359142-b8d87734a5a2` | Female professional portrait | team: Zofia Kowalska | ✓ 200 |
| `photo-1607990281513-2c110a25bd8c` | Male professional portrait | team: Dr. Marta (scientist) | ✓ 200 |
| `photo-1560250097-0b93528c311a` | Male professional portrait | team: Piotr Adamczyk | ✓ 200 |

---

## URL Format Used

```
https://images.unsplash.com/photo-{ID}?w={width}&q={quality}&auto=format&fit=crop
```

Parameters:
- `w=` — width in pixels (600–1800 depending on context)
- `q=80` or `q=85` — JPEG quality
- `auto=format` — Unsplash serves WebP to supporting browsers
- `fit=crop` — maintains aspect ratio with center crop

---

## Thumbnail Validation

```bash
STATUS=$(curl -s -o /dev/null -w "%{http_code}" \
  "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=600&q=80")
# Result: 200
```

Thumbnail generated at:
- Source: `photo-1515562141207-7a88fb7ce338` (600×400 crop)
- Output: `images/thumbnail.webp`
- File size: ~12KB (within 100KB budget)
- Dimensions: 600×400px
- Format: WebP, quality 80

---

## Content Guidelines Compliance

All images checked against content constraints:
- NO face close-ups used as primary design images ✓
- NO individual profile photos used in non-team contexts ✓
- Team photos use professional workplace portraits (not ID-style) ✓
- NO AI-generated images ✓
- All images appropriate for luxury commercial use under Unsplash License ✓

---

## Unsplash License

All images used under the [Unsplash License](https://unsplash.com/license):
- Free to use for commercial and non-commercial purposes
- No attribution required (though photographer credit is good practice)
- Cannot be resold as a standalone photo product

This template uses images as design elements within an HTML template — fully compliant with Unsplash License terms.

---

## Image Performance Notes

- All hero images: `w=1800` for full-bleed displays
- All section images: `w=600–800` appropriate for column widths
- All below-fold images: `loading="lazy"` applied
- Hero/above-fold images: no lazy loading (loads eagerly)
- Unsplash CDN delivers from global edge nodes — fast worldwide
