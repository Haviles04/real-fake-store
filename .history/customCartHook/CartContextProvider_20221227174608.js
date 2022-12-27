import react from "react";
import { useState, createContext, useContext } from "react";

const CartContext = createContext();

const CartUpdateContext = createContext();

export function useCart() {
  return useContext(CartContext);
}

export function useCartUpdate() {
  return useContext(CartUpdateContext);
}


setCart([...cart, product]);
export function CartContextProvider({ children }) {
  const [cart, setCart] = useState([]);
  let index;

  
  const updateCart = (product) => {
   const index = cart.indexOf(product);
   console.log(index);

  };

  return (
    <CartContext.Provider value={cart}>
      <CartUpdateContext.Provider value={updateCart}>
        {children}
      </CartUpdateContext.Provider>
    </CartContext.Provider>
  );
}
