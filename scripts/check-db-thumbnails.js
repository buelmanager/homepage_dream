const pg = require("pg");
const fs = require("fs");
const path = require("path");
const https = require("https");

const manifest = require("../src/data/templates-manifest.json");
const publicDir = path.join(__dirname, "..", "public");

const pool = new pg.Pool({
  connectionString:
    "postgresql://postgres.aeaxdczegwxoxcywgvaa:dnjscjfgml11!!@aws-1-ap-southeast-2.pooler.supabase.com:5432/postgres",
  ssl: { rejectUnauthorized: false },
});

function checkRemoteUrl(url) {
  return new Promise((resolve) => {
    https
      .get(url, (res) => {
        res.resume();
        resolve(res.statusCode === 200);
      })
      .on("error", () => resolve(false));
  });
}

async function main() {
  const res = await pool.query(
    'SELECT slug, "thumbnailUrl" FROM templates ORDER BY slug'
  );

  const dbMap = new Map();
  for (const row of res.rows) {
    dbMap.set(row.slug, row.thumbnailUrl);
  }

  console.log("=== BEFORE fix (original merge: ...db overwrites all) ===");
  let brokenBefore = 0;
  for (const m of manifest) {
    const dbThumb = dbMap.get(m.slug);
    const merged = dbMap.has(m.slug) ? dbThumb : m.thumbnailUrl;
    if (!merged) {
      const hadManifest = !!m.thumbnailUrl;
      if (hadManifest) {
        console.log("  BROKEN: " + m.slug + " (manifest had image, DB null overwrote it)");
        brokenBefore++;
      }
    }
  }
  console.log("Broken count: " + brokenBefore + "\n");

  console.log("=== AFTER fix (db.thumbnailUrl ?? m.thumbnailUrl) ===");
  let ok = 0;
  let noImage = 0;
  const remoteChecks = [];

  for (const m of manifest) {
    const dbThumb = dbMap.get(m.slug);
    const merged = dbMap.has(m.slug)
      ? (dbThumb != null ? dbThumb : m.thumbnailUrl)
      : m.thumbnailUrl;

    if (!merged) {
      console.log("  NO_IMAGE: " + m.slug + " (no thumbnail anywhere)");
      noImage++;
      continue;
    }

    if (merged.startsWith("http")) {
      remoteChecks.push({ slug: m.slug, url: merged });
    } else {
      const filePath = path.join(publicDir, merged);
      if (fs.existsSync(filePath)) {
        ok++;
      } else {
        console.log("  LOCAL_MISSING: " + m.slug + " -> " + merged);
        noImage++;
      }
    }
  }

  // Check remote URLs in parallel
  const results = await Promise.all(
    remoteChecks.map(async ({ slug, url }) => {
      const valid = await checkRemoteUrl(url);
      return { slug, url, valid };
    })
  );

  for (const r of results) {
    if (r.valid) {
      ok++;
    } else {
      console.log("  REMOTE_BROKEN: " + r.slug + " -> " + r.url);
      noImage++;
    }
  }

  console.log("\n=== RESULT ===");
  console.log("Total templates: " + manifest.length);
  console.log("OK (image accessible): " + ok);
  console.log("No image: " + noImage);

  await pool.end();
}

main().catch((err) => {
  console.error(err);
  pool.end();
  process.exit(1);
});
