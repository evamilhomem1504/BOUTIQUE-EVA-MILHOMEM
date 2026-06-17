import type { Metadata } from "next";
import { ArrowRight } from "lucide-react";
import { ProductCard } from "@/components/shared/ProductCard";
import { ShopTheLook } from "@/components/shared/ShopTheLook";
import { SectionHeader } from "@/components/shared/SectionHeader";
import { AnimatedSection } from "@/components/shared/AnimatedSection";
import { getBeachwearProducts, looks, getLookProducts } from "@/lib/data";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "Moda Praia",
  description: "Biquínis, maiôs e saídas de praia premium. Sofisticação do mar à areia — Boutique Eva Milhomem.",
};

const subcategories = [
  { label: "Todos", value: "todos" },
  { label: "Biquínis", value: "biquinis" },
  { label: "Maiôs", value: "maiôs" },
  { label: "Saídas de Praia", value: "saídas-de-praia" },
];

const beachwearLooks = looks.filter((l) => l.id === "l1");

export default function ModaPraiaPage() {
  const products = getBeachwearProducts();
  const biquinis = products.filter((p) => p.category === "biquinis");
  const maios = products.filter((p) => p.category === "maiôs");
  const saidas = products.filter((p) => p.category === "saídas-de-praia");

  return (
    <>
      {/* ── HERO ─────────────────────────────────────────────────── */}
      <section className="relative h-[55vh] min-h-[400px] flex items-end overflow-hidden pt-20">
        {/* Fundo degradê — substitua por foto real quando tiver */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#0a3d5c] via-[#0e6b8a] to-[#1a9ab8]" />
        <div className="absolute inset-0 bg-gradient-to-t from-noir/80 via-noir/30 to-transparent" />

        {/* Ornamento de ondas */}
        <div className="absolute inset-0 opacity-10">
          <svg viewBox="0 0 1440 320" className="absolute bottom-0 w-full" fill="white">
            <path d="M0,192L48,186.7C96,181,192,171,288,181.3C384,192,480,224,576,218.7C672,213,768,171,864,165.3C960,160,1056,192,1152,197.3C1248,203,1344,181,1392,170.7L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z" />
          </svg>
        </div>

        <div className="relative z-10 container-boutique pb-14">
          <div className="flex items-center gap-4 mb-4">
            <div className="h-px w-10 bg-gold/60" />
            <p className="eyebrow">Coleção Verão</p>
          </div>
          <h1 className="font-heading font-light text-5xl md:text-7xl text-off-white leading-tight">
            Moda <span className="italic text-gradient-gold">Praia</span>
          </h1>
          <p className="text-off-white/60 font-sans text-base mt-3 max-w-md">
            Biquínis, maiôs e saídas premium — sofisticação do mar à areia.
          </p>
        </div>
      </section>

      {/* ── FILTROS / SUBCATEGORIAS ───────────────────────────────── */}
      <section className="sticky top-16 md:top-[88px] z-20 bg-off-white/95 backdrop-blur-sm border-b border-border">
        <div className="container-boutique">
          <div className="flex items-center gap-8 overflow-x-auto scrollbar-none py-4">
            {subcategories.map((sub) => (
              <a
                key={sub.value}
                href={`#${sub.value}`}
                className="shrink-0 text-[11px] font-sans font-semibold uppercase tracking-[0.2em] text-muted-foreground hover:text-gold transition-colors duration-200 pb-1 border-b border-transparent hover:border-gold"
              >
                {sub.label}
              </a>
            ))}
            <div className="ml-auto shrink-0 hidden md:block">
              <a
                href={`https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent("Olá! Gostaria de ver as peças de moda praia disponíveis.")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-[11px] font-sans font-semibold uppercase tracking-[0.2em] text-gold hover:text-gold-dark transition-colors"
              >
                Consultar estoque <ArrowRight size={11} />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ── TODOS OS PRODUTOS ─────────────────────────────────────── */}
      {products.length > 0 && (
        <section id="todos" className="section-padding bg-off-white">
          <div className="container-boutique">
            <AnimatedSection>
              <SectionHeader
                eyebrow={`${products.length} peças disponíveis`}
                title="Coleção Completa"
                centered={false}
              />
            </AnimatedSection>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-5 gap-y-12 mt-12">
              {products.map((product, i) => (
                <AnimatedSection key={product.id} delay={i * 0.06}>
                  <ProductCard product={product} />
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ── BIQUÍNIS ─────────────────────────────────────────────── */}
      {biquinis.length > 0 && (
        <section id="biquinis" className="section-padding" style={{ background: "#ede8e2" }}>
          <div className="container-boutique">
            <AnimatedSection>
              <SectionHeader
                eyebrow="Moda Praia"
                title="Biquínis"
                subtitle="Estilo e confiança para arrasar na praia."
                centered={false}
              />
            </AnimatedSection>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-5 gap-y-12 mt-12">
              {biquinis.map((product, i) => (
                <AnimatedSection key={product.id} delay={i * 0.06}>
                  <ProductCard product={product} />
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ── MAIÔS ────────────────────────────────────────────────── */}
      {maios.length > 0 && (
        <section id="maiôs" className="section-padding bg-off-white">
          <div className="container-boutique">
            <AnimatedSection>
              <SectionHeader
                eyebrow="Moda Praia"
                title="Maiôs"
                subtitle="Elegância e sofisticação em cada detalhe."
                centered={false}
              />
            </AnimatedSection>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-5 gap-y-12 mt-12">
              {maios.map((product, i) => (
                <AnimatedSection key={product.id} delay={i * 0.06}>
                  <ProductCard product={product} />
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ── SAÍDAS DE PRAIA ──────────────────────────────────────── */}
      {saidas.length > 0 && (
        <section id="saídas-de-praia" className="section-padding" style={{ background: "#ede8e2" }}>
          <div className="container-boutique">
            <AnimatedSection>
              <SectionHeader
                eyebrow="Moda Praia"
                title="Saídas de Praia"
                subtitle="Complete o look com peças que prolongam o estilo além da areia."
                centered={false}
              />
            </AnimatedSection>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-5 gap-y-12 mt-12">
              {saidas.map((product, i) => (
                <AnimatedSection key={product.id} delay={i * 0.06}>
                  <ProductCard product={product} />
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ── MONTE O LOOK DE PRAIA ────────────────────────────────── */}
      {beachwearLooks.length > 0 && (
        <section className="section-padding bg-noir">
          <div className="container-boutique">
            <AnimatedSection>
              <SectionHeader
                eyebrow="Shop the Look"
                title="Monte o look de praia"
                subtitle="Combine as peças e peça tudo pelo WhatsApp com um clique."
                light
              />
            </AnimatedSection>
            <div className="mt-14 space-y-8">
              {beachwearLooks.map((look, i) => (
                <AnimatedSection key={look.id} delay={i * 0.1}>
                  <ShopTheLook look={look} products={getLookProducts(look)} />
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ── CTA WHATSAPP ─────────────────────────────────────────── */}
      <section className="py-24" style={{ background: "linear-gradient(160deg, #f8f5f1 0%, #e8dccb 100%)" }}>
        <div className="container-boutique text-center">
          <AnimatedSection>
            <div className="flex items-center justify-center gap-4 mb-6">
              <div className="h-px w-12 bg-gradient-to-r from-transparent to-gold/50" />
              <span className="eyebrow">Atendimento Exclusivo</span>
              <div className="h-px w-12 bg-gradient-to-l from-transparent to-gold/50" />
            </div>
            <h2 className="font-heading font-light text-4xl md:text-5xl text-noir mb-4">
              Não encontrou o que procura?
            </h2>
            <p className="text-muted-foreground font-sans text-base max-w-sm mx-auto mb-8">
              Fale com a gente pelo WhatsApp — temos mais peças disponíveis na loja.
            </p>
            <a
              href={`https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent("Olá! Estou procurando peças de moda praia. Podem me ajudar?")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-noir text-off-white font-sans font-semibold text-[11px] uppercase tracking-[0.2em] px-10 py-5 hover:bg-noir-soft transition-all duration-300 shadow-xl shadow-noir/20"
            >
              Falar pelo WhatsApp
              <ArrowRight size={13} />
            </a>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
