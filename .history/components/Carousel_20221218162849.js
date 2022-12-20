import { useRef, useState, useEffect } from "react";
import styles from "../styles/carousel.module.css";
import ProductCard from "./ProductCard";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { AiOutlineArrowRight } from "react-icons/ai";

function Carousel({ products }) {
  const caro = useRef();
  const pcRef = useRef();
  const currentX = useRef(0);

  const scrollForward = () => {
    let carouselWidth = caro.current.offsetWidth;
   
    let offset = pcRef.current.offsetWidth * 3;
    if (!caro.current) return;
    else {
      if (currentX.current <= 0) {
        currentX.current = offset;
      } else if (currentX.current >= carouselWidth){
        currentX.current = offset*2;
      }
      caro.current.scroll({ left: `${currentX.current}`, behavior: "smooth" });
      currentX.current = currentX.current + offset;
      console.log(currentX);
    }
  };

  const scrollBackwards = () => {
    let offset = pcRef.current.offsetWidth * 3;
    let carouselWidth = caro.current.offsetWidth;
    console.log(currentX.current);
    if (!caro.current) return;
    else {
      if (currentX.current = offset * 2) {
        currentX.current = offset;
      } else if (currentX.current >= carouselWidth * 3) {
        currentX.current = offset;
      }
      currentX.current = currentX.current - offset;
      caro.current.scroll({ left: `${currentX.current}`, behavior: "smooth" });
      console.log(currentX);
      console.log(carouselWidth);
    }
  };

  return (
    <div className={styles.main}>
      <button onClick={() => scrollBackwards()} className={styles.buttons}>
        <AiOutlineArrowLeft size={25} />
      </button>
      <div ref={caro} className={styles.mainCaro}>
        {products.map((item) => (
          <div ref={pcRef} key={item.id} className={styles.productCard}>
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
