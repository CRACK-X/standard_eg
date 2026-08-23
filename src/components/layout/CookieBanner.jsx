import { useEffect, useState } from "react"
import { useLocale } from "../../utils/i18n"

export default function CookieBanner() {
  const [visible, setVisible] = useState(false)
  const { c } = useLocale()

  useEffect(() => {
    try {
      if (!localStorage.getItem("sc_cookie_consent")) setVisible(true)
    } catch { setVisible(true) }
  }, [])

  const accept = () => {
    try { localStorage.setItem("sc_cookie_consent", "1") } catch {}
    setVisible(false)
  }

  const dismiss = () => {
    try { localStorage.setItem("sc_cookie_consent", "0") } catch {}
    setVisible(false)
  }

  if (!visible) return null

  return (
    <div className="cookie-banner" role="dialog" aria-live="polite" aria-label="Cookie consent">
      <p className="cookie-banner__text">
        {c.cookie.text}
      </p>
      <div className="cookie-banner__actions">
        <button className="button button--gold cookie-banner__btn" onClick={accept}>{c.cookie.accept}</button>
        <button className="button button--plain cookie-banner__btn" onClick={dismiss}>{c.cookie.dismiss}</button>
      </div>
    </div>
  )
}
