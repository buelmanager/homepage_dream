"use client";

import { useEffect, useState, useCallback } from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import {
  LayoutTemplate,
  Users,
  ShoppingCart,
  Layers,
  Plus,
  FolderSearch,
  Loader2,
  Trash2,
  ExternalLink,
  Shield,
  Save,
  Settings,
  DollarSign,
  ChevronDown,
  Crown,
} from "lucide-react";

type AdminTemplate = {
  id: string;
  slug: string;
  title: string;
  description: string | null;
  category: string;
  status: string;
  price: number;
  tier: "FREE" | "PRO";
  storageKey: string | null;
  thumbnailUrl: string | null;
  htmlPath: string | null;
  viewCount: number;
  createdAt: string;
  _count: { sections: number; purchases: number };
};

type TemplateDraft = {
  title: string;
  description: string;
  price: string;
  tier: string;
  status: string;
  category: string;
  storageKey: string;
  thumbnailUrl: string;
  htmlPath: string;
};

type Stats = {
  templates: number;
  sections: number;
  users: number;
  purchases: number;
};

function StatCard({
  label,
  value,
  icon: Icon,
}: {
  label: string;
  value: number;
  icon: React.ElementType;
}) {
  return (
    <Card className="border-border">
      <CardContent className="flex items-center gap-4 p-5">
        <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-muted">
          <Icon className="h-5 w-5 text-muted-foreground" />
        </div>
        <div>
          <p className="text-2xl font-bold tabular-nums text-foreground">
            {value.toLocaleString()}
          </p>
          <p className="text-xs font-medium tracking-wide text-muted-foreground uppercase">
            {label}
          </p>
        </div>
      </CardContent>
    </Card>
  );
}

