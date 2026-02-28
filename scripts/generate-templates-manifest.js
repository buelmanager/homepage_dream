const fs = require("fs");
const path = require("path");
const archiver = require("archiver");

const TEMPLATES_DIR = path.join(__dirname, "..", "public", "templates");
const MULTI_CLONE_DIR = path.join(__dirname, "..", "multi_clone_hompage", "home");
const OUTPUT_FILE = path.join(__dirname, "..", "src", "data", "templates-manifest.json");

const ARCHIVE_EXTENSIONS = new Set([".zip", ".tar", ".tgz", ".gz", ".rar", ".7z"]);

function resetDirectory(dir) {
  if (fs.existsSync(dir)) {
    fs.rmSync(dir, { recursive: true, force: true });
  }
  fs.mkdirSync(dir, { recursive: true });
}

function copyDirectoryRecursive(sourceDir, targetDir, options = {}) {
  const {
    excludeNames = new Set(),
    excludeExtensions = new Set(),
  } = options;

  fs.mkdirSync(targetDir, { recursive: true });

  const entries = fs.readdirSync(sourceDir, { withFileTypes: true });
  for (const entry of entries) {
    if (excludeNames.has(entry.name)) {
      continue;
    }

    const sourcePath = path.join(sourceDir, entry.name);
    const targetPath = path.join(targetDir, entry.name);

    if (entry.isDirectory()) {
      copyDirectoryRecursive(sourcePath, targetPath, options);
      continue;
    }

    const ext = path.extname(entry.name).toLowerCase();
    if (excludeExtensions.has(ext)) {
      continue;
    }

    fs.copyFileSync(sourcePath, targetPath);
  }
}

function safeReadMeta(metaPath) {
  if (!fs.existsSync(metaPath)) {
    return {};
  }

  try {
    const raw = fs.readFileSync(metaPath, "utf8");
    const parsed = JSON.parse(raw);
    return parsed && typeof parsed === "object" ? parsed : {};
  } catch {
    return {};
  }
}

function loadSourceMetaBySlug() {
  const map = new Map();

  if (!fs.existsSync(MULTI_CLONE_DIR)) {
    return map;
  }

  const folders = fs
    .readdirSync(MULTI_CLONE_DIR, { withFileTypes: true })
    .filter((dirent) => dirent.isDirectory())
    .map((dirent) => dirent.name);

  for (const folder of folders) {
    const metaPath = path.join(MULTI_CLONE_DIR, folder, "meta.json");
    map.set(folder, safeReadMeta(metaPath));
  }

  return map;
}

function syncSourceTemplatesToPublic() {
  console.log("🔄 Syncing multi_clone templates -> public/templates ...");

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
    const previewPath = path.join(sourcePath, "preview");
    const targetPath = path.join(TEMPLATES_DIR, folder);

    if (fs.existsSync(previewPath) && fs.statSync(previewPath).isDirectory()) {
      copyDirectoryRecursive(previewPath, targetPath);
      continue;
    }

    copyDirectoryRecursive(sourcePath, targetPath, {
      excludeNames: new Set(["pro", "preview", "meta.json", ".DS_Store"]),
      excludeExtensions: ARCHIVE_EXTENSIONS,
    });
  }

  return { copied: folders.length };
}

function toTitleFromSlug(slug) {
  // Strip date prefix like "20260226_" before converting
  const clean = slug.replace(/^\d{8}_/, "");
  return clean
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}

function normalizeTier(value) {
  return typeof value === "string" && value.toUpperCase() === "FREE" ? "FREE" : "PRO";
}

function normalizeStatus(value) {
  if (value === "DRAFT" || value === "PUBLISHED" || value === "ARCHIVED") {
    return value;
  }
  return "PUBLISHED";
}

function normalizePrice(value) {
  const numeric = Number(value);
  if (Number.isFinite(numeric) && numeric >= 0) {
    return Math.floor(numeric);
  }
  return 10;
}

