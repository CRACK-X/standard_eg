import { useEffect, useState } from 'react'
import {
  ArrowRight, ArrowUpRight, Building2, CalendarDays, Check, ChevronDown,
  ChevronLeft, CircleCheck, Heart, Mail, MapPin, MessageCircle, Phone,
  Plus, Sparkles, Star, Truck, Users, UtensilsCrossed,
} from 'lucide-react'
import {
  BrowserRouter, Link, Route, Routes, useLocation, useNavigate,
  useSearchParams,
} from 'react-router-dom'
import { LocaleProvider, useLocale } from './utils/i18n'
import Logo from './components/common/Logo'
import Reveal from './components/common/Reveal'
import SectionIntro, { Eyebrow, GoldRule } from './components/common/SectionIntro'
import { lazy, Suspense } from 'react'
import Layout from './components/layout/Layout'
import CookieBanner from './components/layout/CookieBanner'

const CtaBand = lazy(() => import('./components/marketing/CtaBand'))
const MenuCatalog = lazy(() => import('./components/marketing/MenuCatalog'))
const MasonryGallery = lazy(() => import('./components/marketing/MasonryGallery'))
const PageHero = lazy(() => import('./components/marketing/PageHero'))
const TrustMarquee = lazy(() => import('./components/marketing/TrustMarquee'))
const PrivacyPolicy = lazy(() => import('./pages/PrivacyPolicy'))
const Terms = lazy(() => import('./pages/Terms'))
import { addonKeys, contact, gallerySources, heroImage, packageItems, serviceKeys, storyImage, whyStandardImage } from './utils/siteData'
import { loadOrderDraft, readableOrder } from './utils/order'
import { buildOrderWhatsAppUrl } from './utils/whatsapp'
import { usePageTitle } from './utils/usePageTitle'
import './styles/app.css'


function Home() {
  const { c } = useLocale()
  const h = c.home
  usePageTitle(h.pageTitle)
  return <>
    <section className="home-hero">
      <img src={heroImage} alt="" className="home-hero__bg" fetchPriority="high" loading="eager" width="1200" height="800" />
      <div className="home-hero__shade" />
      <div className="shell home-hero__content hero-entrance">
        <Eyebrow>{h.eyebrow}</Eyebrow>
        <h1>{h.titleStart}<br />{h.titleMiddle} <em>{h.titleAccent}</em></h1>
        <p>{h.intro}</p>
        <div className="button-row"><Link className="button button--gold" to="/order">{h.quote} <ArrowRight size={17} /></Link><Link className="button button--ghost" to="/menu">{h.packages}</Link></div>
        <div className="hero-scroll"><span /> {h.scroll}</div>
      </div>
    </section>
    <section className="trust-strip"><div className="shell trust-strip__inner"><span className="trust-strip__label">{h.trusted}</span><TrustMarquee label={h.trusted} /></div></section>
    <section className="section shell services-section">
      <Reveal><SectionIntro eyebrow={h.servicesEyebrow} title={h.servicesTitle} copy={h.servicesCopy} centered /></Reveal>
      <div className="service-grid">
        {h.services.map((service, index) => <Reveal key={service.title} delay={index * 85}><ServiceCard icon={index === 0 ? <Heart /> : index === 1 ? <Building2 /> : index === 2 ? <Sparkles /> : <Truck />} count={'0' + (index + 1)} title={service.title} copy={service.copy} /></Reveal>)}
      </div>
    </section>
    <section className="gallery-section">
      <Reveal className="shell gallery-heading"><div><Eyebrow>{h.galleryEyebrow}</Eyebrow><h2>{h.galleryTitle} <em>{h.galleryAccent}</em></h2></div><a className="text-link" href="https://instagram.com/standard_egypt" target="_blank" rel="noreferrer">{h.follow} <ArrowUpRight size={17} /></a></Reveal>
      <Reveal className="shell"><MasonryGallery className="home-masonry" label={h.galleryTitle} items={gallerySources.map((src, i) => ({ src, alt: c.galleryAlt[i] }))} /></Reveal>
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
  const m = c.menu
  usePageTitle(m.pageTitle)
  const [filter, setFilter] = useState('all')
  const categories = ['all', 'weddings', 'corporate', 'birthdays', 'trucks']
  const visible = filter === 'all' ? packageItems : packageItems.filter(item => item.category === filter)
  return <><PageHero eyebrow={m.eyebrow} title={<>{m.title} <em>{m.accent}</em></>} copy={m.copy} />
    <section className="section shell package-section">
      <div className="filter-tabs" role="tablist" aria-label={m.filter}>{categories.map(category => <button key={category} role="tab" aria-selected={filter === category} onClick={() => setFilter(category)} className={filter === category ? 'active' : ''}>{m.categories[category]}</button>)}</div>
      <div className="package-grid">{visible.map((item, index) => <Reveal key={item.id} delay={index * 70}><PackageCard item={item} /></Reveal>)}</div>
      <MenuCatalog />
      <Reveal className="addons"><SectionIntro eyebrow={m.addonsEyebrow} title={m.addonsTitle} /><div className="addon-list">{m.addons.map((item, i) => <Link key={item} to={'/order?service=' + addonKeys[i]}><span>{String(i + 1).padStart(2, '0')}</span>{item}<Plus size={17} /></Link>)}</div></Reveal>
    </section><CtaBand /></>
}

