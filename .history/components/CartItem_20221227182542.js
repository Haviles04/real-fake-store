import React from 'react'
import { useCart } from '../customCartHook/CartContextProvider'

function CartItem({item}) {
  
  return (
  <>
             <h4>{item.name}</h4>
             <p>{item.price}</p>
             <p>{item.qty}</p>   
    </>
  )
}

export default CartItem