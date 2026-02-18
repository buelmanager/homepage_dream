import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Calendar, Tag, ArrowRight, BookOpen } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { getAllPosts } from "@/lib/blog";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Blog | Homepage Design Tips & Trends",
  description:
    "Explore homepage design tips, web development trends, and template guides.",
  alternates: { canonical: "/blog" },
  openGraph: {
    title: "Blog — HomeDream",
    description:
      "Homepage design tips, web development trends, and template guides.",
    url: "/blog",
  },
};

export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <div className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:py-16">
      <div className="mb-12 text-center">
        <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-border/60 bg-muted/50 px-3.5 py-1.5 text-xs text-muted-foreground">
          <BookOpen className="size-3" />
          <span className="font-medium">{posts.length} Articles</span>
        </div>
        <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">Blog</h1>
        <p className="mt-2 text-muted-foreground">
          Homepage design tips, web development trends, and template guides
        </p>
      </div>

      {posts.length === 0 ? (
        <div className="rounded-xl border border-dashed border-border/60 p-12 text-center">
          <BookOpen className="mx-auto size-10 text-muted-foreground/40" />
          <p className="mt-4 text-sm text-muted-foreground">
            No posts published yet.
          </p>
        </div>
      ) : (
        <div className="grid gap-6 sm:grid-cols-2">
          {posts.map((post) => (
            <Link key={post.slug} href={`/blog/${post.slug}`}>
              <article className="group overflow-hidden rounded-xl border border-border/40 bg-background transition-all duration-200 hover:border-border hover:shadow-lg">
                {post.thumbnail && (
                  <div className="relative aspect-[16/9] overflow-hidden bg-muted">
                    <Image
                      src={post.thumbnail}
                      alt={post.title}
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-[1.03]"
                      sizes="(max-width: 640px) 100vw, 50vw"
                    />
                  </div>
                )}
                <div className="p-5">
                  <div className="mb-2 flex items-center gap-2 text-xs text-muted-foreground">
                    <Calendar className="size-3" />
                    <time dateTime={post.date}>
                      {new Date(post.date).toLocaleDateString("en-US", {
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                      })}
                    </time>
                  </div>

                  <h2 className="text-lg font-semibold tracking-tight line-clamp-2 group-hover:text-foreground/80">
                    {post.title}
                  </h2>

                  <p className="mt-1.5 text-sm text-muted-foreground line-clamp-2">
                    {post.description}
                  </p>

                  {post.tags.length > 0 && (
                    <div className="mt-3 flex flex-wrap gap-1.5">
                      {post.tags.slice(0, 3).map((tag) => (
                        <Badge
                          key={tag}
                          variant="secondary"
                          className="text-[10px]"
                        >
                          <Tag className="mr-1 size-2.5" />
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  )}

                  <div className="mt-4 flex items-center gap-1 text-xs font-medium text-muted-foreground transition-colors group-hover:text-foreground">
                    Read more
                    <ArrowRight className="size-3 transition-transform group-hover:translate-x-0.5" />
                  </div>
                </div>
              </article>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
