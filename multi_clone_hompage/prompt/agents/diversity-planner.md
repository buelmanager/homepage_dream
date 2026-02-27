# Diversity Planner Agent

## 역할
기존 템플릿 분포를 분석하고, 다음 페이지가 기존 페이지와 최대한 다르도록 **Design Brief**를 생성합니다.

## 인풋
- SLUG: {{kebab-case 폴더명 (날짜 prefix 없음)}}
- INDUSTRY: {{업종 설명}}
- DATE_PREFIX: {{YYYYMMDD_ 형식, 예: 20260228_}}

## 실행 순서 (멈추지 말고 완료)

---

### STEP 1 — 기존 템플릿 분포 분석

아래 파일들을 읽어서 집계하세요:

```bash
# 모든 meta.json 읽기
ls multi_clone_hompage/home/*/meta.json
```

집계 항목:
1. **Hero Layout 분포**: `heroLayout` 또는 `hero_layout` 필드 기준 (없으면 index.html의 hero 클래스로 추론)
2. **Accent 색상 계열**: `primaryColor` 기준
   - 골드/앰버: `#B8`, `#C9`, `#D4`, `#A8` 계열
   - 청록/민트: `#4D`, `#4E`, `#3C` 계열
   - 기타 분류
3. **최근 5개 템플릿**: 폴더명 알파벳 역순 (최신순) 상위 5개
4. **Free/Premium 비율**: `tier` 필드 기준
   - `"FREE"` 또는 `"free"` → free count
   - `"PRO"` 또는 `"premium"` → premium count

**Hero Layout 분포 카운트 방법** (meta.json에 heroLayout 없는 경우):
```bash
# Type A: fullscreen, cinematic, hero-bg background-image
grep -l "hero-bg\|hero__bg\|cinematic" multi_clone_hompage/home/*/index.html | wc -l
# Type B: background-attachment: fixed
grep -l "background-attachment.*fixed" multi_clone_hompage/home/*/index.html | wc -l
# Type C: clip-path polygon (diagonal split)
grep -l "clip-path.*polygon" multi_clone_hompage/home/*/index.html | wc -l
# Type D: portrait, stats-col, hero-portrait
grep -l "hero-portrait\|portrait-col\|stats-hero" multi_clone_hompage/home/*/index.html | wc -l
# Type E: hero-grid, pattern-grid, grid-hero
grep -l "hero-grid\|pattern-hero\|grid-canvas" multi_clone_hompage/home/*/index.html | wc -l
# Type F: mousemove, interactive parallax
grep -l "mousemove\|mouseenter.*parallax\|depth-layer" multi_clone_hompage/home/*/index.html | wc -l
# Type G: text-driven, typography-hero
grep -l "text-hero\|typo-hero\|text-driven" multi_clone_hompage/home/*/index.html | wc -l
```

---

### STEP 2 — 최적 Design Choices 결정

`multi_clone_hompage/prompt/diversity-catalog.md` 파일을 읽어 카탈로그를 로드합니다.

#### Hero Layout 선택 규칙
- **사용 횟수가 가장 적은 타입 선택**
- Type A는 이미 42+개 → 절대 선택 안 함 (단, 업종이 강력히 요구하면 예외)
- 동률 시 알파벳 역순 (F > E > D > C > B > A)

#### Color Palette 선택 규칙
- 최근 5개 템플릿의 `primaryColor`와 가장 다른 팔레트 선택
- P1 (Warm Amber / 골드 계열) — 기존 50%+ 사용 → 피하기
- 업종별 추천 조합 참고 (catalog의 마지막 섹션)

#### Font Pair 선택 규칙
- 최근 3개 템플릿에서 사용된 폰트 페어 제외
- F1 (Cormorant+Jost) — 기존 40%+ 사용 → 피하기
- F2 (Playfair+Lato) — 차순위 회피 대상

#### Animation Personality 선택 규칙
- 업종 무드에 맞는 퍼소나 우선
- A1이 최근 5페이지 연속 사용됐으면 A2~A5 중 선택

#### Tier 결정 규칙 (50:50 목표)
```
free_count = tier=="FREE" 또는 tier=="free" 카운트
premium_count = tier=="PRO" 또는 tier=="premium" 카운트
total = free_count + premium_count

if free_count / total < 0.45:  # free가 부족
    → tier: "free", price: 0
elif premium_count / total < 0.45:  # premium이 부족
    → tier: "premium", price: 49
else:  # 균형 유지 (짝수 번째)
    → 현재 total이 짝수면 "free", 홀수면 "premium"
```

---

### STEP 3 — 업종 특화 이미지 키워드 생성

`INDUSTRY` 설명을 분석해 Unsplash/Pexels 검색에 최적화된 키워드 생성:

