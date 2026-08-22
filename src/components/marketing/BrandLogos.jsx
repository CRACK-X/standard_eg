import React from 'react'

export function AmazonLogo() {
  return (
    <svg viewBox="0 0 110 32" className="brand-svg" fill="currentColor" aria-label="Amazon">
      {/* amazon wordmark */}
      <text x="0" y="20" fontFamily="'DM Sans', -apple-system, BlinkMacSystemFont, sans-serif" fontWeight="800" fontSize="21" letterSpacing="-0.04em" fill="#131921">
        amazon
      </text>
      {/* Amazon Smile Curve */}
      <path
        d="M 5 25.5 C 28 31.5 56 31 72 23.5 C 74 22.5 73.5 24 71 25.5 C 54 34.5 24 34.5 5 25.5 Z"
        fill="#FF9900"
      />
      {/* Arrowhead */}
      <path
        d="M 68 20 C 73 22 75.5 23.5 76 24 C 74.5 25.5 71 28 71 28 C 72 26.5 75 24.5 75 24.5 C 73.5 23.5 69 21.5 68 20 Z"
        fill="#FF9900"
      />
    </svg>
  )
}

export function VodafoneLogo() {
  return (
    <svg viewBox="0 0 126 32" className="brand-svg" aria-label="Vodafone">
      {/* Vodafone Speechmark emblem */}
      <circle cx="16" cy="16" r="14" fill="#E60000" />
      <path
        d="M 16 7 C 11.5 7 8 10.5 8 15 C 8 19.5 11.5 23 16 23 C 18.5 23 20.8 21.8 22.2 20 C 21 20 18 19.5 17 17.5 C 16.2 15.8 17 14.2 18.5 13.5 C 19.2 13.2 20 13.2 20.7 13.5 C 19.8 9.7 16.4 7 16 7 Z"
        fill="#FFFFFF"
      />
      {/* Vodafone Wordmark */}
      <text x="36" y="21" fontFamily="'DM Sans', -apple-system, BlinkMacSystemFont, sans-serif" fontWeight="700" fontSize="17" letterSpacing="-0.03em" fill="#E60000">
        vodafone
      </text>
    </svg>
  )
}

export function TeleperformanceLogo() {
  return (
    <svg viewBox="0 0 160 32" className="brand-svg" aria-label="Teleperformance">
      {/* TP Rosette / Flower emblem */}
      <g transform="translate(14, 16) scale(0.9)">
        <circle cx="0" cy="-7" r="5" fill="#E6007E" opacity="0.9" />
        <circle cx="7" cy="0" r="5" fill="#6C207E" opacity="0.9" />
        <circle cx="0" cy="7" r="5" fill="#009EE2" opacity="0.9" />
        <circle cx="-7" cy="0" r="5" fill="#80B918" opacity="0.9" />
        <circle cx="0" cy="0" r="3.5" fill="#2B2B2E" />
      </g>
      <text x="32" y="21" fontFamily="'DM Sans', -apple-system, BlinkMacSystemFont, sans-serif" fontWeight="700" fontSize="14" letterSpacing="-0.02em" fill="#2B2B2E">
        Teleperformance
      </text>
    </svg>
  )
}

export function PGLogo() {
  return (
    <svg viewBox="0 0 95 32" className="brand-svg" aria-label="P&G">
      <rect x="2" y="2" width="28" height="28" rx="14" fill="#003CAE" />
      <circle cx="16" cy="16" r="12" fill="none" stroke="#FFFFFF" strokeWidth="1" opacity="0.4" />
      {/* P&G monogram */}
      <text x="7.5" y="21" fontFamily="Georgia, 'Playfair Display', serif" fontStyle="italic" fontWeight="800" fontSize="13" fill="#FFFFFF" letterSpacing="0.05em">
        P&G
      </text>
      <text x="36" y="21" fontFamily="'DM Sans', sans-serif" fontWeight="800" fontSize="16" letterSpacing="0.05em" fill="#003CAE">
        P&G
      </text>
    </svg>
  )
}

