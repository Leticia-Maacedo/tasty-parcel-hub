import { createFileRoute, Link } from "@tanstack/react-router";
import { Shell } from "@/components/Shell";
import { PageHeader } from "@/components/PageHeader";
import { StatusBadge } from "@/components/StatusBadge";
import { DetailRow } from "@/components/DetailRow";
import { Stars } from "@/components/Stars";
import { entregas } from "@/data/mockData";

export const Route = createFileRoute("/admin/entregas")({
  head: () => ({
    meta: [
      { title: "Entregas em andamento — Admin | EntregaFood" },
      { name: "description", content: "Acompanhe entregadores, previsões de chegada e status das entregas." },
      { property: "og:title", content: "Entregas em andamento — EntregaFood" },
      { property: "og:description", content: "Rastreio das entregas ativas na plataforma." },
    ],
  }),
  component: EntregasView,
});

function EntregasView() {
  return (
    <Shell>
      <PageHeader title="ENTREGAS" subtitle="Entregas em andamento e previsões de chegada" />
      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {entregas.map((e) => (
          <article key={e.id} className="pixel-panel p-5">
            <div className="flex items-center justify-between">
              <h2 className="font-heading text-sm">Entrega #{e.pedido}</h2>
              <StatusBadge status={e.status} />
            </div>
            <div className="mt-3">
              <DetailRow label="Entregador">
                <span className="flex items-center gap-2">
                  {e.entregador} <Stars value={e.nota} />
                </span>
              </DetailRow>
              <DetailRow label="Previsão">{e.previsao}</DetailRow>
              <DetailRow label="Endereço">{e.endereco}</DetailRow>
            </div>
            <Link
              to="/admin/pedidos/$id"
              params={{ id: e.pedido }}
              className="mt-4 block rounded-sm border border-primary px-3 py-2 text-center font-heading text-[0.65rem] uppercase tracking-widest text-primary hover:bg-primary/15"
            >
              Ver pedido
            </Link>
          </article>
        ))}
      </div>
    </Shell>
  );
}
