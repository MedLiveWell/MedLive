"use client";

import { useState } from "react";
import { Icon } from "./Icon";
import { sendLead } from "@/lib/sendLead";
import { formatCNPJ, formatPhoneBR } from "@/lib/format";

type Props = {
  /** Heading shown above the form. Defaults to "Quero ser revendedor". */
  heading?: string;
  /** Optional sub-heading (e.g. "Pronto para listar nossos produtos..."). */
  subheading?: string;
  /** Page identifier sent to RD Station as cf_origem_pagina (e.g. "marketplaces"). */
  origin?: string;
};

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

export function RevendedorForm({
  heading = "Quero ser revendedor",
  subheading,
  origin,
}: Props) {
  const [form, setForm] = useState<FormState>(initial);
  const [sent, setSent] = useState(false);

  const update =
    <K extends keyof FormState>(k: K) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) =>
      setForm({ ...form, [k]: e.target.value });

  const updateMasked =
    (k: "cnpj" | "telefone", mask: (v: string) => string) =>
    (e: React.ChangeEvent<HTMLInputElement>) =>
      setForm((f) => ({ ...f, [k]: mask(e.target.value) }));

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    void sendLead({
      conversion_identifier: "seja-revendedor",
      email: form.email,
      name: form.nome,
      company_name: form.empresa,
      cf_telefone: form.telefone,
      cf_cnpj: form.cnpj,
      cf_canal: form.tipo,
      cf_mensagem: form.mensagem,
      ...(origin ? { cf_origem_pagina: origin } : {}),
    });
    setSent(true);
    setTimeout(() => setSent(false), 5000);
  };

  return (
    <form className="form-card" onSubmit={submit}>
      <h3>{heading}</h3>
      <div className="form-sub">
        {subheading || "Campos com * são obrigatórios."}
      </div>
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
            type="text"
            inputMode="numeric"
            autoComplete="off"
            maxLength={18}
            required
            value={form.cnpj}
            onChange={updateMasked("cnpj", formatCNPJ)}
            placeholder="00.000.000/0000-00"
          />
        </div>
        <div className="field">
          <label style={labelStyle}>WhatsApp / telefone *</label>
          <input
            type="tel"
            inputMode="tel"
            autoComplete="tel"
            maxLength={15}
            required
            value={form.telefone}
            onChange={updateMasked("telefone", formatPhoneBR)}
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
            <option>Loja ortopédica</option>
            <option>Clínica / consultório</option>
            <option>Hospital</option>
            <option>Homecare</option>
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
  );
}
