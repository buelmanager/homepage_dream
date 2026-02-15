const { chromium } = require('playwright');
const fs = require('fs');
const path = require('path');

const BASE_DIR = '/Users/chulheewon/development/main_project/homepage_dream/multi_clone_hompage/home';
const WAIT_TIME = 5000;

const foldersNeedingScreenshots = [
  'auto-detail', 'bakery', 'bookstore', 'boutique-hotel', 'chocolate-atelier',
  'cocktail-bar', 'cooking-studio', 'cowork-space', 'coworking-library', 'craft-brewery',
  'dive-center', 'escape-room', 'ev-station', 'jewelry-atelier', 'language-academy',
  'moto-garage', 'music-studio', 'nail-salon', 'organic-farm', 'pet-clinic',
  'pet-grooming', 'pilates-studio', 'rock-climbing', 'skydiving-center', 'sneaker-store',
  'spa-wellness', 'surf-school', 'tattoo-studio', 'watch-atelier', 'wedding-planner',
  'whiskey-lounge', 'wine-bar', 'yacht-club', 'yoga-studio',
];

async function captureScreenshot(folderName) {
  const folderPath = path.join(BASE_DIR, folderName);
  const htmlPath = path.join(folderPath, 'index.html');
  
  if (!fs.existsSync(htmlPath)) {
    console.log(`⚠️  Skipping ${folderName}: No index.html found`);
    return false;
  }
  
  const imagesDir = path.join(folderPath, 'images');
  if (!fs.existsSync(imagesDir)) {
    fs.mkdirSync(imagesDir, { recursive: true });
  }
  
  const screenshotPath = path.join(imagesDir, 'fullpage.png');
  
  console.log(`📸 Capturing ${folderName}...`);
  
  const browser = await chromium.launch({ headless: true });
  const page = await browser.newPage({
    viewport: { width: 1280, height: 800 }
  });
  
  try {
    const fileUrl = 'file://' + htmlPath;
    await page.goto(fileUrl, { waitUntil: 'networkidle' });
    
    console.log(`   ⏳ Waiting ${WAIT_TIME}ms for content to load...`);
    await page.waitForTimeout(WAIT_TIME);
    
    await page.screenshot({ 
      path: screenshotPath,
      fullPage: true 
    });
    
    console.log(`   ✅ Saved to ${screenshotPath}`);
    await browser.close();
    return true;
    
  } catch (error) {
    console.error(`   ❌ Error capturing ${folderName}:`, error.message);
    await browser.close();
    return false;
  }
}

async function main() {
  console.log('🚀 Starting screenshot capture for multi_clone_hompage/home/ folders\n');
  
  let successCount = 0;
  let failCount = 0;
  
  for (const folder of foldersNeedingScreenshots) {
    const success = await captureScreenshot(folder);
    if (success) {
      successCount++;
    } else {
      failCount++;
    }
    
    await new Promise(resolve => setTimeout(resolve, 1000));
  }
  
  console.log(`\n📊 Summary:`);
  console.log(`   ✅ Successfully captured: ${successCount}`);
  console.log(`   ❌ Failed: ${failCount}`);
  console.log(`   📁 Total folders processed: ${foldersNeedingScreenshots.length}`);
}

main().catch(console.error);
