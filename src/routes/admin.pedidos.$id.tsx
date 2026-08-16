import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { Shell } from "@/components/Shell";
import { PageHeader } from "@/components/PageHeader";
import { DetailRow } from "@/components/DetailRow";
import { StatusBadge } from "@/components/StatusBadge";
import { EmptyState } from "@/components/EmptyState";
import { brl, pedidos } from "@/data/mockData";

export const Route = createFileRoute("/admin/pedidos/$id")({
  loader: ({ params }) => {
    const pedido = pedidos.find((p) => p.id === params.id);
    if (!pedido) throw notFound();
    return { pedido };
  },
  head: ({ loaderData }) => {
    if (!loaderData) {
      return {
        meta: [{ title: "Pedido indisponível — EntregaFood" }, { name: "robots", content: "noindex" }],
      };
    }
    const { pedido } = loaderData;
    return {
      meta: [
        { title: `Pedido #${pedido.id} — EntregaFood` },
        { name: "description", content: `Detalhes do pedido #${pedido.id} em ${pedido.restaurante}.` },
        { property: "og:title", content: `Pedido #${pedido.id} — EntregaFood` },
        { property: "og:description", content: `Itens, pagamento e entrega do pedido #${pedido.id}.` },
      ],
    };
  },
  notFoundComponent: PedidoNaoEncontrado,
  component: PedidoDetalheView,
});

function PedidoNaoEncontrado() {
  return (
    <Shell>
      <EmptyState
        title="Pedido não encontrado"
        description="Verifique o número do pedido na listagem."
        action={
          <Link to="/admin/pedidos" className="font-heading text-xs uppercase text-primary underline">
            Ver pedidos
          </Link>
        }
      />
    </Shell>
  );
}

function PedidoDetalheView() {
  const { pedido } = Route.useLoaderData();
  const subtotal = pedido.itens.reduce((acc, i) => acc + i.preco * i.qtd, 0);

  return (
    <Shell>
      <PageHeader
        title={`PEDIDO #${pedido.id}`}
        subtitle={`${pedido.restaurante} • ${pedido.data}`}
        action={<StatusBadge status={pedido.status} />}
      />
      <div className="grid gap-6 lg:grid-cols-2">
        <section className="pixel-panel p-5">
          <h2 className="mb-3 text-sm text-primary">DADOS</h2>
          <DetailRow label="Cliente">{pedido.cliente}</DetailRow>
          <DetailRow label="Restaurante">{pedido.restaurante}</DetailRow>
          <DetailRow label="Endereço">{pedido.endereco}</DetailRow>
          <DetailRow label="Pagamento">{pedido.pagamento}</DetailRow>
          <DetailRow label="Data">{pedido.data}</DetailRow>
        </section>

        <section className="pixel-panel p-5">
          <h2 className="mb-3 text-sm text-primary">ITENS DO PEDIDO</h2>
          <ul className="space-y-2 text-sm">
            {pedido.itens.map((i) => (
              <li key={i.nome} className="flex justify-between border-b border-border/60 pb-2">
                <span>
                  {i.qtd}x {i.nome}
                </span>
                <span className="text-muted-foreground">{brl(i.preco * i.qtd)}</span>
              </li>
            ))}
          </ul>
          <div className="mt-4 space-y-2 text-sm">
            <div className="flex justify-between text-muted-foreground">
              <span>Taxa de entrega</span>
              <span>{brl(pedido.taxa)}</span>
            </div>
            <div className="flex justify-between text-muted-foreground">
              <span>Subtotal</span>
              <span>{brl(subtotal)}</span>
            </div>
            <div className="flex justify-between border-t border-border pt-3 font-heading">
              <span className="uppercase">Total</span>
              <span className="text-primary">{brl(subtotal + pedido.taxa)}</span>
            </div>
          </div>
        </section>
      </div>
    </Shell>
  );
}
