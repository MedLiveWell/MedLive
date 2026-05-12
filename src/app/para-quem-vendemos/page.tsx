import type { Metadata } from "next";
import { Breadcrumb } from "@/components/Breadcrumb";
import { Button } from "@/components/Button";
import { Icon } from "@/components/Icon";
import { ChannelGlyph } from "@/components/ChannelGlyph";
import { Newsletter } from "@/components/Newsletter";

const TITLE = "Para quem vendemos | Med Live Well";
const DESCRIPTION =
  "Atendemos lojas de produtos ortopédicos, clínicas, hospitais e revendedores em todo o Brasil com produtos de mobilidade e reabilitação.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: "/para-quem-vendemos" },
  openGraph: { url: "/para-quem-vendemos", title: TITLE, description: DESCRIPTION },
  twitter: { title: TITLE, description: DESCRIPTION },
};

export default function VendemosPage() {
  return (
    <>
      <section className="page-head">
        <div className="container">
          <Breadcrumb items={[{ label: "Início", href: "/" }, { label: "Para quem vendemos" }]} />
          <span className="eyebrow">Importadora B2B</span>
          <h1 style={{ marginTop: 18 }}>Vendemos para quem revende.</h1>
        </div>
      </section>

      <section className="section">
        <div className="container channels-grid">
          <div className="who-img-placeholder" aria-hidden="true">
            <span>Imagem aqui</span>
          </div>
          <div className="channel-card">
            <div className="hero-visual-ch">
              <ChannelGlyph kind="store" />
            </div>
            <span className="eyebrow">Canal 01</span>
            <h3 style={{ marginTop: 12 }}>Lojas revendedoras</h3>
            <p className="desc">
              Farmácias, lojas de ortopedia e clínicas de fisioterapia com tabela de distribuidor
              e margem saudável.
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
            <Button variant="primary" href="/lojas-revendedoras">
              Quero ser loja parceira
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
