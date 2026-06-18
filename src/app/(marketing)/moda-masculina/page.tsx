import type { Metadata } from "next";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { ProductCard } from "@/components/shared/ProductCard";
import { SectionHeader } from "@/components/shared/SectionHeader";
import { AnimatedSection } from "@/components/shared/AnimatedSection";
import { products } from "@/lib/data";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "Moda Masculina",
  description: "Blazers, camisas e alfaiataria premium para o homem moderno.",
};

const masculineProducts = products.filter((p) => p.gender === "masculino");

export default function ModaMasculinaPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative h-[55vh] min-h-[400px] flex items-end overflow-hidden">
        <Image
          src="/products/polo-masculina.png"
          alt="Moda Masculina Eva Milhomem"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-noir via-noir/40 to-transparent" />
        <div className="relative z-10 container-boutique pb-14">
          <p className="text-gold text-xs font-semibold uppercase tracking-[0.3em] mb-3">
            Coleção
          </p>
          <h1 className="font-heading text-5xl md:text-6xl font-light text-off-white leading-tight">
            Moda Masculina
          </h1>
          <p className="text-off-white/70 mt-3 text-lg max-w-lg">
            Alfaiataria contemporânea para o homem que valoriza estilo e substância.
          </p>
        </div>
      </section>

      {/* Filtros */}
      <section className="border-b border-border bg-off-white">
        <div className="container-boutique py-4">
          <div className="flex items-center gap-6 overflow-x-auto">
            {["Todos", "Blazers", "Camisas", "Calças", "Ternos"].map((f, i) => (
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
            {masculineProducts.map((product, i) => (
              <AnimatedSection key={product.id} delay={i * 0.05}>
                <ProductCard product={product} />
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Destaques de alfaiataria */}
      <section className="section-padding bg-noir">
        <div className="container-boutique">
          <div className="flex flex-col lg:flex-row items-center gap-14">
            <AnimatedSection direction="left" className="flex-1">
              <p className="text-gold text-xs font-semibold uppercase tracking-[0.3em] mb-4">
                Alfaiataria
              </p>
              <h2 className="font-heading text-4xl md:text-5xl font-bold text-off-white leading-tight mb-5">
                O terno certo<br />muda tudo.
              </h2>
              <p className="text-white/60 text-base leading-relaxed mb-8 max-w-md">
                Nossa curadoria de alfaiataria combina tradição italiana com design contemporâneo.
                Cada peça é escolhida para durar décadas com elegância.
              </p>
              <a
                href={`https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent("Olá! Gostaria de uma consultoria de alfaiataria masculina.")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-gold text-noir font-bold text-xs uppercase tracking-widest px-8 py-4 hover:bg-gold-light transition-colors"
              >
                Agendar Consultoria <ArrowRight size={14} />
              </a>
            </AnimatedSection>

            <AnimatedSection direction="right" className="flex-1 w-full">
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src="/products/look-masculino-verde.webp"
                  alt="Look Masculino Eva Milhomem"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover object-center"
                />
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>
    </>
  );
}
