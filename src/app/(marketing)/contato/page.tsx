"use client";

import Image from "next/image";
import { useState } from "react";
import { Send, MapPin, Clock, Phone, Mail } from "lucide-react";
import { InstagramIcon } from "@/components/shared/InstagramIcon";
import { motion } from "framer-motion";
import { toast } from "sonner";
import { AnimatedSection } from "@/components/shared/AnimatedSection";
import { SectionHeader } from "@/components/shared/SectionHeader";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { siteConfig } from "@/config/site";

const BASE = "https://images.unsplash.com";

const faqs = [
  {
    q: "Qual o prazo de entrega?",
    a: "Entregamos em até 5 dias úteis para São Paulo e até 10 dias para demais regiões. Também oferecemos retirada na loja.",
  },
  {
    q: "Como funciona a política de troca?",
    a: "Aceitamos trocas em até 30 dias após a compra, desde que a peça esteja sem uso, com etiqueta e embalagem original.",
  },
  {
    q: "Fazem atendimento por WhatsApp?",
    a: "Sim! Nossa equipe de consultoras atende via WhatsApp de segunda a sábado, das 10h às 20h.",
  },
  {
    q: "Posso agendar uma consultoria de moda?",
    a: "Com prazer! Entre em contato pelo WhatsApp ou e-mail para agendar uma consultoria personalizada, presencial ou online.",
  },
  {
    q: "Vocês têm programa de fidelidade?",
    a: "Sim. Clientes frequentes recebem acesso antecipado a novas coleções, descontos exclusivos e convites para eventos.",
  },
];

