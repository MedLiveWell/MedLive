import Link from "next/link";
import { notFound } from "next/navigation";
import { PRODUCTS, productSlug } from "@/lib/data";
import { ProductDetail } from "./ProductDetail";

export function generateStaticParams() {
  return PRODUCTS.map((p) => ({ slug: productSlug(p.code) }));
}

export default async function ProdutoPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const product = PRODUCTS.find((p) => productSlug(p.code) === slug);

  if (!product) {
    return (
      <section className="section">
        <div className="container" style={{ padding: "80px 0", textAlign: "center" }}>
          <span className="eyebrow">404</span>
          <h1 style={{ marginTop: 16 }}>Produto não encontrado</h1>
          <p className="lead" style={{ marginBottom: 32 }}>
            O código que você procurou não está em nosso catálogo.
          </p>
          <Link href="/produtos" className="btn btn-primary">
            Ver catálogo completo
          </Link>
        </div>
      </section>
    );
  }

  return <ProductDetail product={product} />;
}

// Avoid unused warning
void notFound;