function PackageCard({ item }) {
  const { c } = useLocale()
  const details = c.packages[item.id]
  return <article className="package-card"><div className="package-card__image"><img src={item.image} alt={details.title} loading="lazy" width="600" height="400" /><span>{c.menu.categories[item.category]}</span></div><div className="package-card__body"><h2>{details.title}</h2><p>{details.description}</p><ul>{details.features.map(feature => <li key={feature}><Check size={14} />{feature}</li>)}</ul><div className="package-card__bottom"><Link to={'/order?package=' + item.id}>{c.common.requestThis} <ArrowRight size={16} /></Link></div></div></article>
}

function About() {
  const { c } = useLocale()
  const a = c.about
  usePageTitle(a.pageTitle)
  return <><PageHero eyebrow={a.eyebrow} title={<>{a.title} <em>{a.accent}</em></>} copy={a.copy} />
    <section className="section shell story-grid"><Reveal className="story-grid__image"><MasonryGallery className="story-masonry" label={a.imageAlt} items={[{ src: storyImage, alt: a.imageAlt }, { src: gallerySources[0], alt: c.galleryAlt[0] }, { src: gallerySources[3], alt: c.galleryAlt[3] }]} /></Reveal><Reveal delay={110} className="story-grid__content"><SectionIntro eyebrow={a.storyEyebrow} title={a.storyTitle} /><p>{a.p1}</p><p>{a.p2}</p><Link className="text-link" to="/order">{a.event} <ArrowRight size={17} /></Link></Reveal></section>
    <section className="occasion-section"><div className="shell"><Reveal><SectionIntro eyebrow={a.occasionEyebrow} title={a.occasionTitle} centered /></Reveal><div className="occasion-grid">{a.occasions.map((title, i) => <Reveal key={title} delay={i * 75}><Occasion icon={i === 0 ? <Heart /> : i === 1 ? <Building2 /> : i === 2 ? <Sparkles /> : <Users />} title={title} /></Reveal>)}</div></div></section>
    <section className="section shell faq-section">
      <Reveal><SectionIntro eyebrow={c.faq.eyebrow} title={c.faq.title} centered /></Reveal>
      <Reveal delay={100} className="faq-grid">
        {c.faq.items.map((item, i) => <div className="faq-item" key={i}><h4>{item.q}</h4><p>{item.a}</p></div>)}
      </Reveal>
    </section>
    <section className="shell about-gallery"><Reveal className="about-gallery__heading"><p>{a.gallery} <em>{a.galleryAccent}</em></p></Reveal><Reveal delay={85}><MasonryGallery className="about-masonry" label={a.gallery} items={[gallerySources[3], gallerySources[5], gallerySources[1], gallerySources[0], gallerySources[4], gallerySources[2]].map((src, i) => ({ src, alt: c.galleryAlt[[3, 5, 1, 0, 4, 2][i]] }))} /></Reveal></section>
    <CtaBand />
  </>
}

