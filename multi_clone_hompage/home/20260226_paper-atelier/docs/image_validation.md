# Image Validation Report — FOLIO Paper Atelier

**Template:** 20260226_paper-atelier
**Validated:** 2026-02-26
**Method:** `curl -I {url}` HTTP status check

---

## Validation Results

All images were validated by HTTP status before embedding.

| # | Unsplash ID                        | Usage                        | HTTP Status | Dimensions |
|---|------------------------------------|------------------------------|-------------|------------|
| 1 | 1456735190827-d1262f71b8a3         | index hero bg, collection hero | 200 OK    | 1800×1200  |
| 2 | 1529958030586-3aae4ca485ff         | papers grid, collection card | 200 OK      | 600×400    |
| 3 | 1512327536842-5aa37d1ba3e3         | papers grid, collection card | 200 OK      | 600×400    |
| 4 | 1558618666-fcd25c85cd64            | papers grid, collection card | 200 OK      | 600×400    |
| 5 | 1524504388940-b1c1722653e1         | papers grid, collection card | 200 OK      | 600×400    |
| 6 | 1485125639709-a60c3a500bf1         | papers grid, private workshop | 200 OK     | 600×400    |
| 7 | 1582719508461-905c673771fd         | papers grid, workshops       | 200 OK      | 600×400    |
| 8 | 1528360983277-13d401cdc186         | heritage section, workshops  | 200 OK      | 700×500    |
| 9 | 1509631179647-0177331693ae         | heritage accent, about hero  | 200 OK      | 700×500    |
|10 | 1515886657613-9f3515b0c78f         | weddings gallery             | 200 OK      | 500×400    |
|11 | 1490481651871-ab68de25d43d         | weddings gallery             | 200 OK      | 500×400    |
|12 | 1553361371-9b22f78e8b1d            | contact visit section        | 200 OK      | 700×500    |

**Total images validated:** 12
**Pass rate:** 12/12 (100%)

---

## Thumbnail Validation

| File                 | Status    | Size    | Format | Dimensions |
|----------------------|-----------|---------|--------|------------|
| images/thumbnail.webp| Created   | ~28 KB  | WebP   | 600×401    |

Source URL: `https://images.unsplash.com/photo-1456735190827-d1262f71b8a3?w=600&q=80`
HTTP status at time of download: 200 OK
Conversion: cwebp -q 80 -resize 600 0

---

## URL Pattern Used

All images use the following URL pattern:
```
https://images.unsplash.com/photo-{ID}?w={width}&auto=format&fit=crop&q={quality}
```

Parameters:
- `auto=format` — serves WebP to modern browsers automatically
- `fit=crop` — crops to fill specified dimensions
- `q=80` — quality (hero images use q=85)
- Width ranges: 400px (collection cards), 600px (grid), 700px (featured), 1600–1800px (hero backgrounds)

---

## Content Constraints Observed

Per project rules:
- No face closeups embedded
- No individual profile photos (maker cards use abstract/material images)
- All images verified accessible at time of creation

---

## Notes

The primary thumbnail source (1456735190827) returned HTTP 200 and was used for both the site hero and the thumbnail.webp generation. No fallback was required.
