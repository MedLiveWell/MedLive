import { NextResponse } from "next/server";
import { envDiagnostic, sendConversion, type LeadConversion } from "@/lib/rdstation";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

const ALLOWED_IDENTIFIERS = new Set([
  "newsletter-medlive",
  "catalogo-medlive-2026",
  "seja-revendedor",
]);

type Body = Partial<LeadConversion> & { diagnostic?: boolean };

function isEmail(value: unknown): value is string {
  return typeof value === "string" && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

// GET /api/leads — diagnostic check. Returns whether the env vars are loaded.
// Token values are NEVER returned, only their lengths so you can confirm a
// non-empty value is set on the deployed environment.
export async function GET(req: Request) {
  const url = new URL(req.url);
  const probe = url.searchParams.get("probe");
  const env = envDiagnostic();
  if (probe === "1" && env.hasPublicToken) {
    const result = await sendConversion({
      conversion_identifier: "newsletter-medlive",
      email: `probe+${Date.now()}@medlivewell.com.br`,
      name: "RD Station diagnostic probe",
    });
    return NextResponse.json({ env, probe: result });
  }
  return NextResponse.json({ env });
}

export async function POST(req: Request) {
  let body: Body;
  try {
    body = (await req.json()) as Body;
  } catch {
    return NextResponse.json({ ok: false, error: "Invalid JSON" }, { status: 400 });
  }

  if (!body.conversion_identifier || !ALLOWED_IDENTIFIERS.has(body.conversion_identifier)) {
    return NextResponse.json(
      { ok: false, error: "Invalid conversion_identifier" },
      { status: 400 },
    );
  }
  if (!isEmail(body.email)) {
    return NextResponse.json({ ok: false, error: "Invalid email" }, { status: 400 });
  }

  const payload: LeadConversion = {
    conversion_identifier: body.conversion_identifier,
    email: body.email,
    ...(body.name ? { name: body.name } : {}),
    ...(body.company_name ? { company_name: body.company_name } : {}),
    ...(body.cf_telefone ? { cf_telefone: body.cf_telefone } : {}),
    ...(body.cf_cnpj ? { cf_cnpj: body.cf_cnpj } : {}),
    ...(body.cf_canal ? { cf_canal: body.cf_canal } : {}),
    ...(body.cf_uf ? { cf_uf: body.cf_uf } : {}),
    ...(body.cf_volume ? { cf_volume: body.cf_volume } : {}),
    ...(body.cf_mensagem ? { cf_mensagem: body.cf_mensagem } : {}),
    ...(body.cf_origem_pagina ? { cf_origem_pagina: body.cf_origem_pagina } : {}),
  };

  const result = await sendConversion(payload);
  if (!result.ok) {
    console.error(
      "[rdstation] conversion FAILED",
      JSON.stringify({
        identifier: payload.conversion_identifier,
        email: payload.email,
        status: result.status,
        body: result.body,
      }),
    );
    return NextResponse.json(
      { ok: false, status: result.status, detail: result.body },
      { status: 502 },
    );
  }
  console.log(
    "[rdstation] conversion OK",
    JSON.stringify({ identifier: payload.conversion_identifier, email: payload.email }),
  );
  return NextResponse.json({ ok: true });
}
