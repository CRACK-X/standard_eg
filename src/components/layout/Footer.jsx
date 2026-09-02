import { MapPin } from 'lucide-react'
import { Link } from 'react-router-dom'
import Logo from '../common/Logo'
import { useLocale } from '../../utils/i18n'
import { contact } from '../../utils/siteData'
import { useCart } from '../../context/CartContext'

export default function Footer() {
  const { c } = useLocale()
  const { setIsCartOpen } = useCart()

  const handleStartOrder = () => {
    setIsCartOpen(true)
  }

  return <footer className="site-footer">
    <div className="shell footer__grid">
      <div className="footer__brand"><Logo light /><p>{c.footer.tagline}</p><a className="social-link" href="https://instagram.com/standard_egypt" target="_blank" rel="noreferrer"><svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg> @standard_egypt</a></div>
      <div><p className="footer__label">{c.footer.explore}</p><Link to="/menu">{c.nav.menu}</Link><Link to="/about">{c.nav.story}</Link><Link to="/contact">{c.nav.contact}</Link><button onClick={handleStartOrder} className="footer-link-button">{c.nav.order}</button></div>
      <div><p className="footer__label">{c.footer.talk}</p><a href={contact.phoneHref}>{contact.phoneDisplay}</a><a href={contact.whatsapp} target="_blank" rel="noreferrer">{c.footer.whatsapp}</a><a href={'mailto:' + contact.email}>{contact.email}</a><p className="footer__area"><MapPin size={15} /> {c.footer.area}<br />{c.footer.mobile}</p></div>
    </div>
    <div className="shell footer__bottom"><span>© {new Date().getFullYear()} Standard Catering. {c.footer.rights}</span><div className="footer__legal"><Link to="/privacy">{c.footer.privacy}</Link><Link to="/terms">{c.footer.terms}</Link><a href="https://webhub.web-hub-info-2026.workers.dev/" target="_blank" rel="noreferrer" style={{color: 'inherit', textDecoration: 'none'}}>{c.footer.made}</a></div></div>
  </footer>
}
