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

export function CartContextProvider({ children }) {
  const [cart, setCart] = useState([]);
  
  const updateCart = (product) => {
    if(cart.length === 0) {setCart([...cart, product])};
    
   const itemAlreadyInCart = () => { cart.forEach((item, i) => {
      item.id === product.id ? i : false;
    })}

    itemAlreadyInCart ? cart[i].qty ++ : setCart([...cart, product]);


  };

  return (
    <CartContext.Provider value={cart}>
      <CartUpdateContext.Provider value={updateCart}>
        {children}
      </CartUpdateContext.Provider>
    </CartContext.Provider>
  );
}
