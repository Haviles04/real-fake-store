import ProductCard from "../../components/ProductCard";
import Meta from "../../components/Meta";
import styles from "../../styles/category.module.css";

export default function Product({ product }) {

const pageTitle = product.name;

  return (
    <div className={styles.main}>
    <Meta title={pageTitle} descript={pageTitle} />
    
      <h1>{pageTitle}</h1>
      <div className={styles.container}>
      {categoryItems.map((item) => (
        <ProductCard key={item.id} item={item} />
      ))}
      
    </div>
    </div>
  );
}

export async function getStaticPaths() {
  const cats = await fetch("https://63a22dfbba35b96522f1af07.mockapi.io/api/v1/allproducts").then(
    (r) => r.json()
  );
  return {
    paths: cats.map((item) => {
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
  
  const allproducts = await fetch("https://63a22dfbba35b96522f1af07.mockapi.io/api/v1/allproducts").then(r=> r.json());

  const product = await allproducts.filter(item => item.id === params.productId)

  return {
    props: {
      product,
    },
  };
}

