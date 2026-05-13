import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/Button";
import { Icon } from "@/components/Icon";
import { CategoryGlyph } from "@/components/CategoryGlyph";
import { JsonLd } from "@/components/JsonLd";
import { faqSchema, organizationSchema } from "@/lib/schema";
import { FAQ_ITEMS } from "@/lib/faq";
import { BlogGlyph } from "@/components/BlogGlyph";
import { FAQ } from "@/components/FAQ";
import { BigCTA } from "@/components/BigCTA";
import { Newsletter } from "@/components/Newsletter";
import { CATEGORIES, BLOG_POSTS } from "@/lib/data";

export const metadata: Metadata = {
  alternates: { canonical: "/" },
  openGraph: { url: "/" },
};

export default function HomePage() {
  return (
    <>
      <JsonLd data={organizationSchema()} />
      <JsonLd data={faqSchema(FAQ_ITEMS)} />
      <section className="hero">
        <div className="hero-grid">
          <div className="hero-text">
            <span className="eyebrow no-dash" style={{ fontWeight: 900, fontSize: 11.5 }}>
              Importadora B2B de produtos de saúde
            </span>
            <h1 style={{ marginTop: 14 }}>
              Produtos de mobilidade <br className="br-desktop" />
              e reabilitação que seus <br className="br-desktop" />
              clientes <span className="accent">precisam</span>, com <br className="br-desktop" />
              garantia de 5 anos.
            </h1>
            <p className="lead">
              A Med Live Well fornece andadores, cadeiras de banho, muletas, barras de apoio e
              muito mais para lojistas parceiros.
              <br />
              Qualidade, agilidade e atendimento próximo em cada pedido.
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
              <span>Produtos registrados na ANVISA</span>
            </div>
          </div>

          <div className="hero-visual">
            <Image
              src="/images/hero-banner.png"
              alt="Senhora idosa caminhando em shopping com andador MED 520 preto brilhante da Med Live Well"
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

      <section className="section" style={{ paddingTop: 64 }}>
        <div className="container">
          <div className="sec-head">
            <div className="left">
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
                      alt={`Categoria ${c.label}`}
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
        style={{ background: "var(--paper-2)", paddingTop: 40, paddingBottom: 96 }}
      >
        <div className="container">
          <div className="sec-head">
            <div className="left">
              <h2>Feito para quem tem loja.</h2>
            </div>
          </div>
          <div className="for-who-grid">
            <div className="who-img-placeholder" aria-hidden="true">
              <span>Imagem aqui</span>
            </div>
            <div className="channel-card">
              <h3>Lojas revendedoras</h3>
              <p className="desc">
                Farmácias, lojas de ortopedia e clínicas de fisioterapia com tabela de
                distribuidor e margem saudável.
              </p>
              <div className="list">
                <div className="list-item">
                  <Icon.store /> Farmácias
                </div>
                <div className="list-item">
                  <Icon.shield /> Ortopedia
                </div>
                <div className="list-item">
                  <Icon.users /> Clínicas
                </div>
              </div>
              <Button variant="primary" href="/para-quem-vendemos">
                Quero ser loja parceira
              </Button>
            </div>
          </div>
        </div>
      </section>

      <FAQ />

      <section className="section" style={{ paddingTop: 64 }}>
        <div className="container">
          <div className="sec-head">
            <div className="left">
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
