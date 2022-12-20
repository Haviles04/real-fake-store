import { useRef, useState } from "react";
import styles from "../styles/carousel.module.css";
import ProductCard from "./ProductCard";

function Carousel({ products }) {
  console.log(products);
  const ref = useRef();
  const currentX = useRef(50);

  const scrollForward = () => {
    if (!ref.current) return;
    else {
      if (currentX.current < 0) {
        currentX.current = 50;
      }
      ref.current.scroll({ left: `${currentX.current}`, behavior: "smooth" });
      currentX.current = currentX.current + 50;
    }
  };

  const scrollBackwards = () => {
    if (!ref.current) return;
    else {
      if (currentX.current > 450) {
        currentX.current = 450;
      }
      currentX.current = currentX.current = 50;
      ref.current.scroll({ left: `${currentX.current}`, behavior: "smooth" });
    }
  };

  return (
    <div className={styles.mainCaro}>
        {products.map(item => (
            <ProductCard key={item.id} item={item} />
        ))}
    </div>
  );
}

export default Carousel;
