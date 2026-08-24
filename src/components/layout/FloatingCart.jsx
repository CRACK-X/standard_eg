import { ShoppingCart } from 'lucide-react'
import { useCart } from '../../context/CartContext'
import { useLocation } from 'react-router-dom'
import { useLocale } from '../../utils/i18n'

export default function FloatingCart() {
  const { items, setIsCartOpen } = useCart()
  const location = useLocation()
  const { c } = useLocale()

  const totalItems = items.reduce((sum, item) => sum + item.quantity, 0)

  // Don't show the floating cart button if the cart is empty or if we are NOT on the menu page
  if (totalItems === 0 || location.pathname !== '/menu') return null

  return (
    <div className="floating-cart-wrapper">
      <button
        className="floating-cart"
        onClick={() => setIsCartOpen(true)}
        aria-label={c.cart.open}
      >
        <span className="floating-cart__badge">{totalItems}</span>
        <span className="floating-cart__label">{c.cart.view}</span>
        <span className="floating-cart__icon"><ShoppingCart size={20} /></span>
      </button>
    </div>
  )
}
