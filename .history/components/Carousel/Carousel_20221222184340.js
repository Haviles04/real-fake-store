import { useRef, useState, useEffect } from "react";
import styles from "../../styles/carousel.module.css";
import CarouselCard from "./CarouselCard";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { AiOutlineArrowRight } from "react-icons/ai";

function Carousel({ products }) {

  console.log(products.length);


  const caro = useRef();
  const pcRef = useRef();
  const currentX = useRef(0);
  const [maxForward, setMaxForward] = useState(false);
  const [maxBackwards, setMaxBackwards] = useState(true);
  let offset;
  let onMobile;


  const handleClickForward = () => {
    setMaxBackwards(false);
    caro.current.offsetWidth <= 510 ? onMobile = true: onMobile = false;
    onMobile
      ? (offset = pcRef.current.offsetWidth * 2)
      : (offset = pcRef.current.offsetWidth * 3);
    currentX.current = currentX.current + offset;
    caro.current.scroll({ left: `${currentX.current}`, behavior: "smooth" });
    currentX.current >= pcRef.current.offsetWidth * (products.length - 1) ? setMaxForward(true): false;
  }

  const handleClickBackwards = () => {
    setMaxForward(false);
    caro.current.offsetWidth <= 510 ? onMobile = true : onMobile = false;
    onMobile
      ? (offset = pcRef.current.offsetWidth * 2)
      : (offset = pcRef.current.offsetWidth * 3);
    currentX.current = currentX.current - offset;
    caro.current.scroll({ left: `${currentX.current}`, behavior: "smooth" });
    currentX.current <= 0 ? setMaxBackwards(true) : null;
  };

  const handleTouch = () => {
    currentX.current = e.pageX;
  }

  return (
    <div className={styles.main}>
      <button
        onClick={() => handleClickBackwards()}
        className={styles.buttons}
        style={
          maxBackwards ? { visibility: "hidden" } : { visibility: "visible" }
        }
      >
        <AiOutlineArrowLeft size={25} />
      </button>
      <div ref={caro} className={styles.mainCaro}  onTouchEnd={ (e) => handleTouch(e)}>
        {products.map((item) => (
          <CarouselCard pcRef={pcRef} key={item.id} item={item} />
        ))}
      </div>
      <button
        onClick={() => handleClickBackwards()}
        className={styles.buttons}
        style={
          maxForward ? { visibility: "hidden" } : { visibility: "visible" }
        }
      >
        <AiOutlineArrowRight size={25} />
      </button>
    </div>
  );
}

export default Carousel;