export default function AdminPage() {
  const { data: session, status } = useSession();
  const router = useRouter();
  const [stats, setStats] = useState<Stats>({
    templates: 0,
    sections: 0,
    users: 0,
    purchases: 0,
  });
  const [templates, setTemplates] = useState<AdminTemplate[]>([]);
  const [loading, setLoading] = useState(true);
  const [scanning, setScanning] = useState(false);
  const [scanResult, setScanResult] = useState<string | null>(null);
  const [defaultSignupCredits, setDefaultSignupCredits] = useState("100");
  const [lemonStoreId, setLemonStoreId] = useState("");
  const [lemonVariantBasic, setLemonVariantBasic] = useState("");
  const [lemonVariantStandard, setLemonVariantStandard] = useState("");
  const [lemonVariantPremium, setLemonVariantPremium] = useState("");
  const [savingSettings, setSavingSettings] = useState(false);
  const [myMode, setMyMode] = useState<"FREE" | "PRO" | null>(null);
  const [togglingMode, setTogglingMode] = useState(false);
  const [savingTemplateId, setSavingTemplateId] = useState<string | null>(null);
  const [drafts, setDrafts] = useState<Record<string, TemplateDraft>>({});
  const [expandedId, setExpandedId] = useState<string | null>(null);

  const fetchData = useCallback(async () => {
    try {
      const res = await fetch("/api/templates?limit=100&includeStats=true");
      const data = await res.json();

      if (data.templates) {
        setTemplates(data.templates);
        setDrafts(
          Object.fromEntries(
            (data.templates as AdminTemplate[]).map((t) => [
              t.id,
              {
                title: t.title,
                description: t.description ?? "",
                price: String(t.price),
                tier: t.tier ?? "FREE",
                status: t.status,
                category: t.category,
                storageKey: t.storageKey ?? "",
                thumbnailUrl: t.thumbnailUrl ?? "",
                htmlPath: t.htmlPath ?? "",
              },
            ])
          )
        );
        setStats({
          templates: data.total ?? data.templates.length,
          sections: data.totalSections ?? 0,
          users: data.totalUsers ?? 0,
          purchases: data.totalPurchases ?? 0,
        });
      }
    } catch {
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    if (status === "unauthenticated") {
      router.push("/signin");
      return;
    }
    if (status === "authenticated") {
      if (session?.user?.role !== "ADMIN") {
        router.push("/");
        return;
      }
      fetchData();
    }
  }, [status, session, router, fetchData]);

  useEffect(() => {
    if (status !== "authenticated" || session?.user?.role !== "ADMIN") return;
    fetch("/api/admin/settings")
      .then((r) => r.json())
      .then((data) => {
        if (typeof data.defaultSignupCredits === "number") {
          setDefaultSignupCredits(String(data.defaultSignupCredits));
        }
        if (data.lemon) {
          setLemonStoreId(data.lemon.storeId ?? "");
          setLemonVariantBasic(data.lemon.variantIdBasic ?? "");
          setLemonVariantStandard(data.lemon.variantIdStandard ?? "");
          setLemonVariantPremium(data.lemon.variantIdPremium ?? "");
        }
      })
      .catch(() => {});
    fetch("/api/admin/my-subscription")
      .then((r) => r.json())
      .then((data) => {
        if (data.mode === "PRO" || data.mode === "FREE") setMyMode(data.mode);
      })
      .catch(() => {});
  }, [status, session]);

  const handleToggleMode = async (mode: "FREE" | "PRO") => {
    setTogglingMode(true);
    try {
      const res = await fetch("/api/admin/my-subscription", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ mode }),
      });
      const data = await res.json();
      if (res.ok) setMyMode(data.mode);
    } finally {
      setTogglingMode(false);
    }
  };

  const handleScan = async () => {
    setScanning(true);
    setScanResult(null);
    try {
      const res = await fetch("/api/admin/scan", { method: "POST" });
      const data = await res.json();
      if (res.ok) {
        const newCount = data.discovered?.length ?? 0;
        const deployedCount = data.deployed?.length ?? 0;
        const parts = [`Found ${newCount} new template(s)`];
        if (deployedCount > 0) {
          parts.push(`deployed ${deployedCount} from clone folder`);
        }
        setScanResult(parts.join(", "));
        fetchData();
      } else {
        setScanResult(data.error || "Scan failed");
      }
    } catch {
      setScanResult("Scan failed");
    }
    setScanning(false);
  };

  const handleDelete = async (slug: string, id: string, title: string) => {
    if (!confirm(`Delete "${title}"? This cannot be undone.`)) return;

    try {
      await fetch(`/api/templates/${encodeURIComponent(slug)}`, { method: "DELETE" });
      setTemplates((prev) => prev.filter((t) => t.id !== id));
      setStats((prev) => ({ ...prev, templates: prev.templates - 1 }));
    } catch {
    }
  };

  const handleSaveSettings = async () => {
    setSavingSettings(true);
    try {
      const value = Number(defaultSignupCredits);
      const res = await fetch("/api/admin/settings", {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          defaultSignupCredits: value,
          lemon: {
            storeId: lemonStoreId,
            variantIdBasic: lemonVariantBasic,
            variantIdStandard: lemonVariantStandard,
            variantIdPremium: lemonVariantPremium,
          },
        }),
      });
      if (!res.ok) {
        const data = await res.json();
        alert(data.error || "Failed to save settings");
      }
    } finally {
      setSavingSettings(false);
    }
  };

  const handleSaveTemplate = async (slug: string, id: string) => {
    const draft = drafts[id];
    if (!draft) return;

    setSavingTemplateId(id);
    try {
      const res = await fetch(`/api/templates/${encodeURIComponent(slug)}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          title: draft.title,
          description: draft.description || null,
          price: Number(draft.price),
          tier: draft.tier,
          status: draft.status,
          category: draft.category,
          storageKey: draft.storageKey || null,
          thumbnailUrl: draft.thumbnailUrl || null,
        }),
      });
      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        alert(data.error || "Failed to update template");
        return;
      }
      setTemplates((prev) =>
        prev.map((t) =>
          t.id === id
            ? {
                ...t,
                title: draft.title,
                description: draft.description || null,
                price: Number(draft.price),
                tier: draft.tier as "FREE" | "PRO",
                status: draft.status,
                category: draft.category,
                storageKey: draft.storageKey || null,
                thumbnailUrl: draft.thumbnailUrl || null,
              }
            : t
        )
      );
    } finally {
      setSavingTemplateId(null);
    }
  };

  if (status === "loading" || loading) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <Loader2 className="h-8 w-8 animate-spin text-muted-foreground" />
      </div>
    );
  }

  if (session?.user?.role !== "ADMIN") return null;

  return (
    <div className="min-h-screen bg-gradient-to-b from-muted/50 to-background">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="mb-8 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary">
              <Shield className="h-5 w-5 text-primary-foreground" />
            </div>
            <div>
              <h1 className="text-2xl font-semibold tracking-tight text-foreground">
                Admin Dashboard
              </h1>
              <p className="text-sm text-muted-foreground">
                Manage templates, users, and content
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            {myMode !== null && (
              <div className="flex items-center gap-1.5 rounded-lg border border-border bg-muted/50 p-1">
                <button
                  type="button"
                  disabled={togglingMode}
                  onClick={() => handleToggleMode("FREE")}
                  className={`flex items-center gap-1.5 rounded-md px-3 py-1.5 text-xs font-medium transition-colors ${
                    myMode === "FREE"
                      ? "bg-background text-foreground shadow-sm"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {togglingMode && myMode !== "FREE" && (
                    <Loader2 className="h-3 w-3 animate-spin" />
                  )}
                  FREE
                </button>
                <button
                  type="button"
                  disabled={togglingMode}
                  onClick={() => handleToggleMode("PRO")}
                  className={`flex items-center gap-1.5 rounded-md px-3 py-1.5 text-xs font-medium transition-colors ${
                    myMode === "PRO"
                      ? "bg-violet-100 text-violet-700 shadow-sm dark:bg-violet-900 dark:text-violet-300"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {togglingMode && myMode !== "PRO" && (
                    <Loader2 className="h-3 w-3 animate-spin" />
                  )}
                  <Crown className="h-3 w-3" />
                  PRO
                </button>
              </div>
            )}

            <Button
              variant="outline"
              onClick={handleScan}
              disabled={scanning}
              className="gap-2"
            >
              {scanning ? (
                <Loader2 className="h-4 w-4 animate-spin" />
              ) : (
                <FolderSearch className="h-4 w-4" />
              )}
              Scan Folder
            </Button>
            <Link href="/admin/upload">
              <Button className="gap-2">
                <Plus className="h-4 w-4" />
                Add Template
              </Button>
            </Link>
          </div>
        </div>

        {scanResult && (
          <div className="mb-6 rounded-lg border border-green-200 bg-green-50 px-4 py-2.5 text-sm text-green-700 dark:border-green-800 dark:bg-green-950 dark:text-green-300">
            {scanResult}
          </div>
        )}

        <div className="mb-8 grid grid-cols-2 gap-4 lg:grid-cols-4">
          <StatCard label="Templates" value={stats.templates} icon={LayoutTemplate} />
          <StatCard label="Sections" value={stats.sections} icon={Layers} />
          <StatCard label="Users" value={stats.users} icon={Users} />
          <StatCard label="Purchases" value={stats.purchases} icon={ShoppingCart} />
        </div>

        <div className="mb-8 rounded-xl border border-border bg-card shadow-sm">
          <div className="border-b border-border px-6 py-4">
            <h2 className="flex items-center gap-2 text-sm font-semibold tracking-wide text-muted-foreground uppercase">
              <Settings className="h-4 w-4" />
              Store Settings
            </h2>
          </div>
          <div className="flex flex-col gap-4 px-6 py-5">
            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
              <div>
                <label className="mb-1.5 block text-xs font-medium text-muted-foreground uppercase">
                  Default Signup Credits
                </label>
                <Input
                  type="number"
                  min="0"
                  value={defaultSignupCredits}
                  onChange={(e) => setDefaultSignupCredits(e.target.value)}
                />
              </div>
              <div>
                <label className="mb-1.5 block text-xs font-medium text-muted-foreground uppercase">
                  Lemon Store ID
                </label>
                <Input
                  value={lemonStoreId}
                  onChange={(e) => setLemonStoreId(e.target.value)}
                  placeholder="e.g. 12345"
                />
              </div>
              <div>
                <label className="mb-1.5 block text-xs font-medium text-muted-foreground uppercase">
                  Variant ID (Basic)
                </label>
                <Input
                  value={lemonVariantBasic}
                  onChange={(e) => setLemonVariantBasic(e.target.value)}
                  placeholder="e.g. 67890"
                />
              </div>
              <div>
                <label className="mb-1.5 block text-xs font-medium text-muted-foreground uppercase">
                  Variant ID (Standard)
                </label>
                <Input
                  value={lemonVariantStandard}
                  onChange={(e) => setLemonVariantStandard(e.target.value)}
                  placeholder="e.g. 67891"
                />
              </div>
              <div>
                <label className="mb-1.5 block text-xs font-medium text-muted-foreground uppercase">
                  Variant ID (Premium)
                </label>
                <Input
                  value={lemonVariantPremium}
                  onChange={(e) => setLemonVariantPremium(e.target.value)}
                  placeholder="e.g. 67892"
                />
              </div>
            </div>
            <div>
              <Button
                onClick={handleSaveSettings}
                disabled={savingSettings}
                className="gap-2"
              >
                {savingSettings ? (
                  <Loader2 className="h-4 w-4 animate-spin" />
                ) : (
                  <Save className="h-4 w-4" />
                )}
                Save Settings
              </Button>
            </div>
          </div>
        </div>

        <div className="rounded-xl border border-border bg-card shadow-sm overflow-hidden">
          <div className="border-b border-border px-6 py-4">
            <h2 className="text-sm font-semibold tracking-wide text-muted-foreground uppercase">
              All Templates ({templates.length})
            </h2>
          </div>

          {templates.length === 0 ? (
            <div className="flex flex-col items-center justify-center py-16 text-center">
              <LayoutTemplate className="mb-3 h-10 w-10 text-muted-foreground/40" />
              <p className="text-sm text-muted-foreground">No templates found</p>
              <p className="mt-1 text-xs text-muted-foreground/60">
                Add templates manually or scan the templates folder
              </p>
            </div>
          ) : (
            <div className="divide-y divide-border">
              {templates.map((t) => {
                const d = drafts[t.id];
                const isExpanded = expandedId === t.id;
                const updateDraft = (patch: Partial<TemplateDraft>) =>
                  setDrafts((prev) => ({
                    ...prev,
                    [t.id]: { ...prev[t.id], ...patch },
                  }));

                return (
                  <div key={t.id}>
                    <div className="flex items-center justify-between gap-4 px-6 py-3.5 transition-colors hover:bg-muted/50">
                      <button
                        type="button"
                        className="flex items-center gap-3 min-w-0 flex-1 text-left"
                        onClick={() => setExpandedId(isExpanded ? null : t.id)}
                      >
                        <ChevronDown
                          className={`h-4 w-4 shrink-0 text-muted-foreground transition-transform ${isExpanded ? "rotate-180" : ""}`}
                        />
                        <div>
                          <div className="flex items-center gap-2">
                            <span className="truncate text-sm font-medium text-foreground">
                              {d?.title ?? t.title}
                            </span>
                            <Badge
                              variant={
                                (d?.tier ?? t.tier) === "PRO" ? "default" : "secondary"
                              }
                              className={`text-xs ${
                                (d?.tier ?? t.tier) === "PRO"
                                  ? "bg-violet-100 text-violet-700 dark:bg-violet-900 dark:text-violet-300"
                                  : "bg-muted text-muted-foreground"
                              }`}
                            >
                              {(d?.tier ?? t.tier ?? "FREE")}
                            </Badge>
                            <Badge
                              variant={
                                t.status === "PUBLISHED" ? "default" : "secondary"
                              }
                              className={`text-xs ${
                                t.status === "PUBLISHED"
                                  ? "bg-green-100 text-green-700 dark:bg-green-900 dark:text-green-300"
                                  : "bg-muted text-muted-foreground"
                              }`}
                            >
                              {(d?.status ?? t.status).toLowerCase()}
                            </Badge>
                          </div>
                          <div className="mt-0.5 flex items-center gap-3 text-xs text-muted-foreground">
                            <span className="capitalize">{d?.category ?? t.category}</span>
                            <span>{t._count.purchases} sales</span>
                            <span>{t.viewCount} views</span>
                          </div>
                        </div>
                      </button>

                      <div className="flex items-center gap-2 shrink-0">
                        <div className="flex items-center gap-1 rounded-md border border-border bg-background px-2 py-1">
                          <DollarSign className="h-3.5 w-3.5 text-muted-foreground" />
                          <input
                            type="number"
                            min="0"
                            className="w-16 border-0 bg-transparent p-0 text-xs text-foreground outline-none"
                            value={d?.price ?? String(t.price)}
                            onChange={(e) => updateDraft({ price: e.target.value })}
                          />
                        </div>
                        <select
                          className="h-8 rounded-md border border-border bg-background px-2 text-xs text-foreground"
                          value={d?.status ?? t.status}
                          onChange={(e) => updateDraft({ status: e.target.value })}
                        >
                          <option value="PUBLISHED">PUBLISHED</option>
                          <option value="DRAFT">DRAFT</option>
                          <option value="ARCHIVED">ARCHIVED</option>
                        </select>
                        <select
                          className="h-8 rounded-md border border-border bg-background px-2 text-xs text-foreground"
                          value={d?.tier ?? t.tier ?? "FREE"}
                          onChange={(e) => updateDraft({ tier: e.target.value })}
                        >
                          <option value="FREE">FREE</option>
                          <option value="PRO">PRO</option>
                        </select>
                        <Button
                          size="sm"
                          variant="outline"
                          className="h-8 text-xs"
                          onClick={() => handleSaveTemplate(t.slug, t.id)}
                          disabled={savingTemplateId === t.id}
                        >
                          {savingTemplateId === t.id ? (
                            <Loader2 className="h-3.5 w-3.5 animate-spin" />
                          ) : (
                            "Save"
                          )}
                        </Button>
                        <Link href={`/templates/${t.slug}`}>
                          <Button
                            size="sm"
                            variant="ghost"
                            className="h-8 w-8 p-0 text-muted-foreground hover:text-foreground"
                          >
                            <ExternalLink className="h-3.5 w-3.5" />
                          </Button>
                        </Link>
                        <Button
                          size="sm"
                          variant="ghost"
                          className="h-8 w-8 p-0 text-muted-foreground hover:text-red-600"
                          onClick={() => handleDelete(t.slug, t.id, t.title)}
                        >
                          <Trash2 className="h-3.5 w-3.5" />
                        </Button>
                      </div>
                    </div>

                    {isExpanded && (
                      <div className="border-t border-border bg-muted/30 px-6 py-4">
                        <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
                          <div>
                            <label className="mb-1 block text-xs font-medium text-muted-foreground uppercase">
                              Title
                            </label>
                            <Input
                              value={d?.title ?? t.title}
                              onChange={(e) => updateDraft({ title: e.target.value })}
                              className="text-sm"
                            />
                          </div>
                          <div>
                            <label className="mb-1 block text-xs font-medium text-muted-foreground uppercase">
                              Category
                            </label>
                            <Input
                              value={d?.category ?? t.category}
                              onChange={(e) => updateDraft({ category: e.target.value })}
                              className="text-sm"
                            />
                          </div>
                          <div>
                            <label className="mb-1 block text-xs font-medium text-muted-foreground uppercase">
                              Storage Key
                            </label>
                            <Input
                              value={d?.storageKey ?? t.storageKey ?? ""}
                              onChange={(e) => updateDraft({ storageKey: e.target.value })}
                              className="text-sm"
                              placeholder="e.g. templates/my-template"
                            />
                          </div>
                        </div>
                        <div className="mt-3">
                          <label className="mb-1 block text-xs font-medium text-muted-foreground uppercase">
                            Description
                          </label>
                          <textarea
                            value={d?.description ?? t.description ?? ""}
                            onChange={(e) => updateDraft({ description: e.target.value })}
                            className="w-full rounded-md border border-border bg-background px-3 py-2 text-sm text-foreground outline-none focus:ring-1 focus:ring-ring resize-none"
                            rows={2}
                            placeholder="Template description..."
                          />
                        </div>
                        <div className="mt-3 grid grid-cols-1 gap-3 sm:grid-cols-2">
                          <div>
                            <label className="mb-1 block text-xs font-medium text-muted-foreground uppercase">
                              Thumbnail URL
                            </label>
                            <Input
                              value={d?.thumbnailUrl ?? t.thumbnailUrl ?? ""}
                              onChange={(e) => updateDraft({ thumbnailUrl: e.target.value })}
                              className="text-sm"
                              placeholder="/templates/my-template/images/fullpage.png"
                            />
                          </div>
                          <div>
                            <label className="mb-1 block text-xs font-medium text-muted-foreground uppercase">
                              HTML Path
                            </label>
                            <Input
                              value={d?.htmlPath ?? t.htmlPath ?? ""}
                              onChange={(e) => updateDraft({ htmlPath: e.target.value })}
                              className="text-sm"
                              placeholder="/templates/my-template/index.html"
                              disabled
                            />
                          </div>
                        </div>
                        <div className="mt-3 flex items-center gap-2 text-xs text-muted-foreground">
                          <span>Slug: <code className="rounded bg-muted px-1.5 py-0.5 font-mono">{t.slug}</code></span>
                          <span>ID: <code className="rounded bg-muted px-1.5 py-0.5 font-mono">{t.id}</code></span>
                        </div>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
