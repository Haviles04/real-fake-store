import react from "react";
import { useState, createContext, useContext } from "react";

const CartContext = createContext();

const CartUpdateContext = createContext();

export function useCart(){
  return useContext(CartContext)
}

export function useCartUpdate(){
  return useContext(CartUpdateContext)
}


export function CartContextProvider({ children }) {
  const [cart, setCart] = useState([]);

  const updateCart = (product) => {
    setCart(product);
  }

  return (
    <CartContext.Provider value={[cart]}>
      <CartUpdateContext.Provider value={updateCart}>
        {children}
      </CartUpdateContext.Provider>
    </CartContext.Provider>
  );
}
