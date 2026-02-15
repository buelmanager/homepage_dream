const fs = require('fs');
const path = require('path');

const TEMPLATES_DIR = path.join(__dirname, '..', 'public', 'templates');
const MULTI_CLONE_DIR = path.join(__dirname, '..', 'multi_clone_hompage', 'home');
const OUTPUT_FILE = path.join(__dirname, '..', 'src', 'data', 'templates-manifest.json');

function resetDirectory(dir) {
  if (fs.existsSync(dir)) {
    fs.rmSync(dir, { recursive: true, force: true });
  }
  fs.mkdirSync(dir, { recursive: true });
}

function copyDirectoryRecursive(sourceDir, targetDir) {
  fs.mkdirSync(targetDir, { recursive: true });

  const entries = fs.readdirSync(sourceDir, { withFileTypes: true });
  for (const entry of entries) {
    const sourcePath = path.join(sourceDir, entry.name);
    const targetPath = path.join(targetDir, entry.name);

    if (entry.isDirectory()) {
      copyDirectoryRecursive(sourcePath, targetPath);
      continue;
    }

    fs.copyFileSync(sourcePath, targetPath);
  }
}

function syncSourceTemplatesToPublic() {
  console.log('🔄 Syncing multi_clone templates -> public/templates ...');

  if (!fs.existsSync(MULTI_CLONE_DIR)) {
    resetDirectory(TEMPLATES_DIR);
    return { copied: 0 };
  }

  resetDirectory(TEMPLATES_DIR);

  const folders = fs
    .readdirSync(MULTI_CLONE_DIR, { withFileTypes: true })
    .filter((dirent) => dirent.isDirectory())
    .map((dirent) => dirent.name);

  for (const folder of folders) {
    const sourcePath = path.join(MULTI_CLONE_DIR, folder);
    const targetPath = path.join(TEMPLATES_DIR, folder);
    copyDirectoryRecursive(sourcePath, targetPath);
  }

  return { copied: folders.length };
}

function scanTemplatesDirectory(baseDir, sourcePrefix = '/templates') {
  if (!fs.existsSync(baseDir)) {
    return [];
  }

  const folders = fs.readdirSync(baseDir, { withFileTypes: true })
    .filter(dirent => dirent.isDirectory())
    .map(dirent => dirent.name);

  const templates = [];

  for (const folder of folders) {
    const indexPath = path.join(baseDir, folder, 'index.html');
    
    if (!fs.existsSync(indexPath)) {
      continue;
    }

    const title = folder
      .split('-')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');

    const imagesDir = path.join(baseDir, folder, 'images');
    let thumbnailUrl = null;

    if (fs.existsSync(imagesDir)) {
      const fullpagePath = path.join(imagesDir, 'fullpage.png');
      if (fs.existsSync(fullpagePath)) {
        thumbnailUrl = `${sourcePrefix}/${folder}/images/fullpage.png`;
      } else {
        const files = fs.readdirSync(imagesDir);
        const pngFile = files.find(f => f.endsWith('.png'));
        if (pngFile) {
          thumbnailUrl = `${sourcePrefix}/${folder}/images/${pngFile}`;
        }
      }
    }

    const fallbackPath = path.join(baseDir, folder, '01-hero.png');
    if (!thumbnailUrl && fs.existsSync(fallbackPath)) {
      thumbnailUrl = `${sourcePrefix}/${folder}/01-hero.png`;
    }

    templates.push({
      id: `templates-${folder}`,
      slug: folder,
      title,
      description: `${title} homepage template`,
      price: 10,
      category: 'pages',
      tags: ['homepage', 'landing'],
      language: '한국어',
      style: ['modern'],
      layout: 'full-width',
      sourceUrl: null,
      thumbnailUrl,
      htmlPath: `${sourcePrefix}/${folder}/index.html`,
      status: 'PUBLISHED',
      viewCount: 0,
      likeCount: 0,
      saveCount: 0,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
      sections: [],
    });
  }

  return templates;
}

function generateManifest() {
  const syncResult = syncSourceTemplatesToPublic();
  console.log(`✅ Synced ${syncResult.copied} template folders`);
  console.log('🔍 Scanning public/templates ...');

  const publicTemplates = scanTemplatesDirectory(TEMPLATES_DIR, '/templates');
  const allTemplates = [...publicTemplates];

  const dataDir = path.dirname(OUTPUT_FILE);
  if (!fs.existsSync(dataDir)) {
    fs.mkdirSync(dataDir, { recursive: true });
  }

  fs.writeFileSync(OUTPUT_FILE, JSON.stringify(allTemplates, null, 2));

  console.log(`✅ Generated templates manifest with ${allTemplates.length} templates`);
  console.log(`   - public/templates: ${publicTemplates.length}`);
  console.log(`📄 Output: ${OUTPUT_FILE}`);
}

generateManifest();
