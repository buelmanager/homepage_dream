const { chromium } = require('playwright');
const fs = require('fs');
const path = require('path');

const BASE_DIR = '/Users/chulheewon/development/main_project/homepage_dream/multi_clone_hompage/home';

const folders = [
  'page_01-noodle-lab',
  'page_02-fashion-editorial',
  'page_03-eco-travel-atlas',
  'page_04-ai-command-center',
  'page_05-breath-yoga-studio',
  'page_06-vinyl-record-archive',
  'page_07-skincare-formula-lab',
  'page_08-architecture-atelier',
  'page_09-amber-brew-taproom',
  'page_10-kids-stem-camp',
];

async function captureFolder(folder) {
  const folderPath = path.join(BASE_DIR, folder);
  const htmlPath = path.join(folderPath, 'index.html');
  if (!fs.existsSync(htmlPath)) {
    throw new Error(`Missing index.html: ${htmlPath}`);
  }

  const imagesDir = path.join(folderPath, 'images');
  fs.mkdirSync(imagesDir, { recursive: true });
  const outPath = path.join(imagesDir, 'fullpage.png');

  const url = 'file://' + htmlPath;

  const browser = await chromium.launch({ headless: true });
  const page = await browser.newPage({ viewport: { width: 1440, height: 900 } });

  try {
    await page.goto(url, { waitUntil: 'domcontentloaded' });

    // Wait for the page to explicitly mark itself ready (loader hidden + intro done).
    await page.waitForFunction(() => window.__PAGE_READY__ === true, null, { timeout: 25000 });

    // Give layout a brief settle window.
    await page.waitForTimeout(400);

    await page.screenshot({ path: outPath, fullPage: true });
  } finally {
    await browser.close();
  }
}

async function main() {
  for (const folder of folders) {
    // eslint-disable-next-line no-console
    console.log(`Capturing ${folder}...`);
    await captureFolder(folder);
    await new Promise((r) => setTimeout(r, 300));
  }
}

main().catch((err) => {
  // eslint-disable-next-line no-console
  console.error(err);
  process.exit(1);
});
