export const SITE_URL = 'https://standard-eg.gold-rush.workers.dev'
export const SITE_NAME = 'Standard Catering'

// Per-route metadata shared by the prerender build and the client-side hook.
// Keys are route pathnames; '404' is the fallback for unmatched paths.
export const ROUTE_META = {
  '/': {
    en: { title: 'Catering crafted for every celebration', description: 'Standard Catering brings mobile catering, food trucks, open buffets and live food stations to weddings, corporate events and celebrations across Cairo, Giza, Alexandria and Egypt.' },
    ar: { title: 'ضيافة مصنوعة لكل احتفال', description: 'ستاندرد كاترينج يقدم الضيافة المتنقلة وفود ترك والبوفيهات المفتوحة ومحطات الطعام الحية لحفلات الزفاف والمناسبات الشركة في القاهرة والجيزة والإسكندرية ومصر.' },
  },
  '/menu': {
    en: { title: 'Menu & Packages', description: 'Browse Standard Catering packages — weddings, corporate, birthdays, food trucks and dessert stations. Fully tailored to your guest list and vision.' },
    ar: { title: 'المنيو والباقات', description: 'تصفح باقات ستاندرد كاترينج — أعراس ومناسبات شركة وأعياد ميلاد وفود ترك ومحطات حلويات. مصممة بالكامل حسب عدد ضيوفك ورؤيتك.' },
  },
  '/about': {
    en: { title: 'Our story', description: 'Learn how Standard Catering brings mobile food experiences to events across Egypt — from food trucks to full-scale wedding buffets.' },
    ar: { title: 'قصتنا', description: 'تعرف على كيف يقدم ستاندرد كاترينج تجارب طعام متنقلة للفعاليات في جميع أنحاء مصر — من فود ترك إلى بوفيهات الزفاف الكاملة.' },
  },
  '/contact': {
    en: { title: 'Contact us', description: 'Get in touch with Standard Catering. Send a message, call or WhatsApp us — we serve Cairo, Giza and Alexandria.' },
    ar: { title: 'تواصل معنا', description: 'تواصل مع ستاندرد كاترينج. أرسل رسالة أو اتصل بنا عبر واتساب — نخدم القاهرة والجيزة والإسكندرية.' },
  },
  '/order': {
    en: { title: 'Start your order', description: 'Request a catering quote in minutes. No commitment — just tell us about your event and we will tailor a package for you.' },
    ar: { title: 'ابدأ طلبك', description: 'اطلب عرض سعر الضيافة في دقائق. دون أي التزام — أخبرنا عن فعاليتك وسنصمم لك باقة خاصة.' },
  },
  '/order/success': {
    en: { title: 'Request received', description: 'Your Standard Catering request has been received. Our team will be in touch within 24 hours.', noindex: true },
    ar: { title: 'تم استلام الطلب', description: 'تم استلام طلبك من ستاندرد كاترينج. سيتواصل معك فريقنا خلال 24 ساعة.', noindex: true },
  },
  '/privacy': {
    en: { title: 'Privacy Policy', description: 'Read the Standard Catering privacy policy — how we collect, use and protect your data.' },
    ar: { title: 'سياسة الخصوصية', description: 'اقرأ سياسة الخصوصية الخاصة بستاندرد كاترينج — كيف نجمع بياناتك ونستخدمها ونحميها.' },
  },
  '/terms': {
    en: { title: 'Terms & Conditions', description: 'Standard Catering booking terms, cancellation policy, advance notice requirements and governing law.' },
    ar: { title: 'الشروط والأحكام', description: 'شروط الحجز وسياسة الإلغاء ومتطلبات الإشعار المسبق والقانون الحاكم لستاندرد كاترينج.' },
  },
  '404': {
    en: { title: 'Page not found', description: 'The page you are looking for does not exist. Head back to Standard Catering.', noindex: true },
    ar: { title: 'الصفحة غير موجودة', description: 'الصفحة التي تبحث عنها غير موجودة. عد إلى ستاندرد كاترينج.', noindex: true },
  },
}

// Routes listed in sitemap.xml (noindex routes excluded).
export const SITEMAP_PATHS = ['/', '/menu', '/about', '/contact', '/order']
