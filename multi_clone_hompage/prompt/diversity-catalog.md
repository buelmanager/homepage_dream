# Diversity Catalog — Color Palettes, Font Pairs, Animation Personalities

이 카탈로그는 랜딩 페이지 생성 시 다양성을 강제하기 위해 사용됩니다.
diversity-planner가 이 파일을 읽어 최적 조합을 선택합니다.

---

## COLOR PALETTES

> **avg RGB check**: avg = (R + G + B) / 3 기준. 모든 팔레트는 avg ≥ 20 보장.

| ID | Name | --bg | --surface | --accent | avg(--bg) | 무드 |
|----|------|------|-----------|----------|-----------|------|
| P1 | Warm Amber | #1C1208 | #261A0A | #C9973A | 21.3 | 클래식 럭셔리 (과다 사용 — 피할 것) |
| P2 | Cool Obsidian | #101420 | #181E2A | #4EE8FF | 21.3 | 테크/미래적 |
| P3 | Forest Night | #0F1A10 | #162016 | #4DAF6A | 21.0 | 자연/친환경 |
| P4 | Deep Burgundy | #1A0A0E | #241016 | #C96A8A | 20.0 | 와인/뷰티 |
| P5 | Arctic Slate | #141820 | #1C2030 | #A0C4D8 | 21.3 | 미니멀/스칸디 |
| P6 | Midnight Purple | #130F1A | #1C1626 | #9B6EDB | 20.3 | 신비/영성 |
| P7 | Deep Teal | #0A1818 | #0F2020 | #4DCFB0 | 20.7 | 웰니스/스파 |
| P8 | Onyx Stone | #181818 | #222222 | #B0B0C0 | 24.0 | 미니멀/산업 |
| P9 | Rust Ember | #1C1008 | #261608 | #D4612A | 21.3 | 도예/공예/불 |
| P10 | Dark Olive | #141810 | #1C2018 | #8AB56A | 21.7 | 유기농/허브 |

### 팔레트별 전체 CSS 변수

**P2 — Cool Obsidian**
```css
:root {
  --bg: #101420; --surface: #181E2A; --surface2: #1E2438;
  --accent: #4EE8FF; --accent-light: #8AF3FF; --accent-dark: #22B8CC;
  --ivory: #DCE8F0; --smoke: #8090A0; --muted: #506070;
  --border: #1A2234;
}
```

**P3 — Forest Night**
```css
:root {
  --bg: #0F1A10; --surface: #162016; --surface2: #1A2A1A;
  --accent: #4DAF6A; --accent-light: #7ACC8A; --accent-dark: #2E7A46;
  --ivory: #DCF0DC; --smoke: #809080; --muted: #4A6050;
  --border: #182018;
}
```

**P4 — Deep Burgundy**
```css
:root {
  --bg: #1A0A0E; --surface: #241016; --surface2: #2C1420;
  --accent: #C96A8A; --accent-light: #E090A8; --accent-dark: #8A3A5C;
  --ivory: #F0DCE4; --smoke: #A08088; --muted: #604A52;
  --border: #200C12;
}
```

**P5 — Arctic Slate**
```css
:root {
  --bg: #141820; --surface: #1C2030; --surface2: #222838;
  --accent: #A0C4D8; --accent-light: #C4DCE8; --accent-dark: #6090B0;
  --ivory: #DCE8F0; --smoke: #809098; --muted: #505860;
  --border: #181C28;
}
```

**P6 — Midnight Purple**
```css
:root {
  --bg: #130F1A; --surface: #1C1626; --surface2: #231D30;
  --accent: #9B6EDB; --accent-light: #B894EE; --accent-dark: #6840A8;
  --ivory: #EAE0F8; --smoke: #907890; --muted: #544860;
  --border: #181420;
}
```

**P7 — Deep Teal**
```css
:root {
  --bg: #0A1818; --surface: #0F2020; --surface2: #142828;
  --accent: #4DCFB0; --accent-light: #7ADFC8; --accent-dark: #2A9A80;
  --ivory: #DCEFEC; --smoke: #809890; --muted: #4A6860;
  --border: #0C1E1E;
}
```

