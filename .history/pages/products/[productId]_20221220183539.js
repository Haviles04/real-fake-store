import Meta from "../../components/Meta";
import styles from '../../styles/productPage.module.css'

export default function Products({ pageProduct }) {
  const product = pageProduct[0];

  return (
    <div>
      <Meta title={product.title} descript={product.description} />
      <div className={styles.productPageContainer}>
      <h1>{product.title}</h1>
      <div className={styles.productContainer}>
        <img src={product.image}/>
      </div>
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
