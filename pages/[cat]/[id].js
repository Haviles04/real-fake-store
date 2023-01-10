import { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/router";
import Meta from "@/components/Meta";
import styles from "@/styles/productPage.module.css";
import { GrCart } from "react-icons/gr";
import { useCart } from "@/hooks/cartHook/CartContextProvider";

export default function Products({ pageProduct }) {
  
  const router = useRouter()
  const {params} = router.query;
  
  const { dispatch } = useCart();
  const [bigImage, setBigImage] = useState(pageProduct.images[0]);
  const [secondImage, setSecondImage] = useState(pageProduct.images[1]);
  const [thirdImage, setThirdImage] = useState(pageProduct.images[2]);

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
      payload: {...pageProduct, qty: 1},
    });
  };

  return (
    <div>
      <Meta title={pageProduct.title} descript={pageProduct.description} />
      <div className={styles.productPageContainer}>
        <div className={styles.borderDiv}>
          <h1>{pageProduct.title}</h1>
          <div className={styles.productContainer}>
            <div className={styles.zoomContainer}>
              <Image
                className={styles.bigImage}
                src={bigImage}
                alt={pageProduct.title}
                width={640}
                height={480}
              />
            </div>
            <div className={styles.smallImageContainer}>
              <Image
                className={styles.imageTwo}
                onClick={() => swapImages("second")}
                src={secondImage}
                alt={pageProduct.title}
                width={640}
                height={480}
              />
              <Image
                onClick={() => swapImages("third")}
                className={styles.imageThree}
                src={thirdImage}
                alt={pageProduct.title}
                width={640}
                height={480}
              />
            </div>
          </div>
          <h2>${pageProduct.price}</h2>
          <p>{pageProduct.description}</p>
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

export async function getServerSideProps({ params }) {
  const { products } = await import(`../../data/data.json`);
  const [pageId, pageName] = params.id.split("=")
  const pageProduct = products.find((item) => item.id === +pageId);

  return {
    props: {
      pageProduct,
    },
  };
}
