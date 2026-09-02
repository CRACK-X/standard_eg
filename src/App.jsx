import { useEffect, useState } from 'react'
import {
  ArrowRight, ArrowUpRight, Building2, CalendarDays, Check, ChevronDown, Clock,
  ChevronLeft, CircleCheck, Heart, Home as HomeIcon, Mail, MapPin, MessageCircle, Minus, PartyPopper,
  Phone, Plus, Search, SendHorizonal, ShoppingCart, Star, Truck, Users, Utensils, X,
} from 'lucide-react'
import {
  BrowserRouter, Link, Route, Routes, useLocation, useNavigate,
  useSearchParams,
} from 'react-router-dom'
import { LocaleProvider, useLocale } from './utils/i18n'
import Logo from './components/common/Logo'
import Reveal from './components/common/Reveal'
import SectionIntro, { Eyebrow, GoldRule } from './components/common/SectionIntro'
import Layout from './components/layout/Layout'
import CookieBanner from './components/layout/CookieBanner'
import CtaBand from './components/marketing/CtaBand'
import MenuCatalog from './components/marketing/MenuCatalog'
import MasonryGallery from './components/marketing/MasonryGallery'
import PageHero from './components/marketing/PageHero'
import TrustMarquee from './components/marketing/TrustMarquee'
import PrivacyPolicy from './pages/PrivacyPolicy'
import Terms from './pages/Terms'
import { aboutGallerySources, addonKeys, contact, gallerySources, heroImage, openBuffetImage, storyImages, whyStandardImage } from './utils/siteData'
import { useCart } from './context/CartContext'
import { loadOrderDraft } from './utils/order'
import { buildContactWhatsAppUrl, buildOrderWhatsAppUrl } from './utils/whatsapp'
import { usePageMeta } from './utils/usePageTitle'
import './styles/app.css'


function Home() {
  const { c } = useLocale()
  const { setIsCartOpen } = useCart()
  const h = c.home
  usePageMeta()
  
  const handleRequestQuote = () => {
    setIsCartOpen(true)
  }
  
  return <>
    <section className="home-hero">
      <img src={heroImage} alt="" className="home-hero__bg" fetchPriority="high" loading="eager" width="1200" height="800" />
      <div className="home-hero__shade" />
      <div className="shell home-hero__content hero-entrance">
        <Eyebrow>{h.eyebrow}</Eyebrow>
        <h1>{h.titleStart}<br />{h.titleMiddle} <em>{h.titleAccent}</em></h1>
        <p>{h.intro}</p>
        <div className="button-row"><button className="button button--gold" onClick={handleRequestQuote}>{h.quote} <ArrowRight size={17} /></button><Link className="button button--ghost" to="/menu">{h.packages}</Link></div>
        <div className="hero-scroll"><span /> {h.scroll}</div>
      </div>
    </section>
    <section className="trust-strip"><div className="shell trust-strip__inner"><span className="trust-strip__label">{h.trusted}</span><TrustMarquee label={h.trusted} /></div></section>
    <section className="section shell services-section">
      <Reveal><SectionIntro eyebrow={h.servicesEyebrow} title={h.servicesTitle} copy={h.servicesCopy} centered /></Reveal>
      <div className="service-grid">
        {h.services.map((service, index) => <Reveal key={service.title} delay={index * 85}><ServiceCard icon={index === 0 ? <Utensils /> : index === 1 ? <Building2 /> : index === 2 ? <PartyPopper /> : <Truck />} count={'0' + (index + 1)} title={service.title} copy={service.copy} /></Reveal>)}
      </div>
    </section>
    <section className="gallery-section">
      <Reveal className="shell gallery-heading"><div><Eyebrow>{h.galleryEyebrow}</Eyebrow><h2>{h.galleryTitle} <em>{h.galleryAccent}</em></h2></div><a className="text-link" href="https://instagram.com/standard_egypt" target="_blank" rel="noreferrer">{h.follow} <ArrowUpRight size={17} /></a></Reveal>
      <Reveal className="shell"><MasonryGallery className="home-masonry" label={h.galleryTitle} items={gallerySources.map((src, i) => ({ src, alt: `${h.galleryTitle} ${i + 1}` }))} /></Reveal>
    </section>
    <section className="why-section"><div className="shell why-section__grid">
      <Reveal className="why-section__image"><img src={whyStandardImage} alt={h.imageAlt} loading="lazy" width="600" height="535" /><span className="image-stamp"><Star fill="currentColor" size={20} /> <b>{h.made}<br />{h.mobile}</b></span></Reveal>
      <Reveal delay={120} className="why-section__content"><SectionIntro eyebrow={h.whyEyebrow} title={h.whyTitle} copy={h.whyCopy} /><ul className="check-list">{h.checks.map(text => <li key={text}><Check /> {text}</li>)}</ul><Link className="text-link" to="/about">{h.meet} <ArrowRight size={17} /></Link></Reveal>
    </div></section>
    <Reveal className="testimonial-section shell"><div className="quote-mark">“</div><blockquote>{h.feedback}</blockquote><div className="testimonial-author"><span>{h.feedbackLabel}</span><i /> <span>{h.feedbackType}</span></div></Reveal>
    <CtaBand />
  </>
}

