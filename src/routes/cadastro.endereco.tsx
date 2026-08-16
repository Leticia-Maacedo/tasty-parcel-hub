import { createFileRoute, Link } from "@tanstack/react-router";
import { Shell } from "@/components/Shell";
import { PageHeader } from "@/components/PageHeader";
import { Field } from "@/components/Field";

export const Route = createFileRoute("/cadastro/endereco")({
  head: () => ({
    meta: [
      { title: "Endereço de entrega — EntregaFood" },
      { name: "description", content: "Cadastre o endereço onde você quer receber seus pedidos." },
      { property: "og:title", content: "Endereço de entrega — EntregaFood" },
      { property: "og:description", content: "Cadastre seu endereço de entrega." },
    ],
  }),
  component: CadastroEnderecoView,
});

function CadastroEnderecoView() {
  return (
    <Shell>
      <div className="mx-auto max-w-md">
        <PageHeader title="ENDEREÇO" subtitle="Etapa 2 de 2 — onde entregamos seu pedido" />
        <form className="pixel-panel space-y-5 p-6" onSubmit={(e) => e.preventDefault()}>
          <Field label="CEP" placeholder="05435-000" inputMode="numeric" />
          <Field label="Rua" placeholder="Rua das Flores" />
          <div className="grid grid-cols-2 gap-4">
            <Field label="Número" placeholder="123" inputMode="numeric" />
            <Field label="Complemento" placeholder="Apto 42" />
          </div>
          <Field label="Bairro" placeholder="Vila Madalena" />
          <Field label="Cidade / UF" placeholder="São Paulo - SP" />
          <Link
            to="/"
            className="block rounded-sm bg-primary px-4 py-3 text-center font-heading text-xs uppercase tracking-widest text-primary-foreground transition-opacity hover:opacity-90"
          >
            Finalizar cadastro
          </Link>
        </form>
      </div>
    </Shell>
  );
}
