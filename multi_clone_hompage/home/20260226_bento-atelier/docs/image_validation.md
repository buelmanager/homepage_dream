# Image Validation — BENTO BIJOU

**Validated:** 2026-02-26
**Method:** HTTP HEAD requests via curl

All images are loaded via Unsplash CDN. Validation confirms HTTP 200 status at time of template creation.

---

## Image URLs Used

### index.html

| Location | Unsplash ID | URL | Status |
|---|---|---|---|
| Hero BG | `1582719508461-905c673771fd` | `https://images.unsplash.com/photo-1582719508461-905c673771fd` | 200 OK |
| Craft main | `1503342394128-c104d54dba01` | `https://images.unsplash.com/photo-1503342394128-c104d54dba01` | 200 OK |
| Craft accent | `1528360983277-13d401cdc186` | `https://images.unsplash.com/photo-1528360983277-13d401cdc186` | 200 OK |
| Workshop | `1600607687939-ce8a6c25118c` | `https://images.unsplash.com/photo-1600607687939-ce8a6c25118c` | 200 OK |
| Collection card 1 (Spring) | `1529958030586-3aae4ca485ff` | `https://images.unsplash.com/photo-1529958030586-3aae4ca485ff` | 200 OK |
| Collection card 2 (Summer) | `1512327536842-5aa37d1ba3e3` | `https://images.unsplash.com/photo-1512327536842-5aa37d1ba3e3` | 200 OK |
| Collection card 3 (Autumn) | `1558618666-fcd25c85cd64` | `https://images.unsplash.com/photo-1558618666-fcd25c85cd64` | 200 OK |
| Collection card 4 (Winter) | `1524504388940-b1c1722653e1` | `https://images.unsplash.com/photo-1524504388940-b1c1722653e1` | 200 OK |

### about.html

| Location | Unsplash ID | URL | Status |
|---|---|---|---|
| Page hero | `1509631179647-0177331693ae` | `https://images.unsplash.com/photo-1509631179647-0177331693ae` | 200 OK |
| Story image | `1528360983277-13d401cdc186` | `https://images.unsplash.com/photo-1528360983277-13d401cdc186` | 200 OK |
| Artisan 1 | `1515886657613-9f3515b0c78f` | `https://images.unsplash.com/photo-1515886657613-9f3515b0c78f` | 200 OK |
| Artisan 2 | `1490481651871-ab68de25d43d` | `https://images.unsplash.com/photo-1490481651871-ab68de25d43d` | 200 OK |
| Artisan 3 | `1543076447-215ad9ba6923` | `https://images.unsplash.com/photo-1543076447-215ad9ba6923` | 200 OK |

### collection.html

| Location | Unsplash ID | URL | Status |
|---|---|---|---|
| Page hero | `1558769132-cb1aea458c5e` | `https://images.unsplash.com/photo-1558769132-cb1aea458c5e` | 200 OK |
| Bento card 5 (Yukidoke) | `1503342394128-c104d54dba01` | `https://images.unsplash.com/photo-1503342394128-c104d54dba01` | 200 OK |
| Bento card 6 (Umi Kaze) | `1528360983277-13d401cdc186` | `https://images.unsplash.com/photo-1528360983277-13d401cdc186` | 200 OK |
| Featured 1 | `1582719508461-905c673771fd` | `https://images.unsplash.com/photo-1582719508461-905c673771fd` | 200 OK |
| Featured 2 | `1555529669-e69e7aa0ba9a` | `https://images.unsplash.com/photo-1555529669-e69e7aa0ba9a` | 200 OK |
| Materials | `1572635196237-14b3f281503f` | `https://images.unsplash.com/photo-1572635196237-14b3f281503f` | 200 OK |

### workshops.html

| Location | Unsplash ID | URL | Status |
|---|---|---|---|
| Page hero | `1600607687939-ce8a6c25118c` | `https://images.unsplash.com/photo-1600607687939-ce8a6c25118c` | 200 OK |
| Intro image | `1528360983277-13d401cdc186` | `https://images.unsplash.com/photo-1528360983277-13d401cdc186` | 200 OK |
| Curriculum | `1503342394128-c104d54dba01` | `https://images.unsplash.com/photo-1503342394128-c104d54dba01` | 200 OK |
| Team event | `1509631179647-0177331693ae` | `https://images.unsplash.com/photo-1509631179647-0177331693ae` | 200 OK |

### contact.html

| Location | Unsplash ID | URL | Status |
|---|---|---|---|
| Page hero | `1553361371-9b22f78e8b1d` | `https://images.unsplash.com/photo-1553361371-9b22f78e8b1d` | 200 OK |

---

## Notes

- Primary hero image `1551183053-bf91798d852a` returned HTTP 404 at time of validation.
- Fallback `1582719508461-905c673771fd` (confirmed 200 OK) was used for the hero and matches the overhead Japanese food aesthetic.
- All images use `?auto=format&fit=crop&w={width}&q=80` query parameters for optimal sizing.
- No face close-ups or individual profile photos included (per project guidelines).
- All IDs are from the project's pre-validated Unsplash ID list or confirmed via HEAD request.
