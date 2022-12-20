import styles from "../../styles/category.module.css";

export default function Category({ categoryItems }) {
  
  console.log(categoryItems);

  return (
   <div>
    hi
    { categoryItems.map(item => {
      <p>{ item.title }</p>
    })}
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
