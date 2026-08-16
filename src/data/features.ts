export type Feature = {
  id: string;
  nome: string;
  descricao: string;
  area: "Cliente" | "Parceiro" | "Admin";
  ativo: boolean;
};

export const features: Feature[] = [
  { id: "cadastro", nome: "Cadastro por telefone", descricao: "Login e cadastro em duas etapas com verificação por SMS.", area: "Cliente", ativo: true },
  { id: "enderecos", nome: "Múltiplos endereços", descricao: "Cliente pode salvar casa, trabalho e outros pontos de entrega.", area: "Cliente", ativo: true },
  { id: "cupons", nome: "Cupons de desconto", descricao: "Códigos promocionais aplicados no carrinho (ex.: DELIVEX10).", area: "Cliente", ativo: true },
  { id: "pix", nome: "Pagamento via Pix", descricao: "Cobrança instantânea com QR Code.", area: "Cliente", ativo: false },
  { id: "cardapio", nome: "Gestão de cardápio", descricao: "Parceiro cria categorias, itens, preços e disponibilidade.", area: "Parceiro", ativo: true },
  { id: "avaliacoes", nome: "Respostas a avaliações", descricao: "Parceiro responde comentários dos clientes.", area: "Parceiro", ativo: true },
  { id: "rastreio", nome: "Rastreio em tempo real", descricao: "Mapa com posição do entregador e previsão de chegada.", area: "Admin", ativo: true },
  { id: "relatorios", nome: "Relatórios financeiros", descricao: "Faturamento, repasses e taxas por período.", area: "Admin", ativo: false },
];
