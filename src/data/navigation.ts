export const adminNav = [
  { label: "Dashboard", to: "/admin" },
  { label: "Restaurantes", to: "/admin/restaurantes" },
  { label: "Pedidos", to: "/admin/pedidos" },
  { label: "Entregas", to: "/admin/entregas" },
  { label: "Funcionalidades", to: "/admin/funcionalidades" },
] as const;

export const clienteNav = [
  { label: "Início", to: "/" },
  { label: "Explorar", to: "/explorar" },
  { label: "Pedidos", to: "/historico" },
  { label: "Pagamento", to: "/pagamento" },
  { label: "Entrar", to: "/login" },
] as const;

export const parceiroNav = [
  { label: "Área do Parceiro", to: "/parceiro" },
  { label: "Cardápios", to: "/parceiro/cardapios" },
  { label: "Avaliações", to: "/parceiro/avaliacoes" },
] as const;
