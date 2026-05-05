"use client";

import Image from "next/image";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { Suspense, useMemo } from "react";
import { Breadcrumb } from "@/components/Breadcrumb";
import { Icon } from "@/components/Icon";
import { CategoryGlyph } from "@/components/CategoryGlyph";
import { BigCTA } from "@/components/BigCTA";
import { Newsletter } from "@/components/Newsletter";
import { CATEGORIES, PRODUCTS, productSlug } from "@/lib/data";

function ProdutosContent() {
  const params = useSearchParams();
  const filter = params.get("cat") || "all";

  const groups = useMemo(() => {
    if (filter === "all") {
      return CATEGORIES.map((c) => ({
        cat: c,
        items: PRODUCTS.filter((p) => p.cat === c.id),
      })).filter((g) => g.items.length);
    }
    const c = CATEGORIES.find((c) => c.id === filter);
    return c ? [{ cat: c, items: PRODUCTS.filter((p) => p.cat === filter) }] : [];
  }, [filter]);

  const filterHref = (id: string) => (id === "all" ? "/produtos" : `/produtos?cat=${id}`);

  return (
    <>
      <section className="page-head">
        <div className="container">
          <Breadcrumb items={[{ label: "Início", href: "/" }, { label: "Produtos" }]} />
          <h1>Catálogo de produtos</h1>
        </div>
      </section>

      <div className="container">
        <div className="filters">
          <Link href={filterHref("all")} className={"filter-chip " + (filter === "all" ? "active" : "")}>
            Todos <span className="count">{PRODUCTS.length}</span>
          </Link>
          {CATEGORIES.map((c) => (
            <Link
              key={c.id}
              href={filterHref(c.id)}
              className={"filter-chip " + (filter === c.id ? "active" : "")}
            >
              {c.label} <span className="count">{c.count}</span>
            </Link>
          ))}
        </div>

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
                <Link key={p.code} href={`/produto/${productSlug(p.code)}`} className="prod-card">
                  <div className="visual">
                    {p.image ? (
                      <Image
                        src={p.image}
                        alt={p.name}
                        className="prod-thumb"
                        width={400}
                        height={300}
                      />
                    ) : (
                      <CategoryGlyph id={p.cat} />
                    )}
                  </div>
                  <span className="code" style={{ fontWeight: 700 }}>
                    {p.code}
                  </span>
                  <h4>{p.name}</h4>
                  <p className="desc">{p.desc}</p>
                  <div className="specs">
                    {p.specs.map((s, i) => (
                      <span key={i} className="spec">
                        {s}
                      </span>
                    ))}
                  </div>
                  <span className="cta">
                    Ver produto
                    <Icon.arrow />
                  </span>
                </Link>
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

export default function ProdutosPage() {
  return (
    <Suspense fallback={null}>
      <ProdutosContent />
    </Suspense>
  );
}
