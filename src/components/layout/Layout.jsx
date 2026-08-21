import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import Footer from './Footer'
import FloatingContact from './FloatingContact'
import Header from './Header'

function ScrollToTop() {
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' })
  }, [pathname])

  return null
}

export default function Layout({ children }) {
  return <><ScrollToTop /><Header /><main>{children}</main><Footer /><FloatingContact /></>
}
