import { contact } from './siteData'
import { readableOrder } from './order'

function englishMessage(order, c, referenceNumber) {
  return [
    '*NEW CATERING REQUEST*',
    'Reference: ' + referenceNumber,
    '',
    '*EVENT DETAILS*',
    '• Occasion: ' + readableOrder(order, c, 'eventType'),
    '• Date: ' + (order.date || c.common.notChosen),
    '• Guests: ' + readableOrder(order, c, 'guests'),
    '• City: ' + (order.city || c.common.notChosen),
    '',
    '*REQUESTED SERVICES*',
    '• Services: ' + readableOrder(order, c, 'services'),
    '• Budget: ' + readableOrder(order, c, 'budget'),
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

function arabicMessage(order, c, referenceNumber) {
  return [
    '*طلب ضيافة جديد*',
    'رقم الطلب: ' + referenceNumber,
    '',
    '*تفاصيل المناسبة*',
    '• المناسبة: ' + readableOrder(order, c, 'eventType'),
    '• التاريخ: ' + (order.date || c.common.notChosen),
    '• عدد الضيوف: ' + readableOrder(order, c, 'guests'),
    '• المدينة: ' + (order.city || c.common.notChosen),
    '',
    '*الخدمات المطلوبة*',
    '• الخدمات: ' + readableOrder(order, c, 'services'),
    '• الميزانية: ' + readableOrder(order, c, 'budget'),
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

export function buildOrderWhatsAppUrl(order, c, language, referenceNumber) {
  const message = language === 'ar'
    ? arabicMessage(order, c, referenceNumber)
    : englishMessage(order, c, referenceNumber)

  const isMobile = /Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(typeof navigator !== 'undefined' ? navigator.userAgent : '')
  const base = isMobile ? 'whatsapp://send?phone=' : 'https://wa.me/'
  const sep = isMobile ? '&' : '?'

  return base + contact.whatsappNumber + sep + 'text=' + encodeURIComponent(message)
}
