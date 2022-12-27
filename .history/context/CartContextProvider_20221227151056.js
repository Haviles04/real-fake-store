import { useState, useContext } from "react";

export function CartContextProvider( {children} ){
    const CartContext = useContext();
    const [cart, setCart] = useState([]);
    
    return (
        <CartContext.Provider value={cart}>
            {children}
        </CartContext.Provider>
    )
}