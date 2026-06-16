export type ProductCategory =
  | "vestidos"
  | "blusas"
  | "calças"
  | "saias"
  | "acessórios"
  | "bolsas";

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
  images: ProductImage[];
  sizes: string[];
  colors: string[];
  inStock: boolean;
  featured: boolean;
  isNew: boolean;
  tags: string[];
  createdAt: string;
}
