#!/usr/bin/env bash
# new-luxury-page.sh — Luxury Landing Page CLI Orchestrator
# Usage: ./scripts/new-luxury-page.sh <slug>
# Example: ./scripts/new-luxury-page.sh artisan-coffee
set -euo pipefail

SLUG="${1:?Usage: ./new-luxury-page.sh <slug>}"
ROOT="$(cd "$(dirname "$0")/.." && pwd)"
BASE="$ROOT/multi_clone_hompage/home"
SCRIPTS="$ROOT/scripts"

echo ""
echo "╔══════════════════════════════════════════════════════╗"
echo "║   Luxury Landing Page Pipeline — $SLUG"
echo "╚══════════════════════════════════════════════════════╝"
echo ""

# ── [1] 중복 체크 ──────────────────────────────────────────
echo "=== [1/7] Duplicate Check ==="
if [ -d "$BASE/$SLUG" ]; then
  echo "ERROR: '$SLUG' already exists at $BASE/$SLUG"
  echo "Choose a different name and try again."
  exit 1
fi
echo "OK: '$SLUG' is available."
echo ""

# ── [2] 디렉토리 생성 ──────────────────────────────────────
echo "=== [2/7] Creating Directory Structure ==="
mkdir -p "$BASE/$SLUG"/{docs,images}
echo "Created: $BASE/$SLUG/{docs,images}"
echo ""

# ── [3] 이미지 검증 (후보 파일이 있을 때만) ────────────────
echo "=== [3/7] Image Validation ==="
CANDIDATES="/tmp/${SLUG}-candidates.txt"
VALIDATED="/tmp/${SLUG}-validated.txt"

if [ -f "$CANDIDATES" ]; then
  bash "$SCRIPTS/validate-images.sh" "$CANDIDATES" "$VALIDATED"
  PASS_COUNT=$(grep -c "^PASS" "$VALIDATED" 2>/dev/null || echo "0")
  echo "Validated: $PASS_COUNT PASS URLs → $VALIDATED"
else
  echo "SKIP: $CANDIDATES not found."
  echo "      Run research-agent first and save URLs to $CANDIDATES"
fi
echo ""

# ── [4] index.html 존재 확인 ───────────────────────────────
echo "=== [4/7] Checking index.html ==="
INDEX="$BASE/$SLUG/index.html"
if [ ! -f "$INDEX" ]; then
  echo "WARNING: $INDEX not found."
  echo "         Run builder-agent first to generate index.html"
  echo "         Then re-run this script."
  exit 1
fi
echo "OK: index.html found."
echo ""

# ── [5] 스크린샷 ───────────────────────────────────────────
echo "=== [5/7] Screenshot ==="
python3 "$SCRIPTS/capture-page.py" "$SLUG"
echo ""

# ── [6] 섹션 검증 ──────────────────────────────────────────
echo "=== [6/7] Section Validation ==="
if python3 "$SCRIPTS/check-sections.py" "$SLUG"; then
  echo "OK: All sections visible."
else
  echo ""
  echo "WARNING: Blank sections detected!"
  echo "ACTION REQUIRED:"
  echo "  1. Read prompt/agents/fix-agent.md"
  echo "  2. Apply fixes to $INDEX"
  echo "  3. Re-run: python3 scripts/capture-page.py $SLUG"
  echo "  4. Re-run: python3 scripts/check-sections.py $SLUG"
  echo ""
  echo "Common fixes:"
  echo "  - Add 'immediateRender: false' to all gsap.from() + scrollTrigger"
  echo "  - Remove .reveal class from elements with stagger animations"
  echo "  - Set overflow:visible on .collection-grid"
  echo "  - Add scroll-indicator visible in 2 places"
fi
echo ""

# ── [7] 매니페스트 업데이트 ────────────────────────────────
echo "=== [7/7] Manifest Update ==="
cd "$ROOT"
if npm run generate-manifest 2>/dev/null; then
  echo "OK: Manifest updated."
else
  echo "WARNING: generate-manifest failed. Run manually: npm run generate-manifest"
fi
echo ""

# ── 완료 ───────────────────────────────────────────────────
echo "╔══════════════════════════════════════════════════════╗"
echo "║   DONE: $SLUG"
echo "╚══════════════════════════════════════════════════════╝"
echo ""
echo "Files created:"
ls -la "$BASE/$SLUG/"
echo ""
echo "Preview:"
echo "  open $BASE/$SLUG/index.html"
echo "  open $BASE/$SLUG/images/fullpage.png"