function ServiceCard({ icon, count, title, copy }) {
  return <Link to="/menu" className="service-card"><span className="service-card__count">{count}</span><span className="service-card__icon">{icon}</span><h3>{title}</h3><p>{copy}</p><span className="service-card__arrow"><ArrowRight size={18} /></span></Link>
}

function Menu() {
  const { c } = useLocale()
  const { setIsCartOpen } = useCart()
  const m = c.menu
  usePageMeta()
  
  const handleAddonClick = () => {
    setIsCartOpen(true)
  }
  
  return <><PageHero eyebrow={m.eyebrow} title={<>{m.title} <em>{m.accent}</em></>} copy={m.copy} />
    <section className="section shell package-section">
      <MenuCatalog />
      <OpenBuffetSection />
      <Reveal className="addons"><SectionIntro eyebrow={m.addonsEyebrow} title={m.addonsTitle} /><div className="addon-list">{m.addons.map((item, i) => <button key={item} onClick={handleAddonClick} className="addon-item"><span>{String(i + 1).padStart(2, '0')}</span>{item}<Plus size={17} /></button>)}</div></Reveal>
    </section><CtaBand /></>
}

function OpenBuffetSection() {
  const { c, language } = useLocale()
  const { setIsCartOpen } = useCart()
  const ob = c.menu.openBuffet
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedSection, setSelectedSection] = useState('all')

  const filterItems = (items) => {
    return items.filter(item =>
      item.toLowerCase().includes(searchQuery.toLowerCase())
    )
  }

  const mainItems = filterItems(ob.items)
  const extraItems = filterItems(ob.extras)

  const hasResults = mainItems.length > 0 || extraItems.length > 0

  const handleRequestPackage = () => {
    setIsCartOpen(true)
  }

  return (
    <Reveal className="open-buffet-section">
      <div className="open-buffet-section__header">
        <p className="eyebrow open-buffet-section__eyebrow">{ob.eyebrow}</p>
        <h2>{ob.title}</h2>
        <p className="open-buffet-section__subtitle">{ob.subtitle}</p>
      </div>
      
      <div className="open-buffet-section__controls">
        <div className="open-buffet-section__search">
          <Search size={18} />
          <input
            type="text"
            placeholder={language === 'ar' ? 'ابحث في البوفيه...' : 'Search buffet...'}
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            aria-label="Search buffet"
          />
          {searchQuery && (
            <button onClick={() => setSearchQuery('')} aria-label="Clear search">
              <X size={18} />
            </button>
          )}
        </div>
        
        <div className="open-buffet-section__filter">
          <button
            className={selectedSection === 'all' ? 'active' : ''}
            onClick={() => setSelectedSection('all')}
          >
            {language === 'ar' ? 'الكل' : 'All'}
          </button>
          <button
            className={selectedSection === 'main' ? 'active' : ''}
            onClick={() => setSelectedSection('main')}
          >
            {ob.mainItemsTitle}
          </button>
          <button
            className={selectedSection === 'extras' ? 'active' : ''}
            onClick={() => setSelectedSection('extras')}
          >
            {ob.extrasTitle}
          </button>
        </div>
      </div>

      <div className="open-buffet-section__banner">
        <img src={openBuffetImage} alt={ob.title} loading="lazy" width="1200" height="600" />
      </div>
      
      {hasResults ? (
        <div className="open-buffet-section__body">
          {(selectedSection === 'all' || selectedSection === 'main') && mainItems.length > 0 && (
            <div className="open-buffet-section__col">
              <h3 className="open-buffet-col__title">{ob.mainItemsTitle}</h3>
              <ul className="open-buffet-item-list">
                {mainItems.map((item) => (
                  <OpenBuffetItemRow key={item} item={item} num={ob.items.indexOf(item) + 1} />
                ))}
              </ul>
            </div>
          )}
          {(selectedSection === 'all' || selectedSection === 'extras') && extraItems.length > 0 && (
            <div className="open-buffet-section__col open-buffet-section__col--right">
              <h3 className="open-buffet-col__title">{ob.extrasTitle}</h3>
              <ul className="open-buffet-item-list">
                {extraItems.map((item) => (
                  <OpenBuffetItemRow key={item} item={item} num={ob.extras.indexOf(item) + 1} />
                ))}
              </ul>
            </div>
          )}
        </div>
      ) : (
        <div className="open-buffet-section__no-results">
          <p>{language === 'ar' ? 'لم يتم العثور على نتائج' : 'No results found'}</p>
          <button onClick={() => setSearchQuery('')}>
            {language === 'ar' ? 'مسح البحث' : 'Clear search'}
          </button>
        </div>
      )}
      
      <p className="open-buffet-section__note">{ob.note}</p>
      <div className="open-buffet-section__cta">
        <button className="button button--gold" onClick={handleRequestPackage}>{ob.cta} <ArrowRight size={17} /></button>
      </div>
    </Reveal>
  )
}

