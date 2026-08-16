import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { Shell } from "@/components/Shell";
import { PageHeader } from "@/components/PageHeader";
import { Stars } from "@/components/Stars";
import { EmptyState } from "@/components/EmptyState";
import { brl, cardapio, restaurantes } from "@/data/mockData";

export const Route = createFileRoute("/restaurante/$id")({
  loader: ({ params }) => {
    const restaurante = restaurantes.find((r) => r.id === params.id);
    if (!restaurante) throw notFound();
    return { restaurante };
  },
  head: ({ loaderData }) => {
    if (!loaderData) {
      return { meta: [{ title: "Restaurante indisponível — EntregaFood" }, { name: "robots", content: "noindex" }] };
    }
    const nome = loaderData.restaurante.nome;
    return {
      meta: [
        { title: `${nome} — EntregaFood` },
        { name: "description", content: `Cardápio, avaliações e entrega do ${nome} no EntregaFood.` },
        { property: "og:title", content: `${nome} — EntregaFood` },
        { property: "og:description", content: `Peça agora no ${nome}.` },
      ],
    };
  },
  notFoundComponent: RestauranteNaoEncontrado,
  component: RestauranteView,
});

function RestauranteNaoEncontrado() {
  return (
    <Shell>
      <EmptyState
        title="Restaurante não encontrado"
        description="Esse parceiro pode ter saído do ar. Volte e escolha outro."
        action={
          <Link to="/explorar" className="font-heading text-xs uppercase text-primary underline">
            Ver restaurantes
          </Link>
        }
      />
    </Shell>
  );
}

function RestauranteView() {
  const { restaurante } = Route.useLoaderData();
  return (
    <Shell>
      <PageHeader
        title={restaurante.nome.toUpperCase()}
        subtitle={`${restaurante.categoria} • ${restaurante.tempo} • Frete ${restaurante.frete}`}
        action={
          <span className="label-caps rounded-sm border border-primary px-3 py-1.5 text-primary">
            {restaurante.aberto ? "Aberto" : "Fechado"}
          </span>
        }
      />
      <div className="pixel-panel mb-6 p-4">
        <Stars value={restaurante.nota} count={restaurante.avaliacoes} />
      </div>

      <h2 className="mb-4 text-sm text-primary">DESTAQUES</h2>
      <div className="grid gap-3 md:grid-cols-2">
        {cardapio.map((p) => (
          <div key={p.id} className="pixel-panel flex items-center justify-between gap-4 p-4">
            <div>
              <h3 className="font-heading text-sm">{p.nome}</h3>
              <p className="mt-1 text-xs text-muted-foreground">{p.descricao}</p>
              <p className="mt-2 font-heading text-sm text-primary">{brl(p.preco)}</p>
            </div>
            <button className="size-9 shrink-0 rounded-sm border border-primary font-heading text-primary transition-colors hover:bg-primary/15">
              +
            </button>
          </div>
        ))}
      </div>

      <Link
        to="/pagamento"
        className="mt-8 block rounded-sm bg-primary px-4 py-3 text-center font-heading text-xs uppercase tracking-widest text-primary-foreground transition-opacity hover:opacity-90"
      >
        Ver carrinho
      </Link>
    </Shell>
  );
}
