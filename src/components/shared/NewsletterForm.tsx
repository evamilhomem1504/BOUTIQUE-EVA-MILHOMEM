"use client";

import { useState } from "react";
import { toast } from "sonner";

export function NewsletterForm() {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!email) return;
    setLoading(true);
    await new Promise((r) => setTimeout(r, 800));
    setLoading(false);
    toast.success("Inscrito com sucesso! Obrigada.");
    setEmail("");
  }

  return (
    <form onSubmit={handleSubmit} className="flex w-full md:w-auto gap-0">
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="seu@email.com"
        className="w-full md:w-72 bg-white/10 border border-white/20 text-off-white placeholder:text-white/40 px-4 py-3 text-sm outline-none focus:border-gold transition-colors"
      />
      <button
        type="submit"
        disabled={loading}
        className="bg-gold text-noir px-5 py-3 text-xs font-bold uppercase tracking-widest hover:bg-gold-light transition-colors whitespace-nowrap disabled:opacity-60"
      >
        {loading ? "…" : "Inscrever"}
      </button>
    </form>
  );
}