**P8 — Onyx Stone**
```css
:root {
  --bg: #181818; --surface: #222222; --surface2: #2A2A2A;
  --accent: #B0B0C0; --accent-light: #D0D0E0; --accent-dark: #808090;
  --ivory: #EEEEF2; --smoke: #909090; --muted: #606060;
  --border: #1E1E1E;
}
```

**P9 — Rust Ember**
```css
:root {
  --bg: #1C1008; --surface: #261608; --surface2: #2E1C0A;
  --accent: #D4612A; --accent-light: #E8884A; --accent-dark: #9C3C14;
  --ivory: #F0E4DC; --smoke: #A07860; --muted: #604840;
  --border: #201408;
}
```

**P10 — Dark Olive**
```css
:root {
  --bg: #141810; --surface: #1C2018; --surface2: #222A1E;
  --accent: #8AB56A; --accent-light: #AACE8A; --accent-dark: #5A8040;
  --ivory: #E4EEE0; --smoke: #889880; --muted: #4E5E48;
  --border: #181E14;
}
```

---

## FONT PAIRS

> **선택 규칙**: 최근 3개 템플릿에서 사용된 폰트 페어 제외.

| ID | Display (Heading) | Body | Google Fonts 임포트 | 무드 |
|----|-------------------|------|-------------------|------|
| F1 | Cormorant Garamond | Jost | `family=Cormorant+Garamond:ital,wght@0,300;0,400;0,600;1,300&family=Jost:wght@300;400;500` | 클래식 럭셔리 (**과다 사용** — F1 피할 것) |
| F2 | Playfair Display | Lato | `family=Playfair+Display:ital,wght@0,400;0,700;1,400&family=Lato:wght@300;400;700` | 에디토리얼 럭셔리 |
| F3 | Bebas Neue | DM Sans | `family=Bebas+Neue&family=DM+Sans:wght@300;400;500` | 산업/모던 |
| F4 | Cinzel | Crimson Pro | `family=Cinzel:wght@400;600;700&family=Crimson+Pro:ital,wght@0,300;0,400;1,300` | 로마/문학 |
| F5 | Fraunces | Inter | `family=Fraunces:ital,opsz,wght@0,9..144,300;0,9..144,600;1,9..144,300&family=Inter:wght@300;400;500` | 유기적 컨템포러리 |
| F6 | DM Serif Display | Karla | `family=DM+Serif+Display:ital@0;1&family=Karla:wght@300;400;500` | 소프트 모던 |
| F7 | Libre Baskerville | Source Sans Pro | `family=Libre+Baskerville:ital,wght@0,400;0,700;1,400&family=Source+Sans+3:wght@300;400;600` | 클래식 에디토리얼 |
| F8 | Bodoni Moda | Work Sans | `family=Bodoni+Moda:ital,opsz,wght@0,6..96,400;0,6..96,700;1,6..96,400&family=Work+Sans:wght@300;400;500` | 하이 패션 |
| F9 | Spectral | Mulish | `family=Spectral:ital,wght@0,300;0,400;0,600;1,300&family=Mulish:wght@300;400;500` | 문학적 미니멀 |
| F10 | EB Garamond | Nunito | `family=EB+Garamond:ital,wght@0,400;0,600;1,400&family=Nunito:wght@300;400;600` | 따뜻한 전통 |

### CSS 변수 매핑

```css
/* F3 — Bebas Neue + DM Sans */
--font-serif: 'Bebas Neue', Impact, sans-serif;   /* display용 */
--font-sans:  'DM Sans', system-ui, sans-serif;

/* F4 — Cinzel + Crimson Pro */
--font-serif: 'Cinzel', 'Times New Roman', serif;
--font-sans:  'Crimson Pro', Georgia, serif;

/* F5 — Fraunces + Inter */
--font-serif: 'Fraunces', Georgia, serif;
--font-sans:  'Inter', system-ui, sans-serif;

/* F6 — DM Serif Display + Karla */
--font-serif: 'DM Serif Display', Georgia, serif;
--font-sans:  'Karla', system-ui, sans-serif;

/* F8 — Bodoni Moda + Work Sans */
--font-serif: 'Bodoni Moda', 'Didot', serif;
--font-sans:  'Work Sans', system-ui, sans-serif;
```

