import { packageItems } from './siteData'

export const initialOrder = {
  eventType: '',
  date: '',
  guests: '',
  city: '',
  services: [],
  budget: '',
  name: '',
  phone: '',
  email: '',
  contactMethod: 'whatsapp',
  notes: '',
  consent: false,
}

export function loadOrderDraft(searchParams) {
  let saved = initialOrder

  try {
    saved = { ...initialOrder, ...JSON.parse(sessionStorage.getItem('standard_order_draft') || '{}') }
  } catch {
    // Ignore malformed local draft data.
  }

  const presetService = searchParams.get('service')
  const presetPackage = searchParams.get('package')
  const preset = presetService || (packageItems.some(item => item.id === presetPackage) ? presetPackage : '')

  return {
    ...saved,
    services: preset ? [...new Set([...(saved.services || []), preset])] : (saved.services || []),
  }
}

export function readableOrder(order, c, key) {
  if (!order[key]) return c.common.notChosen
  if (key === 'eventType') return c.order.eventTypes[order[key]] || order[key]
  if (key === 'guests') return c.order.guestRanges[order[key]] || order[key]
  if (key === 'budget') return c.order.budgets[order[key]] || order[key]
  if (key === 'contactMethod') return c.common[order[key]] || order[key]
  if (key === 'services') return order.services.map(item => c.order.services[item] || c.packages[item]?.title || item).join('، ')
  return order[key]
}
