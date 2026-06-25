"use client";

import { motion } from "framer-motion";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Ana Paula M.",
    location: "Conceição do Araguaia",
    text: "Comprei o Conjunto Alfaiataria Verde e recebi vários elogios no trabalho. A qualidade é impecável e o atendimento foi super atencioso. Com certeza voltarei!",
    product: "Conjunto Alfaiataria Verde",
  },
  {
    name: "Fernanda R.",
    location: "Redenção, PA",
    text: "Pedi pelo WhatsApp, fui muito bem atendida e recebi em casa rapidinho. O Maiô Chocolate com Bojo é lindo demais, ficou perfeito. Super recomendo!",
    product: "Maiô Chocolate com Bojo",
  },
  {
    name: "Carla S.",
    location: "Xinguara, PA",
    text: "A boutique tem um gosto incrível pra escolher as peças. Cada vez que entro no site acho algo novo e especial. As bolsas Santa Lolla são um capítulo à parte!",
    product: "Bolsa Santa Lolla Palha",
  },
  {
    name: "Juliana T.",
    location: "Conceição do Araguaia",
    text: "Me ajudaram a montar um look completo para uma festa. Deram sugestões incríveis pelo WhatsApp. Produto chegou embalado com muito carinho. Adorei!",
    product: "Vestido Elegância Off White",
  },
  {
    name: "Mariana L.",
    location: "Marabá, PA",
    text: "Já comprei várias vezes e nunca me decepcionei. As peças são de qualidade premium e chegam sempre no prazo. A consultoria de moda faz toda a diferença!",
    product: "Look Chocolate Minimal",
  },
];

export function Testimonials() {
  return (
    <section className="bg-off-white py-20 md:py-28 overflow-hidden">
      <div className="container-boutique">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-14"
        >
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-gold mb-3">
            Depoimentos
          </p>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-light text-noir leading-tight">
            O que nossas clientes dizem
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {testimonials.slice(0, 3).map((t, i) => (
            <TestimonialCard key={i} testimonial={t} index={i} />
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 mt-4 md:mt-6 md:max-w-2xl lg:max-w-3xl md:mx-auto">
          {testimonials.slice(3).map((t, i) => (
            <TestimonialCard key={i + 3} testimonial={t} index={i + 3} />
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-center text-[11px] text-muted-foreground mt-10 uppercase tracking-widest"
        >
          Junte-se às clientes que já confiam na Eva Milhomem
        </motion.p>
      </div>
    </section>
  );
}

function TestimonialCard({
  testimonial,
  index,
}: {
  testimonial: (typeof testimonials)[0];
  index: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.6, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
      className="bg-white border border-noir/5 p-6 md:p-8 flex flex-col gap-4"
    >
      {/* Estrelas */}
      <div className="flex gap-1">
        {Array.from({ length: 5 }).map((_, i) => (
          <Star key={i} size={13} className="fill-gold text-gold" />
        ))}
      </div>

      {/* Aspas decorativas */}
      <span className="text-gold/20 font-heading text-6xl leading-none -mt-2 select-none">
        &ldquo;
      </span>

      {/* Texto */}
      <p className="text-noir/70 font-sans text-sm leading-relaxed -mt-8">
        {testimonial.text}
      </p>

      {/* Produto referenciado */}
      <p className="text-[10px] uppercase tracking-widest text-gold font-semibold">
        {testimonial.product}
      </p>

      {/* Divisor */}
      <div className="h-px bg-noir/8" />

      {/* Autora */}
      <div className="flex flex-col">
        <span className="font-heading text-sm font-semibold text-noir">
          {testimonial.name}
        </span>
        <span className="text-[11px] text-muted-foreground font-sans">
          {testimonial.location}
        </span>
      </div>
    </motion.div>
  );
}
