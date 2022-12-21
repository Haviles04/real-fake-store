import ProductCard from "../../components/ProductCard";
import Meta from "../../components/Meta";
import styles from "../../styles/category.module.css";

export default function Category({ categoryItems }) {
  const pageTitle = categoryItems.length
    ? categoryItems[0].category.name
    : "We are still working on this page!";

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
  const cats = await fetch(
    "https://63a22dfbba35b96522f1af07.mockapi.io/api/v1/categories"
  ).then((r) => r.json());
  return {
    paths: cats.map((item) => {
      const catId = item.name.toLowerCase();
      return {
        params: {
          catId,
        },
      };
    }),
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const categoryItems = await fetch(
    `https://63a22dfbba35b96522f1af07.mockapi.io/api/v1/${params.catId}`
  ).then((r) => r.json());

  return {
    props: {
      categoryItems,
    },
  };
}
