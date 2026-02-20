# MANDATORY GSAP ANIMATION RULES
(모든 luxury page에 반드시 적용)

## CSS 규칙
- content 요소에 CSS `opacity: 0` 절대 금지
- `.reveal` 클래스에 opacity/transform 설정 금지
- 전용 stagger animation이 있는 요소에 `.reveal` 클래스 중복 부여 금지

## JS 규칙 — 자연스러운 Fade-in 패턴 (깜빡임 없음)

### ✅ 권장 패턴: preHideBelowFold + gsap.from
깜빡임 원인: `immediateRender: false` 사용 시 스크롤 trigger 시점에 opacity가 1→0→1로 순간 전환됨.
해결: 뷰포트 아래 요소만 미리 숨긴 후 gsap.from 실행 → 이미 숨겨진 상태에서 자연스럽게 fade-in.

#### Step 1: 스크립트 상단에 preHideBelowFold 함수 추가
```js
/* ─ Smooth fade-in: pre-hide below-fold elements before GSAP runs ─ */
;(function preHideBelowFold() {
  const VH = window.innerHeight;
  const selectors = [
    '.stats-item', '.phil-card', '.philosophy-card',
    '.collection-item', '.col-item', '.grid-item',
    '.atelier-img', '.atelier-content', '.atelier-text',
    '.process-step', '.step', '.timeline-step',
    '.milestone', '.heritage-item',
    '.press-card', '.swiper-slide',
    '.form-group', '.footer-col',
    '[data-animate]'
  ];
  document.querySelectorAll(selectors.join(',')).forEach(function(el) {
    if (el.getBoundingClientRect().top > VH * 0.95) {
      el.style.opacity = '0';
      el.style.transform = 'translateY(24px)';
      el.style.willChange = 'opacity, transform';
    }
  });
})();
```

#### Step 2: GSAP 애니메이션 — 부드러운 파라미터 사용
```js
// ✅ 올바른 패턴 (자연스러운 fade-in)
gsap.from('.phil-card', {
  opacity: 0,
  y: 24,              // ← 24px (40-60 사용 금지)
  duration: 1.1,      // ← 1.0~1.2s (0.5s 미만 금지)
  ease: 'power2.out', // ← 부드러운 이징 필수
  stagger: 0.1,       // ← 0.1 권장 (0.2 이상 금지)
  immediateRender: false,
  scrollTrigger: { trigger: '.philosophy-grid', start: 'top 85%', once: true }
});
```

### 애니메이션 파라미터 기준
| 파라미터 | 권장값 | 금지값 |
|----------|--------|--------|
| `duration` | 0.9 ~ 1.2 | < 0.6 |
| `ease` | `'power2.out'` | linear, bounce |
| `y` offset | 20 ~ 28px | > 50px |
| `stagger` | 0.08 ~ 0.12 | > 0.2 |
| `start` | `'top 85%'` | `'top 50%'` |

## Scroll Indicator 두 가지 보장
```js
  // [1] preloader callback 안
  document.getElementById('scroll-indicator').classList.add('visible');
  // [2] fallback
  setTimeout(() => { document.getElementById('scroll-indicator')?.classList.add('visible'); }, 4000);
```

## 레이아웃 규칙
- Collection grid: overflow: visible (transform 클리핑 방지)
- negative margin 금지 → transform: translateY() 사용
- Philosophy: display:grid (flex drag-scroll 금지)

## 섹션 전용 스태거 패턴 (올바른 예시)
```js
  gsap.from('.phil-card', {
    opacity: 0, y: 40,
    stagger: 0.15,
    immediateRender: false,   // ← 필수
    scrollTrigger: { trigger: '.philosophy-grid', start: 'top 80%', once: true }
  });
```

## 자주 발생하는 버그 & 수정 패턴

### Bug 1: 요소가 페이지 로드 즉시 사라짐
**원인**: gsap.from() + ScrollTrigger 사용 시 `immediateRender: false` 누락
**수정**: 모든 ScrollTrigger 연결 애니메이션에 `immediateRender: false` 추가

