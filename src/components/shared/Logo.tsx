import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";

interface LogoProps {
  /** "light" = versão sobre fundo escuro | "dark" = sobre fundo claro */
  variant?: "light" | "dark";
  width?: number;
  className?: string;
  linkClassName?: string;
}

export function Logo({
  variant = "light",
  width = 160,
  className,
  linkClassName,
}: LogoProps) {
  const height = Math.round(width * 0.45); // proporção da imagem (landscape)

  return (
    <Link
      href="/"
      aria-label="Boutique Eva Milhomem — Página inicial"
      className={cn("inline-flex items-center", linkClassName)}
    >
      <Image
        src="/logo.png"
        alt="Eva Milhomem"
        width={width}
        height={height}
        priority
        className={cn(
          "object-contain transition-all duration-300",
          // Sobre fundo claro: inverte para que o texto dourado apareça
          variant === "dark" && "brightness-0",
          className
        )}
      />
    </Link>
  );
}
