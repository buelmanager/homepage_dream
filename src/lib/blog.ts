import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { marked, Renderer } from "marked";
import sanitizeHtml from "sanitize-html";

// Escape raw HTML blocks in markdown to prevent XSS.
// Normal markdown formatting (bold, code, links, etc.) is unaffected
// because marked renders those through its own pipeline.
const safeRenderer = new Renderer();
safeRenderer.html = ({ text }: { text: string }) =>
  text
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");

const BLOG_DIR = path.join(process.cwd(), "content/blog");

export interface BlogPost {
  slug: string;
  title: string;
  description: string;
  date: string;
  thumbnail: string | null;
  tags: string[];
  published: boolean;
  content: string;
}

export interface BlogPostMeta {
  slug: string;
  title: string;
  description: string;
  date: string;
  thumbnail: string | null;
  tags: string[];
}

function parseFrontmatter(filePath: string, slug: string): BlogPost {
  const raw = fs.readFileSync(filePath, "utf-8");
  const { data, content } = matter(raw);

  return {
    slug,
    title: data.title ?? slug,
    description: data.description ?? "",
    date: data.date ?? "",
    thumbnail: data.thumbnail ?? null,
    tags: Array.isArray(data.tags) ? data.tags : [],
    published: data.published !== false,
    content,
  };
}

export function getAllPosts(): BlogPostMeta[] {
  if (!fs.existsSync(BLOG_DIR)) return [];

  const files = fs.readdirSync(BLOG_DIR).filter((f) => f.endsWith(".md"));

  const posts = files
    .map((file) => {
      const slug = file.replace(/\.md$/, "");
      const post = parseFrontmatter(path.join(BLOG_DIR, file), slug);
      if (!post.published) return null;
      const { content, published, ...meta } = post;
      return meta;
    })
    .filter(Boolean) as BlogPostMeta[];

  return posts.sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );
}

export async function getPostBySlug(
  slug: string
): Promise<(BlogPostMeta & { html: string }) | null> {
  const filePath = path.join(BLOG_DIR, `${slug}.md`);
  if (!fs.existsSync(filePath)) return null;

  const post = parseFrontmatter(filePath, slug);
  if (!post.published) return null;

  const rawHtml = await marked(post.content, { renderer: safeRenderer });
  const html = sanitizeHtml(rawHtml, {
    allowedTags: sanitizeHtml.defaults.allowedTags.concat([
      "img",
      "h1",
      "h2",
      "h3",
      "figure",
      "figcaption",
      "picture",
      "source",
    ]),
    allowedAttributes: {
      ...sanitizeHtml.defaults.allowedAttributes,
      img: ["src", "alt", "title", "width", "height", "loading"],
      a: ["href", "target", "rel"],
      source: ["srcset", "type"],
    },
    allowedSchemes: ["http", "https", "mailto"],
  });

  return {
    slug: post.slug,
    title: post.title,
    description: post.description,
    date: post.date,
    thumbnail: post.thumbnail,
    tags: post.tags,
    html,
  };
}
