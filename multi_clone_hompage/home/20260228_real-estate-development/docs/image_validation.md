# Image Validation — PARAGON DEVELOPMENT

**Generated:** 2026-02-28
**Status:** Local images required

---

## Image Requirements

All images are served from `images/` directory as local `.webp` files. No external image URLs are used in this template.

| File | Usage | Alt Text | Dimensions |
|---|---|---|---|
| hero-1.webp | Hero left panel (full height, object-fit: cover) | Paragon — luxury residential tower facade | 1200×1800 (portrait) |
| hero-2.webp | Signature property + process phases | Paragon Signature Tower — penthouse level | 1200×900 (landscape) |
| hero-3.webp | Gallery + about leadership | Paragon terrace — panoramic city views | 1200×900 |
| hero-4.webp | Gallery + about leadership | Paragon facade — architectural detail | 1200×900 |
| product-1.webp | Portfolio card: 740 Fifth Avenue | Paragon 740 Fifth — New York penthouse | 800×600 |
| product-2.webp | Portfolio card: Paragon Mayfair | Paragon Mayfair — London private club | 800×600 |
| product-3.webp | Portfolio card: Paragon Marina Estate | Paragon Marina Estate — Dubai waterfront | 800×600 |
| product-4.webp | Portfolio card: Paragon Roppongi | Paragon Roppongi — Tokyo sky residences | 800×600 |
| ambient-1.webp | Gallery, about mission, portfolio | Paragon lobby — book-matched marble atrium | 1200×900 |
| ambient-2.webp | Gallery, process phases, portfolio | Paragon penthouse — bespoke interior design | 1200×900 |
| ambient-3.webp | Gallery, process phases, portfolio | Paragon amenity — members club lounge | 1200×900 |

---

## Suggested Unsplash Search Keywords

For capturing appropriate images:

### hero-1.webp (portrait, architectural exterior)
- "luxury residential tower facade night"
- "modern skyscraper residential exterior"
- "high-rise building glass facade architecture"
- Avoid: people in foreground, generic office buildings

### hero-2.webp through hero-4.webp
- "penthouse terrace city view night"
- "luxury apartment building architectural detail"
- "modern residential architecture exterior"

### product-1.webp through product-4.webp
- "luxury apartment interior living room"
- "penthouse city view glass wall"
- "modern luxury residential building lobby"

### ambient-1.webp through ambient-3.webp
- "luxury hotel lobby marble interior"
- "penthouse living room interior design"
- "private members club lounge interior"

---

## Forbidden IDs (per design brief)

Do NOT use these Unsplash photo IDs:
- photo-1558618666-fcd25c85cd64
- photo-1524504388940-b1c1722653e1
- photo-1551488831-00ddcb6c6bd3
- photo-1543076447-215ad9ba6923
- photo-1503342394128-c104d54dba01

---

## Thumbnail

`thumbnail.webp` — required for manifest generation.

Generate from fullpage.png:
```bash
cwebp -q 80 -resize 600 0 \
  multi_clone_hompage/home/20260228_real-estate-development/images/thumbnail.jpg \
  -o multi_clone_hompage/home/20260228_real-estate-development/images/thumbnail.webp
```

Note: `thumbnail.jpg` and `fullpage.png` are gitignored. Only `thumbnail.webp` is committed.
