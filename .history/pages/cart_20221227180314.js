import React from 'react'
import { useCart } from '../customCartHook/CartContextProvider'
import CartComponent from '../components/CartComponent';

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