export function Toggle({
  checked,
  onChange,
  label,
}: {
  checked: boolean;
  onChange: (value: boolean) => void;
  label: string;
}) {
  return (
    <button
      type="button"
      role="switch"
      aria-checked={checked}
      aria-label={label}
      onClick={() => onChange(!checked)}
      className={`inline-flex h-6 w-12 shrink-0 items-center rounded-sm border p-0.5 transition-colors ${
        checked ? "border-primary bg-primary/25" : "border-border bg-muted"
      }`}
    >
      <span
        className={`size-4 rounded-[2px] transition-transform ${
          checked ? "translate-x-6 bg-primary" : "translate-x-0 bg-muted-foreground"
        }`}
      />
    </button>
  );
}
