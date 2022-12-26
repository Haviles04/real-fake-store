import { useRef, useState, useEffect } from "react";
import styles from "../../styles/carousel.module.css";
import CarouselCard from "./CarouselCard";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { AiOutlineArrowRight } from "react-icons/ai";

function Carousel({ products }) {
  const caro = useRef();
  const pcRef = useRef();
  const currentX = useRef(0);
  const onMobile = useRef();
  const [maxForward, setMaxForward] = useState(false);
  const [maxBackwards, setMaxBackwards] = useState(true);
  let offset;
  let touchStartX;
  let touchEndX;
  let swipeDirection;


  useEffect(() => {
    if(caro.current.scrollLeft >= caro.current.offsetWidth){
      setMaxForward(true);    
    } else if(caro.current.scrollLeft <= pcRef.current.offsetWidth * 2){
      setMaxBackwards(true);
    }
  }, [caro, pcRef])
  


  const handleCLickForward = () => {
    setMaxBackwards(false);
    checkOnMobile();
    currentX.current = currentX.current + offset;
    caro.current.scroll({ left: `${currentX.current}`, behavior: "smooth" });
    showOrHideBtns();
  };

  const handleClickBackward = () => {
    setMaxForward(false);
    checkOnMobile();
    currentX.current = currentX.current - offset;
    caro.current.scroll({ left: `${currentX.current}`, behavior: "smooth" });
    showOrHideBtns();
  };

  const checkOnMobile = () => {
    console.log(window.innerWidth);
    window.innerWidth <= 660 ? (onMobile.current = true) : (onMobile.current = false);
    onMobile
      ? (offset = pcRef.current.offsetWidth * 2)
      : (offset = pcRef.current.offsetWidth * 3);
  };

  const setSwipeDirection = (first, second) => {
    if (first > second) {
      swipeDirection = "Right";
    } else {
      swipeDirection = "Left";
    }
  };

  const showOrHideBtns = () => {
   
  };

  const handleTouchStart = () => {
    touchStartX = caro.current.scrollLeft;
  };

  const handleTouchEnd = (e) => {
    setSwipeDirection(touchStartX, touchEndX);
    currentX.current = e.offsetLeft;
    touchEndX = caro.current.scrollLeft;
    checkOnMobile();
    showOrHideBtns();
  };

  return (
    <div className={styles.main}>
      <button
        onClick={() => handleClickBackward()}
        className={styles.buttons}
        style={
          maxBackwards ? { visibility: "hidden" } : { visibility: "visible" }
        }
      >
        <AiOutlineArrowLeft size={25} />
      </button>
      <div ref={caro} className={styles.mainCaro}>
        {products.map((item) => (
          <CarouselCard
            handleTouchEnd={handleTouchEnd}
            pcRef={pcRef}
            key={item.id}
            currentX={currentX}
            item={item}
            handleTouchStart={handleTouchStart}
          />
        ))}
      </div>
      <button
        onClick={() => handleCLickForward()}
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
