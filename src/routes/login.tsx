import { createFileRoute, Link } from "@tanstack/react-router";
import { Shell } from "@/components/Shell";
import { Field } from "@/components/Field";

export const Route = createFileRoute("/login")({
  head: () => ({
    meta: [
      { title: "Entrar — EntregaFood" },
      { name: "description", content: "Acesse sua conta EntregaFood para pedir em segundos." },
      { property: "og:title", content: "Entrar — EntregaFood" },
      { property: "og:description", content: "Acesse sua conta EntregaFood." },
    ],
  }),
  component: LoginView,
});

function LoginView() {
  return (
    <Shell>
      <div className="mx-auto max-w-md">
        <div className="mb-8 text-center">
          <h1 className="text-glow text-xl text-primary">ENTREGAFOOD</h1>
          <p className="mt-3 font-heading text-xs uppercase tracking-[0.3em] text-muted-foreground">
            sistema de delivery
          </p>
        </div>

        <form className="pixel-panel space-y-5 p-6" onSubmit={(e) => e.preventDefault()}>
          <Field label="E-mail ou telefone" type="text" placeholder="seu@email.com" />
          <Field label="Senha" type="password" placeholder="••••••••" />
          <button className="w-full rounded-sm bg-primary px-4 py-3 font-heading text-xs uppercase tracking-widest text-primary-foreground transition-opacity hover:opacity-90">
            Entrar
          </button>
          <p className="text-center text-xs text-muted-foreground">Esqueceu sua senha?</p>
          <div className="grid grid-cols-3 gap-2">
            {["Google", "Facebook", "Apple"].map((p) => (
              <button
                key={p}
                type="button"
                className="rounded-sm border border-border px-2 py-2 font-heading text-[0.65rem] uppercase text-muted-foreground transition-colors hover:border-primary hover:text-primary"
              >
                {p}
              </button>
            ))}
          </div>
          <p className="text-center text-xs text-muted-foreground">
            Ainda não tem conta?{" "}
            <Link to="/cadastro/telefone" className="text-primary underline">
              Cadastre-se
            </Link>
          </p>
        </form>
      </div>
    </Shell>
  );
}
