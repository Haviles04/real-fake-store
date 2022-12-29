import react, { useReducer } from "react";
import { useState, createContext, useContext } from "react";

const CartContext = createContext();

const CartUpdateContext = createContext();

export function useCart() {
  return useContext(CartContext);
}

export function useCartUpdate() {
  return useContext(CartUpdateContext);
}

export function CartContextProvider({ children }) {
  const [cart, dispatch] = useReducer((state, action) => {
    switch (action.type) {
      case "addToCart":
        const existingItem = state.find(
          (cartItem) => cartItem.id === action.payload.id
        );
        if (existingItem) {
          existingItem.qty++;
          return;
        }
        return [...state, action.payload];
      case "updateQty":
        const currentItem = state.find(
          (cartItem) => cartItem.id === action.payload.id
        );
        if (currentItem) {
          currentItem.qty = action.payload.qty;
        }
        return state;
      case "removeFromCart":
        return [...state].filter((item) => item.id !== action.payload.id);
      default:
        return state;
    }
  }, []);

  return (
    <CartContext.Provider value={{ cart, dispatch }}>
      {children}
    </CartContext.Provider>
  );
}
