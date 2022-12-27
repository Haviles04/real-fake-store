import React from 'react'
import { useCart } from '../customCartHook/CartContextProvider'

function Cart() {
    const cart = useCart();
    console.log(cart);
  return (
    <>
        <Cart items={cart} />
    </>
  )
}

export default Cart