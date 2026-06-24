import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Tag } from "lucide-react";
import { ProductCard } from "@/components/shared/ProductCard";
import { AnimatedSection } from "@/components/shared/AnimatedSection";
import { getFeaturedProducts, getNewProducts } from "@/lib/data";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "Promoções e Novidades",
  description:
    "As melhores ofertas e lançamentos da Boutique Eva Milhomem em Conceição do Araguaia, PA. Peças premium com preços especiais.",
};

export default function PromocoesPage() {
  const newArrivals = getNewProducts();
  const featured = getFeaturedProducts().slice(0, 8);

  return (
    <>
      {/* Hero */}
      <section className="bg-noir pt-28 md:pt-36 pb-16 border-b border-gold/10">
        <div className="container-boutique">
          <AnimatedSection>
            <div className="flex items-center gap-3 mb-4">
              <Tag size={14} className="text-gold" />
              <span className="text-gold text-[10px] font-semibold uppercase tracking-[0.4em]">
                Ofertas especiais
              </span>
            </div>
            <h1
              className="font-heading font-light text-off-white leading-tight mb-4"
              style={{ fontSize: "clamp(2.5rem, 6vw, 4.5rem)" }}
            >
              Promoções &amp; Novidades
            </h1>
            <p className="text-white/40 font-sans text-base max-w-lg leading-relaxed">
              Peças selecionadas com preços especiais e os últimos lançamentos da boutique.
              Aproveite enquanto durar o estoque.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Recém chegou */}
      {newArrivals.length > 0 && (
        <section className="py-16 md:py-24 bg-noir">
          <div className="container-boutique">
            <AnimatedSection className="mb-10">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-1.5 h-1.5 rounded-full bg-gold animate-pulse" />
                <span className="text-gold text-[10px] font-semibold uppercase tracking-[0.4em]">
                  Acabou de chegar
                </span>
              </div>
              <h2 className="font-heading font-light text-3xl md:text-4xl text-off-white">
                Novidades
              </h2>
            </AnimatedSection>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-4 gap-y-10 md:gap-x-6">
              {newArrivals.map((product, i) => (
                <AnimatedSection key={product.id} delay={i * 0.06}>
                  <ProductCard product={product} />
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Divider */}
      <div className="h-px bg-gradient-to-r from-transparent via-gold/20 to-transparent" />

      {/* Destaques */}
      {featured.length > 0 && (
        <section className="py-16 md:py-24 bg-off-white">
          <div className="container-boutique">
            <AnimatedSection className="mb-10">
              <span className="text-gold text-[10px] font-semibold uppercase tracking-[0.4em] block mb-2">
                Peças selecionadas
              </span>
              <h2 className="font-heading font-light text-3xl md:text-4xl text-noir">
                Mais procuradas
              </h2>
            </AnimatedSection>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-4 gap-y-10 md:gap-x-6">
              {featured.map((product, i) => (
                <AnimatedSection key={product.id} delay={i * 0.06}>
                  <ProductCard product={product} />
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA WhatsApp */}
      <section className="py-16 bg-noir border-t border-gold/10">
        <div className="container-boutique text-center">
          <AnimatedSection>
            <p className="text-white/30 text-[10px] uppercase tracking-[0.4em] mb-4">
              Atendimento exclusivo
            </p>
            <h2 className="font-heading font-light text-3xl text-off-white mb-3">
              Quer saber das próximas promoções?
            </h2>
            <p className="text-white/40 text-sm mb-8">
              Entre no nosso Grupo VIP e receba novidades em primeira mão.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
              <a
                href="https://chat.whatsapp.com/CTEVwywfGQACVEyHjZllE4"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 bg-gold text-noir font-semibold text-[11px] uppercase tracking-[0.2em] px-8 py-4 hover:bg-gold-light transition-colors duration-300"
              >
                Entrar no Grupo VIP <ArrowRight size={13} />
              </a>
              <a
                href={`https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent("Olá! Quero saber sobre promoções e novidades da boutique.")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 border border-white/20 text-white/60 font-semibold text-[11px] uppercase tracking-[0.2em] px-8 py-4 hover:border-gold hover:text-gold transition-all duration-300"
              >
                Falar no WhatsApp
              </a>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
