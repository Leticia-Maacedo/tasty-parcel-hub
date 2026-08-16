import { createFileRoute, Link } from "@tanstack/react-router";
import { Search } from "lucide-react";
import { Shell } from "@/components/Shell";
import { PageHeader } from "@/components/PageHeader";
import { StatCard } from "@/components/StatCard";
import { Stars } from "@/components/Stars";
import { categorias, restaurantes, fluxoSistema } from "@/data/mockData";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "EntregaFood — Peça comida em minutos" },
      {
        name: "description",
        content:
          "Explore restaurantes, mercados e farmácias perto de você e acompanhe seu pedido em tempo real.",
      },
      { property: "og:title", content: "EntregaFood — Peça comida em minutos" },
      {
        property: "og:description",
        content: "Explore restaurantes, mercados e farmácias perto de você e acompanhe seu pedido em tempo real.",
      },
    ],
  }),
  component: InicioCategoriasView,
});

function InicioCategoriasView() {
  return (
    <Shell>
      <PageHeader
        title="Olá, Leticia!"
        subtitle="Pronta pra fazer seu dia mais gostoso? Escolha uma categoria e peça agora."
        action={
          <Link
            to="/login"
            className="rounded-sm bg-primary px-4 py-2 font-heading text-xs uppercase tracking-widest text-primary-foreground transition-opacity hover:opacity-90"
          >
            Entrar
          </Link>
        }
      />

      <div className="pixel-panel mb-6 flex items-center gap-3 p-3">
        <Search className="size-4 text-primary" />
        <input
          className="w-full bg-transparent text-sm outline-none placeholder:text-muted-foreground"
          placeholder="Buscar restaurantes, pratos, mercados..."
          aria-label="Buscar"
        />
      </div>

      <div className="mb-8 flex flex-wrap gap-2">
        {categorias.map((c, i) => (
          <button
            key={c.id}
            className={`rounded-sm border px-4 py-2 font-heading text-xs uppercase tracking-wider transition-colors ${
              i === 0
                ? "border-primary bg-primary/15 text-primary"
                : "border-border text-muted-foreground hover:border-primary/60 hover:text-primary"
            }`}
          >
            {c.nome}
          </button>
        ))}
      </div>

      <h2 className="mb-4 text-sm text-primary">PERTO DE VOCÊ</h2>
      <div className="mb-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {restaurantes.map((r) => (
          <Link
            key={r.id}
            to="/restaurante/$id"
            params={{ id: r.id }}
            className="pixel-panel p-4 transition-colors hover:border-primary"
          >
            <div className="flex items-center justify-between">
              <h3 className="font-heading text-sm font-bold text-foreground">{r.nome}</h3>
              <span className="label-caps text-muted-foreground">
                {r.aberto ? "Aberto" : "Fechado"}
              </span>
            </div>
            <p className="mt-1 text-xs text-muted-foreground">{r.categoria}</p>
            <div className="mt-3 flex items-center justify-between">
              <Stars value={r.nota} />
              <span className="text-xs text-muted-foreground">
                {r.tempo} • Frete {r.frete}
              </span>
            </div>
          </Link>
        ))}
      </div>

      <h2 className="mb-4 text-sm text-primary">FLUXO DO SISTEMA</h2>
      <div className="mb-10 grid gap-3 sm:grid-cols-3 lg:grid-cols-5">
        {fluxoSistema.map((etapa, i) => (
          <StatCard key={etapa} label={`Etapa ${i + 1}`} value={etapa} />
        ))}
      </div>
    </Shell>
  );
}
