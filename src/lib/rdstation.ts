// Server-side RD Station Marketing client.
//
// We hit the RDSM v1.3 conversions endpoint, which is the canonical path for
// public-token submissions (the public token is sent in the body as
// `token_rdstation`). Tokens never reach the browser; submissions flow through
// /api/leads.
//
// Docs: https://developers.rdstation.com/reference/post_api-1-3-conversions

const CONVERSIONS_URL = "https://www.rdstation.com.br/api/1.3/conversions";

export type LeadConversion = {
  /** Identifier of the form/origin in RD Station (e.g. "newsletter-medlive"). */
  conversion_identifier: string;
  email: string;
  name?: string;
  company_name?: string;
  cf_telefone?: string;
  cf_cnpj?: string;
  cf_canal?: string;
  cf_uf?: string;
  cf_volume?: string;
  cf_mensagem?: string;
};

export type SendLeadResult =
  | { ok: true; status: number; body: string }
  | { ok: false; status: number; body: string };

export async function sendConversion(payload: LeadConversion): Promise<SendLeadResult> {
  const token = process.env.RD_STATION_PUBLIC_TOKEN;
  if (!token) {
    return { ok: false, status: 500, body: "Missing RD_STATION_PUBLIC_TOKEN env var" };
  }

  // v1.3 uses Portuguese keys at the root of the body. Custom fields are
  // arbitrary additional keys.
  const body: Record<string, string> = {
    token_rdstation: token,
    identificador: payload.conversion_identifier,
    email: payload.email,
  };
  if (payload.name) body.nome = payload.name;
  if (payload.company_name) body.empresa = payload.company_name;
  if (payload.cf_telefone) body.telefone = payload.cf_telefone;
  if (payload.cf_cnpj) body.cnpj = payload.cf_cnpj;
  if (payload.cf_canal) body.tipo_canal = payload.cf_canal;
  if (payload.cf_uf) body.estado = payload.cf_uf;
  if (payload.cf_volume) body.volume_estimado = payload.cf_volume;
  if (payload.cf_mensagem) body.mensagem = payload.cf_mensagem;

  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), 8000);

  try {
    const res = await fetch(CONVERSIONS_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
      signal: controller.signal,
    });
    const text = await res.text().catch(() => "");
    if (!res.ok) {
      return { ok: false, status: res.status, body: text.slice(0, 1000) };
    }
    return { ok: true, status: res.status, body: text.slice(0, 1000) };
  } catch (err) {
    const message = err instanceof Error ? err.message : "unknown";
    return { ok: false, status: 0, body: message };
  } finally {
    clearTimeout(timeout);
  }
}

export function envDiagnostic() {
  return {
    hasPublicToken: Boolean(process.env.RD_STATION_PUBLIC_TOKEN),
    publicTokenLength: process.env.RD_STATION_PUBLIC_TOKEN?.length ?? 0,
    hasPrivateToken: Boolean(process.env.RD_STATION_PRIVATE_TOKEN),
    privateTokenLength: process.env.RD_STATION_PRIVATE_TOKEN?.length ?? 0,
  };
}
