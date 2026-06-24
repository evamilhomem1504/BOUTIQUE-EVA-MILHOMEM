export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <body className="bg-[#0f0f0f] text-white min-h-screen font-sans antialiased">
        {children}
      </body>
    </html>
  );
}
