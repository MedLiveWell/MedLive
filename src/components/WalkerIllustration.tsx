export function WalkerIllustration() {
  return (
    <svg
      viewBox="0 0 260 320"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{ height: "100%", width: "auto" }}
    >
      <defs>
        <linearGradient id="frame-grad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#cfdfe8" />
          <stop offset="1" stopColor="#8ca6b6" />
        </linearGradient>
        <linearGradient id="handle-grad" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0" stopColor="#0F3A7A" />
          <stop offset="1" stopColor="#1a4e9e" />
        </linearGradient>
      </defs>
      <ellipse cx="130" cy="300" rx="95" ry="8" fill="#0F3A7A" opacity="0.12" />
      <rect x="50" y="70" width="6" height="220" rx="3" fill="url(#frame-grad)" />
      <rect x="204" y="70" width="6" height="220" rx="3" fill="url(#frame-grad)" />
      <rect x="78" y="80" width="5" height="210" rx="2.5" fill="url(#frame-grad)" />
      <rect x="177" y="80" width="5" height="210" rx="2.5" fill="url(#frame-grad)" />
      <rect x="50" y="68" width="160" height="7" rx="3.5" fill="url(#frame-grad)" />
      <rect x="50" y="170" width="160" height="5" rx="2.5" fill="url(#frame-grad)" />
      <rect x="50" y="250" width="160" height="5" rx="2.5" fill="url(#frame-grad)" />
      <rect x="30" y="48" width="40" height="24" rx="12" fill="url(#handle-grad)" />
      <rect x="190" y="48" width="40" height="24" rx="12" fill="url(#handle-grad)" />
      <rect x="36" y="56" width="28" height="1.5" fill="rgba(255,255,255,.3)" />
      <rect x="36" y="60" width="28" height="1.5" fill="rgba(255,255,255,.3)" />
      <rect x="196" y="56" width="28" height="1.5" fill="rgba(255,255,255,.3)" />
      <rect x="196" y="60" width="28" height="1.5" fill="rgba(255,255,255,.3)" />
      <circle cx="53" cy="295" r="12" fill="#1f2937" />
      <circle cx="53" cy="295" r="5" fill="#4FB0D4" />
      <circle cx="207" cy="295" r="12" fill="#1f2937" />
      <circle cx="207" cy="295" r="5" fill="#4FB0D4" />
      <circle cx="80" cy="295" r="10" fill="#1f2937" />
      <circle cx="80" cy="295" r="4" fill="#F08A2B" />
      <circle cx="180" cy="295" r="10" fill="#1f2937" />
      <circle cx="180" cy="295" r="4" fill="#F08A2B" />
      <rect x="105" y="110" width="50" height="22" rx="4" fill="#F08A2B" />
      <text
        x="130"
        y="125"
        textAnchor="middle"
        fontFamily="sans-serif"
        fontSize="10"
        fontWeight="800"
        fill="#fff"
        letterSpacing="0.5"
      >
        MED 530
      </text>
    </svg>
  );
}
