import type { Metadata } from "next";
import { Breadcrumb } from "@/components/Breadcrumb";
import { Icon } from "@/components/Icon";
import { Newsletter } from "@/components/Newsletter";
import { RevendedorForm } from "@/components/RevendedorForm";

const TITLE = "Seja revendedor Med Live Well | Cadastro de parceiros";
const DESCRIPTION =
  "Torne-se revendedor Med Live Well. Tenha acesso a uma linha completa de produtos de mobilidade e reabilitação com condições especiais.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: "/seja-revendedor" },
  openGraph: { url: "/seja-revendedor", title: TITLE, description: DESCRIPTION },
  twitter: { title: TITLE, description: DESCRIPTION },
};

export default function RevendedorPage() {
  return (
    <>
      <section className="page-head" style={{ paddingTop: 16 }}>
        <div className="container">
          <Breadcrumb items={[{ label: "Início", href: "/" }, { label: "Seja Revendedor" }]} />
          <h1 style={{ marginTop: 18 }}>Venda produtos Med Live na sua loja.</h1>
          <p className="lead">
            Preencha o formulário e nosso time comercial entra em contato em até 1 dia útil com
            tabela de preços, mix recomendado e condições para seu canal.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container revende-grid">
          <div>
            <div className="icons-row">
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

            <h3 style={{ marginTop: 28, fontSize: 20 }}>Prefere falar direto?</h3>
            <p style={{ marginTop: 8, fontSize: 14, color: "var(--ink-3)" }}>
              Fale com nosso comercial pelos canais abaixo, ou preencha o formulário ao lado.
            </p>
            <div className="contact-alt">
              <a href="#" className="item">
                <div className="ic">
                  <Icon.whatsapp />
                </div>
                <div>
                  <div className="lbl">WhatsApp comercial</div>
                  <div className="val">(11) 4000-0000</div>
                </div>
              </a>
              <a href="mailto:contato@medlivewell.com.br" className="item">
                <div className="ic">
                  <Icon.mail />
                </div>
                <div>
                  <div className="lbl">E-mail</div>
                  <div className="val">contato@medlivewell.com.br</div>
                </div>
              </a>
            </div>
          </div>

          <RevendedorForm
            origin="seja-revendedor"
            subheading="Preencha e receba o contato de um executivo."
          />
        </div>
      </section>

      <Newsletter />
    </>
  );
}
