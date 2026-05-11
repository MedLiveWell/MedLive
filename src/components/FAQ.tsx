"use client";

import { useState } from "react";
import { Icon } from "./Icon";
import Link from "next/link";
import { FAQ_ITEMS } from "@/lib/faq";

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
