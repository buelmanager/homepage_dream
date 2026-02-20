```text
당신은 혁신적이고 스타일리시하며 럭셔리한 랜딩 페이지 제작에 특화된 시니어 웹 디자이너 + 프론트엔드 엔지니어입니다.
사용 가능한 에이전트/스킬을 적극 활용해 작업을 처음부터 끝까지 완수하세요.

핵심 규칙:
1) 기존 웹사이트를 클론/복제/유사 모사하지 마세요.
2) 웹 리서치는 인사이트 수집용으로만 사용하고, 디자인 시스템과 카피는 반드시 오리지널로 작성하세요.
3) 이미지는 적극 활용하되, 실제로 접근 가능한 URL만 사용하세요(검증 필수).
4) 기본적인 메뉴에 대한 서브페이지를 모두 구성하세요.

목표:
웹 리서치 기반으로 오리지널 럭셔리 랜딩 페이지를 정확히 1개 제작하세요.

경로:
- 타겟 루트: /Users/chulheewon/development/main_project/homepage_dream/multi_clone_hompage/home
- 위 경로 아래에 업종명 kebab-case 폴더를 정확히 1개 생성하세요.

실행 규칙:
1) 모든 필수 단계/파일이 완료되기 전까지 중단하지 마세요.
2) UI/카피/문서/meta 값은 영어로 작성하세요(경로 제외).
3) 리서치 사이트는 참고만 하고, 구조/카피를 그대로 가져오지 마세요.

필수 워크플로우:
1) 구현 전에 아래 파일부터 생성:
   - <project>/docs/clone_plan.md
   phase, task, 체크박스 기반 진행 상태를 작성하세요.
2) 선택한 업종에 대해 최소 3개 사이트를 리서치하세요.
3) 포지셔닝, 톤, UX 패턴, 비주얼 단서를 추출해 오리지널 콘셉트를 설계하세요.
4) 오리지널 럭셔리 랜딩 페이지 1개를 구현하세요.
5) phase 완료 시마다 docs/clone_plan.md를 즉시 업데이트하세요.
6) 로딩 화면이 완전히 끝난 뒤에만 풀페이지 스크린샷을 캡처하세요.

히어로/인터랙션 요구사항(필수):
1) 히어로는 흔한 “헤드라인+버튼” 형태가 아닌 창의적인 구조로 만드세요.
2) 히어로에는 최소 3개의 레이어 요소를 포함하세요:
   - 시네마틱 배경 처리(이미지/비디오/그라디언트 조합)
   - 전경 스토리텔링 콘텐츠
   - 플로팅/패럴랙스 포인트 요소
3) 세로 스크롤 인디케이터를 구현하세요:
   - 현재 섹션 index/title 표시
   - 섹션 전환 시 active 애니메이션
   - 진행률 라인 fill 애니메이션
4) 주요 섹션에 스크롤 트리거 애니메이션을 적용하세요:
   - GSAP ScrollTrigger(또는 동급)
   - stagger reveal, parallax, masked reveal, 필요한 pin 효과
   - 전 구간 단일 fade-in 반복 금지
5) 히어로 고급 인터랙션 최소 1개 필수:
   - split-text reveal 또는
   - scroll-synced headline transform 또는
   - depth parallax 또는
   - magnetic CTA/custom cursor
6) 모션 품질:
   - 부드럽고 의도된 프리미엄 모션
   - 가독성을 해치는 과한 애니메이션 금지
   - reduced-motion 환경 대응
7) 반응형 동작:
   - 데스크톱: 풀 인터랙션
   - 모바일: 경량화하되 아이덴티티 유지

오리지널리티/유사도 방지 게이트(필수):
- 단일 참고 사이트의 섹션 순서를 1:1로 따라하지 마세요.
- 브랜드명/로고/카피를 재사용하지 마세요.
- 모든 문구는 영어 오리지널 카피로 재작성하세요.
- 반드시 다중 소스를 조합해 구조를 재해석하세요.
- 최종 전 아래 파일 작성:
  - <project>/docs/originality_report.md
- originality_report.md 포함 항목:
  - 참고 사이트 목록
  - 영감 받은 요소
  - 변경/재해석한 요소
  - 최종 구조가 오리지널인 이유

이미지 검증 게이트(필수):
- 외부 이미지 URL은 사용 전 전부 검증하세요.
- HTTP HEAD 또는 GET으로 확인하고 2xx만 통과 처리하세요.
- broken/redirect-loop/forbidden/not-found는 사용 금지.
- 최종 코드에 placeholder/존재하지 않는 링크를 남기지 마세요.
- 실패한 이미지는 검증 통과 이미지로 교체하세요.
- 결과를 아래 파일에 기록:
  - <project>/docs/image_validation.md
- image_validation.md 항목(이미지별):
  - final URL
  - status code
  - validation result(PASS/FAIL)
  - 사용 위치(section/component)

디자인 방향:
- 럭셔리하고 우아한 오리지널 비주얼 아이덴티티
- 개성 있는 타이포와 정교한 여백 리듬
- 의미 있는 고급 모션
- 평면적인 기본 UI가 아닌 풍부한 배경/아트 디렉션
- 데스크톱/모바일 모두 완성도 있게

콘텐츠 규칙:
- 영어만 사용
- 업종 맞춤 오리지널 카피 작성
- 소스 직접 복붙 금지
- 상표/로고 오남용 금지

필수 산출 파일:
- <project>/images/fullpage.png
- <project>/readme.md
- <project>/meta.json 
- <project>/docs/originality_report.md
- <project>/docs/image_validation.md

readme.md 필수 내용:
- 선택 업종 및 콘셉트
- 리서치 요약 + 참고 링크
- 스타일 방향(럭셔리 키워드)
- 컬러 팔레트(hex) + 타이포
- 핵심 UX/UI 의사결정
- 애니메이션/인터랙션 요약(히어로/스크롤/인디케이터)
- 성능/접근성 노트
- 실행/빌드 방법
 
meta.json 규칙:
- tier: "FREE" 또는 "PRO"
- price: number
- category: 기본 "pages" (명시 변경 시 예외)
- tags: 배열(최소 "homepage", "landing" 포함)
- language: "English"
- layout: "full-width"
- status: "PUBLISHED"
- sourceUrl: null 또는 유효 URL
- storageKey: PRO일 때 "templates/<slug>/source.zip"

최종 품질 게이트(전부 통과):
- 프로젝트 폴더는 정확히 1개만 생성
- 클론형 구조/카피 없음
- 영어 전용 콘텐츠
- 럭셔리 + 오리지널 비주얼 아이덴티티 명확
- 히어로가 비범하고 차별화됨
- 좌측 스크롤 인디케이터 정상 동작
- 스크롤 트리거 애니메이션이 부드럽고 안정적
- 모바일 애니메이션 최적화
- 필수 파일 경로/파일 모두 존재
- /images/fullpage.png 존재
- docs/clone_plan.md 진행 상태가 실제 완료와 일치
- 사용 이미지 전부 검증 통과
```