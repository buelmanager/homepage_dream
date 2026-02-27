# Image Validation Report — 20260227_kimchi-cellar

## Validation Policy

Per project rules, this template uses **local image paths only** — no external Unsplash or CDN image URLs are embedded in any HTML file. All `<img src="...">` and CSS `background-image: url(...)` references point to local files within the `images/` directory.

## Required Images

The following images must be placed in the `images/` folder before deployment:

| Filename | Used In | Dimensions | Content Description |
|---|---|---|---|
| `hero-1.webp` | index.html — hero background | min 1920×1080px | Dark, moody shot of kimchi jars / cellar interior / onggi pots in earth |
| `hero-2.webp` | about.html, contact.html — page hero | min 1920×1080px | Cellar interior, fermentation atmosphere |
| `hero-3.webp` | index.html — heritage section | min 800×800px | Traditional Korean pottery / cellar / kimchi cultural scene |
| `hero-4.webp` | about.html — founder portrait | min 600×800px | Master kimchi maker hands at work, or onggi pots |
| `product-1.webp` | collection.html, index.html | min 600×800px | Baechu (napa cabbage) kimchi in onggi or ceramic jar |
| `product-2.webp` | collection.html, index.html | min 600×800px | Kkakdugi (cubed radish) kimchi |
| `product-3.webp` | collection.html, index.html | min 600×800px | Oi sobagi (stuffed cucumber) kimchi |
| `product-4.webp` | collection.html, index.html | min 600×800px | White kimchi (baek kimchi) in ceramic jar |
| `ambient-1.webp` | index.html — cellar section, process.html hero | min 900×600px | Underground cellar, onggi pots arranged in earth |
| `ambient-2.webp` | index.html — quote banner | min 1920×600px | Wide atmospheric shot, cellar or fermentation environment |
| `ambient-3.webp` | about.html, process.html — onggi section | min 800×800px | Onggi pottery detail, clay surface texture |
| `thumbnail.webp` | meta.json, manifest | exactly 600px wide | Composite thumbnail representing the site — hero or collection image |

## Image Sourcing Guidelines

When sourcing real images for this template:

**Recommended search terms:**
- "kimchi onggi jars underground cellar"
- "traditional Korean fermentation pottery"
- "김치 항아리 (kimchi hangari)"
- "Jeonju kimchi festival"
- "Korean earthenware dark background"

**Photography style requirements:**
- Dark, rich backgrounds consistent with Forest Night palette (#0F1A10 range)
- No bright white or overexposed backgrounds
- Warm amber/green atmospheric lighting acceptable
- Traditional / artisanal framing preferred over commercial food photography

**License requirements:**
- Creative Commons CC0 or equivalent (no attribution required) preferred
- Unsplash free license acceptable for template preview images
- Before production use, confirm licensing for commercial deployment

**Color check (per project dark-section rules):**
- Run `check-sections.py` after adding hero images
- Ensure hero overlay + image brightness average does not create sections with avg < 15
- Hero images use `filter: brightness(0.45)` overlay — source images should be bright enough to show through

## Image Status

| Filename | Status |
|---|---|
| hero-1.webp | NOT YET PROVIDED — placeholder |
| hero-2.webp | NOT YET PROVIDED — placeholder |
| hero-3.webp | NOT YET PROVIDED — placeholder |
| hero-4.webp | NOT YET PROVIDED — placeholder |
| product-1.webp | NOT YET PROVIDED — placeholder |
| product-2.webp | NOT YET PROVIDED — placeholder |
| product-3.webp | NOT YET PROVIDED — placeholder |
| product-4.webp | NOT YET PROVIDED — placeholder |
| ambient-1.webp | NOT YET PROVIDED — placeholder |
| ambient-2.webp | NOT YET PROVIDED — placeholder |
| ambient-3.webp | NOT YET PROVIDED — placeholder |
| thumbnail.webp | NOT YET PROVIDED — generate after screenshots |

## Thumbnail Generation Command

After site is complete and screenshots are taken:

```bash
cwebp -q 80 -resize 600 0 \
  multi_clone_hompage/home/20260227_kimchi-cellar/images/thumbnail.jpg \
  -o multi_clone_hompage/home/20260227_kimchi-cellar/images/thumbnail.webp
```

Note: Generate `thumbnail.webp` only — `thumbnail.jpg` is in `.gitignore` and must not be committed.
