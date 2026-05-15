"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState, type ReactNode } from "react";
import { Breadcrumb } from "@/components/Breadcrumb";
import { Icon } from "@/components/Icon";
import { CategoryGlyph } from "@/components/CategoryGlyph";
import { BigCTA } from "@/components/BigCTA";
import { Newsletter } from "@/components/Newsletter";
import { CATEGORIES, PRODUCTS, productCapacity, productSlug, type Product } from "@/lib/data";

type DiffItem = { iconKey: keyof typeof Icon; title: string; desc: string };

const DIFFERENTIALS: Record<string, DiffItem[]> = {
  andadores: [
    { iconKey: "shield", title: "Estrutura reforçada", desc: "Barras resistentes para uso clínico e domiciliar diário." },
    { iconKey: "check", title: "Altura regulável", desc: "Ajuste de altura para adaptação a diferentes estaturas." },
    { iconKey: "truck", title: "Mobilidade prática", desc: "Estrutura leve e dobrável para transporte e armazenamento." },
  ],
  banquetas: [
    { iconKey: "shield", title: "Antiderrapante", desc: "Ponteiras emborrachadas para máxima segurança no banho." },
    { iconKey: "check", title: "Material higiênico", desc: "Plástico de alta densidade, fácil limpeza e resistente à água." },
    { iconKey: "tag", title: "Altura ajustável", desc: "Regulagem de altura para adaptação ao usuário." },
  ],
  "cadeiras-banho": [
    { iconKey: "shield", title: "Estrutura robusta", desc: "Aço com pintura epóxi para máxima durabilidade em ambientes hospitalares." },
    { iconKey: "check", title: "Desmontável", desc: "Facilita transporte, higienização e armazenamento." },
    { iconKey: "users", title: "Conforto do paciente", desc: "Encosto e assento projetados para uso prolongado." },
  ],
  "cadeiras-transf": [
    { iconKey: "target", title: "Multifuncional", desc: "Diversas funções para atender diferentes necessidades de transferência de pacientes." },
    { iconKey: "check", title: "Altura regulável", desc: "Ajuste de altura de 70 a 95 cm para adaptar a diferentes situações." },
    { iconKey: "shield", title: "Estrutura robusta", desc: "Aço inox com pintura epóxi para máxima durabilidade em ambientes hospitalares." },
  ],
  muletas: [
    { iconKey: "check", title: "Alumínio leve", desc: "Estrutura em alumínio que combina leveza e resistência." },
    { iconKey: "tag", title: "Altura regulável", desc: "Regulagem de altura universal para diferentes estaturas." },
    { iconKey: "shield", title: "Ponteira antiderrapante", desc: "Segurança na marcha em pisos lisos ou molhados." },
  ],
  barras: [
    { iconKey: "shield", title: "Fixação segura", desc: "Sistema de fixação ao piso certificado para uso sanitário." },
    { iconKey: "check", title: "Altura ajustável", desc: "Regulagem para adaptação ao usuário final." },
    { iconKey: "tag", title: "Alumínio resistente", desc: "Estrutura em alumínio anodizado resistente à umidade." },
  ],
};

const DIMS_BY_CAT: Record<string, [string, string][]> = {
  andadores: [["Largura", "55 cm"], ["Altura", "78 – 95 cm"], ["Profundidade", "52 cm"]],
  banquetas: [["Largura do assento", "45 cm"], ["Altura", "38 – 52 cm"], ["Profundidade", "40 cm"]],
  "cadeiras-banho": [["Largura", "58 cm"], ["Altura", "88 cm"], ["Profundidade", "62 cm"]],
  "cadeiras-transf": [["Largura", "65 cm"], ["Altura", "78 – 95 cm"], ["Profundidade", "68 cm"]],
  muletas: [["Comprimento", "110 – 135 cm"], ["Largura do apoio", "14 cm"], ["Ponteira", "Ø 2,5 cm"]],
  barras: [["Comprimento", "60 cm"], ["Altura ajustável", "70 – 95 cm"], ["Diâmetro", "Ø 3 cm"]],
};

