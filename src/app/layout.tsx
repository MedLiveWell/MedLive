import type { Metadata } from "next";
import { Catamaran } from "next/font/google";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { CatalogGate } from "@/components/CatalogGate";
import "./globals.css";

const catamaran = Catamaran({
  subsets: ["latin", "latin-ext"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-catamaran",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Med Live Well — Distribuidora B2B de produtos de reabilitação",
  description:
    "Importadora B2B de produtos de saúde: andadores, cadeiras de banho, muletas, barras de apoio. Entregamos em todo o Brasil para lojas, clínicas e marketplaces.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR" className={catamaran.variable}>
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
        <CatalogGate />
      </body>
    </html>
  );
}
