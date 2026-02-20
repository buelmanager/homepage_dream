당신은 시니어 디자이너로 웹을 더 멋있게 개발하고 아이디어로 스타일리쉬한 웹을 클론합니다. 만들땐 클로드 스킬,에이전트를 적극 활용하세요. 
타켓 :   /Users/chulheewon/development/main_project/homepage_dream/multi_clone_hompage/home/real-estate 를 해당 폴더 전체를  클론하여서  
/Users/chulheewon/development/main_project/homepage_dream/multi_clone_hompage/home 폴더에 각각의 업종에 맞는 이름으로 폴더를 만들어 그 폴더에 옮기고 싶어 옮길때는 옮길 대상을 먼저 분석하고 연구하여서 더 좋은 방향으로 개선하여서 복사해 

1. 업종을 자동으로 골라서 변경하세요. 
2. 업종에 맞게 이미지를 Unsplash 이런 이미지중 가능한것을 적극 사용하세요. 
3.색상도 자동으로 변경하여 업종 컨셉에 맞게 변경하세요 . 
4 업종에 맞게 이미지를 변경하세요. 
5.업종에 맞게 컨텐츠를 변경하세요. 6. 업종에 맞게 로딩페이지를 변경하세요. 7. 모든 작업이 완료되기 전까지 멈추지 마세요. 작업이 시작되기 전에 docs/clone_plan.md 를 만들고 플랜을 정리하세요. 8 완료되는 phase는 md파일에서 업데이트하여서 현재 진행상황이 파악이 가능하가 하세요. 

- 업종별로 차별화된 UI를 사용하세요.
- 특별한 포인트가 있는 스타일리쉬하게 만드세요.
- 주요 화면을 스샷을 찍어서 업종의 작업폴더에 넣으세요. 스샷을 찍을때는 로딩화면 이후에 찍어주세요. 
- 위에서 생성한 업종폴더안의 images/폴더를 만들고 그안에 스샷을 저장하세요.
- 영어 기반으로만 만드세요 
- readme.md 파일을 만들고 업종,분야,언어,스타일 등의 상세한 정보를 적어주세요.

- 1개만 만드세요.
 를 해당 폴더 전체를  클론하여서  
/Users/chulheewon/development/main_project/homepage_dream/multi_clone_hompage/home 폴더에 각각의 업종에 맞는 이름으로 폴더를 만들어 그 폴더에 옮기고 싶어 옮길때는 옮길 대상을 먼저 분석하고 연구하여서 더 좋은 방향으로 개선하여서 복사해 



1. 업종을 자동으로 골라서 변경하세요. 
2. 업종에 맞게 이미지를 Unsplash 이런 이미지중 가능한것을 적극 사용하세요. 
3.색상도 자동으로 변경하여 업종 컨셉에 맞게 변경하세요 . 
4 업종에 맞게 이미지를 변경하세요. 
5.업종에 맞게 컨텐츠를 변경하세요. 6. 업종에 맞게 로딩페이지를 변경하세요. 7. 모든 작업이 완료되기 전까지 멈추지 마세요. 작업이 시작되기 전에 docs/clone_plan.md 를 만들고 플랜을 정리하세요. 8 완료되는 phase는 md파일에서 업데이트하여서 현재 진행상황이 파악이 가능하가 하세요. 

- 업종별로 차별화된 UI를 사용하세요.
- 특별한 포인트가 있는 스타일리쉬하게 만드세요.
- 주요 화면을 스샷을 찍어서 업종의 작업폴더에 넣으세요. 스샷을 찍을때는 로딩화면 이후에 찍어주세요. 
- 위에서 생성한 업종폴더안의 images/폴더를 만들고 그안에 스샷을 저장하세요.
- 영어 기반으로만 만드세요 
- readme.md 파일을 만들고 업종,분야,언어,스타일 등의 상세한 정보를 적어주세요.

- 1개만 만드세요.

---

## ⚠️ Color Calibration Rules (check-sections.py DARK_THRESHOLD = 15)

check-sections.py는 전체 row avg RGB < 15 인 행이 120px 이상 연속되면 FAIL입니다.

### 배경색 규칙
- `:root { --bg / --background / --surface }` 는 반드시 avg(R+G+B)/3 ≥ 20
- `footer { background: hardcoded-hex }` 금지 → `var(--bg)` 사용
- hero overlay rgba opacity ≤ 0.65, hero brightness ≥ 0.55
- 극도로 어두운 이미지 (cinema, cave 등) → warm tint gradient 추가 필수

### 빠른 계산
hex `#RRGGBB` → R,G,B 각 십진수 변환 → (R+G+B)/3 ≥ 20 확인

### 안전한 어두운 배경 최소값
| 색조 | 최소 hex | avg |
|------|----------|-----|
| warm dark | `#1A1713` | 22.7 ✅ |
| cool dark | `#141421` | 19.7 ✅ |
| neutral dark | `#181818` | 24.0 ✅ |
| ❌ FAIL | `#0A0A15` | 13.7 ❌ |

자세한 내용: `multi_clone_hompage/prompt/gsap-rules.md`
