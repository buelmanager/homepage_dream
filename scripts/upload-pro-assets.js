const fs = require("fs");
const path = require("path");
const { createClient } = require("@supabase/supabase-js");
require("dotenv").config({ path: path.join(__dirname, "..", ".env.local") });
require("dotenv").config({ path: path.join(__dirname, "..", ".env") });

const HOME_DIR = path.join(__dirname, "..", "multi_clone_hompage", "home");
const bucketName = process.env.TEMPLATE_PRIVATE_BUCKET || "template-pro-assets";
const dryRun = process.argv.includes("--dry-run");

function readMeta(metaPath) {
  if (!fs.existsSync(metaPath)) {
    return {};
  }
  try {
    return JSON.parse(fs.readFileSync(metaPath, "utf8"));
  } catch {
    return {};
  }
}

function getStorageKey(slug, meta) {
  if (typeof meta.storageKey === "string" && meta.storageKey.trim()) {
    return meta.storageKey.trim();
  }
  return `templates/${slug}/source.zip`;
}

async function ensureBucket(client) {
  const { data, error } = await client.storage.listBuckets();
  if (error) {
    throw error;
  }

  const exists = (data || []).some((bucket) => bucket.name === bucketName);
  if (exists) {
    return;
  }

  const createResult = await client.storage.createBucket(bucketName, {
    public: false,
  });
  if (createResult.error) {
    throw createResult.error;
  }
}

async function main() {
  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const serviceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

  if (!supabaseUrl || !serviceRoleKey) {
    console.error(
      "Missing env. Set NEXT_PUBLIC_SUPABASE_URL and SUPABASE_SERVICE_ROLE_KEY before uploading."
    );
    process.exit(1);
  }

  if (!fs.existsSync(HOME_DIR)) {
    console.error(`Home directory not found: ${HOME_DIR}`);
    process.exit(1);
  }

  const client = createClient(supabaseUrl, serviceRoleKey, {
    auth: { autoRefreshToken: false, persistSession: false },
  });

  if (!dryRun) {
    await ensureBucket(client);
  }

  const folders = fs
    .readdirSync(HOME_DIR, { withFileTypes: true })
    .filter((entry) => entry.isDirectory())
    .map((entry) => entry.name)
    .filter((name) => !name.includes("<") && !name.includes(">"))
    .sort();

  let uploaded = 0;
  let skipped = 0;
  let failed = 0;

  for (const slug of folders) {
    const zipPath = path.join(HOME_DIR, slug, "pro", "source.zip");
    if (!fs.existsSync(zipPath)) {
      skipped += 1;
      continue;
    }

    const meta = readMeta(path.join(HOME_DIR, slug, "meta.json"));
    const tier = meta.tier === "FREE" ? "FREE" : "PRO";
    if (tier !== "PRO") {
      skipped += 1;
      continue;
    }

    const storageKey = getStorageKey(slug, meta);
    if (dryRun) {
      // eslint-disable-next-line no-console
      console.log(`[dry-run] ${slug} -> ${bucketName}/${storageKey}`);
      uploaded += 1;
      continue;
    }

    try {
      const buffer = fs.readFileSync(zipPath);
      const { error } = await client.storage
        .from(bucketName)
        .upload(storageKey, buffer, {
          contentType: "application/zip",
          upsert: true,
        });

      if (error) {
        failed += 1;
        // eslint-disable-next-line no-console
        console.error(`[upload-failed] ${slug}: ${error.message}`);
      } else {
        uploaded += 1;
      }
    } catch (error) {
      failed += 1;
      // eslint-disable-next-line no-console
      console.error(`[upload-failed] ${slug}: ${error?.message || "unknown error"}`);
    }
  }

  console.log(
    `upload complete: uploaded=${uploaded}, skipped=${skipped}, failed=${failed}, dryRun=${dryRun}`
  );
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
