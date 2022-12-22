import { useRef, useState, useEffect } from "react";
import styles from "../../styles/carousel.module.css";
import CarouselCard from "./CarouselCard";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { AiOutlineArrowRight } from "react-icons/ai";

function Carousel({ products }) {
  const caro = useRef();
  const pcRef = useRef();
  const currentX = useRef(0);
  const [maxForward, setMaxForward] = useState(false);
  const [maxBackwards, setMaxBackwards] = useState(true);
  const [onMobile, setOnMobile] = useState();

  const scrollForward = () => {
    setMaxBackwards(false);
    let offset = pcRef.current.offsetWidth * 3;
        currentX.current = currentX.current + offset;
      caro.current.scroll({ left: `${currentX.current}`, behavior: "smooth" });
      currentX.current === offset * 2 ? setMaxForward(true) :null;
  };

  const scrollBackwards = () => {
    setMaxForward(false);
    let offset = pcRef.current.offsetWidth * 3;
      currentX.current = currentX.current - offset;
      caro.current.scroll({ left: `${currentX.current}`, behavior: "smooth" });
      currentX.current === 0 ? setMaxBackwards(true) : null;
  };



  return (
    <div className={styles.main}>
      <button onClick={() => scrollBackwards()} className={styles.buttons} style={maxBackwards ? {visibility:"hidden"} : {visibility: "visible"}}>
        <AiOutlineArrowLeft size={25} />
      </button>
      <div ref={caro} className={styles.mainCaro}>
        {products.map((item) => (
            <CarouselCard pcRef={pcRef} key={item.id} item={item} />
        ))}
      </div>
      <button onClick={() => scrollForward()} className={styles.buttons} style={maxForward ? {visibility:"hidden"} : {visibility:"visible"}}>
        <AiOutlineArrowRight size={25} />
      </button>
    </div>
  );
}

export default Carousel;
