import { NextResponse } from "next/server";
import { sendConversion, type LeadConversion } from "@/lib/rdstation";

const ALLOWED_IDENTIFIERS = new Set([
  "newsletter-medlive",
  "catalogo-medlive-2026",
  "seja-revendedor",
]);

type Body = Partial<LeadConversion>;

function isEmail(value: unknown): value is string {
  return typeof value === "string" && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

export async function POST(req: Request) {
  let body: Body;
  try {
    body = (await req.json()) as Body;
  } catch {
    return NextResponse.json({ ok: false, error: "Invalid JSON" }, { status: 400 });
  }

  if (!body.conversion_identifier || !ALLOWED_IDENTIFIERS.has(body.conversion_identifier)) {
    return NextResponse.json({ ok: false, error: "Invalid conversion_identifier" }, { status: 400 });
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
  };

  const result = await sendConversion(payload);
  if (!result.ok) {
    console.error("[rdstation] conversion failed", result);
    return NextResponse.json({ ok: false }, { status: 502 });
  }
  return NextResponse.json({ ok: true });
}