function Occasion({ icon, title }) { return <div className="occasion"><span>{icon}</span><h3>{title}</h3><GoldRule /></div> }

function Contact() {
  const { c } = useLocale()
  const x = c.contact
  usePageTitle(x.pageTitle)
  const [sent, setSent] = useState(false)
  const handleSubmit = e => {
    e.preventDefault()
    const honeypot = e.currentTarget.querySelector('input[name="_website"]')
    if (honeypot && honeypot.value) return
    setSent(true)
    e.currentTarget.reset()
  }
  return <><PageHero eyebrow={x.eyebrow} title={<>{x.title} <em>{x.accent}</em></>} copy={x.copy} />
    <section className="section shell contact-layout">
      <Reveal className="contact-form-wrap"><SectionIntro eyebrow={x.formEyebrow} title={x.formTitle} /><form className="contact-form" onSubmit={handleSubmit}>{sent && <div className="form-success"><CircleCheck /> {x.sent}</div>}<input name="_website" type="text" style={{display:'none'}} tabIndex="-1" autoComplete="off" /><div className="form-row"><Field label={x.name} name="name" required /><Field label={x.phone} name="phone" type="tel" required /></div><Field label={x.email} name="email" type="email" placeholder={c.common.optional} /><label>{x.topic}<select name="topic" defaultValue={x.topics[0]}>{x.topics.map(topic => <option key={topic}>{topic}</option>)}</select><ChevronDown /></label><label>{x.message}<textarea name="message" rows="5" required placeholder={x.messagePlaceholder} /></label><button className="button button--navy" type="submit">{x.send} <ArrowRight size={17} /></button></form></Reveal>
      <Reveal delay={120} className="contact-info"><Eyebrow>{x.quick}</Eyebrow><h2>{x.direct}</h2><div className="contact-info__card"><a href={contact.phoneHref}><span><Phone /></span><div><small>{x.call}</small><b>{contact.phoneDisplay}</b></div><ArrowUpRight size={18} /></a><a href={contact.whatsapp} target="_blank" rel="noreferrer"><span><MessageCircle /></span><div><small>{c.common.whatsapp}</small><b>{x.chat}</b></div><ArrowUpRight size={18} /></a><a href={'mailto:' + contact.email}><span><Mail /></span><div><small>{c.common.email}</small><b>{contact.email}</b></div><ArrowUpRight size={18} /></a></div><div className="service-area"><MapPin /><div><b>{x.come}</b><p>{x.area}</p></div></div><div className="map-embed"><iframe title="Standard Catering — Cairo service area" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d221786.59583396408!2d31.18401!3d30.06263!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14583fa60b21beeb%3A0x79dfb296e8423bba!2sCairo%2C%20Egypt!5e0!3m2!1sen!2seg!4v1234567890" width="100%" height="260" style={{border:0,display:'block'}} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe></div><p className="contact-note">{x.note}</p></Reveal>
    </section>
  </>
}

function Field({ label, name, type = 'text', placeholder, required = false }) {
  return <label>{label}{required && <sup>*</sup>}<input name={name} type={type} required={required} placeholder={placeholder} /></label>
}

