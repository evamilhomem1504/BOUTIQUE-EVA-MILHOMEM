"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { siteConfig } from "@/config/site";

export function WhatsAppButton() {
  const [hovered, setHovered] = useState(false);
  const message = encodeURIComponent(
    "Olá! Vim pelo site da Boutique Eva Milhomem e gostaria de mais informações."
  );
  const href = `https://wa.me/${siteConfig.whatsappNumber}?text=${message}`;

  return (
    <div className="fixed bottom-6 right-6 z-50 flex items-center gap-3">
      <AnimatePresence>
        {hovered && (
          <motion.div
            initial={{ opacity: 0, x: 10, scale: 0.95 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            exit={{ opacity: 0, x: 10, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="bg-noir text-off-white text-xs font-medium px-3 py-2 rounded shadow-lg whitespace-nowrap"
          >
            Fale conosco no WhatsApp
          </motion.div>
        )}
      </AnimatePresence>

      <motion.a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="WhatsApp"
        onHoverStart={() => setHovered(true)}
        onHoverEnd={() => setHovered(false)}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        className="relative flex items-center justify-center w-14 h-14 rounded-full shadow-2xl"
        style={{ background: "linear-gradient(135deg, #25d366, #128c7e)" }}
      >
        {/* Pulse ring */}
        <span className="absolute inset-0 rounded-full animate-ping opacity-25 bg-[#25d366]" />

        {/* WhatsApp icon SVG */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="white"
          width="26"
          height="26"
        >
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
          <path d="M12 0C5.373 0 0 5.373 0 12c0 2.127.558 4.12 1.533 5.848L.057 23.804a.5.5 0 0 0 .61.637l6.196-1.62A11.945 11.945 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22a9.946 9.946 0 0 1-5.193-1.453l-.371-.22-3.844 1.006 1.027-3.734-.242-.383A9.953 9.953 0 0 1 2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z" />
        </svg>
      </motion.a>
    </div>
  );
}
