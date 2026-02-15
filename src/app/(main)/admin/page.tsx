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
} from "lucide-react";

type AdminTemplate = {
  id: string;
  slug: string;
  title: string;
  category: string;
  status: string;
  price: number;
  viewCount: number;
  createdAt: string;
  _count: { sections: number; purchases: number };
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
    <Card className="border-stone-200/80">
      <CardContent className="flex items-center gap-4 p-5">
        <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-stone-100">
          <Icon className="h-5 w-5 text-stone-600" />
        </div>
        <div>
          <p className="text-2xl font-bold tabular-nums text-stone-900">
            {value.toLocaleString()}
          </p>
          <p className="text-xs font-medium tracking-wide text-stone-500 uppercase">
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
  const [savingSettings, setSavingSettings] = useState(false);
  const [savingTemplateId, setSavingTemplateId] = useState<string | null>(null);
  const [drafts, setDrafts] = useState<Record<string, { price: string; status: string }>>({});

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
              { price: String(t.price), status: t.status },
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
      })
      .catch(() => {});
  }, [status, session]);

  const handleScan = async () => {
    setScanning(true);
    setScanResult(null);
    try {
      const res = await fetch("/api/admin/scan", { method: "POST" });
      const data = await res.json();
      if (res.ok) {
        setScanResult(
          `Found ${data.discovered?.length ?? 0} new template(s)`
        );
        fetchData();
      } else {
        setScanResult(data.error || "Scan failed");
      }
    } catch {
      setScanResult("Scan failed");
    }
    setScanning(false);
  };

  const handleDelete = async (id: string, title: string) => {
    if (!confirm(`Delete "${title}"? This cannot be undone.`)) return;

    try {
      await fetch(`/api/templates/${id}`, { method: "DELETE" });
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
        body: JSON.stringify({ defaultSignupCredits: value }),
      });
      if (!res.ok) {
        const data = await res.json();
        alert(data.error || "Failed to save settings");
      }
    } finally {
      setSavingSettings(false);
    }
  };

  const handleSaveTemplate = async (id: string) => {
    const draft = drafts[id];
    if (!draft) return;

    setSavingTemplateId(id);
    try {
      const res = await fetch(`/api/templates/${id}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          price: Number(draft.price),
          status: draft.status,
        }),
      });
      if (!res.ok) {
        const data = await res.json();
        alert(data.error || "Failed to update template");
        return;
      }
      setTemplates((prev) =>
        prev.map((t) =>
          t.id === id
            ? { ...t, price: Number(draft.price), status: draft.status }
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
        <Loader2 className="h-8 w-8 animate-spin text-stone-400" />
      </div>
    );
  }

  if (session?.user?.role !== "ADMIN") return null;

  return (
    <div className="min-h-screen bg-gradient-to-b from-stone-50 to-white">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="mb-8 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-stone-900">
              <Shield className="h-5 w-5 text-white" />
            </div>
            <div>
              <h1 className="text-2xl font-semibold tracking-tight text-stone-900">
                Admin Dashboard
              </h1>
              <p className="text-sm text-stone-500">
                Manage templates, users, and content
              </p>
            </div>
          </div>

          <div className="flex gap-2">
            <Button
              variant="outline"
              onClick={handleScan}
              disabled={scanning}
              className="gap-2 border-stone-200"
            >
              {scanning ? (
                <Loader2 className="h-4 w-4 animate-spin" />
              ) : (
                <FolderSearch className="h-4 w-4" />
              )}
              Scan Folder
            </Button>
            <Link href="/admin/upload">
              <Button className="gap-2 bg-stone-900 text-white hover:bg-stone-800">
                <Plus className="h-4 w-4" />
                Add Template
              </Button>
            </Link>
          </div>
        </div>

        {scanResult && (
          <div className="mb-6 rounded-lg border border-green-200 bg-green-50 px-4 py-2.5 text-sm text-green-700">
            {scanResult}
          </div>
        )}

        <div className="mb-8 grid grid-cols-2 gap-4 lg:grid-cols-4">
          <StatCard label="Templates" value={stats.templates} icon={LayoutTemplate} />
          <StatCard label="Sections" value={stats.sections} icon={Layers} />
          <StatCard label="Users" value={stats.users} icon={Users} />
          <StatCard label="Purchases" value={stats.purchases} icon={ShoppingCart} />
        </div>

        <div className="mb-8 rounded-xl border border-stone-200/80 bg-white shadow-sm">
          <div className="border-b border-stone-100 px-6 py-4">
            <h2 className="flex items-center gap-2 text-sm font-semibold tracking-wide text-stone-500 uppercase">
              <Settings className="h-4 w-4" />
              Store Settings
            </h2>
          </div>
          <div className="flex flex-col gap-3 px-6 py-5 sm:flex-row sm:items-end">
            <div className="w-full sm:w-72">
              <label className="mb-1.5 block text-xs font-medium text-stone-500 uppercase">
                Default Signup Credits
              </label>
              <Input
                type="number"
                min="0"
                value={defaultSignupCredits}
                onChange={(e) => setDefaultSignupCredits(e.target.value)}
                className="border-stone-200"
              />
            </div>
            <Button
              onClick={handleSaveSettings}
              disabled={savingSettings}
              className="gap-2 bg-stone-900 text-white hover:bg-stone-800"
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

        <div className="rounded-xl border border-stone-200/80 bg-white shadow-sm overflow-hidden">
          <div className="border-b border-stone-100 px-6 py-4">
            <h2 className="text-sm font-semibold tracking-wide text-stone-500 uppercase">
              All Templates ({templates.length})
            </h2>
          </div>

          {templates.length === 0 ? (
            <div className="flex flex-col items-center justify-center py-16 text-center">
              <LayoutTemplate className="mb-3 h-10 w-10 text-stone-300" />
              <p className="text-sm text-stone-500">No templates found</p>
              <p className="mt-1 text-xs text-stone-400">
                Add templates manually or scan the templates folder
              </p>
            </div>
          ) : (
            <div className="divide-y divide-stone-100">
              {templates.map((t) => (
                <div
                  key={t.id}
                  className="flex items-center justify-between gap-4 px-6 py-3.5 transition-colors hover:bg-stone-50"
                >
                  <div className="flex items-center gap-3 min-w-0 flex-1">
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="truncate text-sm font-medium text-stone-800">
                          {t.title}
                        </span>
                        <Badge
                          variant={
                            t.status === "PUBLISHED" ? "default" : "secondary"
                          }
                          className={`text-xs ${
                            t.status === "PUBLISHED"
                              ? "bg-green-100 text-green-700"
                              : "bg-stone-100 text-stone-500"
                          }`}
                        >
                          {t.status.toLowerCase()}
                        </Badge>
                      </div>
                      <div className="mt-0.5 flex items-center gap-3 text-xs text-stone-400">
                        <span className="capitalize">{t.category}</span>
                        <span>{t._count.purchases} sales</span>
                        <span>{t.viewCount} views</span>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center gap-2 shrink-0">
                    <div className="flex items-center gap-1 rounded-md border border-stone-200 bg-white px-2 py-1">
                      <DollarSign className="h-3.5 w-3.5 text-stone-400" />
                      <input
                        type="number"
                        min="0"
                        className="w-16 border-0 p-0 text-xs outline-none"
                        value={drafts[t.id]?.price ?? String(t.price)}
                        onChange={(e) =>
                          setDrafts((prev) => ({
                            ...prev,
                            [t.id]: {
                              price: e.target.value,
                              status: prev[t.id]?.status ?? t.status,
                            },
                          }))
                        }
                      />
                    </div>
                    <select
                      className="h-8 rounded-md border border-stone-200 bg-white px-2 text-xs text-stone-700"
                      value={drafts[t.id]?.status ?? t.status}
                      onChange={(e) =>
                        setDrafts((prev) => ({
                          ...prev,
                          [t.id]: {
                            price: prev[t.id]?.price ?? String(t.price),
                            status: e.target.value,
                          },
                        }))
                      }
                    >
                      <option value="PUBLISHED">PUBLISHED</option>
                      <option value="DRAFT">DRAFT</option>
                      <option value="ARCHIVED">ARCHIVED</option>
                    </select>
                    <Button
                      size="sm"
                      variant="outline"
                      className="h-8 border-stone-200 text-xs"
                      onClick={() => handleSaveTemplate(t.id)}
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
                        className="h-8 w-8 p-0 text-stone-400 hover:text-stone-700"
                      >
                        <ExternalLink className="h-3.5 w-3.5" />
                      </Button>
                    </Link>
                    <Button
                      size="sm"
                      variant="ghost"
                      className="h-8 w-8 p-0 text-stone-400 hover:text-red-600"
                      onClick={() => handleDelete(t.id, t.title)}
                    >
                      <Trash2 className="h-3.5 w-3.5" />
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
