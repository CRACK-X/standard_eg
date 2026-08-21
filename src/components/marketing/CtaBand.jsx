import { ArrowRight, Phone } from 'lucide-react'
import { Link } from 'react-router-dom'
import Reveal from '../common/Reveal'
import { Eyebrow } from '../common/SectionIntro'
import { useLocale } from '../../utils/i18n'
import { contact } from '../../utils/siteData'

export default function CtaBand() {
  const { c } = useLocale()

  return <section className="cta-band"><div className="shell cta-band__inner"><Reveal><Eyebrow>{c.cta.eyebrow}</Eyebrow><h2>{c.cta.title} <em>{c.cta.accent}</em></h2></Reveal><Reveal delay={100} className="cta-band__actions"><Link className="button button--gold" to="/order">{c.nav.order} <ArrowRight size={17} /></Link><a className="cta-phone" href={contact.phoneHref}><Phone size={17} /> {contact.phoneDisplay}</a></Reveal></div></section>
}
