import "dotenv/config";
import pg from "pg";
import { PrismaPg } from "@prisma/adapter-pg";
import { PrismaClient } from "../src/generated/prisma/client";

const pool = new pg.Pool({ connectionString: process.env.DIRECT_URL });
const adapter = new PrismaPg(pool);
const prisma = new PrismaClient({ adapter } as any);

const newTemplates = [
  { 
    slug: "moto-garage", 
    title: "IRON HORSE — Custom Motorcycle Garage", 
    description: "Premium custom motorcycle builds, restorations & high-performance modifications", 
    price: 18, 
    category: "pages", 
    tags: ["motorcycle", "garage", "custom", "automotive"], 
    language: "English", 
    style: ["dark-theme", "bold", "industrial"], 
    layout: "centered", 
    sourceUrl: "https://ironhorse-garage.com", 
    thumbnailUrl: "/templates/moto-garage/images/fullpage.png", 
    htmlPath: "/templates/moto-garage/index.html", 
    sections: ["header", "hero", "brands", "services", "builds", "parts", "testimonials", "faq", "contact", "footer"] 
  },
  { 
    slug: "skydiving-center", 
    title: "GRAVITY ZONE — Skydiving Center", 
    description: "Experience the ultimate thrill with professional skydiving services and training", 
    price: 16, 
    category: "pages", 
    tags: ["skydiving", "adventure", "extreme", "sports"], 
    language: "English", 
    style: ["dark-theme", "bold", "gradient"], 
    layout: "centered", 
    sourceUrl: "https://gravityzone-skydiving.com", 
    thumbnailUrl: "/templates/skydiving-center/images/fullpage.png", 
    htmlPath: "/templates/skydiving-center/index.html", 
    sections: ["header", "hero", "experience", "packages", "safety", "gallery", "testimonials", "contact", "footer"] 
  },
];

async function main() {
  console.log("Adding new templates...\n");

  for (const t of newTemplates) {
    const { sections: sectionCats, ...data } = t;
    const existing = await prisma.template.findUnique({ where: { slug: data.slug } });
    if (existing) { 
      console.log(`  skip (already exists): ${data.title}`); 
      continue; 
    }

    const created = await prisma.template.create({
      data: { 
        ...data, 
        viewCount: Math.floor(Math.random() * 500) + 50, 
        likeCount: Math.floor(Math.random() * 100) + 10, 
        saveCount: Math.floor(Math.random() * 80) + 5 
      },
    });

    for (let i = 0; i < sectionCats.length; i++) {
      const cat = sectionCats[i];
      await prisma.section.create({
        data: {
          slug: `${data.slug}-${cat}-${i}`, 
          title: `${data.slug}-${cat}-${i}`, 
          category: cat, 
          templateId: created.id,
          tags: data.tags, 
          language: data.language, 
          style: data.style, 
          layout: data.layout,
          thumbnailUrl: `/templates/${data.slug}/images/${String(i + 1).padStart(2, "0")}-${cat}.png`,
          price: cat === "hero" ? 8 : cat === "pricing" ? 7 : 5,
          viewCount: Math.floor(Math.random() * 200) + 20, 
          likeCount: Math.floor(Math.random() * 50) + 5, 
          saveCount: Math.floor(Math.random() * 30) + 2, 
          order: i,
        },
      });
    }
    console.log(`  + ${data.title} (${sectionCats.length} sections)`);
  }

  const tc = await prisma.template.count();
  const sc = await prisma.section.count();
  console.log(`\nDone: ${tc} templates, ${sc} sections`);
}

main().then(() => prisma.$disconnect()).catch((e) => { console.error(e); prisma.$disconnect(); process.exit(1); });
