import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { ProductCard } from "@/components/shared/ProductCard";
import { SectionHeader } from "@/components/shared/SectionHeader";
import { AnimatedSection } from "@/components/shared/AnimatedSection";
import { products } from "@/lib/data";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "Moda Feminina",
  description: "Vestidos, blusas, calças e saias com elegância e exclusividade.",
};

const feminineProducts = products.filter((p) => p.gender === "feminino");

const BASE = "https://images.unsplash.com";

export default function ModaFemininaPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative h-[55vh] min-h-[400px] flex items-end overflow-hidden">
        <Image
          src={`${BASE}/photo-1483985988355-763728e1935b?w=1400&h=700&fit=crop`}
          alt="Moda Feminina Eva Milhomem"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-noir via-noir/40 to-transparent" />
        <div className="relative z-10 container-boutique pb-14">
          <p className="text-gold text-xs font-semibold uppercase tracking-[0.3em] mb-3">
            Coleção
          </p>
          <h1 className="font-heading text-5xl md:text-6xl font-bold text-off-white leading-tight">
            Moda Feminina
          </h1>
          <p className="text-off-white/70 mt-3 text-lg max-w-lg">
            Peças que celebram a feminilidade com sofisticação e personalidade.
          </p>
        </div>
      </section>

      {/* Filtros decorativos */}
      <section className="border-b border-border bg-off-white">
        <div className="container-boutique py-4">
          <div className="flex items-center gap-6 overflow-x-auto scrollbar-none">
            {["Todas", "Vestidos", "Blusas", "Calças", "Saias"].map((f, i) => (
              <button
                key={f}
                className={`text-xs font-semibold uppercase tracking-widest whitespace-nowrap pb-1 transition-colors ${
                  i === 0
                    ? "text-gold border-b border-gold"
                    : "text-muted-foreground hover:text-noir"
                }`}
              >
                {f}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Grid de produtos */}
      <section className="section-padding">
        <div className="container-boutique">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-5 gap-y-12">
            {feminineProducts.map((product, i) => (
              <AnimatedSection key={product.id} delay={i * 0.05}>
                <ProductCard product={product} />
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA WhatsApp */}
      <section className="py-16 bg-noir">
        <div className="container-boutique text-center">
          <AnimatedSection>
            <SectionHeader
              eyebrow="Atendimento"
              title="Não encontrou o que procurava?"
              subtitle="Fale com nossas consultoras de moda e encontre a peça ideal para você."
              light
            />
            <a
              href={`https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent("Olá! Procuro uma peça feminina específica.")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 mt-8 bg-gold text-noir font-bold text-xs uppercase tracking-widest px-8 py-4 hover:bg-gold-light transition-colors"
            >
              Consultoria via WhatsApp <ArrowRight size={14} />
            </a>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