function articleFor(name: string) {
  const first = name.split(" ")[0].toLowerCase();
  const fem = ["cadeira", "banqueta", "barra", "muleta"];
  return fem.some((w) => first.startsWith(w)) ? "uma" : "um";
}

function buildLongDesc(p: Product): ReactNode[] {
  if (p.desc && p.desc.length > 100) {
    const codeRe = new RegExp(`(${p.code})`, "g");
    const wrap = (text: string, baseKey: string): ReactNode => {
      const parts = text.split(codeRe);
      return parts.map((s, i) =>
        s === p.code ? <strong key={`${baseKey}-${i}`}>{s}</strong> : s,
      );
    };
    return p.desc.split("\n").map((para, i) => wrap(para, String(i)));
  }
  const cap = productCapacity(p);
  const capPhrase = cap ? `com capacidade para ${cap}` : "";
  const text = `O ${p.code} é ${articleFor(p.name)} ${p.name.toLowerCase()} ${capPhrase}. ${p.desc} Desenvolvido para revendedores B2B que buscam qualidade, durabilidade e suporte técnico completo.`
    .replace(/\s+/g, " ")
    .trim();
  return [text];
}

function buildSpecTables(p: Product, capacity: string | null) {
  // Per-product overrides win over the category-level defaults.
  const dims = p.dimensions ?? DIMS_BY_CAT[p.cat] ?? DIMS_BY_CAT.andadores;
  if (p.characteristics) {
    return { dimensions: dims, characteristics: p.characteristics };
  }

  const hasAlu = p.specs.some((s) => /alumínio/i.test(s));
  const hasAco = p.specs.some((s) => /aço|inox/i.test(s));
  const material = hasAco
    ? "Aço inox com pintura epóxi"
    : hasAlu
    ? "Alumínio anodizado"
    : "Polietileno de alta densidade";
  const peso =
    p.cat === "muletas"
      ? "0,9 kg"
      : p.cat === "banquetas"
      ? "3,2 kg"
      : p.cat === "barras"
      ? "1,4 kg"
      : p.cat === "cadeiras-transf"
      ? "32,5 kg"
      : hasAlu
      ? "3,6 kg"
      : "6,8 kg";

  const articulada = p.specs.some((s) => /articulad/i.test(s))
    ? "Sim"
    : p.specs.some((s) => /dobráv|desmont/i.test(s))
    ? "Parcial"
    : "—";

  const chars: [string, string][] = [
    ["Capacidade", capacity || "—"],
    ["Peso líquido", peso],
    ["Acabamento", material],
    ["Função articulada", articulada],
  ];

  return { dimensions: dims, characteristics: chars };
}

