import { useRef, useState, useEffect } from "react";
import styles from "../../styles/carousel.module.css";
import CarouselCard from "./CarouselCard";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { AiOutlineArrowRight } from "react-icons/ai";

function Carousel({ products }) {
  const caro = useRef();
  const pcRef = useRef();
  const currentX = useRef(0);
  const [productWidth, setProductWidth] = useState(null);
  
 /* useEffect(() => {
   setProductWidth(caro.current.offsetWidth / 3)
  }, [caro.current.offsetWidth])*/
  


  const scrollForward = () => {
    let offset = pcRef.current.offsetWidth * 3;
      if (currentX.current <= 0) {
        currentX.current = offset;
      }
      caro.current.scroll({ left: `${currentX.current}`, behavior: "smooth" });
      currentX.current = currentX.current + offset;
    
  };

  const scrollBackwards = () => {
    let offset = pcRef.current.offsetWidth * 3;
      currentX.current = currentX.current - offset;
      if (currentX.current >= offset * 2) {
        currentX.current = offset;
      } else if ((currentX.current = offset * 2)) {
        currentX.current = 0;
      }
      caro.current.scroll({ left: `${currentX.current}`, behavior: "smooth" });
  };



  return (
    <div className={styles.main}>
      <button onClick={() => scrollBackwards()} className={styles.buttons}>
        <AiOutlineArrowLeft size={25} />
      </button>
      <div ref={caro} className={styles.mainCaro}>
        {products.map((item) => (
          <div ref={pcRef} key={item.id} className={styles.productCard}>
            <CarouselCard productWidth={productWidth} key={item.id} item={item} />
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
