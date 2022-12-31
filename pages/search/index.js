import React from "react";
import { useRouter } from "next/router";
import { useSearch } from "../../customSearchHook/SearchContextProvider";
import { server } from "../../config";
import ProductCard from "../../components/ProductCard";
import styles from "../../styles/search.module.css";

export default function Search({ allProducts }) {
  const router = useRouter();
  const searchTerm = router.query["product"]
  const matchingProducts = allProducts
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
  const allProducts = await fetch(`${server}/api/category/all`).then((r) =>
    r.json()
  );

  return {
    props: {
      allProducts,
    },
  };
}
