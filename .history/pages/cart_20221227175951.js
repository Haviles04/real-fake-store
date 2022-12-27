import React from 'react'
import { useCart } from '../customCartHook/CartContextProvider'

function Cart() {
    const cart = useCart();
    console.log(cart);
  return (
    <>
    <div>
    {cart.map(item => {
        <div>
            <h4>item.title</h4>
            <p>item.price</p>
            <p>item.qty</p>
        </div>
    })}
    </div>
    </>
  )
}

export default Cart