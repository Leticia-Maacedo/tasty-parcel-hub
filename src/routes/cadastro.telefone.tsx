import { createFileRoute, Link } from "@tanstack/react-router";
import { Shell } from "@/components/Shell";
import { PageHeader } from "@/components/PageHeader";
import { Field } from "@/components/Field";

export const Route = createFileRoute("/cadastro/telefone")({
  head: () => ({
    meta: [
      { title: "Cadastro por telefone — EntregaFood" },
      { name: "description", content: "Crie sua conta EntregaFood com verificação por SMS." },
      { property: "og:title", content: "Cadastro por telefone — EntregaFood" },
      { property: "og:description", content: "Crie sua conta em duas etapas." },
    ],
  }),
  component: CadastroTelefoneView,
});

function CadastroTelefoneView() {
  return (
    <Shell>
      <div className="mx-auto max-w-md">
        <PageHeader title="CADASTRO" subtitle="Etapa 1 de 2 — confirme seu telefone" />
        <form className="pixel-panel space-y-5 p-6" onSubmit={(e) => e.preventDefault()}>
          <Field label="Nome completo" placeholder="Leticia Silva" />
          <Field label="Telefone" placeholder="(11) 90000-0000" inputMode="tel" />
          <Field label="Código de verificação" placeholder="000000" inputMode="numeric" />
          <Link
            to="/cadastro/endereco"
            className="block rounded-sm bg-primary px-4 py-3 text-center font-heading text-xs uppercase tracking-widest text-primary-foreground transition-opacity hover:opacity-90"
          >
            Continuar
          </Link>
        </form>
      </div>
    </Shell>
  );
}
