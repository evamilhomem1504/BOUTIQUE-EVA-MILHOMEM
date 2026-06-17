import type { Metadata } from "next";
import { ArrowRight } from "lucide-react";
import { ProductCard } from "@/components/shared/ProductCard";
import { SectionHeader } from "@/components/shared/SectionHeader";
import { AnimatedSection } from "@/components/shared/AnimatedSection";
import { getCalcadosFemininos } from "@/lib/data";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "Calçados Femininos",
  description: "Rasteirinhas e sandálias premium Santa Lolla com corrente dourada — Boutique Eva Milhomem.",
};

export default function CalcadosFemininosPage() {
  const calcados = getCalcadosFemininos();

  return (
    <>
      {/* ── HERO ─────────────────────────────────────────────────── */}
      <section className="relative bg-noir pt-28 pb-16 md:pt-36 md:pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_60%_at_50%_100%,rgba(201,169,110,0.08)_0%,transparent_70%)]" />
        <div className="container-boutique relative z-10">
          <div className="flex items-center gap-4 mb-5">
            <div className="h-px w-10 bg-gold/60" />
            <p className="eyebrow">Coleção</p>
          </div>
          <h1 className="font-heading font-light text-5xl md:text-7xl text-off-white leading-tight mb-4">
            Calçados <span className="italic text-gradient-gold">Femininos</span>
          </h1>
          <p className="text-off-white/50 font-sans text-base max-w-md">
            Santa Lolla com corrente dourada — o detalhe que transforma qualquer look.
          </p>
        </div>
        <div className="h-px bg-gradient-to-r from-transparent via-gold/20 to-transparent mt-14" />
      </section>

      {/* ── MARCAS FILTER ────────────────────────────────────────── */}
      <section className="bg-off-white border-b border-border">
        <div className="container-boutique py-4">
          <div className="flex items-center gap-8 overflow-x-auto scrollbar-none">
            {["Todos", "Santa Lolla", "Rasteirinhas", "Sandálias"].map((f, i) => (
              <button
                key={f}
                className={`text-[11px] font-semibold uppercase tracking-[0.2em] whitespace-nowrap pb-1 transition-colors ${
                  i === 0
                    ? "text-gold border-b border-gold"
                    : "text-muted-foreground hover:text-noir"
                }`}
              >
                {f}
              </button>
            ))}
            <div className="ml-auto shrink-0 hidden md:block">
              <a
                href={`https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent("Olá! Gostaria de ver os calçados disponíveis.")}`}
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

      {/* ── GRID DE PRODUTOS ─────────────────────────────────────── */}
      <section className="py-16 md:py-24 bg-off-white">
        <div className="container-boutique">
          {calcados.length > 0 ? (
            <>
              <AnimatedSection className="mb-12">
                <SectionHeader
                  eyebrow={`${calcados.length} peças disponíveis`}
                  title="Santa Lolla"
                  subtitle="Corrente dourada, palmilha matelassê — conforto e elegância em cada passo."
                  centered={false}
                />
              </AnimatedSection>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-x-4 gap-y-10 md:gap-x-6 md:gap-y-14">
                {calcados.map((product, i) => (
                  <AnimatedSection key={product.id} delay={i * 0.08}>
                    <ProductCard product={product} />
                  </AnimatedSection>
                ))}
              </div>
            </>
          ) : (
            <div className="text-center py-24">
              <p className="font-heading text-3xl text-noir mb-4">Em breve</p>
              <p className="text-muted-foreground">Novidades chegando. Fale conosco pelo WhatsApp.</p>
            </div>
          )}
        </div>
      </section>

      {/* ── CTA WHATSAPP ─────────────────────────────────────────── */}
      <section className="py-20 bg-noir">
        <div className="container-boutique text-center">
          <AnimatedSection>
            <div className="flex items-center justify-center gap-4 mb-6">
              <div className="h-px w-12 bg-gold/30" />
              <span className="eyebrow">Atendimento Exclusivo</span>
              <div className="h-px w-12 bg-gold/30" />
            </div>
            <h2 className="font-heading font-light text-4xl md:text-5xl text-off-white mb-4">
              Quer ver mais opções?
            </h2>
            <p className="text-white/40 font-sans text-base max-w-xs mx-auto mb-8">
              Temos outros modelos e numerações disponíveis na loja.
            </p>
            <a
              href={`https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent("Olá! Gostaria de ver os calçados Santa Lolla disponíveis.")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 border border-gold/50 text-gold hover:bg-gold hover:text-noir font-sans font-semibold text-[11px] uppercase tracking-[0.2em] px-10 py-5 transition-all duration-300"
            >
              Falar pelo WhatsApp <ArrowRight size={13} />
            </a>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
