"use client";

import { useEffect, useRef } from "react";

export function ViewCounter({ slug }: { slug: string }) {
  const hasFired = useRef(false);

  useEffect(() => {
    if (hasFired.current) return;
    hasFired.current = true;

    fetch(`/api/templates/${slug}/view`, { method: "POST" }).catch(() => {});
  }, [slug]);

  return null;
}
