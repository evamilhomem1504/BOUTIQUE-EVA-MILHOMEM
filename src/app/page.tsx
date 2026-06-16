import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Star, Shield, Sparkles } from "lucide-react";
import { ProductCard } from "@/components/shared/ProductCard";
import { SectionHeader } from "@/components/shared/SectionHeader";
import { AnimatedSection } from "@/components/shared/AnimatedSection";
import { getFeaturedProducts, campaigns } from "@/lib/data";
import { siteConfig } from "@/config/site";

const BASE = "https://images.unsplash.com";

const categories = [
  {
    label: "Moda Feminina",
    href: "/moda-feminina",
    image: `${BASE}/photo-1469334031218-e382a71b716b?w=600&h=800&fit=crop`,
    description: "Vestidos, blusas, saias e mais",
  },
  {
    label: "Moda Masculina",
    href: "/moda-masculina",
    image: `${BASE}/photo-1617196034183-421b4040ed20?w=600&h=800&fit=crop`,
    description: "Blazers, camisas, alfaiataria",
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
    description: "Cintos, lenços e óculos",
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
      <section className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
        <Image
          src={`${BASE}/photo-1558769132-cb1aea458c5e?w=1600&h=900&fit=crop`}
          alt="Boutique Eva Milhomem"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-noir/55" />

        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <p className="text-gold text-xs font-semibold uppercase tracking-[0.35em] mb-5">
            Boutique Premium — São Paulo
          </p>
          <h1 className="font-heading text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-off-white leading-none tracking-tight mb-6">
            Elegância
            <span className="block text-gradient-gold">que conta</span>
            histórias.
          </h1>
          <p className="text-off-white/70 text-lg md:text-xl max-w-xl mx-auto mb-10 leading-relaxed">
            Moda premium com peças exclusivas para quem valoriza sofisticação e individualidade.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/moda-feminina"
              className="inline-flex items-center gap-2 bg-gold text-noir font-bold text-xs uppercase tracking-widest px-8 py-4 hover:bg-gold-light transition-colors duration-200"
            >
              Explorar Coleção
              <ArrowRight size={14} />
            </Link>
            <Link
              href="/campanhas"
              className="inline-flex items-center gap-2 border border-off-white/40 text-off-white font-semibold text-xs uppercase tracking-widest px-8 py-4 hover:border-gold hover:text-gold transition-colors duration-200"
            >
              Ver Campanhas
            </Link>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
          <span className="text-off-white/40 text-[10px] uppercase tracking-widest">Scroll</span>
          <div className="w-px h-10 bg-gradient-to-b from-off-white/40 to-transparent animate-pulse" />
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

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mt-14">
            {categories.map((cat, i) => (
              <AnimatedSection key={cat.href + cat.label} delay={i * 0.1}>
                <Link href={cat.href} className="group block">
                  <div className="relative overflow-hidden aspect-[3/4] bg-secondary">
                    <Image
                      src={cat.image}
                      alt={cat.label}
                      fill
                      sizes="(max-width: 640px) 50vw, 25vw"
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-noir/80 via-noir/20 to-transparent" />
                    <div className="absolute bottom-0 left-0 right-0 p-4">
                      <h3 className="font-heading text-off-white font-bold text-base md:text-lg">
                        {cat.label}
                      </h3>
                      <p className="text-off-white/70 text-xs mt-0.5">{cat.description}</p>
                      <span className="inline-flex items-center gap-1 text-gold text-[10px] font-semibold uppercase tracking-wider mt-3 group-hover:gap-2 transition-all">
                        Ver mais <ArrowRight size={10} />
                      </span>
                    </div>
                  </div>
                </Link>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ── NOVAS CHEGADAS ───────────────────────────────────────── */}
      <section className="section-padding">
        <div className="container-boutique">
          <AnimatedSection className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-12">
            <SectionHeader
              eyebrow="Destaques"
              title="Peças Selecionadas"
              subtitle="Nossa curadoria das peças mais desejadas da temporada."
              centered={false}
            />
            <Link
              href="/moda-feminina"
              className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-noir border-b border-noir hover:text-gold hover:border-gold transition-colors pb-0.5 whitespace-nowrap"
            >
              Ver tudo <ArrowRight size={12} />
            </Link>
          </AnimatedSection>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-5 gap-y-10">
            {featured.map((product, i) => (
              <AnimatedSection key={product.id} delay={i * 0.06}>
                <ProductCard product={product} />
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ── CAMPAIGN BANNER ──────────────────────────────────────── */}
      {featuredCampaign && (
        <section className="relative h-[500px] md:h-[600px] overflow-hidden">
          <Image
            src={featuredCampaign.image}
            alt={featuredCampaign.title}
            fill
            sizes="100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-noir/50" />
          <div className="relative z-10 h-full flex items-center">
            <div className="container-boutique">
              <AnimatedSection direction="left" className="max-w-lg">
                <p className="text-gold text-xs font-semibold uppercase tracking-[0.3em] mb-4">
                  {featuredCampaign.subtitle}
                </p>
                <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-off-white leading-tight mb-5">
                  {featuredCampaign.title}
                </h2>
                <p className="text-off-white/70 text-base leading-relaxed mb-8">
                  {featuredCampaign.description}
                </p>
                <Link
                  href={featuredCampaign.ctaHref}
                  className="inline-flex items-center gap-2 bg-gold text-noir font-bold text-xs uppercase tracking-widest px-7 py-4 hover:bg-gold-light transition-colors"
                >
                  {featuredCampaign.cta} <ArrowRight size={14} />
                </Link>
              </AnimatedSection>
            </div>
          </div>
        </section>
      )}

      {/* ── POR QUE EVA MILHOMEM ─────────────────────────────────── */}
      <section className="section-padding bg-noir">
        <div className="container-boutique">
          <AnimatedSection>
            <SectionHeader
              eyebrow="Nossa Essência"
              title="Por que Eva Milhomem?"
              light
            />
          </AnimatedSection>

          <div className="grid md:grid-cols-3 gap-8 mt-14">
            {pillars.map((pillar, i) => {
              const Icon = pillar.icon;
              return (
                <AnimatedSection key={pillar.title} delay={i * 0.15}>
                  <div className="text-center p-8 border border-white/10 hover:border-gold transition-colors duration-300 group">
                    <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-gold/10 mb-6 group-hover:bg-gold/20 transition-colors">
                      <Icon size={22} className="text-gold" />
                    </div>
                    <h3 className="font-heading text-xl font-bold text-off-white mb-3">
                      {pillar.title}
                    </h3>
                    <p className="text-white/60 text-sm leading-relaxed">{pillar.text}</p>
                  </div>
                </AnimatedSection>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── CTA FINAL ────────────────────────────────────────────── */}
      <section className="section-padding gradient-champagne">
        <div className="container-boutique text-center">
          <AnimatedSection>
            <p className="text-gold text-xs font-semibold uppercase tracking-[0.3em] mb-4">
              Atendimento Exclusivo
            </p>
            <h2 className="font-heading text-4xl md:text-5xl font-bold text-noir mb-4">
              Precisa de ajuda para escolher?
            </h2>
            <p className="text-muted-foreground text-lg max-w-xl mx-auto mb-8">
              Nossa equipe de consultoras de moda está pronta para te ajudar a encontrar a peça perfeita.
            </p>
            <a
              href={`https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent("Olá! Gostaria de ajuda com uma consultoria de moda.")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-noir text-off-white font-bold text-xs uppercase tracking-widest px-8 py-4 hover:bg-noir/80 transition-colors"
            >
              Falar com Consultora
              <ArrowRight size={14} />
            </a>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
