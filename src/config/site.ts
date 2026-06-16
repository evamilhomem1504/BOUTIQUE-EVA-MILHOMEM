export const siteConfig = {
  name: "Boutique Eva Milhomem",
  shortName: "Eva Milhomem",
  description:
    "Moda premium com peças exclusivas que celebram a elegância e a individualidade.",
  url: "https://boutiquaevamilhomem.com.br",
  ogImage: "/og-image.jpg",
  links: {
    instagram: "https://instagram.com/boutiquaevamilhomem",
    whatsapp: "https://wa.me/5511999999999",
  },
  whatsappNumber: "5511999999999",
  contact: {
    email: "contato@evamilhomem.com.br",
    phone: "+55 (11) 9 9999-9999",
    address: "Rua Oscar Freire, 900 — Jardins, São Paulo – SP",
    hours: "Seg–Sex 10h–20h | Sáb 10h–18h",
  },
  nav: [
    { label: "Moda Feminina", href: "/moda-feminina" },
    { label: "Moda Masculina", href: "/moda-masculina" },
    { label: "Bolsas & Acessórios", href: "/bolsas-acessorios" },
    { label: "Campanhas", href: "/campanhas" },
    { label: "Sobre", href: "/sobre" },
    { label: "Contato", href: "/contato" },
  ],
} as const;

export type SiteConfig = typeof siteConfig;
