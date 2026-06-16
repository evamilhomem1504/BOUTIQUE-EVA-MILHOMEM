import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { AnimatedSection } from "@/components/shared/AnimatedSection";
import { SectionHeader } from "@/components/shared/SectionHeader";
import { campaigns } from "@/lib/data";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "Campanhas",
  description: "As campanhas editoriais da Boutique Eva Milhomem.",
};

const BASE = "https://images.unsplash.com";

const additionalCampaigns = [
  {
    id: "extra1",
    title: "O Poder do Detalhe",
    subtitle: "Editorial Primavera 2025",
    description:
      "Bordados, texturas e acabamentos que transformam uma peça em obra de arte. Explore a nossa coleção de peças com detalhes únicos.",
    image: `${BASE}/photo-1509631179647-0177331693ae?w=800&h=500&fit=crop`,
    cta: "Ver Coleção",
    ctaHref: "/moda-feminina",
  },
  {
    id: "extra2",
    title: "Noite Dourada",
    subtitle: "Evening Wear 2025",
    description:
      "Para os momentos que pedem o extraordinário. Nossa coleção de looks de festa é feita para quem quer ser inesquecível.",
    image: `${BASE}/photo-1566174053879-31528523f8ae?w=800&h=500&fit=crop`,
    cta: "Explorar",
    ctaHref: "/moda-feminina",
  },
];

export default function CampanhasPage() {
  const featuredCampaign = campaigns.find((c) => c.featured)!;
  const otherCampaigns = campaigns.filter((c) => !c.featured);

  return (
    <>
      {/* Hero da campanha principal */}
      <section className="relative h-[70vh] min-h-[500px] flex items-end overflow-hidden pt-20">
        <Image
          src={featuredCampaign.image}
          alt={featuredCampaign.title}
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-noir via-noir/50 to-transparent" />
        <div className="relative z-10 container-boutique pb-16">
          <p className="text-gold text-xs font-semibold uppercase tracking-[0.3em] mb-4">
            {featuredCampaign.subtitle} · Em Destaque
          </p>
          <h1 className="font-heading text-6xl md:text-7xl font-bold text-off-white leading-none mb-5">
            {featuredCampaign.title}
          </h1>
          <p className="text-off-white/70 text-lg max-w-lg mb-8">
            {featuredCampaign.description}
          </p>
          <Link
            href={featuredCampaign.ctaHref}
            className="inline-flex items-center gap-2 bg-gold text-noir font-bold text-xs uppercase tracking-widest px-8 py-4 hover:bg-gold-light transition-colors"
          >
            {featuredCampaign.cta} <ArrowRight size={14} />
          </Link>
        </div>
      </section>

      {/* Demais campanhas */}
      <section className="section-padding">
        <div className="container-boutique">
          <AnimatedSection>
            <SectionHeader
              eyebrow="Todas as Campanhas"
              title="Cada coleção conta uma história"
              subtitle="Explore nossas campanhas editoriais e mergulhe no universo Eva Milhomem."
            />
          </AnimatedSection>

          <div className="grid md:grid-cols-2 gap-8 mt-14">
            {[...otherCampaigns, ...additionalCampaigns].map((camp, i) => (
              <AnimatedSection key={camp.id} delay={i * 0.1}>
                <Link href={camp.ctaHref} className="group block">
                  <div className="relative aspect-[16/9] overflow-hidden">
                    <Image
                      src={camp.image}
                      alt={camp.title}
                      fill
                      sizes="(max-width: 768px) 100vw, 50vw"
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-noir/40 group-hover:bg-noir/30 transition-colors" />
                    <div className="absolute bottom-0 left-0 right-0 p-6">
                      <p className="text-gold text-[10px] uppercase tracking-widest font-semibold mb-1">
                        {camp.subtitle}
                      </p>
                      <h3 className="font-heading text-2xl font-bold text-off-white">
                        {camp.title}
                      </h3>
                    </div>
                  </div>
                  <div className="mt-4">
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {camp.description}
                    </p>
                    <span className="inline-flex items-center gap-1 text-noir text-xs font-semibold uppercase tracking-wider mt-3 group-hover:text-gold group-hover:gap-2 transition-all">
                      {camp.cta} <ArrowRight size={12} />
                    </span>
                  </div>
                </Link>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Lookbook strip */}
      <section className="py-16 bg-noir overflow-hidden">
        <AnimatedSection>
          <div className="container-boutique mb-8 text-center">
            <p className="text-gold text-xs uppercase tracking-widest font-semibold">
              Lookbook Digital
            </p>
            <h2 className="font-heading text-3xl font-bold text-off-white mt-2">
              Inspire-se no nosso feed
            </h2>
          </div>
        </AnimatedSection>
        <div className="flex gap-3 px-4 overflow-x-auto pb-2">
          {[
            `${BASE}/photo-1469334031218-e382a71b716b?w=300&h=400&fit=crop`,
            `${BASE}/photo-1515886657613-9f3515b0c78f?w=300&h=400&fit=crop`,
            `${BASE}/photo-1617196034183-421b4040ed20?w=300&h=400&fit=crop`,
            `${BASE}/photo-1548036328-c9fa89d128fa?w=300&h=400&fit=crop`,
            `${BASE}/photo-1583496661160-fb5974ca5f3c?w=300&h=400&fit=crop`,
            `${BASE}/photo-1566174053879-31528523f8ae?w=300&h=400&fit=crop`,
          ].map((src, i) => (
            <div
              key={i}
              className="relative w-48 md:w-60 aspect-[3/4] shrink-0 overflow-hidden group cursor-pointer"
            >
              <Image
                src={src}
                alt={`Lookbook ${i + 1}`}
                fill
                sizes="240px"
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-noir/0 group-hover:bg-noir/20 transition-colors" />
            </div>
          ))}
        </div>
        <div className="text-center mt-8">
          <a
            href={siteConfig.links.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 border border-white/20 text-off-white/70 font-semibold text-xs uppercase tracking-widest px-6 py-3 hover:border-gold hover:text-gold transition-colors"
          >
            Ver Instagram <ArrowRight size={12} />
          </a>
        </div>
      </section>
    </>
  );
}
