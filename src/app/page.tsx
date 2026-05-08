import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/Button";
import { Icon } from "@/components/Icon";
import { CategoryGlyph } from "@/components/CategoryGlyph";
import { BlogGlyph } from "@/components/BlogGlyph";
import { FAQ } from "@/components/FAQ";
import { BigCTA } from "@/components/BigCTA";
import { Newsletter } from "@/components/Newsletter";
import { CATEGORIES, BLOG_POSTS } from "@/lib/data";

export default function HomePage() {
  return (
    <>
      <section className="hero">
        <div className="hero-grid">
          <div className="hero-text">
            <span className="eyebrow no-dash" style={{ fontWeight: 900, fontSize: 11.5 }}>
              Importadora B2B de produtos de saúde
            </span>
            <h1 style={{ marginTop: 14 }}>
              Produtos de reabilitação <br />
              que seus clientes <span className="accent">precisam</span>, <br />
              entregues em todo o Brasil.
            </h1>
            <p className="lead">
              A Med Live fornece andadores, cadeiras de banho, muletas, barras de apoio e muito
              mais para marketplaces e lojas revendedoras. Qualidade, agilidade e atendimento
              próximo em cada pedido.
            </p>
            <div className="hero-actions">
              <Button variant="primary" href="/seja-revendedor">
                Quero ser revendedor
              </Button>
              <Button variant="ghost" href="/produtos">
                Ver catálogo
              </Button>
            </div>
            <div className="hero-trust">
              <Icon.shield />
              <span>Produtos certificados · ANVISA · INMETRO</span>
            </div>
          </div>

          <div className="hero-visual">
            <Image
              src="/images/hero-banner.png"
              alt="Med Live Well — distribuidora B2B de produtos de reabilitação"
              className="hero-photo"
              fill
              priority
              sizes="(max-width: 960px) 100vw, 60vw"
            />
          </div>
        </div>
      </section>

      <section className="metrics">
        <div className="container metrics-grid">
          <div className="metric">
            <div className="n">30+</div>
            <div className="l">Produtos em catálogo</div>
          </div>
          <div className="metric">
            <div className="n">
              24<span className="suffix">h</span>
            </div>
            <div className="l">Tempo médio de resposta</div>
          </div>
          <div className="metric">
            <div className="n">27</div>
            <div className="l">Estados atendidos</div>
          </div>
          <div className="metric">
            <div className="n">
              98<span className="suffix">%</span>
            </div>
            <div className="l">Satisfação de revendedores</div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="sec-head">
            <div className="left">
              <span className="eyebrow">Nosso catálogo</span>
              <h2>Tudo que seu cliente precisa, de um fornecedor só.</h2>
            </div>
            <Button variant="ghost" href="/produtos">
              Ver todos os produtos
            </Button>
          </div>
          <div className="cat-grid">
            {CATEGORIES.map((c) => (
              <Link key={c.id} href={`/produtos?cat=${c.id}`} className="cat-card">
                <span className="count">
                  {c.count} {c.count === 1 ? "modelo" : "modelos"}
                </span>
                <h3>{c.label}</h3>
                <p>{c.desc}</p>
                <div className="visual">
                  {c.image ? (
                    <Image
                      src={c.image}
                      alt={c.label}
                      className="cat-card-img"
                      fill
                      sizes="(max-width: 960px) 100vw, 33vw"
                      style={c.imageTransform ? { transform: c.imageTransform } : undefined}
                    />
                  ) : (
                    <CategoryGlyph id={c.id} />
                  )}
                </div>
                <span className="cat-card-btn">
                  Ver categoria <Icon.arrow />
                </span>
                <div className="go">
                  <Icon.arrow />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section
        className="section"
        style={{ background: "var(--paper-2)", paddingTop: 80, paddingBottom: 96 }}
      >
        <div className="container">
          <div className="sec-head">
            <div className="left">
              <h2>Feito para quem tem loja.</h2>
            </div>
          </div>
          <div className="for-who-grid">
            <div className="who-card">
              <span className="tag" style={{ fontWeight: 900 }}>
                Marketplaces
              </span>
              <h3>Mercado Livre, Amazon, Shopee</h3>
              <p style={{ fontWeight: 400, lineHeight: 1.4 }}>
                Fornecemos para sellers e operadores de Mercado Livre, Amazon, Shopee e outros.
                {"\n\n"}Catálogo pronto, fotos e descrições dispóniveis para listagem imediata.
              </p>
              <div className="cta-row">
                <Link
                  href="/marketplaces"
                  className="btn btn-primary"
                  style={{ backgroundColor: "rgb(240, 138, 43)" }}
                >
                  Saiba mais <Icon.arrow />
                </Link>
              </div>
            </div>
            <div className="who-card dark">
              <span className="tag" style={{ fontWeight: 900 }}>
                Lojas revendedoras
              </span>
              <h3 style={{ color: "rgb(255, 255, 255)" }}>Lojas revendedoras</h3>
              <p>
                Preços de distribuidor com margem saudável para sua loja física ou e-commerce
                próprio.
              </p>
              <div className="cta-row">
                <Link
                  href="/lojas-revendedoras"
                  className="btn btn-accent"
                  style={{ backgroundColor: "rgb(251, 250, 247)", color: "var(--cobalto)" }}
                >
                  Saiba Mais <Icon.arrow />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <FAQ />

      <section className="section">
        <div className="container">
          <div className="sec-head">
            <div className="left">
              <span className="eyebrow" style={{ fontWeight: 800 }}>
                Conteúdo Med Live
              </span>
              <h2>Conteúdo para quem cuida</h2>
            </div>
            <Button variant="ghost" href="/blog">
              Todos os artigos
            </Button>
          </div>
          <div className="blog-grid">
            {BLOG_POSTS.map((p, i) => (
              <Link key={i} href="/blog" className="blog-card">
                <div
                  className="img"
                  style={{
                    background: `linear-gradient(135deg, ${p.gradient[0]}, ${p.gradient[1]})`,
                  }}
                >
                  <span className="tag">{p.tag}</span>
                  <BlogGlyph i={i} />
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

      <BigCTA />
      <Newsletter />
    </>
  );
}
