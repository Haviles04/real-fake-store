import React from 'react'
import { useCart } from '../customCartHook/CartContextProvider'

function CartComponent(item) {
  
  console.log(item);
  return (
  <>
             <h4>item.title</h4>
             <p>item.price</p>
             <p>item.qty</p>
       
    </>
  )
}

export default CartComponent