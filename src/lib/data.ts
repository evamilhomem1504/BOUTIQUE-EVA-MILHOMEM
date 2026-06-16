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
    category: "vestidos", // mapeado como beachwear
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
    category: "vestidos",
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
    featured: true,
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
    category: "vestidos",
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
    category: "vestidos",
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
    category: "vestidos",
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
    category: "calças-femininas",
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
        url: `${P}/bone-cinto-carteira.webp`,
        alt: "Camisa Acostamento preta — Boutique Eva Milhomem",
      },
    ],
    sizes: ["P", "M", "G", "GG"],
    colors: ["Preto"],
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
    featured: true,
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
    featured: true,
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

export function getFeaturedProducts() {
  return products.filter((p) => p.featured);
}
