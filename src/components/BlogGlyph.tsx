export function BlogGlyph({ i }: { i: number }) {
  const icons = [
    <svg key="0" width="60" height="60" viewBox="0 0 60 60" fill="none">
      <path
        d="M10 44L22 28L32 36L50 14"
        stroke="#fff"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx="50" cy="14" r="3" fill="#fff" />
    </svg>,
    <svg key="1" width="60" height="60" viewBox="0 0 60 60" fill="none">
      <rect x="10" y="14" width="40" height="32" rx="3" stroke="#fff" strokeWidth="2" />
      <path
        d="M10 22H50M18 30H30M18 36H26"
        stroke="#fff"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>,
    <svg key="2" width="60" height="60" viewBox="0 0 60 60" fill="none">
      <circle cx="30" cy="30" r="18" stroke="#fff" strokeWidth="2" />
      <circle cx="30" cy="30" r="10" stroke="#fff" strokeWidth="2" />
      <circle cx="30" cy="30" r="3" fill="#fff" />
    </svg>,
  ];

  return (
    <div style={{ position: "absolute", right: 20, bottom: 20, opacity: 0.85 }}>
      {icons[i % icons.length]}
    </div>
  );
}
