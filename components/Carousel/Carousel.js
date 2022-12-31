import { useRef, useState, useEffect } from "react";
import styles from "../../styles/carousel.module.css";
import CarouselCard from "./CarouselCard";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { AiOutlineArrowRight } from "react-icons/ai";

function Carousel({ products }) {
  const caro = useRef();
  const pcRef = useRef();
  const newX = useRef(0);
  const [isLast, setIsLast] = useState(false);
  const [isFirst, setIsFirst] = useState(true);
  const scrollCards = useRef(4);
  let scrollTimeout;

  const checkIsMobile = () => {
    scrollCards.current = window.innerWidth <= 660 ? 2 : 4;
  };

  const showOrHideBtns = () => {
    const scrollOffset = caro.current.scrollLeft + caro.current.offsetWidth;
    const carouselWidth = caro.current.scrollWidth;

    setIsFirst(caro.current.scrollLeft === 0);
    setIsLast(scrollOffset === carouselWidth);
  };

  const handleCLickForward = () => {
    clearTimeout(scrollTimeout)
    scrollTimeout = setTimeout( () => {
    newX.current =
      caro.current.scrollLeft +
      pcRef.current.getBoundingClientRect().width * scrollCards.current;
    caro.current.scroll({ left: `${newX.current}`, behavior: "smooth" });},250)
  };

  const handleClickBackward = () => {
    clearTimeout(scrollTimeout)
    scrollTimeout = setTimeout( () => {
    newX.current =
      caro.current.scrollLeft -
      pcRef.current.getBoundingClientRect().width * scrollCards.current;
    caro.current.scroll({ left: `${newX.current}`, behavior: "smooth" });} , 250)
    };

  const handleScroll = () => {
    clearTimeout(scrollTimeout);
    scrollTimeout = setTimeout(() => {
      showOrHideBtns();
    }, 250);
  };

  useEffect(() => {
    checkIsMobile();
  }, []);

  return (
    <div className={styles.main}>
      <button
        onClick={() => handleClickBackward()}
        className={styles.buttons + " " + styles.next}
        style={{ opacity: isFirst ? 0 : 1 }}
      >
        <AiOutlineArrowLeft size={25} />
      </button>

      <div ref={caro} className={styles.mainCaro} onScroll={handleScroll}>
        {products.map((item, i) => (
          <CarouselCard
            i={i}
            pcRef={pcRef}
            key={item.id}
            newX={newX}
            item={item}
          />
        ))}
      </div>

      <button
        onClick={() => handleCLickForward()}
        className={styles.buttons + " " + styles.previous}
        style={{ opacity: isLast ? 0 : 1 }}
      >
        <AiOutlineArrowRight size={25} />
      </button>
    </div>
  );
}

export default Carousel;
