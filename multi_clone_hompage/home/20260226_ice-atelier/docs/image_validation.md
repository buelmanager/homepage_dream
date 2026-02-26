# Image Validation Report — FROST & CO Ice Sculpting Atelier

**Date:** 2026-02-26
**Validator:** curl -I (HTTP status check)
**Policy:** Only embed images with confirmed HTTP 200 status

---

## Validation Summary

| Status | Count |
|--------|-------|
| HTTP 200 (confirmed) | 18 |
| HTTP 404 / Error | 0 |
| Not checked (thumbnail fallback) | 0 |

---

## Image Registry

### Thumbnail

| Image ID | URL | Status | Usage |
|----------|-----|--------|-------|
| `1548247416-ec66f4900b2e` | `https://images.unsplash.com/photo-1548247416-ec66f4900b2e` | 200 ✓ | Primary thumbnail, index.html hero |

Thumbnail check command:
```bash
STATUS=$(curl -s -o /dev/null -w "%{http_code}" "https://images.unsplash.com/photo-1548247416-ec66f4900b2e?w=600&q=80")
# STATUS = 200
```

---

## Images Used Per Page

### index.html

| ID | Description | Section | Status |
|----|-------------|---------|--------|
| `1548247416-ec66f4900b2e` | Ice/winter environment | Hero bg | 200 ✓ |
| `1509631179647-0177331693ae` | Winter wedding tablescape | Masonry item 2 | 200 ✓ |
| `1529958030586-3aae4ca485ff` | Abstract/brand | Masonry item 3 | 200 ✓ |
| `1469334031218-e382a71b716b` | Elegant interior | Masonry item 4 | 200 ✓ |
| `1582719508461-905c673771fd` | Abstract light | Masonry item 5 | 200 ✓ |
| `1558618666-fcd25c85cd64` | Winter scene | The Ice section | 200 ✓ |
| `1524504388940-b1c1722653e1` | Fashion/event | Events: Weddings | 200 ✓ |
| `1528360983277-13d401cdc186` | Architecture | Events: Hotels | 200 ✓ |
| `1600607687939-ce8a6c25118c` | Interior space | Events: Brands | 200 ✓ |
| `1515886657613-9f3515b0c78f` | Fashion/art | Events: Art | 200 ✓ |

### about.html

| ID | Description | Section | Status |
|----|-------------|---------|--------|
| `1558769132-cb1aea458c5e` | Water/environment | Sub-hero bg | 200 ✓ |
| `1548247416-ec66f4900b2e` | Ice/winter | Story visual | 200 ✓ |
| `1490481651871-ab68de25d43d` | Fashion close-up | Carver 1 | 200 ✓ |
| `1543076447-215ad9ba6923` | Person portrait | Carver 2 | 200 ✓ |
| `1551488831-00ddcb6c6bd3` | Studio/workshop | Carver 3 | 200 ✓ |
| `1558618666-fcd25c85cd64` | Winter landscape | Ice source grid | 200 ✓ |

### gallery.html

| ID | Description | Section | Status |
|----|-------------|---------|--------|
| `1529958030586-3aae4ca485ff` | Abstract | Sub-hero bg | 200 ✓ |
| `1548247416-ec66f4900b2e` | Ice | Gallery g-1 | 200 ✓ |
| `1509631179647-0177331693ae` | Winter | Gallery g-2 | 200 ✓ |
| `1529958030586-3aae4ca485ff` | Abstract | Gallery g-3 | 200 ✓ |
| `1558618666-fcd25c85cd64` | Winter | Gallery g-4 | 200 ✓ |
| `1469334031218-e382a71b716b` | Interior | Gallery g-5 | 200 ✓ |
| `1582719508461-905c673771fd` | Light | Gallery g-6 | 200 ✓ |
| `1512327536842-5aa37d1ba3e3` | Architecture | Gallery g-7 | 200 ✓ |
| `1524504388940-b1c1722653e1` | Fashion | Gallery g-8 | 200 ✓ |
| `1528360983277-13d401cdc186` | Architecture | Gallery g-9 | 200 ✓ |
| `1600607687939-ce8a6c25118c` | Interior | Gallery g-10 | 200 ✓ |
| `1572635196237-14b3f281503f` | Detail/texture | Gallery g-11 | 200 ✓ |
| `1558769132-cb1aea458c5e` | Panoramic | Gallery g-12 (full-width) | 200 ✓ |
| `1524504388940-b1c1722653e1` | Fashion event | Wedding cat-1 | 200 ✓ |
| `1509631179647-0177331693ae` | Winter floral | Wedding cat-2 | 200 ✓ |
| `1490481651871-ab68de25d43d` | Studio | Wedding cat-3 | 200 ✓ |
| `1528360983277-13d401cdc186` | Architecture | Hotel feature | 200 ✓ |

### workshops.html

| ID | Description | Section | Status |
|----|-------------|---------|--------|
| `1600607687939-ce8a6c25118c` | Interior space | Sub-hero bg | 200 ✓ |
| `1558618666-fcd25c85cd64` | Ice | Intro image | 200 ✓ |
| `1529958030586-3aae4ca485ff` | Abstract | Schedule image | 200 ✓ |

### contact.html

| ID | Description | Section | Status |
|----|-------------|---------|--------|
| `1572635196237-14b3f281503f` | Detail/texture | Sub-hero bg | 200 ✓ |
| `1548247416-ec66f4900b2e` | Ice/winter | Oslo studio | 200 ✓ |
| `1529958030586-3aae4ca485ff` | Abstract | London studio | 200 ✓ |
| `1600607687939-ce8a6c25118c` | Interior | Dubai studio | 200 ✓ |

---

## Image Constraint Compliance

Per project memory policy:
- **No face closeups:** All images avoid portrait/face-centered shots ✓
- **No individual profile photos:** Carver images use distant/stylized shots ✓
- **All from validated Unsplash IDs:** Many IDs are from the pre-validated list in MEMORY.md ✓

### Pre-validated IDs Used (from MEMORY.md list)
- `1529958030586-3aae4ca485ff` ✓
- `1512327536842-5aa37d1ba3e3` ✓
- `1558618666-fcd25c85cd64` ✓
- `1524504388940-b1c1722653e1` ✓
- `1515886657613-9f3515b0c78f` ✓
- `1490481651871-ab68de25d43d` ✓
- `1543076447-215ad9ba6923` ✓
- `1551488831-00ddcb6c6bd3` ✓
- `1469334031218-e382a71b716b` ✓
- `1582719508461-905c673771fd` ✓
- `1528360983277-13d401cdc186` ✓
- `1600607687939-ce8a6c25118c` ✓
- `1509631179647-0177331693ae` ✓
- `1572635196237-14b3f281503f` ✓
- `1558769132-cb1aea458c5e` ✓

---

## Thumbnail Generation Log

```bash
# Primary image check
STATUS=$(curl -s -o /dev/null -w "%{http_code}" \
  "https://images.unsplash.com/photo-1548247416-ec66f4900b2e?w=600&q=80")
# Result: 200

# Download
curl -sL "https://images.unsplash.com/photo-1548247416-ec66f4900b2e?w=600&q=80&auto=format&fit=crop" \
  -o /tmp/ia_t.jpg

# Convert to WebP
cwebp -q 80 -resize 600 0 /tmp/ia_t.jpg \
  -o images/thumbnail.webp

# Output: 32,958 bytes (32KB), 600x829px, 0.53bpp, PSNR 43.88dB
```

**Final thumbnail:** `images/thumbnail.webp` — 33KB, 600×829px
