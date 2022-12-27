import React from 'react'
import { useCart } from '../customCartHook/CartContextProvider'
import Cart from '../components/CartComponent';

function CartComponent() {
    const cart = useCart();
    console.log(cart);
  return (
    <>
        <Cart items={cart} />
    </>
  )
}

export default CartComponent