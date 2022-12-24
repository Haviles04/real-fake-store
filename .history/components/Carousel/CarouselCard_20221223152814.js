import Link from "next/link";
import Image from "next/image";
import { GrCart } from "react-icons/gr";
import { useState } from "react";
import styles from "../../styles/carousel.module.css";

function CarouselCard({ item, pcRef }) {
  const [hoverPic, setHoverPic] = useState(item.images[0]);

  const handleMouseOver = () => {
    item.images[1] ? setHoverPic(item.images[1]) : null;
  };

  const handleMouseOut = () => {
    item.images[0] ? setHoverPic(item.images[0]) : null;
  };

  const getXposition = (e) => {
    console.log(e.touches[0])
  }


  return (
    <div
      ref={pcRef}
      className={styles.productCard}
      onTouchEnd={(e) => {
        console.log(e.left);
      }}
      key={item.id}
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
          width={200}
          height={200}
          onTouchEnd={(e) => {getXposition(e)}}
        ></Image>
        <h4 className={styles.productTitle}>{item.title}</h4>
      </Link>
      <p className={styles.text}>${item.price}</p>
    </div>
  );
}

export default CarouselCard;
