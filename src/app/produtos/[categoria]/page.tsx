import type { Metadata } from "next";
import { notFound, permanentRedirect } from "next/navigation";
import { Breadcrumb } from "@/components/Breadcrumb";
import { CategoryFilter } from "@/components/CategoryFilter";
import { ProductCard } from "@/components/ProductCard";
import { BigCTA } from "@/components/BigCTA";
import { Newsletter } from "@/components/Newsletter";
import {
  CATEGORIES,
  findCategoryBySlug,
  findProductBySlug,
  productsInCategory,
} from "@/lib/data";

export function generateStaticParams() {
  return CATEGORIES.map((c) => ({ categoria: c.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ categoria: string }>;
}): Promise<Metadata> {
  const { categoria } = await params;
  const category = findCategoryBySlug(categoria);
  if (!category) {
    return { title: "Categoria não encontrada | Med Live Well", robots: { index: false } };
  }
  const title = `${category.label} | Med Live Well`;
  const description = `Catálogo de ${category.label.toLowerCase()} disponível para lojistas parceiros da Med Live Well. Distribuidor com garantia de 5 anos e produtos registrados na ANVISA.`;
  const canonical = `/produtos/${category.slug}`;
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

export default async function CategoryPage({
  params,
}: {
  params: Promise<{ categoria: string }>;
}) {
  const { categoria } = await params;
  const category = findCategoryBySlug(categoria);

  if (!category) {
    // If the slug actually matches a product, permanent redirect to /produto/[slug].
    const product = findProductBySlug(categoria);
    if (product) {
      permanentRedirect(`/produto/${categoria}`);
    }
    notFound();
  }

  const items = productsInCategory(category);

  return (
    <>
      <section className="page-head">
        <div className="container">
          <Breadcrumb
            items={[
              { label: "Início", href: "/" },
              { label: "Produtos", href: "/produtos" },
              { label: category.label },
            ]}
          />
          <h1>{category.label}</h1>
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
      Em breve novos produtos nesta categoria.
    </div>
  );
}
