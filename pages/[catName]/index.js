import ProductCard from "../../components/ProductCard";
import Meta from "../../components/Meta";
import styles from "../../styles/category.module.css";

export default function Category({ categoryItems, products }) {
 
  return (
    <div className={styles.main}>
      <Meta title={pageTitle} descript={pageTitle} />

      <h1>{pageTitle}</h1>
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
          catName : item.name.toLowerCase()
        },
      };
    }),
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const { categoryItems } = await import(
    `../../data/products/${params.catName}Data.json`
  );
  return {
    props: {
      categoryItems,
    },
  };
}
