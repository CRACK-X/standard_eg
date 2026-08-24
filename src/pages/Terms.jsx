import { useLocale } from "../utils/i18n"
import { usePageMeta } from "../utils/usePageTitle"

export default function Terms() {
  const { c } = useLocale()
  const l = c.legal.p
  usePageMeta()
  return (
    <main className="legal-page shell">
      <h1>{c.legal.termsTitle}</h1>
      <p className="legal-date">{c.legal.lastUpdated}</p>
      <h2>{l.acceptance}</h2>
      <p>{l.acceptanceText}</p>
      <h2>{l.bookings}</h2>
      <p>{l.bookingsText}</p>
      <h2>{l.notice}</h2>
      <p>{l.noticeTextPart1} <strong>{l.noticeTextPart2}</strong> {l.noticeTextPart3}</p>
      <h2>{l.cancellations}</h2>
      <ul>
        <li><strong>{l.cancel7}</strong> {l.cancel7Text}</li>
        <li><strong>{l.cancel3}</strong> {l.cancel3Text}</li>
        <li><strong>{l.cancel48}</strong> {l.cancel48Text}</li>
      </ul>
      <h2>{l.payment}</h2>
      <p>{l.paymentText}</p>
      <h2>{l.dietary}</h2>
      <p>{l.dietaryText}</p>
      <h2>{l.liability}</h2>
      <p>{l.liabilityText}</p>
      <h2>{l.law}</h2>
      <p>{l.lawText}</p>
      <h2>{l.contact}</h2>
      <p>{l.questions} {c.legal.email}: <a href="mailto:Standardcatering777@gmail.com">Standardcatering777@gmail.com</a> | {c.legal.phone}: <a href="tel:+201277711157">01277711157</a>.</p>
    </main>
  )
}
