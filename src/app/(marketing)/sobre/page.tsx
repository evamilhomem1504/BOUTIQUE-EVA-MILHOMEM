import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Heart, Award, Users, Gem } from "lucide-react";
import { AnimatedSection } from "@/components/shared/AnimatedSection";
import { SectionHeader } from "@/components/shared/SectionHeader";

export const metadata: Metadata = {
  title: "Sobre",
  description: "Conheça a história e os valores da Boutique Eva Milhomem.",
};

const BASE = "https://images.unsplash.com";

const values = [
  {
    icon: Gem,
    title: "Exclusividade",
    text: "Cada peça é cuidadosamente selecionada ou desenvolvida em parceria com criadores independentes.",
  },
  {
    icon: Award,
    title: "Qualidade",
    text: "Apenas materiais nobres e acabamentos de alta costura compõem nosso catálogo.",
  },
  {
    icon: Heart,
    title: "Propósito",
    text: "Acreditamos que a moda é uma forma de autoexpressão e celebração da individualidade.",
  },
  {
    icon: Users,
    title: "Relacionamento",
    text: "Mais do que clientes, cultivamos uma comunidade de mulheres e homens que valorizam estilo.",
  },
];

const timeline = [
  { year: "2010", title: "O Começo", text: "Eva Milhomem abre sua primeira loja no Jardins, SP, com uma curadoria de 50 peças." },
  { year: "2014", title: "Expansão", text: "Lançamento da primeira coleção própria e parceria com estilistas brasileiros." },
  { year: "2018", title: "Reconhecimento", text: "Prêmio Melhor Boutique do Ano pela Revista Fashion Brasil." },
  { year: "2022", title: "Digital", text: "Lançamento da presença digital com curadoria online e consultoria virtual." },
  { year: "2025", title: "Hoje", text: "Referência em moda premium em São Paulo, com atendimento personalizado e exclusivo." },
];

export default function SobrePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative h-[60vh] min-h-[450px] flex items-end overflow-hidden pt-20">
        <Image
          src={`${BASE}/photo-1551488831-00ddcb6c6bd3?w=1400&h=700&fit=crop`}
          alt="Sobre a Boutique Eva Milhomem"
          fill
          priority
          sizes="100vw"
          className="object-cover object-top"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-noir via-noir/40 to-transparent" />
        <div className="relative z-10 container-boutique pb-14">
          <p className="text-gold text-xs font-semibold uppercase tracking-[0.3em] mb-3">
            Nossa História
          </p>
          <h1 className="font-heading text-5xl md:text-6xl font-bold text-off-white leading-tight">
            A Arte de<br />Vestir com Alma
          </h1>
        </div>
      </section>

      {/* Story */}
      <section className="section-padding">
        <div className="container-boutique">
          <div className="grid md:grid-cols-2 gap-14 items-center">
            <AnimatedSection direction="left">
              <p className="text-gold text-xs font-semibold uppercase tracking-[0.3em] mb-4">
                Eva Milhomem
              </p>
              <h2 className="font-heading text-4xl font-bold text-noir leading-tight mb-6">
                Uma visão de elegância que transcende tendências
              </h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Em 2010, Eva Milhomem transformou sua paixão por moda em uma curadoria única no coração dos Jardins, São Paulo. Com olhar apurado e sensibilidade estética rara, ela reuniu sob o mesmo teto peças que contam histórias.
                </p>
                <p>
                  A boutique nasceu da convicção de que moda é muito mais do que roupa: é linguagem, é expressão, é poder. Cada peça é escolhida não apenas pelo design, mas pela emoção que desperta em quem a veste.
                </p>
                <p>
                  Quinze anos depois, a Boutique Eva Milhomem é referência em São Paulo para quem busca sofisticação sem abrir mão da personalidade.
                </p>
              </div>
            </AnimatedSection>

            <AnimatedSection direction="right">
              <div className="relative">
                <div className="relative aspect-[4/5] overflow-hidden">
                  <Image
                    src={`${BASE}/photo-1469334031218-e382a71b716b?w=600&h=750&fit=crop`}
                    alt="Eva Milhomem"
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover"
                  />
                </div>
                <div className="absolute -bottom-5 -left-5 bg-gold px-6 py-4">
                  <p className="font-heading text-3xl font-bold text-noir">15</p>
                  <p className="text-noir/70 text-xs uppercase tracking-widest font-semibold">Anos de elegância</p>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Valores */}
      <section className="section-padding bg-off-white">
        <div className="container-boutique">
          <AnimatedSection>
            <SectionHeader
              eyebrow="Nossos Pilares"
              title="O que nos define"
              subtitle="Os valores que guiam cada escolha, cada peça e cada relacionamento na Boutique Eva Milhomem."
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
                    <h3 className="font-heading text-lg font-bold text-noir mb-2">{v.title}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">{v.text}</p>
                  </div>
                </AnimatedSection>
              );
            })}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="section-padding bg-noir">
        <div className="container-boutique">
          <AnimatedSection>
            <SectionHeader
              eyebrow="Trajetória"
              title="Nossa jornada"
              light
            />
          </AnimatedSection>

          <div className="relative mt-14">
            <div className="absolute left-[52px] md:left-1/2 top-0 bottom-0 w-px bg-white/10" />
            <div className="space-y-10">
              {timeline.map((item, i) => (
                <AnimatedSection key={item.year} delay={i * 0.1}>
                  <div className={`flex gap-6 md:gap-0 ${i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}>
                    <div className={`flex-1 ${i % 2 === 0 ? "md:text-right md:pr-12" : "md:pl-12"} md:${i % 2 !== 0 ? "" : "flex justify-end"}`}>
                      <div className="hidden md:block">
                        <p className="text-gold font-heading text-3xl font-bold mb-1">{item.year}</p>
                        <h4 className="text-off-white font-heading text-lg font-bold mb-2">{item.title}</h4>
                        <p className="text-white/60 text-sm leading-relaxed max-w-xs">{item.text}</p>
                      </div>
                    </div>
                    <div className="relative flex items-start">
                      <div className="w-5 h-5 rounded-full bg-gold border-2 border-noir shrink-0 mt-1 z-10 md:absolute md:left-1/2 md:-translate-x-1/2" />
                    </div>
                    <div className="flex-1 md:hidden pl-4">
                      <p className="text-gold font-heading text-2xl font-bold mb-1">{item.year}</p>
                      <h4 className="text-off-white font-heading font-bold mb-1">{item.title}</h4>
                      <p className="text-white/60 text-sm leading-relaxed">{item.text}</p>
                    </div>
                    <div className="flex-1 hidden md:block" />
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 gradient-champagne">
        <div className="container-boutique text-center">
          <AnimatedSection>
            <h2 className="font-heading text-4xl font-bold text-noir mb-4">
              Venha nos visitar
            </h2>
            <p className="text-muted-foreground text-lg mb-8 max-w-md mx-auto">
              Nossa boutique está te esperando no coração dos Jardins. Agende uma visita personalizada.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contato"
                className="inline-flex items-center gap-2 bg-noir text-off-white font-bold text-xs uppercase tracking-widest px-8 py-4 hover:bg-noir/80 transition-colors"
              >
                Como Chegar <ArrowRight size={14} />
              </Link>
              <Link
                href="/moda-feminina"
                className="inline-flex items-center gap-2 border border-noir text-noir font-bold text-xs uppercase tracking-widest px-8 py-4 hover:bg-noir hover:text-off-white transition-colors"
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
