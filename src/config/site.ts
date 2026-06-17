export const siteConfig = {
  name: "Boutique Eva Milhomem",
  shortName: "Eva Milhomem",
  description:
    "Moda premium com peças exclusivas que celebram a elegância e a individualidade.",
  url: "https://boutiquaevamilhomem.com.br",
  ogImage: "/og-image.jpg",
  links: {
    instagram: "https://instagram.com/evamilhomem_",
    whatsapp: "https://wa.me/5594991703949",
  },
  whatsappNumber: "5594991703949",
  contact: {
    email: "evamilhomem1504@gmail.com",
    phone: "(94) 99170-3949",
    address: "Av. Fernanda Guilhon, 800 — Conceição do Araguaia, PA",
    hours: "Seg–Sex 08h–18h | Sáb 08h–13h",
  },
  nav: [
    { label: "Moda Feminina", href: "/moda-feminina" },
    { label: "Moda Masculina", href: "/moda-masculina" },
    { label: "Moda Praia", href: "/moda-praia" },
    { label: "Calçados", href: "/calcados-femininos" },
    { label: "Bolsas", href: "/bolsas" },
    { label: "Moda Infantil", href: "/moda-infantil" },
    { label: "Bolsas & Acessórios", href: "/bolsas-acessorios" },
    { label: "Campanhas", href: "/campanhas" },
    { label: "Sobre", href: "/sobre" },
    { label: "Contato", href: "/contato" },
  ],
} as const;

export type SiteConfig = typeof siteConfig;
