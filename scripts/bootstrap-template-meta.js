const fs = require("fs");
const path = require("path");

const HOME_DIR = path.join(__dirname, "..", "multi_clone_hompage", "home");
const overwrite = process.argv.includes("--overwrite");

function toTitleFromSlug(slug) {
  return slug
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}

function hasTemplateEntry(dirPath) {
  const previewIndex = path.join(dirPath, "preview", "index.html");
  const rootIndex = path.join(dirPath, "index.html");
  return fs.existsSync(previewIndex) || fs.existsSync(rootIndex);
}

function parseFreeSlugs() {
  const raw = process.env.FREE_TEMPLATE_SLUGS || "";
  return new Set(
    raw
      .split(",")
      .map((v) => v.trim())
      .filter(Boolean)
  );
}

function createDefaultMeta(slug, freeSlugs) {
  const tier = freeSlugs.has(slug) ? "FREE" : "PRO";
  return {
    title: toTitleFromSlug(slug),
    description: `${toTitleFromSlug(slug)} homepage template`,
    tier,
    price: 10,
    category: "pages",
    tags: ["homepage", "landing"],
    language: "한국어",
    style: ["modern"],
    layout: "full-width",
    status: "PUBLISHED",
    sourceUrl: null,
    storageKey: tier === "PRO" ? `templates/${slug}/source.zip` : null,
  };
}

function main() {
  if (!fs.existsSync(HOME_DIR)) {
    console.error(`Home directory not found: ${HOME_DIR}`);
    process.exit(1);
  }

  const freeSlugs = parseFreeSlugs();

  const folders = fs
    .readdirSync(HOME_DIR, { withFileTypes: true })
    .filter((entry) => entry.isDirectory())
    .map((entry) => entry.name)
    .filter((name) => !name.includes("<") && !name.includes(">"))
    .sort();

  let created = 0;
  let updated = 0;
  let skipped = 0;

  for (const slug of folders) {
    const dirPath = path.join(HOME_DIR, slug);
    if (!hasTemplateEntry(dirPath)) {
      skipped += 1;
      continue;
    }

    const metaPath = path.join(dirPath, "meta.json");
    const exists = fs.existsSync(metaPath);

    if (exists && !overwrite) {
      skipped += 1;
      continue;
    }

    const meta = createDefaultMeta(slug, freeSlugs);
    fs.writeFileSync(metaPath, `${JSON.stringify(meta, null, 2)}\n`, "utf8");

    if (exists) {
      updated += 1;
    } else {
      created += 1;
    }
  }

  console.log(
    `meta.json bootstrap complete: created=${created}, updated=${updated}, skipped=${skipped}`
  );
}

main();
