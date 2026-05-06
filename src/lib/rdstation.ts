// Server-side RD Station Marketing client.
// The public token is used as `api_key` on the conversions endpoint, which is
// the documented path for form-style lead capture. We never ship tokens to the
// browser — submissions flow through /api/leads.

const CONVERSIONS_URL = "https://api.rd.services/platform/conversions";

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

export type SendLeadResult = { ok: true } | { ok: false; status: number; body: string };

export async function sendConversion(payload: LeadConversion): Promise<SendLeadResult> {
  const token = process.env.RD_STATION_PUBLIC_TOKEN;
  if (!token) {
    return { ok: false, status: 500, body: "Missing RD_STATION_PUBLIC_TOKEN" };
  }

  const url = `${CONVERSIONS_URL}?api_key=${encodeURIComponent(token)}`;
  const body = {
    event_type: "CONVERSION",
    event_family: "CDP",
    payload,
  };

  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), 6000);

  try {
    const res = await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
      signal: controller.signal,
    });
    if (!res.ok) {
      const text = await res.text().catch(() => "");
      return { ok: false, status: res.status, body: text.slice(0, 500) };
    }
    return { ok: true };
  } catch (err) {
    const message = err instanceof Error ? err.message : "unknown";
    return { ok: false, status: 0, body: message };
  } finally {
    clearTimeout(timeout);
  }
}
