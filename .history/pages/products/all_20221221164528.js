import ProductCard from "../../components/ProductCard";
import Meta from "../../components/Meta";
import styles from "../../styles/category.module.css";
import all from '../api/category/all'

export default function Products({ products }) {

  return (
    <>
    <Meta title='All Items' descript='All Items' />
    <div className={styles.main}>
      <h1>All Products</h1>
      <div className={styles.container}>
      {products.map((item) => (
        <ProductCard key={item.id} item={item} />
      ))}
      </div>
    </div>
    </>
  );
}

export async function getStaticProps({ params }) {
    const products = await fetch(
      `../api/category/all`
    ).then((r) => r.json());
  
    return {
      props: {
        products
      },
    };
  }
  