function OpenBuffetItemRow({ item, num }) {
  const { addToCart } = useCart()
  const [quantity, setQuantity] = useState(1)
  const [added, setAdded] = useState(false)

  const handleAdd = () => {
    addToCart({
      id: `open-buffet-${item}`.toLowerCase().replace(/\s+/g, '-'),
      name: item,
      quantity,
      note: '',
      collection: 'openBuffet'
    })
    setAdded(true)
    setQuantity(1)
    setTimeout(() => setAdded(false), 1500)
  }

  const handleQuickAdd = (qty) => {
    addToCart({
      id: `open-buffet-${item}`.toLowerCase().replace(/\s+/g, '-'),
      name: item,
      quantity: qty,
      note: '',
      collection: 'openBuffet'
    })
    setAdded(true)
    setTimeout(() => setAdded(false), 1500)
  }

  return (
    <li className="menu-item-row" style={{ borderBottom: '1px dashed rgba(231,223,207,.6)', margin: '0', padding: '9px 0' }}>
      <div className="menu-item-row__name">
        <span className="open-buffet-item-list__num" style={{ marginRight: '10px' }}>{num}</span>
        <span>{item}</span>
      </div>
      <div className="menu-item-row__actions">
        <div className="menu-item-row__qty">
          <button aria-label="Decrease quantity" onClick={() => setQuantity(q => Math.max(1, q - 1))}><Minus size={12} /></button>
          <span>{quantity}</span>
          <button aria-label="Increase quantity" onClick={() => setQuantity(q => q + 1)}><Plus size={12} /></button>
        </div>
        <div className="menu-item-row__presets">
          <button onClick={() => handleQuickAdd(1)} aria-label="Add 1">1</button>
          <button onClick={() => handleQuickAdd(5)} aria-label="Add 5">5</button>
          <button onClick={() => handleQuickAdd(10)} aria-label="Add 10">10</button>
        </div>
        <button
          className={`menu-item-row__add ${added ? 'menu-item-row__add--added' : ''}`}
          onClick={handleAdd}
          aria-label={`Add ${item} to cart`}
        >
          {added ? <Check size={14} /> : <ShoppingCart size={14} />}
        </button>
      </div>
    </li>
  )
}

