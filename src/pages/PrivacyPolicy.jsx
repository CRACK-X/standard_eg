import { useLocale } from "../utils/i18n"
import { usePageMeta } from "../utils/usePageTitle"

export default function PrivacyPolicy() {
  const { c } = useLocale()
  const l = c.legal.p
  usePageMeta()
  return (
    <main className="legal-page shell">
      <h1>{c.legal.privacyTitle}</h1>
      <p className="legal-date">{c.legal.lastUpdated}</p>
      <h2>{l.whoWeAre}</h2>
      <p>{l.whoWeAreText}</p>
      <h2>{l.whatWeCollect}</h2>
      <ul>
        <li><strong>{l.contactForm}</strong> {l.contactFormText}</li>
        <li><strong>{l.orderForm}</strong> {l.orderFormText}</li>
        <li><strong>{l.techData}</strong> {l.techDataText}</li>
      </ul>
      <h2>{l.howWeUse}</h2>
      <p>{l.howWeUseText}</p>
      <h2>{l.howLong}</h2>
      <p>{l.howLongText}</p>
      <h2>{l.yourRights}</h2>
      <p>{l.yourRightsText} <a href="mailto:Standardcatering777@gmail.com">Standardcatering777@gmail.com</a>.</p>
      <h2>{l.contact}</h2>
      <p>{l.contactText}<br />{c.legal.email}: <a href="mailto:Standardcatering777@gmail.com">Standardcatering777@gmail.com</a><br />{c.legal.phone}: <a href="tel:+201277711157">01277711157</a></p>
    </main>
  )
}
