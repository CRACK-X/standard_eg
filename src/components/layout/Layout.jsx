import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import Footer from './Footer'
import FloatingContact from './FloatingContact'
import FloatingCart from './FloatingCart'
import Header from './Header'
import CartDrawer from './CartDrawer'

function ScrollToTop() {
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' })
  }, [pathname])

  return null
}

export default function Layout({ children }) {
  return <div className="app-wrapper"><ScrollToTop /><Header /><main>{children}</main><Footer /><FloatingContact /><FloatingCart /><CartDrawer /></div>
}