function About() {
  const { c } = useLocale()
  const { setIsCartOpen } = useCart()
  const a = c.about
  usePageMeta()
  
  const handleTellUsAboutEvent = () => {
    setIsCartOpen(true)
  }
  
  return <><PageHero eyebrow={a.eyebrow} title={<>{a.title} <em>{a.accent}</em></>} copy={a.copy} />
    <section className="section shell story-grid"><Reveal className="story-grid__image"><MasonryGallery className="story-masonry" label={a.imageAlt} items={storyImages.map((src, i) => ({ src, alt: `${a.imageAlt} ${i + 1}` }))} /></Reveal><Reveal delay={110} className="story-grid__content"><SectionIntro eyebrow={a.storyEyebrow} title={a.storyTitle} /><p>{a.p1}</p><p>{a.p2}</p><button className="text-link" onClick={handleTellUsAboutEvent}>{a.event} <ArrowRight size={17} /></button></Reveal></section>
    <section className="occasion-section"><div className="shell"><Reveal><SectionIntro eyebrow={a.occasionEyebrow} title={a.occasionTitle} centered /></Reveal><div className="occasion-grid">{a.occasions.map((title, i) => <Reveal key={title} delay={i * 75}><Occasion icon={i === 0 ? <Heart /> : i === 1 ? <Building2 /> : i === 2 ? <PartyPopper /> : <Users />} title={title} /></Reveal>)}</div></div></section>
    <section className="section shell faq-section">
      <Reveal><SectionIntro eyebrow={c.faq.eyebrow} title={c.faq.title} centered /></Reveal>
      <Reveal delay={100} className="faq-grid">
        {c.faq.items.map((item, i) => <div className="faq-item" key={i}><h3>{item.q}</h3><p>{item.a}</p></div>)}
      </Reveal>
    </section>
    <section className="shell about-gallery"><Reveal className="about-gallery__heading"><p>{a.gallery} <em>{a.galleryAccent}</em></p></Reveal><Reveal delay={85}><MasonryGallery className="about-masonry" label={a.gallery} items={aboutGallerySources.map((src, i) => ({ src, alt: `${a.gallery} ${i + 1}` }))} /></Reveal></section>
    <CtaBand />
  </>
}

function Occasion({ icon, title }) { return <div className="occasion"><span>{icon}</span><h3>{title}</h3><GoldRule /></div> }

function Contact() {
  const { c, language } = useLocale()
  const x = c.contact
  usePageMeta()
  const [sent, setSent] = useState(false)
  const handleSubmit = e => {
    e.preventDefault()
    const honeypot = e.currentTarget.querySelector('input[name="_website"]')
    if (honeypot && honeypot.value) return
    const fields = new FormData(e.currentTarget)
    window.open(buildContactWhatsAppUrl(fields, c, language), '_blank', 'noopener,noreferrer')
    setSent(true)
    e.currentTarget.reset()
  }
  return <><PageHero eyebrow={x.eyebrow} title={<>{x.title} <em>{x.accent}</em></>} copy={x.copy} />
    <section className="section shell contact-layout">
      <Reveal className="contact-form-wrap"><SectionIntro eyebrow={x.formEyebrow} title={x.formTitle} /><form className="contact-form" onSubmit={handleSubmit}>{sent && <div className="form-success"><CircleCheck /> {x.sent}</div>}<input name="_website" type="text" style={{display:'none'}} tabIndex="-1" autoComplete="off" /><div className="form-row"><Field label={x.name} name="name" required /><Field label={x.phone} name="phone" type="tel" required pattern="01[0125][0-9]{8}" title="01xxxxxxxxx" /></div><Field label={x.email} name="email" type="email" placeholder={c.common.optional} /><label>{x.topic}<select name="topic" defaultValue={x.topics[0]}>{x.topics.map(topic => <option key={topic}>{topic}</option>)}</select><ChevronDown /></label><label>{x.message}<textarea name="message" rows="5" required placeholder={x.messagePlaceholder} /></label><button className="button button--navy" type="submit">{x.send} <ArrowRight size={17} /></button></form></Reveal>
      <Reveal delay={120} className="contact-info"><Eyebrow>{x.quick}</Eyebrow><h2>{x.direct}</h2><div className="contact-info__card"><a href={contact.phoneHref}><span><Phone /></span><div><small>{x.call}</small><b>{contact.phoneDisplay}</b></div><ArrowUpRight size={18} /></a><a href={contact.whatsapp} target="_blank" rel="noreferrer"><span><MessageCircle /></span><div><small>{c.common.whatsapp}</small><b>{x.chat}</b></div><ArrowUpRight size={18} /></a><a href={'mailto:' + contact.email}><span><Mail /></span><div><small>{c.common.email}</small><b>{contact.email}</b></div><ArrowUpRight size={18} /></a></div><div className="service-area"><MapPin /><div><b>{x.come}</b><p>{x.area}</p></div></div><div className="map-embed"><iframe title="Standard Catering — Cairo service area" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d221786.59583396408!2d31.18401!3d30.06263!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14583fa60b21beeb%3A0x79dfb296e8423bba!2sCairo%2C%20Egypt!5e0!3m2!1sen!2seg!4v1234567890" width="100%" height="260" style={{border:0,display:'block'}} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe></div></Reveal>
    </section>
  </>
}

