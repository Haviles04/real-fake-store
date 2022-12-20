import { useRef, useState } from "react";
import styles from "../styles/carousel.module.css";
import ProductCard from "./ProductCard";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { AiOutlineArrowRight } from "react-icons/ai";

function Carousel({ products }) {
  console.log(products);
  const ref = useRef();
  const productCardRef = useRef();
  const currentX = useRef(930);

  console.log(productCardRef.current.offsetWidth)

  const scrollForward = () => {
    if (!ref.current) return;
    else {
      if (currentX.current < 0) {
        currentX.current = 930;
      }
      ref.current.scroll({ left: `${currentX.current}`, behavior: "smooth" });
      currentX.current = currentX.current + 930;
    }
  };

  const scrollBackwards = () => {
    if (!ref.current) return;
    else {
      if (currentX.current >= 2790) {
        currentX.current = 1860;
      }
      currentX.current = currentX.current - 930;
      ref.current.scroll({ left: `${currentX.current}`, behavior: "smooth" });
    }
  };

  return (
    <div className={styles.main}>
      <button onClick={() => scrollBackwards()} className={styles.buttons}>
        <AiOutlineArrowLeft size={25} />
      </button>
      <div ref={ref} className={styles.mainCaro}>
        {products.map((item) => (
          <div key={item.id} className={styles.productCard}>
            <ProductCard ref={productCardRef} key={item.id} item={item} />
          </div>
        ))}
      </div>
      <button onClick={() => scrollForward()} className={styles.buttons}>
        <AiOutlineArrowRight size={25} />
      </button>
    </div>
  );
}

export default Carousel;