export function ProductDetail({ product }: { product: Product }) {
  const cat = CATEGORIES.find((c) => c.id === product.cat);
  const capacity = productCapacity(product);
  const related = PRODUCTS.filter((p) => p.cat === product.cat && p.code !== product.code).slice(0, 3);

  const colors = product.colors;
  const [activeColorId, setActiveColorId] = useState<string | undefined>(colors?.[0]?.id);
  const activeColor = colors?.find((c) => c.id === activeColorId) ?? colors?.[0];

  // Gallery is driven by the active color when colors are defined; otherwise
  // it falls back to product.images / product.image.
  const galleryImages: string[] = colors
    ? activeColor?.images ?? []
    : product.images && product.images.length
    ? product.images
    : product.image
    ? [product.image]
    : [];
  const activeTransforms = colors ? activeColor?.imageTransforms : product.imageTransforms;
  const activeStyles = colors ? activeColor?.imageStyles : product.imageStyles;

  const hasImages = galleryImages.length > 0;
  // When a color variant has no photos yet, mirror the largest sibling's count
  // so the gallery layout doesn't shift between colors.
  const referenceCount = colors
    ? Math.max(0, ...colors.map((c) => c.images.length))
    : 0;
  const awaitingPhotos = !hasImages && (Boolean(colors) || Boolean(product.awaitingPhotos));
  const placeholderCount = hasImages
    ? 0
    : awaitingPhotos
    ? Math.max(referenceCount, 3)
    : 3;
  const galleryLen = hasImages ? galleryImages.length : placeholderCount;

  const [activeThumb, setActiveThumb] = useState(0);
  const [lightbox, setLightbox] = useState(false);
  const [zoomed, setZoomed] = useState(false);
  const [pan, setPan] = useState({ x: 50, y: 50 });

  useEffect(() => setActiveThumb(0), [product.code, activeColorId]);

  useEffect(() => {
    if (!lightbox) {
      setZoomed(false);
      setPan({ x: 50, y: 50 });
    }
  }, [lightbox]);

  const goPrev = () => setActiveThumb((i) => (i - 1 + galleryLen) % galleryLen);
  const goNext = () => setActiveThumb((i) => (i + 1) % galleryLen);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape" && lightbox) {
        setLightbox(false);
        return;
      }
      if (galleryLen <= 1) return;
      if (e.key === "ArrowLeft") goPrev();
      else if (e.key === "ArrowRight") goNext();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [galleryLen, lightbox]); // eslint-disable-line react-hooks/exhaustive-deps

  const differentials = product.differentials || DIFFERENTIALS[product.cat] || DIFFERENTIALS.andadores;
  const { dimensions, characteristics } = buildSpecTables(product, capacity);
  const longDesc = buildLongDesc(product);

  const currentImage = hasImages ? galleryImages[activeThumb] || galleryImages[0] : null;
  const transformAt = (i: number) => activeTransforms?.[i];
  const styleAt = (i: number) => {
    const t = activeTransforms?.[i];
    const s = activeStyles?.[i];
    if (!t && !s) return undefined;
    return { ...(s ?? {}), ...(t ? { transform: t } : {}) };
  };
  const currentTransform = transformAt(activeThumb);
  const currentStyle = styleAt(activeThumb);

  return (
    <>
      <section className="page-head pd-head">
        <div className="container">
          <Breadcrumb
            items={[
              { label: "Início", href: "/" },
              { label: "Produtos", href: "/produtos" },
              { label: cat?.label || "Categoria", href: `/produtos?cat=${product.cat}` },
              { label: product.name },
            ]}
          />
        </div>
      </section>

      <section className="section" style={{ paddingTop: 12, paddingBottom: 56 }}>
        <div className="container">
          <div className="pd-hero">
            <div className="pd-gallery">
              <div className="pd-main-visual">
                <span className="pd-code-pill">{product.code}</span>
                {currentImage && (
                  <button
                    type="button"
                    className="pd-zoom-btn"
                    onClick={() => setLightbox(true)}
                    aria-label="Ampliar imagem"
                    title="Clique para ampliar"
                  >
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <circle cx="11" cy="11" r="7" />
                    <line x1="21" y1="21" x2="16.5" y2="16.5" />
                    <line x1="11" y1="8" x2="11" y2="14" />
                    <line x1="8" y1="11" x2="14" y2="11" />
                  </svg>
                </button>
                )}
                <div
                  className="pd-main-art"
                  onClick={() => (currentImage ? setLightbox(true) : undefined)}
                  style={{ cursor: currentImage ? "zoom-in" : "default" }}
                >
                  {currentImage ? (
                    <Image
                      src={currentImage}
                      alt={`${product.name} — Med Live Well`}
                      className="pd-main-img"
                      width={800}
                      height={800}
                      priority
                      style={currentStyle}
                    />
                  ) : awaitingPhotos ? (
                    <div className="pd-photo-pending">Foto em breve</div>
                  ) : (
                    <CategoryGlyph id={product.cat} />
                  )}
                </div>
                {galleryLen > 1 && (
                  <>
                    <button className="pd-arrow pd-arrow-prev" onClick={goPrev} aria-label="Imagem anterior">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="15 18 9 12 15 6" />
                      </svg>
                    </button>
                    <button className="pd-arrow pd-arrow-next" onClick={goNext} aria-label="Próxima imagem">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="9 18 15 12 9 6" />
                      </svg>
                    </button>
                    <div className="pd-counter">
                      {activeThumb + 1} / {galleryLen}
                    </div>
                  </>
                )}
              </div>
              <div className="pd-thumbs">
                {hasImages
                  ? galleryImages.map((thumb, i) => (
                      <button
                        key={i}
                        className={"pd-thumb " + (activeThumb === i ? "active" : "")}
                        onClick={() => setActiveThumb(i)}
                        aria-label={`Vista ${i + 1}`}
                      >
                        <Image
                          src={thumb}
                          alt={`${product.name} — vista ${i + 1}`}
                          className="pd-thumb-img"
                          width={84}
                          height={84}
                          style={styleAt(i)}
                        />
                      </button>
                    ))
                  : Array.from({ length: placeholderCount }).map((_, i) => (
                      <button
                        key={i}
                        className={"pd-thumb " + (activeThumb === i ? "active" : "")}
                        onClick={() => setActiveThumb(i)}
                        aria-label={`Vista ${i + 1}`}
                      >
                        {awaitingPhotos ? (
                          <div className="pd-thumb-pending" aria-hidden="true" />
                        ) : (
                          <div
                            className="pd-thumb-art"
                            style={{
                              transform: `scale(${0.7 + i * 0.05}) rotate(${i * 6 - 6}deg)`,
                            }}
                          >
                            <CategoryGlyph id={product.cat} />
                          </div>
                        )}
                      </button>
                    ))}
              </div>
            </div>

            <div className="pd-info">
              <div className="pd-ref">Ref. {product.code}</div>
              <h1 className="pd-title">{product.name}</h1>
              {capacity && (
                <div className="pd-capacity-pill">
                  <Icon.shield size={14} /> Capacidade: {capacity}
                </div>
              )}
              {colors && colors.length > 0 && (
                <div className="pd-colors">
                  <div className="pd-colors-label">
                    Cor: <strong>{activeColor?.label}</strong>
                  </div>
                  <div className="pd-colors-row">
                    {colors.map((c) => (
                      <button
                        key={c.id}
                        type="button"
                        className={
                          "pd-color-swatch " + (c.id === activeColor?.id ? "active" : "")
                        }
                        style={{ background: c.swatch }}
                        onClick={() => setActiveColorId(c.id)}
                        aria-label={c.label}
                        aria-pressed={c.id === activeColor?.id}
                        title={c.label}
                      />
                    ))}
                  </div>
                </div>
              )}
              {longDesc.map((para, i) => {
                const isFirst = i === 0;
                const isLast = i === longDesc.length - 1;
                return (
                  <p
                    key={i}
                    className="pd-desc"
                    style={{
                      fontWeight: 400,
                      marginTop: isFirst ? undefined : 4,
                      marginBottom: isLast ? undefined : 0,
                    }}
                  >
                    {para}
                  </p>
                );
              })}

              <Link href="/seja-revendedor" className="btn btn-primary btn-lg pd-cta-main">
                Solicitar cotação B2B <Icon.arrow />
              </Link>

              <div className="pd-cta-row">
                <a href="#" className="btn pd-contact-btn pd-whatsapp-btn">
                  <Icon.whatsapp /> WhatsApp
                </a>
                <a
                  href="mailto:contato@medlivewell.com.br"
                  className="btn btn-ghost pd-contact-btn"
                >
                  <Icon.mail /> E-mail
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section pd-section" style={{ paddingTop: 32, paddingBottom: 32 }}>
        <div className="container">
          <div className="pd-eyebrow">Diferenciais do produto</div>
          <div className="pd-diff-grid">
            {differentials.map((d, i) => {
              const IconCmp = Icon[d.iconKey as keyof typeof Icon];
              return (
                <div key={i} className="pd-diff-card">
                  <div className="ic">
                    <IconCmp />
                  </div>
                  <h5>{d.title}</h5>
                  <p>{d.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="section pd-section" style={{ paddingTop: 16, paddingBottom: 56 }}>
        <div className="container">
          <div className="pd-eyebrow">Especificações técnicas</div>
          <div className="pd-spec-grid">
            <div className="pd-spec-card">
              <h4>Dimensões</h4>
              <div className="pd-spec-rule" />
              {dimensions.map(([k, v]) => (
                <div key={k} className="pd-spec-row">
                  <span className="k">{k}</span>
                  <span className="v">{v}</span>
                </div>
              ))}
            </div>
            <div className="pd-spec-card">
              <h4>Características</h4>
              <div className="pd-spec-rule" />
              {characteristics.map(([k, v]) => (
                <div key={k} className="pd-spec-row">
                  <span className="k">{k}</span>
                  <span className="v">{v}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {related.length > 0 && (
        <section className="section" style={{ paddingTop: 16, paddingBottom: 72 }}>
          <div className="container">
            <h3 style={{ fontSize: 20, marginBottom: 20 }}>
              Outros {cat?.label.toLowerCase()} do catálogo
            </h3>
            <div className="pd-related-grid">
              {related.map((p) => (
                <div key={p.code} className="pd-related-card">
                  <div className="pd-related-visual">
                    <span className="code">{p.code}</span>
                    {p.image ? (
                      <Image
                        src={p.image}
                        alt={`${p.name} — Med Live Well`}
                        className="pd-related-img"
                        width={300}
                        height={188}
                        style={
                          p.imageTransforms?.[0]
                            ? { transform: p.imageTransforms[0] }
                            : undefined
                        }
                      />
                    ) : (
                      <CategoryGlyph id={p.cat} />
                    )}
                  </div>
                  <div className="pd-related-name">{p.name}</div>
                  <Link
                    href={`/produto/${productSlug(p.code)}`}
                    className="btn btn-ghost btn-sm pd-related-btn"
                  >
                    Ver produto <Icon.arrow />
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      <BigCTA />
      <Newsletter />

      {lightbox && (
        <div className="pd-lightbox" onClick={() => setLightbox(false)}>
          <button
            className="pd-lb-close"
            onClick={(e) => {
              e.stopPropagation();
              setLightbox(false);
            }}
            aria-label="Fechar"
          >
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round">
              <line x1="6" y1="6" x2="18" y2="18" />
              <line x1="6" y1="18" x2="18" y2="6" />
            </svg>
          </button>
          {galleryLen > 1 && (
            <>
              <button
                className="pd-lb-arrow pd-lb-prev"
                onClick={(e) => {
                  e.stopPropagation();
                  goPrev();
                }}
                aria-label="Imagem anterior"
              >
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="15 18 9 12 15 6" />
                </svg>
              </button>
              <button
                className="pd-lb-arrow pd-lb-next"
                onClick={(e) => {
                  e.stopPropagation();
                  goNext();
                }}
                aria-label="Próxima imagem"
              >
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="9 18 15 12 9 6" />
                </svg>
              </button>
            </>
          )}
          <div
            className={"pd-lb-stage " + (zoomed ? "is-zoomed" : "")}
            onClick={(e) => {
              e.stopPropagation();
              setZoomed((z) => !z);
            }}
            onMouseMove={(e) => {
              if (!zoomed) return;
              const r = e.currentTarget.getBoundingClientRect();
              setPan({
                x: ((e.clientX - r.left) / r.width) * 100,
                y: ((e.clientY - r.top) / r.height) * 100,
              });
            }}
          >
            {currentImage ? (
              // eslint-disable-next-line @next/next/no-img-element
              <img
                src={currentImage}
                alt={`${product.name} — Med Live Well`}
                className="pd-lb-img"
                style={
                  zoomed
                    ? {
                        transform: `${currentTransform ? currentTransform + " " : ""}scale(2.4)`,
                        transformOrigin: `${pan.x}% ${pan.y}%`,
                        cursor: "zoom-out",
                      }
                    : currentTransform
                    ? { transform: currentTransform, cursor: "zoom-in" }
                    : { cursor: "zoom-in" }
                }
              />
            ) : (
              <div className="pd-lb-placeholder">
                <CategoryGlyph id={product.cat} />
              </div>
            )}
          </div>
          {galleryLen > 1 && (
            <div className="pd-lb-counter">
              {activeThumb + 1} / {galleryLen}
            </div>
          )}
          <div className="pd-lb-hint">
            Clique na imagem para {zoomed ? "reduzir" : "ampliar"} · ESC para fechar
          </div>
        </div>
      )}
    </>
  );
}
