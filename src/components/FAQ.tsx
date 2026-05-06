"use client";

import { useState } from "react";
import { Icon } from "./Icon";
import Link from "next/link";

const FAQ_ITEMS = [
  {
    q: "Quem pode comprar na Med Live?",
    a: "Atendemos exclusivamente o mercado B2B: farmácias, lojas de ortopedia, clínicas, e-commerces e sellers ativos em marketplaces (Mercado Livre, Amazon, Shopee). Para compras pessoais, indicamos uma de nossas lojas parceiras.",
  },
  {
    q: "Existe pedido mínimo?",
    a: "Sim. Trabalhamos com um pedido mínimo de abertura de conta, que é informado pelo consultor comercial na qualificação do parceiro. A partir daí, aplicamos descontos progressivos por volume.",
  },
  {
    q: "Em quanto tempo o pedido é despachado?",
    a: "Despachamos em até 48h úteis após a confirmação do pagamento. Entregamos para todos os 27 estados, com rastreio integrado e suporte de frete para parceiros recorrentes.",
  },
  {
    q: "Os produtos possuem certificação?",
    a: "Sim. Toda nossa linha segue as normas da ANVISA e possui certificação INMETRO quando aplicável. Enviamos laudos técnicos e fichas de produto para nossos parceiros.",
  },
  {
    q: "Vocês fornecem fotos e descrições para anúncios?",
    a: "Fornecemos. Sellers de marketplace recebem kit completo com fotos em alta resolução, descrições otimizadas e ficha técnica pronta para publicar em Mercado Livre, Amazon e Shopee.",
  },
  {
    q: "Como formalizo a parceria?",
    a: "Preencha o formulário na página Seja Revendedor com CNPJ ativo e tipo de canal. Nosso time comercial entra em contato em até 1 dia útil com a tabela de distribuidor e os próximos passos.",
  },
];

export function FAQ() {
  const [open, setOpen] = useState(0);
  return (
    <section className="section faq-section">
      <div className="container">
        <div className="faq-wrap">
          <div className="faq-head">
            <span className="eyebrow" style={{ fontWeight: 800 }}>
              Perguntas frequentes
            </span>
            <h2>Dúvidas comuns de quem revende</h2>
            <p className="lead">
              Respostas rápidas para as perguntas que mais recebemos de lojas e sellers. Não achou
              o que procurava?{" "}
              <Link href="/seja-revendedor" className="faq-link">
                fale com nosso time
              </Link>
              .
            </p>
            <div className="faq-side-cta">
              <Link href="/seja-revendedor" className="btn btn-primary">
                Seja Revendedor <Icon.arrow />
              </Link>
            </div>
          </div>
          <div className="faq-list">
            {FAQ_ITEMS.map((item, i) => {
              const isOpen = open === i;
              return (
                <div key={i} className={"faq-item " + (isOpen ? "is-open" : "")}>
                  <button
                    className="faq-q"
                    onClick={() => setOpen(isOpen ? -1 : i)}
                    aria-expanded={isOpen}
                  >
                    <span className="faq-num">{String(i + 1).padStart(2, "0")}</span>
                    <span className="faq-q-text">{item.q}</span>
                    <span className="faq-toggle" aria-hidden="true">
                      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                        <path
                          d="M5 8l5 5 5-5"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </span>
                  </button>
                  <div className="faq-a">
                    <div className="faq-a-inner">{item.a}</div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
