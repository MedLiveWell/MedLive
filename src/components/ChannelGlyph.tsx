type Props = { kind: "store" | "marketplace" };

export function ChannelGlyph({ kind }: Props) {
  if (kind === "store") {
    return (
      <svg viewBox="0 0 200 100" width="80%" height="80%">
        <rect x="20" y="30" width="160" height="60" rx="4" fill="#fff" stroke="var(--cobalto)" strokeWidth="2" />
        <path
          d="M20 30 L40 10 L160 10 L180 30"
          fill="var(--cobalto-soft)"
          stroke="var(--cobalto)"
          strokeWidth="2"
          strokeLinejoin="round"
        />
        <rect x="40" y="45" width="30" height="30" fill="var(--tangerina-soft)" />
        <rect x="130" y="45" width="30" height="30" fill="var(--tangerina-soft)" />
        <rect x="85" y="45" width="30" height="45" fill="var(--cobalto)" />
        <rect x="97" y="55" width="6" height="10" fill="#fff" />
      </svg>
    );
  }
  return (
    <svg viewBox="0 0 200 100" width="80%" height="80%">
      <rect x="15" y="20" width="50" height="60" rx="6" fill="var(--celeste-soft)" stroke="var(--cobalto)" strokeWidth="2" />
      <rect x="75" y="20" width="50" height="60" rx="6" fill="#fff" stroke="var(--cobalto)" strokeWidth="2" />
      <rect x="135" y="20" width="50" height="60" rx="6" fill="var(--tangerina-soft)" stroke="var(--cobalto)" strokeWidth="2" />
      <circle cx="40" cy="42" r="7" fill="var(--cobalto)" />
      <rect x="22" y="55" width="36" height="3" fill="var(--cobalto)" opacity=".4" />
      <rect x="22" y="62" width="24" height="3" fill="var(--cobalto)" opacity=".3" />
      <circle cx="100" cy="42" r="7" fill="var(--tangerina)" />
      <rect x="82" y="55" width="36" height="3" fill="var(--cobalto)" opacity=".4" />
      <rect x="82" y="62" width="24" height="3" fill="var(--cobalto)" opacity=".3" />
      <circle cx="160" cy="42" r="7" fill="var(--celeste)" />
      <rect x="142" y="55" width="36" height="3" fill="var(--cobalto)" opacity=".4" />
      <rect x="142" y="62" width="24" height="3" fill="var(--cobalto)" opacity=".3" />
    </svg>
  );
}
