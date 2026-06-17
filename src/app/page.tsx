import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { ProductCard } from "@/components/shared/ProductCard";
import { ShopTheLook } from "@/components/shared/ShopTheLook";
import { SectionHeader } from "@/components/shared/SectionHeader";
import { AnimatedSection } from "@/components/shared/AnimatedSection";
import { getFeaturedProducts, campaigns, looks, getLookProducts } from "@/lib/data";
import { siteConfig } from "@/config/site";

const HERO_IMG = "/products/hero-principal.jpg";

type Category = { label: string; href: string; image: string; description: string; objectPosition?: string };
const categories: Category[] = [
  {
    label: "Moda Feminina",
    href: "/moda-feminina",
    image: "/products/capa-feminina.jpg",
    description: "Peças que celebram a feminilidade",
    objectPosition: "center 20%",
  },
  {
    label: "Moda Masculina",
    href: "/moda-masculina",
    image: `/products/polo-masculina.png`,
    description: "Estilo e sofisticação masculina",
  },
  {
    label: "Moda Praia",
    href: "/moda-praia",
    image: "/products/capa-modapraia.jpg",
    description: "Verão com elegância",
    objectPosition: "center 30%",
  },
  {
    label: "Acessórios",
    href: "/bolsas-acessorios",
    image: `/products/bone-cinto-carteira.webp`,
    description: "Detalhes que fazem a diferença",
  },
];

