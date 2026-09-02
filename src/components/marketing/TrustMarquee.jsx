import amazonLogo from '../../assets/logos/amazon.svg'
import vodafoneLogo from '../../assets/logos/vodafone.svg'
import teleperformanceLogo from '../../assets/logos/teleperformance.svg'
import pgLogo from '../../assets/logos/pg.svg'
import elarabyLogo from '../../assets/logos/elaraby.png'
import elsewedyLogo from '../../assets/logos/elsewedy.svg'
import gbCorpLogo from '../../assets/logos/gb-corp.svg'
import sipesLogo from '../../assets/logos/sipes.png'
import jotunLogo from '../../assets/logos/jotun.svg'
import cocaColaLogo from '../../assets/logos/cocacola.svg'
import siliconValleyLogo from '../../assets/logos/silicon-valley-school.png'
import genesisLogo from '../../assets/logos/genesis-school.svg'
import almanhalLogo from '../../assets/logos/almanhal-school.png'
import rajacLogo from '../../assets/logos/rajac-school.png'
import kenanaLogo from '../../assets/logos/kenana-school.png'
import rahnLogo from '../../assets/logos/rahn-school.webp'
import futureSchoolLogo from '../../assets/logos/future-school.png'
import msaLogo from '../../assets/logos/msa-university.png'
import benhaLogo from '../../assets/logos/benha-university.png'
import fueLogo from '../../assets/logos/fue-university.png'
import nahdaLogo from '../../assets/logos/nahda-university.png'

const trustedBrands = [
  { name: 'Amazon', image: amazonLogo, variant: 'amazon' },
  { name: 'Vodafone', image: vodafoneLogo, variant: 'vodafone' },
  { name: 'Teleperformance', image: teleperformanceLogo, variant: 'teleperformance' },
  { name: 'P&G', image: pgLogo, variant: 'procter-gamble' },
  { name: 'Elaraby', image: elarabyLogo, variant: 'elaraby' },
  { name: 'Elsewedy Electric', image: elsewedyLogo, variant: 'elsewedy' },
  { name: 'GB Corp', image: gbCorpLogo, variant: 'gb-corp' },
  { name: 'SIPES', image: sipesLogo, variant: 'sipes' },
  { name: 'Jotun', image: jotunLogo, variant: 'jotun' },
  { name: 'Coca-Cola', image: cocaColaLogo, variant: 'cocacola' },
  { name: 'Silicon Valley International School', image: siliconValleyLogo, variant: 'silicon-valley' },
  { name: 'Genesis International Schools', image: genesisLogo, variant: 'genesis' },
  { name: 'Al Manhal Schools', image: almanhalLogo, variant: 'almanhal' },
  { name: 'Rajac British School', image: rajacLogo, variant: 'rajac' },
  { name: 'International Schools of Kenana', image: kenanaLogo, variant: 'kenana' },
  { name: 'Rahn Schulen Kairo', image: rahnLogo, variant: 'rahn' },
  { name: 'Future Language School', image: futureSchoolLogo, variant: 'future-school' },
  { name: 'MSA University', image: msaLogo, variant: 'msa' },
  { name: 'Benha University', image: benhaLogo, variant: 'benha' },
  { name: 'Future University in Egypt', image: fueLogo, variant: 'future-university' },
  { name: 'Nahda University', image: nahdaLogo, variant: 'nahda' },
]

function BrandItem({ brand, hidden = false }) {
  return (
    <div
      className={`trust-brand trust-brand--${brand.variant}`}
      role="img"
      aria-label={hidden ? undefined : brand.name}
      title={brand.name}
    >
      <div className="trust-brand__logo">
        <img src={brand.image} alt="" loading="lazy" className={`brand-img brand-img--${brand.variant}`} />
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
  return (
    <div className="trust-marquee" aria-label={label}>
      <div className="trust-marquee__track">
        <BrandSet />
        <BrandSet hidden />
      </div>
    </div>
  )
}
