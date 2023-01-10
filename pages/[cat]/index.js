import ProductCard from "@/components/ProductCard";
import { useRouter } from "next/router";
import Meta from "@/components/Meta";
import styles from "@/styles/category.module.css";

export default function Category({ categoryItems, products, cat }) {
  const router = useRouter()
  const {params} = router.query

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

export async function getServerSideProps({params}){
  const {products} = await import('../../data/data.json');
  const cat = params.cat
  const categoryItems = products.filter((item)=>
    item.category.name.toString().toLowerCase() === cat
  )

  return{
    props:{
      categoryItems,
      cat
    }
  }
}
