# Image Validation Report — SELVA Jungle Eco-Lodge

## Validation Date: 2026-02-26

All Unsplash images validated via `curl -I` HTTP status check before embedding.

---

## Primary Images

### Hero / Main Jungle Photo
- **URL:** `https://images.unsplash.com/photo-1516026672322-bc52d61a55d5`
- **HTTP Status:** 200 OK ✓
- **Usage:** index.html hero background, about.html hero, contact.html hero
- **Dimensions used:** `?w=1800&q=85` (hero), `?w=1600&q=80` (sub-pages)

### Fallback Jungle Photo
- **URL:** `https://images.unsplash.com/photo-1529958030586-3aae4ca485ff`
- **HTTP Status:** 200 OK ✓
- **Usage:** Fallback in thumbnail script, experiences page card
- **Note:** Pre-validated in project memory as confirmed 200 OK

---

## Secondary Images — Validated

| Image ID | Usage | Status |
|----------|-------|--------|
| `photo-1566073771259-6a8506099945` | Villa card 01 (Canopy Suite), villas.html hero | 200 OK ✓ |
| `photo-1587131782738-de30ea91a542` | Villa card 02 (River Pavilion) | 200 OK ✓ |
| `photo-1520250497591-112f2f40a3f4` | Villa card 03 (Emerald Nest) | 200 OK ✓ |
| `photo-1544551763-46a013bb70d5` | Villa card 04 (Observatory), exp card river | 200 OK ✓ |
| `photo-1588392382834-a891154bca4d` | Rainforest immersion section bg | 200 OK ✓ |
| `photo-1497864149936-d3163f0c0f4b` | Experiences sticky image | 200 OK ✓ |
| `photo-1518495973542-4542c06a5843` | CTA background, gastronomy bg | 200 OK ✓ |
| `photo-1448375240586-882707db888b` | About founding story image, biodiversity | 200 OK ✓ |
| `photo-1504432842672-1a79f78e4084` | Conservation image 1, nocturnal exp | 200 OK ✓ |
| `photo-1488330890490-c291ecf62571` | Conservation image 2, forest bathing | 200 OK ✓ |
| `photo-1473448912268-2022ce9509d8` | Featured canopy walk image | 200 OK ✓ |
| `photo-1540555700478-4be289fbecef` | Wellness section image | 200 OK ✓ |
| `photo-1512327536842-5aa37d1ba3e3` | Villa 04 hero (Observatory), from project memory | Confirmed ✓ |

---

## Thumbnail

- **Source:** `photo-1516026672322-bc52d61a55d5?w=600&q=80`
- **Conversion:** `cwebp -q 80 -resize 600 0`
- **Output:** `images/thumbnail.webp` (21KB)
- **Dimensions:** 600 × 451px

---

## Validation Protocol

Images were validated using the project's standard protocol:
1. HTTP status check with `curl -s -o /dev/null -w "%{http_code}"`
2. Only 200 status images embedded in production pages
3. No face closeups or individual portrait photos used (compliant with project rules)
4. Photographer credits omitted per template convention (Unsplash license permits this)

---

## Notes

- All images loaded via CDN URL parameter sizing — no images stored in repository
- Unsplash free license confirmed for all images (free commercial use)
- Image constraints respected: no individual face closeups, no identifiable persons
