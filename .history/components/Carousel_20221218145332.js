import { useRef, useState } from "react";
import styles from "../styles/carousel.module.css";
import ProductCard from "./ProductCard";
import {AiOutlineArrowLeft} from 'react-icons/ai'
import {AiOutlineArrowRight} from 'react-icons/ai'


function Carousel({ products }) {
  console.log(products);
  const ref = useRef();
  const currentX = useRef(50);

  const scrollForward = () => {
    if (!ref.current) return;
    else {
      if (currentX.current < 0) {
        currentX.current = 925;
      }
      ref.current.scroll({ left: `${currentX.current}`, behavior: "smooth" });
      currentX.current = currentX.current + 925;
    }
  };

  const scrollBackwards = () => {
    if (!ref.current) return;
    else {
      if (currentX.current > 2775) {
        currentX.current = 2775;
      }
      currentX.current = currentX.current - 925;
      ref.current.scroll({ left: `${currentX.current}`, behavior: "smooth" });
    }
  };

  return (
    <div className={styles.main}>
    <button className={styles.buttons}><AiOutlineArrowLeft /></button>
    <div ref={ref} className={styles.mainCaro}>
        {products.map(item => (
            <div key={item.id} className={styles.productCard}>
            <ProductCard key={item.id} item={item} />
            </div>
        ))}
    </div>
    <button className={styles.buttons}><AiOutlineArrowRight /></button>
    </div>
  );
}

export default Carousel;
