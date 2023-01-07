/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import { useState } from "react";
import styles from "@/styles/carousel.module.css";

function CarouselCard({ item, pcRef }) {
  const [hoverPic, setHoverPic] = useState(item.images[0]);
  const productLink = `/${item.category.name.toLowerCase()}/${
    item.id
  }=${item.title.toLowerCase().replace(/\s/g, "")}`;

  const handleMouseOver = () => {
    item.images[1] ? setHoverPic(item.images[1]) : null;
  };

  const handleMouseOut = () => {
    item.images[0] ? setHoverPic(item.images[0]) : null;
  };

  return (
    <div ref={pcRef} className={styles.productCard} key={item.id}>
      <Link href={productLink} as={productLink}>
        <img
          className={styles.productImage}
          onMouseOver={() => {
            handleMouseOver();
          }}
          onMouseOut={() => {
            handleMouseOut();
          }}
          src={`${hoverPic}`}
          alt={item.title}
        ></img>
        <h4 className={styles.productTitle}>{item.title}</h4>
      </Link>
      <p className={styles.text}>${item.price}</p>
    </div>
  );
}

export default CarouselCard;
