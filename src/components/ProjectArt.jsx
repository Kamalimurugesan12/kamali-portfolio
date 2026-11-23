/**
 * Generated artwork for project cards (stand-ins until real screenshots are added).
 * Each variant is a small abstract "interface" illustration that fits the project theme.
 * Colors come from CSS variables so the art follows the site theme.
 */

const W = 400;
const H = 250;

function Frame({ children, id }) {
  return (
    <svg
      className="project-art"
      viewBox={`0 0 ${W} ${H}`}
      preserveAspectRatio="xMidYMid slice"
      role="img"
      aria-label=""
      aria-hidden="true"
    >
      <defs>
        <linearGradient id={`bg-${id}`} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="var(--art-a)" />
          <stop offset="1" stopColor="var(--art-b)" />
        </linearGradient>
        <linearGradient id={`ac-${id}`} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="var(--blue)" />
          <stop offset="1" stopColor="var(--violet)" />
        </linearGradient>
      </defs>
      <rect width={W} height={H} fill={`url(#bg-${id})`} />
      <g className="art-grid" opacity="0.5">
        {Array.from({ length: 9 }).map((_, i) => (
          <line key={`v${i}`} x1={i * 50} y1="0" x2={i * 50} y2={H} />
        ))}
        {Array.from({ length: 6 }).map((_, i) => (
          <line key={`h${i}`} x1="0" y1={i * 50} x2={W} y2={i * 50} />
        ))}
      </g>
      {children}
    </svg>
  );
}

const bubble = (x, y, w, mine, fill) => (
  <rect x={x} y={y} width={w} height="26" rx="13" fill={mine ? fill : 'var(--art-card)'} opacity={mine ? 0.95 : 1} />
);