export function ElarabyLogo() {
  return (
    <svg viewBox="0 0 130 32" className="brand-svg" aria-label="Elaraby">
      {/* Elaraby Red Triangle / Eagle Wing icon */}
      <g transform="translate(2, 4)">
        <polygon points="12,0 24,12 18,24 12,18 6,24 0,12" fill="#E30613" />
        <polygon points="12,4 18,12 12,15 6,12" fill="#FFFFFF" />
      </g>
      <text x="32" y="21" fontFamily="'DM Sans', sans-serif" fontWeight="900" fontSize="15" letterSpacing="0.06em" fill="#E30613">
        ELARABY
      </text>
    </svg>
  )
}

export function ElsewedyLogo() {
  return (
    <svg viewBox="0 0 148 32" className="brand-svg" aria-label="Elsewedy Electric">
      {/* Dynamic Red & Blue energy swoosh */}
      <g transform="translate(2, 4)">
        <path d="M 0 12 C 4 3 14 0 20 0 L 14 6 C 10 6 5 8 3 12 Z" fill="#E30613" />
        <path d="M 4 14 C 10 14 18 11 22 5 L 17 11 C 13 13 8 15 4 14 Z" fill="#E30613" />
        <path d="M 2 16 C 6 22 15 24 22 23 L 16 19 C 11 20 6 18 2 16 Z" fill="#0A2540" />
      </g>
      <g transform="translate(28, 0)">
        <text x="0" y="15" fontFamily="'DM Sans', sans-serif" fontWeight="900" fontSize="12" letterSpacing="0.04em" fill="#0A2540">
          ELSEWEDY
        </text>
        <text x="0" y="25" fontFamily="'DM Sans', sans-serif" fontWeight="700" fontSize="9" letterSpacing="0.14em" fill="#E30613">
          ELECTRIC
        </text>
      </g>
    </svg>
  )
}

export function GbGhabbourLogo() {
  return (
    <svg viewBox="0 0 135 32" className="brand-svg" aria-label="GB Ghabbour">
      {/* GB stylized monogram badge */}
      <g transform="translate(2, 3)">
        <rect x="0" y="0" width="26" height="26" rx="7" fill="#0F2B48" />
        <path d="M 6 7 L 15 7 C 18 7 20 9 20 12 C 20 14 18 16 15 16 L 9 16 L 9 20 L 6 20 Z" fill="#FFFFFF" />
        <path d="M 12 11 L 15 11 C 16 11 17 11.5 17 12 C 17 12.5 16 13 15 13 L 12 13 Z" fill="#0F2B48" />
        <circle cx="21" cy="7" r="3" fill="#E30613" />
      </g>
      <g transform="translate(34, 0)">
        <text x="0" y="15" fontFamily="'DM Sans', sans-serif" fontWeight="900" fontSize="13" letterSpacing="0.04em" fill="#0F2B48">
          GB CORP
        </text>
        <text x="0" y="25" fontFamily="'DM Sans', sans-serif" fontWeight="600" fontSize="8.5" letterSpacing="0.12em" fill="#E30613">
          GHABBOUR
        </text>
      </g>
    </svg>
  )
}

export function SibesLogo() {
  return (
    <svg viewBox="0 0 115 32" className="brand-svg" aria-label="SIBES">
      {/* Hexagonal SIBES shield */}
      <g transform="translate(2, 4)">
        <polygon points="12,0 24,6 24,18 12,24 0,18 0,6" fill="#0B1F3A" />
        <path d="M 7 8 L 17 8 L 17 11 L 10 11 L 10 13 L 17 13 L 17 18 L 7 18 L 7 15 L 14 15 L 14 14 L 7 14 Z" fill="#C9A227" />
      </g>
      <text x="32" y="21" fontFamily="'DM Sans', sans-serif" fontWeight="900" fontSize="16" letterSpacing="0.08em" fill="#0B1F3A">
        SIBES
      </text>
    </svg>
  )
}