function Field({ label, name, type = 'text', placeholder, required = false }) {
  return <label>{label}{required && <sup>*</sup>}<input name={name} type={type} required={required} placeholder={placeholder} /></label>
}

function Order() {
  const { c, language } = useLocale()
  const { items, clearCart } = useCart()
  const o = c.order
  usePageMeta()
  const [searchParams] = useSearchParams()
  const navigate = useNavigate()
  const [step, setStep] = useState(1)
  const [order, setOrder] = useState(() => loadOrderDraft(searchParams))
  const [errors, setErrors] = useState({})
  useEffect(() => { sessionStorage.setItem('standard_order_draft', JSON.stringify(order)) }, [order])
  const update = (key, value) => setOrder(previous => ({ ...previous, [key]: value }))
  const validate = () => {
    const nextErrors = {}
    if (step === 1) {
      if (!order.date) nextErrors.date = o.errors.date
      if (order.date && order.date < new Date().toISOString().slice(0, 10)) nextErrors.date = o.errors.future
      if (!order.time) nextErrors.time = o.errors.time
      if (!order.city) nextErrors.city = o.errors.city
      if (!order.address?.trim()) nextErrors.address = o.errors.address
    }
    if (step === 2) {
      if (!order.name.trim()) nextErrors.name = o.errors.name
      if (!/^01[0125][0-9]{8}$/.test(order.phone.replace(/[\s-]/g, ''))) nextErrors.phone = o.errors.phone
    }
    if (step === 3 && !order.consent) nextErrors.consent = o.errors.consent
    setErrors(nextErrors)
    return !Object.keys(nextErrors).length
  }
  const next = () => { if (validate()) setStep(value => Math.min(value + 1, 3)) }
  const submit = () => {
    if (!validate()) return
    const random = new Uint32Array(1)
    crypto.getRandomValues(random)
    const ref = 'STD-' + new Date().toISOString().slice(0, 10).replaceAll('-', '') + '-' + String(1000 + (random[0] % 9000))
    sessionStorage.removeItem('standard_order_draft')
    window.open(buildOrderWhatsAppUrl(order, items, c, language, ref), '_blank', 'noopener,noreferrer')
    clearCart()
    navigate('/order/success', { state: { order, ref, language } })
  }
  
  const stepLabels = [o.steps[0], o.steps[2], o.steps[3]]

  return <><PageHero eyebrow={o.eyebrow} title={<>{o.title} <em>{o.accent}</em></>} copy={o.copy} />
    <section className="order-section shell"><div className="order-main"><OrderSteps active={step} labels={stepLabels} /><div className="order-card">
      {step === 1 && <StepBasics order={order} update={update} errors={errors} />}
      {step === 2 && <StepDetails order={order} update={update} errors={errors} />}
      {step === 3 && <StepReview order={order} items={items} onEdit={setStep} update={update} errors={errors} />}
      <div className="order-controls">{step > 1 ? <button className="button button--plain" onClick={() => setStep(value => value - 1)}><ChevronLeft size={17} /> {c.common.back}</button> : <span />}{step < 3 ? <button className="button button--navy" onClick={next}>{c.common.continue} <ArrowRight size={17} /></button> : <button className="button button--gold" onClick={submit}>{o.submit} <SendHorizonal size={17} /></button>}</div>
    </div></div><OrderSummary order={order} items={items} /></section>
  </>
}

function OrderSteps({ active, labels }) {
  return <div className="order-steps">{labels.map((label, i) => <div key={label} className={active === i + 1 ? 'active' : active > i + 1 ? 'done' : ''}><span>{active > i + 1 ? <Check size={14} /> : '0' + (i + 1)}</span><b>{label}</b></div>)}</div>
}

function Error({ children }) { return <p className="field-error">{children}</p> }

