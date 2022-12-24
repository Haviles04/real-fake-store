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


  const handleTouch = (e) => {
    e.stopPropagation();
   console.log(e.target)
   console.log(e.target.offsetLeft)
  }

  return (
    <div
      ref={pcRef}
      className={styles.productCard}
      key={item.id}
      onTouchEnd={(e) => handleTouch(e)}
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
          onTouchEnd={(e) => {e.stopPropagation();}}
          
          src={`${hoverPic}`}
          alt={item.title}
          width={200}
          height={200}
        ></Image>
        <h4 className={styles.productTitle} onTouchEnd={(e) => {e.stopPropagation();}}>{item.title}</h4>
      </Link>
      <p className={styles.text} onTouchEnd={(e) => {e.stopPropagation();}}>${item.price}</p>
    </div>
  );
}

export default CarouselCard;
