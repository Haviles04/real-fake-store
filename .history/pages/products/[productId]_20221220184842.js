import { useState } from "react";
import Meta from "../../components/Meta";
import styles from '../../styles/productPage.module.css'

export default function Products({ pageProduct }) {
  const product = pageProduct[0];
  const [firstImage, setFirstImage] = useState(product.images[0]);
  const [secondImage, setSecondImage] = useState(product.images[1]);
  
  const swapImages = () => {



    setFirstImage(product.images[1]);
    setSecondImage(product.images[0]);
  }
  
  return (
    <div>
      <Meta title={product.title} descript={product.description} />
      <div className={styles.productPageContainer}>
      <h1>{product.title}</h1>
      <div className={styles.productContainer}>
        <img className={styles.bigImage} src={firstImage}/>
        <div className={styles.smallImageContainer}>
        <img className={styles.imageTwo} onClick={ () => swapImages } src={secondImage}/>
        <img className={styles.imageThree} src={product.images[2]} />
        </div>
      </div>
      <h4>{product.price}</h4>
      </div>
    </div>
  );
}

export async function getStaticPaths() {
  const products = await fetch(
    "https://63a22dfbba35b96522f1af07.mockapi.io/api/v1/allproducts"
  ).then((r) => r.json());
  return {
    paths: products.map((item) => {
      const productId = item.id.toString();
      return {
        params: {
          productId,
        },
      };
    }),
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const allproducts = await fetch(
    "https://63a22dfbba35b96522f1af07.mockapi.io/api/v1/allproducts"
  ).then((r) => r.json());

  const pageProduct = allproducts.filter(
    (item) => item.id === parseInt(params.productId)
  );

  return {
    props: {
      pageProduct,
    },
  };
}
