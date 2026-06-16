"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import { siteConfig } from "@/config/site";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => { setMobileOpen(false); }, [pathname]);

  const isHome = pathname === "/";
  const transparent = !scrolled && isHome;

  return (
    <>
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-40 transition-all duration-700 ease-in-out",
          transparent
            ? "bg-transparent border-b border-transparent"
            : "bg-noir/98 backdrop-blur-lg border-b border-white/8 shadow-[0_1px_20px_rgba(0,0,0,0.3)]"
        )}
      >
        {/* Linha dourada topo */}
        <div className="h-[2px] bg-gradient-to-r from-transparent via-gold to-transparent opacity-60" />

        <div className="container-boutique">
          <div className="flex items-center justify-between h-18 md:h-22 py-3 md:py-4">

            {/* Logo */}
            <Link
              href="/"
              aria-label="Boutique Eva Milhomem — Página inicial"
              className="flex items-center shrink-0 group"
            >
              <div className="relative">
                <Image
                  src="/logo.png"
                  alt="Eva Milhomem"
                  width={200}
                  height={90}
                  priority
                  className="object-contain w-auto h-11 md:h-14 transition-all duration-300 group-hover:opacity-85"
                  style={{ filter: "brightness(1.05) contrast(1.05)" }}
                />
              </div>
            </Link>

            {/* Desktop nav */}
            <nav className="hidden lg:flex items-center gap-9">
              {siteConfig.nav.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    "relative text-[11px] font-sans font-semibold uppercase tracking-[0.18em]",
                    "transition-colors duration-300 group",
                    pathname === item.href
                      ? "text-gold"
                      : "text-off-white/75 hover:text-off-white"
                  )}
                >
                  {item.label}
                  <span
                    className={cn(
                      "absolute -bottom-1 left-0 h-px bg-gradient-to-r from-gold to-gold-light transition-all duration-400",
                      pathname === item.href ? "w-full" : "w-0 group-hover:w-full"
                    )}
                  />
                </Link>
              ))}
            </nav>

            {/* Ações direita */}
            <div className="flex items-center gap-2">
              {/* WhatsApp CTA desktop */}
              <a
                href={siteConfig.links.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="hidden md:inline-flex items-center gap-2 border border-gold/50 text-gold hover:bg-gold hover:text-noir text-[10px] font-semibold uppercase tracking-[0.2em] px-4 py-2 transition-all duration-300"
              >
                Fale Conosco
              </a>

              {/* Hambúrguer mobile */}
              <button
                aria-label={mobileOpen ? "Fechar menu" : "Abrir menu"}
                onClick={() => setMobileOpen((v) => !v)}
                className="lg:hidden flex items-center justify-center w-10 h-10 text-off-white/80 hover:text-gold transition-colors"
              >
                <AnimatePresence mode="wait" initial={false}>
                  <motion.span
                    key={mobileOpen ? "x" : "menu"}
                    initial={{ opacity: 0, rotate: -90 }}
                    animate={{ opacity: 1, rotate: 0 }}
                    exit={{ opacity: 0, rotate: 90 }}
                    transition={{ duration: 0.2 }}
                  >
                    {mobileOpen ? <X size={22} /> : <Menu size={22} />}
                  </motion.span>
                </AnimatePresence>
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, clipPath: "inset(0 0 100% 0)" }}
            animate={{ opacity: 1, clipPath: "inset(0 0 0% 0)" }}
            exit={{ opacity: 0, clipPath: "inset(0 0 100% 0)" }}
            transition={{ duration: 0.35, ease: [0.32, 0.72, 0, 1] }}
            className="fixed inset-0 z-30 bg-noir flex flex-col pt-24 px-8 lg:hidden"
          >
            {/* Linha dourada decorativa */}
            <div className="h-px bg-gradient-to-r from-transparent via-gold/40 to-transparent mb-8" />

            {/* Logo centralizada */}
            <div className="flex justify-center mb-10">
              <Image
                src="/logo.png"
                alt="Eva Milhomem"
                width={200}
                height={90}
                className="object-contain h-16 w-auto"
                style={{ filter: "brightness(1.05) contrast(1.05)" }}
              />
            </div>

            <nav className="flex flex-col">
              {siteConfig.nav.map((item, i) => (
                <motion.div
                  key={item.href}
                  initial={{ opacity: 0, x: -24 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 + i * 0.07, ease: "easeOut" }}
                >
                  <Link
                    href={item.href}
                    className={cn(
                      "flex items-center justify-between py-4 border-b border-white/8",
                      "font-heading text-2xl transition-colors duration-200",
                      pathname === item.href ? "text-gold" : "text-off-white/80 hover:text-gold"
                    )}
                  >
                    {item.label}
                    <span className="text-gold/40 text-sm">→</span>
                  </Link>
                </motion.div>
              ))}
            </nav>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="mt-auto mb-10 space-y-1"
            >
              <div className="h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent mb-6" />
              <p className="text-white/35 text-xs tracking-wider">{siteConfig.contact.phone}</p>
              <p className="text-white/35 text-xs tracking-wider">{siteConfig.contact.email}</p>
              <p className="text-white/35 text-xs tracking-wider">{siteConfig.contact.hours}</p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
