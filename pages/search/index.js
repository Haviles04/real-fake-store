import React from "react";
import { useRouter } from "next/router";
import ProductCard from "@/components/ProductCard";
import styles from "@/styles/search.module.css";

export default function Search({products}) {
  const router = useRouter();
  const searchTerm = router.query["product"]
  const matchingProducts = products
  .filter((item) => item.title.toLowerCase().includes(searchTerm));


  return (
    <div className={styles.searchContainer}>
      {searchTerm ? 
      <h2>
        <h1>{searchTerm.toUpperCase()}</h1>
        We found {matchingProducts.length} items
      </h2> : 
      <h1>Search for something!</h1>
      }
      <div className={styles.productCards}>
        {searchTerm &&
          matchingProducts
            .map((item) => (
              <>
                <ProductCard item={item} />{" "}
              </>
            ))}
      </div>
    </div>
  );
}


export async function getStaticProps() {
  const {products} = await import('../data/data.json')
  return {
    props: {
      products,
    },
  };
}