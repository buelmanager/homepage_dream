#!/bin/bash
set -euo pipefail

# Usage: ./scripts/verify-image-links.sh <file-with-urls>

FILE="${1:-}"
if [ -z "$FILE" ] || [ ! -f "$FILE" ]; then
  echo "Usage: $0 <file-with-urls>" >&2
  exit 2
fi

bad=0
while IFS= read -r url; do
  [ -z "$url" ] && continue
  code=$(curl -sS -o /dev/null -L -I -w "%{http_code}" "$url" || echo "000")
  if [ "$code" != "200" ]; then
    echo "BAD $code $url"
    bad=1
  else
    echo "OK  $code $url"
  fi
  sleep 0.1
done < "$FILE"

exit $bad
