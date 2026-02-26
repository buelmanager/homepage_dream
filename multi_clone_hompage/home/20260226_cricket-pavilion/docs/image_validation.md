# Image Validation — THE CREASE Cricket Pavilion

**Slug:** `20260226_cricket-pavilion`
**Validated:** 2026-02-26
**Method:** curl -I (HTTP status check) before embedding

---

## Validation Protocol

All Unsplash images must return HTTP 200 before embedding. Images that returned 404 or other errors were replaced with known-valid alternatives from the project's validated ID list.

```bash
# Validation command used for each image:
STATUS=$(curl -s -o /dev/null -w "%{http_code}" "https://images.unsplash.com/photo-{ID}?w=600&q=80")
```

---

## Image Inventory

| ID | Description | Status | Used In | Dimensions |
|---|---|---|---|---|
| `1543076447-215ad9ba6923` | Sports ground / grass | 200 OK | index.html hero (fallback), thumbnail | w=1800 |
| `1529958030586-3aae4ca485ff` | Green field / landscape | 200 OK | Ground I card, grounds hero | w=900/1600 |
| `1512327536842-5aa37d1ba3e3` | Pastoral / meadow | 200 OK | Ground II card | w=900 |
| `1558618666-fcd25c85cd64` | Interior / formal | 200 OK | Pavilion section, membership hero | w=800 |
| `1524504388940-b1c1722653e1` | English countryside | 200 OK | About hero | w=1600 |
| `1558769132-cb1aea458c5e` | Architecture interior | 200 OK | About building section | w=900 |
| `1509631179647-0177331693ae` | Interior / dark formal | 200 OK | Membership hero | w=1600 |
| `1515886657613-9f3515b0c78f` | Athlete silhouette | 200 OK | Academy about section | w=1400 |
| `1582719508461-905c673771fd` | Sports training | 200 OK | Index academy section | w=900 |
| `1600607687939-ce8a6c25118c` | Architecture exterior | 200 OK | Contact hero | w=1600 |
| `1528360983277-13d401cdc186` | English countryside road | 200 OK | Contact visit section | w=900 |

---

## Failed Validation

| ID | Attempted URL | Status | Replaced With |
|---|---|---|---|
| `1540747913346-19212a4cf528` | Primary thumbnail target | 404 | `1543076447-215ad9ba6923` |

---

## Thumbnail Generation

```bash
# Thumbnail generation commands executed:
STATUS=$(curl -s -o /dev/null -w "%{http_code}" \
  "https://images.unsplash.com/photo-1540747913346-19212a4cf528?w=600&q=80")
# STATUS=404 → used fallback

curl -sL "https://images.unsplash.com/photo-1543076447-215ad9ba6923?w=600&q=80&auto=format&fit=crop" \
  -o /tmp/cp_t.jpg

cwebp -q 80 -resize 600 0 /tmp/cp_t.jpg \
  -o images/thumbnail.webp

# Result: 9,580 bytes, 600×450px, PSNR 46.67 dB
```

---

## URL Format Used

All images loaded with the following Unsplash parameters:
- `?w={width}` — responsive width
- `&q=80` — quality 80 (good compression/quality balance)
- `&auto=format` — automatic format selection
- `&fit=crop` — crop to dimensions

---

## Content Compliance

Per project rules:
- No face closeups
- No individual profile photos
- No identifiable individuals
- All images: landscapes, architecture, interiors, silhouettes, or sports action (distant/abstract)

---

## Image Sources

All images are from Unsplash.com under the Unsplash License, which permits free use for commercial and non-commercial purposes without attribution required. Photographer credits available on Unsplash.com by searching the photo ID.