export function JotunLogo() {
  return (
    <svg viewBox="0 0 116 32" className="brand-svg" aria-label="Jotun">
      {/* Jotun Penguin Crest */}
      <g transform="translate(2, 2)">
        <rect x="0" y="0" width="28" height="28" rx="6" fill="#EE2329" />
        <circle cx="14" cy="14" r="10" fill="#0054A6" />
        <path d="M 14 4 C 19 4 23 8 23 14 L 5 14 C 5 8 9 4 14 4 Z" fill="#FFDD00" />
        {/* Penguin silhouette */}
        <path d="M 14 7 C 12 7 11 9 11 12 C 11 16 13 20 14 22 C 15 20 17 16 17 12 C 17 9 16 7 14 7 Z" fill="#FFFFFF" />
        <circle cx="14" cy="9" r="1.5" fill="#131921" />
      </g>
      <text x="35" y="21" fontFamily="'DM Sans', sans-serif" fontWeight="900" fontSize="16" letterSpacing="0.06em" fill="#EE2329">
        JOTUN
      </text>
    </svg>
  )
}

export function CocaColaLogo() {
  return (
    <svg viewBox="0 0 135 32" className="brand-svg" aria-label="Coca-Cola">
      <rect x="2" y="3" width="130" height="26" rx="6" fill="#F40009" />
      {/* Classic script style text */}
      <text
        x="67"
        y="21"
        textAnchor="middle"
        fontFamily="'Playfair Display', Georgia, cursive, serif"
        fontStyle="italic"
        fontWeight="900"
        fontSize="17"
        letterSpacing="-0.02em"
        fill="#FFFFFF"
      >
        Coca-Cola
      </text>
      {/* dynamic ribbon underline wave */}
      <path d="M 24 23 C 45 27 90 27 112 22 C 95 24 50 25 24 23 Z" fill="#FFFFFF" opacity="0.85" />
    </svg>
  )
}

export function SiliconValleySchoolLogo() {
  return (
    <svg viewBox="0 0 162 32" className="brand-svg" aria-label="Silicon Valley School">
      {/* High-tech SVS crest */}
      <g transform="translate(2, 3)">
        <rect x="0" y="0" width="26" height="26" rx="6" fill="#0052CC" />
        {/* Circuit / Cap */}
        <polygon points="13,5 21,9 13,13 5,9" fill="#00C7E6" />
        <path d="M 8 11.5 L 8 16 C 8 18.5 10.5 21 13 21 C 15.5 21 18 18.5 18 16 L 18 11.5" fill="none" stroke="#FFFFFF" strokeWidth="1.8" />
        <line x1="21" y1="9" x2="21" y2="18" stroke="#00C7E6" strokeWidth="1.5" />
        <circle cx="21" cy="18" r="1.5" fill="#00C7E6" />
      </g>
      <g transform="translate(33, 0)">
        <text x="0" y="14" fontFamily="'DM Sans', sans-serif" fontWeight="800" fontSize="11.5" letterSpacing="-0.01em" fill="#0B1F3A">
          SILICON VALLEY
        </text>
        <text x="0" y="24" fontFamily="'DM Sans', sans-serif" fontWeight="600" fontSize="8.5" letterSpacing="0.16em" fill="#0052CC">
          SCHOOL · SVS
        </text>
      </g>
    </svg>
  )
}

export function GenesisSchoolLogo() {
  return (
    <svg viewBox="0 0 145 32" className="brand-svg" aria-label="Genesis School">
      {/* Heraldic laurel shield */}
      <g transform="translate(2, 2)">
        <path d="M 13 2 L 24 6 C 24 16 18 23 13 26 C 8 23 2 16 2 6 Z" fill="#1A365D" stroke="#D4AF37" strokeWidth="1.2" />
        <path d="M 8 12 C 10 10 13 10 13 14 C 13 10 16 10 18 12 L 18 18 C 15 16 13 16 13 19 C 13 16 11 16 8 18 Z" fill="#D4AF37" />
        <circle cx="13" cy="8" r="1.5" fill="#FFFFFF" />
      </g>
      <g transform="translate(32, 0)">
        <text x="0" y="14" fontFamily="'DM Sans', sans-serif" fontWeight="800" fontSize="12" letterSpacing="0.04em" fill="#1A365D">
          GENESIS
        </text>
        <text x="0" y="24" fontFamily="'DM Sans', sans-serif" fontWeight="600" fontSize="8" letterSpacing="0.16em" fill="#D4AF37">
          INTL. SCHOOL
        </text>
      </g>
    </svg>
  )
}

