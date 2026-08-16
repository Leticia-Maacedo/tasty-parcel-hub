import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { Shell } from "@/components/Shell";
import { PageHeader } from "@/components/PageHeader";
import { Stars } from "@/components/Stars";
import { EmptyState } from "@/components/EmptyState";
import { restaurantes } from "@/data/mockData";

export const Route = createFileRoute("/admin/restaurantes")({
  head: () => ({
    meta: [
      { title: "Restaurantes — Admin | EntregaFood" },
      { name: "description", content: "Gerencie os restaurantes parceiros cadastrados na plataforma." },
      { property: "og:title", content: "Restaurantes — Admin | EntregaFood" },
      { property: "og:description", content: "Lista de parceiros cadastrados." },
    ],
  }),
  component: RestaurantesView,
});

function RestaurantesView() {
  const [busca, setBusca] = useState("");
  const lista = restaurantes.filter((r) =>
    `${r.nome} ${r.categoria}`.toLowerCase().includes(busca.toLowerCase()),
  );

  return (
    <Shell>
      <PageHeader title="RESTAURANTES" subtitle={`${restaurantes.length} parceiros cadastrados`} />
      <input
        value={busca}
        onChange={(e) => setBusca(e.target.value)}
        placeholder="Buscar restaurantes..."
        aria-label="Buscar restaurantes"
        className="mb-6 w-full rounded-sm border border-border bg-input px-3 py-2.5 text-sm outline-none focus:border-primary"
      />

      {lista.length === 0 ? (
        <EmptyState title="Nenhum restaurante encontrado" description="Ajuste a busca e tente novamente." />
      ) : (
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {lista.map((r) => (
            <Link
              key={r.id}
              to="/restaurante/$id"
              params={{ id: r.id }}
              className="pixel-panel p-4 transition-colors hover:border-primary"
            >
              <div className="flex items-center justify-between">
                <h2 className="font-heading text-sm">{r.nome}</h2>
                <span className={`label-caps ${r.aberto ? "text-primary" : "text-destructive"}`}>
                  {r.aberto ? "Aberto" : "Fechado"}
                </span>
              </div>
              <p className="mt-1 text-xs text-muted-foreground">{r.categoria}</p>
              <div className="mt-3 flex items-center justify-between">
                <Stars value={r.nota} />
                <span className="text-xs text-muted-foreground">{r.tempo}</span>
              </div>
            </Link>
          ))}
        </div>
      )}
    </Shell>
  );
}
