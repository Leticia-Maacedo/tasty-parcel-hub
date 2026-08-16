import { Star } from "lucide-react";

export function Stars({ value, count }: { value: number; count?: number }) {
  return (
    <span className="inline-flex items-center gap-1.5 text-xs text-muted-foreground">
      <span className="flex">
        {[1, 2, 3, 4, 5].map((i) => (
          <Star
            key={i}
            className={`size-3.5 ${
              i <= Math.round(value) ? "fill-primary text-primary" : "text-border"
            }`}
          />
        ))}
      </span>
      <span className="font-heading text-foreground">{value.toFixed(1)}</span>
      {count ? <span>({count.toLocaleString("pt-BR")})</span> : null}
    </span>
  );
}
