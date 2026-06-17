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

  return (
    <>
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-40 transition-all duration-500",
          scrolled
            ? "bg-noir/98 backdrop-blur-md shadow-[0_1px_0_rgba(201,169,110,0.15)]"
            : "bg-noir"
        )}
      >
        <div className="container-boutique">
          <div className="flex items-center justify-between h-20 md:h-24">

            {/* Logo */}
            <Link href="/" aria-label="Boutique Eva Milhomem" className="flex items-center shrink-0">
              <Image
                src="/logo.png"
                alt="Eva Milhomem"
                width={160}
                height={160}
                priority
                className="w-14 h-14 md:w-16 md:h-16 object-contain"
              />
            </Link>

            {/* Desktop nav */}
            <nav className="hidden lg:flex items-center gap-8">
              {siteConfig.nav.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    "relative text-[11px] font-sans font-medium uppercase tracking-[0.18em] transition-colors duration-200 group",
                    pathname === item.href
                      ? "text-gold"
                      : "text-white/60 hover:text-white"
                  )}
                >
                  {item.label}
                  <span className={cn(
                    "absolute -bottom-0.5 left-0 h-px bg-gold transition-all duration-300",
                    pathname === item.href ? "w-full" : "w-0 group-hover:w-full"
                  )} />
                </Link>
              ))}
            </nav>

            {/* Direita */}
            <div className="flex items-center gap-3">
              <a
                href={siteConfig.links.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="hidden md:inline-flex items-center gap-2 border border-gold/40 text-gold hover:bg-gold hover:text-noir text-[10px] font-semibold uppercase tracking-[0.2em] px-5 py-2.5 transition-all duration-300"
              >
                Fale Conosco
              </a>

              <button
                aria-label={mobileOpen ? "Fechar menu" : "Abrir menu"}
                onClick={() => setMobileOpen((v) => !v)}
                className="lg:hidden flex items-center justify-center w-10 h-10 text-white/70 hover:text-gold transition-colors"
              >
                <AnimatePresence mode="wait" initial={false}>
                  <motion.span
                    key={mobileOpen ? "x" : "menu"}
                    initial={{ opacity: 0, rotate: -90 }}
                    animate={{ opacity: 1, rotate: 0 }}
                    exit={{ opacity: 0, rotate: 90 }}
                    transition={{ duration: 0.15 }}
                  >
                    {mobileOpen ? <X size={22} /> : <Menu size={22} />}
                  </motion.span>
                </AnimatePresence>
              </button>
            </div>
          </div>
        </div>

        {/* Linha dourada inferior */}
        <div className="h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent" />
      </header>

      {/* Mobile drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-30 bg-noir flex flex-col pt-24 px-8 lg:hidden"
          >
            <div className="flex justify-center mb-10">
              <Image
                src="/logo.png"
                alt="Eva Milhomem"
                width={160}
                height={160}
                className="w-24 h-24 object-contain"
              />
            </div>

            <div className="h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent mb-8" />

            <nav className="flex flex-col">
              {siteConfig.nav.map((item, i) => (
                <motion.div
                  key={item.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.06 }}
                >
                  <Link
                    href={item.href}
                    className={cn(
                      "flex items-center justify-between py-4 border-b border-white/8 font-heading text-2xl transition-colors",
                      pathname === item.href ? "text-gold" : "text-white/70 hover:text-gold"
                    )}
                  >
                    {item.label}
                    <span className="text-gold/40 text-sm font-sans">→</span>
                  </Link>
                </motion.div>
              ))}
            </nav>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.45 }}
              className="mt-auto mb-10"
            >
              <div className="h-px bg-gradient-to-r from-transparent via-gold/20 to-transparent mb-6" />
              <p className="text-white/30 text-xs tracking-wider mb-1">{siteConfig.contact.phone}</p>
              <p className="text-white/30 text-xs tracking-wider mb-1">{siteConfig.contact.email}</p>
              <p className="text-white/30 text-xs tracking-wider">{siteConfig.contact.hours}</p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
