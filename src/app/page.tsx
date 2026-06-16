import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Sparkles, Shield, Star } from "lucide-react";
import { ProductCard } from "@/components/shared/ProductCard";
import { ShopTheLook } from "@/components/shared/ShopTheLook";
import { SectionHeader } from "@/components/shared/SectionHeader";
import { AnimatedSection } from "@/components/shared/AnimatedSection";
import { getFeaturedProducts, campaigns, looks, getLookProducts } from "@/lib/data";
import { siteConfig } from "@/config/site";

const BASE = "https://images.unsplash.com";

const categories = [
  {
    label: "Moda Feminina",
    href: "/moda-feminina",
    image: `${BASE}/photo-1469334031218-e382a71b716b?w=600&h=800&fit=crop`,
    description: "Peças que celebram a feminilidade",
  },
  {
    label: "Moda Masculina",
    href: "/moda-masculina",
    image: `${BASE}/photo-1617196034183-421b4040ed20?w=600&h=800&fit=crop`,
    description: "Estilo e sofisticação masculina",
  },
  {
    label: "Bolsas",
    href: "/bolsas-acessorios",
    image: `${BASE}/photo-1548036328-c9fa89d128fa?w=600&h=800&fit=crop`,
    description: "Peças que completam o look",
  },
  {
    label: "Acessórios",
    href: "/bolsas-acessorios",
    image: `${BASE}/photo-1511499767150-a48a237f0083?w=600&h=800&fit=crop`,
    description: "Detalhes que fazem a diferença",
  },
];

const pillars = [
  {
    icon: Star,
    title: "Exclusividade",
    text: "Peças selecionadas com rigor. Nossa curadoria garante que você vista o que poucos têm.",
  },
  {
    icon: Shield,
    title: "Qualidade",
    text: "Materiais nobres, acabamentos impecáveis. Cada peça é uma expressão de excelência.",
  },
  {
    icon: Sparkles,
    title: "Elegância",
    text: "Design atemporal que transcende tendências. Vista-se para ser lembrada.",
  },
];

