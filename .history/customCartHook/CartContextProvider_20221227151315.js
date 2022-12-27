import { useState, useContext } from "react";

export function CartContextProvider({ children }) {
  const CartContext = useContext();
  const CartUpdateContext = useContext();
  const [cart, setCart] = useState([]);

  return (
    <CartContext.Provider value={cart}>
      <CartUpdateContext.Provider value={setCart}>
        {children}
      </CartUpdateContext.Provider>
    </CartContext.Provider>
  );
}
