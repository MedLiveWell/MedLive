import type { Metadata } from "next";
import Image from "next/image";
import { Breadcrumb } from "@/components/Breadcrumb";
import { Button } from "@/components/Button";
import { Icon } from "@/components/Icon";
import { Newsletter } from "@/components/Newsletter";
import { ProductCard } from "@/components/ProductCard";
import { RevendedorForm } from "@/components/RevendedorForm";
import { PRODUCTS } from "@/lib/data";

const TITLE = "Para quem vendemos | Med Live Well";
const DESCRIPTION =
  "Tabela de distribuidor com margem saudável para lojas revendedoras. Produtos de mobilidade e reabilitação Med Live Well entregues em todo o Brasil.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: "/para-quem-vendemos" },
  openGraph: { url: "/para-quem-vendemos", title: TITLE, description: DESCRIPTION },
  twitter: { title: TITLE, description: DESCRIPTION },
};

export default function ParaQuemVendemosPage() {
  const featured = PRODUCTS.filter((p) => p.vendemosHighlight);

  return (
    <>
      <section className="page-head" style={{ paddingTop: 16 }}>
        <div className="container">
          <Breadcrumb items={[{ label: "Início", href: "/" }, { label: "Para quem vendemos" }]} />
          <h1 style={{ marginTop: 18 }}>
            Sua parceria com{" "}
            <span style={{ color: "var(--tangerina)" }}>Med Live</span> começa aqui.
          </h1>
          <p className="lead">
            Atendemos farmácias, lojas ortopédicas, clínicas e hospitais em todo o Brasil.
          </p>
          <div className="hero-actions" style={{ marginTop: 28 }}>
            <Button variant="primary" href="/seja-revendedor">
              Quero ser loja parceira
            </Button>
            <Button variant="ghost" href="/produtos">
              Ver catálogo
            </Button>
          </div>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 32 }}>
        <div className="container">
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: 56,
              alignItems: "center",
            }}
          >
            <div>
              <h2>Por que abastecer sua loja com a Med Live</h2>
              <p style={{ marginTop: 14, color: "var(--ink-2)", fontSize: 16 }}>
                Importadora e distribuidora B2B comprometida com a operação de nossas
                <br className="br-desktop" /> lojas parceiras.
                <br />
                Tabela de distribuidor, consultor dedicado e um mix recomendado para sua loja
                para você montar uma vitrine completa e sem dor de cabeça.
              </p>
            </div>
            <div
              style={{
                position: "relative",
                borderRadius: "var(--radius-lg)",
                overflow: "hidden",
                aspectRatio: "16/10",
                background: "var(--paper-2)",
              }}
            >
              <Image
                src="/images/cd-despacho-medlive.jpg"
                alt="Centro de distribuição da Med Live Well em São Paulo, com funcionário preparando pedido para envio em meio a prateleiras de produtos de mobilidade e reabilitação"
                fill
                sizes="(max-width: 900px) 100vw, 50vw"
                style={{ objectFit: "cover" }}
              />
            </div>
          </div>

          <div className="why-grid" style={{ marginTop: 28 }}>
            <div className="why-card">
              <div className="icon">
                <Icon.tag />
              </div>
              <h4>Preço estável</h4>
              <p>
                Tabela de distribuidor com margem saudável e preço estável há mais de 12 meses.
                Previsibilidade para a sua loja planejar margem e estoque sem surpresas.
              </p>
            </div>
            <div className="why-card">
              <div className="icon">
                <Icon.badgeCheck />
              </div>
              <h4>Garantia de 5 anos</h4>
              <p>
                Cobertura de 5 anos em todos os produtos.
                <br />
                Tranquilidade para você vender produtos de mobilidade e reabilitação sem se
                preocupar com pós-venda.
              </p>
            </div>
            <div className="why-card">
              <div className="icon">
                <Icon.shield />
              </div>
              <h4>Certificações em dia</h4>
              <p>
                Todas as linhas seguem normas ANVISA, com laudos técnicos, fichas de produto e
                tudo o que sua loja precisa para vender com segurança.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section" style={{ background: "var(--paper-2)", paddingTop: 64 }}>
        <div className="container">
          <div className="sec-head">
            <div className="left">
              <h2>Para começar a vender hoje</h2>
              <p style={{ textWrap: "balance" }}>
                Uma seleção variada de equipamentos de mobilidade e reabilitação com andadores,
                cadeiras de banho, cadeiras de transferência, muletas e mais para montar uma
                vitrine completa.
              </p>
            </div>
            <Button variant="ghost" href="/produtos">
              Ver catálogo completo
            </Button>
          </div>
          <div className="prod-grid">
            {featured.map((p) => (
              <ProductCard key={p.code} product={p} />
            ))}
          </div>
        </div>
      </section>

      <section id="cadastro" className="section" style={{ paddingTop: 64 }}>
        <div className="container revende-grid">
          <div>
            <h2 style={{ marginBottom: 12 }}>
              Pronto para abastecer sua <br className="br-desktop" />
              loja com produtos <br className="br-desktop" />
              <span style={{ color: "var(--tangerina)" }}>Med Live</span>?
            </h2>
            <p style={{ color: "var(--ink-2)", fontSize: 16 }}>
              Preencha o formulário e nosso time comercial entrará em contato.
            </p>
            <div className="contact-alt" style={{ marginTop: 24 }}>
              <a href="#" className="item">
                <div className="ic">
                  <Icon.whatsapp />
                </div>
                <div>
                  <div className="lbl">WhatsApp</div>
                  <div className="val">(11) 4000-0000</div>
                </div>
              </a>
              <a href="mailto:comercial@medlivewell.com.br" className="item">
                <div className="ic">
                  <Icon.mail />
                </div>
                <div>
                  <div className="lbl">Email</div>
                  <div className="val">comercial@medlivewell.com.br</div>
                </div>
              </a>
            </div>
            <div className="icons-row" style={{ marginTop: 20, marginBottom: 0 }}>
              <div className="icon-feature">
                <div className="ic">
                  <Icon.truck />
                </div>
                <h5>Entrega rápida</h5>
              </div>
              <div className="icon-feature">
                <div className="ic">
                  <Icon.tag />
                </div>
                <h5>Preço estável</h5>
              </div>
              <div className="icon-feature">
                <div className="ic">
                  <Icon.chat />
                </div>
                <h5>Suporte dedicado</h5>
              </div>
            </div>
          </div>
          <RevendedorForm
            heading="Quero ser revendedor"
            subheading="Preencha e receba o contato de um executivo."
            origin="para-quem-vendemos"
          />
        </div>
      </section>

      <Newsletter />
    </>
  );
}
