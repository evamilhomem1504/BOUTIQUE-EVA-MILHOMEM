"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ShoppingBag, Eye } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { formatPrice, calculateDiscount } from "@/lib/utils";
import { cn } from "@/lib/utils";
import type { Product } from "@/types/product";

interface ProductCardProps {
  product: Product;
  className?: string;
}

export function ProductCard({ product, className }: ProductCardProps) {
  const discount =
    product.originalPrice
      ? calculateDiscount(product.originalPrice, product.price)
      : null;

  return (
    <motion.div
      whileHover={{ y: -4 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
      className={cn("group relative flex flex-col", className)}
    >
      {/* Image container */}
      <div className="relative overflow-hidden bg-secondary aspect-[3/4] rounded-sm">
        <Image
          src={product.images[0].url}
          alt={product.images[0].alt}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
          className="object-cover transition-transform duration-700 group-hover:scale-105"
        />

        {/* Badges */}
        <div className="absolute top-3 left-3 flex flex-col gap-1.5 z-10">
          {product.isNew && (
            <Badge className="bg-noir text-off-white text-[10px] font-semibold tracking-wider rounded-none px-2 py-1">
              NOVO
            </Badge>
          )}
          {discount && (
            <Badge className="bg-gold text-noir text-[10px] font-semibold tracking-wider rounded-none px-2 py-1">
              -{discount}%
            </Badge>
          )}
          {!product.inStock && (
            <Badge variant="secondary" className="text-[10px] rounded-none px-2 py-1">
              ESGOTADO
            </Badge>
          )}
        </div>

        {/* Hover overlay */}
        <div className="absolute inset-0 bg-noir/0 group-hover:bg-noir/30 transition-colors duration-300 z-10" />

        {/* Action buttons */}
        <div className="absolute bottom-0 left-0 right-0 p-3 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out z-20 flex gap-2">
          <button
            className="flex-1 flex items-center justify-center gap-2 bg-off-white text-noir text-xs font-semibold tracking-wider uppercase py-2.5 hover:bg-gold transition-colors duration-200"
            onClick={(e) => e.preventDefault()}
          >
            <ShoppingBag size={14} />
            Adicionar
          </button>
          <Link
            href={`/produto/${product.slug}`}
            className="flex items-center justify-center w-10 bg-off-white text-noir hover:bg-gold transition-colors duration-200"
          >
            <Eye size={14} />
          </Link>
        </div>
      </div>

      {/* Info */}
      <div className="mt-3 flex flex-col gap-1">
        <p className="text-[10px] uppercase tracking-widest text-gold font-medium">
          {product.category.replace("-", " ")}
        </p>
        <Link
          href={`/produto/${product.slug}`}
          className="font-heading text-sm font-semibold text-noir hover:text-gold transition-colors line-clamp-1"
        >
          {product.name}
        </Link>
        <div className="flex items-center gap-2">
          {product.price > 0 ? (
            <>
              <span className="text-sm font-semibold text-noir">
                {formatPrice(product.price)}
              </span>
              {product.originalPrice && (
                <span className="text-xs text-muted-foreground line-through">
                  {formatPrice(product.originalPrice)}
                </span>
              )}
            </>
          ) : (
            <span className="text-sm font-semibold text-gold uppercase tracking-wider">
              Consulte
            </span>
          )}
        </div>
      </div>
    </motion.div>
  );
}
