import type { ReactNode } from "react";

export function PageHeader({
  title,
  subtitle,
  action,
}: {
  title: string;
  subtitle?: string;
  action?: ReactNode;
}) {
  return (
    <header className="pixel-panel mb-6 flex flex-wrap items-center justify-between gap-4 p-5">
      <div>
        <h1 className="text-glow text-lg text-primary sm:text-2xl">{title}</h1>
        {subtitle ? (
          <p className="mt-2 text-sm text-muted-foreground">{subtitle}</p>
        ) : null}
      </div>
      {action}
    </header>
  );
}
