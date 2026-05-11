import type { Metadata } from "next";
import { Catamaran } from "next/font/google";
import { GoogleAnalytics } from "@next/third-parties/google";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { CatalogGate } from "@/components/CatalogGate";
import { SITE_URL } from "@/lib/site";
import "./globals.css";

const catamaran = Catamaran({
  subsets: ["latin", "latin-ext"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-catamaran",
  display: "swap",
});

const SITE_NAME = "Med Live Well";
const DEFAULT_TITLE = "Med Live Well | Produtos de mobilidade e reabilitação";
const DEFAULT_DESCRIPTION =
  "Distribuidora B2B de produtos de mobilidade e reabilitação. Andadores, cadeiras de rodas e soluções completas para lojas, clínicas e revendedores.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: DEFAULT_TITLE,
    template: "%s",
  },
  description: DEFAULT_DESCRIPTION,
  applicationName: SITE_NAME,
  openGraph: {
    type: "website",
    locale: "pt_BR",
    siteName: SITE_NAME,
    title: DEFAULT_TITLE,
    description: DEFAULT_DESCRIPTION,
    url: SITE_URL,
    images: [
      {
        url: "/images/medlive-logo.png",
        width: 500,
        height: 500,
        alt: "Logo Med Live Well",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: DEFAULT_TITLE,
    description: DEFAULT_DESCRIPTION,
    images: ["/images/medlive-logo.png"],
  },
  verification: {
    google: "uMHMs5nBiYx98syaI0UMG2m6gNNuXL_xAhTerYJ_kjU",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const gaId = process.env.NEXT_PUBLIC_GA_ID;
  return (
    <html lang="pt-BR" className={catamaran.variable}>
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
        <CatalogGate />
        {gaId && <GoogleAnalytics gaId={gaId} />}
      </body>
    </html>
  );
}
