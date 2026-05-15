import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Breadcrumb } from "@/components/Breadcrumb";
import { CategoryFilter } from "@/components/CategoryFilter";
import { ProductCard } from "@/components/ProductCard";
import { BigCTA } from "@/components/BigCTA";
import { Newsletter } from "@/components/Newsletter";
import {
  findCategoryBySlug,
  findSubcategoryBySlug,
  productsInSubcategory,
  SUBCATEGORIES,
  CATEGORIES,
} from "@/lib/data";

export function generateStaticParams() {
  return SUBCATEGORIES.map((s) => ({
    categoria: s.parentCategory,
    subcategoria: s.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ categoria: string; subcategoria: string }>;
}): Promise<Metadata> {
  const { categoria, subcategoria } = await params;
  const category = findCategoryBySlug(categoria);
  const sub = findSubcategoryBySlug(categoria, subcategoria);
  if (!category || !sub) {
    return { title: "Subcategoria não encontrada | Med Live Well", robots: { index: false } };
  }
  const title = `${sub.label} | ${category.label} | Med Live Well`;
  const description = `Catálogo de ${sub.label.toLowerCase()} disponível para lojistas parceiros da Med Live Well. Distribuidor com garantia de 5 anos e produtos registrados na ANVISA.`;
  const canonical = `/produtos/${category.slug}/${sub.slug}`;
  return {
    title,
    description,
    alternates: { canonical },
    openGraph: {
      url: canonical,
      title,
      description,
      ...(category.image ? { images: [{ url: category.image, alt: category.label }] } : {}),
    },
    twitter: {
      title,
      description,
      ...(category.image ? { images: [category.image] } : {}),
    },
  };
}

export default async function SubcategoryPage({
  params,
}: {
  params: Promise<{ categoria: string; subcategoria: string }>;
}) {
  const { categoria, subcategoria } = await params;
  const category = findCategoryBySlug(categoria);
  if (!category) notFound();
  const sub = findSubcategoryBySlug(categoria, subcategoria);
  if (!sub) notFound();

  const items = productsInSubcategory(category, sub);

  return (
    <>
      <section className="page-head">
        <div className="container">
          <Breadcrumb
            items={[
              { label: "Início", href: "/" },
              { label: "Produtos", href: "/produtos" },
              { label: category.label, href: `/produtos/${category.slug}` },
              { label: sub.label },
            ]}
          />
          <h1>{sub.label}</h1>
        </div>
      </section>

      <div className="container">
        <CategoryFilter />

        {items.length > 0 ? (
          <div className="prod-grid">
            {items.map((p) => (
              <ProductCard key={p.code} product={p} />
            ))}
          </div>
        ) : (
          <EmptyState />
        )}
      </div>

      <BigCTA />
      <Newsletter />
    </>
  );
}

// Avoid unused-import warning when CATEGORIES is only referenced for typing helpers.
void CATEGORIES;

function EmptyState() {
  return (
    <div
      style={{
        padding: "48px 24px",
        textAlign: "center",
        background: "var(--paper-2)",
        borderRadius: "var(--radius-lg)",
        color: "var(--ink-2)",
        margin: "32px 0 56px",
      }}
    >
      Em breve novos produtos nesta subcategoria.
    </div>
  );
}
