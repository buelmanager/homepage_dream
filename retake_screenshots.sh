#!/bin/bash

BASE_DIR="/Users/chulheewon/development/main_project/homepage_dream/multi_clone_hompage/home"
PORT=9000

take_screenshot() {
    local folder=$1
    local port=$2
    
    echo "Processing: $folder on port $port"
    
    cd "$BASE_DIR/$folder"
    
    mkdir -p images
    
    python3 -m http.server $port --bind 127.0.0.1 > /dev/null 2>&1 &
    SERVER_PID=$!
    
    sleep 1
    
    npx playwright screenshot --full-page "http://127.0.0.1:$port/index.html" "images/fullpage.png" 2>&1
    
    kill $SERVER_PID 2>/dev/null
    
    if [ -f "images/fullpage.png" ]; then
        echo "  ✓ $folder done"
    else
        echo "  ✗ $folder FAILED"
    fi
}

FOLDERS=(
    "architecture"
    "auto-detail"
    "bookstore"
    "boutique-hotel"
    "cafe-lounge"
    "cooking-studio"
    "cowork-space"
    "craft-brewery"
    "dental-clinic"
    "ev-station"
    "fine-dining"
    "fitness-gym"
    "flower-boutique"
    "hair-salon"
    "jewelry-atelier"
    "law-firm"
    "music-studio"
    "organic-farm"
    "pet-clinic"
    "photo-studio"
    "pilates-studio"
    "real-estate"
    "spa-wellness"
    "surf-school"
    "tattoo-studio"
    "watch-atelier"
    "whiskey-lounge"
    "wine-bar"
    "yacht-club"
)

echo "Retaking screenshots for translated folders..."
PORT=9000
for folder in "${FOLDERS[@]}"; do
    take_screenshot $folder $PORT
    PORT=$((PORT + 1))
done

echo "Done!"
