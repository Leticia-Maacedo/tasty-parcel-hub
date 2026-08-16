import type { ReactNode } from "react";

export function EmptyState({
  title,
  description,
  action,
}: {
  title: string;
  description?: string;
  action?: ReactNode;
}) {
  return (
    <div className="pixel-panel flex flex-col items-center gap-3 border-dashed p-10 text-center">
      <span className="font-display text-primary">[ ! ]</span>
      <p className="font-heading text-sm uppercase tracking-widest">{title}</p>
      {description ? (
        <p className="max-w-sm text-sm text-muted-foreground">{description}</p>
      ) : null}
      {action}
    </div>
  );
}
