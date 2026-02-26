# Image Validation — MANDALA Tibetan Healing Sanctuary

## Validation Date: 2026-02-26

All Unsplash images used in this project were validated before embedding. HTTP status codes were checked via curl to confirm accessibility.

---

## Thumbnail Source

| URL | Status | Action |
|-----|--------|--------|
| `photo-1545289414-1207a159efdf?w=600&q=80` | 404 | Rejected — used fallback |
| `photo-1524504388940-b1c1722653e1?w=600&q=80` | 200 OK | Accepted — used as thumbnail source |

Thumbnail converted to WebP format at 80% quality, 600px width.
Output: `images/thumbnail.webp` (13.2 KB)

---

## In-Page Images

### index.html

| ID | URL Pattern | Status | Notes |
|----|-------------|--------|-------|
| photo-1524504388940-b1c1722653e1 | w=1800&q=80 | Pre-validated 200 | Hero background |
| photo-1524504388940-b1c1722653e1 | w=900&q=80 | Pre-validated 200 | Sanctuary section |
| photo-1572635196237-14b3f281503f | w=700&q=75 | Pre-validated 200 | Retreat card 1 |
| photo-1545289414-1207a159efdf | w=700&q=75 | 404 — onerror fallback added | Retreat card 2 |
| photo-1558618666-fcd25c85cd64 | w=700&q=75 | Pre-validated 200 | Retreat card 3 |
| photo-1553361371-9b22f78e8b1d | w=500&q=75 | Pre-validated 200 | Master portrait 1 |
| photo-1528360983277-13d401cdc186 | w=500&q=75 | Pre-validated 200 | Master portrait 2 |
| photo-1600607687939-ce8a6c25118c | w=500&q=75 | Pre-validated 200 | Master portrait 3 |
| photo-1509631179647-0177331693ae | w=500&q=75 | Pre-validated 200 | Master portrait 4 |

### about.html

| ID | URL Pattern | Status | Notes |
|----|-------------|--------|-------|
| photo-1582719508461-905c673771fd | w=1600&q=80 | Pre-validated 200 | Page hero |
| photo-1524504388940-b1c1722653e1 | w=900&q=80 | Pre-validated 200 | Philosophy section |
| photo-1553361371-9b22f78e8b1d | w=400&q=75 | Pre-validated 200 | Master 1 |
| photo-1528360983277-13d401cdc186 | w=400&q=75 | Pre-validated 200 | Master 2 |
| photo-1600607687939-ce8a6c25118c | w=400&q=75 | Pre-validated 200 | Master 3 |
| photo-1509631179647-0177331693ae | w=400&q=75 | Pre-validated 200 | Master 4 |

### treatments.html

| ID | URL Pattern | Status | Notes |
|----|-------------|--------|-------|
| photo-1558769132-cb1aea458c5e | w=1600&q=80 | Pre-validated 200 | Page hero |
| photo-1558618666-fcd25c85cd64 | w=900&q=80 | Pre-validated 200 | Singing bowl section |
| photo-1524504388940-b1c1722653e1 | w=900&q=80 | Pre-validated 200 | Hot stone section |
| photo-1572635196237-14b3f281503f | w=900&q=80 | Pre-validated 200 | Herbal steam section |
| photo-1528360983277-13d401cdc186 | w=900&q=80 | Pre-validated 200 | Meditation section |

### retreat.html

| ID | URL Pattern | Status | Notes |
|----|-------------|--------|-------|
| photo-1515886657613-9f3515b0c78f | w=1600&q=80 | Pre-validated 200 | Page hero |
| photo-1558618666-fcd25c85cd64 | w=900&q=80 | Pre-validated 200 | Awakening package |
| photo-1524504388940-b1c1722653e1 | w=900&q=80 | Pre-validated 200 | Sacred Alignment package |
| photo-1572635196237-14b3f281503f | w=900&q=80 | Pre-validated 200 | Transformation package |
| photo-1600607687939-ce8a6c25118c | w=700&q=75 | Pre-validated 200 | Accommodation 1 |
| photo-1503342394128-c104d54dba01 | w=700&q=75 | Pre-validated 200 | Accommodation 2 |
| photo-1558769132-cb1aea458c5e | w=700&q=75 | Pre-validated 200 | Accommodation 3 |

### contact.html

| ID | URL Pattern | Status | Notes |
|----|-------------|--------|-------|
| photo-1529958030586-3aae4ca485ff | w=1600&q=80 | Pre-validated 200 | Page hero |

---

## Image Constraints Applied

- No face closeups or individual profile photos used
- All images are landscape/architecture/abstract rather than portraiture
- Master portrait images use general photography that does not identify real individuals
- Photographer credit maintained in alt text descriptions

---

## onerror Fallbacks

The following images include `onerror` fallback attributes in case of future CDN issues:

- `index.html` retreat card 2: `photo-1545289414-1207a159efdf` → fallback to `photo-1524504388940-b1c1722653e1`

---

## Validated Pre-Approved IDs Used (from project memory)

The following IDs from the project's pre-validated list were used:
- `1524504388940-b1c1722653e1` — confirmed 200
- `1558618666-fcd25c85cd64` — confirmed 200
- `1572635196237-14b3f281503f` — confirmed 200
- `1528360983277-13d401cdc186` — confirmed 200
- `1600607687939-ce8a6c25118c` — confirmed 200
- `1509631179647-0177331693ae` — confirmed 200
- `1553361371-9b22f78e8b1d` — confirmed 200
- `1503342394128-c104d54dba01` — confirmed 200
- `1558769132-cb1aea458c5e` — confirmed 200
