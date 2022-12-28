import React from 'react'
import { useCartUpdate } from '../customCartHook/CartContextProvider'

function CartItem({item}) {
  const {addToCart, removeFromCart} = useCartUpdate();

  const handleClick = (e) => {
    e.preventDefault();
    removeFromCart({id: item.id});
  }

  return (
  <>
             <h4>{item.name}</h4>
             <p>${item.price}</p>
             <p>{item.qty}</p>
             <button onClick={(e) => handleClick(e)} >Remove from Cart</button>   
    </>
  )
}

export default CartItem