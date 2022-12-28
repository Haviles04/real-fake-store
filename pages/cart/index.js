import React from "react";
import CartItem from "../../components/CartItem";
import { useCart } from "../../customCartHook/CartContextProvider";
import styles from "../../styles/cart.module.css";

export default function Cart() {
  const cartItems = useCart();
  console.log(cartItems);
  return (
    <div className={styles.container}>
      <div className={styles.cartContainer}>
        Cart
        {cartItems.map((item) => (
          <CartItem key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
}
