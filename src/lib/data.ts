import type { Product, Campaign } from "@/types/product";

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
        url: `${P}/maio-saida-saue.jpg`,
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
        url: `${P}/maio-saida-saue.jpg`,
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
        url: `${P}/bone-camisa-chinelo.jpg`,
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
        url: `${P}/look-masculino-verde.jpg`,
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
        url: `${P}/look-masculino-verde.jpg`,
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
        url: `${P}/bone-camisa-chinelo.jpg`,
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
        url: `${P}/bone-cinto-carteira.jpg`,
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
        url: `${P}/bone-cinto-carteira.jpg`,
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
        url: `${P}/bone-camisa-chinelo.jpg`,
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
        url: `${P}/kit-namorados.jpg`,
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

// Campanha especial — Kit Dia dos Namorados
export const campaigns: Campaign[] = [
  {
    id: "c1",
    title: "Kit Dia dos Namorados",
    subtitle: "Campanha Especial",
    description:
      "Surpreenda quem você ama com um kit completo Ogochi. Boné, Carteira e Sandália — o presente perfeito para quem tem estilo.",
    image: `${P}/kit-namorados.jpg`,
    cta: "Ver Kit",
    ctaHref: "/bolsas-acessorios",
    season: "Especial",
    year: 2025,
    featured: true,
  },
  {
    id: "c2",
    title: "Verão com Estilo",
    subtitle: "Coleção Feminina",
    description:
      "O look de praia perfeito chegou. Maiô e saída longa Sauê — sofisticação do mar à areia.",
    image: `${P}/maio-saida-saue.jpg`,
    cta: "Ver Coleção",
    ctaHref: "/moda-feminina",
    season: "Verão",
    year: 2025,
    featured: false,
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
