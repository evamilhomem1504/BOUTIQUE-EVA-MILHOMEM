import type { Metadata } from "next";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { ProductCard } from "@/components/shared/ProductCard";
import { SectionHeader } from "@/components/shared/SectionHeader";
import { AnimatedSection } from "@/components/shared/AnimatedSection";
import { getBagsAndAccessories } from "@/lib/data";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "Bolsas & Acessórios",
  description: "Bolsas de couro, clutches, cintos e acessórios premium.",
};

const BASE = "https://images.unsplash.com";

export default function BolsasAcessoriosPage() {
  const items = getBagsAndAccessories();

  return (
    <>
      {/* Hero duplo */}
      <section className="relative h-[55vh] min-h-[400px] flex items-end overflow-hidden pt-20">
        <Image
          src={`${BASE}/photo-1584917865442-de89df76afd3?w=1400&h=700&fit=crop`}
          alt="Bolsas & Acessórios"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-noir via-noir/50 to-transparent" />
        <div className="relative z-10 container-boutique pb-14">
          <p className="text-gold text-xs font-semibold uppercase tracking-[0.3em] mb-3">
            Curadoria
          </p>
          <h1 className="font-heading text-5xl md:text-6xl font-bold text-off-white leading-tight">
            Bolsas &<br />Acessórios
          </h1>
          <p className="text-off-white/70 mt-3 text-lg max-w-lg">
            A peça certa completa o look. Nossa seleção de bolsas e acessórios de luxo.
          </p>
        </div>
      </section>

      {/* Categorias de acessório */}
      <section className="border-b border-border bg-off-white">
        <div className="container-boutique py-4">
          <div className="flex items-center gap-6 overflow-x-auto">
            {["Todos", "Bolsas", "Clutches", "Cintos", "Óculos", "Lenços"].map((f, i) => (
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
      <section className="section-padding">
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

      {/* Editorial */}
      <section className="section-padding gradient-champagne">
        <div className="container-boutique">
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <AnimatedSection direction="left">
              <SectionHeader
                eyebrow="It Bags"
                title="A bolsa que define o look"
                subtitle="Mais do que um acessório, uma declaração. Nossa coleção de bolsas de couro é um investimento em elegância que dura anos."
                centered={false}
              />
              <div className="mt-8 flex flex-col sm:flex-row gap-4">
                <a
                  href={`https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent("Olá! Tenho interesse em bolsas e acessórios.")}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-noir text-off-white font-bold text-xs uppercase tracking-widest px-7 py-4 hover:bg-noir/80 transition-colors"
                >
                  Consultar WhatsApp <ArrowRight size={14} />
                </a>
              </div>
            </AnimatedSection>

            <AnimatedSection direction="right">
              <div className="grid grid-cols-2 gap-3">
                <div className="relative aspect-square overflow-hidden">
                  <Image
                    src={`${BASE}/photo-1548036328-c9fa89d128fa?w=400&h=400&fit=crop`}
                    alt="Bolsa Tote"
                    fill
                    sizes="(max-width: 768px) 50vw, 25vw"
                    className="object-cover"
                  />
                </div>
                <div className="relative aspect-square overflow-hidden mt-6">
                  <Image
                    src={`${BASE}/photo-1591561954557-26941169b49e?w=400&h=400&fit=crop`}
                    alt="Clutch"
                    fill
                    sizes="(max-width: 768px) 50vw, 25vw"
                    className="object-cover"
                  />
                </div>
                <div className="relative aspect-square overflow-hidden -mt-6">
                  <Image
                    src={`${BASE}/photo-1566150905458-1bf1fc113f0d?w=400&h=400&fit=crop`}
                    alt="Bucket Bag"
                    fill
                    sizes="(max-width: 768px) 50vw, 25vw"
                    className="object-cover"
                  />
                </div>
                <div className="relative aspect-square overflow-hidden">
                  <Image
                    src={`${BASE}/photo-1553062407-98eeb64c6a62?w=400&h=400&fit=crop`}
                    alt="Cinto"
                    fill
                    sizes="(max-width: 768px) 50vw, 25vw"
                    className="object-cover"
                  />
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>
    </>
  );
}
