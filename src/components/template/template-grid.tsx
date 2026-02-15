import { TemplateCard } from "./template-card";
import type { TemplateWithSections } from "@/types";

interface TemplateGridProps {
  templates: TemplateWithSections[];
}

export function TemplateGrid({ templates }: TemplateGridProps) {
  if (templates.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center py-20 text-center">
        <div className="flex size-12 items-center justify-center rounded-full bg-muted">
          <span className="text-lg">0</span>
        </div>
        <p className="mt-3 text-sm font-medium">No templates found</p>
        <p className="mt-1 text-xs text-muted-foreground">
          Try adjusting your filters or search query
        </p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      {templates.map((template) => (
        <TemplateCard key={template.id} template={template} />
      ))}
    </div>
  );
}
