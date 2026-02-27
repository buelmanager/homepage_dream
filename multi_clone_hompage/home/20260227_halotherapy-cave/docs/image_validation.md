# Image Validation Report — HALITE Salt Cave Therapy

**Template:** `20260227_halotherapy-cave`
**Date:** 2026-02-27

## Image Strategy

This template uses **local .webp files** in the `images/` directory — not external Unsplash URLs. This approach eliminates URL expiry and broken image risks.

## Required Images

All images should be placed in:
`multi_clone_hompage/home/20260227_halotherapy-cave/images/`

### Hero Images

| File | Usage | Dimensions | Notes |
|------|-------|------------|-------|
| `hero-1.webp` | Hero Layer 1 (Ken Burns primary) | 1920×1080 min | Glowing salt cave interior, warm amber light |
| `hero-2.webp` | Hero Layer 2 (luminosity blend) | 1920×1080 min | Salt crystal texture / cave overlay |
| `hero-3.webp` | process.html hero bg, collection.html | 1920×1080 min | Salt cave ambient, moodier tone |
| `hero-4.webp` | process.html Step 04 (therapy session) | 1920×1080 min | Person reclining in salt cave |

### Product Images (Sessions)

| File | Usage | Dimensions | Notes |
|------|-------|------------|-------|
| `product-1.webp` | Collection: Respiratory Relief | 800×600 min | Salt cave session in progress |
| `product-2.webp` | Collection: Children's Cave | 800×600 min | Child-friendly cave interior |
| `product-3.webp` | Collection: Couples Salt Room | 800×600 min | Intimate double cave/soft amber light |
| `product-4.webp` | Collection: Overnight Retreat | 800×600 min | Retreat chamber, sleeping/dark atmosphere |

### Ambient Images

| File | Usage | Dimensions | Notes |
|------|-------|------------|-------|
| `ambient-1.webp` | Chamber section (index), benefits (about), process Step 01 | 1200×900 min | Salt cave wall detail / close-up |
| `ambient-2.webp` | Heritage section (index), origin (about), process Step 02 | 800×1000 min | Portrait orientation, Himalayan mineral context |
| `ambient-3.webp` | about.html page hero bg, process Step 05 | 1920×600 min | Post-session/integration space |

### Thumbnail

| File | Usage | Notes |
|------|-------|-------|
| `thumbnail.webp` | Template manifest, preview cards | 600px wide, generated from fullpage screenshot |

## Image Content Guidelines

### Subject Matter
- Salt cave interiors with Himalayan pink salt walls
- Warm amber chromotherapy lighting
- Atmospheric, mineral textures
- Reclining chairs within crystalline environments
- Abstract salt crystal close-ups
- Himalayan mountain or mineral contexts

### Prohibited Content
- Close-up individual face portraits (per project image policy)
- Identifiable individuals
- Dark images with avg(R+G+B)/3 below 20 (dark section threshold)
- Images with strong filter effects that flatten detail

## Source Suggestions (for image procurement)

When sourcing images, search for:
- "Himalayan salt cave interior"
- "halotherapy salt room"
- "salt crystal amber light"
- "spa cave therapy"
- "Himalayan rock salt texture"

Recommended sources:
- Unsplash (validate all URLs with curl -I before use)
- Pexels (free commercial license)
- Adobe Stock (licensed)
- Commissioned photography

## Thumbnail Generation

Once the site is complete and images are placed, generate thumbnail.webp:

```bash
# 1. Capture full page screenshot
python3 scripts/capture-page.py 20260227_halotherapy-cave

# 2. Convert to thumbnail.webp (600px wide, quality 80)
cwebp -q 80 -resize 600 0 \
  multi_clone_hompage/home/20260227_halotherapy-cave/images/thumbnail.jpg \
  -o multi_clone_hompage/home/20260227_halotherapy-cave/images/thumbnail.webp

# Verify thumbnail.webp is > 5KB (not blank)
ls -lh multi_clone_hompage/home/20260227_halotherapy-cave/images/thumbnail.webp
```

## Validation Status

| Image | Status | Notes |
|-------|--------|-------|
| hero-1.webp | Pending | Local file — place in images/ directory |
| hero-2.webp | Pending | Local file — place in images/ directory |
| hero-3.webp | Pending | Local file — place in images/ directory |
| hero-4.webp | Pending | Local file — place in images/ directory |
| product-1.webp | Pending | Local file — place in images/ directory |
| product-2.webp | Pending | Local file — place in images/ directory |
| product-3.webp | Pending | Local file — place in images/ directory |
| product-4.webp | Pending | Local file — place in images/ directory |
| ambient-1.webp | Pending | Local file — place in images/ directory |
| ambient-2.webp | Pending | Local file — place in images/ directory |
| ambient-3.webp | Pending | Local file — place in images/ directory |
| thumbnail.webp | Pending | Generate after images are placed |

## Dark Section Check

After adding images, run dark section validation:

```bash
python3 scripts/check-sections.py 20260227_halotherapy-cave
```

Expected passing criteria (DARK_THRESHOLD=15):
- All section backgrounds use `var(--bg)` = `#0A1818` = avg(10+24+24)/3 = 19.3 — PASSES
- `var(--surface)` = `#0F2020` = avg(15+32+32)/3 = 26.3 — PASSES
- Footer: `background: var(--bg)` — PASSES
- No hardcoded hex values below avg 15
