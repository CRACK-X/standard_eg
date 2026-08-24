import { renderToString } from 'react-dom/server'
import { StaticRouter } from 'react-router'
import { AppProviders, AppRoutes } from '../src/App.jsx'
import { SITE_URL, SITE_NAME, ROUTE_META, SITEMAP_PATHS } from '../src/config.js'
import { content } from '../src/utils/i18n.js'

export const faqItems = content.en.faq.items

export function PrerenderApp({ path }) {
  return (
    <StaticRouter location={path}>
      <AppProviders>
        <AppRoutes />
      </AppProviders>
    </StaticRouter>
  )
}

export function renderPrerendered(path) {
  return renderToString(<PrerenderApp path={path} />)
}

export { SITE_URL, SITE_NAME, ROUTE_META, SITEMAP_PATHS }
