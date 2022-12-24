import Link from "next/link";
import Image from "next/image";
import { GrCart } from "react-icons/gr";
import { useState } from "react";
import styles from "../../styles/carousel.module.css";

function CarouselCard({ item, pcRef, currentX,setMaxBackward,setMaxForward, caro }) {
  const [hoverPic, setHoverPic] = useState(item.images[0]);
  let onMobile;
  let offset;

  const handleMouseOver = () => {
    item.images[1] ? setHoverPic(item.images[1]) : null;
  };

  const handleMouseOut = () => {
    item.images[0] ? setHoverPic(item.images[0]) : null;
  };


  const handleTouch = (e) => {
   caro.current.offsetWidth <= 510 ? (onMobile = true) : (onMobile = false);
   onMobile
   ? (offset = pcRef.current.offsetWidth * 2)
   : (offset = pcRef.current.offsetWidth * 3);
   currentX.currentX = e.offsetLeft;
    if (onMobile) {
      currentX.current >= pcRef.current.offsetWidth * (products.length - 1)
        ? setMaxForward(true)
        : false;
    } else if (currentX.current >= offset * 2) {
      setMaxForward(true)
    } else if(currentX.current <= 0){
      setMaxBackward(true);
    }
  }

  return (
    <div
      ref={pcRef}
      className={styles.productCard}
      key={item.id}
      onTouchEnd={(e) => {e.stopPropagation(); handleTouch(e.currentTarget)}}
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
        ></Image>
        <h4 className={styles.productTitle}>{item.title}</h4>
      </Link>
      <p className={styles.text}>${item.price}</p>
    </div>
  );
}

export default CarouselCard;
