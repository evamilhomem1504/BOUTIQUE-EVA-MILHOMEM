import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Heart, Award, Users, Gem } from "lucide-react";
import { AnimatedSection } from "@/components/shared/AnimatedSection";
import { SectionHeader } from "@/components/shared/SectionHeader";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "Sobre | Boutique Eva Milhomem",
  description:
    "Conheça a história da Boutique Eva Milhomem — há mais de 10 anos levando moda premium com curadoria exclusiva para Conceição do Araguaia e todo o Brasil.",
};

const values = [
  {
    icon: Gem,
    title: "Exclusividade",
    text: "Cada peça é cuidadosamente escolhida por Eva — só entra no catálogo o que tem qualidade, caimento e identidade.",
  },
  {
    icon: Award,
    title: "Qualidade",
    text: "Trabalhamos com marcas reconhecidas como Santa Lolla, Ogochi, Acostamento e Sauê, porque nossos clientes merecem o melhor.",
  },
  {
    icon: Heart,
    title: "Propósito",
    text: "Acreditamos que se vestir bem não é vaidade — é respeito por si mesmo. Ajudamos cada cliente a encontrar isso.",
  },
  {
    icon: Users,
    title: "Relacionamento",
    text: "Mais do que vender, criamos vínculos. Nossa consultoria pelo WhatsApp é pessoal, humana e sem pressa.",
  },
];

