import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumb } from "@/components/Breadcrumb";
import { Button } from "@/components/Button";
import { ChannelGlyph } from "@/components/ChannelGlyph";
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

const HIGHLIGHT_CODES = [
  "MED 120",
  "MED 190",
  "MED 380",
  "MED 410",
  "MED 3030",
  "MED 220",
  "MED 530",
  "MED 1010",
];

export default function ParaQuemVendemosPage() {
  const featured = HIGHLIGHT_CODES.map((c) => PRODUCTS.find((p) => p.code === c)).filter(
    (p): p is NonNullable<typeof p> => Boolean(p),
  );

  return (
    <>
      <section className="page-head" style={{ paddingTop: 16 }}>
        <div className="container">
          <Breadcrumb items={[{ label: "Início", href: "/" }, { label: "Para quem vendemos" }]} />
          <h1 style={{ marginTop: 18 }}>
            Tabela de distribuidor B2B com{" "}
            <span style={{ color: "var(--tangerina)" }}>margem saudável</span> para sua loja.
          </h1>
          <p className="lead">
            Atendemos farmácias, lojas ortopédicas, clínicas, hospitais e empresas de homecare.
            Importadora B2B de mobilidade e reabilitação com toda a linha registrada na ANVISA.
          </p>
          <div className="hero-actions" style={{ marginTop: 28 }}>
            <Button variant="primary" href="#cadastro">
              Quero ser loja parceira
            </Button>
            <Button variant="ghost" href="/produtos">
              Ver catálogo
            </Button>
          </div>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 64 }}>
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
                Mais de uma década importando produtos de reabilitação. Tabela transparente,
                consultor dedicado por conta e mix recomendado por porte de loja — para você
                montar uma vitrine completa sem dor de cabeça.
              </p>
            </div>
            <div
              className="hero-visual-ch"
              style={{ padding: 32, aspectRatio: "16/10", borderRadius: "var(--radius-xl)" }}
            >
              <ChannelGlyph kind="store" />
            </div>
          </div>

          <div className="why-grid" style={{ marginTop: 56 }}>
            <div className="why-card">
              <div className="icon">
                <Icon.tag />
              </div>
              <h4>Preço de distribuidor</h4>
              <p>
                Tabela de revenda com margem saudável, descontos progressivos por volume e prazo
                diferenciado para parceiros recorrentes.
              </p>
            </div>
            <div className="why-card">
              <div className="icon">
                <Icon.users />
              </div>
              <h4>Atendimento próximo</h4>
              <p>
                Consultor comercial dedicado por conta. Resposta em até 24h úteis para cotações,
                trocas, devoluções e suporte técnico ao seu vendedor.
              </p>
            </div>
            <div className="why-card">
              <div className="icon">
                <Icon.shield />
              </div>
              <h4>Certificações em dia</h4>
              <p>
                Toda a linha segue normas ANVISA e INMETRO. Laudos técnicos, fichas de produto e
                tudo o que sua loja precisa para vender com segurança.
              </p>
            </div>
            <div className="why-card">
              <div className="icon">
                <Icon.truck />
              </div>
              <h4>Logística para os 27 estados</h4>
              <p>
                Despacho em até 48h, rastreio integrado e suporte de frete para parceiros
                recorrentes — você não fica sem mix.
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
              <p>
                Seleção variada da linha — andadores, cadeiras de banho, cadeiras de
                transferência, muletas e barras — para uma vitrine completa de reabilitação.
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

      <section className="section">
        <div className="container">
          <div
            style={{
              display: "flex",
              gap: 16,
              flexWrap: "wrap",
              justifyContent: "center",
              alignItems: "center",
              padding: "32px",
              background: "var(--paper-2)",
              borderRadius: "var(--radius-xl)",
            }}
          >
            <div className="hero-trust" style={{ background: "#fff" }}>
              <Icon.shield />
              <span>Produtos certificados · ANVISA · INMETRO</span>
            </div>
            <div className="hero-trust" style={{ background: "#fff" }}>
              <Icon.truck />
              <span>Entrega para todos os 27 estados</span>
            </div>
            <div className="hero-trust" style={{ background: "#fff" }}>
              <Icon.users />
              <span>Atendimento especializado</span>
            </div>
          </div>
        </div>
      </section>

      <section id="cadastro" className="section" style={{ paddingTop: 16 }}>
        <div className="container revende-grid">
          <div>
            <h2 style={{ marginBottom: 12 }}>
              Pronto para abastecer sua loja com produtos de saúde?
            </h2>
            <p style={{ color: "var(--ink-2)", fontSize: 16 }}>
              Preencha o formulário e nosso time comercial entra em contato em até 1 dia útil com
              tabela de distribuidor, mix recomendado e condições para seu canal.
            </p>
            <div className="contact-alt" style={{ marginTop: 24 }}>
              <a href="#" className="item">
                <div className="ic">
                  <Icon.whatsapp />
                </div>
                <div>
                  <div className="lbl">WhatsApp comercial</div>
                  <div className="val">(11) 4000-0000</div>
                </div>
              </a>
              <Link href="/produtos" className="item">
                <div className="ic">
                  <Icon.store />
                </div>
                <div>
                  <div className="lbl">Catálogo</div>
                  <div className="val">Ver produtos</div>
                </div>
              </Link>
            </div>
          </div>
          <RevendedorForm
            heading="Quero ser revendedor"
            subheading="Preencha para receber tabela de distribuidor."
            origin="para-quem-vendemos"
          />
        </div>
      </section>

      <Newsletter />
    </>
  );
}
