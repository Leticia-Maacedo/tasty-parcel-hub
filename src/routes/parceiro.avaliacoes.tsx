import { createFileRoute } from "@tanstack/react-router";
import { Shell } from "@/components/Shell";
import { PageHeader } from "@/components/PageHeader";
import { Stars } from "@/components/Stars";
import { avaliacoes } from "@/data/mockData";

export const Route = createFileRoute("/parceiro/avaliacoes")({
  head: () => ({
    meta: [
      { title: "Avaliações — Área do Parceiro | EntregaFood" },
      { name: "description", content: "Leia e responda as avaliações dos clientes do seu restaurante." },
      { property: "og:title", content: "Avaliações — EntregaFood" },
      { property: "og:description", content: "Comentários e notas dos seus clientes." },
    ],
  }),
  component: AvaliacoesView,
});

function AvaliacoesView() {
  return (
    <Shell>
      <PageHeader title="AVALIAÇÕES" subtitle="O que seus clientes estão dizendo" />
      <div className="grid gap-4 md:grid-cols-2">
        {avaliacoes.map((a) => (
          <article key={a.cliente} className="pixel-panel p-5">
            <div className="flex items-center justify-between">
              <p className="font-heading text-sm">{a.cliente}</p>
              <span className="text-xs text-muted-foreground">{a.data}</span>
            </div>
            <div className="mt-2">
              <Stars value={a.nota} />
            </div>
            <p className="mt-3 text-sm text-muted-foreground">{a.comentario}</p>
            <button className="mt-4 rounded-sm border border-primary px-3 py-1.5 font-heading text-[0.65rem] uppercase tracking-widest text-primary hover:bg-primary/15">
              Responder
            </button>
          </article>
        ))}
      </div>
    </Shell>
  );
}
