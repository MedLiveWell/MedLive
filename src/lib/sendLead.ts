// Client helper to submit a lead to the internal /api/leads route, which
// forwards it to RD Station Marketing. Fire-and-forget: never blocks the user
// flow, errors are only logged so users still see a success state if RD is
// momentarily unavailable.

export type LeadInput = {
  conversion_identifier:
    | "newsletter-medlive"
    | "catalogo-medlive-2026"
    | "seja-revendedor";
  email: string;
  name?: string;
  company_name?: string;
  cf_telefone?: string;
  cf_cnpj?: string;
  cf_canal?: string;
  cf_uf?: string;
  cf_volume?: string;
  cf_mensagem?: string;
  cf_origem_pagina?: string;
};

export async function sendLead(input: LeadInput): Promise<boolean> {
  try {
    const res = await fetch("/api/leads", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(input),
    });
    if (!res.ok) {
      console.warn("[sendLead] non-ok response", res.status);
      return false;
    }
    return true;
  } catch (err) {
    console.warn("[sendLead] failed", err);
    return false;
  }
}
