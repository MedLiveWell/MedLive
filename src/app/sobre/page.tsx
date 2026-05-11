import type { Metadata } from "next";
import Image from "next/image";
import { Breadcrumb } from "@/components/Breadcrumb";
import { Icon } from "@/components/Icon";
import { Newsletter } from "@/components/Newsletter";
import { VALUES } from "@/lib/data";

const TITLE = "Sobre a Med Live Well | Distribuidora de produtos de reabilitação";
const DESCRIPTION =
  "Conheça a Med Live Well, distribuidora B2B com centro de distribuição próprio e linha completa de produtos de mobilidade e reabilitação.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: "/sobre" },
  openGraph: { url: "/sobre", title: TITLE, description: DESCRIPTION },
  twitter: { title: TITLE, description: DESCRIPTION },
};

export default function SobrePage() {
  return (
    <>
      <section className="page-head">
        <div className="container">
          <Breadcrumb items={[{ label: "Início", href: "/" }, { label: "Sobre" }]} />
          <span className="eyebrow">Nossa história</span>
          <h1 style={{ marginTop: 18 }}>Nascemos para facilitar o acesso à saúde.</h1>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 56, paddingBottom: 56 }}>
        <div className="container">
          <div className="sobre-intro">
            <div className="sobre-intro-text">
              <p>
                A Med Live surgiu com um propósito claro: aproximar produtos de reabilitação e
                mobilidade de quem realmente precisa, através de parceiros que vendem esses
                produtos todos os dias.
              </p>
              <p>
                Em poucos anos de operação, construímos uma carteira sólida de clientes e uma
                estrutura logística capaz de atender todo o território nacional com agilidade e
                confiabilidade.
              </p>
            </div>
            <div className="sobre-intro-visual sobre-intro-visual--photo">
              <Image
                src="/images/centro-distribuicao.png"
                alt="Interior do centro de distribuição Med Live Well com prateleiras altas, pallets e produtos empilhados, com banner da marca ao fundo"
                width={1200}
                height={675}
              />
            </div>
          </div>
        </div>
      </section>

      <section
        className="section"
        style={{ background: "var(--paper-2)", paddingTop: 64, paddingBottom: 64 }}
      >
        <div className="container">
          <div className="mv-grid">
            <div className="mv-card mission">
              <div className="icon">
                <Icon.target />
              </div>
              <span className="eyebrow on-dark">Nossa missão</span>
              <p>
                Oferecer soluções de reabilitação que vão além da funcionalidade, transformando
                vidas por meio de autonomia, conforto e segurança, com produtos de alta qualidade e
                suporte confiável.
              </p>
            </div>
            <div className="mv-card vision">
              <div className="icon">
                <Icon.telescope />
              </div>
              <span className="eyebrow" style={{ color: "var(--tangerina)" }}>
                Nossa visão
              </span>
              <p>
                Ser reconhecida globalmente como a primeira escolha em equipamentos de mobilidade e
                cuidados domiciliares. Tornar o processo de reabilitação mais seguro, acessível e
                humano.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 64, paddingBottom: 64 }}>
        <div className="container">
          <h2 style={{ marginBottom: 28 }}>Nossos valores</h2>
          <div className="values-row-grid">
            {VALUES.map((v) => (
              <div key={v.num} className="value-row">
                <span className="value-dot" />
                <span className="value-title">{v.title}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section
        className="section"
        style={{ background: "var(--paper-2)", paddingTop: 64, paddingBottom: 64 }}
      >
        <div className="container">
          <h2 style={{ marginBottom: 12 }}>Qualidade e certificações</h2>
          <p style={{ color: "var(--ink-2)", fontSize: 15, marginBottom: 28, maxWidth: 760 }}>
            Todos os nossos produtos passam por rigoroso controle de qualidade e possuem os
            registros e certificações exigidos pela legislação brasileira.
          </p>
          <div className="certs-row">
            <div className="cert-small">
              <div className="cert-small-box">ANVISA</div>
              <span>ANVISA</span>
            </div>
            <div className="cert-small">
              <div className="cert-small-box">INMETRO</div>
              <span>INMETRO</span>
            </div>
            <div className="cert-small">
              <div className="cert-small-box cert-small-check">
                <Icon.check size={28} />
              </div>
              <span>Qualidade Certificada</span>
            </div>
          </div>
        </div>
      </section>

      <Newsletter />
    </>
  );
}
