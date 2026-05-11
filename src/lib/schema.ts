import type { Product, Category } from "./data";
import { SITE_URL } from "./site";

const BASE_URL = SITE_URL;

function asAbsolute(path: string): string {
  if (path.startsWith("http://") || path.startsWith("https://")) return path;
  return `${BASE_URL}${path.startsWith("/") ? path : `/${path}`}`;
}

export function organizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Med Live Well",
    legalName: "Med Live Well — Soluções em saúde",
    url: BASE_URL,
    logo: `${BASE_URL}/images/medlive-logo.png`,
    description:
      "Importadora e distribuidora B2B de produtos de reabilitação. Andadores, cadeiras de banho, muletas, barras de apoio e equipamentos para mobilidade entregues em todo o Brasil para lojas, clínicas e marketplaces.",
    sameAs: [],
    contactPoint: [
      {
        "@type": "ContactPoint",
        contactType: "sales",
        email: "comercial@medlivewell.com.br",
        telephone: "+55-11-4000-0000",
        areaServed: "BR",
        availableLanguage: "Portuguese",
      },
    ],
  };
}

export function breadcrumbSchema(items: Array<{ label: string; href?: string }>) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => {
      const entry: Record<string, unknown> = {
        "@type": "ListItem",
        position: i + 1,
        name: item.label,
      };
      if (item.href) entry.item = asAbsolute(item.href);
      return entry;
    }),
  };
}

export function productSchema(product: Product, category?: Category) {
  const images = product.images?.length
    ? product.images.map(asAbsolute)
    : product.image
    ? [asAbsolute(product.image)]
    : undefined;

  const additionalProperty = [
    ...(product.dimensions?.map(([k, v]) => ({
      "@type": "PropertyValue" as const,
      name: k,
      value: v,
    })) ?? []),
    ...(product.characteristics?.map(([k, v]) => ({
      "@type": "PropertyValue" as const,
      name: k,
      value: v,
    })) ?? []),
  ];

  return {
    "@context": "https://schema.org",
    "@type": "Product",
    name: product.name,
    sku: product.code,
    mpn: product.code,
    description: product.desc,
    ...(category ? { category: category.label } : {}),
    brand: { "@type": "Brand", name: "Med Live Well" },
    manufacturer: { "@type": "Organization", name: "Med Live Well" },
    ...(images ? { image: images } : {}),
    ...(additionalProperty.length ? { additionalProperty } : {}),
  };
}

export function faqSchema(items: Array<{ q: string; a: string }>) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.a,
      },
    })),
  };
}
