import React from 'react'
import { useCart } from '../customCartHook/CartContextProvider'

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