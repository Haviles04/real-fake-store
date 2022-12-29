import React from 'react'
import CartItem from '../../components/CartItem';
import { useCart } from '../../customCartHook/CartContextProvider';

export default function Cart() {
  const items = useCart();
  console.log(items);
  return (
    <>
    Cart
      {items.map( item => {
        <CartItem item={item} />
      })}
    </>
  )
}
