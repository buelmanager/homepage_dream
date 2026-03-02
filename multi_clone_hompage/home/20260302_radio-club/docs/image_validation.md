# Image Validation — Frequency Amateur Radio Club

**Slug:** `20260302_radio-club`
**Date:** 2026-03-02

---

## Validation Method

All Unsplash image URLs were validated by checking HTTP response status before use.
Format: `https://images.unsplash.com/photo-{ID}?w={width}&q={quality}`

---

## Validated Images

| ID | Description | Used In | Dimensions | Status |
|----|-------------|---------|------------|--------|
| `1550751827-4bd374c3f58b` | Radio communication technology equipment | index.html (hero bg), about.html, collection.html × 3, process.html × 3 | 1800w, 900w, 600w | VALIDATED |
| `1518020382113-a7e8fc38eac9` | Electronic equipment / shack setup | index.html (hero bg alt), collection.html × 3, process.html × 3 | 1800w, 900w, 600w | VALIDATED |

---

## Image Usage Map

### index.html
- Hero background: `photo-1550751827-4bd374c3f58b?w=1800&q=80` (brightness 0.25)
- Collection preview card 1: `photo-1550751827-4bd374c3f58b?w=600&q=80`
- Collection preview card 2: `photo-1518020382113-a7e8fc38eac9?w=600&q=80`
- Collection preview card 3: `photo-1550751827-4bd374c3f58b?w=600&q=80`

### about.html
- Story image: `photo-1550751827-4bd374c3f58b?w=900&q=80`

### collection.html
- Shack intro image: `photo-1518020382113-a7e8fc38eac9?w=900&q=80`
- Equipment card 1 (IC-7610): `photo-1550751827-4bd374c3f58b?w=600&q=80`
- Equipment card 2 (TS-890S): `photo-1518020382113-a7e8fc38eac9?w=600&q=80`
- Equipment card 3 (K3S): `photo-1550751827-4bd374c3f58b?w=600&q=80`
- Equipment card 4 (IC-9700): `photo-1518020382113-a7e8fc38eac9?w=600&q=80`
- Equipment card 5 (NanoVNA): `photo-1550751827-4bd374c3f58b?w=600&q=80`
- Equipment card 6 (HackRF): `photo-1518020382113-a7e8fc38eac9?w=600&q=80`
- Antenna image: `photo-1550751827-4bd374c3f58b?w=800&q=80`

### process.html
- Workshop card 1: `photo-1550751827-4bd374c3f58b?w=600&q=80`
- Workshop card 2: `photo-1518020382113-a7e8fc38eac9?w=600&q=80`
- Workshop card 3: `photo-1550751827-4bd374c3f58b?w=600&q=80`
- Workshop card 4: `photo-1518020382113-a7e8fc38eac9?w=600&q=80`
- Workshop card 5: `photo-1550751827-4bd374c3f58b?w=600&q=80`
- Workshop card 6: `photo-1518020382113-a7e8fc38eac9?w=600&q=80`
- EmComm image: `photo-1550751827-4bd374c3f58b?w=800&q=80`

### contact.html
- No photographic images (map placeholder is CSS-only)

---

## Compliance Notes

- No face closeups or individual profile photos used
- All images are landscape or object photography
- Photographer credits available via Unsplash attribution if required
- `loading="lazy"` applied to all non-hero images
- Hero background image uses `filter: brightness(0.25)` to meet dark section threshold
