import React from "react";
import CartItem from "../../components/CartItem";
import { useCart } from "../../customCartHook/CartContextProvider";

export default function Cart() {
  const cartitems = useCart();
  console.log(items);
  return (
    <div>
      Cart
      <div>
      {items.map((item) => (
        <CartItem key={item.id} item={item} />
      ))}
      </div>
    </div>
  );
}
