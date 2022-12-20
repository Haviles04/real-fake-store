import ProductCard from "../../components/ProductCard";
import Meta from "../../components/Meta";
import styles from "../../styles/category.module.css";

export default function Category({ categoryItems }) {
  console.log(categoryItems);
  const pageTitle = categoryItems.length ? categoryItems[0].category.name : 'We are still working on this page!';


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
  const cats = await fetch("https://api.escuelajs.co/api/v1/categories").then(
    (r) => r.json()
  );
  return {
    paths: cats.map((item) => {
      const catId = item.id.toString();
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
    `https://api.escuelajs.co/api/v1/categories/${params.catId}/products`
  ).then((r) => r.json());

  return {
    props: {
      categoryItems,
    },
  };
}