export function ElManhalSchoolLogo() {
  return (
    <svg viewBox="0 0 148 32" className="brand-svg" aria-label="El Manhal School">
      {/* Green & Gold knowledge crest */}
      <g transform="translate(2, 3)">
        <circle cx="13" cy="13" r="13" fill="#1B5E20" />
        <circle cx="13" cy="13" r="10.5" fill="none" stroke="#D4AF37" strokeWidth="1" />
        <path d="M 8 15 C 10 13 13 13 13 16 C 13 13 16 13 18 15 L 18 19 C 15 17 13 17 13 20 C 13 17 11 17 8 19 Z" fill="#FFFFFF" />
        <polygon points="13,6 15,10 11,10" fill="#D4AF37" />
      </g>
      <g transform="translate(33, 0)">
        <text x="0" y="14" fontFamily="'DM Sans', sans-serif" fontWeight="800" fontSize="11.5" letterSpacing="0.02em" fill="#1B5E20">
          EL MANHAL
        </text>
        <text x="0" y="24" fontFamily="'DM Sans', sans-serif" fontWeight="600" fontSize="8" letterSpacing="0.14em" fill="#D4AF37">
          LANGUAGE SCHOOL
        </text>
      </g>
    </svg>
  )
}

export function RajacSchoolLogo() {
  return (
    <svg viewBox="0 0 140 32" className="brand-svg" aria-label="Rajac School">
      {/* Royal Burgundy & Gold shield */}
      <g transform="translate(2, 2)">
        <path d="M 13 1 L 24 5 L 24 16 C 24 22 17 26 13 28 C 9 26 2 22 2 16 L 2 5 Z" fill="#7A1C28" stroke="#E5A93C" strokeWidth="1.2" />
        <polygon points="13,7 15.5,12 21,12.5 17,16 18,21.5 13,18.5 8,21.5 9,16 5,12.5 10.5,12" fill="#E5A93C" />
      </g>
      <g transform="translate(32, 0)">
        <text x="0" y="14" fontFamily="'DM Sans', sans-serif" fontWeight="900" fontSize="13" letterSpacing="0.06em" fill="#7A1C28">
          RAJAC
        </text>
        <text x="0" y="24" fontFamily="'DM Sans', sans-serif" fontWeight="600" fontSize="8" letterSpacing="0.15em" fill="#B45309">
          LANGUAGE SCHOOLS
        </text>
      </g>
    </svg>
  )
}

export function ElKenanaSchoolLogo() {
  return (
    <svg viewBox="0 0 148 32" className="brand-svg" aria-label="El Kenana School">
      {/* Gold & Navy pyramid emblem */}
      <g transform="translate(2, 3)">
        <rect x="0" y="0" width="26" height="26" rx="6" fill="#1E3A8A" />
        <polygon points="13,5 22,21 4,21" fill="#F59E0B" opacity="0.9" />
        <polygon points="13,5 22,21 13,21" fill="#D97706" />
        <circle cx="13" cy="11" r="2.5" fill="#FFFFFF" />
      </g>
      <g transform="translate(33, 0)">
        <text x="0" y="14" fontFamily="'DM Sans', sans-serif" fontWeight="800" fontSize="12" letterSpacing="0.02em" fill="#1E3A8A">
          EL KENANA
        </text>
        <text x="0" y="24" fontFamily="'DM Sans', sans-serif" fontWeight="600" fontSize="8" letterSpacing="0.14em" fill="#D97706">
          AMERICAN SCHOOL
        </text>
      </g>
    </svg>
  )
}