---

## ANIMATION PERSONALITIES

> **선택 규칙**: 업종 무드에 맞는 퍼소나 선택. 기본값(A1)은 5페이지 연속 사용 금지.

| ID | Name | duration | y | stagger | ease | 특징 |
|----|------|----------|---|---------|------|------|
| A1 | Standard | 1.0–1.2s | 24px | 0.10 | power2.out | 기본 럭셔리 |
| A2 | Whisper | 1.4–1.6s | 14px | 0.06 | power1.out | 극히 섬세, 스파/웰니스 |
| A3 | Precise | 0.7–0.8s | 0px | 0.04 | power3.out | 미니멀/테크, y=0 (수평 슬라이드) |
| A4 | Dramatic | 1.1–1.3s | 40px | 0.15 | power2.inOut | 강렬한 첫 인상, 패션/아트 |
| A5 | Organic | 1.0–1.4s (랜덤) | 20–28px (랜덤) | 0.09 | power2.out | 자연스러운 변주, 공예/자연 |

### 퍼소나별 GSAP 코드 패턴

**A2 — Whisper**
```js
gsap.from(els, {
  opacity: 0, y: 14,
  duration: 1.5, ease: 'power1.out',
  stagger: 0.06,
  immediateRender: false,
  scrollTrigger: { trigger: section, start: 'top 90%', once: true }
});
```

**A3 — Precise** (y=0, x 슬라이드)
```js
gsap.from(els, {
  opacity: 0, x: -20,
  duration: 0.75, ease: 'power3.out',
  stagger: 0.04,
  immediateRender: false,
  scrollTrigger: { trigger: section, start: 'top 85%', once: true }
});
```

**A4 — Dramatic**
```js
gsap.from(els, {
  opacity: 0, y: 40,
  duration: 1.2, ease: 'power2.inOut',
  stagger: 0.15,
  immediateRender: false,
  scrollTrigger: { trigger: section, start: 'top 80%', once: true }
});
```

**A5 — Organic** (gsap.utils.random 사용)
```js
els.forEach(el => {
  gsap.from(el, {
    opacity: 0,
    y: gsap.utils.random(20, 28),
    duration: gsap.utils.random(1.0, 1.4),
    ease: 'power2.out',
    immediateRender: false,
    scrollTrigger: { trigger: el, start: 'top 88%', once: true }
  });
});
```

---

## 업종별 추천 조합

| 업종 카테고리 | 팔레트 | 폰트 | 애니메이션 | Hero |
|-------------|--------|------|-----------|------|
| 스파/웰니스/요가 | P7 (Teal) | F5 (Fraunces) | A2 (Whisper) | B 또는 F |
| 공예/도예/유리 | P9 (Rust) | F4 (Cinzel) | A5 (Organic) | C 또는 E |
| 패션/주얼리 | P8 (Onyx) | F8 (Bodoni) | A4 (Dramatic) | C 또는 D |
| 자연/유기농/허브 | P10 (Olive) | F6 (DM Serif) | A5 (Organic) | B 또는 E |
| 테크/혁신 | P2 (Obsidian) | F3 (Bebas) | A3 (Precise) | F 또는 G |
| 예술/갤러리 | P6 (Purple) | F9 (Spectral) | A4 (Dramatic) | D 또는 G |
| 식음료/레스토랑 | P4 (Burgundy) | F7 (Baskerville) | A1 (Standard) | D 또는 C |
| 숙박/리조트 | P5 (Arctic) | F2 (Playfair) | A1 (Standard) | B 또는 C |
| 와인/위스키/증류 | P4 (Burgundy) | F10 (EB Garamond) | A2 (Whisper) | B 또는 G |
| 피트니스/스포츠 | P3 (Forest) | F3 (Bebas) | A3 (Precise) | F 또는 A |
