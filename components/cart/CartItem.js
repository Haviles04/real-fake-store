/* eslint-disable @next/next/no-img-element */
/* eslint-disable jsx-a11y/alt-text */
import React, { useRef, useState } from "react";
import { useCart } from "@/hooks/customCartHook/CartContextProvider";
import styles from "@/styles/cart.module.css";
import Link from "next/link";

function CartItem({ item }) {
  const { cart, dispatch } = useCart();
  const [totalPrice, setTotalPrice] = useState(parseInt(item.price) * item.qty);
  const qtySelect = useRef(1);

  const handleClick = (e) => {
    e.preventDefault();
    dispatch({
      type: "removeFromCart",
      payload: { id: item.id, qty: item.qty },
    });
  };

  const handleChange = (e) => {
    let qty = parseInt(e.target.value)
    dispatch({
      type: "updateQty",
      payload: {
        id: item.id,
        qty: qty,
      },
    });
    setTotalPrice(item.price * item.qty);
  };

  return (
    <tbody className={styles.cartItemContainer}>
      <tr>
        <td className={styles.itemHeader}>
          <Link href={`/${item.category.name.toLowerCase()}/${item.id}=${item.title
          .toLowerCase()
          .replace(/\s/g, "")}`}>
            <img className={styles.itemImg} src={item.images[0]} />
            <h4>{item.title}</h4>
          </Link>
        </td>
        <td className={styles.quantity}>
          <label htmlFor="quantity">Quantity</label>
          <select
            defaultValue={item.qty}
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
        </td>
        <td className={styles.price}>
          <p>${item.price}</p>
        </td>
        <td className={styles.totalPrice}>
          <p>${totalPrice}</p>
        </td>
      </tr>
    </tbody>
  );
}

export default CartItem;
