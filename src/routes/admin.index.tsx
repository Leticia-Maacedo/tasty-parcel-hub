import { createFileRoute, Link } from "@tanstack/react-router";
import { Shell } from "@/components/Shell";
import { PageHeader } from "@/components/PageHeader";
import { StatCard } from "@/components/StatCard";
import { StatusBadge } from "@/components/StatusBadge";
import { atividades, brl, integracoes, pedidos, stats } from "@/data/mockData";

export const Route = createFileRoute("/admin/")({
  head: () => ({
    meta: [
      { title: "Dashboard Admin — EntregaFood" },
      { name: "description", content: "Visão geral do sistema: usuários, pedidos, entregas e faturamento." },
      { property: "og:title", content: "Dashboard Admin — EntregaFood" },
      { property: "og:description", content: "Métricas e atividades recentes da plataforma." },
    ],
  }),
  component: DashboardView,
});

function DashboardView() {
  return (
    <Shell>
      <PageHeader
        title="DASHBOARD"
        subtitle="Visão geral do sistema"
        action={
          <span className="pixel-panel px-3 py-2 font-heading text-xs text-primary">
            10/08/2026 14:35:27
          </span>
        }
      />

      <div className="mb-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
        {stats.map((s) => (
          <StatCard key={s.label} label={s.label} value={s.value} delta={s.delta} />
        ))}
      </div>

      <div className="mb-8 pixel-panel p-5">
        <div className="mb-4 flex items-center justify-between">
          <h2 className="text-sm text-primary">PEDIDOS RECENTES</h2>
          <Link to="/admin/pedidos" className="font-heading text-xs uppercase text-primary underline">
            Ver todos
          </Link>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm">
            <thead>
              <tr className="label-caps text-muted-foreground">
                <th className="py-2 pr-4">ID</th>
                <th className="py-2 pr-4">Cliente</th>
                <th className="py-2 pr-4">Restaurante</th>
                <th className="py-2 pr-4">Status</th>
                <th className="py-2 pr-4">Total</th>
                <th className="py-2">Data</th>
              </tr>
            </thead>
            <tbody>
              {pedidos.map((p) => (
                <tr key={p.id} className="border-t border-border/60">
                  <td className="py-3 pr-4 font-heading text-xs">
                    <Link to="/admin/pedidos/$id" params={{ id: p.id }} className="text-primary">
                      #{p.id}
                    </Link>
                  </td>
                  <td className="py-3 pr-4">{p.cliente}</td>
                  <td className="py-3 pr-4 text-muted-foreground">{p.restaurante}</td>
                  <td className="py-3 pr-4"><StatusBadge status={p.status} /></td>
                  <td className="py-3 pr-4">{brl(p.total)}</td>
                  <td className="py-3 text-muted-foreground">{p.data}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        <section className="pixel-panel p-5">
          <h2 className="mb-4 text-sm text-primary">INTEGRAÇÕES</h2>
          <ul className="space-y-3">
            {integracoes.map((i) => (
              <li key={i.nome} className="flex items-center justify-between border-b border-border/60 pb-3 last:border-0 last:pb-0">
                <span className="font-heading text-sm">{i.nome}</span>
                <span className={`label-caps ${i.status === "Conectado" ? "text-primary" : "text-warning"}`}>
                  {i.status}
                </span>
              </li>
            ))}
          </ul>
        </section>

        <section className="pixel-panel p-5">
          <h2 className="mb-4 text-sm text-primary">ATIVIDADES RECENTES</h2>
          <ul className="space-y-3 text-sm">
            {atividades.map((a) => (
              <li key={a.hora} className="flex gap-3 border-b border-border/60 pb-3 last:border-0 last:pb-0">
                <span className="font-heading text-xs text-muted-foreground">{a.hora}</span>
                <span className="text-muted-foreground">
                  {a.texto} {a.ref ? <span className="text-primary">{a.ref}</span> : null}
                </span>
              </li>
            ))}
          </ul>
        </section>
      </div>
    </Shell>
  );
}
