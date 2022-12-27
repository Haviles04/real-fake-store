import React from 'react'
import CartComponent from '../../components/CartComponent';
import { useCart } from '../../customCartHook/CartContextProvider';

export default function Cart() {
  const items = useCart();
  return (
    <>
      {items.forEach(item) => {

     
        <CartComponent item={item} /> }}
    </>
  )
}

