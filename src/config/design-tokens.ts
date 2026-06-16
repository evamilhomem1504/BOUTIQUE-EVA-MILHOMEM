export const designTokens = {
  colors: {
    brand: {
      primary: "#1a0a00",    // marrom escuro — sofisticação
      secondary: "#c9a96e",  // dourado rosé — luxo
      accent: "#f5e6d3",     // creme — leveza
      surface: "#faf7f4",    // off-white quente — elegância
    },
    neutral: {
      50: "#fafafa",
      100: "#f5f5f5",
      900: "#171717",
    },
  },
  fonts: {
    heading: "var(--font-playfair)",   // serif elegante
    body: "var(--font-inter)",         // sans-serif legível
  },
  spacing: {
    section: "py-24 md:py-32",
    container: "mx-auto max-w-7xl px-4 sm:px-6 lg:px-8",
  },
} as const;
