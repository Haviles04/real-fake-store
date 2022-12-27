import React from 'react'
import CartComponent from '../../components/CartComponent';
import { useCart } from '../../customCartHook/CartContextProvider';

export default function Cart() {
  const items = useCart();
  return (
    <>
      {items.map( item => {
        <CartComponent item={item} />
      })}
    </>
  )
}

