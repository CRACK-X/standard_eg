import { ArrowRight, Phone } from 'lucide-react'
import { Link } from 'react-router-dom'
import Reveal from '../common/Reveal'
import { Eyebrow } from '../common/SectionIntro'
import { useLocale } from '../../utils/i18n'
import { contact } from '../../utils/siteData'
import { useCart } from '../../context/CartContext'

export default function CtaBand() {
  const { c } = useLocale()
  const { setIsCartOpen } = useCart()

  const handleStartOrder = () => {
    setIsCartOpen(true)
  }

  return <section className="cta-band"><div className="shell cta-band__inner"><Reveal><Eyebrow>{c.cta.eyebrow}</Eyebrow><h2>{c.cta.title} <em>{c.cta.accent}</em></h2></Reveal><Reveal delay={100} className="cta-band__actions"><button className="button button--gold" onClick={handleStartOrder}>{c.nav.order} <ArrowRight size={17} /></button><a className="cta-phone" href={contact.phoneHref}><Phone size={17} /> {contact.phoneDisplay}</a></Reveal></div></section>
}
