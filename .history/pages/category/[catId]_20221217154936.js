import styles from "../../styles/category.module.css";

export default function Category({ categoryItems }) {
  
  console.log(categoryItems);
  const pageTitle = categoryItems[0].category.name;

  return (
   <div>
    <h1>{pageTitle}</h1>
    
    
    {categoryItems.map( item => {
      return ( <div key={item.id}> <p>{item.name}</p></div>)
    } )}

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
