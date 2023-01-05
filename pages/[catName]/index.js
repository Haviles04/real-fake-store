import ProductCard from "../../components/ProductCard";
import Meta from "../../components/Meta";
import styles from "../../styles/category.module.css";
import { server } from "../../config";
import  categories  from '../../data/category/category.json'

export default function Category({ categoryItems, products }) {
  const pageTitle = categoryItems.length
    ? categoryItems[0].category.name
    : "We are still working on this page!";

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
  const cats = await fetch(`https://63a22dfbba35b96522f1af07.mockapi.io/api/v1/categories`).then((r) => r.json());
  return {
    paths: cats.map((item) => {
      const catName = item.name.toLowerCase();
      return {
        params: {
          catName,
        },
      };
    }),
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const categoryItems = await fetch(
    `https://63a22dfbba35b96522f1af07.mockapi.io/api/v1/${params.catName}`
  ).then((r) => r.json());

  return {
    props: {
      categoryItems,
    },
  };
}
