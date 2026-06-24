"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { MessageCircle, Plus } from "lucide-react";
import { formatPrice } from "@/lib/utils";
import { siteConfig } from "@/config/site";
import type { Look, Product } from "@/types/product";

interface ShopTheLookProps {
  look: Look;
  products: Product[];
}

function buildWhatsAppMessage(look: Look, products: Product[]) {
  const lines = products.map((p) => {
    const price = p.price > 0 ? formatPrice(p.price) : "consultar preço";
    return `• ${p.name} — ${price}`;
  });

  const total = products.reduce((sum, p) => sum + p.price, 0);
  const totalLine = total > 0 ? `\nTotal estimado: ${formatPrice(total)}` : "";

  return encodeURIComponent(
    `Olá! Tenho interesse no *${look.name}*:\n${lines.join("\n")}${totalLine}\n\nPoderia me passar a disponibilidade?`
  );
}

export function ShopTheLook({ look, products }: ShopTheLookProps) {
  const total = products.reduce((sum, p) => sum + p.price, 0);
  const whatsappUrl = `https://wa.me/${siteConfig.whatsappNumber}?text=${buildWhatsAppMessage(look, products)}`;

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="group grid md:grid-cols-2 gap-0 border border-border overflow-hidden"
    >
      {/* Foto do look */}
      <div className="relative aspect-[3/4] md:aspect-auto md:min-h-[420px] overflow-hidden bg-secondary">
        <Image
          src={look.image}
          alt={look.name}
          fill
          sizes="(max-width: 768px) 100vw, 50vw"
          className="object-cover object-center transition-transform duration-700 group-hover:scale-[1.03]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-noir/60 via-transparent to-transparent md:hidden" />
      </div>

      {/* Detalhes do look */}
      <div className="flex flex-col justify-between p-8 bg-off-white">
        <div>
          <p className="text-gold text-[10px] font-semibold uppercase tracking-widest mb-2">
            Monte o look
          </p>
          <h3 className="font-heading text-2xl md:text-3xl font-bold text-noir mb-3">
            {look.name}
          </h3>
          <p className="text-muted-foreground text-sm leading-relaxed mb-8">
            {look.description}
          </p>

          {/* Lista de produtos */}
          <ul className="space-y-4">
            {products.map((product, i) => (
              <li key={product.id} className="flex items-center gap-4">
                <div className="relative w-14 h-14 shrink-0 overflow-hidden bg-off-white border border-border/30">
                  <Image
                    src={product.images[0].url}
                    alt={product.images[0].alt}
                    fill
                    sizes="56px"
                    className="object-contain"
                    style={{ padding: "4px" }}
                  />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-semibold text-noir truncate">{product.name}</p>
                  <p className="text-xs text-muted-foreground mt-0.5">
                    {product.price > 0 ? formatPrice(product.price) : "Consulte o preço"}
                  </p>
                </div>
                {i < products.length - 1 && (
                  <Plus size={14} className="text-gold shrink-0" />
                )}
              </li>
            ))}
          </ul>
        </div>

        {/* Total + CTA */}
        <div className="mt-8 pt-6 border-t border-border">
          {total > 0 && (
            <div className="flex justify-between items-center mb-5">
              <span className="text-xs uppercase tracking-widest font-semibold text-muted-foreground">
                Total estimado
              </span>
              <span className="font-heading text-xl font-bold text-noir">
                {formatPrice(total)}
              </span>
            </div>
          )}
          <motion.a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="flex items-center justify-center gap-2 w-full bg-noir text-off-white font-bold text-xs uppercase tracking-widest py-4 hover:bg-gold hover:text-noir transition-colors duration-300"
          >
            <MessageCircle size={15} />
            Quero este look
          </motion.a>
          <p className="text-center text-[10px] text-muted-foreground mt-3">
            Você será redirecionada para o WhatsApp
          </p>
        </div>
      </div>
    </motion.div>
  );
}
