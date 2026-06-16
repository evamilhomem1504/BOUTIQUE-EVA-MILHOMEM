import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "@/config/site";
import { Separator } from "@/components/ui/separator";
import { MessageCircle, Phone, MapPin, Clock, Mail } from "lucide-react";
import { InstagramIcon } from "@/components/shared/InstagramIcon";
import { NewsletterForm } from "@/components/shared/NewsletterForm";

export function Footer() {
  return (
    <footer className="bg-noir text-off-white">
      {/* Newsletter strip */}
      <div className="border-b border-white/10">
        <div className="container-boutique py-10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <p className="text-xs uppercase tracking-widest text-gold font-semibold mb-1">
                Newsletter
              </p>
              <h3 className="font-heading text-xl font-bold text-off-white">
                Receba novidades e ofertas exclusivas
              </h3>
            </div>
            <NewsletterForm />
          </div>
        </div>
      </div>

      {/* Main footer */}
      <div className="container-boutique py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link href="/" className="inline-block mb-5" aria-label="Eva Milhomem">
              <Image
                src="/logo.png"
                alt="Eva Milhomem"
                width={160}
                height={72}
                className="object-contain h-14 w-auto"
              />
            </Link>
            <p className="text-white/60 text-sm leading-relaxed max-w-xs">
              {siteConfig.description}
            </p>
            <div className="flex items-center gap-3 mt-6">
              <a
                href={siteConfig.links.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-9 h-9 rounded-full border border-white/20 text-white/60 hover:border-gold hover:text-gold transition-colors"
                aria-label="Instagram"
              >
                <InstagramIcon width={16} height={16} />
              </a>
              <a
                href={siteConfig.links.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-9 h-9 rounded-full border border-white/20 text-white/60 hover:border-gold hover:text-gold transition-colors"
                aria-label="WhatsApp"
              >
                <MessageCircle size={16} />
              </a>
            </div>
          </div>

          {/* Categorias */}
          <div>
            <h4 className="text-xs uppercase tracking-widest text-gold font-semibold mb-5">
              Coleções
            </h4>
            <ul className="space-y-3">
              {siteConfig.nav.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-white/60 hover:text-gold text-sm transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Institucional */}
          <div>
            <h4 className="text-xs uppercase tracking-widest text-gold font-semibold mb-5">
              Institucional
            </h4>
            <ul className="space-y-3">
              {[
                { label: "Nossa História", href: "/sobre" },
                { label: "Política de Troca", href: "/trocas" },
                { label: "Termos de Uso", href: "/termos" },
                { label: "Privacidade", href: "/privacidade" },
                { label: "FAQ", href: "/faq" },
              ].map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-white/60 hover:text-gold text-sm transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contato */}
          <div>
            <h4 className="text-xs uppercase tracking-widest text-gold font-semibold mb-5">
              Contato
            </h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin size={14} className="text-gold mt-0.5 shrink-0" />
                <span className="text-white/60 text-sm">
                  {siteConfig.contact.address}
                </span>
              </li>
              <li className="flex items-start gap-3">
                <Clock size={14} className="text-gold mt-0.5 shrink-0" />
                <span className="text-white/60 text-sm">
                  {siteConfig.contact.hours}
                </span>
              </li>
              <li className="flex items-start gap-3">
                <Phone size={14} className="text-gold mt-0.5 shrink-0" />
                <a
                  href={`https://wa.me/${siteConfig.whatsappNumber}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/60 hover:text-gold text-sm transition-colors"
                >
                  {siteConfig.contact.phone}
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Mail size={14} className="text-gold mt-0.5 shrink-0" />
                <a
                  href={`mailto:${siteConfig.contact.email}`}
                  className="text-white/60 hover:text-gold text-sm transition-colors break-all"
                >
                  {siteConfig.contact.email}
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <Separator className="bg-white/10" />

      <div className="container-boutique py-5">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-2">
          <p className="text-white/40 text-xs">
            © {new Date().getFullYear()} Boutique Eva Milhomem. Todos os direitos reservados.
          </p>
          <p className="text-white/30 text-xs">
            Desenvolvido com elegância e propósito.
          </p>
        </div>
      </div>
    </footer>
  );
}
