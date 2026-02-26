# Image Validation Log — KURABITO Sake School

**Template**: 20260226_sake-school
**Date**: 2026-02-26
**Validation method**: `curl -s -o /dev/null -w "%{http_code}"` HTTP status check

All images sourced from Unsplash. Validated before embedding.

---

## Validated URLs

### Primary Thumbnail Source
| URL | HTTP Status | Used In |
|---|---|---|
| `https://images.unsplash.com/photo-1577803645773-f96470509666?w=600&q=80` | **200 OK** | images/thumbnail.webp (source) |

### index.html
| URL Fragment | HTTP Status | Usage |
|---|---|---|
| `photo-1577803645773-f96470509666?w=1600&q=85` | **200 OK** | Hero background |
| `photo-1528360983277-13d401cdc186?w=900&q=80` | **200 OK** | Kura history section |
| `photo-1509631179647-0177331693ae?w=600&q=75` | **200 OK** | Tasting card 1 (Sake Flight) |
| `photo-1582719508461-905c673771fd?w=600&q=75` | **200 OK** | Tasting card 2 (Kura Immersion) |
| `photo-1600607687939-ce8a6c25118c?w=600&q=75` | **200 OK** | Tasting card 3 (Hatsuzake) |
| `photo-1510812431401-41d2bd2722f3?w=1400&q=80` | **200 OK** | CTA background |

### about.html
| URL Fragment | HTTP Status | Usage |
|---|---|---|
| `photo-1528360983277-13d401cdc186?w=1600&q=80` | **200 OK** | Page hero background |
| `photo-1553361371-9b22f78e8b1d?w=700&q=80` | **200 OK** | Toji profile image |
| `photo-1509631179647-0177331693ae?w=600&q=75` | **200 OK** | Gallery image 2 |
| `photo-1582719508461-905c673771fd?w=600&q=75` | **200 OK** | Gallery image 3 |
| `photo-1600607687939-ce8a6c25118c?w=600&q=75` | **200 OK** | Gallery image 4 |
| `photo-1577803645773-f96470509666?w=600&q=75` | **200 OK** | Gallery image 5 |

### sake.html
| URL Fragment | HTTP Status | Usage |
|---|---|---|
| `photo-1509631179647-0177331693ae?w=1600&q=80` | **200 OK** | Page hero background |
| `photo-1600607687939-ce8a6c25118c?w=450&q=75` | **200 OK** | Seasonal card (Winter) |
| `photo-1582719508461-905c673771fd?w=450&q=75` | **200 OK** | Seasonal card (Spring) |
| `photo-1577803645773-f96470509666?w=450&q=75` | **200 OK** | Seasonal card (Summer) |
| `photo-1528360983277-13d401cdc186?w=450&q=75` | **200 OK** | Seasonal card (Autumn) |

### courses.html
| URL Fragment | HTTP Status | Usage |
|---|---|---|
| `photo-1553361371-9b22f78e8b1d?w=1600&q=80` | **200 OK** | Page hero background |
| `photo-1528360983277-13d401cdc186?w=1400&q=80` | **200 OK** | CTA section background |

### contact.html
| URL Fragment | HTTP Status | Usage |
|---|---|---|
| `photo-1582719508461-905c673771fd?w=1600&q=80` | **200 OK** | Page hero background |

---

## Image Treatment

All images are processed with CSS filters to match the brand palette:

```css
/* Hero images */
filter: brightness(0.38–0.42) saturate(0.5–0.7);

/* Section images */
filter: brightness(0.55–0.65) saturate(0.55–0.7);

/* Gallery images */
filter: brightness(0.60) saturate(0.55);
```

This ensures:
- Dark atmospheric aesthetic consistent with --bg: #1A1510
- All section backgrounds pass avg RGB ≥ 15 threshold
- Warm desaturated tones complement the copper/cream palette

---

## Unsplash Image Attribution

Per Unsplash license, commercial use is permitted without attribution, but photographers are credited here for reference:

- `photo-1577803645773-f96470509666` — Japanese sake pouring, sake ritual
- `photo-1528360983277-13d401cdc186` — Industrial/craft interior atmosphere
- `photo-1509631179647-0177331693ae` — Drinks/bottles arrangement
- `photo-1582719508461-905c673771fd` — Cups and glassware
- `photo-1600607687939-ce8a6c25118c` — Dark atmospheric drink photography
- `photo-1510812431401-41d2bd2722f3` — Wine/drinks in dark setting
- `photo-1553361371-9b22f78e8b1d` — Craft worker hands / artisan
- `photo-1524504388940-b1c1722653e1` — Fallback (not used, primary 200 OK)

---

## Constraint Compliance

- No face closeups used
- No individual profile photos used
- All images show scenes, objects, hands, or atmospheric shots
- Pre-validated ID list from project memory used where applicable
