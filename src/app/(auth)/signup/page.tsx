"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Loader2, Mail, Lock, User, Gift, Sparkles } from "lucide-react";
import { z } from "zod/v4";

const signupSchema = z
  .object({
    name: z.string().min(2, "Name must be at least 2 characters"),
    email: z.string().email("Please enter a valid email"),
    password: z.string().min(6, "Password must be at least 6 characters"),
    confirmPassword: z.string(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords don't match",
    path: ["confirmPassword"],
  });

type FormErrors = Partial<Record<"name" | "email" | "password" | "confirmPassword" | "root", string>>;

export default function SignUpPage() {
  const router = useRouter();
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [loading, setLoading] = useState(false);

  const updateField = (field: keyof typeof form, value: string) => {
    setForm((prev) => ({ ...prev, [field]: value }));
    setErrors((prev) => ({ ...prev, [field]: undefined }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrors({});

    const parsed = signupSchema.safeParse(form);
    if (!parsed.success) {
      const fieldErrors: FormErrors = {};
      for (const issue of parsed.error.issues) {
        const field = issue.path[0] as keyof FormErrors;
        if (!fieldErrors[field]) {
          fieldErrors[field] = issue.message;
        }
      }
      setErrors(fieldErrors);
      return;
    }

    setLoading(true);

    try {
      const res = await fetch("/api/auth/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          password: form.password,
        }),
      });

      const data = await res.json();

      if (!res.ok) {
        setErrors({ root: data.error || "Registration failed" });
        setLoading(false);
        return;
      }

      router.push("/signin?registered=true");
    } catch {
      setErrors({ root: "Something went wrong. Please try again." });
      setLoading(false);
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-stone-50 via-white to-amber-50/30 px-4 py-8">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/3 -right-40 h-[500px] w-[500px] rounded-full bg-amber-100/30 blur-3xl" />
        <div className="absolute bottom-1/3 -left-40 h-[500px] w-[500px] rounded-full bg-stone-200/25 blur-3xl" />
      </div>

      <Card className="relative w-full max-w-[420px] border-stone-200/60 bg-white/80 shadow-xl shadow-stone-200/20 backdrop-blur-sm">
        <CardHeader className="space-y-3 pb-2 text-center">
          <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-stone-800 to-stone-950 shadow-lg shadow-stone-400/20">
            <Sparkles className="h-6 w-6 text-amber-300" />
          </div>
          <div>
            <h1 className="text-2xl font-semibold tracking-tight text-stone-900">
              Create your account
            </h1>
            <p className="mt-1 text-sm text-stone-500">
              Join HomeDream and start exploring templates
            </p>
          </div>
        </CardHeader>

        <CardContent className="space-y-5 pt-2">
          <div className="flex items-center gap-2 rounded-lg border border-amber-200 bg-amber-50/60 px-3 py-2.5">
            <Gift className="h-4 w-4 shrink-0 text-amber-600" />
            <p className="text-sm text-amber-800">
              <span className="font-semibold">Welcome bonus credits</span> on signup
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-3.5">
            <div className="space-y-1.5">
              <label
                htmlFor="name"
                className="text-xs font-medium tracking-wide text-stone-500 uppercase"
              >
                Name
              </label>
              <div className="relative">
                <User className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-stone-400" />
                <Input
                  id="name"
                  type="text"
                  placeholder="Your name"
                  value={form.name}
                  onChange={(e) => updateField("name", e.target.value)}
                  className="border-stone-200 bg-stone-50/50 pl-10 py-5 text-stone-900 placeholder:text-stone-400 focus:border-stone-400 focus:ring-stone-300"
                  required
                />
              </div>
              {errors.name && (
                <p className="text-xs text-red-600">{errors.name}</p>
              )}
            </div>

            <div className="space-y-1.5">
              <label
                htmlFor="email"
                className="text-xs font-medium tracking-wide text-stone-500 uppercase"
              >
                Email
              </label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-stone-400" />
                <Input
                  id="email"
                  type="email"
                  placeholder="you@example.com"
                  value={form.email}
                  onChange={(e) => updateField("email", e.target.value)}
                  className="border-stone-200 bg-stone-50/50 pl-10 py-5 text-stone-900 placeholder:text-stone-400 focus:border-stone-400 focus:ring-stone-300"
                  required
                />
              </div>
              {errors.email && (
                <p className="text-xs text-red-600">{errors.email}</p>
              )}
            </div>

            <div className="space-y-1.5">
              <label
                htmlFor="password"
                className="text-xs font-medium tracking-wide text-stone-500 uppercase"
              >
                Password
              </label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-stone-400" />
                <Input
                  id="password"
                  type="password"
                  autoComplete="new-password"
                  placeholder="Min. 6 characters"
                  value={form.password}
                  onChange={(e) => updateField("password", e.target.value)}
                  className="border-stone-200 bg-stone-50/50 pl-10 py-5 text-stone-900 placeholder:text-stone-400 focus:border-stone-400 focus:ring-stone-300"
                  required
                />
              </div>
              {errors.password && (
                <p className="text-xs text-red-600">{errors.password}</p>
              )}
            </div>

            <div className="space-y-1.5">
              <label
                htmlFor="confirmPassword"
                className="text-xs font-medium tracking-wide text-stone-500 uppercase"
              >
                Confirm Password
              </label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-stone-400" />
                <Input
                  id="confirmPassword"
                  type="password"
                  autoComplete="new-password"
                  placeholder="Repeat your password"
                  value={form.confirmPassword}
                  onChange={(e) => updateField("confirmPassword", e.target.value)}
                  className="border-stone-200 bg-stone-50/50 pl-10 py-5 text-stone-900 placeholder:text-stone-400 focus:border-stone-400 focus:ring-stone-300"
                  required
                />
              </div>
              {errors.confirmPassword && (
                <p className="text-xs text-red-600">{errors.confirmPassword}</p>
              )}
            </div>

            {errors.root && (
              <div className="rounded-lg border border-red-200 bg-red-50 px-3 py-2 text-sm text-red-700">
                {errors.root}
              </div>
            )}

            <Button
              type="submit"
              disabled={loading}
              className="w-full bg-stone-900 py-5 font-medium text-white shadow-lg shadow-stone-300/30 transition-all hover:bg-stone-800 hover:shadow-stone-400/30 disabled:opacity-50"
            >
              {loading ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Creating account...
                </>
              ) : (
                "Create account"
              )}
            </Button>
          </form>

          <p className="text-center text-sm text-stone-500">
            Already have an account?{" "}
            <Link
              href="/signin"
              className="font-medium text-stone-900 underline underline-offset-4 transition-colors hover:text-stone-700"
            >
              Sign in
            </Link>
          </p>
        </CardContent>
      </Card>
    </div>
  );
}
