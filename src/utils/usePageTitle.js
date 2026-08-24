import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { SITE_URL, SITE_NAME, ROUTE_META } from '../config'
import { useLocale } from './i18n'

function setMeta(selector, attr, value) {
  let el = document.head.querySelector(selector)
  if (!el) {
    el = document.createElement('meta')
    document.head.appendChild(el)
  }
  el.setAttribute(attr, value)
}

export function usePageMeta() {
  const { pathname } = useLocation()
  const { language } = useLocale()

  useEffect(() => {
    const path = pathname.length > 1 && pathname.endsWith('/') ? pathname.slice(0, -1) : pathname
    const meta = ROUTE_META[path] || ROUTE_META['404']
    const locale = meta[language] ? language : 'en'
    const { title, description, noindex } = meta[locale]
    const url = path === '/' ? SITE_URL + '/' : SITE_URL + path
    const fullTitle = `${title} | ${SITE_NAME}`

    document.title = fullTitle
    setMeta('meta[name="description"]', 'content', description)
    setMeta('meta[name="robots"]', 'content', noindex ? 'noindex, follow' : 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1')

    let canonical = document.head.querySelector('link[rel="canonical"]')
    if (!canonical) {
      canonical = document.createElement('link')
      canonical.rel = 'canonical'
      document.head.appendChild(canonical)
    }
    canonical.href = url

    setMeta('meta[property="og:title"]', 'content', fullTitle)
    setMeta('meta[property="og:description"]', 'content', description)
    setMeta('meta[property="og:url"]', 'content', url)
    setMeta('meta[name="twitter:title"]', 'content', fullTitle)
    setMeta('meta[name="twitter:description"]', 'content', description)
  }, [pathname, language])
}
