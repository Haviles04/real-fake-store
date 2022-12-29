import React from "react";
import CartItem from "../../components/CartItem";
import { useCart } from "../../customCartHook/CartContextProvider";
import styles from "../../styles/cart.module.css";

export default function Cart() {
  const {cart} = useCart();
  return (
    <div className={styles.container}>
      <div className={styles.cartContainer}>
        <h1>Shopping Cart</h1>
        <table>
          <thead>
            <tr>
              <th id="Item description">Item description</th>
              <th id="quantity">Quantity</th>
              <th id="price">Price</th>
              <th id="total">Total</th>
            </tr>
          </thead>
          {cart.map((item) => (
            <CartItem key={item.id} item={item} />
          ))}
        </table>
      </div>
    </div>
  );
}
