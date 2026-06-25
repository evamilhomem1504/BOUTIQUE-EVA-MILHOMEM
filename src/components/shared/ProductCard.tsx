"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { motion } from "framer-motion";
import { MessageCircle, Eye } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { formatPrice, calculateDiscount } from "@/lib/utils";
import { cn } from "@/lib/utils";
import type { Product } from "@/types/product";
import { siteConfig } from "@/config/site";

interface ProductCardProps {
  product: Product;
  className?: string;
}

export function ProductCard({ product, className }: ProductCardProps) {
  const hasOptions = product.options && product.options.length > 0;
  const [selectedOption, setSelectedOption] = useState(hasOptions ? 0 : -1);

  const activePrice = hasOptions
    ? product.options![selectedOption].price
    : product.price;

  const discount = product.originalPrice
    ? calculateDiscount(product.originalPrice, product.price)
    : null;

  function getWhatsAppLink() {
    const optLabel = hasOptions ? ` — ${product.options![selectedOption].label}` : "";
    const priceStr = activePrice > 0 ? ` (R$ ${activePrice.toFixed(2).replace(".", ",")})` : "";
    const msg = `Olá! Tenho interesse no produto: ${product.name}${optLabel}${priceStr}`;
    return `https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent(msg)}`;
  }

  const productHref = `/produto/${product.slug}`;

  return (
    <motion.div
      whileHover={{ y: -4 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
      className={cn("group relative flex flex-col", className)}
    >
      {/* Imagem — link para o produto (clicável em qualquer dispositivo) */}
      <Link href={productHref} className="relative block overflow-hidden bg-off-white aspect-[3/4]">
        <Image
          src={product.images[0].url}
          alt={product.images[0].alt}
          fill
          sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
          className="object-contain transition-transform duration-500 group-hover:scale-[1.04]"
          style={{ padding: "10px" }}
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

        {/* Overlay de hover no desktop — botão "Ver produto" */}
        <div className="absolute inset-0 bg-noir/0 group-hover:bg-noir/30 transition-colors duration-300 z-10 hidden md:block" />
        <div className="absolute bottom-0 left-0 right-0 p-3 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out z-20 hidden md:flex gap-2">
          <span className="flex-1 flex items-center justify-center gap-2 bg-off-white text-noir text-xs font-semibold tracking-wider uppercase py-2.5">
            <Eye size={14} />
            Ver produto
          </span>
        </div>
      </Link>

      {/* Info */}
      <div className="mt-3 flex flex-col gap-1.5">
        <p className="text-[10px] uppercase tracking-widest text-gold font-medium">
          {product.category.replace(/-/g, " ")}
        </p>

        <Link
          href={productHref}
          className="font-heading text-sm font-semibold text-noir hover:text-gold transition-colors line-clamp-2 leading-snug"
        >
          {product.name}
        </Link>

        {/* Opções de variante */}
        {hasOptions && (
          <div className="flex flex-wrap gap-1.5 mt-0.5">
            {product.options!.map((opt, i) => (
              <button
                key={opt.label}
                onClick={() => setSelectedOption(i)}
                className={cn(
                  "text-[10px] font-semibold uppercase tracking-wide px-2.5 py-1 border transition-all duration-200",
                  selectedOption === i
                    ? "border-noir bg-noir text-off-white"
                    : "border-border text-muted-foreground hover:border-noir hover:text-noir"
                )}
              >
                {opt.label}
              </button>
            ))}
          </div>
        )}

        {/* Preço */}
        <div className="flex flex-col gap-0.5">
          {activePrice > 0 ? (
            <>
              <div className="flex items-center gap-2">
                <span className="text-sm font-semibold text-noir">
                  {formatPrice(activePrice)}
                </span>
                {!hasOptions && product.originalPrice && (
                  <span className="text-xs text-muted-foreground line-through">
                    {formatPrice(product.originalPrice)}
                  </span>
                )}
              </div>
              <span className="text-[11px] text-muted-foreground">
                10x de {formatPrice(activePrice / 10)} no cartão ou crediário
              </span>
            </>
          ) : (
            <span className="text-sm font-semibold text-gold uppercase tracking-wider">
              Consulte
            </span>
          )}
        </div>

        {/* Botão "Tenho Interesse" — sempre visível em mobile, hover no desktop */}
        <a
          href={getWhatsAppLink()}
          target="_blank"
          rel="noopener noreferrer"
          onClick={(e) => e.stopPropagation()}
          className="mt-2 flex items-center justify-center gap-2 bg-noir text-off-white text-[11px] font-semibold tracking-wider uppercase py-2.5 hover:bg-gold hover:text-noir transition-colors duration-200 md:opacity-0 md:group-hover:opacity-100 md:translate-y-1 md:group-hover:translate-y-0 md:transition-all"
        >
          <MessageCircle size={13} />
          Quero essa peça
        </a>
      </div>
    </motion.div>
  );
}