export default function HomePage() {
  const featured = getFeaturedProducts().slice(0, 8);
  const featuredCampaign = campaigns.find((c) => c.featured);

  return (
    <>
      {/* ── HERO ─────────────────────────────────────────────────── */}
      <section className="relative h-screen min-h-[680px] flex items-center justify-center overflow-hidden">
        <Image
          src={`${BASE}/photo-1558769132-cb1aea458c5e?w=1920&h=1080&fit=crop&q=90`}
          alt="Boutique Eva Milhomem"
          fill
          priority
          sizes="100vw"
          className="object-cover scale-105"
          style={{ objectPosition: "center 30%" }}
        />
        {/* Overlay em camadas para profundidade */}
        <div className="absolute inset-0 bg-gradient-to-b from-noir/70 via-noir/50 to-noir/80" />
        <div className="absolute inset-0 bg-gradient-to-r from-noir/30 via-transparent to-noir/30" />

        <div className="relative z-10 text-center px-5 max-w-5xl mx-auto">
          {/* Ornamento superior */}
          <div className="flex items-center justify-center gap-4 mb-8">
            <div className="h-px w-16 bg-gradient-to-r from-transparent to-gold/60" />
            <span className="text-gold text-[10px] font-sans font-semibold uppercase tracking-[0.45em]">
              Boutique Premium
            </span>
            <div className="h-px w-16 bg-gradient-to-l from-transparent to-gold/60" />
          </div>

          <h1 className="font-heading font-light text-6xl sm:text-7xl md:text-8xl lg:text-9xl text-off-white leading-[0.9] tracking-tight mb-8">
            Elegância
            <span className="block italic text-gradient-gold mt-1">que conta</span>
            <span className="block font-light text-off-white/90">histórias.</span>
          </h1>

          <p className="font-sans text-off-white/60 text-base md:text-lg max-w-lg mx-auto mb-12 leading-relaxed tracking-wide">
            Moda premium com peças exclusivas para quem valoriza sofisticação e individualidade.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/moda-feminina"
              className="inline-flex items-center gap-3 bg-gold text-noir font-sans font-semibold text-[11px] uppercase tracking-[0.2em] px-9 py-4 hover:bg-gold-light transition-all duration-300 shadow-lg shadow-gold/20"
            >
              Explorar Coleção
              <ArrowRight size={13} />
            </Link>
            <Link
              href={siteConfig.links.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 border border-off-white/30 text-off-white font-sans font-semibold text-[11px] uppercase tracking-[0.2em] px-9 py-4 hover:border-gold hover:text-gold transition-all duration-300"
            >
              Falar com Consultora
            </Link>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3">
          <span className="text-off-white/30 text-[9px] uppercase tracking-[0.4em]">Descobrir</span>
          <div className="relative w-px h-14 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-b from-gold/60 to-transparent animate-[slideDown_2s_ease-in-out_infinite]" />
          </div>
        </div>
      </section>

      {/* ── BANNER INSTITUCIONAL ─────────────────────────────────── */}
      <section className="bg-noir py-5">
        <div className="container-boutique">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-16 text-center">
            {[
              { label: "Curadoria exclusiva" },
              { label: "◆" },
              { label: "Atendimento personalizado" },
              { label: "◆" },
              { label: "Marcas premium selecionadas" },
            ].map((item, i) => (
              <span
                key={i}
                className={
                  item.label === "◆"
                    ? "text-gold/30 hidden sm:block text-xs"
                    : "text-off-white/50 text-[10px] uppercase tracking-[0.25em] font-sans font-medium"
                }
              >
                {item.label}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ── CATEGORIAS ───────────────────────────────────────────── */}
      <section className="section-padding bg-off-white">
        <div className="container-boutique">
          <AnimatedSection>
            <SectionHeader
              eyebrow="Nossas Coleções"
              title="Encontre seu estilo"
              subtitle="Cada categoria é uma porta para o mundo da elegância Eva Milhomem."
            />
          </AnimatedSection>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-5 mt-16">
            {categories.map((cat, i) => (
              <AnimatedSection key={cat.href + cat.label} delay={i * 0.1}>
                <Link href={cat.href} className="group block">
                  <div className="relative overflow-hidden aspect-[3/4] bg-secondary">
                    <Image
                      src={cat.image}
                      alt={cat.label}
                      fill
                      sizes="(max-width: 640px) 50vw, 25vw"
                      className="object-cover transition-transform duration-700 group-hover:scale-108"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-noir/85 via-noir/20 to-transparent" />

                    {/* Hover overlay sutil */}
                    <div className="absolute inset-0 bg-gold/0 group-hover:bg-gold/8 transition-colors duration-500" />

                    <div className="absolute bottom-0 left-0 right-0 p-5">
                      <h3 className="font-heading text-off-white font-semibold text-lg md:text-xl leading-tight">
                        {cat.label}
                      </h3>
                      <p className="text-off-white/55 text-xs mt-1 font-sans">{cat.description}</p>
                      <span className="inline-flex items-center gap-1.5 text-gold text-[10px] font-sans font-semibold uppercase tracking-[0.2em] mt-3 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-1 group-hover:translate-y-0">
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
      <section className="section-padding" style={{ background: "#f8f5f1" }}>
        <div className="container-boutique">
          <AnimatedSection className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-16">
            <SectionHeader
              eyebrow="Seleção da Semana"
              title="Peças em Destaque"
              subtitle="Nossa curadoria das peças mais desejadas da temporada."
              centered={false}
            />
            <Link
              href="/moda-feminina"
              className="inline-flex items-center gap-2 text-[11px] font-sans font-semibold uppercase tracking-[0.2em] text-noir border-b border-noir/40 hover:text-gold hover:border-gold transition-colors duration-300 pb-0.5 whitespace-nowrap"
            >
              Ver tudo <ArrowRight size={11} />
            </Link>
          </AnimatedSection>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-5 gap-y-12">
            {featured.map((product, i) => (
              <AnimatedSection key={product.id} delay={i * 0.05}>
                <ProductCard product={product} />
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ── MONTE O LOOK ─────────────────────────────────────────── */}
      <section className="section-padding" style={{ background: "#ede8e2" }}>
        <div className="container-boutique">
          <AnimatedSection>
            <SectionHeader
              eyebrow="Shop the Look"
              title="Monte o look completo"
              subtitle="Escolha um look, clique em 'Quero este look' e fale direto com a gente pelo WhatsApp."
            />
          </AnimatedSection>

          <div className="mt-16 space-y-8">
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
        <section className="relative h-[520px] md:h-[640px] overflow-hidden">
          <Image
            src={featuredCampaign.image}
            alt={featuredCampaign.title}
            fill
            sizes="100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-noir/80 via-noir/50 to-transparent" />
          <div className="relative z-10 h-full flex items-center">
            <div className="container-boutique">
              <AnimatedSection direction="left" className="max-w-xl">
                <div className="flex items-center gap-4 mb-6">
                  <div className="h-px w-10 bg-gold/60" />
                  <p className="text-gold text-[10px] font-sans font-semibold uppercase tracking-[0.35em]">
                    {featuredCampaign.subtitle}
                  </p>
                </div>
                <h2 className="font-heading font-light text-5xl md:text-6xl lg:text-7xl text-off-white leading-tight mb-6">
                  {featuredCampaign.title}
                </h2>
                <p className="text-off-white/65 text-base font-sans leading-relaxed mb-10 max-w-sm">
                  {featuredCampaign.description}
                </p>
                <Link
                  href={featuredCampaign.ctaHref}
                  className="inline-flex items-center gap-3 bg-gold text-noir font-sans font-semibold text-[11px] uppercase tracking-[0.2em] px-8 py-4 hover:bg-gold-light transition-colors duration-300 shadow-lg shadow-gold/20"
                >
                  {featuredCampaign.cta} <ArrowRight size={13} />
                </Link>
              </AnimatedSection>
            </div>
          </div>
        </section>
      )}

      {/* ── POR QUE EVA MILHOMEM ─────────────────────────────────── */}
      <section className="section-padding bg-noir relative overflow-hidden">
        {/* Ornamento de fundo */}
        <div className="absolute inset-0 opacity-[0.03]" style={{
          backgroundImage: "radial-gradient(circle at 50% 50%, #c9a96e 0%, transparent 70%)"
        }} />

        <div className="container-boutique relative">
          <AnimatedSection>
            <SectionHeader
              eyebrow="Nossa Essência"
              title="Por que Eva Milhomem?"
              light
            />
          </AnimatedSection>

          <div className="grid md:grid-cols-3 gap-6 mt-16">
            {pillars.map((pillar, i) => {
              const Icon = pillar.icon;
              return (
                <AnimatedSection key={pillar.title} delay={i * 0.15}>
                  <div className="group p-10 border border-white/8 hover:border-gold/30 transition-all duration-500 relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-gold/0 to-gold/0 group-hover:from-gold/5 group-hover:to-transparent transition-all duration-500" />
                    <div className="relative">
                      <div className="inline-flex items-center justify-center w-11 h-11 mb-7">
                        <Icon size={22} className="text-gold" />
                      </div>
                      <h3 className="font-heading text-2xl font-semibold text-off-white mb-4">
                        {pillar.title}
                      </h3>
                      <p className="text-white/50 text-sm font-sans leading-relaxed">{pillar.text}</p>
                    </div>
                  </div>
                </AnimatedSection>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── CTA FINAL ────────────────────────────────────────────── */}
      <section className="relative py-32 overflow-hidden" style={{ background: "linear-gradient(160deg, #f8f5f1 0%, #e8dccb 100%)" }}>
        {/* Ornamento dourado */}
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent" />

        <div className="container-boutique text-center relative">
          <AnimatedSection>
            <div className="flex items-center justify-center gap-4 mb-8">
              <div className="h-px w-12 bg-gradient-to-r from-transparent to-gold/50" />
              <span className="eyebrow">Atendimento Exclusivo</span>
              <div className="h-px w-12 bg-gradient-to-l from-transparent to-gold/50" />
            </div>
            <h2 className="font-heading font-light text-5xl md:text-6xl text-noir mb-5 leading-tight">
              Precisa de ajuda para<br />
              <span className="italic text-gradient-gold">escolher a peça perfeita?</span>
            </h2>
            <p className="text-muted-foreground font-sans text-base max-w-md mx-auto mb-10 leading-relaxed">
              Nossa equipe de consultoras está pronta para te atender com exclusividade.
            </p>
            <a
              href={`https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent("Olá! Gostaria de uma consultoria de moda personalizada.")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-noir text-off-white font-sans font-semibold text-[11px] uppercase tracking-[0.2em] px-10 py-5 hover:bg-noir-soft transition-all duration-300 shadow-xl shadow-noir/20"
            >
              Falar com Consultora
              <ArrowRight size={13} />
            </a>
          </AnimatedSection>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent" />
      </section>
    </>
  );
}
