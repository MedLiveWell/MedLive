import { Breadcrumb } from "@/components/Breadcrumb";
import { Button } from "@/components/Button";
import { Icon } from "@/components/Icon";
import { ChannelGlyph } from "@/components/ChannelGlyph";
import { Newsletter } from "@/components/Newsletter";

export default function VendemosPage() {
  return (
    <>
      <section className="page-head">
        <div className="container">
          <Breadcrumb items={[{ label: "Início", href: "/" }, { label: "Para quem vendemos" }]} />
          <span className="eyebrow">Importadora B2B</span>
          <h1 style={{ marginTop: 18 }}>Vendemos para quem revende.</h1>
          <p className="lead">
            Somos uma distribuidora nacional focada em dois canais: lojas revendedoras e
            fornecimento para sellers de marketplaces.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container channels-grid">
          <div className="channel-card">
            <div className="hero-visual-ch">
              <ChannelGlyph kind="store" />
            </div>
            <span className="eyebrow">Canal 01</span>
            <h3 style={{ marginTop: 12 }}>Lojas revendedoras</h3>
            <p className="desc">
              Farmácias, lojas de ortopedia, clínicas de fisioterapia e e-commerces próprios com
              tabela de distribuidor e margem saudável.
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
              <div className="list-item">
                <Icon.cart /> E-commerces
              </div>
            </div>
            <Button variant="primary" href="/lojas-revendedoras">
              Quero ser loja parceira
            </Button>
          </div>

          <div className="channel-card">
            <div className="hero-visual-ch">
              <ChannelGlyph kind="marketplace" />
            </div>
            <span className="eyebrow">Canal 02</span>
            <h3 style={{ marginTop: 12 }}>Sellers de marketplaces</h3>
            <p className="desc">
              Fornecimento para sellers ativos em Mercado Livre, Amazon e Shopee, com catálogo
              pronto, fotos em alta resolução e descrições otimizadas.
            </p>
            <div className="list">
              <div className="list-item">
                <span className="mp-logo" style={{ background: "#FFE600", color: "#333" }}>
                  ML
                </span>
                Mercado Livre
              </div>
              <div className="list-item">
                <span className="mp-logo" style={{ background: "#232F3E" }}>
                  Az
                </span>
                Amazon
              </div>
              <div className="list-item">
                <span className="mp-logo" style={{ background: "#EE4D2D" }}>
                  Sh
                </span>
                Shopee
              </div>
              <div className="list-item">
                <span className="mp-logo" style={{ background: "var(--tangerina)" }}>
                  +
                </span>
                Outros
              </div>
            </div>
            <Button variant="accent" href="/marketplaces">
              Quero fornecedor p/ marketplace
            </Button>
          </div>
        </div>
      </section>

      <section className="section" style={{ background: "var(--paper-2)" }}>
        <div className="container">
          <div className="sec-head">
            <div className="left">
              <span className="eyebrow">Por que Med Live</span>
              <h2>Por que escolher a Med Live</h2>
            </div>
          </div>
          <div className="why-grid">
            <div className="why-card">
              <div className="icon">
                <Icon.truck />
              </div>
              <h4>Entrega ágil</h4>
              <p>
                Despacho em até 48h para todo o Brasil, com rastreio integrado e suporte de frete
                para parceiros recorrentes.
              </p>
            </div>
            <div className="why-card">
              <div className="icon">
                <Icon.chat />
              </div>
              <h4>Atendimento próximo</h4>
              <p>
                Consultor dedicado por conta, resposta em até 24h úteis e suporte técnico direto
                com seu vendedor.
              </p>
            </div>
            <div className="why-card">
              <div className="icon">
                <Icon.tag />
              </div>
              <h4>Preço competitivo</h4>
              <p>
                Tabela de distribuidor com margens saudáveis, descontos progressivos por volume e
                prazos diferenciados.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Newsletter />
    </>
  );
}
