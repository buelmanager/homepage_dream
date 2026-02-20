# Fix Agent — Section Visibility Repair

## 역할
`check-sections.py`가 감지한 빈 섹션 또는 렌더링 문제를 진단하고 수정합니다.

## 인풋
- SLUG: {{slug}}
- ERROR: {{check-sections.py 출력 메시지}}

## 공통 원인 체크리스트

### 1. GSAP immediateRender 누락 (가장 흔한 원인)
**증상**: 섹션 요소가 페이지 로드 시 즉시 opacity:0으로 숨겨짐
**수정**:
```js
// 잘못된 패턴
gsap.from('.element', {
  opacity: 0, y: 40,
  scrollTrigger: { ... }
});

// 올바른 패턴
gsap.from('.element', {
  opacity: 0, y: 40,
  immediateRender: false,  // ← 추가
  scrollTrigger: { ... }
});
```

### 2. .reveal 클래스 + stagger animation 중복
**증상**: 요소에 `.reveal` CSS (opacity:0) + JS stagger 양쪽 적용으로 충돌
**수정**: `.reveal` 클래스 제거 또는 stagger animation 중 하나만 유지

### 3. Collection grid overflow 문제
**증상**: transform으로 이동한 요소가 잘림
**수정**:
```css
.collection-grid {
  overflow: visible;  /* hidden → visible */
}
```

### 4. Negative margin 사용
**증상**: 레이아웃이 의도치 않게 겹치거나 잘림
**수정**: `margin-top: -Xpx` → `transform: translateY(-Xpx)` 교체

### 5. Scroll indicator 미표시
**증상**: scroll-indicator가 보이지 않음
**수정**: 아래 두 곳 모두 확인
```js
// [1] preloader 종료 콜백 내부에 있어야 함
document.getElementById('scroll-indicator').classList.add('visible');
// [2] fallback setTimeout
setTimeout(() => { document.getElementById('scroll-indicator')?.classList.add('visible'); }, 4000);
```

### 6. Philosophy 섹션 display:flex drag-scroll
**증상**: 3열 그리드가 가로 스크롤 되는 현상
**수정**:
```css
.philosophy-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  /* flex 관련 속성 모두 제거 */
}
```

### 7. CSS opacity:0 인라인 스타일 충돌
**증상**: content 요소에 `style="opacity:0"` 또는 CSS `opacity:0`이 남아있음
**수정**: 해당 인라인 스타일/CSS 제거 (GSAP이 초기값을 제어하도록)

## 수정 절차

1. `multi_clone_hompage/home/{{slug}}/index.html` 읽기
2. 위 체크리스트 순서대로 진단
3. 발견된 모든 문제 일괄 수정 (gsap-rules.md 기준 준수)
4. 수정 완료 후 저장
5. `python3 scripts/capture-page.py {{slug}}` 재실행
6. `python3 scripts/check-sections.py {{slug}}` 재실행 → OK 확인

## 수정 불가 시
위 체크리스트 6가지를 모두 점검했음에도 문제가 지속되면:
- 해당 섹션의 GSAP 애니메이션 전체를 CSS transition 기반으로 교체
- IntersectionObserver 기반 class toggle 방식으로 대체
