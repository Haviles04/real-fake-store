import React from "react";
import Link from "next/link";
import { useCart } from "@/hooks/cartHook/CartContextProvider";
import CartItem from "@/components/cart/CartItem";
import styles from "@/styles/cart.module.css";

export default function Cart() {
  const { cart } = useCart();

  return (
    <div className={styles.container}>
      <div className={styles.cartContainer}>
        {cart.items.length ? (
          <>
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
              {cart.items.map((item) => (
                <CartItem key={item.id} item={item} />
              ))}
            </table>
          </>
        ) : (
          <>
            <h1>Your Shopping Cart is empty</h1>
            <Link href="/products">
              <button>Click here to shop!</button>
            </Link>
          </>
        )}
      </div>
    </div>
  );
}