### Bug 2: 섹션 전체가 보이지 않음 (빈 섹션)
**원인**: `.reveal` 클래스 + 전용 stagger animation 중복 적용
**수정**: `.reveal` 클래스 제거 또는 stagger animation 제거 (둘 중 하나만 사용)

### Bug 3: Collection grid 요소가 잘림
**원인**: grid container에 `overflow: hidden` 또는 기본값
**수정**: `.collection-grid { overflow: visible; }`

### Bug 4: Philosophy 섹션 드래그 스크롤
**원인**: display:flex 사용
**수정**: `display: grid; grid-template-columns: repeat(3, 1fr);`

### Bug 5: Scroll indicator가 표시되지 않음
**원인**: preloader 종료 후 visible 클래스 미추가
**수정**: 아래 두 곳 모두에 추가
```js
// preloader 종료 콜백
document.getElementById('scroll-indicator').classList.add('visible');
// fallback (프리로더 스킵 시 대비)
setTimeout(() => { document.getElementById('scroll-indicator')?.classList.add('visible'); }, 4000);
```

## Color Calibration Rule (check-sections threshold = 15)

`check-sections.py` DARK_THRESHOLD = 15 (전체 row avg RGB 기준).
모든 배경색은 avg((R+G+B)/3) ≥ 20 을 유지해야 합니다.

### `:root` 변수 최소값 기준
| 변수 | 예시 | avg RGB | 상태 |
|------|------|---------|------|
| `--bg` / `--background` | `#1A1713` (26,23,19) | 22.7 | ✅ |
| `--surface` | `#1C1816` (28,24,22) | 24.7 | ✅ |
| ❌ 금지 | `#0A0A15` (10,10,21) | 13.7 | FAIL |
| ❌ 금지 | `#0C0A09` (12,10,9) | 10.3 | FAIL |

**빠른 계산**: hex `#RRGGBB` → avg = (R + G + B) / 3 (십진수)

### Hero 오버레이 규칙
- `filter: brightness()` on hero images: **min 0.55** (단, 이미지가 매우 어두우면 0.8+)
- hero 그라디언트 오버레이: avg color ≥ 20 권장 (예: rgba(48,40,32,...))
- `rgba(dark, 0.9+)` 단일 오버레이 금지 → 최대 0.65
- 이미지가 어두운 경우 warm-tint gradient 추가: `rgba(48,40,32,0.5)` 권장

### Footer / 하단 섹션
- `footer { background: var(--bg); }` ← hardcoded 어두운 hex 금지
- `background: #XXXXXX` (hardcoded) 사용 전 avg RGB 반드시 확인

### 빠른 참고표 (안전한 어두운 배경 최소값)
| 색조 | 최소 안전 hex | avg RGB |
|------|-------------|---------|
| warm dark brown | `#221810` | 20.0 |
| cool dark blue | `#141421` | 19.7 |
| red-dark | `#221010` | 18.0 |
| green-dark | `#101E14` | 16.0 |
| neutral dark | `#181818` | 24.0 |

---

## 검증 체크리스트

빌드 전 반드시 확인:
- [ ] 모든 gsap.from() + scrollTrigger에 `immediateRender: false` 있음
- [ ] CSS에 content 요소 opacity:0 없음
- [ ] .reveal 클래스와 stagger animation 중복 없음
- [ ] collection-grid에 overflow: visible 있음
- [ ] negative margin 미사용 (transform: translateY 사용)
- [ ] scroll-indicator에 visible 클래스 두 곳에서 추가됨
- [ ] philosophy grid가 display:grid 사용
- [ ] `:root --bg` / `--surface` avg RGB ≥ 20 확인
- [ ] footer background hardcoded hex 사용 금지 (var(--bg) 사용)
- [ ] hero overlay rgba opacity ≤ 0.65, hero brightness ≥ 0.55
