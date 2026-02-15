"use client";

import { useRouter, useSearchParams, usePathname } from "next/navigation";
import { useCallback } from "react";
import { Checkbox } from "@/components/ui/checkbox";
import { Separator } from "@/components/ui/separator";

interface CategoryFiltersProps {
  categoryName: string;
  languages: { value: string; count: number }[];
  styles: string[];
  layouts: string[];
  activeLanguage?: string;
  activeStyle?: string;
  activeLayout?: string;
}

export function CategoryFilters({
  categoryName,
  languages,
  styles,
  layouts,
  activeLanguage,
  activeStyle,
  activeLayout,
}: CategoryFiltersProps) {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const updateFilter = useCallback(
    (key: string, value: string | undefined) => {
      const params = new URLSearchParams(searchParams.toString());
      if (value) {
        params.set(key, value);
      } else {
        params.delete(key);
      }
      const queryString = params.toString();
      router.push(queryString ? `${pathname}?${queryString}` : pathname);
    },
    [router, pathname, searchParams]
  );

  const toggleFilter = (key: string, value: string, isActive: boolean) => {
    updateFilter(key, isActive ? undefined : value);
  };

  return (
    <div className="space-y-6">
      <div>
        <h3 className="mb-3 text-[13px] font-semibold tracking-tight">
          Language
        </h3>
        <div className="space-y-2">
          {languages.map((lang) => (
            <label
              key={lang.value}
              className="flex cursor-pointer items-center gap-2.5"
            >
              <Checkbox
                checked={activeLanguage === lang.value}
                onCheckedChange={() =>
                  toggleFilter(
                    "language",
                    lang.value,
                    activeLanguage === lang.value
                  )
                }
                className="size-3.5"
              />
              <span className="flex-1 text-[13px] text-muted-foreground">
                {lang.value}
              </span>
              <span className="text-[11px] text-muted-foreground/40">
                {lang.count}
              </span>
            </label>
          ))}
        </div>
      </div>

      <Separator className="opacity-40" />

      <div>
        <h3 className="mb-3 text-[13px] font-semibold tracking-tight">
          Style
        </h3>
        <div className="space-y-2">
          {styles.map((s) => (
            <label key={s} className="flex cursor-pointer items-center gap-2.5">
              <Checkbox
                checked={activeStyle === s}
                onCheckedChange={() =>
                  toggleFilter("style", s, activeStyle === s)
                }
                className="size-3.5"
              />
              <span className="text-[13px] text-muted-foreground">{s}</span>
            </label>
          ))}
        </div>
      </div>

      <Separator className="opacity-40" />

      <div>
        <h3 className="mb-3 text-[13px] font-semibold tracking-tight">
          Layout
        </h3>
        <div className="space-y-2">
          {layouts.map((l) => (
            <label key={l} className="flex cursor-pointer items-center gap-2.5">
              <Checkbox
                checked={activeLayout === l}
                onCheckedChange={() =>
                  toggleFilter("layout", l, activeLayout === l)
                }
                className="size-3.5"
              />
              <span className="text-[13px] text-muted-foreground">{l}</span>
            </label>
          ))}
        </div>
      </div>
    </div>
  );
}
