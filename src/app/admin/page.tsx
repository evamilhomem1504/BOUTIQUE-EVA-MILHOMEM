"use client";

import { useState } from "react";
import { products } from "@/lib/data";
import { Copy, Check, MessageCircle, Users, ExternalLink } from "lucide-react";

const SITE_URL = "https://boutique-eva-milhomem.vercel.app";
const GROUP_LINK = "https://chat.whatsapp.com/CTEVwywfGQACVEyHjZllE4";
const WPP_NUMBER = "5594991703949";

function formatMsg(product: (typeof products)[0]) {
  const priceStr =
    product.price > 0
      ? `💰 *R$ ${product.price.toFixed(2).replace(".", ",")}* ou 10x de R$ ${(product.price / 10).toFixed(2).replace(".", ",")} no cartão`
      : "💰 *Consulte o preço*";

  const sizes =
    product.sizes && product.sizes.length > 0
      ? `📏 Tamanhos: ${product.sizes.join(" · ")}`
      : "";

  const colors =
    product.colors && product.colors.length > 0 && product.colors[0] !== "Único"
      ? `🎨 Cor: ${product.colors.join(", ")}`
      : "";

  const link = `🔗 ${SITE_URL}/produto/${product.slug}`;

  const lines = [
    `✨ *Nova chegada na Eva Milhomem!*`,
    ``,
    `👗 *${product.name}*`,
    priceStr,
    sizes,
    colors,
    ``,
    link,
    ``,
    `Para comprar ou saber mais, chame no privado! 🛍️`,
  ].filter((l) => l !== undefined && !(l === "" && false));

  return lines.join("\n");
}

function ProductRow({ product }: { product: (typeof products)[0] }) {
  const [copied, setCopied] = useState(false);

  const msg = formatMsg(product);
  const encodedMsg = encodeURIComponent(msg);
  const wppLink = `https://wa.me/${WPP_NUMBER}?text=${encodedMsg}`;

  function copy() {
    navigator.clipboard.writeText(msg);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  }

  return (
    <div className="border border-white/10 rounded-lg p-4 flex flex-col gap-3 bg-white/[0.03] hover:bg-white/[0.06] transition-colors">
      <div className="flex items-start justify-between gap-3">
        <div>
          <div className="flex items-center gap-2 flex-wrap">
            <span className="font-semibold text-white text-sm">{product.name}</span>
            {product.isNew && (
              <span className="text-[10px] bg-[#c9a84c]/20 text-[#c9a84c] px-2 py-0.5 rounded-full font-semibold uppercase tracking-wide">
                Novo
              </span>
            )}
          </div>
          <span className="text-white/40 text-xs">
            {product.category} ·{" "}
            {product.price > 0
              ? `R$ ${product.price.toFixed(2).replace(".", ",")}`
              : "Consulte"}
          </span>
        </div>
        <a
          href={`${SITE_URL}/produto/${product.slug}`}
          target="_blank"
          rel="noopener noreferrer"
          className="text-white/20 hover:text-white/60 transition-colors shrink-0"
        >
          <ExternalLink size={14} />
        </a>
      </div>

      {/* Prévia da mensagem */}
      <pre className="text-[11px] text-white/50 bg-black/30 rounded p-3 whitespace-pre-wrap leading-relaxed font-sans border border-white/5">
        {msg}
      </pre>

      {/* Botões */}
      <div className="flex flex-wrap gap-2">
        <button
          onClick={copy}
          className="flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white text-xs font-semibold uppercase tracking-wide px-4 py-2 rounded transition-colors"
        >
          {copied ? <Check size={13} className="text-green-400" /> : <Copy size={13} />}
          {copied ? "Copiado!" : "Copiar mensagem"}
        </button>

        <a
          href={wppLink}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 bg-[#25d366] hover:bg-[#1ebe5d] text-black text-xs font-semibold uppercase tracking-wide px-4 py-2 rounded transition-colors"
        >
          <MessageCircle size={13} />
          Enviar no privado
        </a>

        <a
          href={GROUP_LINK}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 bg-[#c9a84c] hover:bg-[#b8963e] text-black text-xs font-semibold uppercase tracking-wide px-4 py-2 rounded transition-colors"
        >
          <Users size={13} />
          Abrir Grupo VIP
        </a>
      </div>
    </div>
  );
}

export default function AdminPage() {
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState<"todos" | "novos">("novos");

  const visible = products
    .filter((p) => !p.groupedUnder)
    .filter((p) => (filter === "novos" ? p.isNew : true))
    .filter((p) =>
      search.trim() === ""
        ? true
        : p.name.toLowerCase().includes(search.toLowerCase())
    );

  return (
    <div className="min-h-screen p-6 max-w-2xl mx-auto">
      {/* Header */}
      <div className="mb-8">
        <div className="flex items-center gap-2 mb-1">
          <MessageCircle size={18} className="text-[#c9a84c]" />
          <h1 className="text-xl font-bold text-white">WhatsApp Marketing</h1>
        </div>
        <p className="text-white/40 text-sm">
          Copie a mensagem e cole no Grupo VIP ou envie direto no privado.
        </p>
      </div>

      {/* Filtros */}
      <div className="flex flex-col sm:flex-row gap-3 mb-6">
        <input
          type="text"
          placeholder="Buscar produto..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="flex-1 bg-white/5 border border-white/10 rounded px-4 py-2 text-sm text-white placeholder:text-white/30 outline-none focus:border-[#c9a84c]/50"
        />
        <div className="flex gap-2">
          <button
            onClick={() => setFilter("novos")}
            className={`px-4 py-2 text-xs font-semibold uppercase rounded transition-colors ${
              filter === "novos"
                ? "bg-[#c9a84c] text-black"
                : "bg-white/5 text-white/50 hover:bg-white/10"
            }`}
          >
            Novos ({products.filter((p) => p.isNew && !p.groupedUnder).length})
          </button>
          <button
            onClick={() => setFilter("todos")}
            className={`px-4 py-2 text-xs font-semibold uppercase rounded transition-colors ${
              filter === "todos"
                ? "bg-[#c9a84c] text-black"
                : "bg-white/5 text-white/50 hover:bg-white/10"
            }`}
          >
            Todos ({products.filter((p) => !p.groupedUnder).length})
          </button>
        </div>
      </div>

      {/* Lista */}
      {visible.length === 0 ? (
        <p className="text-white/30 text-sm text-center py-10">Nenhum produto encontrado.</p>
      ) : (
        <div className="flex flex-col gap-4">
          {visible.map((p) => (
            <ProductRow key={p.id} product={p} />
          ))}
        </div>
      )}

      <p className="text-center text-white/20 text-xs mt-10">
        Eva Milhomem · Página interna · não compartilhar
      </p>
    </div>
  );
}