export function RanSchoolLogo() {
  return (
    <svg viewBox="0 0 138 32" className="brand-svg" aria-label="RAN School">
      {/* Rowad Al-Nile emblem */}
      <g transform="translate(2, 3)">
        <rect x="0" y="0" width="26" height="26" rx="6" fill="#0B1F3A" />
        <path d="M 5 18 C 9 14 17 14 21 18" stroke="#EAB308" strokeWidth="2" fill="none" />
        <circle cx="8" cy="10" r="1.5" fill="#FFFFFF" />
        <circle cx="13" cy="7" r="2" fill="#EAB308" />
        <circle cx="18" cy="10" r="1.5" fill="#FFFFFF" />
      </g>
      <g transform="translate(33, 0)">
        <text x="0" y="14" fontFamily="'DM Sans', sans-serif" fontWeight="900" fontSize="13.5" letterSpacing="0.08em" fill="#0B1F3A">
          RAN
        </text>
        <text x="0" y="24" fontFamily="'DM Sans', sans-serif" fontWeight="700" fontSize="8" letterSpacing="0.18em" fill="#C9A227">
          SCHOOL · EGYPT
        </text>
      </g>
    </svg>
  )
}

export function FutureSchoolLogo() {
  return (
    <svg viewBox="0 0 148 32" className="brand-svg" aria-label="Future School">
      {/* Sunrise & Book emblem */}
      <g transform="translate(2, 3)">
        <rect x="0" y="0" width="26" height="26" rx="6" fill="#047857" />
        <circle cx="13" cy="12" r="5" fill="#FBBF24" />
        <path d="M 5 17 C 9 15 13 15 13 18 C 13 15 17 15 21 17 L 21 21 C 17 19 13 19 13 22 C 13 19 9 19 5 21 Z" fill="#FFFFFF" />
      </g>
      <g transform="translate(33, 0)">
        <text x="0" y="14" fontFamily="'DM Sans', sans-serif" fontWeight="800" fontSize="12" letterSpacing="0.02em" fill="#047857">
          FUTURE
        </text>
        <text x="0" y="24" fontFamily="'DM Sans', sans-serif" fontWeight="600" fontSize="8" letterSpacing="0.15em" fill="#B45309">
          LANGUAGE SCHOOL
        </text>
      </g>
    </svg>
  )
}

export function ElRomanySchoolLogo() {
  return (
    <svg viewBox="0 0 152 32" className="brand-svg" aria-label="El Romany School">
      {/* Royal Crown Crest */}
      <g transform="translate(2, 3)">
        <rect x="0" y="0" width="26" height="26" rx="6" fill="#701A75" />
        <polygon points="6,18 8,11 11,15 13,9 15,15 18,11 20,18" fill="#F59E0B" />
        <line x1="6" y1="20" x2="20" y2="20" stroke="#F59E0B" strokeWidth="1.5" />
      </g>
      <g transform="translate(33, 0)">
        <text x="0" y="14" fontFamily="'DM Sans', sans-serif" fontWeight="800" fontSize="11.5" letterSpacing="0.02em" fill="#701A75">
          EL ROMANY
        </text>
        <text x="0" y="24" fontFamily="'DM Sans', sans-serif" fontWeight="600" fontSize="8" letterSpacing="0.14em" fill="#D97706">
          PRIVATE SCHOOLS
        </text>
      </g>
    </svg>
  )
}

export function MsaUniversityLogo() {
  return (
    <svg viewBox="0 0 150 32" className="brand-svg" aria-label="MSA University">
      {/* MSA official British Egyptian seal */}
      <g transform="translate(2, 2)">
        <circle cx="14" cy="14" r="13" fill="#0D5C3A" />
        <circle cx="14" cy="14" r="10.5" fill="none" stroke="#C59B27" strokeWidth="1" />
        {/* Pyramid and rays */}
        <polygon points="14,6 21,19 7,19" fill="#C59B27" />
        <polygon points="14,6 21,19 14,19" fill="#997316" />
        <text x="14" y="25" textAnchor="middle" fontFamily="'DM Sans', sans-serif" fontWeight="900" fontSize="6.5" fill="#FFFFFF">
          MSA
        </text>
      </g>
      <g transform="translate(34, 0)">
        <text x="0" y="14" fontFamily="'DM Sans', sans-serif" fontWeight="900" fontSize="13" letterSpacing="0.04em" fill="#0D5C3A">
          MSA UNIVERSITY
        </text>
        <text x="0" y="24" fontFamily="'DM Sans', sans-serif" fontWeight="600" fontSize="7.5" letterSpacing="0.12em" fill="#997316">
          OCTOBER · EST. 1996
        </text>
      </g>
    </svg>
  )
}

