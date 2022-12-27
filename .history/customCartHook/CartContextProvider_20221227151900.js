import react from "react";
import { useState, createContext } from "react";

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
  return (
    <CartContext.Provider value={cart}>
      <CartUpdateContext.Provider value={setCart}>
        {children}
      </CartUpdateContext.Provider>
    </CartContext.Provider>
  );
}
