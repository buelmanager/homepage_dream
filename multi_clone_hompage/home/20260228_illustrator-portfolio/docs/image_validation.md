# Image Validation — 20260228_illustrator-portfolio

**Validated**: 2026-02-28
**Total images**: 22
**All validated**: HTTP 200 confirmed via curl -I before download

---

## Validation Results

| File | Unsplash ID | HTTP Status | Category |
|------|-------------|-------------|----------|
| hero-1.webp | 1513364776144-60967b0f800f | 200 OK | Hero portrait card |
| hero-2.webp | 1618005182384-a83a8bd57fbe | 200 OK | Hero portrait card |
| hero-3.webp | 1579783902614-a3fb3927b6a5 | 200 OK | Hero portrait card |
| about-1.webp | 1615799998603-7c6270a45196 | 200 OK | Artist at work |
| about-2.webp | 1524504388940-b1c1722653e1 | 200 OK | Studio portrait |
| portfolio-1.webp | 1558618666-fcd25c85cd64 | 200 OK | Portfolio — Nocturne Series |
| portfolio-2.webp | 1529958030586-3aae4ca485ff | 200 OK | Portfolio — The New Yorker |
| portfolio-3.webp | 1512327536842-5aa37d1ba3e3 | 200 OK | Portfolio — Book Cover |
| portfolio-4.webp | 1558769132-cb1aea458c5e | 200 OK | Portfolio — Vogue Italia |
| portfolio-5.webp | 1503342394128-c104d54dba01 | 200 OK | Portfolio — Private Commission |
| portfolio-6.webp | 1572635196237-14b3f281503f | 200 OK | Portfolio — Harper's Magazine |
| portfolio-7.webp | 1600607687939-ce8a6c25118c | 200 OK | Portfolio — Book Cover |
| portfolio-8.webp | 1515886657613-9f3515b0c78f | 200 OK | Portfolio — Moth Series |
| portfolio-9.webp | 1490481651871-ab68de25d43d | 200 OK | Portfolio — Atlas of Forgotten |
| process-1.webp | 1528360983277-13d401cdc186 | 200 OK | Process — Final render |
| process-2.webp | 1553361371-9b22f78e8b1d | 200 OK | Process — Research |
| medium-1.webp | 1584917865442-de89df76afd3 | 200 OK | Watercolour medium |
| medium-2.webp | 1469334031218-e382a71b716b | 200 OK | Digital editorial |
| medium-3.webp | 1485125639709-a60c3a500bf1 | 200 OK | Mixed media |
| gallery-1.webp | 1509631179647-0177331693ae | 200 OK | Gallery — Granta |
| gallery-2.webp | 1551488831-00ddcb6c6bd3 | 200 OK | Gallery — Paris Review |
| gallery-3.webp | 1543076447-215ad9ba6923 | 200 OK | Gallery — Book Cover |

---

## Forbidden IDs Check

The following IDs were on the forbidden list and were NOT used:

- 1010657 — excluded
- 1011302 — excluded
- 1029604 — excluded
- 1099680 — excluded
- 1105666 — excluded
- 1123982 — excluded
- 1144687 — excluded
- 1148820 — excluded
- 1152077 — excluded
- 1181216 — excluded

---

## Image Processing

All images downloaded and converted with:
```bash
cwebp -q 82 -resize 1920 0 /tmp/img_dl.jpg -o images/{name}.webp
```

Output format: WebP, 82% quality, 1920px width (height proportional)

Note: Only `thumbnail.webp` is tracked in git. `thumbnail.jpg` and `fullpage.png` are gitignored.
