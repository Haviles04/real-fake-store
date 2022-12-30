import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import styles from "../styles/productCard.module.css";
import { GrCart } from "react-icons/gr";
import { useCart } from "../customCartHook/CartContextProvider";

function ProductCard({ item }) {
  const [hoverPic, setHoverPic] = useState(item.images[0]);
  const { dispatch } = useCart();

  const handleMouseOver = () => {
    item.images[1] ? setHoverPic(item.images[1]) : null;
  };

  const handleMouseOut = () => {
    item.images[0] ? setHoverPic(item.images[0]) : null;
  };

  const handleClick = (e) => {
    e.preventDefault();
    dispatch({
      type: "addToCart",
      payload: {
        name: item.title,
        id: item.id,
        image: item.images[0],
        price: item.price,
        qty: 1,
      },
    });
  };

  return (
    <div className={styles.productCard} key={item.id}>
      <Link href={`/products/${item.id}`}>
        <Image
          className={styles.productImage}
          onMouseOver={() => {
            handleMouseOver();
          }}
          onMouseOut={() => {
            handleMouseOut();
          }}
          src={`${hoverPic}`}
          width={200}
          height={200}
          alt={item.title}
        ></Image>
        <h4 className={styles.productTitle}>{item.title}</h4>
      </Link>
      <p className={styles.text}>${item.price}</p>
      <button onClick={(e) => handleClick(e)}>
        <GrCart /> Add to cart
      </button>
    </div>
  );
}

export default ProductCard;
