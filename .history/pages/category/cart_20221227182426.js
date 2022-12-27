import React from "react";
import CartItem from "../../components/CartItem";
import { useCart } from "../../customCartHook/CartContextProvider";

export default function Cart() {
  const cartItems = useCart();
  console.log(cartItems);
  return (
    <div>
      Cart
      <div>
      {cartItems.map((item) => (
        <CartItem key={item.id} item={item} />
      ))}
      </div>
    </div>
  );
}
