import { useEffect } from 'react'

const PAGE_META = {
  'Catering crafted for every celebration': { desc: 'Mobile catering, food trucks and live food stations for weddings, corporate events and celebrations across Cairo, Giza and Alexandria.', path: '/' },
  'Menu & Packages': { desc: 'Browse Standard Catering packages — weddings, corporate, birthdays, food trucks and dessert stations. Fully tailored to your guest list and vision.', path: '/menu' },
  'Our story': { desc: 'Learn how Standard Catering brings mobile food experiences to events across Egypt — from food trucks to full-scale wedding buffets.', path: '/about' },
  'Contact us': { desc: 'Get in touch with Standard Catering. Send a message, call or WhatsApp us — we serve Cairo, Giza and Alexandria.', path: '/contact' },
  'Start your order': { desc: 'Request a catering quote in minutes. No commitment — just tell us about your event and we will tailor a package for you.', path: '/order' },
  'Request received': { desc: 'Your Standard Catering request has been received. Our team will be in touch within 24 hours.', path: '/order/success' },
  'Page not found': { desc: 'The page you are looking for does not exist. Head back to Standard Catering.', path: '/' },
  'Privacy Policy': { desc: 'Read the Standard Catering privacy policy — how we collect, use and protect your data.', path: '/privacy' },
  'Terms & Conditions': { desc: 'Standard Catering booking terms, cancellation policy, advance notice requirements and governing law.', path: '/terms' },
}

export function usePageTitle(title) {
  useEffect(() => {
    document.title = title + ' | Standard Catering'
    const meta = PAGE_META[title]
    if (meta) {
      let desc = document.querySelector('meta[name="description"]')
      if (desc) desc.setAttribute('content', meta.desc)
      let can = document.querySelector('link[rel="canonical"]')
      if (can) can.setAttribute('href', 'https://standardcatering.eg' + meta.path)
    }
  }, [title])
}
