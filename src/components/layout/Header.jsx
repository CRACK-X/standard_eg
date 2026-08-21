import { useEffect, useState } from 'react'
import { ArrowRight, Menu as MenuIcon, X } from 'lucide-react'
import { Link, NavLink } from 'react-router-dom'
import Logo from '../common/Logo'
import { useLocale } from '../../utils/i18n'

export default function Header() {
  const { c, language, setLanguage } = useLocale()
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
      <nav className={menuOpen ? 'header-nav header-nav--open' : 'header-nav'} aria-label={c.nav.menuToggle}>
        {links.map(([label, to]) => <NavLink key={to} to={to} end={to === '/'} onClick={closeMenu}>{label}</NavLink>)}
        <button className="language-toggle" onClick={() => setLanguage(language === 'en' ? 'ar' : 'en')} aria-label={c.nav.toggle}>{c.nav.toggle}</button>
        <Link className="button button--gold header__cta" to="/order" onClick={closeMenu}>{c.nav.order} <ArrowRight size={16} /></Link>
      </nav>
    </div>
  </header>
}
