import Link from "next/link";
import { Breadcrumb } from "@/components/Breadcrumb";
import { Icon } from "@/components/Icon";
import { Newsletter } from "@/components/Newsletter";
import { BLOG_POSTS } from "@/lib/data";

export default function BlogPage() {
  const items = [...BLOG_POSTS, ...BLOG_POSTS];
  return (
    <>
      <section className="page-head">
        <div className="container">
          <Breadcrumb items={[{ label: "Início", href: "/" }, { label: "Blog" }]} />
          <span className="eyebrow" style={{ fontWeight: 700 }}>
            Conteúdo para revendedores
          </span>
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
