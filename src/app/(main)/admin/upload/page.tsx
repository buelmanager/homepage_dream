"use client";

import { useState } from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CATEGORIES, STYLES, LAYOUTS } from "@/types";
import {
  ArrowLeft,
  Loader2,
  Upload,
  X,
} from "lucide-react";
import Link from "next/link";

export default function AdminUploadPage() {
  const { data: session, status } = useSession();
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const [form, setForm] = useState({
    title: "",
    slug: "",
    description: "",
    price: "10",
    category: "pages",
    language: "English",
    layout: "",
    sourceUrl: "",
    htmlPath: "",
  });
  const [tags, setTags] = useState<string[]>([]);
  const [styles, setStyles] = useState<string[]>([]);
  const [tagInput, setTagInput] = useState("");

  if (status === "loading") {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <Loader2 className="h-8 w-8 animate-spin text-stone-400" />
      </div>
    );
  }

  if (session?.user?.role !== "ADMIN") {
    router.push("/");
    return null;
  }

  const updateField = (field: string, value: string) => {
    setForm((prev) => ({ ...prev, [field]: value }));
    if (field === "title" && !form.slug) {
      setForm((prev) => ({
        ...prev,
        [field]: value,
        slug: value
          .toLowerCase()
          .replace(/[^a-z0-9]+/g, "-")
          .replace(/(^-|-$)/g, ""),
      }));
    }
  };

  const addTag = () => {
    const tag = tagInput.trim().toLowerCase();
    if (tag && !tags.includes(tag)) {
      setTags((prev) => [...prev, tag]);
    }
    setTagInput("");
  };

  const toggleStyle = (style: string) => {
    setStyles((prev) =>
      prev.includes(style) ? prev.filter((s) => s !== style) : [...prev, style]
    );
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      const res = await fetch("/api/templates", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...form,
          price: parseInt(form.price) || 10,
          tags,
          style: styles,
        }),
      });

      if (!res.ok) {
        const data = await res.json();
        setError(data.error || "Failed to create template");
        setLoading(false);
        return;
      }

      router.push("/admin");
    } catch {
      setError("Something went wrong");
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-stone-50 to-white">
      <div className="mx-auto max-w-2xl px-4 py-12 sm:px-6">
        <div className="mb-8">
          <Link
            href="/admin"
            className="inline-flex items-center gap-1.5 text-sm text-stone-500 transition-colors hover:text-stone-800"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Admin
          </Link>
        </div>

        <Card className="border-stone-200/80 shadow-sm">
          <CardHeader className="pb-4">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-stone-900">
                <Upload className="h-5 w-5 text-white" />
              </div>
              <div>
                <h1 className="text-xl font-semibold tracking-tight text-stone-900">
                  Add Template
                </h1>
                <p className="text-sm text-stone-500">
                  Create a new template entry
                </p>
              </div>
            </div>
          </CardHeader>

          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid gap-5 sm:grid-cols-2">
                <div className="space-y-1.5">
                  <label className="text-xs font-medium tracking-wide text-stone-500 uppercase">
                    Title
                  </label>
                  <Input
                    value={form.title}
                    onChange={(e) => updateField("title", e.target.value)}
                    placeholder="My Template"
                    className="border-stone-200 bg-stone-50/50"
                    required
                  />
                </div>
                <div className="space-y-1.5">
                  <label className="text-xs font-medium tracking-wide text-stone-500 uppercase">
                    Slug
                  </label>
                  <Input
                    value={form.slug}
                    onChange={(e) => updateField("slug", e.target.value)}
                    placeholder="my-template"
                    className="border-stone-200 bg-stone-50/50"
                    required
                  />
                </div>
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-medium tracking-wide text-stone-500 uppercase">
                  Description
                </label>
                <textarea
                  value={form.description}
                  onChange={(e) => updateField("description", e.target.value)}
                  placeholder="Describe this template..."
                  rows={3}
                  className="w-full rounded-md border border-stone-200 bg-stone-50/50 px-3 py-2 text-sm text-stone-900 placeholder:text-stone-400 focus:border-stone-400 focus:outline-none focus:ring-1 focus:ring-stone-300"
                />
              </div>

              <div className="grid gap-5 sm:grid-cols-3">
                <div className="space-y-1.5">
                  <label className="text-xs font-medium tracking-wide text-stone-500 uppercase">
                    Price (credits)
                  </label>
                  <Input
                    type="number"
                    value={form.price}
                    onChange={(e) => updateField("price", e.target.value)}
                    className="border-stone-200 bg-stone-50/50"
                    min="0"
                  />
                </div>
                <div className="space-y-1.5">
                  <label className="text-xs font-medium tracking-wide text-stone-500 uppercase">
                    Category
                  </label>
                  <select
                    value={form.category}
                    onChange={(e) => updateField("category", e.target.value)}
                    className="w-full rounded-md border border-stone-200 bg-stone-50/50 px-3 py-2 text-sm text-stone-900 focus:border-stone-400 focus:outline-none focus:ring-1 focus:ring-stone-300"
                  >
                    {CATEGORIES.filter((c) => c.name !== "all").map((c) => (
                      <option key={c.name} value={c.name}>
                        {c.label}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="space-y-1.5">
                  <label className="text-xs font-medium tracking-wide text-stone-500 uppercase">
                    Language
                  </label>
                  <select
                    value={form.language}
                    onChange={(e) => updateField("language", e.target.value)}
                    className="w-full rounded-md border border-stone-200 bg-stone-50/50 px-3 py-2 text-sm text-stone-900 focus:border-stone-400 focus:outline-none focus:ring-1 focus:ring-stone-300"
                  >
                    <option value="English">English</option>
                    <option value="Korean">Korean</option>
                  </select>
                </div>
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-medium tracking-wide text-stone-500 uppercase">
                  Layout
                </label>
                <div className="flex flex-wrap gap-2">
                  {LAYOUTS.map((l) => (
                    <button
                      key={l}
                      type="button"
                      onClick={() =>
                        updateField("layout", form.layout === l ? "" : l)
                      }
                      className={`rounded-full px-3 py-1 text-xs font-medium transition-all ${
                        form.layout === l
                          ? "bg-stone-900 text-white"
                          : "bg-stone-100 text-stone-600 hover:bg-stone-200"
                      }`}
                    >
                      {l}
                    </button>
                  ))}
                </div>
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-medium tracking-wide text-stone-500 uppercase">
                  Style
                </label>
                <div className="flex flex-wrap gap-2">
                  {STYLES.map((s) => (
                    <button
                      key={s}
                      type="button"
                      onClick={() => toggleStyle(s)}
                      className={`rounded-full px-3 py-1 text-xs font-medium transition-all ${
                        styles.includes(s)
                          ? "bg-stone-900 text-white"
                          : "bg-stone-100 text-stone-600 hover:bg-stone-200"
                      }`}
                    >
                      {s}
                    </button>
                  ))}
                </div>
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-medium tracking-wide text-stone-500 uppercase">
                  Tags
                </label>
                <div className="flex gap-2">
                  <Input
                    value={tagInput}
                    onChange={(e) => setTagInput(e.target.value)}
                    onKeyDown={(e) => {
                      if (e.key === "Enter") {
                        e.preventDefault();
                        addTag();
                      }
                    }}
                    placeholder="Add tag and press Enter"
                    className="border-stone-200 bg-stone-50/50"
                  />
                  <Button
                    type="button"
                    variant="outline"
                    onClick={addTag}
                    className="shrink-0 border-stone-200"
                  >
                    Add
                  </Button>
                </div>
                {tags.length > 0 && (
                  <div className="mt-2 flex flex-wrap gap-1.5">
                    {tags.map((tag) => (
                      <Badge
                        key={tag}
                        variant="secondary"
                        className="gap-1 bg-stone-100 text-stone-600"
                      >
                        {tag}
                        <button
                          type="button"
                          onClick={() =>
                            setTags((prev) => prev.filter((t) => t !== tag))
                          }
                        >
                          <X className="h-3 w-3" />
                        </button>
                      </Badge>
                    ))}
                  </div>
                )}
              </div>

              <div className="grid gap-5 sm:grid-cols-2">
                <div className="space-y-1.5">
                  <label className="text-xs font-medium tracking-wide text-stone-500 uppercase">
                    Source URL
                  </label>
                  <Input
                    value={form.sourceUrl}
                    onChange={(e) => updateField("sourceUrl", e.target.value)}
                    placeholder="https://..."
                    className="border-stone-200 bg-stone-50/50"
                  />
                </div>
                <div className="space-y-1.5">
                  <label className="text-xs font-medium tracking-wide text-stone-500 uppercase">
                    HTML Path
                  </label>
                  <Input
                    value={form.htmlPath}
                    onChange={(e) => updateField("htmlPath", e.target.value)}
                    placeholder="/templates/my-template"
                    className="border-stone-200 bg-stone-50/50"
                  />
                </div>
              </div>

              {error && (
                <div className="rounded-lg border border-red-200 bg-red-50 px-3 py-2 text-sm text-red-700">
                  {error}
                </div>
              )}

              <div className="flex justify-end gap-3 pt-2">
                <Link href="/admin">
                  <Button type="button" variant="outline" className="border-stone-200">
                    Cancel
                  </Button>
                </Link>
                <Button
                  type="submit"
                  disabled={loading}
                  className="gap-2 bg-stone-900 text-white hover:bg-stone-800"
                >
                  {loading ? (
                    <Loader2 className="h-4 w-4 animate-spin" />
                  ) : (
                    <Upload className="h-4 w-4" />
                  )}
                  Create Template
                </Button>
              </div>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
