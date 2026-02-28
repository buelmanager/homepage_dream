# Content Guide — APERTURE NOIR

## Replacing Placeholder Content

This template uses a fictional director "Marcus V. Reyes" as placeholder. To personalize the template, replace all references using the mapping below.

---

## index.html

### Navbar
- `Aperture.Noir` → Your studio/brand name
- Navigation links: update `href` attributes to match your page structure

### Hero Section
- `Film Direction & Cinematography` (eyebrow) → Your discipline
- `APERTURE` / `NOIR` → Your brand name split across two lines
- `Frame by Frame.` (tagline) → Your tagline
- `Los Angeles` → Your city
- `47` (films count) → Your actual count
- `Cannes · Sundance · Venice` → Your key festivals

### Selected Films
Replace the 3 film cards with your actual featured works:
- Film title, year, role, and festival credits
- Replace `images/film-2.webp`, `cinema-2.webp`, `production-1.webp` with your stills

### Director's Statement
- Replace the blockquote with your personal statement
- Attribution: `Marcus V. Reyes, Director · Cinematographer` → Your name

### Philosophy Grid (3 items)
- `The Architecture of Light` / `Silence as Language` / `The Analog Soul`
- Replace with your own three creative principles

### Filmography Table
Replace rows with your actual credits. Use `data-type="feature|short|commercial|documentary"` for filtering.

### Awards & Festivals
Replace 8 cards with your actual festival selections and awards.

### Collaborators
Replace names with your actual creative collaborators. Include role and number of projects.

### Behind the Frame (4 cards)
Replace images and text with your actual process photography and explanations.

---

## about.html

### Bio
Replace the four paragraphs with your actual biography. Keep the structure:
1. Origin story
2. Training / early career
3. Breakthrough work
4. Current status and vision

### Statistics Sidebar
Update all statistics:
- Based in / Active since / Total films / Festivals / Awards / Representation / Languages

### Vision Section
Replace the four vision statements with your actual creative philosophy.

### Education
Update with your actual education history. Remove or add rows as needed.

### Mentors & Influences
Replace 6 cards with your actual mentors and influences. Keep format: Name / Title / Description.

---

## collection.html

### Film Grid
Replace 9 film poster cards with your actual works. Each card needs:
- `data-type="feature|short|documentary|commercial"` for filter
- Image reference
- Type label
- Title
- Year and format
- Brief description
- Award label (if applicable)

### Commercial List
Replace 5 commercial items with your actual commercial/brand credits.

---

## process.html

### 4-Phase Content
Replace process descriptions with your actual workflow. The 3 step cards per phase can be customized.

### Equipment Section
Replace with your actual equipment. Common modifications:
- Remove film stock section if you shoot digital-only
- Add monitor/support/lighting equipment categories

### Timeline
Adjust production timeline durations to reflect your actual workflow.

---

## contact.html

### Form
The form is functional as a demo (submit shows toast notification). To add real form submission:
- Connect to Formspree, Netlify Forms, or your backend
- Update the form `action` attribute

### Contact Information
Replace all email addresses and names with real contacts:
- General: `hello@aperturenoir.com` → `hello@yourstudio.com`
- Press: `press@aperturenoir.com` → your press contact
- Representation contacts → your actual representation

### Availability Badge
Update "Available for 2026 Projects" to reflect actual availability.

---

## Images

All images are in `images/` directory as `.webp` files. To replace:
1. Upload your image (minimum 1920px wide)
2. Convert to webp: `cwebp -q 82 -resize 1920 0 input.jpg -o output.webp`
3. Update `src` attributes in HTML files

**Do not use** `thumbnail.jpg` (gitignored). Use only `thumbnail.webp`.

---

## Footer

Replace in all 5 pages:
- `APERTURE NOIR` → Your brand name
- `Frame by Frame.` → Your tagline
- Copyright year and name
- `Film Direction · Cinematography · Los Angeles` → Your disciplines and city
