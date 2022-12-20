import Image from "next/image";
import { useState } from "react";
import styles from '../styles/productCard.module.css'

function ProductCard({ item }) {
  const [hoverPic, setHoverPic] = useState(item.images[0]);

  return (
    <div key={item.id}>
      <p>{item.title}</p>
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
      <p>${item.price}</p>
    </div>
  );
}

export default ProductCard;
