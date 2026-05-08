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

export const metadata: Metadata = {
  title: "Fornecedor B2B para Marketplaces — Med Live Well",
  description:
    "Fornecemos para sellers de Mercado Livre, Amazon e Shopee. Catálogo pronto, fotos em alta resolução e descrições otimizadas para listagem imediata. Despacho em até 48h para todo o Brasil.",
};

const HIGHLIGHT_CODES = [
  "MED 130",
  "MED 150",
  "MED 170",
  "MED 190",
  "MED 410",
  "MED 530",
  "MED 550",
  "MED 210",
];

export default function MarketplacesPage() {
  const featured = HIGHLIGHT_CODES.map((c) => PRODUCTS.find((p) => p.code === c)).filter(
    (p): p is NonNullable<typeof p> => Boolean(p),
  );

  return (
    <>
      <section className="page-head">
        <div className="container">
          <Breadcrumb items={[{ label: "Início", href: "/" }, { label: "Marketplaces" }]} />
          <span className="eyebrow">Para sellers de marketplace</span>
          <h1 style={{ marginTop: 18 }}>
            Catálogo pronto para listar em{" "}
            <span style={{ color: "var(--tangerina)" }}>Mercado Livre, Amazon e Shopee</span>.
          </h1>
          <p className="lead">
            Fornecemos para sellers ativos com fotos em alta resolução, descrições otimizadas e
            ficha técnica pronta. Sem MOQ alto, sem burocracia — só plug e listar.
          </p>
          <div className="hero-actions" style={{ marginTop: 28 }}>
            <Button variant="primary" href="#cadastro">
              Quero ser revendedor
            </Button>
            <Button variant="ghost" href="/produtos">
              Ver catálogo
            </Button>
          </div>
        </div>
      </section>

      <section className="section">
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
              <span className="eyebrow">Por que Med Live</span>
              <h2 style={{ marginTop: 14 }}>Por que vender Med Live no seu marketplace</h2>
              <p style={{ marginTop: 14, color: "var(--ink-2)", fontSize: 16 }}>
                Trabalhamos com mais de 30 SKUs prontos para anúncio, com kit de mídia completo
                para você publicar em horas — não em semanas. Margem saudável, frete ágil e
                catálogo sempre em estoque.
              </p>
            </div>
            <div
              className="hero-visual-ch"
              style={{ padding: 32, aspectRatio: "16/10", borderRadius: "var(--radius-xl)" }}
            >
              <ChannelGlyph kind="marketplace" />
            </div>
          </div>

          <div className="why-grid" style={{ marginTop: 56 }}>
            <div className="why-card">
              <div className="icon">
                <Icon.download />
              </div>
              <h4>Catálogo pronto para listar</h4>
              <p>
                Fotos em alta resolução em fundo branco, descrições otimizadas, ficha técnica e
                EAN — kit completo por SKU para você publicar direto no seu painel.
              </p>
            </div>
            <div className="why-card">
              <div className="icon">
                <Icon.tag />
              </div>
              <h4>Sem MOQ alto</h4>
              <p>
                Pedido mínimo amigável para quem está entrando agora ou testando categoria. Subiu
                a curva de vendas? Tabela de descontos progressivos por volume.
              </p>
            </div>
            <div className="why-card">
              <div className="icon">
                <Icon.truck />
              </div>
              <h4>Despacho em até 48h</h4>
              <p>
                Operamos com estoque próprio e logística integrada. Mantemos seu giro, seu prazo
                no marketplace e seu rating saudável.
              </p>
            </div>
            <div className="why-card">
              <div className="icon">
                <Icon.shield />
              </div>
              <h4>Produtos certificados</h4>
              <p>
                Toda a linha segue normas ANVISA e INMETRO. Enviamos laudos técnicos para sustentar
                seu anúncio em qualquer auditoria de marketplace.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section" style={{ background: "var(--paper-2)" }}>
        <div className="container">
          <div className="sec-head">
            <div className="left">
              <span className="eyebrow">Para listar</span>
              <h2>Os mais vendidos online</h2>
              <p>
                Seleção curada para sellers — produtos com alta demanda, fácil envio e descrições
                prontas para Mercado Livre, Amazon e Shopee.
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
              <Icon.tag />
              <span>Importadora B2B oficial</span>
            </div>
          </div>
        </div>
      </section>

      <section id="cadastro" className="section" style={{ paddingTop: 24 }}>
        <div className="container revende-grid">
          <div>
            <span className="eyebrow">Cadastro de seller</span>
            <h2 style={{ marginTop: 14, marginBottom: 12 }}>
              Pronto para listar nossos produtos no seu marketplace?
            </h2>
            <p style={{ color: "var(--ink-2)", fontSize: 16 }}>
              Preencha o formulário e nosso time comercial entra em contato em até 1 dia útil com
              tabela de preços, kit de mídia e condições de fornecimento.
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
                  <Icon.download />
                </div>
                <div>
                  <div className="lbl">Catálogo em PDF</div>
                  <div className="val">Baixar fichas técnicas</div>
                </div>
              </Link>
            </div>
          </div>
          <RevendedorForm
            heading="Quero ser revendedor"
            subheading="Preencha para receber tabela de seller e kit de mídia."
            origin="marketplaces"
          />
        </div>
      </section>

      <Newsletter />
    </>
  );
}
