import { useEffect, useState } from 'react'
import { ArrowRight, Menu as MenuIcon, X, ShoppingCart } from 'lucide-react'
import { Link, NavLink } from 'react-router-dom'
import Logo from '../common/Logo'
import { useLocale } from '../../utils/i18n'
import { useCart } from '../../context/CartContext'

export default function Header() {
  const { c, language, setLanguage } = useLocale()
  const { items, setIsCartOpen } = useCart()
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 35)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const links = [[c.nav.home, '/'], [c.nav.menu, '/menu'], [c.nav.story, '/about'], [c.nav.contact, '/contact']]
  const closeMenu = () => setMenuOpen(false)

  return <header className={'site-header ' + (scrolled ? 'site-header--scrolled' : '')}>
    <div className="shell header__inner">
      <Logo light />
      <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)} aria-label={c.nav.menuToggle} aria-expanded={menuOpen}>{menuOpen ? <X /> : <MenuIcon />}</button>
      <div className={`mobile-nav-backdrop ${menuOpen ? 'mobile-nav-backdrop--open' : ''}`} onClick={closeMenu} aria-hidden="true" />
      <nav className={menuOpen ? 'header-nav header-nav--open' : 'header-nav'} aria-label={c.nav.menuToggle}>
        <div className="header-nav__close-mobile">
          <Logo light />
          <button onClick={closeMenu} aria-label="Close menu"><X size={28} /></button>
        </div>
        <div className="header-nav__links">
          {links.map(([label, to]) => <NavLink key={to} to={to} end={to === '/'} onClick={closeMenu}>{label}</NavLink>)}
        </div>
        <div className="header-nav__bottom">
          <button className="language-toggle" onClick={() => setLanguage(language === 'en' ? 'ar' : 'en')} aria-label={c.nav.toggle}>{c.nav.toggle}</button>
          <button 
            className="cart-toggle" 
            onClick={() => { closeMenu(); setIsCartOpen(true); }}
            aria-label="Open cart"
          >
            <ShoppingCart size={20} />
            <span className="cart-toggle__label-mobile">{c.cart.cartLabel}</span>
            {items.length > 0 && (
              <span className="cart-badge">{items.reduce((sum, item) => sum + item.quantity, 0)}</span>
            )}
          </button>
          <Link className="button button--gold header__cta" to="/order" onClick={closeMenu}>{c.nav.order} <ArrowRight size={16} /></Link>
        </div>
      </nav>
    </div>
  </header>
}
