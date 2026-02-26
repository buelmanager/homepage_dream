# Image Validation Report — DUENDE Flamenco Academy

**Validated:** 2026-02-26
**Method:** `curl -s -o /dev/null -w "%{http_code}"` HTTP status check

---

## Primary Images

| URL | Status | Used In |
|---|---|---|
| `https://images.unsplash.com/photo-1504609813442-a8924e83f76e?w=900&q=85` | 200 ✓ | index.html hero-left, classes.html hero, performances.html hero |
| `https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80` | 200 ✓ | index.html events, index.html art section, performances.html featured |
| `https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=600&q=80` | 200 ✓ | index.html event card 2, performances.html tablao |
| `https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=600&q=80` | 200 ✓ | index.html event card 3 |
| `https://images.unsplash.com/photo-1528360983277-13d401cdc186?w=500&q=80` | 200 ✓ | index.html maestro 1, about.html faculty 1 |
| `https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=500&q=80` | 200 ✓ | index.html maestro 2, about.html faculty 2 |
| `https://images.unsplash.com/photo-1503342394128-c104d54dba01?w=500&q=80` | 200 ✓ | index.html maestro 3, about.html faculty 3 |
| `https://images.unsplash.com/photo-1543076447-215ad9ba6923?w=700&q=80` | 200 ✓ | classes.html intensive section |

---

## Thumbnail

| File | Format | Size | Dimensions | Status |
|---|---|---|---|---|
| `images/thumbnail.webp` | WebP | 33KB | 600×400px | ✓ Created |

**Source:** `photo-1504609813442-a8924e83f76e` (HTTP 200 confirmed before download)
**Conversion:** `cwebp -q 80 -resize 600 0`

---

## Image Selection Notes

- **No face closeups** used — all portraits are full-body or environmental shots
- **No identifiable individuals** — all portrait images are editorial/fashion/generic
- Unsplash IDs cross-referenced against known valid IDs list in project MEMORY.md
- New IDs validated via curl before use

---

## Alt Text Coverage

All `<img>` tags include descriptive `alt` attributes appropriate for SEO and accessibility. All hero images use `loading="eager"`. All below-fold images use `loading="lazy"`.