export default function HomePage() {
  const featured = getFeaturedProducts().slice(0, 6);
  const featuredCampaign = campaigns.find((c) => c.featured);

  return (
    <>
      {/* ── HERO ─────────────────────────────────────────────────── */}
      <section className="relative min-h-screen flex items-end overflow-hidden bg-noir">
        {/* Foto full-bleed — cobre toda a tela */}
        <Image
          src={HERO_IMG}
          alt="Boutique Eva Milhomem"
          fill
          priority
          sizes="100vw"
          className="object-cover object-[center_15%]"
        />

        {/* Gradiente esquerda escuro → transparente (preserva a modelo) */}
        <div className="absolute inset-0 bg-gradient-to-r from-noir/10 via-transparent to-noir/90" />
        {/* Gradiente base para legibilidade mobile */}
        <div className="absolute inset-0 bg-gradient-to-t from-noir/80 via-noir/20 to-transparent" />

        {/* Conteúdo — alinhado à direita em desktop, centralizado em mobile */}
        <div className="relative z-10 w-full container-boutique pb-20 md:pb-28 pt-32">
          <div className="md:ml-auto md:max-w-lg lg:max-w-xl">
            <div className="flex items-center gap-4 mb-8">
              <div className="h-px w-12 bg-gold/50" />
              <span className="text-gold text-[10px] font-sans font-semibold uppercase tracking-[0.45em]">
                Conceição do Araguaia — Pará
              </span>
            </div>

            <h1
              className="font-heading font-light text-off-white leading-[0.88] tracking-tight mb-8"
              style={{ fontSize: "clamp(3.2rem, 6.5vw, 7.5rem)" }}
            >
              Elegância
              <span className="block italic text-gradient-gold">que conta</span>
              histórias.
            </h1>

            <p className="text-white/50 font-sans text-base max-w-sm mb-12 leading-relaxed">
              Moda premium com peças exclusivas para quem valoriza sofisticação e individualidade.
            </p>

            <div className="flex flex-col sm:flex-row items-start gap-4">
              <Link
                href="/moda-feminina"
                className="inline-flex items-center gap-3 bg-gold text-noir font-sans font-semibold text-[11px] uppercase tracking-[0.2em] px-10 py-4 hover:bg-gold-light transition-colors duration-300"
              >
                Explorar Coleção <ArrowRight size={13} />
              </Link>
              <Link
                href="/moda-praia"
                className="inline-flex items-center gap-3 border border-white/25 text-white/70 font-sans font-semibold text-[11px] uppercase tracking-[0.2em] px-10 py-4 hover:border-gold hover:text-gold transition-all duration-300"
              >
                Moda Praia
              </Link>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-10">
          <span className="text-white/20 text-[9px] uppercase tracking-[0.4em]">Scroll</span>
          <div className="w-px h-10 bg-gradient-to-b from-gold/40 to-transparent animate-pulse" />
        </div>
        </div>
      </section>

      {/* ── STRIP DIFERENCIADORES ────────────────────────────────── */}
      <section className="bg-noir border-t border-white/5 border-b border-gold/10 py-5">
        <div className="container-boutique">
          <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-16">
            {["Curadoria exclusiva", "Marcas premium", "Atendimento personalizado", "Conceição do Araguaia — PA"].map((item, i) => (
              <span key={i} className="text-white/30 text-[10px] uppercase tracking-[0.3em] font-sans">
                {item}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ── CATEGORIAS ───────────────────────────────────────────── */}
      <section className="bg-noir py-20 md:py-28">
        <div className="container-boutique">
          <AnimatedSection className="text-center mb-14">
            <p className="eyebrow mb-3">Nossas Coleções</p>
            <h2 className="font-heading font-light text-4xl md:text-5xl lg:text-6xl text-off-white leading-tight">
              Encontre seu estilo
            </h2>
          </AnimatedSection>
        </div>

        {/* Grid de categorias — borda a borda dentro do container */}
        <div className="container-boutique">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-2 md:gap-3">
            {categories.map((cat, i) => (
              <AnimatedSection key={cat.href} delay={i * 0.08}>
                <Link href={cat.href} className="group block">
                  <div className="relative overflow-hidden bg-noir-soft" style={{ height: "clamp(280px, 45vw, 600px)" }}>
                    <Image
                      src={cat.image}
                      alt={cat.label}
                      fill
                      sizes="(max-width: 640px) 50vw, 25vw"
                      className="object-cover opacity-55 transition-all duration-700 group-hover:opacity-80 group-hover:scale-105"
                      style={{ objectPosition: cat.objectPosition ?? "center top" }}
                    />
                    {/* Gradiente base */}
                    <div className="absolute inset-0 bg-gradient-to-t from-noir/90 via-noir/20 to-transparent" />
                    {/* Borda dourada no hover */}
                    <div className="absolute inset-0 border border-transparent group-hover:border-gold/40 transition-colors duration-500" />

                    <div className="absolute bottom-0 left-0 right-0 p-5 md:p-6">
                      <h3 className="font-heading text-off-white font-semibold leading-tight"
                        style={{ fontSize: "clamp(1.1rem, 2.5vw, 1.5rem)" }}>
                        {cat.label}
                      </h3>
                      <p className="text-white/50 text-xs font-sans mt-1 hidden sm:block">
                        {cat.description}
                      </p>
                      <span className="inline-flex items-center gap-1.5 text-gold text-[10px] font-sans font-semibold uppercase tracking-[0.2em] mt-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        Ver coleção <ArrowRight size={10} />
                      </span>
                    </div>
                  </div>
                </Link>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ── PEÇAS EM DESTAQUE ────────────────────────────────────── */}
      <section className="py-20 md:py-28 bg-off-white">
        <div className="container-boutique">
          <AnimatedSection className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-14">
            <SectionHeader
              eyebrow="Destaques"
              title="Peças Selecionadas"
              subtitle="Nossa curadoria das peças mais desejadas da temporada."
              centered={false}
            />
            <Link
              href="/moda-feminina"
              className="shrink-0 inline-flex items-center gap-2 text-[11px] font-sans font-semibold uppercase tracking-[0.18em] text-noir border-b border-noir/30 hover:text-gold hover:border-gold transition-colors duration-300 pb-0.5"
            >
              Ver tudo <ArrowRight size={11} />
            </Link>
          </AnimatedSection>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-x-4 gap-y-10 md:gap-x-6 md:gap-y-14">
            {featured.map((product, i) => (
              <AnimatedSection key={product.id} delay={i * 0.07}>
                <ProductCard product={product} />
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ── MONTE O LOOK ─────────────────────────────────────────── */}
      <section className="py-20 md:py-28 bg-noir">
        <div className="container-boutique">
          <AnimatedSection>
            <SectionHeader
              eyebrow="Shop the Look"
              title="Monte o look completo"
              subtitle="Escolha um look e fale direto com a gente pelo WhatsApp."
              light
            />
          </AnimatedSection>

          <div className="mt-14 space-y-4 md:space-y-6">
            {looks.map((look, i) => (
              <AnimatedSection key={look.id} delay={i * 0.1}>
                <ShopTheLook look={look} products={getLookProducts(look)} />
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ── CAMPAIGN BANNER ──────────────────────────────────────── */}
      {featuredCampaign && (
        <section className="relative h-[480px] md:h-[580px] overflow-hidden">
          <Image
            src={featuredCampaign.image}
            alt={featuredCampaign.title}
            fill
            sizes="100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-noir/92 via-noir/55 to-transparent" />
          <div className="relative z-10 h-full flex items-center">
            <div className="container-boutique">
              <AnimatedSection direction="left" className="max-w-lg">
                <div className="flex items-center gap-4 mb-5">
                  <div className="h-px w-8 bg-gold/60" />
                  <p className="eyebrow">{featuredCampaign.subtitle}</p>
                </div>
                <h2 className="font-heading font-light text-off-white leading-tight mb-5"
                  style={{ fontSize: "clamp(2.5rem, 5vw, 4rem)" }}>
                  {featuredCampaign.title}
                </h2>
                <p className="text-white/55 font-sans text-base leading-relaxed mb-8 max-w-sm">
                  {featuredCampaign.description}
                </p>
                <Link
                  href={featuredCampaign.ctaHref}
                  className="inline-flex items-center gap-3 bg-gold text-noir font-sans font-semibold text-[11px] uppercase tracking-[0.2em] px-8 py-4 hover:bg-gold-light transition-colors duration-300"
                >
                  {featuredCampaign.cta} <ArrowRight size={13} />
                </Link>
              </AnimatedSection>
            </div>
          </div>
        </section>
      )}

      {/* ── CTA FINAL ────────────────────────────────────────────── */}
      <section className="bg-noir py-28 md:py-36 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_50%_50%,rgba(201,169,110,0.05)_0%,transparent_70%)]" />
        <div className="container-boutique text-center relative">
          <AnimatedSection>
            <div className="flex items-center justify-center gap-4 mb-8">
              <div className="h-px w-12 bg-gold/30" />
              <span className="eyebrow">Atendimento Exclusivo</span>
              <div className="h-px w-12 bg-gold/30" />
            </div>
            <h2 className="font-heading font-light text-off-white mb-5 leading-tight"
              style={{ fontSize: "clamp(2.5rem, 5vw, 4rem)" }}>
              Precisa de ajuda para<br />
              <span className="italic text-gradient-gold">escolher?</span>
            </h2>
            <p className="text-white/40 font-sans text-base max-w-xs mx-auto mb-10 leading-relaxed">
              Nossa equipe está pronta para te atender com exclusividade.
            </p>
            <a
              href={`https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent("Olá! Gostaria de uma consultoria de moda personalizada.")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 border border-gold/50 text-gold hover:bg-gold hover:text-noir font-sans font-semibold text-[11px] uppercase tracking-[0.2em] px-10 py-5 transition-all duration-300"
            >
              Falar com Consultora <ArrowRight size={13} />
            </a>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
