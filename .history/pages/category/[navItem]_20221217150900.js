export default function Category({ categoryItems, params }) {
  console.log(categoryItems);

  return <div></div>;
}

export async function getStaticPaths() {
  const cats = await fetch("https://api.escuelajs.co/api/v1/categories").then(
    (r) => r.json()
  );
  return {
    paths: cats.map((item) => {
      const navItem = item.name.toLowerCase();
      const id = item.id.toString();
      return {
        params: {
          navItem,
          id,
        },
      };
    }),
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const id = parseInt(params.id);
  const categoryItems = await fetch(
    `https://api.escuelajs.co/api/v1/categories/${id}/products`
  ).then((r) => r.json());

  return {
    props: {
      categoryItems,
    },
  };
} 
