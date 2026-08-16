import { createFileRoute } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { Shell } from "@/components/Shell";
import { PageHeader } from "@/components/PageHeader";
import { DetailRow } from "@/components/DetailRow";
import { brl, cardapio } from "@/data/mockData";

export const Route = createFileRoute("/pagamento")({
  head: () => ({
    meta: [
      { title: "Meu pedido e pagamento — EntregaFood" },
      { name: "description", content: "Revise os itens do carrinho, o endereço e finalize o pagamento." },
      { property: "og:title", content: "Meu pedido e pagamento — EntregaFood" },
      { property: "og:description", content: "Finalize seu pedido com Pix ou cartão." },
    ],
  }),
  component: PagamentoView,
});

const TAXA = 5.99;

function PagamentoView() {
  const itensIniciais = cardapio.slice(0, 3);
  const [qtds, setQtds] = useState<Record<string, number>>(
    Object.fromEntries(itensIniciais.map((i) => [i.id, 1])),
  );

  const subtotal = useMemo(
    () => itensIniciais.reduce((acc, i) => acc + i.preco * (qtds[i.id] ?? 0), 0),
    [itensIniciais, qtds],
  );

  const alterar = (id: string, delta: number) =>
    setQtds((q) => ({ ...q, [id]: Math.max(0, (q[id] ?? 0) + delta) }));

  return (
    <Shell>
      <PageHeader title="MEU PEDIDO" subtitle="Revise os itens antes de finalizar" />
      <div className="grid gap-6 lg:grid-cols-[1.4fr_1fr]">
        <div className="pixel-panel divide-y divide-border/60 p-5">
          {itensIniciais.map((item) => (
            <div key={item.id} className="flex items-center justify-between gap-4 py-4 first:pt-0">
              <div>
                <p className="font-heading text-sm">{item.nome}</p>
                <p className="mt-1 text-sm text-primary">{brl(item.preco)}</p>
              </div>
              <div className="flex items-center gap-3">
                <button
                  onClick={() => alterar(item.id, -1)}
                  aria-label={`Remover ${item.nome}`}
                  className="size-8 rounded-sm border border-border text-muted-foreground hover:border-primary hover:text-primary"
                >
                  −
                </button>
                <span className="w-6 text-center font-heading text-sm">{qtds[item.id] ?? 0}</span>
                <button
                  onClick={() => alterar(item.id, 1)}
                  aria-label={`Adicionar ${item.nome}`}
                  className="size-8 rounded-sm border border-primary text-primary hover:bg-primary/15"
                >
                  +
                </button>
              </div>
            </div>
          ))}
        </div>

        <aside className="pixel-panel h-fit p-5">
          <DetailRow label="Entrega">Rua das Flores, 123 — Vila Madalena, SP</DetailRow>
          <DetailRow label="Pagamento">Cartão •••• 1234</DetailRow>
          <DetailRow label="Taxa de entrega">{brl(TAXA)}</DetailRow>
          <DetailRow label="Subtotal">{brl(subtotal)}</DetailRow>
          <div className="mt-4 flex items-center justify-between border-t border-border pt-4">
            <span className="font-heading text-sm uppercase">Total</span>
            <span className="font-heading text-lg text-primary">{brl(subtotal + TAXA)}</span>
          </div>
          <button className="mt-6 w-full rounded-sm bg-primary px-4 py-3 font-heading text-xs uppercase tracking-widest text-primary-foreground transition-opacity hover:opacity-90">
            Finalizar pedido
          </button>
        </aside>
      </div>
    </Shell>
  );
}
