import { useState } from "react";
import Image from "next/image";
import Meta from "../../../components/Meta";
import styles from "../../../styles/productPage.module.css";
import { GrCart } from "react-icons/gr";
import { useCart } from "../../../customCartHook/CartContextProvider";

export default function Products({ pageProduct }) {
  const { dispatch } = useCart();
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

  const handleClick = (e) => {
    e.preventDefault();
    dispatch({
      type: "addToCart",
      payload: {
        name: product.title,
        id: product.id,
        image: product.images[0],
        price: product.price,
        qty: 1,
      },
    });
  };

  return (
    <div>
      <Meta title={product.title} descript={product.description} />
      <div className={styles.productPageContainer}>
        <div className={styles.borderDiv}>
          <h1>{product.title}</h1>
          <div className={styles.productContainer}>
            <div className={styles.zoomContainer}>
              <Image
                className={styles.bigImage}
                src={bigImage}
                alt={product.title}
                width={640}
                height={480}
              />
            </div>
            <div className={styles.smallImageContainer}>
              <Image
                className={styles.imageTwo}
                onClick={() => swapImages("second")}
                src={secondImage}
                alt={product.title}
                width={640}
                height={480}
              />
              <Image
                onClick={() => swapImages("third")}
                className={styles.imageThree}
                src={thirdImage}
                alt={product.title}
                width={640}
                height={480}
              />
            </div>
          </div>
          <h2>${product.price}</h2>
          <p>{product.description}</p>
        </div>
        <form>
          <button onClick={(e) => handleClick(e)} className={styles.cartButton}>
            <GrCart className={styles.cartIcon} size={20} />
            <span className={styles.btnText}>Add to cart!</span>
          </button>
        </form>
      </div>
    </div>
  );
}

export async function getStaticPaths() {
  const { products } = await import("../../../data/products/all.json");

  const allPaths = products.map((item) => {
    const productId = item.id;
    const productName = item.title.toLowerCase().replace(/\s/g, "").toString();
    const catName = item.category.name.toLowerCase().toString();
    return {
      params: {
        catName,
        productId: `${productId}=${productName}`,
      },
    };
  });

  return {
    paths: allPaths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const { categoryItems } = await import(
    `../../../data/products/${params.catName}Data.json`
  );

  const pageProduct = categoryItems.filter(
    (item) => item.id === parseInt(params.productId)
  );

  return {
    props: {
      pageProduct,
    },
  };
}
