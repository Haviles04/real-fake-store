import {useRef, useState} from 'react'
import styles from '../styles/carousel.module.css'
import ProductCard from './ProductCard';

function Carousel({products}) {
    console.log(products)
    const ref = useRef();
    const currentX = useRef(50);

    const products1_3 = [products[0], products[1], products[2]];
    const products3_6 = [products[3], products[4], products[5]];
    const products6_9 = [products[6], products[7], products[8]];

    const scrollForward = () => {
        if(!ref.current) return;

        else{
            if(currentX.current < 0){
                currentX.current = 50;
            }
        ref.current.scroll({left: `${currentX.current}`, behavior:'smooth'})
        currentX.current = currentX.current + 50;
        };
    }

    const scrollBackwards = () => {
        if(!ref.current) return;
        
        else{
            if(currentX.current > 450){
                currentX.current = 450;
            }
        currentX.current = currentX.current =50;
        ref.current.scroll({left:`${currentX.current}`, behavior:'smooth'})
        
        }
    }

  return (
    <div className={styles.mainCaro}>
        <div className={styles.products}>
            {products1_3.map(item=>{
                <ProductCard key={item.id} item={item} />
            })}

        </div>
        <div className={styles.products}>
        
         </div>
        <div className={styles.products}>

        </div>
    </div>
  )
}

export default Carousel