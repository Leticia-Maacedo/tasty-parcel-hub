import { Link } from "@tanstack/react-router";
import type { ReactNode } from "react";
import { adminNav, clienteNav, parceiroNav } from "@/data/navigation";

const groups = [
  { title: "Cliente", items: clienteNav },
  { title: "Parceiro", items: parceiroNav },
  { title: "Admin", items: adminNav },
];

export function Shell({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen">
      <header className="sticky top-0 z-40 border-b border-border bg-background/95 backdrop-blur">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center gap-x-6 gap-y-3 px-4 py-3">
          <Link to="/" className="font-display text-sm text-primary text-glow">
            ENTREGAFOOD
          </Link>
          <nav className="flex flex-wrap items-center gap-x-5 gap-y-2">
            {groups.map((group) => (
              <div key={group.title} className="flex items-center gap-2">
                <span className="label-caps text-muted-foreground/70">{group.title}</span>
                {group.items.map((item) => (
                  <Link
                    key={item.to}
                    to={item.to}
                    activeOptions={{ exact: item.to === "/" || item.to === "/admin" || item.to === "/parceiro" }}
                    activeProps={{ className: "text-primary border-primary" }}
                    className="rounded-sm border border-transparent px-2 py-1 font-heading text-[0.7rem] uppercase tracking-wider text-muted-foreground transition-colors hover:border-primary/50 hover:text-primary"
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            ))}
          </nav>
        </div>
      </header>
      <main className="mx-auto max-w-7xl px-4 py-8">{children}</main>
      <footer className="border-t border-border px-4 py-6 text-center text-xs text-muted-foreground">
        ENTREGAFOOD v1.0.0 — desenvolvido com nostalgia. Foco no código, coração nas pessoas.
      </footer>
    </div>
  );
}
