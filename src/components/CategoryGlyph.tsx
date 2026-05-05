type Props = { id: string };

const common = { width: "72%", height: "72%" } as const;
const stroke = "var(--cobalto)";
const accent = "var(--tangerina)";

export function CategoryGlyph({ id }: Props) {
  if (id === "andadores") {
    return (
      <svg viewBox="0 0 100 80" style={common}>
        <rect x="20" y="18" width="60" height="3" fill={stroke} rx="1.5" />
        <rect x="22" y="18" width="2.5" height="50" fill={stroke} />
        <rect x="76" y="18" width="2.5" height="50" fill={stroke} />
        <rect x="35" y="22" width="2" height="46" fill="#8ca6b6" />
        <rect x="63" y="22" width="2" height="46" fill="#8ca6b6" />
        <circle cx="23" cy="70" r="4" fill={accent} />
        <circle cx="77" cy="70" r="4" fill={accent} />
        <rect x="14" y="14" width="14" height="7" rx="3" fill={stroke} />
        <rect x="72" y="14" width="14" height="7" rx="3" fill={stroke} />
      </svg>
    );
  }

  if (id === "banquetas") {
    return (
      <svg viewBox="0 0 100 80" style={common}>
        <ellipse cx="50" cy="28" rx="26" ry="8" fill="#fff" stroke={stroke} strokeWidth="2" />
        <rect x="26" y="28" width="3" height="38" fill={stroke} />
        <rect x="71" y="28" width="3" height="38" fill={stroke} />
        <rect x="40" y="28" width="3" height="38" fill={stroke} />
        <rect x="57" y="28" width="3" height="38" fill={stroke} />
        <rect x="24" y="4" width="3" height="26" fill={accent} />
        <rect x="22" y="4" width="7" height="3" fill={accent} />
      </svg>
    );
  }

  if (id === "cadeiras-banho") {
    return (
      <svg viewBox="0 0 100 80" style={common}>
        <rect x="28" y="16" width="44" height="8" fill={accent} rx="2" />
        <rect x="28" y="28" width="44" height="16" fill="#fff" stroke={stroke} strokeWidth="2" rx="2" />
        <rect x="30" y="44" width="3" height="22" fill={stroke} />
        <rect x="67" y="44" width="3" height="22" fill={stroke} />
        <rect x="14" y="26" width="16" height="3" fill={stroke} />
        <rect x="70" y="26" width="16" height="3" fill={stroke} />
      </svg>
    );
  }

  if (id === "cadeiras-transf") {
    return (
      <svg viewBox="0 0 100 80" style={common}>
        <rect x="24" y="24" width="52" height="16" rx="3" fill={stroke} />
        <rect x="24" y="10" width="6" height="16" fill={stroke} />
        <rect x="70" y="10" width="6" height="16" fill={stroke} />
        <circle cx="32" cy="60" r="10" fill="#1f2937" />
        <circle cx="32" cy="60" r="4" fill={accent} />
        <circle cx="68" cy="60" r="10" fill="#1f2937" />
        <circle cx="68" cy="60" r="4" fill={accent} />
      </svg>
    );
  }

  if (id === "muletas") {
    return (
      <svg viewBox="0 0 100 80" style={common}>
        <rect x="28" y="6" width="10" height="6" rx="2" fill={stroke} />
        <rect x="32" y="12" width="3" height="58" fill={stroke} />
        <rect x="24" y="30" width="15" height="3" fill={accent} />
        <rect x="60" y="6" width="10" height="6" rx="2" fill={stroke} />
        <rect x="64" y="12" width="3" height="58" fill={stroke} />
        <rect x="56" y="30" width="15" height="3" fill={accent} />
      </svg>
    );
  }

  if (id === "barras") {
    return (
      <svg viewBox="0 0 100 80" style={common}>
        <rect x="18" y="12" width="10" height="56" rx="2" fill={stroke} />
        <rect x="72" y="12" width="10" height="56" rx="2" fill={stroke} />
        <rect x="28" y="36" width="44" height="8" rx="4" fill={accent} />
        <circle cx="23" cy="18" r="2" fill="#fff" />
        <circle cx="77" cy="62" r="2" fill="#fff" />
      </svg>
    );
  }

  return null;
}
