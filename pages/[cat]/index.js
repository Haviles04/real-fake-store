import ProductCard from "../../components/ProductCard";
import Meta from "../../components/Meta";
import styles from "../../styles/category.module.css";

export default function Category({ categoryItems, products, cat }) {
  
  return (
    <div className={styles.main}>
      <Meta title={cat} descript={cat} />
      <h1>{cat.toUpperCase()}</h1>
      <div className={styles.container}>
        {categoryItems.map((item) => (
          <ProductCard products={products} key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
}

export async function getStaticPaths() {
  const { cats } = await import("../../data/category/categoryData.json");
  return {
    paths: cats.map((item) => {
      return {
        params: {
          cat : item.name.toString().toLowerCase()
        },
      };
    }),
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const { categoryItems } = await import(
    `../../data/products/${params.cat}Data.json`
  );
 
  return {
    props: {
      categoryItems,
      cat: params.cat
    },
  };
}
