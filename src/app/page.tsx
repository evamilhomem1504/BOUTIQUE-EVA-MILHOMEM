import { siteConfig } from "@/config/site";

export default function HomePage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center">
      <div className="text-center space-y-4 container-boutique">
        <h1 className="font-heading text-5xl font-bold tracking-tight text-gradient-gold">
          {siteConfig.name}
        </h1>
        <p className="text-muted-foreground text-lg max-w-md mx-auto">
          {siteConfig.description}
        </p>
        <p className="text-sm text-muted-foreground">
          Base do projeto configurada com sucesso. Pronto para desenvolver.
        </p>
      </div>
    </main>
  );
}
