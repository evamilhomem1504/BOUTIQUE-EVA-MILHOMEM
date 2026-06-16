export const siteConfig = {
  name: "Boutique Eva Milhomem",
  shortName: "Eva Milhomem",
  description:
    "Moda feminina premium com peças exclusivas que celebram a elegância e a individualidade.",
  url: "https://boutiquaevamilhomem.com.br",
  ogImage: "/og-image.jpg",
  links: {
    instagram: "https://instagram.com/boutiquaevamilhomem",
    whatsapp: "https://wa.me/5511999999999",
  },
  contact: {
    email: "contato@boutiquaevamilhomem.com.br",
    phone: "+55 (11) 9 9999-9999",
    address: "Rua das Flores, 123 — São Paulo, SP",
  },
  nav: [
    { label: "Início", href: "/" },
    { label: "Coleções", href: "/colecoes" },
    { label: "Produtos", href: "/produtos" },
    { label: "Sobre", href: "/sobre" },
    { label: "Contato", href: "/contato" },
  ],
} as const;

export type SiteConfig = typeof siteConfig;