function Order() {
  const { c, language } = useLocale()
  const o = c.order
  usePageTitle(o.pageTitle)
  const [searchParams] = useSearchParams()
  const navigate = useNavigate()
  const [step, setStep] = useState(1)
  const [order, setOrder] = useState(() => loadOrderDraft(searchParams))
  const [errors, setErrors] = useState({})
  useEffect(() => { sessionStorage.setItem('standard_order_draft', JSON.stringify(order)) }, [order])
  const update = (key, value) => setOrder(previous => ({ ...previous, [key]: value }))
  const toggleService = value => update('services', order.services.includes(value) ? order.services.filter(item => item !== value) : [...order.services, value])
  const validate = () => {
    const nextErrors = {}
    if (step === 1) {
      if (!order.eventType) nextErrors.eventType = o.errors.type
      if (!order.date) nextErrors.date = o.errors.date
      if (order.date && order.date < new Date().toISOString().slice(0, 10)) nextErrors.date = o.errors.future
      if (!order.guests) nextErrors.guests = o.errors.guests
      if (!order.city) nextErrors.city = o.errors.city
    }
    if (step === 2 && !order.services.length) nextErrors.services = o.errors.services
    if (step === 3) {
      if (!order.name.trim()) nextErrors.name = o.errors.name
      if (!/^01[0125][0-9]{8}$/.test(order.phone.replace(/[\s-]/g, ''))) nextErrors.phone = o.errors.phone
    }
    if (step === 4 && !order.consent) nextErrors.consent = o.errors.consent
    setErrors(nextErrors)
    return !Object.keys(nextErrors).length
  }
  const next = () => { if (validate()) setStep(value => Math.min(value + 1, 4)) }
  const submit = () => {
    if (!validate()) return
    const ref = 'STD-' + new Date().toISOString().slice(0, 10).replaceAll('-', '') + '-' + Math.floor(1000 + Math.random() * 9000)
    sessionStorage.removeItem('standard_order_draft')
    window.open(buildOrderWhatsAppUrl(order, c, language, ref), '_blank', 'noopener,noreferrer')
    navigate('/order/success', { state: { order, ref, language } })
  }
  return <><PageHero eyebrow={o.eyebrow} title={<>{o.title} <em>{o.accent}</em></>} copy={o.copy} />
    <section className="order-section shell"><div className="order-main"><OrderSteps active={step} labels={o.steps} /><div className="order-card">
      {step === 1 && <StepBasics order={order} update={update} errors={errors} />}
      {step === 2 && <StepServices order={order} toggleService={toggleService} update={update} errors={errors} />}
      {step === 3 && <StepDetails order={order} update={update} errors={errors} />}
      {step === 4 && <StepReview order={order} onEdit={setStep} update={update} errors={errors} />}
      <div className="order-controls">{step > 1 ? <button className="button button--plain" onClick={() => setStep(value => value - 1)}><ChevronLeft size={17} /> {c.common.back}</button> : <span />}{step < 4 ? <button className="button button--navy" onClick={next}>{c.common.continue} <ArrowRight size={17} /></button> : <button className="button button--gold" onClick={submit}>{o.submit} <ArrowRight size={17} /></button>}</div>
    </div></div><OrderSummary order={order} /></section>
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
  return <div className="step-content"><div><p className="step-number">{b.number}</p><h2>{b.title}</h2><p>{b.copy}</p></div><div className="form-grid">
    <label>{b.type} <sup>*</sup><select value={order.eventType} onChange={e => update('eventType', e.target.value)}><option value="">{b.typePlaceholder}</option><option value="wedding">{o.eventTypes.wedding}</option><option value="engagement">{o.eventTypes.engagement}</option><option value="corporate">{o.eventTypes.corporate}</option><option value="birthday">{o.eventTypes.birthday}</option><option value="shower">{o.eventTypes.shower}</option><option value="other">{o.eventTypes.other}</option></select>{errors.eventType && <Error>{errors.eventType}</Error>}</label>
    <label>{b.date} <sup>*</sup><input type="date" min={new Date().toISOString().slice(0, 10)} value={order.date} onChange={e => update('date', e.target.value)} />{errors.date && <Error>{errors.date}</Error>}</label>
    <label>{b.guests} <sup>*</sup><select value={order.guests} onChange={e => update('guests', e.target.value)}><option value="">{b.guestsPlaceholder}</option><option value="under50">{o.guestRanges.under50}</option><option value="from50">{o.guestRanges.from50}</option><option value="from100">{o.guestRanges.from100}</option><option value="over250">{o.guestRanges.over250}</option></select>{errors.guests && <Error>{errors.guests}</Error>}</label>
    <label>{b.city} <sup>*</sup><input value={order.city} onChange={e => update('city', e.target.value)} placeholder={b.cityPlaceholder} />{errors.city && <Error>{errors.city}</Error>}</label>
  </div></div>
}

