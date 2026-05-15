import type { Metadata } from "next";
import { Breadcrumb } from "@/components/Breadcrumb";
import { CategoryFilter } from "@/components/CategoryFilter";
import { ProductCard } from "@/components/ProductCard";
import { BigCTA } from "@/components/BigCTA";
import { Newsletter } from "@/components/Newsletter";
import { CATEGORIES, PRODUCTS } from "@/lib/data";

const TITLE = "Catálogo de produtos | Med Live Well";
const DESCRIPTION =
  "Catálogo completo Med Live Well: andadores, cadeiras de banho, muletas, barras de apoio, cadeiras de transferência e mais. Distribuidor B2B para lojas parceiras.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: "/produtos" },
  openGraph: { url: "/produtos", title: TITLE, description: DESCRIPTION },
  twitter: { title: TITLE, description: DESCRIPTION },
};

export default function ProdutosPage() {
  const groups = CATEGORIES.map((c) => ({
    cat: c,
    items: PRODUCTS.filter((p) => p.cat === c.id),
  })).filter((g) => g.items.length);

  return (
    <>
      <section className="page-head">
        <div className="container">
          <Breadcrumb items={[{ label: "Início", href: "/" }, { label: "Produtos" }]} />
          <h1>Catálogo de produtos</h1>
        </div>
      </section>

      <div className="container">
        <CategoryFilter />

        {groups.map((g) => (
          <div key={g.cat.id} className="cat-group">
            <div className="cat-group-head">
              <h3>{g.cat.label}</h3>
              <div className="meta">
                {g.items.length} {g.items.length === 1 ? "modelo" : "modelos"} · {g.cat.desc}
              </div>
            </div>
            <div className="prod-grid">
              {g.items.map((p) => (
                <ProductCard key={p.code} product={p} />
              ))}
            </div>
          </div>
        ))}
      </div>

      <BigCTA />
      <Newsletter />
    </>
  );
}
