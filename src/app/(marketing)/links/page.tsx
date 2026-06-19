import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  MessageCircle,
  Users,
  MapPin,
  Star,
  ShoppingBag,
  ExternalLink,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Eva Milhomem — Links",
  description: "Sua loja de moda premium em Conceição do Araguaia.",
};

const LINKS = [
  {
    label: "Fale com a gente no WhatsApp",
    href: "https://wa.me/5594991703949",
    icon: MessageCircle,
    primary: true,
  },
  {
    label: "Grupo VIP Eva Milhomem",
    href: "https://chat.whatsapp.com/CTEVwywfGQACVEyHjZllE4",
    icon: Users,
    primary: false,
  },
  {
    label: "Ver Catálogo de Produtos",
    href: "/moda-feminina",
    icon: ShoppingBag,
    primary: true,
    internal: true,
  },
  {
    label: "Como chegar na loja",
    href: "https://maps.google.com/?q=Av.+Fernanda+Guilhon,+800,+Conceição+do+Araguaia,+PA",
    icon: MapPin,
    primary: false,
  },
  {
    label: "Avalie nossa loja no Google",
    href: "https://share.google/b7VPaSJhXkqhcT9cX",
    icon: Star,
    primary: false,
  },
  {
    label: "Siga no Instagram",
    href: "https://instagram.com/evamilhomem_",
    icon: ExternalLink,
    primary: false,
  },
];

export default function LinksPage() {
  return (
    <main className="min-h-screen bg-[#f5f0eb] flex flex-col items-center justify-start px-5 pt-14 pb-16">

      {/* Logo / Nome */}
      <div className="flex flex-col items-center mb-8">
        <Image
          src="/favicon.png"
          alt="Eva Milhomem"
          width={72}
          height={72}
          className="rounded-full mb-4 object-cover shadow-md"
          priority
        />
        <h1 className="font-heading font-light text-[2.2rem] text-noir leading-none tracking-tight">
          Eva Milhomem
        </h1>
        <p className="text-[13px] text-muted-foreground mt-2 text-center max-w-[260px] leading-snug">
          Sua loja de moda premium em<br />
          Conceição do Araguaia 💛
        </p>
        <p className="text-[12px] text-muted-foreground mt-1 text-center max-w-[260px] leading-snug">
          A elegância que você merece, com o toque que faz a diferença.
        </p>
      </div>

      {/* Botões */}
      <div className="w-full max-w-sm flex flex-col gap-3">
        {LINKS.map(({ label, href, icon: Icon, primary, internal }) => {
          const baseClass =
            "w-full flex items-center gap-3 px-5 py-4 rounded-xl text-[14px] font-semibold tracking-wide transition-all duration-200 active:scale-[0.97] shadow-sm";
          const colorClass = primary
            ? "bg-noir text-off-white hover:bg-gold hover:text-noir"
            : "bg-white text-noir hover:bg-gold hover:text-noir border border-[#e0d8d0]";

          if (internal) {
            return (
              <Link key={label} href={href} className={`${baseClass} ${colorClass}`}>
                <Icon size={18} className="shrink-0" />
                <span className="flex-1">{label}</span>
              </Link>
            );
          }

          return (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className={`${baseClass} ${colorClass}`}
            >
              <Icon size={18} className="shrink-0" />
              <span className="flex-1">{label}</span>
              <ExternalLink size={13} className="shrink-0 opacity-40" />
            </a>
          );
        })}
      </div>

      {/* Rodapé */}
      <p className="mt-10 text-[11px] text-muted-foreground text-center">
        Av. Fernanda Guilhon, 800 — Conceição do Araguaia, PA<br />
        Seg–Sex 08h–18h | Sáb 08h–13h
      </p>
    </main>
  );
}
