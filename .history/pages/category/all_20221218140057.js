import ProductCard from "../../components/ProductCard";
import Meta from "../../components/Meta";
import styles from "../../styles/category.module.css";

export default function Category({ categoryItems }) {
  console.log(categoryItems);
  const pageTitle = categoryItems[0].category.name;


  return (
    <>
    <Meta title={pageTitle} descript={pageTitle} />
    <div className={styles.main}>
      <h1>{pageTitle}</h1>
      <div className={styles.container}>
      {categoryItems.map((item) => (
        <ProductCard key={item.id} item={item} />
      ))}
      </div>
    </div>
    </>
  );
}