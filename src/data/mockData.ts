export type PedidoStatus = "Entregue" | "Em rota" | "Preparando" | "Confirmado" | "Cancelado";

export const stats = [
  { label: "Usuários", value: "1.248", delta: "+12 este mês", icon: "users" },
  { label: "Restaurantes", value: "321", delta: "+8 este mês", icon: "store" },
  { label: "Pedidos", value: "2.563", delta: "+18% este mês", icon: "clipboard" },
  { label: "Entregas", value: "1.987", delta: "+15% este mês", icon: "bike" },
  { label: "Faturamento", value: "R$ 45.890,00", delta: "+22% este mês", icon: "money" },
] as const;

export type Restaurante = {
  id: string;
  nome: string;
  categoria: string;
  nota: number;
  avaliacoes: number;
  tempo: string;
  frete: string;
  aberto: boolean;
};

export const restaurantes: Restaurante[] = [
  { id: "cantinho-do-chef", nome: "Cantinho do Chef", categoria: "Brasileira", nota: 4.8, avaliacoes: 2345, tempo: "30-40 min", frete: "R$ 5,99", aberto: true },
  { id: "burger-house", nome: "Burger House", categoria: "Hambúrgueres", nota: 4.8, avaliacoes: 1820, tempo: "30-40 min", frete: "R$ 5,99", aberto: true },
  { id: "sushi-lovers", nome: "Sushi Lovers", categoria: "Japonesa", nota: 4.9, avaliacoes: 987, tempo: "40-50 min", frete: "R$ 5,99", aberto: true },
  { id: "pizza-station", nome: "Pizza Station", categoria: "Pizzaria", nota: 4.7, avaliacoes: 1544, tempo: "30-40 min", frete: "R$ 4,99", aberto: true },
  { id: "acai-da-praia", nome: "Açaí da Praia", categoria: "Açaí e Sorvetes", nota: 4.6, avaliacoes: 640, tempo: "20-30 min", frete: "R$ 4,99", aberto: false },
  { id: "veggie-green", nome: "Veggie Green", categoria: "Saudável", nota: 4.7, avaliacoes: 412, tempo: "30-40 min", frete: "R$ 5,99", aberto: true },
];

export const categorias = [
  { id: "todos", nome: "Todos" },
  { id: "restaurantes", nome: "Restaurantes" },
  { id: "mercados", nome: "Mercados" },
  { id: "bebidas", nome: "Bebidas" },
  { id: "farmacia", nome: "Farmácia" },
  { id: "mais", nome: "Mais" },
];

export type Produto = { id: string; nome: string; descricao: string; preco: number };

export const cardapio: Produto[] = [
  { id: "file-parmegiana", nome: "Filé à Parmegiana", descricao: "Acompanha arroz e batata frita", preco: 32.9 },
  { id: "combo-burger", nome: "Combo Burger", descricao: "Burger, batata e refrigerante", preco: 29.9 },
  { id: "suco-natural", nome: "Suco Natural", descricao: "Laranja, Limão ou Abacaxi", preco: 8.9 },
  { id: "brownie", nome: "Brownie com Sorvete", descricao: "Chocolate com sorvete de creme", preco: 14.9 },
  { id: "arroz-branco", nome: "Arroz Branco", descricao: "Porção individual", preco: 6.0 },
  { id: "batata-frita", nome: "Batata Frita", descricao: "Porção crocante 300g", preco: 7.9 },
];

export type Pedido = {
  id: string;
  cliente: string;
  restaurante: string;
  status: PedidoStatus;
  total: number;
  data: string;
  endereco: string;
  pagamento: string;
  itens: { nome: string; qtd: number; preco: number }[];
  taxa: number;
};

