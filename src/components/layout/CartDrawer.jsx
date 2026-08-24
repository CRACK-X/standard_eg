import React, { useEffect } from 'react';
import { useCart } from '../../context/CartContext';
import { X, Plus, Minus, Trash2, ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useLocale } from '../../utils/i18n';

export default function CartDrawer() {
  const { items, isCartOpen, setIsCartOpen, updateQuantity, updateNote, removeFromCart } = useCart();
  const navigate = useNavigate();
  const { c } = useLocale();
  const t = c.cart;

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && isCartOpen) {
        setIsCartOpen(false);
      }
    };
    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [isCartOpen, setIsCartOpen]);

  // Prevent body scroll while the drawer is open.
  useEffect(() => {
    if (isCartOpen) {
      document.body.style.overflow = 'hidden';
    }
    return () => { document.body.style.overflow = ''; };
  }, [isCartOpen]);

  if (!isCartOpen) return null;

  return (
    <>
      <div className="cart-drawer-overlay" onClick={() => setIsCartOpen(false)} aria-label={t.close} />
      <div className="cart-drawer" role="dialog" aria-modal="true" aria-label={t.title}>
        <div className="cart-drawer__header">
          <h2>{t.title} ({items.reduce((sum, item) => sum + item.quantity, 0)})</h2>
          <button className="cart-drawer__close" onClick={() => setIsCartOpen(false)} aria-label={t.close}>
            <X size={24} />
          </button>
        </div>

        <div className="cart-drawer__body">
          {items.length === 0 ? (
            <div className="cart-drawer__empty">
              <p>{t.empty}</p>
              <button className="button button--navy" onClick={() => { setIsCartOpen(false); navigate('/menu'); }}>
                {t.browse}
              </button>
            </div>
          ) : (
            <ul className="cart-drawer__items">
              {items.map((item) => (
                <li key={item.id + item.note} className="cart-item">
                  <div className="cart-item__details">
                    <h3>{item.name}</h3>

                    <div className="cart-item__controls">
                      <div className="quantity-selector">
                        <button
                          aria-label={t.decrease}
                          onClick={() => updateQuantity(item.id, item.note, item.quantity - 1)}
                          disabled={item.quantity <= 1}
                        >
                          <Minus size={14} />
                        </button>
                        <span>{item.quantity}</span>
                        <button
                          aria-label={t.increase}
                          onClick={() => updateQuantity(item.id, item.note, item.quantity + 1)}
                        >
                          <Plus size={14} />
                        </button>
                      </div>

                      <button
                        className="cart-item__remove"
                        aria-label={`${t.remove} ${item.name}`}
                        onClick={() => removeFromCart(item.id, item.note)}
                      >
                        <Trash2 size={16} />
                      </button>
                    </div>

                    <label className="cart-item__note">
                      <small>{t.note}</small>
                      <input
                        type="text"
                        value={item.note}
                        onChange={(e) => updateNote(item.id, item.note, e.target.value)}
                        placeholder={t.notePlaceholder}
                        aria-label={t.specialRequests}
                      />
                    </label>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>

        {items.length > 0 && (
          <div className="cart-drawer__footer">
            <button
              className="button button--gold full-width-btn"
              onClick={() => { setIsCartOpen(false); navigate('/order'); }}
            >
              {t.checkout} <ArrowRight size={17} />
            </button>
          </div>
        )}
      </div>
    </>
  );
}
