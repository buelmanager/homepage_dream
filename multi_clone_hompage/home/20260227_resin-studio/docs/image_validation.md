# Image Validation — 20260227_resin-studio

## Template: ARDENT Resin Art Studio

**Date:** 2026-02-27

---

## Image Strategy

This template uses **local images only** — all image references use relative paths within the template directory. No external Unsplash URLs or CDN image URLs are embedded in the HTML files.

All images must be placed in `images/` relative to the template root before the template can be fully rendered.

---

## Required Images

| Path | Usage | Pages |
|---|---|---|
| `images/hero-1.webp` | Hero parallax layer 1 (layer-1) | index.html |
| `images/hero-2.webp` | Hero parallax layer 2 (layer-2, overlay blend) | index.html |
| `images/hero-3.webp` | Contact page hero background | contact.html |
| `images/hero-4.webp` | Reserved / additional hero asset | — |
| `images/product-1.webp` | Collection: Ember Flow table | index.html, collection.html, process.html |
| `images/product-2.webp` | Collection: Inferno Tide wall art | index.html, collection.html, process.html |
| `images/product-3.webp` | Collection: Molten Drop jewelry | index.html, collection.html, process.html |
| `images/product-4.webp` | Collection: Cinderfall vessel | index.html, collection.html |
| `images/ambient-1.webp` | Atelier interior / studio scene | index.html, about.html, process.html, collection.html |
| `images/ambient-2.webp` | Founder / studio at work | about.html, collection.html |
| `images/ambient-3.webp` | Studio atmosphere | collection.html, process.html |
| `images/thumbnail.webp` | Template manifest thumbnail (600px wide) | meta.json reference |

---

## Image Constraints

Per project rules:
- No face closeups
- No individual profile photos
- All images should be resin art / craft studio appropriate

---

## Recommended Unsplash Search Terms

If sourcing images from Unsplash, use these search terms:

| Slot | Search Term Suggestions |
|---|---|
| hero-1.webp | "resin art pour", "epoxy pour abstract", "liquid paint dark" |
| hero-2.webp | "abstract fluid art", "resin texture close", "acrylic pour" |
| hero-3.webp | "craft studio interior dark", "artisan workshop warm light" |
| hero-4.webp | "resin workshop tools", "epoxy craft materials" |
| product-1.webp | "resin table wood", "epoxy river table", "live edge resin" |
| product-2.webp | "abstract painting red orange", "fluid art canvas large" |
| product-3.webp | "resin jewelry pendant", "amber resin handmade" |
| product-4.webp | "ceramic bowl dark", "craft vessel artisan" |
| ambient-1.webp | "artist studio interior", "craft workshop warm" |
| ambient-2.webp | "craftsperson at work", "studio workshop light" |
| ambient-3.webp | "studio atmosphere texture", "dark warmth interior art" |

---

## Thumbnail Generation

After images are placed, generate thumbnail.webp:

```bash
# Capture fullpage screenshot
python3 scripts/capture-page.py 20260227_resin-studio

# Convert to thumbnail.webp (600px wide)
cwebp -q 80 -resize 600 0 \
  multi_clone_hompage/home/20260227_resin-studio/images/fullpage.png \
  -o multi_clone_hompage/home/20260227_resin-studio/images/thumbnail.webp
```

Or capture from a visible portion of the page and convert directly:

```bash
# If thumbnail.jpg exists from a screenshot tool:
cwebp -q 80 -resize 600 0 \
  multi_clone_hompage/home/20260227_resin-studio/images/thumbnail.jpg \
  -o multi_clone_hompage/home/20260227_resin-studio/images/thumbnail.webp
```

Note: `thumbnail.jpg` and `fullpage.png` are gitignored. Only `thumbnail.webp` should be committed.

---

## Validation Status

| Image | Status |
|---|---|
| hero-1.webp | Pending — must be placed by user |
| hero-2.webp | Pending |
| hero-3.webp | Pending |
| hero-4.webp | Pending |
| product-1.webp | Pending |
| product-2.webp | Pending |
| product-3.webp | Pending |
| product-4.webp | Pending |
| ambient-1.webp | Pending |
| ambient-2.webp | Pending |
| ambient-3.webp | Pending |
| thumbnail.webp | Pending — generate after images placed |
