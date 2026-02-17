const fs = require("fs");
const path = require("path");
const archiver = require("archiver");

const HOME_DIR = path.join(__dirname, "..", "multi_clone_hompage", "home");
const skipExisting = process.argv.includes("--skip-existing");

function hasTemplateEntry(dirPath) {
  const previewIndex = path.join(dirPath, "preview", "index.html");
  const rootIndex = path.join(dirPath, "index.html");
  return fs.existsSync(previewIndex) || fs.existsSync(rootIndex);
}

function sourceDirForTemplate(dirPath) {
  const previewDir = path.join(dirPath, "preview");
  if (fs.existsSync(previewDir) && fs.statSync(previewDir).isDirectory()) {
    return previewDir;
  }
  return dirPath;
}

function createZipForTemplate(slug, dirPath) {
  return new Promise((resolve, reject) => {
    const proDir = path.join(dirPath, "pro");
    fs.mkdirSync(proDir, { recursive: true });

    const outputPath = path.join(proDir, "source.zip");
    if (skipExisting && fs.existsSync(outputPath)) {
      resolve({ slug, skipped: true, bytes: 0 });
      return;
    }

    const sourceDir = sourceDirForTemplate(dirPath);
    const output = fs.createWriteStream(outputPath);
    const archive = archiver("zip", { zlib: { level: 9 } });

    output.on("close", () => {
      resolve({ slug, skipped: false, bytes: archive.pointer() });
    });

    archive.on("warning", (err) => {
      if (err.code !== "ENOENT") {
        reject(err);
      }
    });

    archive.on("error", (err) => reject(err));
    archive.pipe(output);

    if (sourceDir === dirPath) {
      archive.glob("**/*", {
        cwd: sourceDir,
        dot: false,
        ignore: [
          "pro/**",
          "preview/**",
          "meta.json",
          "**/.DS_Store",
          "**/*.zip",
          "**/*.tar",
          "**/*.tgz",
          "**/*.gz",
          "**/*.rar",
          "**/*.7z",
        ],
      });
    } else {
      archive.glob("**/*", {
        cwd: sourceDir,
        dot: false,
        ignore: ["**/.DS_Store", "**/*.zip", "**/*.tar", "**/*.tgz", "**/*.gz", "**/*.rar", "**/*.7z"],
      });
    }

    archive.finalize().catch(reject);
  });
}

async function main() {
  if (!fs.existsSync(HOME_DIR)) {
    console.error(`Home directory not found: ${HOME_DIR}`);
    process.exit(1);
  }

  const folders = fs
    .readdirSync(HOME_DIR, { withFileTypes: true })
    .filter((entry) => entry.isDirectory())
    .map((entry) => entry.name)
    .filter((name) => !name.includes("<") && !name.includes(">"))
    .sort();

  let created = 0;
  let skipped = 0;
  let totalBytes = 0;

  for (const slug of folders) {
    const dirPath = path.join(HOME_DIR, slug);
    if (!hasTemplateEntry(dirPath)) {
      continue;
    }

    // eslint-disable-next-line no-await-in-loop
    const result = await createZipForTemplate(slug, dirPath);
    if (result.skipped) {
      skipped += 1;
    } else {
      created += 1;
      totalBytes += result.bytes;
    }
  }

  console.log(
    `pro zip build complete: created=${created}, skipped=${skipped}, bytes=${totalBytes}`
  );
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
