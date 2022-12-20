import Image from "next/image";
import { useState } from "react";
import styles from '../styles/productCard.module.css'
import {GrCart} from 'react-icons/gr'

function ProductCard({ item }) {
  const [hoverPic, setHoverPic] = useState(item.images[0]);

  return (
    <div key={item.id}>
      
      <Image
        className={styles.productImage}
        onMouseOver={() => {
          setHoverPic(item.images[1]);
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
      <p>${item.price}</p>
      <button><GrCart /> Add to cart</button>
    </div>
  );
}

export default ProductCard;
