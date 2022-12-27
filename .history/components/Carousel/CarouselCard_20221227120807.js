import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import styles from "../../styles/carousel.module.css";

function CarouselCard({ item, pcRef, handleTouchEnd, handleTouchStart}) {
  const [hoverPic, setHoverPic] = useState(item.images[0]);

  const handleMouseOver = () => {
    item.images[1] ? setHoverPic(item.images[1]) : null;
  };

  const handleMouseOut = () => {
    item.images[0] ? setHoverPic(item.images[0]) : null;
  };



  return (
    <div
      ref={pcRef}
      className={styles.productCard}
      key={item.id}
      onTouchStart={() => handleTouchStart()}
      onTouchEnd={() => {
        handleTouchEnd();
      }}
    >
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
          alt={item.title}
          style={{width:'100%'}}
        ></Image>
        <h4 className={styles.productTitle}>{item.title}</h4>
      </Link>
      <p className={styles.text}>${item.price}</p>
    </div>
  );
}

export default CarouselCard;