export function BenhaUniversityLogo() {
  return (
    <svg viewBox="0 0 155 32" className="brand-svg" aria-label="Benha University">
      {/* Benha University Official Lotus Seal */}
      <g transform="translate(2, 2)">
        <circle cx="14" cy="14" r="13" fill="#1E40AF" />
        <circle cx="14" cy="14" r="10.5" fill="none" stroke="#EAB308" strokeWidth="1" />
        {/* Lotus blossom & book */}
        <path d="M 14 7 C 16 10 18 13 18 16 C 16 15 14 16 14 18 C 14 16 12 15 10 16 C 10 13 12 10 14 7 Z" fill="#EAB308" />
        <path d="M 9 19 C 11 18 14 18 14 20 C 14 18 17 18 19 19" stroke="#FFFFFF" strokeWidth="1.2" fill="none" />
      </g>
      <g transform="translate(34, 0)">
        <text x="0" y="14" fontFamily="'DM Sans', sans-serif" fontWeight="800" fontSize="11.5" letterSpacing="0.02em" fill="#1E40AF">
          BENHA UNIVERSITY
        </text>
        <text x="0" y="24" fontFamily="'DM Sans', sans-serif" fontWeight="600" fontSize="8" letterSpacing="0.12em" fill="#B45309">
          جامعة بنها
        </text>
      </g>
    </svg>
  )
}

export function FueUniversityLogo() {
  return (
    <svg viewBox="0 0 152 32" className="brand-svg" aria-label="Future University">
      {/* FUE dynamic ribbon swirl */}
      <g transform="translate(2, 3)">
        <circle cx="13" cy="13" r="13" fill="#0369A1" />
        <path d="M 6 15 C 10 7 20 8 20 13 C 20 18 10 19 6 15 Z" fill="none" stroke="#F97316" strokeWidth="2.4" />
        <text x="13" y="16.5" textAnchor="middle" fontFamily="'DM Sans', sans-serif" fontWeight="900" fontSize="8.5" fill="#FFFFFF">
          FUE
        </text>
      </g>
      <g transform="translate(33, 0)">
        <text x="0" y="14" fontFamily="'DM Sans', sans-serif" fontWeight="900" fontSize="13" letterSpacing="0.04em" fill="#0369A1">
          FUE UNIVERSITY
        </text>
        <text x="0" y="24" fontFamily="'DM Sans', sans-serif" fontWeight="600" fontSize="7.5" letterSpacing="0.12em" fill="#EA580C">
          FUTURE UNIVERSITY IN EGYPT
        </text>
      </g>
    </svg>
  )
}

export function NahdaUniversityLogo() {
  return (
    <svg viewBox="0 0 155 32" className="brand-svg" aria-label="El Nahda University">
      {/* NUB Burgundy & Gold Seal */}
      <g transform="translate(2, 2)">
        <circle cx="14" cy="14" r="13" fill="#881337" />
        <circle cx="14" cy="14" r="10.5" fill="none" stroke="#F59E0B" strokeWidth="1" />
        {/* Torch and pyramid */}
        <polygon points="14,6 18,17 10,17" fill="#F59E0B" />
        <circle cx="14" cy="7" r="1.5" fill="#FFFFFF" />
        <path d="M 8 20 C 11 19 14 19 14 21 C 14 19 17 19 20 20" stroke="#FFFFFF" strokeWidth="1.2" fill="none" />
      </g>
      <g transform="translate(34, 0)">
        <text x="0" y="14" fontFamily="'DM Sans', sans-serif" fontWeight="800" fontSize="11" letterSpacing="0.02em" fill="#881337">
          EL NAHDA (NUB)
        </text>
        <text x="0" y="24" fontFamily="'DM Sans', sans-serif" fontWeight="600" fontSize="8" letterSpacing="0.12em" fill="#D97706">
          جامعة النهضة
        </text>
      </g>
    </svg>
  )
}
