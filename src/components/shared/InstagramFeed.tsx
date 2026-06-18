"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { InstagramIcon } from "@/components/shared/InstagramIcon";
import { siteConfig } from "@/config/site";

const posts = [
  { src: "/products/capa-feminina.jpg", alt: "Look feminino elegante", objectPosition: "center 20%" },
  { src: "/products/bolsa-santa-lolla-palha-leopard.jpg", alt: "Bolsa palha leopard Santa Lolla" },
  { src: "/products/maio-rdsol.jpg", alt: "Maiô RD Sol" },
  { src: "/products/bolsa-santa-lolla-tramado-1.jpg", alt: "Bolsa tramado Santa Lolla" },
  { src: "/products/capa-modapraia.jpg", alt: "Moda praia verão", objectPosition: "center 30%" },
  { src: "/products/biquini-banana-zebra.jpg", alt: "Biquíni banana zebra" },
  { src: "/products/rasteirinha-santa-lolla-verde.png", alt: "Rasteirinha verde Santa Lolla" },
  { src: "/products/bolsa-santa-lolla-preta-couro.png", alt: "Bolsa preta couro Santa Lolla" },
  { src: "/products/maio-saida-saue.png", alt: "Maiô com saída Saué" },
];

export function InstagramFeed() {
  return (
    <section className="bg-noir py-20 md:py-28">
      <div className="container-boutique">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-10"
        >
          <div>
            <p className="eyebrow mb-3">Siga no Instagram</p>
            <h2 className="font-heading font-light text-3xl md:text-5xl text-off-white leading-tight">
              @evamilhomem_
            </h2>
          </div>
          <Link
            href={siteConfig.links.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 inline-flex items-center gap-2.5 border border-gold/40 text-gold hover:bg-gold hover:text-noir font-sans font-semibold text-[11px] uppercase tracking-[0.2em] px-7 py-3.5 transition-all duration-300"
          >
            <InstagramIcon className="w-3.5 h-3.5" />
            Seguir
          </Link>
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-3 gap-1 sm:gap-2">
          {posts.map((post, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.96 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.06, ease: [0.22, 1, 0.36, 1] }}
            >
              <Link
                href={siteConfig.links.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative block overflow-hidden bg-noir-soft aspect-square"
              >
                <Image
                  src={post.src}
                  alt={post.alt}
                  fill
                  sizes="(max-width: 640px) 33vw, (max-width: 1024px) 33vw, 25vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  style={{ objectPosition: post.objectPosition ?? "center" }}
                />
                {/* Overlay no hover */}
                <div className="absolute inset-0 bg-noir/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <InstagramIcon className="w-7 h-7 text-white drop-shadow-lg" />
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* CTA mobile */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
          className="mt-8 text-center sm:hidden"
        >
          <Link
            href={siteConfig.links.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 border border-gold/40 text-gold font-sans font-semibold text-[11px] uppercase tracking-[0.2em] px-8 py-4 transition-all duration-300"
          >
            <InstagramIcon className="w-3.5 h-3.5" />
            Ver perfil no Instagram
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
