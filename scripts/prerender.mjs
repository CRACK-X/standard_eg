import { readFileSync, writeFileSync, mkdirSync, rmSync, existsSync } from 'node:fs'
import { dirname, join } from 'node:path'
import { fileURLToPath } from 'node:url'

process.env.NODE_ENV = 'production'

const root = dirname(dirname(fileURLToPath(import.meta.url)))
const dist = join(root, 'dist')
const ssrDir = join(root, '.prerender')
const bundle = join(ssrDir, 'prerender-entry.js')

if (!existsSync(bundle)) {
  console.error('Prerender bundle missing. Run the full build: npm run build')
  process.exit(1)
}

const { renderPrerendered, SITE_URL, SITE_NAME, ROUTE_META, SITEMAP_PATHS, faqItems } =
  await import(bundle)

const template = readFileSync(join(dist, 'index.html'), 'utf8')
const today = new Date().toISOString().slice(0, 10)

// FAQPage structured data generated from the app's own content so it can never drift from the UI.
const faqJsonLd = JSON.stringify({
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: (faqItems || []).map(({ q, a }) => ({
    '@type': 'Question',
    name: q,
    acceptedAnswer: { '@type': 'Answer', text: a },
  })),
}).replace(/</g, '\\u003c')

function extraJsonLd(path) {
  if (path !== '/about') return ''
  return `<script type="application/ld+json">${faqJsonLd}</script>`
}

function pageHtml(path, meta) {
  const locale = meta.en
  const title = `${locale.title} | ${SITE_NAME}`
  const url = path === '/' ? SITE_URL + '/' : SITE_URL + path
  const robots = locale.noindex ? 'noindex, follow' : 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1'
  return template
    .replaceAll('%%RENDERED_BODY%%', renderPrerendered(path))
    .replaceAll('%%EXTRA_JSONLD%%', extraJsonLd(path))
    .replaceAll('%%PAGE_TITLE%%', title)
    .replaceAll('%%DESCRIPTION%%', locale.description)
    .replaceAll('%%ROBOTS%%', robots)
    .replaceAll('%%CANONICAL%%', url)
    .replaceAll('%%OG_TITLE%%', title)
    .replaceAll('%%OG_DESCRIPTION%%', locale.description)
    .replaceAll('%%OG_URL%%', url)
    .replaceAll('%%PAGE_PATH%%', path)
    .replaceAll('%%SITE_URL%%', SITE_URL)
}

function writeOut(relPath, contents) {
  const target = join(dist, relPath)
  mkdirSync(dirname(target), { recursive: true })
  writeFileSync(target, contents)
}

let rendered = 0
for (const [path, meta] of Object.entries(ROUTE_META)) {
  if (path === '404') continue
  const file = path === '/' ? 'index.html' : path.slice(1) + '.html'
  writeOut(file, pageHtml(path, meta))
  rendered++
}

// Styled 404 page — served with a real HTTP 404 status by Workers assets.
writeOut('404.html', pageHtml('/404-page-not-found', ROUTE_META['404']))

// robots.txt + sitemap.xml generated from the single SITE_URL constant.
writeOut('robots.txt', `User-agent: *\nAllow: /\n\nSitemap: ${SITE_URL}/sitemap.xml\n`)

const sitemapUrls = SITEMAP_PATHS.map((path) => [
  '  <url>',
  `    <loc>${path === '/' ? SITE_URL + '/' : SITE_URL + path}</loc>`,
  `    <lastmod>${today}</lastmod>`,
  '    <changefreq>' + (path === '/' || path === '/menu' ? 'weekly' : 'monthly') + '</changefreq>',
  `    <priority>${path === '/' ? '1.0' : path === '/menu' ? '0.9' : path === '/order' ? '0.8' : '0.7'}</priority>`,
  '  </url>',
].join('\n'))
writeOut('sitemap.xml', `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${sitemapUrls.join('\n')}\n</urlset>\n`)

rmSync(ssrDir, { recursive: true, force: true })

console.log(`Prerendered ${rendered} routes + 404.html, robots.txt and sitemap.xml into dist/`)
