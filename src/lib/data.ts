import type { Product, Campaign, Look } from "@/types/product";

// Imagens dos produtos reais
// Salve cada arquivo em: public/products/<nome-abaixo>.jpg
const P = "/products";

export const products: Product[] = [
  // ── MODA FEMININA ──────────────────────────────────────────────────────────
  {
    id: "f1",
    name: "Maiô Sauê",
    slug: "maio-saue",
    description:
      "Maiô com alças de bolinhas e detalhes franzidos no busto. Elegante e sofisticado para os dias de verão.",
    price: 474.0,
    category: "maiôs",
    gender: "feminino",
    images: [
      {
        url: `${P}/maio-saida-saue.png`,
        alt: "Maiô Sauê verde — Boutique Eva Milhomem",
      },
    ],
    sizes: ["M"],
    colors: ["Verde"],
    inStock: true,
    featured: true,
    isNew: true,
    tags: ["maiô", "praia", "sauê", "verde", "verão"],
  },
  {
    id: "f2",
    name: "Saída Longa Sauê",
    slug: "saida-longa-saue",
    description:
      "Saída de praia longa em tule transparente. Combina perfeitamente com o Maiô Sauê para um look completo.",
    price: 439.0,
    category: "saídas-de-praia",
    gender: "feminino",
    images: [
      {
        url: `${P}/maio-saida-saue.png`,
        alt: "Saída Longa Sauê verde — Boutique Eva Milhomem",
      },
    ],
    sizes: ["P"],
    colors: ["Verde"],
    inStock: true,
    featured: false,
    isNew: true,
    tags: ["saída de praia", "tule", "sauê", "verde", "verão"],
  },

  {
    id: "f3",
    name: "Vestido Feminino Vermelho",
    slug: "vestido-feminino-vermelho",
    description:
      "Vestido feminino vermelho elegante. Perfeito para ocasiões especiais com muito estilo e sofisticação.",
    price: 0,
    category: "vestidos",
    gender: "feminino",
    images: [
      {
        url: `${P}/vestido-feminino-vermelho.jpg`,
        alt: "Vestido feminino vermelho — Boutique Eva Milhomem",
      },
    ],
    sizes: ["P", "M", "G"],
    colors: ["Vermelho"],
    inStock: true,
    featured: true,
    isNew: true,
    tags: ["vestido", "vermelho", "elegante", "festa"],
  },

  {
    id: "f4",
    name: "Maiô RDSOL",
    slug: "maio-rdsol",
    description: "Maiô RDSOL elegante e sofisticado para os dias de verão.",
    price: 110.0,
    category: "maiôs",
    gender: "feminino",
    images: [
      {
        url: `${P}/maio-rdsol.jpg`,
        alt: "Maiô RDSOL — Boutique Eva Milhomem",
      },
    ],
    sizes: ["M"],
    colors: ["Único"],
    inStock: true,
    featured: true,
    isNew: true,
    tags: ["maiô", "rdsol", "praia", "verão"],
  },

  {
    id: "f5",
    name: "Biquíni BanaBana",
    slug: "biquini-banana",
    description: "Biquíni BanaBana com estampa animal print em tons de caramelo e marrom. Top com bojo e calcinha com amarração lateral.",
    price: 75.0,
    category: "biquinis",
    gender: "feminino",
    images: [
      {
        url: `${P}/biquini-banana.jpg`,
        alt: "Biquíni BanaBana animal print — Boutique Eva Milhomem",
      },
    ],
    sizes: ["GG"],
    colors: ["Animal Print"],
    inStock: true,
    featured: true,
    isNew: true,
    tags: ["biquíni", "banabana", "animal print", "praia", "verão"],
  },

  {
    id: "f6",
    name: "Biquíni BanaBana Zebra",
    slug: "biquini-banana-zebra",
    description: "Biquíni BanaBana com estampa zebra em preto, azul, dourado e verde água. Top com bojo e calcinha com amarração lateral.",
    price: 83.0,
    category: "biquinis",
    gender: "feminino",
    images: [
      {
        url: `${P}/biquini-banana-zebra.jpg`,
        alt: "Biquíni BanaBana zebra — Boutique Eva Milhomem",
      },
    ],
    sizes: ["M"],
    colors: ["Zebra Preto/Azul"],
    inStock: true,
    featured: true,
    isNew: true,
    tags: ["biquíni", "banabana", "zebra", "praia", "verão"],
  },
  {
    id: "f7",
    name: "Calça BanaBana Zebra",
    slug: "calca-banana-zebra",
    description: "Calça BanaBana com estampa zebra combinando com o biquíni. Cintura elástica, tecido leve e fluido.",
    price: 90.0,
    category: "saídas-de-praia",
    gender: "feminino",
    images: [
      {
        url: `${P}/biquini-banana-zebra.jpg`,
        alt: "Calça BanaBana zebra — Boutique Eva Milhomem",
      },
    ],
    sizes: ["P"],
    colors: ["Zebra Preto/Azul"],
    inStock: true,
    featured: false,
    isNew: true,
    tags: ["calça", "banabana", "zebra", "praia", "verão"],
  },

  // ── KITS MASCULINOS ────────────────────────────────────────────────────────
  {
    id: "km2",
    name: "Kit Masculino Acostamento Preto",
    slug: "kit-masculino-acostamento-preto",
    description: "Look completo Acostamento: Camisa preta (10x R$24,99) · Chinelo branco R$79,90 · Carteira Ogochi (10x R$19,90) · Perfume Myself YSL (10x R$134,99).",
    price: 0,
    category: "camisas",
    gender: "masculino",
    images: [{ url: `${P}/kit-masculino-acostamento-2.png`, alt: "Kit masculino Acostamento preto com perfume YSL — Boutique Eva Milhomem" }],
    sizes: ["P", "M", "G", "GG"],
    colors: ["Preto/Branco"],
    inStock: true,
    featured: true,
    isNew: true,
    tags: ["kit", "acostamento", "masculino", "camisa", "chinelo", "carteira", "perfume", "ysl"],
  },
  {
    id: "km1",
    name: "Kit Masculino Acostamento",
    slug: "kit-masculino-acostamento",
    description: "Look completo Acostamento: Camisa vinho R$179,90 · Boné preto R$79,90 · Short preto R$109,90 · Sandália preta R$79,90. Total R$449,60.",
    price: 449.60,
    category: "camisas",
    gender: "masculino",
    images: [{ url: `${P}/kit-masculino-acostamento.png`, alt: "Kit masculino Acostamento — Boutique Eva Milhomem" }],
    sizes: ["P", "M", "G", "GG"],
    colors: ["Vinho/Preto"],
    inStock: true,
    featured: true,
    isNew: true,
    tags: ["kit", "acostamento", "masculino", "camisa", "boné", "short", "sandália"],
  },

  // ── MODA MASCULINA ─────────────────────────────────────────────────────────
  {
    id: "m1",
    name: "Camisa Acostamento",
    slug: "camisa-acostamento",
    description:
      "Camiseta Acostamento com logo bordado. Tecido premium de alta qualidade com caimento perfeito.",
    price: 169.9,
    category: "camisas",
    gender: "masculino",
    images: [
      {
        url: `${P}/polo-masculina.png`,
        alt: "Camisa Acostamento — Boutique Eva Milhomem",
      },
    ],
    sizes: ["P", "M", "G", "GG"],
    colors: ["Variadas"],
    inStock: true,
    featured: true,
    isNew: false,
    tags: ["camisa", "acostamento", "premium"],
  },
  {
    id: "m2",
    name: "Camiseta Ogochi Basic Tech",
    slug: "camiseta-ogochi-basic-tech",
    description:
      "Camiseta Ogochi linha Basic Tech. Tecido técnico leve e confortável, perfeito para o dia a dia.",
    price: 0, // preço a consultar
    category: "camisas",
    gender: "masculino",
    images: [
      {
        url: `${P}/look-masculino-verde.webp`,
        alt: "Camiseta Ogochi Basic Tech — Boutique Eva Milhomem",
      },
    ],
    sizes: ["P", "M", "G", "GG"],
    colors: ["Preto"],
    inStock: true,
    featured: false,
    isNew: true,
    tags: ["camiseta", "ogochi", "basic tech"],
  },
  {
    id: "m3",
    name: "Bermuda Ogochi",
    slug: "bermuda-ogochi",
    description:
      "Bermuda Ogochi em tecido leve com elástico e cordão. Estilo e conforto para o dia a dia.",
    price: 0,
    category: "calças-masculinas",
    gender: "masculino",
    images: [
      {
        url: `${P}/look-masculino-verde.webp`,
        alt: "Bermuda Ogochi verde militar — Boutique Eva Milhomem",
      },
    ],
    sizes: ["P", "M", "G", "GG"],
    colors: ["Verde Militar"],
    inStock: true,
    featured: false,
    isNew: true,
    tags: ["bermuda", "ogochi", "casual"],
  },

  // ── CALÇADOS FEMININOS ─────────────────────────────────────────────────────
  {
    id: "c1",
    name: "Chinelo Santa Lolla Preto",
    slug: "chinelo-santa-lolla-preto",
    description: "Chinelo Santa Lolla com corrente dourada e palmilha matelassê. Sofisticação e conforto em cada passo.",
    price: 149.90,
    category: "calçados",
    gender: "feminino",
    images: [{ url: `${P}/chinelo-santa-lolla-preto.png`, alt: "Chinelo Santa Lolla preto com corrente dourada" }],
    sizes: ["35", "36", "37", "38", "39"],
    colors: ["Preto"],
    inStock: true,
    featured: true,
    isNew: true,
    tags: ["chinelo", "santa lolla", "corrente", "dourado", "calçado"],
  },
  {
    id: "c2f",
    name: "Chinelo Santa Lolla Marrom",
    slug: "chinelo-santa-lolla-marrom",
    description: "Chinelo Santa Lolla matelassê caramelo com corrente dourada. Disponível na numeração 35/36.",
    price: 119.90,
    category: "calçados",
    gender: "feminino",
    images: [{ url: `${P}/chinelo-santa-lolla-marrom.png`, alt: "Chinelo Santa Lolla marrom com corrente dourada" }],
    sizes: ["35", "36"],
    colors: ["Marrom"],
    inStock: true,
    featured: true,
    isNew: true,
    tags: ["chinelo", "santa lolla", "corrente", "marrom", "calçado"],
  },
  {
    id: "c3f",
    name: "Rasteirinha Santa Lolla Verde",
    slug: "rasteirinha-santa-lolla-verde",
    description: "Rasteirinha Santa Lolla matelassê verde sage com corrente dourada. R$ 114,00 à vista ou 10x no crediário.",
    price: 114.00,
    category: "calçados",
    gender: "feminino",
    images: [{ url: `${P}/rasteirinha-santa-lolla-verde.png`, alt: "Rasteirinha Santa Lolla verde sage com corrente dourada" }],
    sizes: ["35", "36", "37", "38", "39"],
    colors: ["Verde Sage"],
    inStock: true,
    featured: true,
    isNew: true,
    tags: ["rasteirinha", "santa lolla", "corrente", "verde", "calçado"],
  },

  // ── BOLSAS ────────────────────────────────────────────────────────────────
  {
    id: "b4",
    name: "Bolsa Tote Santa Lolla Nylon Preta",
    slug: "bolsa-tote-santa-lolla-nylon-preta",
    description: "Tote bag Santa Lolla em nylon premium preto com alças em couro e monograma SL dourado. Leve, resistente e sofisticada.",
    price: 229.90,
    category: "bolsas",
    gender: "feminino",
    images: [{ url: `${P}/bolsa-santa-lolla-nylon-preta.png`, alt: "Bolsa tote Santa Lolla nylon preta monograma SL dourado" }],
    sizes: ["Único"],
    colors: ["Preto"],
    inStock: true,
    featured: true,
    isNew: true,
    tags: ["bolsa", "tote", "santa lolla", "nylon", "preta"],
  },
  {
    id: "b1",
    name: "Bolsa Tote Santa Lolla Preta",
    slug: "bolsa-tote-santa-lolla-preta",
    description: "Tote bag Santa Lolla em raffia preta com alças em couro caramelo e fivelas douradas. Espaçosa, elegante e versátil.",
    price: 0,
    category: "bolsas",
    gender: "feminino",
    images: [{ url: `${P}/bolsa-santa-lolla-tote-preta.png`, alt: "Bolsa tote Santa Lolla preta com alças caramelo" }],
    sizes: ["Único"],
    colors: ["Preto/Caramelo"],
    inStock: true,
    featured: true,
    isNew: true,
    tags: ["bolsa", "tote", "santa lolla", "raffia", "preta"],
  },
  {
    id: "b2",
    name: "Bolsa Santa Lolla Bicolor Preta",
    slug: "bolsa-santa-lolla-bicolor-preta",
    description: "Bolsa Santa Lolla com estrutura bicolor: parte superior em couro liso e inferior em raffia trançada. Argolas douradas exclusivas.",
    price: 0,
    category: "bolsas",
    gender: "feminino",
    images: [{ url: `${P}/bolsa-santa-lolla-preta-couro.png`, alt: "Bolsa Santa Lolla bicolor preta couro e raffia" }],
    sizes: ["Único"],
    colors: ["Preto"],
    inStock: true,
    featured: true,
    isNew: true,
    tags: ["bolsa", "santa lolla", "couro", "raffia", "preta"],
  },
  {
    id: "b3",
    name: "Bolsa Santa Lolla Bege Lona",
    slug: "bolsa-santa-lolla-bege",
    description: "Bolsa Santa Lolla em lona bege com alças e detalhes em couro caramelo. Clássica e atemporal. 10x de R$ 38,99 no crediário.",
    price: 389.90,
    category: "bolsas",
    gender: "feminino",
    images: [{ url: `${P}/bolsa-santa-lolla-bege.png`, alt: "Bolsa Santa Lolla bege lona com alças caramelo" }],
    sizes: ["Único"],
    colors: ["Bege/Caramelo"],
    inStock: true,
    featured: true,
    isNew: true,
    tags: ["bolsa", "santa lolla", "lona", "bege", "caramelo"],
  },

  // ── MODA INFANTIL ──────────────────────────────────────────────────────────
  {
    id: "i4",
    name: "Macacão Unissex Bebê",
    slug: "macacao-unissex-bebe",
    description: "Macacão unissex canelado azul marinho com botões de madeira e pezinho. Tecido macio e confortável para os primeiros meses.",
    price: 179.90,
    category: "infantil",
    gender: "infantil-menino",
    images: [{ url: `${P}/macacao-unissex-bebe.png`, alt: "Macacão unissex bebê azul marinho — Boutique Eva Milhomem" }],
    sizes: ["3 meses"],
    colors: ["Azul Marinho"],
    inStock: true,
    featured: false,
    isNew: true,
    tags: ["macacão", "bebê", "unissex", "infantil", "recém-nascido"],
  },
  {
    id: "i3",
    name: "Kit Infantil Menino Ogochi",
    slug: "kit-infantil-menino-ogochi",
    description: "Kit completo infantil masculino: Camiseta Térmica Ogochi Preta (6 anos) R$139,90 · Chinelo Ogochi (29/30) R$79,90 · Térmica Azul Sun Surf Sea (8 anos) R$169,90 · Sunga Coqueiros (6 anos) R$81,30. Consulte disponibilidade de cada peça.",
    price: 0,
    category: "infantil",
    gender: "infantil-menino",
    images: [{ url: `${P}/kit-infantil-menino-ogochi.png`, alt: "Kit infantil menino Ogochi — Boutique Eva Milhomem" }],
    sizes: ["6 anos", "8 anos", "29/30"],
    colors: ["Preto", "Azul"],
    inStock: true,
    featured: false,
    isNew: true,
    tags: ["kit", "infantil", "menino", "ogochi", "térmica", "chinelo", "sunga"],
  },
  {
    id: "i1",
    name: "Camiseta Térmica Tigor",
    slug: "camiseta-termica-tigor",
    description: "Camiseta térmica Tigor T. Tigre manga longa preta com estampa frontal. Proteção UV e conforto para os pequenos.",
    price: 200.00,
    category: "infantil",
    gender: "infantil-menino",
    images: [{ url: `${P}/camiseta-termica-sunga-tigor.png`, alt: "Camiseta térmica Tigor infantil — Boutique Eva Milhomem" }],
    sizes: ["5 anos"],
    colors: ["Preto"],
    inStock: true,
    featured: false,
    isNew: true,
    tags: ["tigor", "infantil", "menino", "camiseta", "térmica", "praia"],
  },
  {
    id: "i2",
    name: "Sunga Tigor",
    slug: "sunga-tigor",
    description: "Sunga Tigor T. Tigre vermelha com detalhes azul royal e logo lateral. Tecido de secagem rápida.",
    price: 189.00,
    category: "infantil",
    gender: "infantil-menino",
    images: [{ url: `${P}/camiseta-termica-sunga-tigor.png`, alt: "Sunga Tigor infantil — Boutique Eva Milhomem" }],
    sizes: ["5 anos"],
    colors: ["Vermelho/Azul"],
    inStock: true,
    featured: false,
    isNew: true,
    tags: ["tigor", "infantil", "menino", "sunga", "praia"],
  },

  // ── CARTEIRAS MASCULINAS ───────────────────────────────────────────────────
  {
    id: "cm1",
    name: "Carteira Ogochi",
    slug: "carteira-masculina-ogochi",
    description: "Carteira Ogochi em couro legítimo preto com costura contrastante. Slim, elegante e com múltiplos compartimentos.",
    price: 99.90,
    category: "acessórios",
    gender: "masculino",
    images: [{ url: `${P}/carteira-masculina.jpg`, alt: "Carteira masculina — Boutique Eva Milhomem" }],
    sizes: ["Único"],
    colors: ["Preto"],
    inStock: true,
    featured: false,
    isNew: true,
    tags: ["carteira", "masculino", "couro", "acessório"],
  },

  // ── BOLSAS & ACESSÓRIOS ────────────────────────────────────────────────────
  {
    id: "a1",
    name: "Boné Ogochi",
    slug: "bone-ogochi",
    description:
      "Boné Ogochi com logo bordado. Estruturado, ajustável e versátil — combina com qualquer look.",
    price: 79.9,
    category: "acessórios",
    gender: "unissex",
    images: [
      {
        url: `${P}/bone-cinto-carteira.webp`,
        alt: "Boné Ogochi — Boutique Eva Milhomem",
      },
    ],
    sizes: ["Único"],
    colors: ["Branco", "Preto", "Cinza"],
    inStock: true,
    featured: false,
    isNew: false,
    tags: ["boné", "ogochi", "acessório"],
  },
  {
    id: "a2",
    name: "Carteira Ogochi",
    slug: "carteira-ogochi",
    description:
      "Carteira Ogochi em couro legítimo com múltiplos compartimentos. Sofisticação no detalhe.",
    price: 99.9,
    category: "acessórios",
    gender: "unissex",
    images: [
      {
        url: `${P}/bone-cinto-carteira.webp`,
        alt: "Carteira Ogochi — Boutique Eva Milhomem",
      },
    ],
    sizes: ["Único"],
    colors: ["Preto"],
    inStock: true,
    featured: false,
    isNew: false,
    tags: ["carteira", "ogochi", "couro"],
  },
  {
    id: "a3",
    name: "Cinto Ogochi",
    slug: "cinto-ogochi",
    description:
      "Cinto Ogochi em couro com fivela prata. O acabamento que eleva qualquer look masculino.",
    price: 129.9,
    category: "cintos",
    gender: "unissex",
    images: [
      {
        url: `${P}/bone-cinto-carteira.webp`,
        alt: "Cinto Ogochi — Boutique Eva Milhomem",
      },
    ],
    sizes: ["P", "M", "G"],
    colors: ["Preto"],
    inStock: true,
    featured: false,
    isNew: false,
    tags: ["cinto", "ogochi", "couro"],
  },
  {
    id: "a4",
    name: "Chinelo Acostamento",
    slug: "chinelo-acostamento",
    description:
      "Chinelo Acostamento com solado anatômico e alça confortável. Estilo e leveza para o verão.",
    price: 79.9,
    category: "acessórios",
    gender: "unissex",
    images: [
      {
        url: `${P}/bone-cinto-carteira.webp`,
        alt: "Chinelo Acostamento — Boutique Eva Milhomem",
      },
    ],
    sizes: ["34-35", "36-37", "38-39", "40-41", "42-43"],
    colors: ["Branco/Preto"],
    inStock: true,
    featured: false,
    isNew: false,
    tags: ["chinelo", "acostamento", "verão"],
  },
  {
    id: "a5",
    name: "Sandália Ogochi",
    slug: "sandalia-ogochi",
    description:
      "Sandália Ogochi em borracha premium. Conforto e durabilidade para o dia a dia.",
    price: 79.9,
    category: "acessórios",
    gender: "unissex",
    images: [
      {
        url: `${P}/kit-namorados.webp`,
        alt: "Sandália Ogochi — Boutique Eva Milhomem",
      },
    ],
    sizes: ["34-35", "36-37", "38-39", "40-41", "42-43"],
    colors: ["Preto"],
    inStock: true,
    featured: false,
    isNew: false,
    tags: ["sandália", "ogochi", "conforto"],
  },
];

