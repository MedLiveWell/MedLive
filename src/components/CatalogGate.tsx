"use client";

import { useEffect, useState } from "react";
import { Icon } from "./Icon";

const CATALOG_PDF_URL = "/catalogo-2026.pdf";
const CATALOG_FILENAME = "catalogo-medlive-2026.pdf";

const UFS = [
  "AC", "AL", "AP", "AM", "BA", "CE", "DF", "ES", "GO", "MA", "MT", "MS", "MG",
  "PA", "PB", "PR", "PE", "PI", "RJ", "RN", "RS", "RO", "RR", "SC", "SP", "SE", "TO",
];

type FormState = {
  nome: string;
  empresa: string;
  cnpj: string;
  telefone: string;
  email: string;
  canal: string;
  volume: string;
  uf: string;
  lgpd: boolean;
};

const initial: FormState = {
  nome: "",
  empresa: "",
  cnpj: "",
  telefone: "",
  email: "",
  canal: "",
  volume: "",
  uf: "",
  lgpd: false,
};

declare global {
  interface Window {
    openCatalogGate?: () => void;
  }
}

export function CatalogGate() {
  const [open, setOpen] = useState(false);
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState<FormState>(initial);

  useEffect(() => {
    const openGate = () => {
      setSent(false);
      setOpen(true);
    };
    window.openCatalogGate = openGate;

    const onClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null;
      const trigger = target?.closest("[data-catalog-gate]");
      if (!trigger) return;
      e.preventDefault();
      openGate();
    };
    document.addEventListener("click", onClick);

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", onKey);

    return () => {
      document.removeEventListener("click", onClick);
      document.removeEventListener("keydown", onKey);
      delete window.openCatalogGate;
    };
  }, []);

  useEffect(() => {
    if (open) {
      const prev = document.body.style.overflow;
      document.body.style.overflow = "hidden";
      return () => {
        document.body.style.overflow = prev;
      };
    }
  }, [open]);

  if (!open) return null;

  const update =
    <K extends keyof FormState>(k: K) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
      const target = e.target;
      const value =
        target instanceof HTMLInputElement && target.type === "checkbox"
          ? target.checked
          : target.value;
      setForm((f) => ({ ...f, [k]: value as FormState[K] }));
    };

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const leads = JSON.parse(localStorage.getItem("medlive_catalog_leads") || "[]");
      leads.push({ ...form, lgpd: !!form.lgpd, at: new Date().toISOString() });
      localStorage.setItem("medlive_catalog_leads", JSON.stringify(leads));
    } catch {
      // ignore
    }
    setSent(true);
  };

  return (
    <div
      className="cg-backdrop"
      onClick={(e) => {
        if ((e.target as HTMLElement).classList.contains("cg-backdrop")) setOpen(false);
      }}
    >
      <div className="cg-modal" role="dialog" aria-modal="true" aria-labelledby="cg-title">
        <button className="cg-close" onClick={() => setOpen(false)} aria-label="Fechar">
          <svg width="18" height="18" viewBox="0 0 20 20" fill="none">
            <path
              d="M5 5L15 15M15 5L5 15"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
            />
          </svg>
        </button>

        {!sent ? (
          <>
            <div className="cg-left">
              <div className="cg-badge">
                <Icon.download size={18} />
                <span>Catálogo Med Live 2026</span>
              </div>
              <h2 id="cg-title">Catálogo completo em PDF</h2>
              <p className="cg-intro">
                Download exclusivo para revendedores. Preencha os dados da sua empresa para receber
                o catálogo com fichas técnicas e fotos em alta resolução.
              </p>

              <div className="cg-includes">
                <div className="cg-include-item">
                  <Icon.check /> Produtos com fichas técnicas completas
                </div>
                <div className="cg-include-item">
                  <Icon.check /> Fotos em alta resolução para seu e-commerce
                </div>
                <div className="cg-include-item">
                  <Icon.check /> Sugestão de preço de venda por canal
                </div>
                <div className="cg-include-item">
                  <Icon.check /> Condições comerciais de distribuidor B2B
                </div>
              </div>

              <div className="cg-file-meta">
                <div>
                  <span>Formato</span> PDF
                </div>
                <div>
                  <span>Tamanho</span> 8.4 MB
                </div>
                <div>
                  <span>Atualizado</span> Abr 2026
                </div>
              </div>
            </div>

            <form className="cg-right" onSubmit={onSubmit}>
              <div className="cg-form-head">
                <span className="eyebrow" style={{ color: "var(--tangerina)" }}>
                  Dados da empresa
                </span>
                <h3>Preencha para baixar</h3>
              </div>

              <div className="cg-field">
                <label>Nome completo *</label>
                <input
                  type="text"
                  required
                  value={form.nome}
                  onChange={update("nome")}
                  placeholder="Seu nome"
                />
              </div>

              <div className="cg-row">
                <div className="cg-field">
                  <label>Empresa / Loja *</label>
                  <input
                    type="text"
                    required
                    value={form.empresa}
                    onChange={update("empresa")}
                    placeholder="Razão social ou nome fantasia"
                  />
                </div>
                <div className="cg-field">
                  <label>CNPJ *</label>
                  <input
                    type="text"
                    required
                    value={form.cnpj}
                    onChange={update("cnpj")}
                    placeholder="00.000.000/0000-00"
                  />
                </div>
              </div>

              <div className="cg-row">
                <div className="cg-field">
                  <label>E-mail corporativo *</label>
                  <input
                    type="email"
                    required
                    value={form.email}
                    onChange={update("email")}
                    placeholder="voce@empresa.com.br"
                  />
                </div>
                <div className="cg-field">
                  <label>WhatsApp / Telefone *</label>
                  <input
                    type="tel"
                    required
                    value={form.telefone}
                    onChange={update("telefone")}
                    placeholder="(00) 00000-0000"
                  />
                </div>
              </div>

              <div className="cg-row">
                <div className="cg-field">
                  <label>Tipo de canal *</label>
                  <select required value={form.canal} onChange={update("canal")}>
                    <option value="">Selecione…</option>
                    <option value="farmacia">Farmácia</option>
                    <option value="ortopedia">Ortopedia / Produtos médicos</option>
                    <option value="clinica">Clínica / Home care</option>
                    <option value="ecommerce">E-commerce próprio</option>
                    <option value="marketplace">Seller de marketplace</option>
                    <option value="distribuidor">Distribuidor / Atacado</option>
                    <option value="outro">Outro</option>
                  </select>
                </div>
                <div className="cg-field">
                  <label>UF *</label>
                  <select required value={form.uf} onChange={update("uf")}>
                    <option value="">UF</option>
                    {UFS.map((u) => (
                      <option key={u} value={u}>
                        {u}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="cg-field">
                <label>Volume mensal estimado *</label>
                <select required value={form.volume} onChange={update("volume")}>
                  <option value="">Selecione…</option>
                  <option value="ate-20">Até 20 unidades / mês</option>
                  <option value="20-100">20 a 100 unidades / mês</option>
                  <option value="100-500">100 a 500 unidades / mês</option>
                  <option value="500+">Mais de 500 unidades / mês</option>
                </select>
              </div>

              <label className="cg-lgpd">
                <input
                  type="checkbox"
                  required
                  checked={form.lgpd}
                  onChange={update("lgpd")}
                />
                <span>
                  Autorizo o contato da Med Live Well para fins comerciais conforme a Política de
                  Privacidade (LGPD). *
                </span>
              </label>

              <button type="submit" className="btn btn-primary btn-lg cg-submit">
                <Icon.download /> Baixar catálogo
              </button>
              <div className="cg-sub">Campos com * são obrigatórios.</div>
            </form>
          </>
        ) : (
          <div className="cg-success">
            <div className="cg-success-ic">
              <Icon.check size={36} />
            </div>
            <span className="eyebrow" style={{ color: "var(--tangerina)" }}>
              Pronto
            </span>
            <h2>Seu catálogo está pronto.</h2>
            <p>
              Clique em <strong>Baixar agora</strong> para receber o PDF. Nosso time comercial
              também entrará em contato pelo WhatsApp em até 1 dia útil com a tabela de preços de
              distribuidor.
            </p>
            <div className="cg-success-actions">
              <a
                href={CATALOG_PDF_URL}
                download={CATALOG_FILENAME}
                target="_blank"
                rel="noopener"
                className="btn btn-primary btn-lg"
              >
                <Icon.download /> Baixar agora
              </a>
              <button
                type="button"
                className="btn btn-ghost"
                onClick={() => setOpen(false)}
              >
                Fechar
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
