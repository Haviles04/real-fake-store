import React from 'react'
import { useCart } from '../customCartHook/CartContextProvider'

function CartComponent() {
  const items = useCart();
  return (
    <>
        {items.map(item => {
             <div>
             <h4>item.title</h4>
             <p>item.price</p>
             <p>item.qty</p>
         </div>
        })}
    </>
  )
}

export default CartComponent