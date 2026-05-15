import type { Metadata } from "next";
import Image from "next/image";
import { Breadcrumb } from "@/components/Breadcrumb";
import { Icon } from "@/components/Icon";
import { Newsletter } from "@/components/Newsletter";

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
      <section
        className="page-head"
        style={{ paddingTop: 16, borderBottom: "none", background: "#fff" }}
      >
        <div className="container">
          <Breadcrumb items={[{ label: "Início", href: "/" }, { label: "Sobre" }]} />
          <h1 style={{ marginTop: 32 }}>Conheça a Med Live Well</h1>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 24, paddingBottom: 56 }}>
        <div className="container">
          <div className="sobre-intro">
            <div className="sobre-intro-text">
              <p>
                A Med Live surgiu com um propósito claro: aproximar produtos de reabilitação e
                mobilidade de quem realmente precisa, através de lojistas parceiros que vendem
                esses produtos todos os dias.
              </p>
              <p>
                Em poucos anos de operação, construímos uma carteira sólida de clientes, um
                portfólio robusto e uma estrutura logística capaz de atender todos com agilidade
                e confiabilidade.
              </p>
            </div>
            <div className="sobre-intro-visual sobre-intro-visual--photo">
              <Image
                src="/images/cd-medlive-sobre.jpg"
                alt="Centro de distribuição da Med Live Well em São Paulo, com prateleiras altas de produtos de mobilidade e reabilitação organizados em galpão de 4.000 metros quadrados"
                width={1536}
                height={1024}
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
          <div className="sobre-bio">
            <div className="sobre-bio-img" aria-hidden="true">
              <Icon.image size={56} />
            </div>
            <div className="sobre-bio-text">
              <h2 style={{ marginBottom: 24 }}>Sobre a Med Live</h2>
              <p style={{ color: "var(--ink-2)", fontSize: 16, lineHeight: 1.7, marginBottom: 18 }}>
                A Med Live Well nasceu em novembro de 2022 a partir de uma oportunidade clara: o
                mercado brasileiro de mobilidade e reabilitação precisava de um importador
                presente, que confiasse no seu produto, com preço estável, uma garantia longa e
                atendimento direto ao lojista. Em poucos anos, a operação cresceu em três frentes
                complementares: matriz em Itajaí, no estado de Santa Catarina, onde nasceu a
                marca, o centro de distribuição em São Paulo, de onde despachamos diariamente
                todos os pedidos e escritório administrativo na Avenida Paulista, coração
                comercial do país.
              </p>
              <p style={{ color: "var(--ink-2)", fontSize: 16, lineHeight: 1.7, marginBottom: 18 }}>
                Como importadora e distribuidora B2B com marca própria, trabalhamos com uma linha
                completa de produtos de mobilidade e reabilitação. Andadores, cadeiras de banho,
                muletas, barras de apoio, cadeiras de transferência, banquetas de banho e outros
                itens essenciais para o cuidado de pessoas com necessidades específicas. Toda a
                linha é registrada na ANVISA, com laudos técnicos e fichas de produto disponíveis
                para nossos lojistas parceiros.
              </p>
              <p style={{ color: "var(--ink-2)", fontSize: 16, lineHeight: 1.7 }}>
                Atendemos farmácias, lojas ortopédicas, clínicas, hospitais e empresas de
                homecare. A operação foi desenhada para ser próxima ao lojista: consultor
                comercial dedicado por conta, tabela de distribuidor com margem saudável e
                estoque pronto para despacho. Cada parceria é construída com transparência,
                agilidade e o compromisso de estar presente quando o lojista mais precisa, antes,
                durante e depois da venda.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 64, paddingBottom: 64 }}>
        <div className="container">
          <h2 style={{ marginBottom: 12 }}>Nossos compromissos</h2>
          <p style={{ color: "var(--ink-2)", fontSize: 17, marginBottom: 32, maxWidth: 620 }}>
            O que a loja parceira pode esperar da Med Live Well em toda parceria.
          </p>
          <div
            className="why-grid"
            style={{ gridTemplateColumns: "repeat(2, 1fr)", marginTop: 0 }}
          >
            <div className="why-card">
              <div className="icon">
                <Icon.tag />
              </div>
              <h4>Preço estável</h4>
              <p>
                Tabela de distribuidor parceiro com margem saudável e preço estável.
                Previsibilidade para sua loja planejar margem e estoque sem surpresas.
              </p>
            </div>
            <div className="why-card">
              <div className="icon">
                <Icon.badgeCheck />
              </div>
              <h4>Garantia de 5 anos</h4>
              <p>
                Cobertura por 5 anos em toda a linha Med Live. Tranquilidade para você vender e
                não precisar se preocupar com imprevistos e pós-venda.
              </p>
            </div>
            <div className="why-card">
              <div className="icon">
                <Icon.shield />
              </div>
              <h4>Registrados na ANVISA</h4>
              <p>
                Toda a linha Med Live é registrada na Anvisa, com laudos técnicos e fichas de
                produto disponíveis para as lojas parceiras.
              </p>
            </div>
            <div className="why-card">
              <div className="icon">
                <Icon.users />
              </div>
              <h4>Atendimento direto</h4>
              <p>
                Um consultor comercial dedicado ao lojista para cotações, trocas, devoluções e
                suporte técnico. Atendimento próximo e ágil para lojas parceiras.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Newsletter />
    </>
  );
}
