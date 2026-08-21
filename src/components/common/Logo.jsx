import { Flame } from 'lucide-react'
import { Link } from 'react-router-dom'
import { useLocale } from '../../utils/i18n'

export default function Logo({ light = false }) {
  const { language } = useLocale()

  return <Link className={'logo ' + (light ? 'logo--light' : '')} to="/" aria-label={language === 'ar' ? 'العودة إلى الرئيسية' : 'Standard home'}>
    <span className="logo__flame"><Flame size={14} fill="currentColor" /></span>
    <span>STANDARD</span><i aria-hidden="true" />
  </Link>
}
