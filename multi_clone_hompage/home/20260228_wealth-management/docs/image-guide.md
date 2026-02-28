# Image Guide — 20260228_wealth-management

## Directory Structure

All images are stored locally at:
```
multi_clone_hompage/home/20260228_wealth-management/images/
├── hero-1.webp        ← CRITICAL: Hero portrait (advisor + client)
├── hero-2.webp        ← About banner, leadership
├── hero-3.webp        ← Founder portrait, leadership
├── hero-4.webp        ← Contact page hero, leadership
├── product-1.webp     ← Portfolio Management
├── product-2.webp     ← Estate Planning
├── product-3.webp     ← Family Office
├── product-4.webp     ← Tax Optimization
├── ambient-1.webp     ← Process banner, gallery
├── ambient-2.webp     ← Philanthropy, gallery
├── ambient-3.webp     ← Gallery panel
└── thumbnail.webp     ← Preview (600px wide, generated via cwebp)
```

---

## Image Specifications

### hero-1.webp — Hero Portrait (TYPE D CRITICAL)

**Usage:** Left panel of hero split layout
**CSS:** `object-fit: cover; object-position: top; filter: brightness(0.82);`
**Composition requirements:**
- Senior advisor (male or female, 50s–60s, formal attire) in client consultation
- Setting: elegant private office — mahogany desk, warm lighting, architectural details
- Client partially visible (shoulder/hand) suggesting private meeting
- Vertical/portrait orientation preferred
- Face must be in upper 40% of frame (object-position: top)

**Suggested Unsplash keywords:** "wealth advisor consultation", "private banking", "senior executive office", "financial advisor client meeting"

**Do NOT use IDs:** photo-1558618666-fcd25c85cd64, photo-1524504388940-b1c1722653e1, photo-1551488831-00ddcb6c6bd3, photo-1543076447-215ad9ba6923, photo-1503342394128-c104d54dba01

---

### hero-2.webp — About Banner / Leadership

**Usage:** About page banner background, leadership section
**CSS:** `filter: brightness(0.45)` (used as banner BG behind dark overlay)
**Composition:** Corporate interior, meeting room, or architecture shot
- Luxury office environment, boardroom, or financial district exterior
- Wide format works well — will be heavily darkened

---

### hero-3.webp — Founder Portrait / Leadership

**Usage:** Founder split section (about.html), leadership grid
**CSS:** `filter: brightness(0.78)` with portrait dimensions (540px height)
**Composition:** Distinguished person in formal attire, preferably in an office context

---

### hero-4.webp — Contact Hero

**Usage:** Contact page split-layout (left panel)
**CSS:** `object-position: top; filter: brightness(0.55)`
**Composition:** Two people in conversation — advisor/client dynamic
- Warm, private setting; hands visible (consultative body language)
- Shot from side/profile angle preferred

---

### product-1.webp — Portfolio Management

**Composition:** Financial charts on screens, portfolio documents, trading floor elegance
- NOT generic stock ticker imagery
- Suggest: physical documents, leather-bound portfolio, elegant desk environment

### product-2.webp — Estate Planning

**Composition:** Legal documents, elegant pen, family heirloom objects
- Suggest: family portrait on desk, legal papers, architectural estate photography

### product-3.webp — Family Office

**Composition:** Multi-generational family discussion, elegant meeting room
- Warm, collaborative scene; multiple ages represented

### product-4.webp — Tax Optimization

**Composition:** Calculator with documents, private office, structured financial setting
- Elegant and minimal, not generic stock imagery

---

### ambient-1.webp — Process Banner / Gallery

**Usage:** Process page banner, gallery grid (primary large item)
**Composition:** Interior architecture of a luxury financial institution
- Grand hallway, library, or boardroom with classical architectural detail
- Rich woods, high ceilings, warm lighting

### ambient-2.webp — Philanthropy / Gallery

**Composition:** Philanthropic context — charitable gala, foundation event, elegant giving setting
- Or: architectural interior with soft warm tones

### ambient-3.webp — Gallery Panel

**Composition:** Abstract wealth/heritage imagery — vintage maps, rare books, art collection detail

---

## Thumbnail Generation

After placing hero-1.webp through ambient-3.webp, generate the preview thumbnail:

```bash
# Requires: brew install webp
cwebp -q 80 -resize 600 0 \
  multi_clone_hompage/home/20260228_wealth-management/images/hero-1.webp \
  -o multi_clone_hompage/home/20260228_wealth-management/images/thumbnail.webp
```

**CRITICAL RULES:**
- `thumbnail.webp` only — NEVER `thumbnail.jpg` (gitignored)
- `fullpage.png` is NOT committed (too large for Vercel)
- Only `thumbnail.webp` should be committed to git

---

## Fallback Behavior

If specific images are unavailable, all `<img>` elements will show broken image icons but the layout will not collapse — all images use:
```css
img { display: block; width: 100%; height: 100%; object-fit: cover; }
```

The hero layout uses `background: var(--surface)` as the container color, so even with missing hero-1.webp, the right-side stat grid and text remain fully readable.
