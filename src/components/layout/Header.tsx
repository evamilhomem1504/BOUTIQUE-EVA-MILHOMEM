"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ShoppingBag, Search, Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import { siteConfig } from "@/config/site";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  const isHome = pathname === "/";

  return (
    <>
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-40 transition-all duration-500",
          scrolled || !isHome
            ? "bg-off-white/95 backdrop-blur-md border-b border-border shadow-sm"
            : "bg-transparent"
        )}
      >
        <div className="container-boutique">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Logo */}
            <Link href="/" className="flex flex-col items-start leading-none">
              <span
                className={cn(
                  "font-heading text-xl md:text-2xl font-bold tracking-[0.12em] transition-colors duration-300",
                  scrolled || !isHome ? "text-noir" : "text-off-white"
                )}
              >
                EVA MILHOMEM
              </span>
              <span
                className={cn(
                  "text-[9px] tracking-[0.35em] uppercase font-medium transition-colors duration-300",
                  scrolled || !isHome ? "text-gold" : "text-gold-light"
                )}
              >
                Boutique Premium
              </span>
            </Link>

            {/* Desktop nav */}
            <nav className="hidden lg:flex items-center gap-8">
              {siteConfig.nav.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    "text-xs font-semibold uppercase tracking-widest transition-colors duration-200 relative group",
                    scrolled || !isHome ? "text-noir" : "text-off-white/90",
                    pathname === item.href && "text-gold"
                  )}
                >
                  {item.label}
                  <span
                    className={cn(
                      "absolute -bottom-0.5 left-0 h-px bg-gold transition-all duration-300",
                      pathname === item.href ? "w-full" : "w-0 group-hover:w-full"
                    )}
                  />
                </Link>
              ))}
            </nav>

            {/* Right icons */}
            <div className="flex items-center gap-3">
              <button
                aria-label="Pesquisar"
                className={cn(
                  "hidden md:flex items-center justify-center w-9 h-9 rounded-full transition-colors",
                  scrolled || !isHome
                    ? "text-noir hover:bg-secondary"
                    : "text-off-white hover:bg-white/10"
                )}
              >
                <Search size={18} />
              </button>
              <button
                aria-label="Carrinho"
                className={cn(
                  "flex items-center justify-center w-9 h-9 rounded-full transition-colors relative",
                  scrolled || !isHome
                    ? "text-noir hover:bg-secondary"
                    : "text-off-white hover:bg-white/10"
                )}
              >
                <ShoppingBag size={18} />
                <span className="absolute -top-0.5 -right-0.5 w-4 h-4 bg-gold text-noir text-[9px] font-bold rounded-full flex items-center justify-center">
                  0
                </span>
              </button>

              {/* Mobile hamburger */}
              <button
                aria-label={mobileOpen ? "Fechar menu" : "Abrir menu"}
                onClick={() => setMobileOpen((v) => !v)}
                className={cn(
                  "lg:hidden flex items-center justify-center w-9 h-9 rounded-full transition-colors",
                  scrolled || !isHome
                    ? "text-noir hover:bg-secondary"
                    : "text-off-white hover:bg-white/10"
                )}
              >
                {mobileOpen ? <X size={20} /> : <Menu size={20} />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-30 bg-noir pt-20 px-6 lg:hidden"
          >
            <nav className="flex flex-col gap-1 mt-8">
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
                      "block py-4 font-heading text-2xl font-bold border-b border-white/10 transition-colors",
                      pathname === item.href ? "text-gold" : "text-off-white hover:text-gold"
                    )}
                  >
                    {item.label}
                  </Link>
                </motion.div>
              ))}
            </nav>

            <div className="mt-10 space-y-2">
              <p className="text-muted-foreground text-sm">{siteConfig.contact.email}</p>
              <p className="text-muted-foreground text-sm">{siteConfig.contact.phone}</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
