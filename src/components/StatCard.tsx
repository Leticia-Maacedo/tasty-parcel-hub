export function StatCard({
  label,
  value,
  delta,
}: {
  label: string;
  value: string;
  delta?: string;
}) {
  return (
    <div className="pixel-panel p-4 transition-colors hover:border-primary/70">
      <p className="label-caps text-muted-foreground">{label}</p>
      <p className="mt-3 font-heading text-xl font-bold text-foreground">{value}</p>
      {delta ? <p className="mt-1 text-xs text-primary">{delta}</p> : null}
    </div>
  );
}
