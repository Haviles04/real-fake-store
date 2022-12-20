import Image from "next/image";
import { useState } from "react";
import styles from "../styles/productCard.module.css";
import { GrCart } from "react-icons/gr";

function ProductCard({ item }) {
  const [hoverPic, setHoverPic] = useState(item.category.image);

  const handleMouseOver = () => {
    item.images[1] ? setHoverPic(item.images[1]) : null;
  };

  const handleMouseOut = () => {
    item.images[0] ? setHoverPic(item.images[0]) : null;
  };
  return (
    <div key={item.id}>
      <img
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
      ></img>
      <h4>{item.title}</h4>
      <p className={styles.text}>${item.price}</p>
      <button>
        <GrCart /> Add to cart
      </button>
    </div>
  );
}

export default ProductCard;
