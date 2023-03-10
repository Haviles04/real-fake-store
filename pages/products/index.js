import ProductCard from "@/components/ProductCard";
import Meta from "@/components/Meta";
import styles from "@/styles/category.module.css";

export default function Products({ allProducts }) {
  
  return (
    <>
      <Meta title="All Items" descript="All Items" />
      <div className={styles.main}>
        <h1>All Products</h1>
        <div className={styles.container}>
          {allProducts.map((item) => (
            <ProductCard key={item.id} item={item} />
          ))}
        </div>
      </div>
    </>
  );
}

export async function getServerSideProps() {
  const {products} = await import('../../data/data.json')
  
  return {
    props: {
      allProducts : products
    },
  };
}
