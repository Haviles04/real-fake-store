import React from 'react'
import { useCart } from '../customCartHook/CartContextProvider'

function Cart() {
    const cart = useCart();
  return (
    <>
    {cart.map(item => {
        <div>
            <h4>item.title</h4>
            <p>item.price</p>
            <p>item.qty</p>
        </div>
    })}
    </>
  )
}

export default Cart