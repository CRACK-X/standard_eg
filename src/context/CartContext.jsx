import React, { createContext, useContext, useReducer, useEffect, useState } from 'react';

const CartContext = createContext(undefined);

function initCart() {
  try {
    return { items: JSON.parse(localStorage.getItem('standard_cart') || '[]') };
  } catch {
    return { items: [] };
  }
}

function cartReducer(state, action) {
  switch (action.type) {
    case 'ADD_ITEM': {
      const existingItemIndex = state.items.findIndex(
        item => item.id === action.payload.id && item.note === action.payload.note
      );
      if (existingItemIndex >= 0) {
        const newItems = [...state.items];
        newItems[existingItemIndex].quantity += action.payload.quantity;
        return { ...state, items: newItems };
      }
      return { ...state, items: [...state.items, action.payload] };
    }
    case 'UPDATE_QUANTITY': {
      return {
        ...state,
        items: state.items.map(item =>
          item.id === action.payload.id && item.note === action.payload.oldNote
            ? { ...item, quantity: Math.max(1, action.payload.quantity) }
            : item
        ),
      };
    }
    case 'UPDATE_NOTE': {
      return {
        ...state,
        items: state.items.map(item =>
          item.id === action.payload.id && item.note === action.payload.oldNote
            ? { ...item, note: action.payload.newNote }
            : item
        ),
      };
    }
    case 'REMOVE_ITEM': {
      return {
        ...state,
        items: state.items.filter(
          item => !(item.id === action.payload.id && item.note === action.payload.note)
        ),
      };
    }
    case 'CLEAR_CART': {
      return { ...state, items: [] };
    }
    default:
      return state;
  }
}

export function CartProvider({ children }) {
  const [state, dispatch] = useReducer(cartReducer, undefined, initCart);
  const [isCartOpen, setIsCartOpen] = useState(false);

  useEffect(() => {
    try { localStorage.setItem('standard_cart', JSON.stringify(state.items)) } catch { /* Keep the session working if storage is unavailable. */ }
  }, [state.items]);

  const addToCart = (item) => dispatch({ type: 'ADD_ITEM', payload: item });
  const updateQuantity = (id, oldNote, quantity) =>
    dispatch({ type: 'UPDATE_QUANTITY', payload: { id, oldNote, quantity } });
  const updateNote = (id, oldNote, newNote) =>
    dispatch({ type: 'UPDATE_NOTE', payload: { id, oldNote, newNote } });
  const removeFromCart = (id, note) => dispatch({ type: 'REMOVE_ITEM', payload: { id, note } });
  const clearCart = () => dispatch({ type: 'CLEAR_CART' });

  return (
    <CartContext.Provider
      value={{
        items: state.items,
        isCartOpen,
        setIsCartOpen,
        addToCart,
        updateQuantity,
        updateNote,
        removeFromCart,
        clearCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
}
