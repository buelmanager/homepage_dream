"use client";

import { useState } from "react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Github, Loader2, Mail, Lock, Sparkles } from "lucide-react";

export default function SignInPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleCredentialsSignIn = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    const result = await signIn("credentials", {
      email,
      password,
      redirect: false,
    });

    if (result?.error) {
      setError("Invalid email or password");
      setLoading(false);
      return;
    }

    router.push("/");
    router.refresh();
  };

  const handleGitHubSignIn = () => {
    signIn("github", { callbackUrl: "/" });
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-stone-50 via-white to-amber-50/30 px-4">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 -left-32 h-96 w-96 rounded-full bg-amber-100/40 blur-3xl" />
        <div className="absolute bottom-1/4 -right-32 h-96 w-96 rounded-full bg-stone-200/30 blur-3xl" />
      </div>

      <Card className="relative w-full max-w-[420px] border-stone-200/60 bg-white/80 shadow-xl shadow-stone-200/20 backdrop-blur-sm">
        <CardHeader className="space-y-3 pb-2 text-center">
          <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-stone-800 to-stone-950 shadow-lg shadow-stone-400/20">
            <Sparkles className="h-6 w-6 text-amber-300" />
          </div>
          <div>
            <h1 className="text-2xl font-semibold tracking-tight text-stone-900">
              Welcome back
            </h1>
            <p className="mt-1 text-sm text-stone-500">
              Sign in to your HomeDream account
            </p>
          </div>
        </CardHeader>

        <CardContent className="space-y-5 pt-2">
          <Button
            variant="outline"
            className="w-full gap-2.5 border-stone-200 bg-stone-50/50 py-5 font-medium text-stone-700 transition-all hover:border-stone-300 hover:bg-stone-100"
            onClick={handleGitHubSignIn}
          >
            <Github className="h-4.5 w-4.5" />
            Continue with GitHub
          </Button>

          <div className="relative">
            <Separator className="bg-stone-200/80" />
            <span className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-white px-3 text-xs font-medium tracking-wider text-stone-400 uppercase">
              or
            </span>
          </div>

          <form onSubmit={handleCredentialsSignIn} className="space-y-3.5">
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
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="border-stone-200 bg-stone-50/50 pl-10 py-5 text-stone-900 placeholder:text-stone-400 focus:border-stone-400 focus:ring-stone-300"
                  required
                />
              </div>
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
                  placeholder="Enter your password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="border-stone-200 bg-stone-50/50 pl-10 py-5 text-stone-900 placeholder:text-stone-400 focus:border-stone-400 focus:ring-stone-300"
                  required
                />
              </div>
            </div>

            {error && (
              <div className="rounded-lg border border-red-200 bg-red-50 px-3 py-2 text-sm text-red-700">
                {error}
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
                  Signing in...
                </>
              ) : (
                "Sign in"
              )}
            </Button>
          </form>

          <p className="text-center text-sm text-stone-500">
            Don&apos;t have an account?{" "}
            <Link
              href="/signup"
              className="font-medium text-stone-900 underline underline-offset-4 transition-colors hover:text-stone-700"
            >
              Create one
            </Link>
          </p>
        </CardContent>
      </Card>
    </div>
  );
}
