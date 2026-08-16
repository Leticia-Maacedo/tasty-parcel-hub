import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Shell } from "@/components/Shell";
import { PageHeader } from "@/components/PageHeader";
import { Toggle } from "@/components/Toggle";
import { features } from "@/data/features";

export const Route = createFileRoute("/admin/funcionalidades")({
  head: () => ({
    meta: [
      { title: "Funcionalidades — Admin | EntregaFood" },
      { name: "description", content: "Ative ou desative funcionalidades do sistema por área: cliente, parceiro e admin." },
      { property: "og:title", content: "Funcionalidades — EntregaFood" },
      { property: "og:description", content: "Controle as features da plataforma." },
    ],
  }),
  component: FuncionalidadesView,
});

function FuncionalidadesView() {
  const [estado, setEstado] = useState(
    Object.fromEntries(features.map((f) => [f.id, f.ativo])) as Record<string, boolean>,
  );

  return (
    <Shell>
      <PageHeader title="FUNCIONALIDADES" subtitle="Controle o que está ativo em cada área do sistema" />
      <div className="space-y-4">
        {(["Cliente", "Parceiro", "Admin"] as const).map((area) => (
          <section key={area} className="pixel-panel p-5">
            <h2 className="mb-4 text-sm text-primary">{area.toUpperCase()}</h2>
            <div className="divide-y divide-border/60">
              {features
                .filter((f) => f.area === area)
                .map((f) => (
                  <div key={f.id} className="flex items-center justify-between gap-6 py-3">
                    <div>
                      <p className="font-heading text-sm">{f.nome}</p>
                      <p className="mt-1 text-xs text-muted-foreground">{f.descricao}</p>
                    </div>
                    <Toggle
                      label={f.nome}
                      checked={estado[f.id]}
                      onChange={(v) => setEstado((s) => ({ ...s, [f.id]: v }))}
                    />
                  </div>
                ))}
            </div>
          </section>
        ))}
      </div>
    </Shell>
  );
}