function StepServices({ order, toggleService, update, errors }) {
  const { c } = useLocale()
  const o = c.order
  const s = o.services
  const extras = order.services.filter(item => !serviceKeys.includes(item))
  return <div className="step-content"><div><p className="step-number">{s.number}</p><h2>{s.title}</h2><p>{s.copy}</p></div>
    <div className="service-choice-grid">{serviceKeys.map(key => <button type="button" onClick={() => toggleService(key)} className={order.services.includes(key) ? 'selected' : ''} key={key}><span>{order.services.includes(key) && <Check size={15} />}</span>{s[key]}</button>)}{extras.map(id => <button type="button" onClick={() => toggleService(id)} className="selected" key={id}><span><Check size={15} /></span>{s[id] || c.packages[id]?.title || id}</button>)}</div>
    {errors.services && <Error>{errors.services}</Error>}
    <label className="full-width">{s.label} <small>{s.hint}</small><select value={order.budget} onChange={e => update('budget', e.target.value)}><option value="">{s.discuss}</option><option value="under20">{o.budgets.under20}</option><option value="from20">{o.budgets.from20}</option><option value="from50">{o.budgets.from50}</option><option value="over100">{o.budgets.over100}</option></select></label>
  </div>
}

function StepDetails({ order, update, errors }) {
  const { c } = useLocale()
  const d = c.order.details
  return <div className="step-content"><div><p className="step-number">{d.number}</p><h2>{d.title}</h2><p>{d.copy}</p></div><div className="form-grid">
    <label>{d.name} <sup>*</sup><input value={order.name} onChange={e => update('name', e.target.value)} placeholder={d.name} />{errors.name && <Error>{errors.name}</Error>}</label>
    <label>{d.mobile} <sup>*</sup><input value={order.phone} onChange={e => update('phone', e.target.value)} placeholder="01012345678" inputMode="numeric" />{errors.phone && <Error>{errors.phone}</Error>}</label>
    <label>{d.email} <small>{c.common.optional}</small><input type="email" value={order.email} onChange={e => update('email', e.target.value)} placeholder="you@example.com" /></label>
    <fieldset><legend>{d.contact}</legend><div className="radio-group">{['phone', 'whatsapp', 'email'].map(method => <label key={method}><input type="radio" checked={order.contactMethod === method} onChange={() => update('contactMethod', method)} /> <span>{c.common[method]}</span></label>)}</div></fieldset>
  </div><label className="full-width notes-label">{d.notes} <small>{c.common.optional}</small><textarea rows="4" value={order.notes} onChange={e => update('notes', e.target.value)} placeholder={d.notesHint} /></label></div>
}

function StepReview({ order, onEdit, update, errors }) {
  const { c } = useLocale()
  const r = c.order.review
  return <div className="step-content"><div><p className="step-number">{r.number}</p><h2>{r.title}</h2><p>{r.copy}</p></div><div className="review-list">
    <ReviewGroup title={r.event} onEdit={() => onEdit(1)} rows={[[r.type, readableOrder(order, c, 'eventType')], [r.date, order.date || c.common.notChosen], [r.guestCount, readableOrder(order, c, 'guests')], [r.city, order.city || c.common.notChosen]]} />
    <ReviewGroup title={r.selections} onEdit={() => onEdit(2)} rows={[[r.services, readableOrder(order, c, 'services')], [r.budget, readableOrder(order, c, 'budget')]]} />
    <ReviewGroup title={r.details} onEdit={() => onEdit(3)} rows={[[r.name, order.name || c.common.notChosen], [r.phone, order.phone || c.common.notChosen], [r.contact, readableOrder(order, c, 'contactMethod')]]} />
  </div><label className="consent"><input type="checkbox" checked={order.consent} onChange={e => update('consent', e.target.checked)} /><span>{r.consent}</span></label>{errors.consent && <Error>{errors.consent}</Error>}</div>
}

