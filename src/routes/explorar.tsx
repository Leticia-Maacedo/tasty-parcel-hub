import { createFileRoute, Link } from "@tanstack/react-router";
import { Shell } from "@/components/Shell";
import { PageHeader } from "@/components/PageHeader";
import { Stars } from "@/components/Stars";
import { restaurantes } from "@/data/mockData";

export const Route = createFileRoute("/explorar")({
  head: () => ({
    meta: [
      { title: "Explorar restaurantes — EntregaFood" },
      { name: "description", content: "Veja todos os restaurantes parceiros, notas, tempo de entrega e frete." },
      { property: "og:title", content: "Explorar restaurantes — EntregaFood" },
      { property: "og:description", content: "Todos os parceiros disponíveis na sua região." },
    ],
  }),
  component: PaginaPrincipalView,
});

function PaginaPrincipalView() {
  return (
    <Shell>
      <PageHeader title="RESTAURANTES" subtitle="Todos os parceiros disponíveis na sua região" />
      <div className="grid gap-4 md:grid-cols-2">
        {restaurantes.map((r) => (
          <Link
            key={r.id}
            to="/restaurante/$id"
            params={{ id: r.id }}
            className="pixel-panel flex items-center justify-between gap-4 p-4 transition-colors hover:border-primary"
          >
            <div>
              <h2 className="font-heading text-sm font-bold">{r.nome}</h2>
              <p className="mt-1 text-xs text-muted-foreground">{r.categoria}</p>
              <div className="mt-2">
                <Stars value={r.nota} count={r.avaliacoes} />
              </div>
            </div>
            <div className="text-right text-xs text-muted-foreground">
              <p>{r.tempo}</p>
              <p>Frete {r.frete}</p>
              <p className={r.aberto ? "text-primary" : "text-destructive"}>
                {r.aberto ? "Aberto" : "Fechado"}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </Shell>
  );
}
