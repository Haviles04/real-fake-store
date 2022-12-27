import React from 'react'
import { useCart } from '../customCartHook/CartContextProvider'

function CartComponent(items) {
  
  console.log(items);
  return (
  <>
             <h4>item.title</h4>
             <p>item.price</p>
             <p>item.qty</p>
       
    </>
  )
}

export default CartComponent