import Image from "next/image";
import { useState } from "react";
import styles from '../styles/productCard.module.css'
import {GrCart} from 'react-icons/gr'

function ProductCard({ item }) {
  const [hoverPic, setHoverPic] = useState(item.images[0]);

  const handleMouseOver = () => {
    item.images[1] ? setHoverPic(item.images[1]) : null;
  }

  const handleMouseOut = () => {
    
  }
  return (
    <div key={item.id}>
      
      <Image
        className={styles.productImage}
        onMouseOver={() => {
          handleMouseOver();
        }}
        onMouseOut={()=> {
            setHoverPic(item.images[0]);
        }}
        src={`${hoverPic}`}
        width={200}
        height={200}
        alt={item.title}
      ></Image>
      <h4>{item.title}</h4>
      <p className={styles.text}>${item.price}</p>
      <button><GrCart /> Add to cart</button>
    </div>
  );
}

export default ProductCard;