export default function SobrePage() {
  return (
    <>
      {/* ── HERO ─────────────────────────────────────────────────── */}
      <section className="relative h-[60vh] min-h-[450px] flex items-end overflow-hidden pt-20">
        <Image
          src="/products/hero-principal.jpg"
          alt="Boutique Eva Milhomem"
          fill
          priority
          sizes="100vw"
          className="object-cover"
          style={{ objectPosition: "60% top" }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-noir via-noir/50 to-transparent" />
        <div className="relative z-10 container-boutique pb-14">
          <p className="text-gold text-xs font-semibold uppercase tracking-[0.3em] mb-3">
            Nossa História
          </p>
          <h1 className="font-heading text-5xl md:text-6xl font-light text-off-white leading-tight">
            Moda com alma,<br />nascida no Araguaia
          </h1>
        </div>
      </section>

      {/* ── HISTÓRIA ─────────────────────────────────────────────── */}
      <section className="py-20 md:py-28">
        <div className="container-boutique">
          <div className="grid md:grid-cols-2 gap-14 items-center">
            <AnimatedSection direction="left">
              <p className="text-gold text-xs font-semibold uppercase tracking-[0.3em] mb-4">
                Eva Milhomem
              </p>
              <h2 className="font-heading text-4xl font-light text-noir leading-tight mb-6">
                Há mais de 10 anos vestindo Conceição do Araguaia
              </h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  A Boutique Eva Milhomem nasceu de uma convicção simples: as mulheres e os homens de Conceição do Araguaia merecem ter acesso a moda de verdade — com qualidade, curadoria e atendimento de boutique.
                </p>
                <p>
                  Desde o início, Eva construiu a boutique com suas próprias mãos, escolhendo cada peça com cuidado e conhecendo pelo nome cada cliente que entrava pela porta. Esse jeito pessoal de atender nunca mudou.
                </p>
                <p>
                  Hoje, com mais de uma década de história, a boutique leva moda premium para Conceição e para todo o Brasil — pelo WhatsApp, pelo site, e com o mesmo carinho de sempre.
                </p>
              </div>
            </AnimatedSection>

            <AnimatedSection direction="right">
              <div className="relative">
                {/* Placeholder para foto da Eva ou da loja — substituir depois */}
                <div className="relative aspect-[4/5] overflow-hidden bg-noir-soft">
                  <Image
                    src="/products/capa-feminina.jpg"
                    alt="Boutique Eva Milhomem — Conceição do Araguaia"
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover"
                    style={{ objectPosition: "center 20%" }}
                  />
                </div>
                <div className="absolute -bottom-5 -left-5 bg-gold px-6 py-4">
                  <p className="font-heading text-3xl font-bold text-noir">+10</p>
                  <p className="text-noir/70 text-xs uppercase tracking-widest font-semibold">Anos de história</p>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* ── MISSÃO ───────────────────────────────────────────────── */}
      <section className="bg-noir py-20 md:py-28">
        <div className="container-boutique">
          <div className="max-w-3xl mx-auto text-center">
            <AnimatedSection>
              <div className="flex items-center justify-center gap-4 mb-8">
                <div className="h-px w-12 bg-gold/30" />
                <span className="text-gold text-xs font-semibold uppercase tracking-[0.3em]">Nossa missão</span>
                <div className="h-px w-12 bg-gold/30" />
              </div>
              <blockquote
                className="font-heading font-light text-off-white leading-snug"
                style={{ fontSize: "clamp(1.8rem, 4vw, 3rem)" }}
              >
                "Ajudar cada pessoa a se ver bonita, a se sentir confiante e a sair de casa sabendo que está do seu jeito."
              </blockquote>
              <p className="text-white/40 font-sans text-sm mt-6 uppercase tracking-widest">
                Eva Milhomem — fundadora
              </p>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* ── VALORES ──────────────────────────────────────────────── */}
      <section className="py-20 md:py-28 bg-off-white">
        <div className="container-boutique">
          <AnimatedSection>
            <SectionHeader
              eyebrow="Nossos Pilares"
              title="O que nos define"
              subtitle="Os valores que guiam cada escolha, cada peça e cada atendimento da Boutique Eva Milhomem."
            />
          </AnimatedSection>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-14">
            {values.map((v, i) => {
              const Icon = v.icon;
              return (
                <AnimatedSection key={v.title} delay={i * 0.1}>
                  <div className="bg-white p-7 border border-border hover:border-gold transition-colors group">
                    <div className="w-10 h-10 rounded-full bg-gold/10 flex items-center justify-center mb-5 group-hover:bg-gold/20 transition-colors">
                      <Icon size={18} className="text-gold" />
                    </div>
                    <h3 className="font-heading text-lg font-semibold text-noir mb-2">{v.title}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">{v.text}</p>
                  </div>
                </AnimatedSection>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── MARCAS ───────────────────────────────────────────────── */}
      <section className="py-16 border-t border-gold/10 bg-off-white">
        <div className="container-boutique">
          <AnimatedSection>
            <p className="text-center text-[10px] uppercase tracking-[0.4em] text-muted-foreground mb-10">
              Marcas que você encontra aqui
            </p>
            <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-12">
              {["Santa Lolla", "Ogochi", "Acostamento", "Sauê", "RDSOL", "FAVLAB", "BanaBana", "Tigor T. Tigre"].map((brand) => (
                <span
                  key={brand}
                  className="font-heading text-base font-light text-noir/40 hover:text-gold transition-colors duration-300 uppercase tracking-widest"
                >
                  {brand}
                </span>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ── CTA ──────────────────────────────────────────────────── */}
      <section className="bg-noir py-24">
        <div className="container-boutique text-center">
          <AnimatedSection>
            <div className="flex items-center justify-center gap-4 mb-8">
              <div className="h-px w-12 bg-gold/30" />
              <span className="text-gold text-xs font-semibold uppercase tracking-[0.3em]">Vem conhecer</span>
              <div className="h-px w-12 bg-gold/30" />
            </div>
            <h2
              className="font-heading font-light text-off-white leading-tight mb-4"
              style={{ fontSize: "clamp(2rem, 4vw, 3.5rem)" }}
            >
              Estamos em Conceição do Araguaia<br />
              <span className="italic text-gradient-gold">e entregamos para todo o Brasil</span>
            </h2>
            <p className="text-white/40 font-sans text-base max-w-sm mx-auto mt-4 mb-10 leading-relaxed">
              Av. Fernanda Guilhon, 800 — Conceição do Araguaia, PA<br />
              Seg–Sex 08h–18h | Sáb 08h–13h
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href={`https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent("Olá! Quero conhecer a boutique.")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-3 bg-gold text-noir font-sans font-semibold text-[11px] uppercase tracking-[0.2em] px-10 py-4 hover:bg-gold-light transition-colors duration-300"
              >
                Falar pelo WhatsApp <ArrowRight size={13} />
              </a>
              <Link
                href="/moda-feminina"
                className="inline-flex items-center justify-center gap-3 border border-white/20 text-white/60 font-sans font-semibold text-[11px] uppercase tracking-[0.2em] px-8 py-4 hover:border-gold hover:text-gold transition-all duration-300"
              >
                Ver Coleções
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
