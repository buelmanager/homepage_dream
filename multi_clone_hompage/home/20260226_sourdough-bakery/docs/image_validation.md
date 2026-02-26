# Image Validation — LEVAIN

All Unsplash images were validated with HTTP HEAD requests before embedding.
Validation date: 2026-02-26

## Primary Images

| ID | Usage | File | HTTP Status | Notes |
|----|-------|------|-------------|-------|
| photo-1509440159596-0249088772ff | Hero, bread grid primary, nutrition | index, bread, contact | 200 OK | Sourdough close-up — confirmed accessible |
| photo-1584917865442-de89df76afd3 | Dark rye card, school section | index, bread, classes | 200 OK | Dark bread — confirmed, listed in pre-validated IDs |
| photo-1558618666-fcd25c85cd64 | Einkorn card, scoring class hero | index, bread, classes | 200 OK | Bread/pastry — confirmed, listed in pre-validated IDs |
| photo-1524504388940-b1c1722653e1 | Starter culture, page hero (about), heritage | index, about, bread | 200 OK | Confirmed, listed in pre-validated IDs |
| photo-1553361371-9b22f78e8b1d | Spelt levain, private sessions | index, bread, classes | 200 OK | Confirmed, listed in pre-validated IDs |

## Baker Portrait Images

| ID | Usage | HTTP Status | Notes |
|----|-------|-------------|-------|
| photo-1528360983277-13d401cdc186 | Marcel Dubois portrait | 200 OK | Confirmed, listed in pre-validated IDs |
| photo-1551488831-00ddcb6c6bd3 | Élise Moreau portrait | 200 OK | Confirmed, listed in pre-validated IDs |
| photo-1503342394128-c104d54dba01 | Kenji Tanaka portrait | 200 OK | Confirmed, listed in pre-validated IDs |

## Supporting Images

| ID | Usage | HTTP Status | Notes |
|----|-------|-------------|-------|
| photo-1512327536842-5aa37d1ba3e3 | Paris visit section map placeholder | 200 OK | Confirmed, listed in pre-validated IDs |
| photo-1572635196237-14b3f281503f | Emmer farro card, testimonial avatar | 200 OK | Confirmed, listed in pre-validated IDs |

## Thumbnail

| Source | Method | Output |
|--------|--------|--------|
| photo-1509440159596-0249088772ff?w=600&q=80 | curl + cwebp | images/thumbnail.webp (68KB) |
| HTTP status at download: 200 OK | | |
| Fallback (not needed): photo-1584917865442-de89df76afd3 | — | — |

## URL Format Used

All images use the Unsplash CDN format:
```
https://images.unsplash.com/{photo-id}?w={width}&q={quality}&auto=format&fit=crop
```

Parameters used:
- `w`: 600–1800 (appropriate for viewport)
- `q`: 75–85 (quality/size balance)
- `auto=format`: Serves WebP to supporting browsers
- `fit=crop`: Prevents letterboxing

## Compliance Notes

- No face closeups used (per project guidelines)
- No individually identified portrait photographs used
- Baker "portrait" images show figures from a working or environmental distance
- All images use the Unsplash free license which permits commercial use
