import React from 'react'
import { useCart } from '../customCartHook/CartContextProvider'
import CartComponent from '../components/CartComponent';

export default function Cart() {
    const cartitems = useCart();
    console.log(cartitems);
  return (
    <>
        <Cart items={cartitems} />
    </>
  )
}

