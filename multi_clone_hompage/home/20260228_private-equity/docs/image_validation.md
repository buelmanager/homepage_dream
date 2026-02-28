# Image Validation — 20260228_private-equity

## Image Strategy

All images in this template use LOCAL files only (`images/*.webp`).
No external Unsplash URLs are embedded in the HTML.
This ensures zero broken image risk and full offline compatibility.

---

## Required Local Images

| Filename | Usage | Suggested Subject |
|----------|-------|-------------------|
| `hero-1.webp` | Hero left panel (main), portfolio card | Premium corporate boardroom, investment office interior, or luxury meeting space |
| `hero-2.webp` | About page hero, approach section visual | Office environment, financial documents, or executive desk |
| `hero-3.webp` | Team section (lead portrait), gallery, sector card | Professional corporate portrait setting or conference room |
| `hero-4.webp` | Team section (second portrait), gallery | Senior professional in formal setting or luxury brand environment |
| `product-1.webp` | Portfolio card (Meridian Resorts), sector card | Luxury boutique hotel exterior or lobby |
| `product-2.webp` | Portfolio card (Luminary Brands) | Luxury consumer goods — leather goods, fragrance, or jewelry display |
| `product-3.webp` | Portfolio card (Orbis), sector card | Premium wellness environment or lifestyle visual |
| `product-4.webp` | Portfolio card (Arcadian Wellness), collection hero | Luxury spa treatment room or premium fitness studio |
| `ambient-1.webp` | Testimonial avatar, gallery, team card, sector card | Abstract corporate setting or warm professional environment |
| `ambient-2.webp` | Culture section, testimonial avatar | Brand experience, luxury retail, or collaborative workspace |
| `ambient-3.webp` | Gallery, testimonial avatar | Global city skyline, architectural detail, or abstract luxury |
| `thumbnail.webp` | Template preview (600px wide) | Hero section screenshot (600×400px recommended) |

---

## Image Requirements

- **Format:** WebP (required)
- **Minimum resolution:** 1200px width for hero images, 800px for product/ambient
- **Aspect ratios:**
  - hero-1: fills full height of hero left panel (portrait-oriented content)
  - hero-2: 3:4 or 4:5 for approach/about sections
  - hero-3, hero-4: 3:4 (team portrait cards)
  - product-1 through product-4: 3:2 or 16:9 (card format)
  - ambient-1 through ambient-3: flexible (square or landscape)
  - thumbnail: 600×400px (landscape)
- **File size target:** Under 200KB per image after optimization

---

## Capture Script (thumbnail)

```bash
# Generate thumbnail using Python capture script
python3 scripts/capture-page.py 20260228_private-equity

# Convert to webp
cwebp -q 80 -resize 600 0 \
  multi_clone_hompage/home/20260228_private-equity/images/thumbnail.jpg \
  -o multi_clone_hompage/home/20260228_private-equity/images/thumbnail.webp
```

---

## Git Tracking Rules

- `thumbnail.webp` → tracked by git (small, needed for manifest)
- `fullpage.png` → gitignored (300MB+)
- `thumbnail.jpg` → gitignored (see `.gitignore`)
- All other `*.webp` in images/ → tracked (required for deployment)

---

## Unsplash Search Keywords (for image sourcing)

### Hero Images
- "premium boardroom luxury"
- "investment office interior"
- "corporate meeting room dark"
- "wealth management desk"
- "financial trading floor"

### Product / Portfolio
- "luxury boutique hotel lobby"
- "premium leather goods display"
- "luxury wellness spa"
- "fine wine collection cellar"

### Ambient / Culture
- "professional team meeting"
- "luxury brand interior"
- "global city skyline dusk"

### Forbidden IDs (from design brief)
- photo-1558618666-fcd25c85cd64
- photo-1524504388940-b1c1722653e1
- photo-1551488831-00ddcb6c6bd3
- photo-1543076447-215ad9ba6923
- photo-1503342394128-c104d54dba01
