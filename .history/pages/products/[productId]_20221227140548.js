import { useState } from "react";
import Image from "next/image";
import Meta from "../../components/Meta";
import styles from "../../styles/productPage.module.css";
import { GrCart } from "react-icons/gr";
import { server } from '../../config/index'

export default function Products({ pageProduct }) {
  const product = pageProduct[0];
  const [bigImage, setBigImage] = useState(product.images[0]);
  const [secondImage, setSecondImage] = useState(product.images[1]);
  const [thirdImage, setThirdImage] = useState(product.images[2]);

  const swapImages = (current) => {
    const filler = bigImage;

    if (current === "second") {
      setBigImage(secondImage);
      setSecondImage(filler);
    } else {
      setBigImage(thirdImage);
      setThirdImage(filler);
    }
  };

  return (
    <div>
      <Meta title={product.title} descript={product.description} />
      <div className={styles.productPageContainer}>
        <div className={styles.borderDiv}>
          <h1>{product.title}</h1>
          <div className={styles.productContainer}>
            <div className={styles.zoomContainer}>
              <Image className={styles.bigImage} src={bigImage} alt={product.title} width={640} height={480} />
            </div>
            <div className={styles.smallImageContainer}>
              <Image
                className={styles.imageTwo}
                onClick={() => swapImages("second")}
                src={secondImage}
                alt={product.title}
                width={640} height={480}
              />
              <Image
                onClick={() => swapImages("third")}
                className={styles.imageThree}
                src={thirdImage}
                alt={product.title}
                width={640} height={480}
              />
            </div>
          </div>
          <h2>${product.price}</h2>
          <p>{product.description}</p>
        </div>
        <form>
          <button type="submit" className={styles.cartButton}>
            <GrCart className={styles.cartIcon} size={20} />
            <span className={styles.btnText}>Add to cart!</span>
          </button>
        </form>
      </div>
    </div>
  );
}

export async function getStaticPaths() {
  const products = await fetch(
    `${server}/api/category/all`
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
    `${server}/api/category/all`
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
