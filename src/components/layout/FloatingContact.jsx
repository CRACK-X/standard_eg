import { MessageCircle } from 'lucide-react'
import { useLocale } from '../../utils/i18n'
import { contact } from '../../utils/siteData'

export default function FloatingContact() {
  const { language } = useLocale()
  
  const label = language === 'ar' ? 'تحدث معنا' : 'Let’s talk'
  const ariaLabel = language === 'ar' ? 'تحدث معنا عبر واتساب' : 'Chat with Standard on WhatsApp'

  return (
    <a 
      className="floating-contact" 
      href={contact.whatsapp} 
      target="_blank" 
      rel="noreferrer" 
      aria-label={ariaLabel}
    >
      <MessageCircle size={23} />
      <span>{label}</span>
    </a>
  )
}
