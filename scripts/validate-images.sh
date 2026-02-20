#!/usr/bin/env bash
# Usage: ./validate-images.sh urls.txt output.txt
# 200 응답만 output.txt에 기록
INPUT="${1:-/dev/stdin}"
OUTPUT="${2:-/dev/stdout}"
echo "# Image Validation Results — $(date)" > "$OUTPUT"
while IFS= read -r url; do
  [[ -z "$url" || "$url" == \#* ]] && continue
  code=$(curl -o /dev/null -s -w "%{http_code}" --head "$url" --max-time 6 -L)
  if [[ "$code" == "200" ]]; then
    echo "PASS $code $url" | tee -a "$OUTPUT"
  else
    echo "FAIL $code $url"
  fi
done < "$INPUT"
echo "Done. Validated URLs in $OUTPUT"