function scanTemplatesDirectory(baseDir, sourcePrefix = "/templates", sourceMetaBySlug = new Map()) {
  if (!fs.existsSync(baseDir)) {
    return [];
  }

  const folders = fs
    .readdirSync(baseDir, { withFileTypes: true })
    .filter((dirent) => dirent.isDirectory())
    .map((dirent) => dirent.name);

  const templates = [];

  for (const folder of folders) {
    const indexPath = path.join(baseDir, folder, "index.html");

    if (!fs.existsSync(indexPath)) {
      continue;
    }

    const meta = sourceMetaBySlug.get(folder) || {};
    const title = typeof meta.title === "string" && meta.title.trim()
      ? meta.title.trim()
      : toTitleFromSlug(folder);

    const imagesDir = path.join(baseDir, folder, "images");
    let thumbnailUrl = null;

    if (fs.existsSync(imagesDir)) {
      // thumbnail.webp 우선, 없으면 thumbnail.jpg, 없으면 fullpage.png
      const thumbnailWebpPath = path.join(imagesDir, "thumbnail.webp");
      const thumbnailJpgPath = path.join(imagesDir, "thumbnail.jpg");
      const fullpagePath = path.join(imagesDir, "fullpage.png");
      if (fs.existsSync(thumbnailWebpPath)) {
        thumbnailUrl = `${sourcePrefix}/${folder}/images/thumbnail.webp`;
      } else if (fs.existsSync(thumbnailJpgPath)) {
        thumbnailUrl = `${sourcePrefix}/${folder}/images/thumbnail.jpg`;
      } else if (fs.existsSync(fullpagePath)) {
        thumbnailUrl = `${sourcePrefix}/${folder}/images/fullpage.png`;
      } else {
        const files = fs.readdirSync(imagesDir);
        const pngFile = files.find((fileName) => fileName.endsWith(".png"));
        if (pngFile) {
          thumbnailUrl = `${sourcePrefix}/${folder}/images/${pngFile}`;
        }
      }
    }

    const fallbackPath = path.join(baseDir, folder, "01-hero.png");
    if (!thumbnailUrl && fs.existsSync(fallbackPath)) {
      thumbnailUrl = `${sourcePrefix}/${folder}/01-hero.png`;
    }

    const tier = normalizeTier(meta.tier);

    templates.push({
      id: `templates-${folder}`,
      slug: folder,
      title,
      description:
        typeof meta.description === "string" && meta.description.trim()
          ? meta.description.trim()
          : `${title} homepage template`,
      price: normalizePrice(meta.price),
      tier,
      category: typeof meta.category === "string" && meta.category.trim() ? meta.category : "pages",
      tags: Array.isArray(meta.tags) ? meta.tags : ["homepage", "landing"],
      language: typeof meta.language === "string" && meta.language.trim() ? meta.language : "한국어",
      style: Array.isArray(meta.style) ? meta.style : ["modern"],
      layout: typeof meta.layout === "string" ? meta.layout : "full-width",
      sourceUrl: typeof meta.sourceUrl === "string" ? meta.sourceUrl : null,
      thumbnailUrl,
      htmlPath: `${sourcePrefix}/${folder}/index.html`,
      storageKey:
        typeof meta.storageKey === "string" && meta.storageKey.trim()
          ? meta.storageKey.trim()
          : tier === "PRO"
            ? `templates/${folder}/source.zip`
            : null,
      status: normalizeStatus(meta.status),
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

/**
 * FREE tier 템플릿의 source.zip을 public/templates/{slug}/source.zip 에 생성.
 * Vercel 서버리스는 public/ 파일에 fs 접근 불가(outputFileTracingExcludes)이므로
 * 다운로드 API에서 이 정적 파일로 리다이렉트한다.
 */
function buildFreeZip(slug, dir) {
  return new Promise((resolve, reject) => {
    const zipPath = path.join(dir, "source.zip");
    const output = fs.createWriteStream(zipPath);
    const archive = archiver("zip", { zlib: { level: 5 } });

    output.on("close", () => resolve(archive.pointer()));
    archive.on("error", reject);
    archive.pipe(output);

    archive.glob("**/*", {
      cwd: dir,
      dot: false,
      ignore: [
        "source.zip",
        "**/.DS_Store",
        "**/fullpage.png",
        "**/thumbnail.jpg",
      ],
    });

    archive.finalize().catch(reject);
  });
}

async function buildFreeZips(sourceMetaBySlug) {
  if (!fs.existsSync(TEMPLATES_DIR)) return;

  const folders = fs
    .readdirSync(TEMPLATES_DIR, { withFileTypes: true })
    .filter((d) => d.isDirectory())
    .map((d) => d.name);

  let built = 0;
  for (const slug of folders) {
    const meta = sourceMetaBySlug.get(slug) || {};
    if (normalizeTier(meta.tier) !== "FREE") continue;

    const dir = path.join(TEMPLATES_DIR, slug);
    await buildFreeZip(slug, dir);
    built += 1;
  }

  console.log(`✅ Built ${built} FREE source.zip files`);
}

async function generateManifest() {
  const sourceMetaBySlug = loadSourceMetaBySlug();
  const syncResult = syncSourceTemplatesToPublic();
  console.log(`✅ Synced ${syncResult.copied} template folders`);

  await buildFreeZips(sourceMetaBySlug);

  console.log("🔍 Scanning public/templates ...");

  const publicTemplates = scanTemplatesDirectory(TEMPLATES_DIR, "/templates", sourceMetaBySlug);
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

generateManifest().catch((err) => {
  console.error(err);
  process.exit(1);
});
