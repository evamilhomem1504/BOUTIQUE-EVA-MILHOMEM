import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  MessageCircle,
  Users,
  MapPin,
  Star,
  ExternalLink,
  ShoppingBag,
  ArrowRight,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Eva Milhomem — Links",
  description: "Sua loja de moda premium em Conceição do Araguaia.",
};

const SECONDARY_LINKS = [
  {
    label: "Fale com a gente no WhatsApp",
    href: "https://wa.me/5594991703949",
    icon: MessageCircle,
    external: true,
  },
  {
    label: "Grupo VIP Eva Milhomem",
    href: "https://chat.whatsapp.com/CTEVwywfGQACVEyHjZllE4",
    icon: Users,
    external: true,
  },
  {
    label: "Como chegar na loja",
    href: "https://maps.google.com/?q=Av.+Fernanda+Guilhon,+800,+Conceição+do+Araguaia,+PA",
    icon: MapPin,
    external: true,
  },
  {
    label: "Avalie nossa loja no Google",
    href: "https://share.google/b7VPaSJhXkqhcT9cX",
    icon: Star,
    external: true,
  },
  {
    label: "Siga no Instagram",
    href: "https://instagram.com/evamilhomem_",
    icon: ExternalLink,
    external: true,
  },
];

export default function LinksPage() {
  return (
    <main
      className="min-h-screen flex flex-col items-center"
      style={{ background: "linear-gradient(160deg, #f7f3ee 0%, #ede8e0 100%)" }}
    >
      {/* Cabeçalho */}
      <header className="w-full flex flex-col items-center pt-12 pb-8 px-6">
        <div className="relative w-20 h-20 mb-5">
          <Image
            src="/favicon.png"
            alt="Eva Milhomem"
            fill
            className="rounded-full object-cover shadow-lg ring-2 ring-[#c9a84c]/30"
            priority
          />
        </div>

        <h1
          className="font-heading font-light text-noir leading-none tracking-tight text-center"
          style={{ fontSize: "clamp(2rem, 8vw, 2.6rem)" }}
        >
          Eva Milhomem
        </h1>

        <p className="mt-2 text-[13px] text-[#7a6f65] text-center max-w-[280px] leading-relaxed">
          Moda premium em Conceição do Araguaia 💛
        </p>

        <div className="mt-4 h-px w-12 bg-[#c9a84c]/50" />
      </header>

      {/* Corpo */}
      <div className="w-full max-w-md px-5 flex flex-col gap-4 pb-14">

        {/* CTA principal — Ver Catálogo */}
        <Link
          href="/moda-feminina"
          className="group relative overflow-hidden rounded-2xl bg-noir text-off-white flex flex-col items-center justify-center gap-1 py-8 px-6 shadow-xl hover:shadow-2xl transition-all duration-300 active:scale-[0.98]"
        >
          {/* brilho dourado */}
          <div className="absolute inset-0 bg-gradient-to-br from-[#c9a84c]/20 to-transparent pointer-events-none" />
          <div className="absolute top-3 right-4 opacity-20">
            <ShoppingBag size={48} strokeWidth={1} />
          </div>

          <span className="text-[10px] uppercase tracking-[0.3em] text-[#c9a84c] font-semibold mb-1">
            Nova Coleção
          </span>
          <span className="font-heading font-light text-2xl leading-tight text-center">
            Ver Catálogo de Produtos
          </span>
          <span className="text-[12px] text-white/60 mt-1">
            Vestidos, bolsas, moda praia e muito mais
          </span>

          <span className="mt-4 inline-flex items-center gap-2 bg-[#c9a84c] text-noir text-[11px] font-semibold uppercase tracking-[0.2em] px-5 py-2 rounded-full group-hover:bg-white transition-colors duration-200">
            Explorar <ArrowRight size={12} />
          </span>
        </Link>

        {/* Links secundários */}
        <div className="flex flex-col gap-2.5 mt-1">
          {SECONDARY_LINKS.map(({ label, href, icon: Icon, external }) => (
            <a
              key={label}
              href={href}
              target={external ? "_blank" : undefined}
              rel={external ? "noopener noreferrer" : undefined}
              className="w-full flex items-center gap-3.5 px-5 py-4 rounded-xl bg-white/80 backdrop-blur-sm text-noir text-[13px] font-semibold tracking-wide border border-white hover:border-[#c9a84c]/40 hover:bg-white hover:shadow-md transition-all duration-200 active:scale-[0.98] shadow-sm"
            >
              <span className="flex items-center justify-center w-8 h-8 rounded-full bg-[#f0ebe4]">
                <Icon size={15} className="text-[#c9a84c]" />
              </span>
              <span className="flex-1">{label}</span>
              {external && <ExternalLink size={12} className="opacity-30 shrink-0" />}
            </a>
          ))}
        </div>

        {/* Rodapé */}
        <div className="mt-4 text-center">
          <p className="text-[11px] text-[#9e9289] leading-relaxed">
            Av. Fernanda Guilhon, 800<br />
            Conceição do Araguaia — PA<br />
            Seg–Sex 08h–18h · Sáb 08h–13h
          </p>
        </div>
      </div>
    </main>
  );
}