function ReviewGroup({ title, rows, onEdit }) {
  const { c } = useLocale()
  return <div><div className="review-list__head"><b>{title}</b><button type="button" onClick={onEdit}>{c.common.edit}</button></div>{rows.map(([label, value]) => <p key={label}><span>{label}</span><strong>{value}</strong></p>)}</div>
}

function OrderSummary({ order }) {
  const { c } = useLocale()
  const o = c.order
  return <aside className="order-summary"><p className="eyebrow">{o.summaryEyebrow}</p><h3>{o.summaryTitle}</h3><GoldRule /><dl><div><dt><CalendarDays size={16} /> {o.labels.occasion}</dt><dd>{readableOrder(order, c, 'eventType')}</dd></div><div><dt><Users size={16} /> {o.labels.guests}</dt><dd>{readableOrder(order, c, 'guests')}</dd></div><div><dt><MapPin size={16} /> {o.labels.city}</dt><dd>{order.city || c.common.notChosen}</dd></div><div><dt><UtensilsCrossed size={16} /> {o.labels.services}</dt><dd>{readableOrder(order, c, 'services')}</dd></div></dl><div className="order-summary__help"><MessageCircle size={20} /><p>{o.chat} <a href={contact.whatsapp} target="_blank" rel="noreferrer">{o.chatLink}</a>.</p></div></aside>
}

function OrderSuccess() {
  const { c, language } = useLocale()
  const s = c.success
  usePageTitle(s.pageTitle)
  const { state } = useLocation()
  const order = state?.order
  const date = order?.date ? new Date(order.date + 'T00:00:00').toLocaleDateString(language === 'ar' ? 'ar-EG' : 'en-GB', { day: 'numeric', month: 'long', year: 'numeric' }) : ''
  const type = order ? readableOrder(order, c, 'eventType') : ''
  return <section className="success-page"><div className="success-page__shape" /><div className="shell success-page__content"><span className="success-icon"><Check /></span><Eyebrow>{s.eyebrow}</Eyebrow><h1>{s.thank}{order?.name ? (language === 'ar' ? '، ' : ', ') + order.name.split(' ')[0] : ''}.</h1><p>{order ? <>{s.received} <strong>{type}</strong>{date && <> {s.receivedDate} <strong>{date}</strong></>}. {s.followup}</> : s.generic}</p><div className="reference"><span>{s.ref}</span><b>{state?.ref || 'STD-REQUEST'}</b></div><div className="button-row"><a className="button button--gold" href={contact.whatsapp} target="_blank" rel="noreferrer"><MessageCircle size={17} /> {s.chat}</a><Link className="button button--ghost-dark" to="/">{s.home}</Link></div></div></section>
}

function NotFound() {
  const { c } = useLocale()
  const n = c.notFound
  usePageTitle(n.pageTitle)
  return <section className="not-found"><div className="shell"><Logo light /><p className="eyebrow">{n.eyebrow}</p><h1>{n.title}<br /><em>{n.accent}</em></h1><p>{n.copy}</p><Link className="button button--gold" to="/">{n.home} <ArrowRight size={17} /></Link></div></section>
}

function AppRoutes() {
  return <Layout><Suspense fallback={<div className="loading-fallback" role="status" aria-live="polite">Loading...</div>}><Routes><Route path="/" element={<Home />} /><Route path="/menu" element={<Menu />} /><Route path="/about" element={<About />} /><Route path="/contact" element={<Contact />} /><Route path="/order" element={<Order />} /><Route path="/order/success" element={<OrderSuccess />} /><Route path="/privacy" element={<PrivacyPolicy />} /><Route path="/terms" element={<Terms />} /><Route path="*" element={<NotFound />} /></Routes></Suspense><CookieBanner /></Layout>
}

function App() {
  return <BrowserRouter><LocaleProvider><AppRoutes /></LocaleProvider></BrowserRouter>
}

export default App
