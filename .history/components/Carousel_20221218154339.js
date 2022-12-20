import { useRef, useState, useEffect } from "react";
import styles from "../styles/carousel.module.css";
import ProductCard from "./ProductCard";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { AiOutlineArrowRight } from "react-icons/ai";

function Carousel({ products }) {
  const ref = useRef();
  const pcRef = useRef(310);  
  const currentX = useRef(930);
   
  const scrollForward = () => {
    if (!ref.current) return;
    else {
      if (currentX.current < 0) {
        currentX.current = pcRef.current.offsetWidth * 3;
      }
      ref.current.scroll({ left: `${currentX.current}`, behavior: "smooth" });
      currentX.current = currentX.current + (pcRef.current.offsetWidth * 3);
    }
  };

  const scrollBackwards = () => {
    if (!ref.current) return;
    else {
      if (currentX.current >= 2790) {
        currentX.current = 1860;
      }
      currentX.current = currentX.current - (pcRef.current.offsetWidth * 3);
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
          <div ref={pcRef}  key={item.id} className={styles.productCard}>
            <ProductCard key={item.id} item={item} />
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
