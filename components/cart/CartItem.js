/* eslint-disable @next/next/no-img-element */
/* eslint-disable jsx-a11y/alt-text */
import React, { useRef, useState } from "react";
import { useCart } from "../../customCartHook/CartContextProvider";
import styles from "../../styles/cart.module.css";

function CartItem({ item }) {
  const { cart, dispatch } = useCart();
  const [totalPrice, setTotalPrice] = useState(item.price * item.qty);
  const qtySelect = useRef();

  const handleClick = (e) => {
    e.preventDefault();
    dispatch({type: 'removeFromCart', payload: { id: item.id, qty: item.qty }});
  };

  const handleChange = (e) => {
    console.log(cart);
    let qty = e.target.value;
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
        <td>
          <div className={styles.itemHeader}>
            <h4>{item.name}</h4>
            <img className={styles.itemImg} src={item.image} />
          </div>
        </td>
        <td>
          <div className={styles.quantity}>
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
            <button
              className={styles.btnRemove}
              onClick={(e) => handleClick(e)}
            >
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
      </tr>
    </tbody>
  );
}

export default CartItem;
