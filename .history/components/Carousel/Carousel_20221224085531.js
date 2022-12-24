import { useRef, useState} from "react";
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

  const showOrHideBtns = () => {
    if(onMobile){
      if(currentX.current >= pcRef.current.offsetWidth * (products.length - 1))
        {setMaxForward(true)}
    } else if(currentX.current <= 0) {
      setMaxBackwards(true)
      }else if(currentX.current >= offset * 2){
        setMaxForward(true)
      }
  };

  const handleCLickForward = () => {
    setMaxBackwards(false);
    checkOnMobile();
    currentX.current = currentX.current + offset.current;
    caro.current.scroll({ left: `${currentX.current}`, behavior: "smooth" });
    showOrHideBtns();
  };

  const handleClickBackward = () => {
    setMaxForward(false);
    checkOnMobile();
    currentX.current = currentX.current - offset.current;
    caro.current.scroll({ left: `${currentX.current}`, behavior: "smooth" });
    showOrHideBtns();
  };

  const checkOnMobile = () => {
    caro.current.offsetWidth <= 510
      ? (onMobile.current = true)
      : (onMobile.current = false);
    onMobile
      ? (offset.current = pcRef.current.offsetWidth * 2)
      : (offset.current = pcRef.current.offsetWidth * 3);
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
            currentX={currentX}
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