function StepBasics({ order, update, errors }) {
  const { c } = useLocale()
  const o = c.order
  const b = o.basics
  return <div className="step-content">
    <div className="step-intro">
      <p className="step-number">{b.number}</p>
      <h2>{b.title}</h2>
      <p>{b.copy}</p>
    </div>
    <div className="form-grid">
      <label className={errors.date ? 'has-error' : ''}>
        <span className="field-label"><CalendarDays size={15} /> {b.date} <sup>*</sup></span>
        <input type="date" min={new Date().toISOString().slice(0, 10)} value={order.date} onChange={e => update('date', e.target.value)} />
        {errors.date && <Error>{errors.date}</Error>}
      </label>
      <label className={errors.time ? 'has-error' : ''}>
        <span className="field-label"><Clock size={15} /> {b.time} <sup>*</sup></span>
        <input type="time" value={order.time || ''} onChange={e => update('time', e.target.value)} />
        {errors.time && <Error>{errors.time}</Error>}
      </label>
      <label className={errors.city ? 'has-error' : ''}>
        <span className="field-label"><MapPin size={15} /> {b.city} <sup>*</sup></span>
        <input value={order.city} onChange={e => update('city', e.target.value)} placeholder={b.cityPlaceholder} />
        {errors.city && <Error>{errors.city}</Error>}
      </label>
      <label className={`form-grid__full ${errors.address ? 'has-error' : ''}`}>
        <span className="field-label"><HomeIcon size={15} /> {b.address} <sup>*</sup></span>
        <input value={order.address || ''} onChange={e => update('address', e.target.value)} placeholder={b.addressPlaceholder} />
        {errors.address && <Error>{errors.address}</Error>}
      </label>
    </div>
  </div>
}



function StepDetails({ order, update, errors }) {
  const { c } = useLocale()
  const d = c.order.details
  return <div className="step-content">
    <div className="step-intro">
      <p className="step-number">{d.number}</p>
      <h2>{d.title}</h2>
      <p>{d.copy}</p>
    </div>
    <div className="form-grid">
      <label className={errors.name ? 'has-error' : ''}>
        <span className="field-label"><Users size={15} /> {d.name} <sup>*</sup></span>
        <input value={order.name} onChange={e => update('name', e.target.value)} placeholder={d.name} />
        {errors.name && <Error>{errors.name}</Error>}
      </label>
      <label className={errors.phone ? 'has-error' : ''}>
        <span className="field-label"><Phone size={15} /> {d.mobile} <sup>*</sup></span>
        <input value={order.phone} onChange={e => update('phone', e.target.value)} placeholder="01012345678" inputMode="numeric" />
        {errors.phone && <Error>{errors.phone}</Error>}
      </label>
      <label className="form-grid__full">
        <span className="field-label"><Mail size={15} /> {d.email} <small>{c.common.optional}</small></span>
        <input type="email" value={order.email} onChange={e => update('email', e.target.value)} placeholder="you@example.com" />
      </label>
    </div>
    <label className="full-width notes-label">
      <span className="field-label">{d.notes} <small>{c.common.optional}</small></span>
      <textarea rows="4" value={order.notes} onChange={e => update('notes', e.target.value)} placeholder={d.notesHint} />
    </label>
  </div>
}

function StepReview({ order, items, onEdit, update, errors }) {
  const { c } = useLocale()
  const { setIsCartOpen } = useCart()
  const r = c.order.review
  return <div className="step-content">
    <div className="step-intro">
      <p className="step-number">{c.order.steps[3]}</p>
      <h2>{r.title}</h2>
      <p>{r.copy}</p>
    </div>
    <div className="review-list">
      <ReviewGroup title={r.event} onEdit={() => onEdit(1)} rows={[[r.date, order.date || c.common.notChosen], [r.time, order.time || c.common.notChosen], [r.city, order.city || c.common.notChosen], [r.address, order.address || c.common.notChosen]]} />
      <ReviewGroup title={c.cart.reviewCartItems} onEdit={() => setIsCartOpen(true)} rows={items.map(item => [`${item.quantity}x ${item.name}`, item.note ? `${c.cart.notePrefix} ${item.note}` : '-'])} />
      <ReviewGroup title={r.details} onEdit={() => onEdit(2)} rows={[[r.name, order.name || c.common.notChosen], [r.phone, order.phone || c.common.notChosen]]} />
    </div>
    <label className="consent"><input type="checkbox" checked={order.consent} onChange={e => update('consent', e.target.checked)} /><span>{r.consent}</span></label>
    {errors.consent && <Error>{errors.consent}</Error>}
  </div>
}

