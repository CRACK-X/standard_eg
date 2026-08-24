import { useEffect, useRef, useState } from 'react'

import amazonLogo from '../../assets/logos/amazon.svg'
import vodafoneLogo from '../../assets/logos/vodafone.svg'
import teleperformanceLogo from '../../assets/logos/teleperformance.svg'
import pgLogo from '../../assets/logos/pg.svg'
import elarabyLogo from '../../assets/logos/elaraby.png'
import elsewedyLogo from '../../assets/logos/elsewedy.svg'
import gbCorpLogo from '../../assets/logos/gb-corp.svg'
import sipesLogo from '../../assets/logos/sipes.png'
import jotunLogo from '../../assets/logos/jotun.svg'
import cocacolaLogo from '../../assets/logos/cocacola.svg'
import siliconValleySchoolLogo from '../../assets/logos/silicon-valley-school.png'
import genesisSchoolLogo from '../../assets/logos/genesis-school.svg'
import almanhalSchoolLogo from '../../assets/logos/almanhal-school.png'
import rajacSchoolLogo from '../../assets/logos/rajac-school.png'
import kenanaSchoolLogo from '../../assets/logos/kenana-school.png'
import rahnSchoolLogo from '../../assets/logos/rahn-school.webp'
import futureSchoolLogo from '../../assets/logos/future-school.png'
import msaUniversityLogo from '../../assets/logos/msa-university.png'
import benhaUniversityLogo from '../../assets/logos/benha-university.png'
import fueUniversityLogo from '../../assets/logos/fue-university.png'
import nahdaUniversityLogo from '../../assets/logos/nahda-university.png'

const trustedBrands = [
  { name: 'Amazon', variant: 'amazon', imageUrl: amazonLogo },
  { name: 'Vodafone', variant: 'vodafone', imageUrl: vodafoneLogo },
  { name: 'Teleperformance', variant: 'teleperformance', imageUrl: teleperformanceLogo },
  { name: 'P&G', variant: 'procter-gamble', imageUrl: pgLogo },
  { name: 'Elaraby', variant: 'elaraby', imageUrl: elarabyLogo },
  { name: 'Elsewedy Electric', variant: 'elsewedy', imageUrl: elsewedyLogo },
  { name: 'GB Ghabbour', variant: 'ghabbour', imageUrl: gbCorpLogo },
  { name: 'SIBES', variant: 'sibes', imageUrl: sipesLogo },
  { name: 'Jotun', variant: 'jotun', imageUrl: jotunLogo },
  { name: 'Coca-Cola', variant: 'cocacola', imageUrl: cocacolaLogo },
  { name: 'Silicon Valley School', variant: 'silicon-valley', imageUrl: siliconValleySchoolLogo },
  { name: 'Genesis School', variant: 'genesis', imageUrl: genesisSchoolLogo },
  { name: 'El Manhal School', variant: 'elmanhal', imageUrl: almanhalSchoolLogo },
  { name: 'Rajac School', variant: 'rajac', imageUrl: rajacSchoolLogo },
  { name: 'El Kenana School', variant: 'elkenana', imageUrl: kenanaSchoolLogo },
  { name: 'RAN School', variant: 'ran', imageUrl: rahnSchoolLogo },
  { name: 'Future School', variant: 'future-school', imageUrl: futureSchoolLogo },
  { name: 'MSA University', variant: 'msa', imageUrl: msaUniversityLogo },
  { name: 'Benha University', variant: 'benha', imageUrl: benhaUniversityLogo },
  { name: 'Future University', variant: 'future-university', imageUrl: fueUniversityLogo },
  { name: 'El Nahda University', variant: 'elnahda', imageUrl: nahdaUniversityLogo },
]

function BrandItem({ brand, hidden = false }) {
  const [imgFailed, setImgFailed] = useState(false)
  return (
    <div
      className={`trust-brand trust-brand--${brand.variant}`}
      role="img"
      aria-label={hidden ? undefined : brand.name}
      title={brand.name}
    >
      <div className="trust-brand__logo">
        {brand.imageUrl && !imgFailed ? (
          <img
            src={brand.imageUrl}
            alt={brand.name}
            loading="lazy"
            className="brand-img"
            onError={() => setImgFailed(true)}
            width="200"
            height="100"
          />
        ) : (
          <span className="brand-fallback">{brand.name}</span>
        )}
      </div>
    </div>
  )
}

function BrandSet({ hidden = false }) {
  return (
    <div className="trust-marquee__set" aria-hidden={hidden || undefined}>
      {trustedBrands.map((brand, index) => (
        <BrandItem key={`${brand.name}-${index}`} brand={brand} hidden={hidden} />
      ))}
    </div>
  )
}

export default function TrustMarquee({ label }) {
  const ref = useRef(null)
  const [playing, setPlaying] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => setPlaying(entry.isIntersecting),
      { threshold: 0.1 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return (
    <div
      ref={ref}
      className="trust-marquee"
      aria-label={label}
      data-playing={playing}
    >
      <div className="trust-marquee__track" style={{ animationPlayState: playing ? 'running' : 'paused' }}>
        <BrandSet />
        <BrandSet hidden />
      </div>
    </div>
  )
}
