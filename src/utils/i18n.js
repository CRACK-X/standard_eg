import { createContext, createElement, useContext, useEffect, useState } from 'react'

const content = {
  en: {
    nav: { home: 'Home', menu: 'Menu & Packages', story: 'Our Story', contact: 'Contact', order: 'Start your order', toggle: 'العربية', menuToggle: 'Toggle navigation' },
    footer: { tagline: 'Casual catering for every occasion. We bring the feast to you.', explore: 'Explore', talk: 'Talk to us', whatsapp: 'WhatsApp us', area: 'Cairo, Giza & Alexandria', mobile: 'Mobile catering across Egypt', rights: 'All rights reserved.', made: 'Web hub for integrated Software soltions' },
    common: { requestThis: 'Request this', optional: 'Optional', edit: 'Edit', back: 'Back', continue: 'Continue', notChosen: 'Not chosen yet', whatsapp: 'WhatsApp', email: 'Email', phone: 'Phone call' },
    home: {
      pageTitle: 'Catering crafted for every celebration',
      eyebrow: 'Mobile event catering · Egypt',
      titleStart: 'Catering crafted', titleMiddle: 'for every', titleAccent: 'celebration.',
      intro: 'From weddings to corporate days, food trucks to dessert stations — Standard brings the feast to you.',
      quote: 'Request a quote', packages: 'Explore our packages', scroll: 'Scroll to discover',
      trusted: 'Trusted by teams across Egypt',
      servicesEyebrow: 'How we make it happen', servicesTitle: 'Every event deserves a delicious point of view.',
      servicesCopy: 'Whether you are planning a once-in-a-lifetime wedding or an easy-going afternoon with the team, we build the food moment around you.',
      services: [
        { title: 'Weddings', copy: 'Considered details, lively stations and a menu that feels entirely yours.' },
        { title: 'Corporate events', copy: 'Polished food service for launches, team days and celebrations.' },
        { title: 'Birthdays & showers', copy: 'Playful, generous and perfectly easy for hosts and guests alike.' },
        { title: 'Food trucks & stations', copy: 'Fresh food, cooked live and brought straight to your venue.' },
      ],
      galleryEyebrow: 'Moments we have catered', galleryTitle: 'Made for the', galleryAccent: 'memory.', follow: 'Follow our journey',
      imageAlt: 'Caterer arranging a food spread', made: 'Made', mobile: 'mobile',
      whyEyebrow: 'The Standard way', whyTitle: 'Good food brings people together.',
      whyCopy: 'We pair the energy of a great street-food stop with the care and polish your occasion deserves.',
      checks: ['We come to you — fully mobile setups', 'Food made fresh, right at the venue', 'Flexible menus for every guest list', 'Warm, thoughtful service from start to finish'],
      meet: 'Meet Standard',
      feedback: 'Everything was so beautifully set up and the food was a huge hit. It made hosting feel completely effortless.',
      feedbackLabel: 'Client feedback', feedbackType: 'Celebration catering',
    },
    cta: { eyebrow: 'Have something in mind?', title: 'Let’s make it', accent: 'delicious.' },
    menu: {
      pageTitle: 'Menu & Packages', eyebrow: 'What we bring to the table', title: 'Menu', accent: '& packages',
      copy: 'Flexible food experiences made for the way you celebrate. Every package can be tailored to your guest list, venue and vision.',
      filter: 'Filter packages', categories: { all: 'All', weddings: 'Weddings', corporate: 'Corporate', birthdays: 'Birthdays', trucks: 'Food Trucks' },
      addonsEyebrow: 'Make it yours', addonsTitle: 'A little extra never hurts.',
      addons: ['Dessert bar', 'Drinks station', 'Popcorn cart', 'Fries cart', 'Live cooking', 'Custom branding'],
    },
    packages: {
      'wedding-full-catering': { title: 'Wedding Full Catering', category: 'Weddings', description: 'A complete, polished food experience for your celebration — from welcoming bites to dessert.', features: ['Full buffet setup', 'Live cooking stations', 'Serving staff'] },
      'food-truck-classic': { title: 'The Classic Food Truck', category: 'Food Trucks', description: 'Fresh favourites served from our signature mobile setup, right at your venue.', features: ['On-site cooking', 'Branded setup', 'Team included'] },
      'waffle-dessert-station': { title: 'Waffle & Pancake Station', category: 'Food Trucks', description: 'A live dessert moment with warm waffles, pancakes and all the toppings.', features: ['Live station chef', 'Toppings bar', 'Custom signage'] },
      'corporate-activation': { title: 'Corporate Event Catering', category: 'Corporate', description: 'Professional, flexible food service for launches, team days and brand activations.', features: ['Flexible headcount', 'Branded details', 'On-site staff'] },
      'birthday-treat-cart': { title: 'Birthday Treat Cart', category: 'Birthdays', description: 'A colourful, easy-going station made for children’s parties and family celebrations.', features: ['Fresh snacks', 'Friendly servers', 'Venue setup'] },
      'drinks-refreshments': { title: 'Drinks & Refreshments', category: 'Birthdays', description: 'A refreshing cart of chilled drinks and crowd-pleasing mocktails for every occasion.', features: ['Custom drink menu', 'Styled cart', 'Staff included'] },
    },
    about: {
      pageTitle: 'Our story', eyebrow: 'More than a meal', title: 'From food trucks to', accent: 'full-scale celebrations.',
      copy: 'Standard is casual catering with a little more heart — designed to make gathering easier, warmer and far more delicious.',
      imageAlt: 'A chef preparing a colourful catered meal', storyEyebrow: 'Our story', storyTitle: 'We bring the good part to every occasion.',
      p1: 'It started with the simple idea that food should be a reason to gather. Today, Standard creates mobile food experiences for events across Egypt — from playful birthday carts to elegant wedding spreads and ambitious corporate activations.',
      p2: 'We are not a one-size-fits-all menu. We listen, plan the right setup, and make sure every guest leaves with something to talk about.',
      event: 'Tell us about your event', occasionEyebrow: 'Any reason to gather', occasionTitle: 'The occasions we love.',
      occasions: ['Weddings & engagements', 'Corporate moments', 'Birthdays & baby showers', 'Private celebrations'],
      gallery: 'Freshly made. Generously served.', galleryAccent: 'Entirely yours.',
    },
    contact: {
      pageTitle: 'Contact us', eyebrow: 'We would love to hear from you', title: 'Let’s start a', accent: 'conversation.',
      copy: 'Need to ask a question or have a particular idea in mind? Send a note, give us a call, or say hello on WhatsApp.',
      formEyebrow: 'Send a message', formTitle: 'How can we help?', sent: 'Thanks — your note is on its way. We’ll be in touch soon.',
      name: 'Your name', phone: 'Phone number', email: 'Email address', topic: 'What can we help with?', message: 'Your message',
      topics: ['General inquiry', 'Menu question', 'Corporate partnership', 'Feedback', 'Other'],
      messagePlaceholder: 'Tell us a little more...', send: 'Send your message',
      quick: 'Prefer a quicker chat?', direct: 'Reach us directly.', call: 'Call us', chat: 'Chat with our team',
      come: 'We come to you.', area: 'Serving Cairo, Giza & Alexandria. Planning something elsewhere? Just ask.',
      note: 'Contact details are placeholder values pending client confirmation.',
    },
    order: {
      pageTitle: 'Start your order', eyebrow: 'A few easy steps', title: 'Tell us about your', accent: 'celebration.',
      copy: 'No checkout, no commitment. Share the essentials and our team will build a tailored quote for you.',
      summaryEyebrow: 'Your request', summaryTitle: 'A quick summary', chat: 'Prefer a quick chat?', chatLink: 'WhatsApp us',
      steps: ['Event basics', 'What you’d like', 'Your details', 'Review'],
      basics: { number: 'Step 01', title: 'The basics first.', copy: 'Give us a little context about your event.', type: 'Event type', typePlaceholder: 'Select an occasion', date: 'Event date', guests: 'Estimated guests', guestsPlaceholder: 'Choose a range', city: 'Event city', cityPlaceholder: 'e.g. Cairo' },
      eventTypes: { wedding: 'Wedding', engagement: 'Engagement', corporate: 'Corporate event', birthday: 'Birthday', shower: 'Baby shower', other: 'Other' },
      guestRanges: { under50: 'Less than 50', from50: '50 – 100', from100: '100 – 250', over250: '250+' },
      services: { number: 'Step 02', title: 'What are you in the mood for?', copy: 'Pick as many services as you’d like. We can always refine things together.', label: 'Budget range', hint: 'Optional — helps us recommend the right fit', discuss: 'Prefer to discuss', buffet: 'Buffet Catering', truck: 'Food Truck(s)', dessert: 'Dessert Station', drinks: 'Drinks Station', snack: 'Popcorn / Fries Cart', live: 'Live Cooking Station', full: 'Full Event Catering', recommend: 'Need a recommendation', addon0: 'Dessert bar', addon1: 'Drinks station', addon2: 'Popcorn cart', addon3: 'Fries cart', addon4: 'Live cooking', addon5: 'Custom branding' },
      budgets: { under20: 'Under 20,000 EGP', from20: '20,000 – 50,000 EGP', from50: '50,000 – 100,000 EGP', over100: '100,000+ EGP' },
      details: { number: 'Step 03', title: 'How should we reach you?', copy: 'Our team will use these details to prepare your quote.', name: 'Full name', mobile: 'Egyptian mobile number', email: 'Email address', contact: 'Preferred contact method', notes: 'Anything else we should know?', notesHint: 'Special requests, venue details, ideas...' },
      review: { number: 'Step 04', title: 'One last look.', copy: 'Make sure everything feels right, then we’ll take it from here.', event: 'Your event', selections: 'Your selections', details: 'Your details', type: 'Event type', date: 'Date', guestCount: 'Guest count', city: 'City', services: 'Services', budget: 'Budget', name: 'Name', phone: 'Phone', contact: 'Contact via', consent: 'I agree that Standard may contact me about this event.' },
      submit: 'Send my request',
      errors: { type: 'Choose an event type.', date: 'Choose a date.', future: 'Your event date must be in the future.', guests: 'Tell us your guest count.', city: 'Add your event city.', services: 'Choose at least one service, or request a recommendation.', name: 'Add your full name.', phone: 'Use an Egyptian mobile number, e.g. 01012345678.', consent: 'Please allow us to contact you about your event.' },
      labels: { occasion: 'Occasion', guests: 'Guests', city: 'City', services: 'Services' },
    },
    success: { pageTitle: 'Request received', eyebrow: 'Your request is on its way', thank: 'Thank you', received: 'We’ve received your request for a', receivedDate: 'on', followup: 'Our team will be in touch within 24 hours.', generic: 'Your catering request has been received. Our team will be in touch within 24 hours.', ref: 'Your reference number', chat: 'Chat on WhatsApp', home: 'Back to home' },
    notFound: { pageTitle: 'Page not found', eyebrow: 'A little detour', title: 'This page took a', accent: 'wrong turn.', copy: 'Let’s get you back to something delicious.', home: 'Back to home' },
    galleryAlt: ['Garden celebration tables dressed for a wedding', 'Plated food at a catered event', 'Guests enjoying an outdoor event', 'Warmly styled food service table', 'Dessert treats on a catering table', 'Guests celebrating together'],
  },
  ar: {
    nav: { home: 'الرئيسية', menu: 'الباقات والقائمة', story: 'قصتنا', contact: 'تواصل معنا', order: 'ابدأ طلبك', toggle: 'EN', menuToggle: 'فتح قائمة التنقل' },
    footer: { tagline: 'ضيافة مميزة لكل مناسبة. نأتي بالوليمة إليك.', explore: 'استكشف', talk: 'تحدث معنا', whatsapp: 'راسلنا عبر واتساب', area: 'القاهرة والجيزة والإسكندرية', mobile: 'ضيافة متنقلة في أنحاء مصر', rights: 'جميع الحقوق محفوظة.', made: 'Web hub for integrated Software soltions' },
    common: { requestThis: 'اطلب هذه الباقة', optional: 'اختياري', edit: 'تعديل', back: 'رجوع', continue: 'متابعة', notChosen: 'لم يتم الاختيار بعد', whatsapp: 'واتساب', email: 'البريد الإلكتروني', phone: 'مكالمة هاتفية' },
    home: {
      pageTitle: 'ضيافة مصممة لكل احتفال',
      eyebrow: 'ضيافة فعاليات متنقلة · مصر',
      titleStart: 'ضيافة مصممة', titleMiddle: 'لكل', titleAccent: 'احتفال.',
      intro: 'من حفلات الزفاف إلى فعاليات الشركات، ومن عربات الطعام إلى محطات الحلويات — ستاندرد تنقل الوليمة إليك.',
      quote: 'اطلب عرض سعر', packages: 'استكشف باقاتنا', scroll: 'اكتشف المزيد',
      trusted: 'موثوق بها من فرق عمل في أنحاء مصر',
      servicesEyebrow: 'كيف نصنع التجربة', servicesTitle: 'كل مناسبة تستحق لمسة شهية خاصة.',
      servicesCopy: 'سواءً كنت تخطط لحفل زفاف لا يُنسى أو ليوم مريح مع فريقك، نصمم تجربة الطعام حولك.',
      services: [
        { title: 'حفلات الزفاف', copy: 'تفاصيل مدروسة ومحطات حية وقائمة تشبهكم تماماً.' },
        { title: 'فعاليات الشركات', copy: 'خدمة طعام أنيقة لإطلاق المنتجات وأيام الفريق والاحتفالات.' },
        { title: 'أعياد الميلاد والبيبي شاور', copy: 'تجربة مرحة وسخية وسهلة على المضيف والضيوف.' },
        { title: 'عربات الطعام والمحطات', copy: 'طعام طازج يُحضّر أمامكم ويصل إلى موقع مناسبتكم.' },
      ],
      galleryEyebrow: 'لحظات قدمناها', galleryTitle: 'صنعناها من أجل', galleryAccent: 'الذكرى.', follow: 'تابع رحلتنا',
      imageAlt: 'مضيف يرتب مائدة طعام', made: 'تجربة', mobile: 'متنقلة',
      whyEyebrow: 'أسلوب ستاندرد', whyTitle: 'الطعام الطيب يجمع الناس.',
      whyCopy: 'نجمع روح عربات الطعام المفضلة مع العناية والرقي اللذين تستحقهما مناسبتك.',
      checks: ['نأتي إليك بتجهيزات متنقلة بالكامل', 'طعام طازج يُحضّر في موقع المناسبة', 'قوائم مرنة لكل عدد من الضيوف', 'خدمة دافئة واهتمام من البداية للنهاية'],
      meet: 'تعرف على ستاندرد',
      feedback: 'كان كل شيء مرتباً بشكل جميل والطعام نال إعجاب الجميع. جعلتم الاستضافة سهلة تماماً.',
      feedbackLabel: 'رأي عميل', feedbackType: 'ضيافة احتفال',
    },
    cta: { eyebrow: 'لديك فكرة في بالك؟', title: 'لنجعلها', accent: 'شهية.' },
    menu: {
      pageTitle: 'القائمة والباقات', eyebrow: 'ما نقدمه إلى مائدتك', title: 'القائمة', accent: 'والباقات',
      copy: 'تجارب طعام مرنة تناسب طريقتك في الاحتفال. يمكن تخصيص كل باقة بحسب عدد الضيوف والمكان ورؤيتك.',
      filter: 'تصفية الباقات', categories: { all: 'الكل', weddings: 'حفلات الزفاف', corporate: 'الشركات', birthdays: 'أعياد الميلاد', trucks: 'عربات الطعام' },
      addonsEyebrow: 'اجعلها بطريقتك', addonsTitle: 'القليل الإضافي يصنع فرقاً.',
      addons: ['بار حلويات', 'محطة مشروبات', 'عربة فشار', 'عربة بطاطس', 'طهي حي', 'هوية مخصصة'],
    },
    packages: {
      'wedding-full-catering': { title: 'ضيافة زفاف متكاملة', category: 'حفلات الزفاف', description: 'تجربة طعام أنيقة ومتكاملة ليومكم — من ضيافة الاستقبال حتى الحلويات.', features: ['بوفيه متكامل', 'محطات طهي حية', 'فريق تقديم'] },
      'food-truck-classic': { title: 'عربة الطعام الكلاسيكية', category: 'عربات الطعام', description: 'أطباق مفضلة طازجة تقدمها عربة ستاندرد المميزة في موقعكم مباشرة.', features: ['طهي في الموقع', 'تجهيز بعلامتكم', 'فريق كامل'] },
      'waffle-dessert-station': { title: 'محطة وافل وبان كيك', category: 'عربات الطعام', description: 'لحظة حلوة حية مع وافل وبان كيك دافئين وخيارات متنوعة من الإضافات.', features: ['شيف للمحطة', 'بار إضافات', 'لافتات مخصصة'] },
      'corporate-activation': { title: 'ضيافة فعاليات الشركات', category: 'الشركات', description: 'خدمة ضيافة احترافية ومرنة لإطلاق المنتجات وأيام الفريق وفعاليات العلامات التجارية.', features: ['عدد ضيوف مرن', 'تفاصيل بعلامتكم', 'فريق في الموقع'] },
      'birthday-treat-cart': { title: 'عربة احتفالات الميلاد', category: 'أعياد الميلاد', description: 'محطة ملونة وسهلة تناسب حفلات الأطفال والاحتفالات العائلية.', features: ['وجبات خفيفة طازجة', 'فريق ودود', 'تجهيز في الموقع'] },
      'drinks-refreshments': { title: 'محطة مشروبات وانتعاش', category: 'أعياد الميلاد', description: 'عربة منعشة من المشروبات الباردة والموكتيلات المناسبة لكل مناسبة.', features: ['قائمة مشروبات مخصصة', 'عربة أنيقة', 'فريق تقديم'] },
    },
    about: {
      pageTitle: 'قصتنا', eyebrow: 'أكثر من مجرد وجبة', title: 'من عربات الطعام إلى', accent: 'احتفالات متكاملة.',
      copy: 'ستاندرد ضيافة بسيطة لكن بقلب أكبر — صُممت لتجعل التجمعات أسهل وأدفأ وأكثر شهية.',
      imageAlt: 'شيف يحضر وجبة ضيافة ملونة', storyEyebrow: 'قصتنا', storyTitle: 'نأتي بالجزء الجميل إلى كل مناسبة.',
      p1: 'بدأت الفكرة البسيطة بأن الطعام يجب أن يكون سبباً للتجمع. اليوم تصنع ستاندرد تجارب طعام متنقلة للفعاليات في أنحاء مصر — من عربات أعياد الميلاد المرحة إلى موائد الزفاف الأنيقة وفعاليات الشركات الطموحة.',
      p2: 'لا نقدم قائمة واحدة تناسب الجميع. نصغي إليك ونخطط للتجهيز المناسب ونتأكد أن كل ضيف يغادر ومعه حديث جميل.',
      event: 'حدثنا عن مناسبتك', occasionEyebrow: 'كل سبب يستحق التجمع', occasionTitle: 'المناسبات التي نحبها.',
      occasions: ['حفلات الزفاف والخطوبة', 'لحظات الشركات', 'أعياد الميلاد والبيبي شاور', 'الاحتفالات الخاصة'],
      gallery: 'محضر طازجاً. يُقدَّم بسخاء.', galleryAccent: 'صُنع لكم بالكامل.',
    },
    contact: {
      pageTitle: 'تواصل معنا', eyebrow: 'يسعدنا أن نسمع منك', title: 'لنبدأ', accent: 'حديثاً.',
      copy: 'هل لديك سؤال أو فكرة محددة؟ أرسل لنا رسالة، اتصل بنا أو قل مرحباً عبر واتساب.',
      formEyebrow: 'أرسل رسالة', formTitle: 'كيف يمكننا مساعدتك؟', sent: 'شكراً — وصلت رسالتك وسنتواصل معك قريباً.',
      name: 'الاسم', phone: 'رقم الهاتف', email: 'البريد الإلكتروني', topic: 'كيف يمكننا مساعدتك؟', message: 'رسالتك',
      topics: ['استفسار عام', 'سؤال عن القائمة', 'شراكة مع شركة', 'ملاحظة', 'أمر آخر'],
      messagePlaceholder: 'أخبرنا بالمزيد...', send: 'أرسل رسالتك',
      quick: 'تفضل محادثة أسرع؟', direct: 'تواصل معنا مباشرة.', call: 'اتصل بنا', chat: 'تحدث مع فريقنا',
      come: 'نأتي إليك.', area: 'نخدم القاهرة والجيزة والإسكندرية. تخطط لمناسبة في مكان آخر؟ فقط اسألنا.',
      note: 'بيانات التواصل مؤقتة حتى تأكيدها من العميل.',
    },
    order: {
      pageTitle: 'ابدأ طلبك', eyebrow: 'خطوات بسيطة', title: 'حدثنا عن', accent: 'احتفالك.',
      copy: 'لا يوجد دفع أو التزام. شاركنا الأساسيات وسيبني فريقنا عرض سعر مناسباً لك.',
      summaryEyebrow: 'طلبك', summaryTitle: 'ملخص سريع', chat: 'تفضل محادثة أسرع؟', chatLink: 'راسلنا عبر واتساب',
      steps: ['أساسيات المناسبة', 'ما الذي تريده؟', 'بياناتك', 'المراجعة'],
      basics: { number: 'الخطوة 01', title: 'لنبدأ بالأساسيات.', copy: 'أعطنا فكرة بسيطة عن مناسبتك.', type: 'نوع المناسبة', typePlaceholder: 'اختر المناسبة', date: 'تاريخ المناسبة', guests: 'عدد الضيوف المتوقع', guestsPlaceholder: 'اختر النطاق', city: 'مدينة المناسبة', cityPlaceholder: 'مثال: القاهرة' },
      eventTypes: { wedding: 'حفل زفاف', engagement: 'خطوبة', corporate: 'فعالية شركة', birthday: 'عيد ميلاد', shower: 'بيبي شاور', other: 'أخرى' },
      guestRanges: { under50: 'أقل من 50', from50: '50 – 100', from100: '100 – 250', over250: '250+' },
      services: { number: 'الخطوة 02', title: 'ما الذي تشتهيه؟', copy: 'اختر أي عدد من الخدمات التي تريدها. يمكننا دائماً تعديلها معاً.', label: 'نطاق الميزانية', hint: 'اختياري — يساعدنا في اقتراح الأنسب', discuss: 'أفضل مناقشتها', buffet: 'بوفيه ضيافة', truck: 'عربة طعام', dessert: 'محطة حلويات', drinks: 'محطة مشروبات', snack: 'عربة فشار / بطاطس', live: 'محطة طهي حي', full: 'ضيافة مناسبات متكاملة', recommend: 'أحتاج اقتراحاً', addon0: 'بار حلويات', addon1: 'محطة مشروبات', addon2: 'عربة فشار', addon3: 'عربة بطاطس', addon4: 'طهي حي', addon5: 'هوية مخصصة' },
      budgets: { under20: 'أقل من 20,000 جنيه', from20: '20,000 – 50,000 جنيه', from50: '50,000 – 100,000 جنيه', over100: 'أكثر من 100,000 جنيه' },
      details: { number: 'الخطوة 03', title: 'كيف نصل إليك؟', copy: 'سيستخدم فريقنا هذه البيانات لإعداد عرض السعر.', name: 'الاسم بالكامل', mobile: 'رقم هاتف مصري', email: 'البريد الإلكتروني', contact: 'طريقة التواصل المفضلة', notes: 'هل هناك أي تفاصيل أخرى؟', notesHint: 'طلبات خاصة أو تفاصيل المكان أو أفكار...' },
      review: { number: 'الخطوة 04', title: 'نظرة أخيرة.', copy: 'تأكد أن كل شيء صحيح، ثم سنتولى الباقي.', event: 'مناسبتك', selections: 'اختياراتك', details: 'بياناتك', type: 'نوع المناسبة', date: 'التاريخ', guestCount: 'عدد الضيوف', city: 'المدينة', services: 'الخدمات', budget: 'الميزانية', name: 'الاسم', phone: 'الهاتف', contact: 'التواصل عبر', consent: 'أوافق على أن تتواصل معي ستاندرد بخصوص هذه المناسبة.' },
      submit: 'أرسل طلبي',
      errors: { type: 'اختر نوع المناسبة.', date: 'اختر التاريخ.', future: 'يجب أن يكون تاريخ المناسبة في المستقبل.', guests: 'أخبرنا بعدد الضيوف.', city: 'أضف مدينة المناسبة.', services: 'اختر خدمة واحدة على الأقل أو اطلب اقتراحاً.', name: 'أضف اسمك بالكامل.', phone: 'استخدم رقم هاتف مصري، مثال: 01012345678.', consent: 'يرجى السماح لنا بالتواصل معك بخصوص المناسبة.' },
      labels: { occasion: 'المناسبة', guests: 'الضيوف', city: 'المدينة', services: 'الخدمات' },
    },
    success: { pageTitle: 'تم استلام الطلب', eyebrow: 'طلبك في الطريق إلينا', thank: 'شكراً لك', received: 'تلقينا طلبك لـ', receivedDate: 'بتاريخ', followup: 'سيتواصل معك فريقنا خلال 24 ساعة.', generic: 'تلقينا طلب الضيافة الخاص بك. سيتواصل معك فريقنا خلال 24 ساعة.', ref: 'رقم الطلب', chat: 'تحدث عبر واتساب', home: 'العودة للرئيسية' },
    notFound: { pageTitle: 'الصفحة غير موجودة', eyebrow: 'منعطف صغير', title: 'هذه الصفحة أخذت', accent: 'الطريق الخطأ.', copy: 'لنعد بك إلى شيء شهي.', home: 'العودة للرئيسية' },
    galleryAlt: ['موائد احتفال في حديقة لحفل زفاف', 'طعام مقدم في فعالية ضيافة', 'ضيوف يستمتعون بفعالية خارجية', 'مائدة طعام دافئة التجهيز', 'حلويات على مائدة ضيافة', 'ضيوف يحتفلون معاً'],
  },
}

const LocaleContext = createContext(null)

function initialLanguage() {
  try { return localStorage.getItem('standard_language') === 'ar' ? 'ar' : 'en' } catch { return 'en' }
}

export function LocaleProvider({ children }) {
  const [language, setLanguage] = useState(initialLanguage)
  useEffect(() => {
    document.documentElement.lang = language
    document.documentElement.dir = language === 'ar' ? 'rtl' : 'ltr'
    try { localStorage.setItem('standard_language', language) } catch { /* Keep the session working if storage is unavailable. */ }
  }, [language])
  return createElement(LocaleContext.Provider, { value: { language, setLanguage, c: content[language] } }, children)
}

export function useLocale() {
  const value = useContext(LocaleContext)
  if (!value) throw new Error('useLocale must be used inside LocaleProvider')
  return value
}
