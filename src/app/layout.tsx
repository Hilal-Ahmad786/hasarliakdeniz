import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import FloatContactButtons from "@/components/layout/FloatContactButtons";

export const metadata = {
  title: "Hasarlı Araç Alımı – Akdeniz Bölgesi",
  description: "Akdeniz’de hasarlı/kazalı araçlarınızı kurumsal ve şeffaf süreçle satın alıyoruz.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="tr">
      <body className="min-h-screen bg-white text-slate-900 antialiased">
        <div className="flex min-h-screen flex-col">
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
        </div>
        {/* floating call & WhatsApp buttons */}
        <FloatContactButtons />
      </body>
    </html>
  );
}
