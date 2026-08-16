import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { Shell } from "@/components/Shell";
import { PageHeader } from "@/components/PageHeader";
import { StatusBadge } from "@/components/StatusBadge";
import { EmptyState } from "@/components/EmptyState";
import { brl, pedidos, type PedidoStatus } from "@/data/mockData";

export const Route = createFileRoute("/admin/pedidos/")({
  head: () => ({
    meta: [
      { title: "Pedidos — Admin | EntregaFood" },
      { name: "description", content: "Acompanhe todos os pedidos da plataforma e filtre por status." },
      { property: "og:title", content: "Pedidos — Admin | EntregaFood" },
      { property: "og:description", content: "Todos os pedidos da plataforma." },
    ],
  }),
  component: PedidosView,
});

const filtros: (PedidoStatus | "Todos")[] = ["Todos", "Confirmado", "Preparando", "Em rota", "Entregue"];

function PedidosView() {
  const [filtro, setFiltro] = useState<(typeof filtros)[number]>("Todos");
  const lista = pedidos.filter((p) => filtro === "Todos" || p.status === filtro);

  return (
    <Shell>
      <PageHeader title="PEDIDOS" subtitle="Todos os pedidos da plataforma" />
      <div className="mb-6 flex flex-wrap gap-2">
        {filtros.map((f) => (
          <button
            key={f}
            onClick={() => setFiltro(f)}
            className={`rounded-sm border px-3 py-1.5 font-heading text-[0.65rem] uppercase tracking-widest transition-colors ${
              filtro === f
                ? "border-primary bg-primary/15 text-primary"
                : "border-border text-muted-foreground hover:border-primary/60"
            }`}
          >
            {f}
          </button>
        ))}
      </div>

      {lista.length === 0 ? (
        <EmptyState title="Nenhum pedido nesse status" description="Escolha outro filtro para ver os pedidos." />
      ) : (
        <div className="space-y-3">
          {lista.map((p) => (
            <Link
              key={p.id}
              to="/admin/pedidos/$id"
              params={{ id: p.id }}
              className="pixel-panel flex flex-wrap items-center justify-between gap-4 p-4 transition-colors hover:border-primary"
            >
              <div>
                <p className="font-heading text-sm">#{p.id} — {p.cliente}</p>
                <p className="mt-1 text-xs text-muted-foreground">
                  {p.restaurante} • {p.data}
                </p>
              </div>
              <div className="flex items-center gap-4">
                <StatusBadge status={p.status} />
                <span className="font-heading text-sm text-primary">{brl(p.total)}</span>
              </div>
            </Link>
          ))}
        </div>
      )}
    </Shell>
  );
}
