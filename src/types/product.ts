export type ProductCategory =
  | "vestidos"
  | "blusas"
  | "calças-femininas"
  | "saias"
  | "camisas"
  | "calças-masculinas"
  | "blazers"
  | "bolsas"
  | "acessórios"
  | "cintos"
  | "biquinis"
  | "maiôs"
  | "saídas-de-praia"
  | "moda-praia"
  | "calçados"
  | "infantil";

export type ProductGender = "feminino" | "masculino" | "unissex" | "infantil-menino" | "infantil-menina";

export interface ProductImage {
  url: string;
  alt: string;
}

export interface Product {
  id: string;
  name: string;
  slug: string;
  description: string;
  price: number;
  originalPrice?: number;
  category: ProductCategory;
  gender: ProductGender;
  images: ProductImage[];
  sizes: string[];
  colors: string[];
  inStock: boolean;
  featured: boolean;
  isNew: boolean;
  tags: string[];
}

export interface Look {
  id: string;
  name: string;
  description: string;
  image: string;
  productIds: string[];
}

export interface Campaign {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  image: string;
  cta: string;
  ctaHref: string;
  season: string;
  year: number;
  featured: boolean;
}
