
import Link from "next/link";
import Image from "next/image";
import { GrCart } from "react-icons/gr";
import { useState } from "react";
import styles from '../../styles/carousel.module.css'

function CarouselCard({item, pcRef}) {
    const [hoverPic, setHoverPic] = useState(item.images[0]);

    const handleMouseOver = () => {
      item.images[1] ? setHoverPic(item.images[1]) : null;
    };
  
    const handleMouseOut = () => {
      item.images[0] ? setHoverPic(item.images[0]) : null;
    };
    return (
      <div ref={pcRef} className={styles.productCard} key={item.id}>
        <Link href={`/products/${item.id}`}>
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
        <button className={styles.productButton}>
          <GrCart /> Add to cart
        </button>
      </div>
    );
}

export default CarouselCard