#!/bin/bash

BASE_DIR="/Users/chulheewon/development/main_project/homepage_dream/multi_clone_hompage/home"
PORT=8900

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
    "art-gallery"
    "board-game-cafe"
    "ev-station"
    "fine-dining"
    "flower-boutique"
    "golf-club"
    "hair-salon"
    "ice-cream-shop"
    "interior-design"
    "jewelry-atelier"
    "korean-bbq"
    "law-firm"
    "magic-shop"
    "music-studio"
    "nail-salon"
    "organic-farm"
    "perfume-atelier"
    "pet-clinic"
    "pet-grooming"
    "photo-studio"
    "pilates-studio"
    "pinball-arcade"
    "plant-nursery"
    "pottery-studio"
    "ramen-shop"
    "real-estate"
    "record-store"
    "sake-brewery"
    "skate-shop"
    "sneaker-store"
    "spa-wellness"
    "surf-school"
    "sushi-izakaya"
    "tea-house"
    "vintage-store"
    "vr-arcade"
    "watch-atelier"
    "whiskey-distillery"
    "whiskey-lounge"
    "wine-bar"
    "yacht-club"
    "yoga-studio"
)

echo "Checking current status..."
for folder in "${FOLDERS[@]}"; do
    if [ -f "$BASE_DIR/$folder/images/fullpage.png" ]; then
        echo "EXISTS: $folder"
    else
        echo "MISSING: $folder"
    fi
done

echo ""
echo "Starting screenshot process..."
PORT=8900
for folder in "${FOLDERS[@]}"; do
    if [ ! -f "$BASE_DIR/$folder/images/fullpage.png" ]; then
        take_screenshot $folder $PORT
        PORT=$((PORT + 1))
    fi
done

echo "Done!"
