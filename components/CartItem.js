/* eslint-disable @next/next/no-img-element */
/* eslint-disable jsx-a11y/alt-text */
import React, { useRef, useState } from "react";
import { useCartUpdate } from "../customCartHook/CartContextProvider";
import styles from "../styles/cart.module.css";

function CartItem({ item }) {
  const { removeFromCart, updateCart } = useCartUpdate();
  const [totalPrice, setTotalPrice] = useState(item.price);
  const qtySelect = useRef();

  const handleClick = (e) => {
    e.preventDefault();
    removeFromCart({ id: item.id });
  };

  const handleChange = (e) => {
    let qty = e.target.value;
    updateCart(item, qty);
    setTotalPrice(item.price * qty);
  };

  return (
    <tbody className={styles.cartItemContainer}>
      <td>
        <div className={styles.itemHeader}>
          <h4>{item.name}</h4>
          <img className={styles.itemImg} src={item.image} />
        </div>
      </td>
      <td>
        <div className={styles.quantity}>
          <label for="quantity">Quantity</label>
          <select
            name="quantity"
            ref={qtySelect}
            onChange={(e) => handleChange(e)}
          >
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
          </select>
          <button className={styles.btnRemove} onClick={(e) => handleClick(e)}>
            Remove Item
          </button>
        </div>
      </td>
      <td>
        <div className={styles.price}>
          <p>${item.price}</p>
        </div>
      </td>
      <td>
        <div className={styles.totalPrice}>
          <p>${totalPrice}</p>
        </div>
      </td>
    </tbody>
  );
}

export default CartItem;
