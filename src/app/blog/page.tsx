import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumb } from "@/components/Breadcrumb";
import { Icon } from "@/components/Icon";
import { Newsletter } from "@/components/Newsletter";
import { BLOG_POSTS } from "@/lib/data";

const TITLE = "Blog | Med Live Well";
const DESCRIPTION =
  "Conteúdo sobre mobilidade, reabilitação, autonomia e qualidade de vida. Dicas e novidades do mercado de produtos de saúde.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: "/blog" },
  openGraph: { url: "/blog", title: TITLE, description: DESCRIPTION },
  twitter: { title: TITLE, description: DESCRIPTION },
};

export default function BlogPage() {
  const items = [...BLOG_POSTS, ...BLOG_POSTS];
  return (
    <>
      <section className="page-head" style={{ paddingTop: 16 }}>
        <div className="container">
          <Breadcrumb items={[{ label: "Início", href: "/" }, { label: "Blog" }]} />
          <h1 style={{ marginTop: 18 }}>Insights de mercado e apoio ao parceiro.</h1>
          <p className="lead">
            Mercado de reabilitação, dicas para seu time de vendas e novidades de produto.
          </p>
        </div>
      </section>
      <section className="section">
        <div className="container">
          <div className="blog-grid">
            {items.map((p, i) => (
              <Link key={i} href="#" className="blog-card">
                <div
                  className="img"
                  style={{
                    background: `linear-gradient(135deg, ${p.gradient[0]}, ${p.gradient[1]})`,
                  }}
                >
                  <span className="tag">{p.tag}</span>
                </div>
                <div className="body">
                  <div className="meta">
                    {p.date} · {p.read} leitura
                  </div>
                  <h4>{p.title}</h4>
                  <p>{p.excerpt}</p>
                  <span className="read">
                    Ler artigo <Icon.arrow />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
      <Newsletter />
    </>
  );
}
