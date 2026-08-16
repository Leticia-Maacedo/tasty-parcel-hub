import type { PedidoStatus } from "@/data/mockData";

const styles: Record<PedidoStatus, string> = {
  Entregue: "border-primary/60 text-primary",
  "Em rota": "border-warning/60 text-warning",
  Preparando: "border-warning/60 text-warning",
  Confirmado: "border-info/60 text-info",
  Cancelado: "border-destructive/60 text-destructive",
};

export function StatusBadge({ status }: { status: PedidoStatus }) {
  return (
    <span
      className={`label-caps inline-flex items-center gap-2 rounded-sm border bg-muted/40 px-2.5 py-1 ${styles[status]}`}
    >
      <span className="size-1.5 rounded-full bg-current" />
      {status}
    </span>
  );
}