export const pedidos: Pedido[] = [
  {
    id: "2563",
    cliente: "Ana Silva",
    restaurante: "Cantinho do Chef",
    status: "Entregue",
    total: 61.68,
    data: "10/08 14:20",
    endereco: "Rua das Flores, 123 — Vila Madalena, São Paulo - SP",
    pagamento: "Cartão de Crédito •••• 1234",
    taxa: 5.99,
    itens: [
      { nome: "Filé à Parmegiana", qtd: 1, preco: 32.9 },
      { nome: "Suco Natural", qtd: 1, preco: 8.9 },
      { nome: "Arroz Branco", qtd: 1, preco: 6.0 },
      { nome: "Batata Frita", qtd: 1, preco: 7.9 },
    ],
  },
  {
    id: "2562",
    cliente: "João Pereira",
    restaurante: "Burger House",
    status: "Em rota",
    total: 38.5,
    data: "10/08 14:18",
    endereco: "Rua das Flores, 123 — Vila Madalena, São Paulo - SP",
    pagamento: "Pix",
    taxa: 5.99,
    itens: [{ nome: "Combo Burger", qtd: 1, preco: 29.9 }],
  },
  {
    id: "2561",
    cliente: "Maria Santos",
    restaurante: "Sushi Lovers",
    status: "Preparando",
    total: 67.4,
    data: "10/08 14:10",
    endereco: "Av. Paulista, 900 — Bela Vista, São Paulo - SP",
    pagamento: "Cartão de Débito •••• 8891",
    taxa: 5.99,
    itens: [{ nome: "Combo Sushi 20 peças", qtd: 1, preco: 61.41 }],
  },
  {
    id: "2560",
    cliente: "Lucas Costa",
    restaurante: "Pizza Station",
    status: "Confirmado",
    total: 43.8,
    data: "10/08 14:05",
    endereco: "Rua Augusta, 55 — Consolação, São Paulo - SP",
    pagamento: "Pix",
    taxa: 4.99,
    itens: [{ nome: "Pizza Grande Calabresa", qtd: 1, preco: 38.81 }],
  },
  {
    id: "2559",
    cliente: "Juliana Lima",
    restaurante: "Cantinho do Chef",
    status: "Entregue",
    total: 29.9,
    data: "10/08 13:55",
    endereco: "Rua Harmonia, 400 — Vila Madalena, São Paulo - SP",
    pagamento: "Cartão de Crédito •••• 1234",
    taxa: 5.99,
    itens: [{ nome: "Combo Burger", qtd: 1, preco: 23.91 }],
  },
];

export type Entrega = {
  id: string;
  pedido: string;
  entregador: string;
  nota: number;
  previsao: string;
  status: PedidoStatus;
  endereco: string;
};

export const entregas: Entrega[] = [
  { id: "E-2562", pedido: "2562", entregador: "Pedro Oliveira", nota: 4.9, previsao: "14:45 - 15:00", status: "Em rota", endereco: "Rua das Flores, 123 — Vila Madalena - SP" },
  { id: "E-2561", pedido: "2561", entregador: "Carla Souza", nota: 4.7, previsao: "15:00 - 15:20", status: "Preparando", endereco: "Av. Paulista, 900 — Bela Vista - SP" },
  { id: "E-2560", pedido: "2560", entregador: "Rafael Dias", nota: 4.8, previsao: "15:10 - 15:30", status: "Confirmado", endereco: "Rua Augusta, 55 — Consolação - SP" },
];

export const atividades = [
  { hora: "14:32", texto: "Usuário João Pereira fez um novo pedido", ref: "#2562" },
  { hora: "14:28", texto: "Restaurante Burger House atualizou cardápio", ref: "" },
  { hora: "14:20", texto: "Entrega finalizada com sucesso", ref: "#2563" },
  { hora: "14:15", texto: "Novo usuário cadastrado: Carla Souza", ref: "" },
  { hora: "14:05", texto: "Pagamento aprovado", ref: "#2560" },
];

export const integracoes = [
  { nome: "Google Maps", status: "Conectado" },
  { nome: "Facebook", status: "Conectado" },
  { nome: "Gmail", status: "Conectado" },
  { nome: "Stripe", status: "Pendente" },
];

export const avaliacoes = [
  { cliente: "Ana Silva", nota: 5, comentario: "Comida quente e entrega rápida. Melhor parmegiana da região!", data: "10/08" },
  { cliente: "João Pereira", nota: 4, comentario: "Muito bom, só demorou uns minutos a mais.", data: "09/08" },
  { cliente: "Maria Santos", nota: 5, comentario: "Atendimento impecável, embalagem caprichada.", data: "08/08" },
  { cliente: "Lucas Costa", nota: 3, comentario: "Sabor ok, mas veio sem o molho extra.", data: "07/08" },
];

export const fluxoSistema = [
  "Usuário",
  "Login / Cadastro",
  "Explorar",
  "Restaurantes",
  "Produtos",
  "Carrinho",
  "Pagamento",
  "Pedido Confirmado",
  "Entrega",
];

export const brl = (v: number) =>
  v.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });
