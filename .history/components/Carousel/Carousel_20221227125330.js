import { useRef, useState, useEffect } from "react";
import styles from "../../styles/carousel.module.css";
import CarouselCard from "./CarouselCard";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { AiOutlineArrowRight } from "react-icons/ai";

function Carousel({ products }) {
  const caro = useRef();
  const pcRef = useRef();
  const newX = useRef(0);
  const onMobile = useRef();
  const [maxForward, setMaxForward] = useState(false);
  const [maxBackwards, setMaxBackwards] = useState(true);
  let offset;
  let touchStartX;
  let touchEndX;
  let swipeDirection;
  let productCardWidth;

  const checkOnMobile = () => {
    productCardWidth = pcRef.current.getBoundingClientRect().width;
    window.innerWidth <= 660
      ? (onMobile.current = true)
      : (onMobile.current = false);
    onMobile.current
      ? (offset = productCardWidth * 2)
      : (offset = productCardWidth * 4);
  };

  const setSwipeDirection = (first, second) => {
    if (first > second) {
      swipeDirection = "Right";
    } else {
      swipeDirection = "Left";
    }
  };

  const showOrHideBtns = () => {
    if (
      onMobile.current &&
      newX.current >=
        caro.current.scrollWidth - (offset - productCardWidth * 0.5)
    ) {
      setMaxForward(true);
    } else if (
      newX.current >=
      caro.current.scrollWidth - offset - productCardWidth * 0.5
    ) {
      setMaxForward(true);
    } else if (newX.current <= productCardWidth * 0.5) {
      setMaxBackwards(true);
    }
  };

  const handleCLickForward = () => {
    setMaxBackwards(false);
    checkOnMobile();
    newX.current = caro.current.scrollLeft + offset;
    caro.current.scroll({ left: `${newX.current}`, behavior: "smooth" });
    showOrHideBtns();
  };

  const handleClickBackward = () => {
    setMaxForward(false);
    checkOnMobile();
    newX.current = caro.current.scrollLeft - offset;
    caro.current.scroll({ left: `${newX.current}`, behavior: "smooth" });
    showOrHideBtns();
  };

  const handleTouchStart = () => {
    touchStartX = caro.current.scrollLeft;
  };

  const handleTouchEnd = () => {
    setTimeout(() => {
      newX.current = caro.current.scrollLeft;
      touchEndX = newX.current;
      setSwipeDirection(touchStartX, touchEndX);
      swipeDirection === "Right"
        ? setMaxForward(false)
        : setMaxBackwards(false);
      checkOnMobile();
      showOrHideBtns();
    }, 500);
  };

  return (
    <div className={styles.main}>
      <button
        onClick={() => handleClickBackward()}
        className={styles.buttons + " " + styles.button1}
        style={
          maxBackwards
            ? {
                opacity: 0,
                transition: "opacity 500ms ease",
              }
            : {
                opacity: 1,
                transition: "opacity 500ms ease",
              }
        }
      >
        <AiOutlineArrowLeft size={25} />
      </button>
      <div ref={caro} className={styles.mainCaro}>
        {products.map((item, i) => (
          <CarouselCard
            i={i}
            handleTouchEnd={handleTouchEnd}
            pcRef={pcRef}
            key={item.id}
            newX={newX}
            item={item}
            handleTouchStart={handleTouchStart}
          />
        ))}
      </div>
      <button
        onClick={() => handleCLickForward()}
        className={styles.buttons + " " + styles.button2}
        style={
          maxForward
            ? {
                opacity: 0,
                transition: "opacity 500ms ease",
              }
            : {
                opacity: 1,
                transition: "opacity 500ms ease",
              }
        }
      >
        <AiOutlineArrowRight size={25} />
      </button>
    </div>
  );
}

export default Carousel;
