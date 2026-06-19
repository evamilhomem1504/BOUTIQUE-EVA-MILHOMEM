import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { AnimatedSection } from "@/components/shared/AnimatedSection";
import { ProductCard } from "@/components/shared/ProductCard";
import { getProductBySlug, getAllSlugs, getRelatedProducts } from "@/lib/data";
import { siteConfig } from "@/config/site";
import { formatPrice } from "@/lib/utils";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return getAllSlugs();
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const product = getProductBySlug(slug);
  if (!product) return { title: "Produto não encontrado" };
  return {
    title: product.name,
    description: product.description,
  };
}

export default async function ProductPage({ params }: Props) {
  const { slug } = await params;
  const product = getProductBySlug(slug);
  if (!product) notFound();

  const related = getRelatedProducts({ category: product.category, id: product.id });

  const whatsappBase = `https://wa.me/${siteConfig.whatsappNumber}?text=`;

  function buildWhatsAppLink(label?: string) {
    const item = label ? `${product!.name} — ${label}` : product!.name;
    const msg = `Olá! Tenho interesse no produto: ${item} (R$ ${product!.price.toFixed(2).replace(".", ",")})`;
    return whatsappBase + encodeURIComponent(msg);
  }

  return (
    <>
      {/* Breadcrumb */}
      <div className="bg-off-white border-b border-border pt-20">
        <div className="container-boutique py-3">
          <Link
            href="/moda-feminina"
            className="inline-flex items-center gap-2 text-[11px] font-sans uppercase tracking-[0.2em] text-muted-foreground hover:text-noir transition-colors"
          >
            <ArrowLeft size={11} /> Voltar
          </Link>
        </div>
      </div>

      {/* Produto */}
      <section className="bg-off-white py-12 md:py-20">
        <div className="container-boutique">
          <div className="grid md:grid-cols-2 gap-10 lg:gap-20 items-start">

            {/* Imagens */}
            <AnimatedSection direction="left">
              <div className="grid gap-3">
                {product.images.map((img, i) => (
                  <div key={i} className="relative aspect-[3/4] overflow-hidden bg-secondary rounded-sm">
                    <Image
                      src={img.url}
                      alt={img.alt}
                      fill
                      priority={i === 0}
                      sizes="(max-width: 768px) 100vw, 50vw"
                      className="object-cover"
                    />
                  </div>
                ))}
              </div>
            </AnimatedSection>

            {/* Info */}
            <AnimatedSection direction="right" className="md:sticky md:top-28">
              <p className="text-[10px] uppercase tracking-[0.3em] text-gold font-semibold mb-3">
                {product.category.replace(/-/g, " ")}
              </p>

              <h1 className="font-heading font-light text-3xl md:text-4xl text-noir leading-tight mb-4">
                {product.name}
              </h1>

              {/* Preço */}
              <div className="mb-6">
                {product.price > 0 ? (
                  <>
                    <div className="flex items-baseline gap-3">
                      <span className="font-heading text-3xl text-noir font-semibold">
                        {formatPrice(product.price)}
                      </span>
                      {product.originalPrice && (
                        <span className="text-base text-muted-foreground line-through">
                          {formatPrice(product.originalPrice)}
                        </span>
                      )}
                    </div>
                    <p className="text-sm text-muted-foreground mt-1">
                      10x de {formatPrice(product.price / 10)} no cartão ou crediário
                    </p>
                  </>
                ) : (
                  <span className="font-heading text-2xl text-gold">Consulte o preço</span>
                )}
              </div>

              <p className="text-muted-foreground text-sm leading-relaxed mb-8">
                {product.description}
              </p>

              {/* Tamanhos */}
              {product.sizes.length > 0 && product.sizes[0] !== "Único" && (
                <div className="mb-8">
                  <p className="text-[10px] uppercase tracking-[0.2em] text-noir font-semibold mb-3">
                    Tamanhos disponíveis
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {product.sizes.map((size) => (
                      <span
                        key={size}
                        className="border border-border text-noir text-xs font-semibold px-3 py-1.5 tracking-wider"
                      >
                        {size}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {/* Opções (produto com escolha de peça) */}
              {product.options && product.options.length > 0 ? (
                <div className="flex flex-col gap-3">
                  <p className="text-[10px] uppercase tracking-[0.2em] text-noir font-semibold">
                    Escolha a opção
                  </p>
                  {product.options.map((opt) => (
                    <a
                      key={opt.label}
                      href={buildWhatsAppLink(opt.label)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-between border border-border hover:border-gold bg-white hover:bg-gold/5 px-5 py-4 transition-all duration-200 group"
                    >
                      <span className="font-sans text-sm font-semibold text-noir group-hover:text-gold transition-colors">
                        {opt.label}
                      </span>
                      <span className="font-sans text-sm text-muted-foreground">
                        {formatPrice(opt.price)}
                        <span className="text-xs ml-2">(10x {formatPrice(opt.price / 10)})</span>
                      </span>
                    </a>
                  ))}
                  <a
                    href={buildWhatsAppLink("Conjunto Completo")}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-2 inline-flex items-center justify-center gap-3 bg-noir text-off-white font-sans font-semibold text-[11px] uppercase tracking-[0.2em] px-10 py-4 hover:bg-gold hover:text-noir transition-all duration-300"
                  >
                    Quero o conjunto completo <ArrowRight size={13} />
                  </a>
                </div>
              ) : (
                <a
                  href={buildWhatsAppLink()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-3 w-full bg-noir text-off-white font-sans font-semibold text-[11px] uppercase tracking-[0.2em] px-10 py-5 hover:bg-gold hover:text-noir transition-all duration-300"
                >
                  Tenho interesse — WhatsApp <ArrowRight size={13} />
                </a>
              )}

              {/* Detalhes */}
              <div className="mt-8 pt-8 border-t border-border space-y-2">
                {product.colors.length > 0 && (
                  <p className="text-xs text-muted-foreground">
                    <span className="font-semibold text-noir">Cor:</span> {product.colors.join(", ")}
                  </p>
                )}
                <p className="text-xs text-muted-foreground">
                  <span className="font-semibold text-noir">Pagamento:</span> Cartão, crediário ou à vista
                </p>
                <p className="text-xs text-muted-foreground">
                  <span className="font-semibold text-noir">Atendimento:</span> {siteConfig.contact.phone}
                </p>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Produtos relacionados */}
      {related.length > 0 && (
        <section className="py-16 md:py-24 bg-white border-t border-border">
          <div className="container-boutique">
            <AnimatedSection className="mb-12 text-center">
              <p className="eyebrow mb-2">Você também pode gostar</p>
              <h2 className="font-heading font-light text-3xl md:text-4xl text-noir">
                Produtos Relacionados
              </h2>
            </AnimatedSection>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-x-4 gap-y-10 md:gap-x-6">
              {related.map((p, i) => (
                <AnimatedSection key={p.id} delay={i * 0.08}>
                  <ProductCard product={p} />
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
}
