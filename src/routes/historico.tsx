import { createFileRoute, Link } from "@tanstack/react-router";
import { Shell } from "@/components/Shell";
import { PageHeader } from "@/components/PageHeader";
import { StatusBadge } from "@/components/StatusBadge";
import { brl, pedidos } from "@/data/mockData";

export const Route = createFileRoute("/historico")({
  head: () => ({
    meta: [
      { title: "Histórico de pedidos — EntregaFood" },
      { name: "description", content: "Acompanhe seus pedidos anteriores, valores e status de entrega." },
      { property: "og:title", content: "Histórico de pedidos — EntregaFood" },
      { property: "og:description", content: "Seus pedidos anteriores em um só lugar." },
    ],
  }),
  component: HistoricoView,
});

function HistoricoView() {
  return (
    <Shell>
      <PageHeader title="MEUS PEDIDOS" subtitle="Histórico completo das suas compras" />
      <div className="space-y-3">
        {pedidos.map((p) => (
          <Link
            key={p.id}
            to="/admin/pedidos/$id"
            params={{ id: p.id }}
            className="pixel-panel flex flex-wrap items-center justify-between gap-4 p-4 transition-colors hover:border-primary"
          >
            <div>
              <p className="font-heading text-sm">#{p.id} — {p.restaurante}</p>
              <p className="mt-1 text-xs text-muted-foreground">{p.data}</p>
            </div>
            <div className="flex items-center gap-4">
              <StatusBadge status={p.status} />
              <span className="font-heading text-sm text-primary">{brl(p.total)}</span>
            </div>
          </Link>
        ))}
      </div>
    </Shell>
  );
}
