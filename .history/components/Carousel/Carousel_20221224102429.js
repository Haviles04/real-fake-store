import { useRef, useState } from "react";
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
  let onMobile;
  let offset;
  let touchStartX;

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
    caro.current.offsetWidth <= 510 ? (onMobile = true) : (onMobile = false);
    onMobile
      ? (offset = pcRef.current.offsetWidth * 2)
      : (offset = pcRef.current.offsetWidth * 3);
  };

  const showOrHideBtns = () => {
   if (currentX.current <= pcRef.current.offsetWidth * 2) {
      setMaxBackwards(true);
      setMaxForward(false);
    } else if (
      onMobile &&
      currentX.current >= pcRef.current.offsetWidth * (products.length - 2)
    ) {
      setMaxForward(true);
      setMaxBackwards(false);
    } else if (!onMobile && currentX.current >= offset * 2) {
      setMaxForward(true);
      setMaxBackwards(false);
    } else {
      setMaxBackwards(false);
      setMaxForward(false);
    }
  };

  const setInitialX = (e) => {
    touchStartX = e.offsetLeft;
    console.log(touchStartX);
  }

  const handleTouch = (e) => {
    checkOnMobile();
    console.log(touchStartX)
    console.log(e.offsetLeft);
    currentX.current = e.offsetLeft;
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
            handleTouch={handleTouch}
            pcRef={pcRef}
            key={item.id}
            currentX={currentX}
            item={item}
            setInitialX={setInitialX}
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
