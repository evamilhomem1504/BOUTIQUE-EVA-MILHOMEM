import type { Metadata } from "next";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { ProductCard } from "@/components/shared/ProductCard";
import { SectionHeader } from "@/components/shared/SectionHeader";
import { AnimatedSection } from "@/components/shared/AnimatedSection";
import { getBagsAndAccessories } from "@/lib/data";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "Acessórios",
  description: "Bonés, cintos, carteiras e acessórios premium.",
};

export default function AcessoriosPage() {
  const items = getBagsAndAccessories();

  return (
    <>
      {/* Hero duplo */}
      <section className="relative h-[55vh] min-h-[400px] flex items-end overflow-hidden pt-20">
        <Image
          src={`/products/bone-cinto-carteira.webp`}
          alt="Acessórios"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-noir via-noir/50 to-transparent" />
        <div className="relative z-10 container-boutique pb-14">
          <p className="text-gold text-xs font-semibold uppercase tracking-[0.3em] mb-3">
            Curadoria
          </p>
          <h1 className="font-heading text-5xl md:text-6xl font-light text-off-white leading-tight">
            Acessórios
          </h1>
          <p className="text-off-white/70 mt-3 text-base max-w-lg">
            Os detalhes que elevam qualquer look — bonés, cintos, carteiras e muito mais.
          </p>
        </div>
      </section>

      {/* Categorias de acessório */}
      <section className="border-b border-border bg-off-white">
        <div className="container-boutique py-4">
          <div className="flex items-center gap-6 overflow-x-auto">
            {["Todos", "Bonés", "Cintos", "Carteiras", "Chinelos"].map((f, i) => (
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

      {/* Grid */}
      <section className="section-padding bg-off-white">
        <div className="container-boutique">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-5 gap-y-12">
            {items.map((product, i) => (
              <AnimatedSection key={product.id} delay={i * 0.06}>
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
              subtitle="Fale com nossas consultoras e encontre o acessório ideal para o seu estilo."
              light
            />
            <a
              href={`https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent("Olá! Procuro um acessório específico.")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 mt-8 bg-gold text-noir font-bold text-xs uppercase tracking-widest px-8 py-4 hover:bg-gold-light transition-colors"
            >
              Consultar via WhatsApp <ArrowRight size={14} />
            </a>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