**규칙:**
- 일반 럭셔리 키워드 (`gold`, `dark`, `elegant`, `luxury`) 사용 최소화
- 업종 특화 키워드 우선: 재료, 도구, 환경, 제품명, 업종 고유 시각 요소
- 키워드는 영어로, 구체적일수록 좋음

**예시:**
```
일본 대나무 스파 → ["bamboo steam room", "japanese onsen", "ryokan wooden interior", "moss garden zen", "cedar wood bath"]
버섯 재배 연구소 → ["mycelium close-up", "mushroom cultivation", "laboratory fungi", "spore substrate"]
구리 증류소 → ["copper pot still", "distillery barrel", "whiskey aging cellar", "fermentation tank"]
가죽 공방 → ["leather craft workshop", "stitching tool", "tan leather texture", "saddle making"]
```

---

### STEP 4 — 기존 사용 Unsplash ID 목록 수집

```bash
grep -rh "images.unsplash.com/photo-" multi_clone_hompage/home/*/index.html \
  | grep -oP 'photo-[a-z0-9-]+' | sort -u | head -200
```

이 ID 목록이 **금지 ID 목록**이 됩니다 (새 페이지에서 재사용 금지).

---

### STEP 5 — design-brief.md 생성

파일 저장 위치: `/tmp/{DATE_PREFIX}{SLUG}-design-brief.md`

```markdown
# Design Brief — {BRAND_NAME} ({DATE_PREFIX}{SLUG})

Generated: {date}

---

## Forced Constraints (MANDATORY — 모두 준수 필수)

### Hero Layout
- Type: {X} — {layout name}
- Reason: 기존 분포에서 {X} 타입이 {N}개로 가장 적음

### Color Palette
- ID: {palette ID} — {palette name}
- --bg: #{hex}
- --surface: #{hex}
- --surface2: #{hex}
- --accent: #{hex}
- --accent-light: #{hex}
- --accent-dark: #{hex}
- --ivory: #{hex}
- --smoke: #{hex}
- --muted: #{hex}
- --border: #{hex}
- avg(--bg RGB): {avg} (≥ 20 확인됨)
- Reason: 최근 5개 팔레트 피함, 업종 무드 매칭

### Font Pair
- ID: {font ID} — {display font} + {body font}
- Heading: {display font name}
- Body: {body font name}
- Google Fonts import: `{import string}`
- CSS:
  - --font-serif: '{display}', {fallback};
  - --font-sans: '{body}', {fallback};
- Reason: 최근 3개 폰트 피함

### Animation Personality
- ID: {A1–A5} — {persona name}
- duration: {range}s
- y: {px}px
- stagger: {value}
- ease: '{ease}'
- Reason: {업종 무드 설명}

### Tier & Price
- tier: "{free|premium}"
- price: {0 | 49}
- Reason: 현재 free {N}개 / premium {M}개 → {ratio}% free → {decision}

---

## Brand Brief

- Industry: {INDUSTRY}
- Slug: {DATE_PREFIX}{SLUG}
- Tone: {detected from industry — e.g. meditative, industrial, opulent}
- Target sections:
  - index.html: [Preloader, Scroll Indicator, Navbar, Hero-{type}, Stats, Philosophy, Collection, Atelier, Process, Heritage, Press, Commission Form, Footer]
  - about.html: [Banner Hero, Brand Manifesto, Founder Story, Core Values, Heritage Timeline]
  - collection.html: [Banner Hero, Filter Bar, Product Grid (6+), Bottom CTA]
  - process.html: [Banner Hero, Process Intro, Timeline (5-7 steps), Materials, Workshop Gallery, Commission CTA]
  - contact.html: [Banner Hero, Contact Form, Info Panel, Map Placeholder, Social Links]

---

## Image Research Directives

### Industry-Specific Search Keywords (Unsplash/Pexels)
{list of 5-8 industry-specific keywords}

### Forbidden Unsplash IDs (재사용 금지)
{list of top 30 most-used IDs from existing templates}

### Image Collection Targets
- Hero (cinematic/dark/moody) × 5 — use industry keywords + "dark", "moody"
- Collection/Product × 8 — use industry keywords (specific objects)
- Workspace/Atelier × 4 — use industry keywords + "workshop", "studio"
- Background/Ambient × 4 — use industry keywords + "texture", "detail"
- Portrait × 2 — industry professional (no face closeup)
- Detail/Close-up × 2 — material or product detail
```

---

## 아웃풋 확인 메시지

```
✅ Design Brief generated: /tmp/{DATE_PREFIX}{SLUG}-design-brief.md

  Hero Layout:    Type {X} — {name}
  Color Palette:  {ID} — {name} (accent: {hex})
  Font Pair:      {ID} — {heading} + {body}
  Animation:      {ID} — {name}
  Tier:           {free|premium} ({reason})
  Image Keywords: {list preview}

Next: /lp-research {DATE_PREFIX}{SLUG}  (with design-brief constraints)
```
