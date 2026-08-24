import { contact } from './siteData'

// Collapse control characters so user-typed values can never forge extra
// message lines (newlines render as line breaks inside a WhatsApp message).
function clean(value) {
  return String(value ?? '').replace(/[\r\n\t\u202A-\u202E\u200B-\u200F]+/g, ' ').trim()
}

function englishMessage(order, items, c, referenceNumber) {
  const cartText = items.map(item => `• ${item.quantity}x ${item.name}${item.note ? ` (Note: ${clean(item.note)})` : ''}`).join('\n')
  return [
    '*NEW CATERING REQUEST*',
    'Reference: ' + referenceNumber,
    '',
    '*DELIVERY DETAILS*',
    '• Date: ' + (order.date || c.common.notChosen),
    '• Time: ' + (order.time || c.common.notChosen),
    '• City: ' + (clean(order.city) || c.common.notChosen),
    '• Address: ' + (clean(order.address) || c.common.notChosen),
    '',
    '*CART ITEMS*',
    cartText || 'Empty Cart',
    '',
    '*CONTACT DETAILS*',
    '• Name: ' + (clean(order.name) || c.common.notChosen),
    '• Phone: ' + (clean(order.phone) || c.common.notChosen),
    '• Email: ' + (clean(order.email) || c.common.notChosen),
    '',
    '*ADDITIONAL NOTES*',
    clean(order.notes) || 'None provided',
  ].join('\n')
}

function arabicMessage(order, items, c, referenceNumber) {
  const cartText = items.map(item => `• ${item.quantity}x ${item.name}${item.note ? ` (ملاحظة: ${clean(item.note)})` : ''}`).join('\n')
  return [
    '*طلب ضيافة جديد*',
    'رقم الطلب: ' + referenceNumber,
    '',
    '*تفاصيل التوصيل*',
    '• التاريخ: ' + (order.date || c.common.notChosen),
    '• الوقت: ' + (order.time || c.common.notChosen),
    '• المدينة: ' + (clean(order.city) || c.common.notChosen),
    '• العنوان: ' + (clean(order.address) || c.common.notChosen),
    '',
    '*عناصر السلة*',
    cartText || 'سلة فارغة',
    '',
    '*بيانات التواصل*',
    '• الاسم: ' + (clean(order.name) || c.common.notChosen),
    '• الهاتف: ' + (clean(order.phone) || c.common.notChosen),
    '• البريد الإلكتروني: ' + (clean(order.email) || c.common.notChosen),
    '',
    '*ملاحظات إضافية*',
    clean(order.notes) || 'لا توجد ملاحظات',
  ].join('\n')
}

export function buildOrderWhatsAppUrl(order, items, c, language, referenceNumber) {
  const message = language === 'ar'
    ? arabicMessage(order, items, c, referenceNumber)
    : englishMessage(order, items, c, referenceNumber)

  const isMobile = /Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(typeof navigator !== 'undefined' ? navigator.userAgent : '')
  const base = isMobile ? 'whatsapp://send?phone=' : 'https://wa.me/'
  const sep = isMobile ? '&' : '?'

  return base + contact.whatsappNumber + sep + 'text=' + encodeURIComponent(message)
}

export function buildContactWhatsAppUrl(fields, c, language) {
  const topic = fields.get('topic') || ''
  const header = language === 'ar' ? '*استفسار جديد — الموقع*' : '*NEW ENQUIRY — WEBSITE*'
  const line = (label, value, optional = false) => {
    const v = clean(value)
    if (!v && optional) return null
    return '• ' + label + ': ' + (v || c.common.notChosen)
  }
  const message = [
    header,
    '',
    line(c.contact.name, fields.get('name')),
    line(c.contact.phone, fields.get('phone')),
    line(c.common.email, fields.get('email'), true),
    line(c.contact.topic, topic),
    '',
    c.contact.message + ':',
    clean(fields.get('message')) || '-',
  ].filter(Boolean).join('\n')

  const isMobile = /Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(typeof navigator !== 'undefined' ? navigator.userAgent : '')
  const base = isMobile ? 'whatsapp://send?phone=' : 'https://wa.me/'
  const sep = isMobile ? '&' : '?'
  return base + contact.whatsappNumber + sep + 'text=' + encodeURIComponent(message)
}