export default function ContatoPage() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) {
      toast.error("Preencha os campos obrigatórios.");
      return;
    }
    setLoading(true);
    await new Promise((r) => setTimeout(r, 1200));
    setLoading(false);
    toast.success("Mensagem enviada! Retornaremos em breve.");
    setForm({ name: "", email: "", phone: "", subject: "", message: "" });
  }

  return (
    <>
      {/* Hero */}
      <section className="relative h-[40vh] min-h-[300px] flex items-end overflow-hidden pt-20">
        <Image
          src={`${BASE}/photo-1512436991641-6745cdb1723f?w=1400&h=500&fit=crop`}
          alt="Contato Boutique Eva Milhomem"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-noir via-noir/60 to-transparent" />
        <div className="relative z-10 container-boutique pb-12">
          <p className="text-gold text-xs font-semibold uppercase tracking-[0.3em] mb-3">
            Fale conosco
          </p>
          <h1 className="font-heading text-5xl md:text-6xl font-bold text-off-white">
            Contato
          </h1>
        </div>
      </section>

      {/* Formulário + Info */}
      <section className="section-padding">
        <div className="container-boutique">
          <div className="grid lg:grid-cols-5 gap-14">
            {/* Formulário */}
            <AnimatedSection direction="left" className="lg:col-span-3">
              <SectionHeader
                eyebrow="Mensagem"
                title="Envie sua mensagem"
                subtitle="Responderemos em até 24 horas úteis."
                centered={false}
              />

              <form onSubmit={handleSubmit} className="mt-8 space-y-5">
                <div className="grid sm:grid-cols-2 gap-5">
                  <div className="space-y-1.5">
                    <Label htmlFor="name" className="text-xs uppercase tracking-wider font-semibold">
                      Nome *
                    </Label>
                    <Input
                      id="name"
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      placeholder="Seu nome completo"
                      className="rounded-none border-border focus-visible:ring-gold h-11"
                    />
                  </div>
                  <div className="space-y-1.5">
                    <Label htmlFor="email" className="text-xs uppercase tracking-wider font-semibold">
                      E-mail *
                    </Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={form.email}
                      onChange={handleChange}
                      placeholder="seu@email.com"
                      className="rounded-none border-border focus-visible:ring-gold h-11"
                    />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-5">
                  <div className="space-y-1.5">
                    <Label htmlFor="phone" className="text-xs uppercase tracking-wider font-semibold">
                      Telefone
                    </Label>
                    <Input
                      id="phone"
                      name="phone"
                      value={form.phone}
                      onChange={handleChange}
                      placeholder="(11) 9 9999-9999"
                      className="rounded-none border-border focus-visible:ring-gold h-11"
                    />
                  </div>
                  <div className="space-y-1.5">
                    <Label htmlFor="subject" className="text-xs uppercase tracking-wider font-semibold">
                      Assunto
                    </Label>
                    <select
                      id="subject"
                      name="subject"
                      value={form.subject}
                      onChange={handleChange}
                      className="w-full h-11 border border-border bg-background px-3 text-sm focus:outline-none focus:ring-1 focus:ring-gold rounded-none"
                    >
                      <option value="">Selecione</option>
                      <option value="consultoria">Consultoria de Moda</option>
                      <option value="produto">Dúvida sobre Produto</option>
                      <option value="troca">Troca / Devolução</option>
                      <option value="outros">Outros</option>
                    </select>
                  </div>
                </div>

                <div className="space-y-1.5">
                  <Label htmlFor="message" className="text-xs uppercase tracking-wider font-semibold">
                    Mensagem *
                  </Label>
                  <textarea
                    id="message"
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    rows={5}
                    placeholder="Como podemos te ajudar?"
                    className="w-full border border-border bg-background px-3 py-2.5 text-sm focus:outline-none focus:ring-1 focus:ring-gold resize-none rounded-none"
                  />
                </div>

                <motion.button
                  type="submit"
                  disabled={loading}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="inline-flex items-center gap-2 bg-noir text-off-white font-bold text-xs uppercase tracking-widest px-8 py-4 hover:bg-noir/80 transition-colors disabled:opacity-60"
                >
                  {loading ? (
                    <>Enviando…</>
                  ) : (
                    <>
                      Enviar Mensagem <Send size={14} />
                    </>
                  )}
                </motion.button>
              </form>
            </AnimatedSection>

            {/* Informações */}
            <AnimatedSection direction="right" className="lg:col-span-2">
              <SectionHeader
                eyebrow="Informações"
                title="Nos encontre"
                centered={false}
              />

              <div className="mt-8 space-y-6">
                <div className="flex gap-4">
                  <div className="w-9 h-9 rounded-full bg-gold/10 flex items-center justify-center shrink-0">
                    <MapPin size={16} className="text-gold" />
                  </div>
                  <div>
                    <p className="font-semibold text-sm text-noir">Endereço</p>
                    <p className="text-muted-foreground text-sm mt-0.5">
                      {siteConfig.contact.address}
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-9 h-9 rounded-full bg-gold/10 flex items-center justify-center shrink-0">
                    <Clock size={16} className="text-gold" />
                  </div>
                  <div>
                    <p className="font-semibold text-sm text-noir">Horário</p>
                    <p className="text-muted-foreground text-sm mt-0.5">
                      {siteConfig.contact.hours}
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-9 h-9 rounded-full bg-gold/10 flex items-center justify-center shrink-0">
                    <Phone size={16} className="text-gold" />
                  </div>
                  <div>
                    <p className="font-semibold text-sm text-noir">Telefone</p>
                    <a
                      href={`tel:${siteConfig.contact.phone}`}
                      className="text-muted-foreground text-sm mt-0.5 hover:text-gold transition-colors"
                    >
                      {siteConfig.contact.phone}
                    </a>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-9 h-9 rounded-full bg-gold/10 flex items-center justify-center shrink-0">
                    <Mail size={16} className="text-gold" />
                  </div>
                  <div>
                    <p className="font-semibold text-sm text-noir">E-mail</p>
                    <a
                      href={`mailto:${siteConfig.contact.email}`}
                      className="text-muted-foreground text-sm mt-0.5 hover:text-gold transition-colors"
                    >
                      {siteConfig.contact.email}
                    </a>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-9 h-9 rounded-full bg-gold/10 flex items-center justify-center shrink-0">
                    <InstagramIcon width={16} height={16} className="text-gold" />
                  </div>
                  <div>
                    <p className="font-semibold text-sm text-noir">Instagram</p>
                    <a
                      href={siteConfig.links.instagram}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted-foreground text-sm mt-0.5 hover:text-gold transition-colors"
                    >
                      @boutiquaevamilhomem
                    </a>
                  </div>
                </div>
              </div>

              {/* Mapa placeholder */}
              <div className="mt-8 relative aspect-[4/3] bg-secondary overflow-hidden border border-border">
                <Image
                  src={`${BASE}/photo-1512436991641-6745cdb1723f?w=500&h=375&fit=crop`}
                  alt="Localização"
                  fill
                  sizes="(max-width: 1024px) 100vw, 400px"
                  className="object-cover opacity-60"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center bg-off-white/90 px-4 py-3">
                    <MapPin size={20} className="text-gold mx-auto mb-1" />
                    <p className="text-xs font-semibold text-noir">Jardins, São Paulo</p>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-padding bg-off-white">
        <div className="container-boutique max-w-3xl">
          <AnimatedSection>
            <SectionHeader
              eyebrow="Dúvidas"
              title="Perguntas Frequentes"
            />
          </AnimatedSection>

          <AnimatedSection delay={0.1} className="mt-10">
            <Accordion className="space-y-2">
              {faqs.map((faq, i) => (
                <AccordionItem
                  key={i}
                  value={`faq-${i}`}
                  className="border border-border px-5 rounded-none"
                >
                  <AccordionTrigger className="text-sm font-semibold text-noir hover:text-gold hover:no-underline py-4">
                    {faq.q}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground text-sm leading-relaxed pb-4">
                    {faq.a}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
