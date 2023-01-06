import { useState } from "react";
import Image from "next/image";
import Meta from "../../components/Meta";
import styles from "../../styles/productPage.module.css";
import { GrCart } from "react-icons/gr";
import { useCart } from "../../customCartHook/CartContextProvider";
import path from 'path'
import fs from 'fs/promises'

export default function Products({ pageProduct }) {
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
      payload: {
        name: pageProduct.title,
        id: pageProduct.id,
        image: pageProduct.images[0],
        price: pageProduct.price,
        qty: 1,
      },
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

export async function getStaticPaths() {
  const filePath = path.join(process.cwd(), 'data/products', 'allData.json')
  const fileData = await fs.readFile(filePath);
  const products = JSON.parse(fileData.toString());
  return {
    paths: products.products.map((item) => {
      const productName = item.title
        .toLowerCase()
        .replace(/\s/g, "");
      return {
        params: {
          catName :  item.category.name.toLowerCase(),
          productId: `${item.id}=${productName}`,
        },
      };
    }),
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const filePath = path.join(process.cwd(), 'data/products', `${params.catName}Data.json`)
  const fileData = await fs.readFile(filePath);
  const categoryItems = JSON.parse(fileData.toString());

  const pageProduct = categoryItems.categoryItems.find(
    (item) => item.id === parseInt(params.productId)
  );

  return {
    props: {
      pageProduct,
    },
  };
}