function ReviewGroup({ title, rows, onEdit }) {
  const { c } = useLocale()
  return <div><div className="review-list__head"><b>{title}</b><button type="button" onClick={onEdit}>{c.common.edit}</button></div>{rows.map(([label, value]) => <p key={label}><span>{label}</span><strong>{value}</strong></p>)}</div>
}

function OrderSummary({ order, items }) {
  const { c } = useLocale()
  const o = c.order
  const totalItems = items?.reduce((sum, item) => sum + item.quantity, 0) || 0
  return <aside className="order-summary"><p className="eyebrow">{o.summaryEyebrow}</p><h3>{o.summaryTitle}</h3><GoldRule /><dl><div><dt><CalendarDays size={16} /> {o.labels.date}</dt><dd>{order.date || c.common.notChosen}</dd></div><div><dt><Clock size={16} /> {o.labels.time}</dt><dd>{order.time || c.common.notChosen}</dd></div><div><dt><MapPin size={16} /> {o.labels.city}</dt><dd>{order.city || c.common.notChosen}</dd></div><div><dt><ShoppingCart size={16} /> {c.cart.cartLabel}</dt><dd>{totalItems > 0 ? `${totalItems} ${totalItems === 1 ? c.cart.itemOne : c.cart.itemMany}` : c.cart.emptyShort}</dd></div></dl><div className="order-summary__help"><MessageCircle size={20} /><p>{o.chat} <a href={contact.whatsapp} target="_blank" rel="noreferrer">{o.chatLink}</a>.</p></div></aside>
}

function OrderSuccess() {
  const { c, language } = useLocale()
  const s = c.success
  usePageMeta()
  const { state } = useLocation()
  const order = state?.order
  const date = order?.date ? new Date(order.date + 'T00:00:00').toLocaleDateString(language === 'ar' ? 'ar-EG' : 'en-GB', { day: 'numeric', month: 'long', year: 'numeric' }) : ''
  return <section className="success-page"><div className="success-page__shape" /><div className="shell success-page__content"><span className="success-icon"><Check /></span><Eyebrow>{s.eyebrow}</Eyebrow><h1>{s.thank}{order?.name ? (language === 'ar' ? '، ' : ', ') + order.name.split(' ')[0] : ''}.</h1><p>{order ? <>{s.received}{date && <> <strong>{date}</strong></>}. {s.followup}</> : s.generic}</p><div className="reference"><span>{s.ref}</span><b>{state?.ref || 'STD-REQUEST'}</b></div><div className="button-row"><a className="button button--gold" href={contact.whatsapp} target="_blank" rel="noreferrer"><MessageCircle size={17} /> {s.chat}</a><Link className="button button--ghost-dark" to="/">{s.home}</Link></div></div></section>
}

function NotFound() {
  const { c } = useLocale()
  const n = c.notFound
  usePageMeta()
  return <section className="not-found"><div className="shell"><Logo light /><p className="eyebrow">{n.eyebrow}</p><h1>{n.title}<br /><em>{n.accent}</em></h1><p>{n.copy}</p><Link className="button button--gold" to="/">{n.home} <ArrowRight size={17} /></Link></div></section>
}

export function AppRoutes() {
  return <Layout><Routes><Route path="/" element={<Home />} /><Route path="/menu" element={<Menu />} /><Route path="/about" element={<About />} /><Route path="/contact" element={<Contact />} /><Route path="/order" element={<Order />} /><Route path="/order/success" element={<OrderSuccess />} /><Route path="/privacy" element={<PrivacyPolicy />} /><Route path="/terms" element={<Terms />} /><Route path="*" element={<NotFound />} /></Routes><CookieBanner /></Layout>
}

import { CartProvider } from './context/CartContext'
import LeaveWarning from './components/common/LeaveWarning'

export function AppProviders({ children }) {
  return (
    <LocaleProvider>
      <CartProvider>{children}</CartProvider>
    </LocaleProvider>
  )
}

function App() {
  return (
    <BrowserRouter>
      <AppProviders>
        <LeaveWarning />
        <AppRoutes />
      </AppProviders>
    </BrowserRouter>
  )
}

export default App
