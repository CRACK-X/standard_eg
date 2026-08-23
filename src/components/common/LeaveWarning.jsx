import { useEffect } from 'react';
import { useCart } from '../../context/CartContext';

export default function LeaveWarning() {
  const { items } = useCart();

  useEffect(() => {
    const handleBeforeUnload = (e) => {
      if (items.length > 0) {
        e.preventDefault();
        e.returnValue = '';
      }
    };

    window.addEventListener('beforeunload', handleBeforeUnload);
    return () => window.removeEventListener('beforeunload', handleBeforeUnload);
  }, [items]);

  return null;
}
