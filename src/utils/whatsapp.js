import { contact } from './siteData'
import { readableOrder } from './order'

function englishMessage(order, items, c, referenceNumber) {
  const cartText = items.map(item => `• ${item.quantity}x ${item.name}${item.note ? ` (Note: ${item.note})` : ''}`).join('\n')
  return [
    '*NEW CATERING REQUEST*',
    'Reference: ' + referenceNumber,
    '',
    '*DELIVERY DETAILS*',
    '• Date: ' + (order.date || c.common.notChosen),
    '• Time: ' + (order.time || c.common.notChosen),
    '• City: ' + (order.city || c.common.notChosen),
    '• Address: ' + (order.address || c.common.notChosen),
    '',
    '*CART ITEMS*',
    cartText || 'Empty Cart',
    '',
    '*CONTACT DETAILS*',
    '• Name: ' + (order.name || c.common.notChosen),
    '• Phone: ' + (order.phone || c.common.notChosen),
    '• Email: ' + (order.email || c.common.notChosen),
    '• Preferred contact: ' + readableOrder(order, c, 'contactMethod'),
    '',
    '*ADDITIONAL NOTES*',
    order.notes?.trim() || 'None provided',
  ].join('\n')
}

function arabicMessage(order, items, c, referenceNumber) {
  const cartText = items.map(item => `• ${item.quantity}x ${item.name}${item.note ? ` (ملاحظة: ${item.note})` : ''}`).join('\n')
  return [
    '*طلب ضيافة جديد*',
    'رقم الطلب: ' + referenceNumber,
    '',
    '*تفاصيل التوصيل*',
    '• التاريخ: ' + (order.date || c.common.notChosen),
    '• الوقت: ' + (order.time || c.common.notChosen),
    '• المدينة: ' + (order.city || c.common.notChosen),
    '• العنوان: ' + (order.address || c.common.notChosen),
    '',
    '*عناصر السلة*',
    cartText || 'سلة فارغة',
    '',
    '*بيانات التواصل*',
    '• الاسم: ' + (order.name || c.common.notChosen),
    '• الهاتف: ' + (order.phone || c.common.notChosen),
    '• البريد الإلكتروني: ' + (order.email || c.common.notChosen),
    '• طريقة التواصل المفضلة: ' + readableOrder(order, c, 'contactMethod'),
    '',
    '*ملاحظات إضافية*',
    order.notes?.trim() || 'لا توجد ملاحظات',
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
