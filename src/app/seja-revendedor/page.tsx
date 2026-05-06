"use client";

import { useState } from "react";
import { Breadcrumb } from "@/components/Breadcrumb";
import { Icon } from "@/components/Icon";
import { Newsletter } from "@/components/Newsletter";

type FormState = {
  nome: string;
  empresa: string;
  cnpj: string;
  telefone: string;
  email: string;
  tipo: string;
  mensagem: string;
};

const initial: FormState = {
  nome: "",
  empresa: "",
  cnpj: "",
  telefone: "",
  email: "",
  tipo: "",
  mensagem: "",
};

const labelStyle = { color: "rgb(240, 138, 43)", fontWeight: 700 } as const;

export default function RevendedorPage() {
  const [form, setForm] = useState<FormState>(initial);
  const [sent, setSent] = useState(false);

  const update =
    <K extends keyof FormState>(k: K) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) =>
      setForm({ ...form, [k]: e.target.value });

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
    setTimeout(() => setSent(false), 5000);
  };

  return (
    <>
      <section className="page-head">
        <div className="container">
          <Breadcrumb items={[{ label: "Início", href: "/" }, { label: "Seja Revendedor" }]} />
          <span className="eyebrow">Torne-se parceiro</span>
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
                <p>Despacho em até 48h para os 27 estados brasileiros.</p>
              </div>
              <div className="icon-feature">
                <div className="ic">
                  <Icon.tag />
                </div>
                <h5>Preço competitivo</h5>
                <p>Tabela de distribuidor com descontos progressivos por volume.</p>
              </div>
              <div className="icon-feature">
                <div className="ic">
                  <Icon.chat />
                </div>
                <h5>Suporte dedicado</h5>
                <p>Consultor comercial por conta, atendimento em 24h úteis.</p>
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

          <form className="form-card" onSubmit={submit}>
            <h3>Quero ser revendedor</h3>
            <div className="form-sub">Campos com * são obrigatórios.</div>
            <div className="form-grid">
              <div className="field">
                <label style={labelStyle}>Nome completo *</label>
                <input
                  required
                  value={form.nome}
                  onChange={update("nome")}
                  placeholder="Como devemos te chamar"
                />
              </div>
              <div className="field">
                <label style={labelStyle}>Empresa / loja *</label>
                <input
                  required
                  value={form.empresa}
                  onChange={update("empresa")}
                  placeholder="Razão social ou nome fantasia"
                />
              </div>
              <div className="field">
                <label style={labelStyle}>CNPJ *</label>
                <input
                  required
                  value={form.cnpj}
                  onChange={update("cnpj")}
                  placeholder="00.000.000/0000-00"
                />
              </div>
              <div className="field">
                <label style={labelStyle}>WhatsApp / telefone *</label>
                <input
                  required
                  value={form.telefone}
                  onChange={update("telefone")}
                  placeholder="(11) 99999-0000"
                />
              </div>
              <div className="field full">
                <label style={labelStyle}>E-mail *</label>
                <input
                  required
                  type="email"
                  value={form.email}
                  onChange={update("email")}
                  placeholder="seu@empresa.com.br"
                />
              </div>
              <div className="field full">
                <label style={labelStyle}>Tipo de canal *</label>
                <select required value={form.tipo} onChange={update("tipo")}>
                  <option value="">Selecione o tipo de canal</option>
                  <option>Farmácia</option>
                  <option>Loja de ortopedia</option>
                  <option>Clínica / consultório</option>
                  <option>E-commerce próprio</option>
                  <option>Seller de marketplace</option>
                  <option>Outro</option>
                </select>
              </div>
              <div className="field full">
                <label style={labelStyle}>Mensagem</label>
                <textarea
                  value={form.mensagem}
                  onChange={update("mensagem")}
                  placeholder="Conte brevemente sobre seu negócio, volume esperado, região de atuação..."
                />
              </div>
              <div className="full">
                <button type="submit" className="btn btn-primary btn-lg" style={{ width: "100%" }}>
                  {sent ? "Recebemos seu contato ✓" : "Quero ser revendedor"}
                  {!sent && <Icon.arrow />}
                </button>
                {sent && (
                  <div className="form-status">
                    <Icon.check /> Nosso time comercial entrará em contato em até 1 dia útil.
                  </div>
                )}
              </div>
            </div>
          </form>
        </div>
      </section>

      <Newsletter />
    </>
  );
}
