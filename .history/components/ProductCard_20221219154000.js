import Image from "next/image";
import { useState } from "react";
import styles from "../styles/productCard.module.css";
import { GrCart } from "react-icons/gr";

function ProductCard({ item }) {
  const getInitialImage = item.images[0] !== '123' || item.images[0] !== '234' ? item.images[0] : item.category.image;
  const [hoverPic, setHoverPic] = useState(getInitialImage);

  const handleMouseOver = () => {
    item.images[1] ? setHoverPic(item.images[1]) : null;
  };

  const handleMouseOut = () => {
    setHoverPic(item.images[0]);
  };
  return (
    <div key={item.id}>
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
      <h4>{item.title}</h4>
      <p className={styles.text}>${item.price}</p>
      <button>
        <GrCart /> Add to cart
      </button>
    </div>
  );
}

export default ProductCard;
