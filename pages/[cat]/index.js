import ProductCard from "../../components/ProductCard";
import Meta from "../../components/Meta";
import styles from "../../styles/category.module.css";

export default function Category({ categoryItems, products, catName }) {
  
  return (
    <div className={styles.main}>
      <Meta title={catName} descript={catName} />
      <h1>{catName.toUpperCase()}</h1>
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
          cat : item.name.toLowerCase()
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
      catName: params.cat
    },
  };
}
