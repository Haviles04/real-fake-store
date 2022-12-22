import { useRef, useState, useEffect } from "react";
import styles from "../../styles/carousel.module.css";
import CarouselCard from "./CarouselCard";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { AiOutlineArrowRight } from "react-icons/ai";

function Carousel({ products }) {
  const caro = useRef();
  const pcRef = useRef();
  const currentX = useRef(0);




  const scrollForward = () => {
    let offset = pcRef.current.offsetWidth * 3;
        currentX.current = currentX.current + offset;
      caro.current.scroll({ left: `${currentX.current}`, behavior: "smooth" });
  };

  const scrollBackwards = () => {
    let offset = pcRef.current.offsetWidth * 3;
      currentX.current = currentX.current - offset;
      caro.current.scroll({ left: `${currentX.current}`, behavior: "smooth" });
  };



  return (
    <div className={styles.main}>
      <button onClick={() => scrollBackwards()} className={styles.buttons}>
        <AiOutlineArrowLeft size={25} />
      </button>
      <div ref={caro} className={styles.mainCaro}>
        {products.map((item) => (
            <CarouselCard pcRef={pcRef} key={item.id} item={item} />
        ))}
      </div>
      <button onClick={() => scrollForward()} className={styles.buttons}>
        <AiOutlineArrowRight size={25} />
      </button>
    </div>
  );
}

export default Carousel;
