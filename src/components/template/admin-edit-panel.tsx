"use client";

import { useRef, useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { Shield, Loader2, ImageIcon, Upload } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import type { TemplateWithSections } from "@/types";

interface AdminEditPanelProps {
  template: TemplateWithSections;
}

export function AdminEditPanel({ template }: AdminEditPanelProps) {
  const router = useRouter();
  const [saving, setSaving] = useState(false);

  const [title, setTitle] = useState(template.title);
  const [category, setCategory] = useState(template.category);
  const [status, setStatus] = useState(template.status);
  const [tier, setTier] = useState(template.tier);
  const [price, setPrice] = useState(template.price);
  const [storageKey, setStorageKey] = useState(template.storageKey ?? "");
  const [thumbnailUrl, setThumbnailUrl] = useState(template.thumbnailUrl ?? "");
  const [uploading, setUploading] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleUpload = async (file: File) => {
    setUploading(true);
    try {
      const form = new FormData();
      form.append("file", file);
      form.append("slug", template.slug);

      const res = await fetch("/api/admin/upload-thumbnail", {
        method: "POST",
        body: form,
      });

      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        alert(data.error ?? `Upload failed (${res.status})`);
        return;
      }

      const { url } = await res.json();
      setThumbnailUrl(url);
    } catch (err) {
      alert(err instanceof Error ? err.message : "Upload error");
    } finally {
      setUploading(false);
    }
  };

  const handleSave = async () => {
    setSaving(true);
    try {
      const res = await fetch(`/api/templates/${encodeURIComponent(template.slug)}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ title, category, status, tier, price, storageKey: storageKey || null, thumbnailUrl: thumbnailUrl || null }),
      });

      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        alert(data.error ?? `Save failed (${res.status})`);
        return;
      }

      router.refresh();
    } catch (err) {
      alert(err instanceof Error ? err.message : "Network error");
    } finally {
      setSaving(false);
    }
  };

  const selectClass =
    "border-input dark:bg-input/30 h-9 w-full rounded-md border bg-transparent px-3 py-1 text-sm shadow-xs outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]";

  return (
    <Card className="border-amber-200 bg-amber-50/30 shadow-md dark:border-amber-900/50 dark:bg-amber-950/20">
      <CardHeader className="pb-3">
        <CardTitle className="flex items-center gap-2 text-base">
          <Shield className="size-4 text-amber-600 dark:text-amber-400" />
          Admin Edit
        </CardTitle>
      </CardHeader>
      <CardContent className="flex flex-col gap-3">
        <Field label="Title">
          <Input value={title} onChange={(e) => setTitle(e.target.value)} />
        </Field>

        <Field label="Category">
          <Input value={category} onChange={(e) => setCategory(e.target.value)} />
        </Field>

        <Field label="Status">
          <select
            value={status}
            onChange={(e) => setStatus(e.target.value as typeof status)}
            className={selectClass}
          >
            <option value="PUBLISHED">PUBLISHED</option>
            <option value="DRAFT">DRAFT</option>
            <option value="ARCHIVED">ARCHIVED</option>
          </select>
        </Field>

        <Field label="Tier">
          <select
            value={tier}
            onChange={(e) => setTier(e.target.value as typeof tier)}
            className={selectClass}
          >
            <option value="FREE">FREE</option>
            <option value="PRO">PRO</option>
          </select>
        </Field>

        <Field label="Price">
          <Input
            type="number"
            min={0}
            value={price}
            onChange={(e) => setPrice(Number(e.target.value) || 0)}
          />
        </Field>

        <Field label="Thumbnail">
          <input
            ref={fileInputRef}
            type="file"
            accept="image/png,image/jpeg,image/webp,image/avif"
            className="hidden"
            onChange={(e) => {
              const file = e.target.files?.[0];
              if (file) handleUpload(file);
            }}
          />
          {thumbnailUrl ? (
            <div
              className="group/thumb relative mt-1 aspect-[16/10] cursor-pointer overflow-hidden rounded-md border border-border bg-muted"
              onClick={() => fileInputRef.current?.click()}
            >
              <Image
                src={thumbnailUrl}
                alt="Thumbnail preview"
                fill
                className="object-cover object-top"
                sizes="320px"
              />
              <div className="absolute inset-0 flex items-center justify-center bg-black/0 transition-colors group-hover/thumb:bg-black/50">
                <Upload className="size-5 text-white opacity-0 transition-opacity group-hover/thumb:opacity-100" />
              </div>
              {uploading && (
                <div className="absolute inset-0 flex items-center justify-center bg-black/50">
                  <Loader2 className="size-5 animate-spin text-white" />
                </div>
              )}
            </div>
          ) : (
            <div
              className="mt-1 flex aspect-[16/10] cursor-pointer flex-col items-center justify-center gap-1.5 rounded-md border border-dashed border-border bg-muted/50 transition-colors hover:border-foreground/30 hover:bg-muted"
              onClick={() => fileInputRef.current?.click()}
            >
              {uploading ? (
                <Loader2 className="size-5 animate-spin text-muted-foreground" />
              ) : (
                <>
                  <ImageIcon className="size-6 text-muted-foreground/40" />
                  <span className="text-[10px] text-muted-foreground/60">Click to upload</span>
                </>
              )}
            </div>
          )}
          <Input
            value={thumbnailUrl}
            onChange={(e) => setThumbnailUrl(e.target.value)}
            placeholder="or paste URL"
            className="mt-1.5 text-xs"
          />
        </Field>

        <Field label="Storage Key">
          <Input
            value={storageKey}
            onChange={(e) => setStorageKey(e.target.value)}
            placeholder="e.g. templates/my-template.zip"
          />
        </Field>

        <Button onClick={handleSave} disabled={saving} className="mt-1 w-full gap-2">
          {saving && <Loader2 className="size-4 animate-spin" />}
          {saving ? "Saving..." : "Save"}
        </Button>
      </CardContent>
    </Card>
  );
}

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div className="flex flex-col gap-1">
      <span className="text-xs font-medium text-muted-foreground">{label}</span>
      {children}
    </div>
  );
}
