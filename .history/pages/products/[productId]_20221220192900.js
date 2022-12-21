import { useState } from "react";
import Meta from "../../components/Meta";
import styles from "../../styles/productPage.module.css";
import { GrCart } from "react-icons/gr";

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
              <img className={styles.bigImage} src={bigImage} />
            </div>
            <div className={styles.smallImageContainer}>
              <img
                className={styles.imageTwo}
                onClick={() => swapImages("second")}
                src={secondImage}
              />
              <img
                onClick={() => swapImages("third")}
                className={styles.imageThree}
                src={thirdImage}
              />
            </div>
          </div>
          <h2>${product.price}</h2>
          <p>{product.description}</p>
        </div>
        <form>
          <button type="submit" className={styles.cartButton}>
            <GrCart color={"white"} size={20} />
            <span className={styles.btnText}>Add to cart!</span>
          </button>
        </form>
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
