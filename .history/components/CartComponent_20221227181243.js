import React from 'react'
import { useCart } from '../customCartHook/CartContextProvider'

function CartComponent() {
  const items = useCart();
  console.log(items);
  return (
    <>
    <h4>Cart</h4>
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