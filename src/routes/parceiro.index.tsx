import { createFileRoute, Link } from "@tanstack/react-router";
import { Shell } from "@/components/Shell";
import { PageHeader } from "@/components/PageHeader";
import { StatCard } from "@/components/StatCard";
import { StatusBadge } from "@/components/StatusBadge";
import { brl, pedidos } from "@/data/mockData";

export const Route = createFileRoute("/parceiro/")({
  head: () => ({
    meta: [
      { title: "Área do Parceiro — EntregaFood" },
      { name: "description", content: "Painel do restaurante parceiro: pedidos do dia, faturamento e desempenho." },
      { property: "og:title", content: "Área do Parceiro — EntregaFood" },
      { property: "og:description", content: "Gerencie pedidos e desempenho do seu restaurante." },
    ],
  }),
  component: AreaParceiroView,
});

function AreaParceiroView() {
  return (
    <Shell>
      <PageHeader
        title="ÁREA DO PARCEIRO"
        subtitle="Cantinho do Chef — visão geral da operação de hoje"
        action={
          <Link
            to="/parceiro/cardapios"
            className="rounded-sm border border-primary px-4 py-2 font-heading text-xs uppercase tracking-widest text-primary hover:bg-primary/15"
          >
            Editar cardápio
          </Link>
        }
      />
      <div className="mb-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <StatCard label="Pedidos hoje" value="48" delta="+9% vs ontem" />
        <StatCard label="Faturamento" value="R$ 2.184,30" delta="+14% vs ontem" />
        <StatCard label="Ticket médio" value="R$ 45,50" delta="+3%" />
        <StatCard label="Avaliação" value="4.8" delta="2.345 avaliações" />
      </div>

      <h2 className="mb-4 text-sm text-primary">PEDIDOS EM ANDAMENTO</h2>
      <div className="space-y-3">
        {pedidos.slice(0, 4).map((p) => (
          <div key={p.id} className="pixel-panel flex flex-wrap items-center justify-between gap-4 p-4">
            <div>
              <p className="font-heading text-sm">#{p.id} — {p.cliente}</p>
              <p className="mt-1 text-xs text-muted-foreground">{p.data}</p>
            </div>
            <div className="flex items-center gap-4">
              <StatusBadge status={p.status} />
              <span className="font-heading text-sm text-primary">{brl(p.total)}</span>
            </div>
          </div>
        ))}
      </div>
    </Shell>
  );
}
