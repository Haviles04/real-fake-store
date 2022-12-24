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
  const offset = useRef();
  const [maxForward, setMaxForward] = useState(false);
  const [maxBackwards, setMaxBackwards] = useState(true);
  
  useEffect(() => {
    caro.current.offsetWidth <= 510 ? (onMobile.current = true) : (onMobile.current = false);
    onMobile
      ? (offset.current = pcRef.current.offsetWidth * 2)
      : (offset.current = pcRef.current.offsetWidth * 3);
   
    if (
      onMobile &&
      currentX.current >= pcRef.current.offsetWidth * (products.length)
    ) {
      setMaxForward(true);
      setMaxBackwards(false);
    } else if (currentX.current >= offset * 2) {
      setMaxForward(true);
      setMaxBackwards(false);
    } else if (currentX.current = 0) {
      setMaxBackwards(true);
      setMaxForward(false);
    }else{
      setMaxBackwards(true);
      setMaxForward(false);
    }
  }, [pcRef, caro, currentX, onMobile, products])
  



  const handleCLickForward = () => {
    setMaxBackwards(false);
    onMobile
      ? (offset = pcRef.current.offsetWidth * 2)
      : (offset = pcRef.current.offsetWidth * 3);
    currentX.current = currentX.current + offset;
    caro.current.scroll({ left: `${currentX.current}`, behavior: "smooth" });
  };

  const handleClickBackward = () => {
    setMaxForward(false);
    currentX.current = currentX.current - offset;
    caro.current.scroll({ left: `${currentX.current}`, behavior: "smooth" });
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
            pcRef={pcRef}
            key={item.id}
            caro={caro}
            products={products}
            currentX={currentX}
            setMaxBackward={setMaxBackwards}
            setMaxForward={setMaxForward}
            item={item}
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