const variants = {
  chat: (id) => (
    <Frame id={id}>
      <rect x="110" y="26" width="180" height="198" rx="22" fill="var(--art-card)" stroke="var(--art-line)" />
      <rect x="110" y="26" width="180" height="38" rx="22" fill={`url(#ac-${id})`} opacity="0.9" />
      <circle cx="132" cy="45" r="8" fill="#fff" opacity="0.85" />
      <rect x="148" y="40" width="60" height="6" rx="3" fill="#fff" opacity="0.85" />
      <rect x="148" y="50" width="38" height="4" rx="2" fill="#fff" opacity="0.5" />
      {bubble(124, 80, 110, false)}
      {bubble(160, 114, 114, true, `url(#ac-${id})`)}
      {bubble(124, 148, 90, false)}
      {bubble(184, 182, 90, true, `url(#ac-${id})`)}
      <g className="art-float">
        <circle cx="58" cy="70" r="22" fill="var(--art-card)" stroke="var(--art-line)" />
        <path d="M50 70h16M58 62v16" stroke="var(--blue)" strokeWidth="3" strokeLinecap="round" />
      </g>
      <g className="art-float art-float--b">
        <rect x="318" y="150" width="52" height="52" rx="14" fill="var(--art-card)" stroke="var(--art-line)" />
        <path d="m331 177 8 8 18-18" stroke="var(--violet)" strokeWidth="4" fill="none" strokeLinecap="round" strokeLinejoin="round" />
      </g>
    </Frame>
  ),
  scan: (id) => (
    <Frame id={id}>
      <rect x="70" y="28" width="150" height="194" rx="12" fill="var(--art-card)" stroke="var(--art-line)" />
      {[52, 70, 88, 106, 124, 142, 160].map((y, i) => (
        <rect key={y} x="88" y={y} width={i % 3 === 2 ? 70 : 114} height="6" rx="3" fill="var(--art-line)" />
      ))}
      <rect className="art-scan" x="64" y="40" width="162" height="4" rx="2" fill={`url(#ac-${id})`} />
      <path d="M236 125h38" stroke={`url(#ac-${id})`} strokeWidth="3" strokeDasharray="4 6" strokeLinecap="round" />
      <rect x="282" y="62" width="88" height="126" rx="12" fill="var(--art-card)" stroke="var(--art-line)" />
      <rect x="294" y="76" width="64" height="8" rx="4" fill={`url(#ac-${id})`} />
      {[98, 114, 130, 146].map((y) => (
        <rect key={y} x="294" y={y} width="64" height="5" rx="2.500" fill="var(--art-line)" />
      ))}
      <circle cx="326" cy="170" r="8" fill={`url(#ac-${id})`} />
      <g className="art-float">
        <rect x="26" y="168" width="52" height="30" rx="15" fill={`url(#ac-${id})`} />
        <text x="52" y="188" textAnchor="middle" fontFamily="Inter, sans-serif" fontSize="13" fontWeight="600" fill="#fff">AI</text>
      </g>
    </Frame>
  ),
  route: (id) => (
    <Frame id={id}>
      <path
        d="M40 190 C 100 190, 90 100, 160 110 S 250 190, 300 120 S 340 60, 365 52"
        fill="none"
        stroke={`url(#ac-${id})`}
        strokeWidth="4"
        strokeDasharray="2 10"
        strokeLinecap="round"
        className="art-dash"
      />
      {[
        [40, 190],
        [160, 110],
        [300, 120],
        [365, 52],
      ].map(([x, y], i) => (
        <g key={i}>
          <circle cx={x} cy={y} r="16" fill="var(--art-card)" stroke="var(--art-line)" />
          <circle cx={x} cy={y} r="6" fill={`url(#ac-${id})`} />
        </g>
      ))}
      <rect x="196" y="150" width="120" height="62" rx="12" fill="var(--art-card)" stroke="var(--art-line)" />
      <rect x="208" y="162" width="64" height="7" rx="3.500" fill={`url(#ac-${id})`} />
      <rect x="208" y="178" width="96" height="5" rx="2.500" fill="var(--art-line)" />
      <rect x="208" y="190" width="72" height="5" rx="2.500" fill="var(--art-line)" />
    </Frame>
  ),
  browser: (id) => (
    <Frame id={id}>
      <rect x="44" y="30" width="312" height="190" rx="14" fill="var(--art-card)" stroke="var(--art-line)" />
      <path d="M44 56h312" stroke="var(--art-line)" />
      {[62, 78, 94].map((x, i) => (
        <circle key={x} cx={x} cy="43" r="4" fill={i === 0 ? 'var(--violet)' : 'var(--art-line)'} />
      ))}
      <rect x="64" y="76" width="130" height="14" rx="7" fill={`url(#ac-${id})`} />
      <rect x="64" y="100" width="190" height="7" rx="3.500" fill="var(--art-line)" />
      <rect x="64" y="114" width="150" height="7" rx="3.500" fill="var(--art-line)" />
      <rect x="64" y="136" width="64" height="20" rx="10" fill={`url(#ac-${id})`} opacity="0.9" />
      {[0, 1, 2].map((i) => (
        <rect key={i} x={64 + i * 92} y="170" width="80" height="38" rx="8" fill="var(--art-bg-soft)" stroke="var(--art-line)" />
      ))}
      <circle cx="298" cy="104" r="34" fill="none" stroke={`url(#ac-${id})`} strokeWidth="3" strokeDasharray="6 8" className="art-spin" />
      <circle cx="298" cy="104" r="20" fill={`url(#ac-${id})`} opacity="0.85" />
    </Frame>
  ),
  chart: (id) => (
    <Frame id={id}>
      <rect x="36" y="32" width="328" height="186" rx="14" fill="var(--art-card)" stroke="var(--art-line)" />
      {[
        [62, 120, 60],
        [96, 100, 80],
        [130, 130, 50],
        [164, 84, 96],
        [198, 110, 70],
        [232, 70, 110],
      ].map(([x, y, h], i) => (
        <rect key={x} className="art-bar" style={{ '--i': i }} x={x} y={y + 40} width="20" height={h} rx="6" fill={`url(#ac-${id})`} opacity={0.5 + i * 0.1} />
      ))}
      <path d="M62 150 L96 130 L130 156 L164 108 L198 128 L232 90" fill="none" stroke="var(--violet)" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
      <circle cx="310" cy="96" r="30" fill="none" stroke="var(--art-line)" strokeWidth="9" />
      <circle cx="310" cy="96" r="30" fill="none" stroke={`url(#ac-${id})`} strokeWidth="9" strokeDasharray="120 200" strokeLinecap="round" transform="rotate(-90 310 96)" />
      <rect x="282" y="152" width="56" height="7" rx="3.500" fill="var(--art-line)" />
      <rect x="282" y="168" width="40" height="7" rx="3.500" fill="var(--art-line)" />
    </Frame>
  ),
  temple: (id) => (
    <Frame id={id}>
      <circle cx="320" cy="62" r="26" fill={`url(#ac-${id})`} opacity="0.7" />
      <path d="M200 210V176m-52 34v-50h104v50M164 160v-30h72v30M178 130v-26h44v26M190 104V82h20v22M200 82V58" fill="var(--art-card)" stroke="var(--art-line)" strokeWidth="2" strokeLinejoin="round" />
      <path d="M190 104h20L200 58z" fill={`url(#ac-${id})`} />
      <path d="M178 130h44l-22-26z" fill={`url(#ac-${id})`} opacity="0.75" />
      <path d="M164 160h72l-36-30z" fill={`url(#ac-${id})`} opacity="0.55" />
      <rect x="188" y="188" width="24" height="22" rx="12" fill="var(--art-bg-soft)" />
      <path d="M20 210h360" stroke="var(--art-line)" strokeWidth="2" />
      <g className="art-float">
        <path d="m60 70 4 9 10 1-7.500 7 2 10-8.500-5-8.500 5 2-10-7.500-7 10-1z" fill="var(--violet)" opacity="0.8" />
      </g>
    </Frame>
  ),
};

export default function ProjectArt({ kind, uid }) {
  const render = variants[kind] ?? variants.browser;
  return render(uid);
}
