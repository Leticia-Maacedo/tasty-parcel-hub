import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Shell } from "@/components/Shell";
import { PageHeader } from "@/components/PageHeader";
import { Toggle } from "@/components/Toggle";
import { brl, cardapio } from "@/data/mockData";

export const Route = createFileRoute("/parceiro/cardapios")({
  head: () => ({
    meta: [
      { title: "Cardápios — Área do Parceiro | EntregaFood" },
      { name: "description", content: "Gerencie itens, preços e disponibilidade do cardápio do seu restaurante." },
      { property: "og:title", content: "Cardápios — EntregaFood" },
      { property: "og:description", content: "Itens, preços e disponibilidade do seu cardápio." },
    ],
  }),
  component: CardapiosView,
});

function CardapiosView() {
  const [ativos, setAtivos] = useState<Record<string, boolean>>(
    Object.fromEntries(cardapio.map((p) => [p.id, true])),
  );

  return (
    <Shell>
      <PageHeader title="CARDÁPIOS" subtitle="Ative, desative e ajuste os itens disponíveis" />
      <div className="pixel-panel divide-y divide-border/60 p-5">
        {cardapio.map((p) => (
          <div key={p.id} className="flex flex-wrap items-center justify-between gap-4 py-4 first:pt-0">
            <div>
              <p className="font-heading text-sm">{p.nome}</p>
              <p className="mt-1 text-xs text-muted-foreground">{p.descricao}</p>
            </div>
            <div className="flex items-center gap-6">
              <span className="font-heading text-sm text-primary">{brl(p.preco)}</span>
              <Toggle
                label={`Disponibilidade de ${p.nome}`}
                checked={ativos[p.id]}
                onChange={(v) => setAtivos((a) => ({ ...a, [p.id]: v }))}
              />
            </div>
          </div>
        ))}
      </div>
    </Shell>
  );
}
