# Image Validation — 20260228_corporate-events

## Status: Local Images Required

All images in this project are local WebP files to be placed in the `images/` directory. This project does not use external Unsplash CDN URLs.

---

## Required Images

### Hero Images (hero-1 through hero-4.webp)
Used in: index.html (hero background), process.html (stage blocks), about.html

**Sourcing keywords:**
- corporate gala event dark
- luxury conference stage lighting
- premium business dinner banquet
- corporate keynote LED stage

**Forbidden Unsplash IDs (do not reuse from brief):**
- photo-1558618666-fcd25c85cd64
- photo-1524504388940-b1c1722653e1
- photo-1551488831-00ddcb6c6bd3
- photo-1543076447-215ad9ba6923
- photo-1503342394128-c104d54dba01

### Product Images (product-1 through product-4.webp)
Used in: index.html (services grid), collection.html (collection cards)

**Sourcing keywords per image:**
- product-1: black-tie awards ceremony gala
- product-2: corporate product launch stage reveal
- product-3: executive leadership summit boardroom
- product-4: brand experience immersive installation

### Ambient Images (ambient-1 through ambient-3.webp)
Used in: index.html (gallery), about.html (team cards)

**Sourcing keywords:**
- ambient-1: luxury corporate event venue reception
- ambient-2: corporate conference networking
- ambient-3: executive retreat outdoor luxury venue

---

## Thumbnail

### thumbnail.webp
- **Source:** Generated from `images/thumbnail.jpg` using `cwebp`
- **Dimensions:** 600px wide (height auto)
- **Quality:** 80

**Generation command:**
```bash
cwebp -q 80 -resize 600 0 \
  multi_clone_hompage/home/20260228_corporate-events/images/thumbnail.jpg \
  -o multi_clone_hompage/home/20260228_corporate-events/images/thumbnail.webp
```

---

## CSS Image Treatment

All images are served through CSS filter overlays to maintain the Deep Teal color palette:

| Usage | Filter | Purpose |
|---|---|---|
| Hero background | `brightness(0.4)` | Dark enough for white text overlay |
| Gallery items | `brightness(0.75)` | Visible but darker for label contrast |
| Service item images | `brightness(0.7)` | Content-paired images |
| Team card images | `brightness(0.7) saturate(0.9)` | Desaturated to teal-compatible tone |
| Story section image | `brightness(0.75)` | Balanced for layout |

---

## Dark Section Check

**Target threshold:** Row avg >= 15 (check-sections.py DARK_THRESHOLD = 15)

Critical CSS variables used for section backgrounds:
- `var(--bg)`: `#0A1818` → avg(10+24+24)/3 = 19.3 ✓
- `var(--surface)`: `#0F2020` → avg(15+32+32)/3 = 26.3 ✓
- `var(--surface2)`: `#142828` → avg(20+40+40)/3 = 33.3 ✓
- `var(--border)`: `#102222` → border/divider only, not background ✓

No section uses a background darker than `--bg` (#0A1818, avg=19.3).
Footer uses `background: var(--bg)` on all 5 pages — compliant.
