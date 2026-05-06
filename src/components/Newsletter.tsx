"use client";

import { useState } from "react";
import { Icon } from "./Icon";

export function Newsletter() {
  const [email, setEmail] = useState("");
  const [sent, setSent] = useState(false);

  return (
    <section className="newsletter">
      <div className="container newsletter-inner">
        <div>
          <span className="eyebrow" style={{ fontWeight: 900 }}>
            Newsletter
          </span>
          <h3 style={{ marginTop: 12 }}>Novidades para quem revende saúde</h3>
          <p>
            Lançamentos, campanhas e material de vendas direto no seu e-mail. Sem spam — só o que
            importa.
          </p>
        </div>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            if (email) setSent(true);
          }}
        >
          <input
            type="email"
            required
            placeholder="seu@empresa.com.br"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <button type="submit" className="btn btn-primary">
            {sent ? "Inscrito ✓" : "Quero receber"}
            {!sent && <Icon.arrow />}
          </button>
        </form>
      </div>
    </section>
  );
}
