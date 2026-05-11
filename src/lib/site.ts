/**
 * Canonical site URL. Reads from NEXT_PUBLIC_SITE_URL so the value can be
 * overridden per environment without touching code; falls back to the
 * production domain so local dev and missing-env-var deploys still produce
 * valid absolute URLs in metadata, sitemap, schema, etc.
 */
export const SITE_URL: string =
  process.env.NEXT_PUBLIC_SITE_URL || "https://www.medlivewell.com.br";
