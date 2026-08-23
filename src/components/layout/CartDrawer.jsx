import React, { useEffect } from 'react';
import { useCart } from '../../context/CartContext';
import { X, Plus, Minus, Trash2, ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export default function CartDrawer() {
  const { items, isCartOpen, setIsCartOpen, updateQuantity, updateNote, removeFromCart } = useCart();
  const navigate = useNavigate();

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && isCartOpen) {
        setIsCartOpen(false);
      }
    };
    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [isCartOpen, setIsCartOpen]);

  // Trap focus (simple version: just prevent body scroll)
  useEffect(() => {
    if (isCartOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => { document.body.style.overflow = 'unset'; };
  }, [isCartOpen]);

  if (!isCartOpen) return null;

  return (
    <>
      <div className="cart-drawer-overlay" onClick={() => setIsCartOpen(false)} aria-label="Close cart" />
      <div className="cart-drawer" role="dialog" aria-modal="true" aria-label="Order Cart">
        <div className="cart-drawer__header">
          <h2>Order Cart ({items.reduce((sum, item) => sum + item.quantity, 0)})</h2>
          <button className="cart-drawer__close" onClick={() => setIsCartOpen(false)} aria-label="Close cart">
            <X size={24} />
          </button>
        </div>

        <div className="cart-drawer__body">
          {items.length === 0 ? (
            <div className="cart-drawer__empty">
              <p>Your cart is empty.</p>
              <button className="button button--navy" onClick={() => { setIsCartOpen(false); navigate('/menu'); }}>
                Browse Menu
              </button>
            </div>
          ) : (
            <ul className="cart-drawer__items">
              {items.map((item) => (
                <li key={item.id + item.note} className="cart-item">
                  <img src={item.image} alt={item.name} className="cart-item__image" />
                  <div className="cart-item__details">
                    <h3>{item.name}</h3>
                    
                    <div className="cart-item__controls">
                      <div className="quantity-selector">
                        <button 
                          aria-label="Decrease quantity"
                          onClick={() => updateQuantity(item.id, item.note, item.quantity - 1)}
                          disabled={item.quantity <= 1}
                        >
                          <Minus size={14} />
                        </button>
                        <span>{item.quantity}</span>
                        <button 
                          aria-label="Increase quantity"
                          onClick={() => updateQuantity(item.id, item.note, item.quantity + 1)}
                        >
                          <Plus size={14} />
                        </button>
                      </div>
                      
                      <button 
                        className="cart-item__remove" 
                        aria-label={`Remove ${item.name}`}
                        onClick={() => removeFromCart(item.id, item.note)}
                      >
                        <Trash2 size={16} />
                      </button>
                    </div>

                    <label className="cart-item__note">
                      <small>Note (optional)</small>
                      <input 
                        type="text" 
                        value={item.note} 
                        onChange={(e) => updateNote(item.id, item.note, e.target.value)} 
                        placeholder="e.g. no onions"
                        aria-label="Special requests"
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
              Checkout <ArrowRight size={17} />
            </button>
          </div>
        )}
      </div>
    </>
  );
}