export const campaigns: Campaign[] = [
  {
    id: "c2",
    title: "Verão com Estilo",
    subtitle: "Coleção Feminina",
    description:
      "O look de praia perfeito chegou. Maiô e saída longa Sauê — sofisticação do mar à areia.",
    image: `${P}/maio-saida-saue.png`,
    cta: "Ver Coleção",
    ctaHref: "/moda-feminina",
    season: "Verão",
    year: 2025,
    featured: true,
  },
  {
    id: "c3",
    title: "Looks Masculinos",
    subtitle: "Estilo que fala por você",
    description:
      "Acostamento, Ogochi e muito mais. Marcas premium que definem quem você é.",
    image: `${P}/bone-camisa-chinelo.jpg`,
    cta: "Explorar",
    ctaHref: "/moda-masculina",
    season: "Atemporal",
    year: 2025,
    featured: false,
  },
];

export const looks: Look[] = [
  {
    id: "l1",
    name: "Look Praia Feminino",
    description: "Maiô + saída longa — o look completo para arrasar na praia com elegância.",
    image: `${P}/maio-saida-saue.png`,
    productIds: ["f1", "f2"],
  },
  {
    id: "l4",
    name: "Kit Acostamento Masculino",
    description: "Camisa + Boné + Short + Sandália — o look Acostamento completo para arrasar.",
    image: `${P}/kit-masculino-acostamento.png`,
    productIds: ["km1"],
  },
  {
    id: "l2",
    name: "Look Masculino Casual",
    description: "Camisa + boné + chinelo — conforto e estilo para o dia a dia.",
    image: `${P}/look-masculino-verde.webp`,
    productIds: ["m1", "a1", "a4"],
  },
  {
    id: "l3",
    name: "Kit Acessórios Ogochi",
    description: "Boné + cinto + carteira — os três itens que elevam qualquer look masculino.",
    image: `${P}/bone-cinto-carteira.webp`,
    productIds: ["a1", "a2", "a3"],
  },
];

export function getLookProducts(look: Look) {
  return look.productIds.map((id) => products.find((p) => p.id === id)!).filter(Boolean);
}

export function getBeachwearProducts() {
  return products.filter((p) =>
    ["biquinis", "maiôs", "saídas-de-praia", "moda-praia"].includes(p.category)
  );
}

export function getProductsByGender(gender: "feminino" | "masculino") {
  return products.filter(
    (p) => p.gender === gender || p.gender === "unissex"
  );
}

export function getBagsAndAccessories() {
  return products.filter((p) =>
    ["bolsas", "acessórios", "cintos"].includes(p.category)
  );
}

export function getInfantilMenino() {
  return products.filter((p) => p.gender === "infantil-menino");
}

export function getInfantilMenina() {
  return products.filter((p) => p.gender === "infantil-menina");
}

export function getCalcadosFemininos() {
  return products.filter((p) => p.category === "calçados" && p.gender === "feminino");
}

export function getFeaturedProducts() {
  return products.filter((p) => p.featured);
}
