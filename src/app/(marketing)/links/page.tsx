import type { Metadata } from "next";
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
  description: "Moda premium em Conceição do Araguaia, PA.",
};

const LINKS = [
  {
    label: "Fale com a gente no WhatsApp",
    href: "https://wa.me/5594991703949",
    icon: MessageCircle,
  },
  {
    label: "Grupo VIP Eva Milhomem",
    href: "https://chat.whatsapp.com/CTEVwywfGQACVEyHjZllE4",
    icon: Users,
  },
  {
    label: "Como chegar na loja",
    href: "https://maps.google.com/?q=Av.+Fernanda+Guilhon,+800,+Conceição+do+Araguaia,+PA",
    icon: MapPin,
  },
  {
    label: "Avalie nossa loja no Google",
    href: "https://share.google/b7VPaSJhXkqhcT9cX",
    icon: Star,
  },
  {
    label: "Siga no Instagram @evamilhomem_",
    href: "https://instagram.com/evamilhomem_",
    icon: ExternalLink,
  },
];

export default function LinksPage() {
  return (
    <main className="min-h-screen bg-[#0a0a0a] flex flex-col items-center">

      {/* Hero — cabeçalho escuro */}
      <header className="w-full bg-[#0a0a0a] flex flex-col items-center pt-20 pb-14 px-6 border-b border-white/5">

        {/* Nome em tipografia heading */}
        <h1
          className="font-heading font-light text-[#f5f0eb] leading-none text-center"
          style={{ fontSize: "clamp(2.8rem, 12vw, 4rem)", letterSpacing: "0.06em" }}
        >
          Eva Milhomem
        </h1>

        {/* Linha dourada decorativa */}
        <div className="mt-6 h-px w-20 bg-gradient-to-r from-transparent via-[#c9a84c] to-transparent" />

        <p className="mt-5 text-[10px] text-white/35 text-center tracking-[0.35em] uppercase">
          Moda Premium · Conceição do Araguaia
        </p>
      </header>

      {/* Corpo */}
      <div className="w-full max-w-sm px-5 flex flex-col gap-3 pt-8 pb-16">

        {/* CTA principal — Catálogo */}
        <Link
          href="/moda-feminina"
          className="group relative overflow-hidden flex flex-col items-center justify-center gap-2 py-9 px-6 border border-[#c9a84c]/40 hover:border-[#c9a84c] transition-all duration-300 active:scale-[0.98]"
          style={{ background: "linear-gradient(135deg, #1a1610 0%, #0f0d09 100%)" }}
        >
          {/* Brilho de canto */}
          <div className="absolute top-0 left-0 w-24 h-24 bg-[#c9a84c]/5 rounded-full blur-2xl pointer-events-none" />
          <div className="absolute bottom-0 right-0 w-24 h-24 bg-[#c9a84c]/5 rounded-full blur-2xl pointer-events-none" />

          <span className="text-[9px] uppercase tracking-[0.4em] text-[#c9a84c] font-semibold">
            Nova Coleção
          </span>

          <ShoppingBag size={28} strokeWidth={1} className="text-[#c9a84c] mt-1" />

          <span className="font-heading font-light text-[1.5rem] text-[#f5f0eb] leading-tight text-center mt-1">
            Ver Catálogo de Produtos
          </span>

          <span className="text-[11px] text-white/30 text-center">
            Vestidos · Bolsas · Moda Praia · Calçados
          </span>

          <span className="mt-4 inline-flex items-center gap-2 border border-[#c9a84c]/60 text-[#c9a84c] text-[10px] font-semibold uppercase tracking-[0.25em] px-6 py-2 group-hover:bg-[#c9a84c] group-hover:text-noir group-hover:border-[#c9a84c] transition-all duration-300">
            Explorar <ArrowRight size={11} />
          </span>
        </Link>

        {/* Divisor */}
        <div className="flex items-center gap-3 my-1">
          <div className="flex-1 h-px bg-white/8" />
          <span className="text-[9px] uppercase tracking-[0.3em] text-white/20">Links</span>
          <div className="flex-1 h-px bg-white/8" />
        </div>

        {/* Links secundários */}
        {LINKS.map(({ label, href, icon: Icon }) => (
          <a
            key={label}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full flex items-center gap-4 px-5 py-4 bg-white/[0.04] border border-white/8 text-[#f5f0eb] text-[13px] font-medium tracking-wide hover:bg-white/[0.08] hover:border-[#c9a84c]/30 transition-all duration-200 active:scale-[0.98]"
          >
            <Icon size={16} className="text-[#c9a84c] shrink-0" />
            <span className="flex-1">{label}</span>
            <ExternalLink size={11} className="text-white/20 shrink-0" />
          </a>
        ))}

        {/* Rodapé */}
        <div className="mt-6 text-center border-t border-white/5 pt-6">
          <div className="flex items-center justify-center gap-2 mb-3">
            <div className="h-px w-6 bg-[#c9a84c]/30" />
            <div className="w-1 h-1 rounded-full bg-[#c9a84c]/30" />
            <div className="h-px w-6 bg-[#c9a84c]/30" />
          </div>
          <p className="text-[11px] text-white/25 leading-relaxed">
            Av. Fernanda Guilhon, 800 · Conceição do Araguaia, PA<br />
            Seg–Sex 08h–18h · Sáb 08h–13h
          </p>
        </div>
      </div>
    </main>
  );
}
