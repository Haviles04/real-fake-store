export default function Category({ categoryItems, params }) {
  console.log(categoryItems);
  console.log(params);

  return <div></div>;
}

export async function getStaticPaths() {
  const cats = await fetch("https://api.escuelajs.co/api/v1/categories").then(
    (r) => r.json()
  );
  return {
    paths: cats.map((item) => {
      const navItem = item.name.toLowerCase();
      const id = item.id;
      return {
        params: {
          navItem,
          id
        },
      };
    }),
    fallback: false,
  };
}

export async function getStaticProps( { params } ) {
  
  const categoryItems = await fetch(
    `https://api.escuelajs.co/api/v1/categories/${params.id}/products`
  ).then((r) => r.json());

  return {
    props: {
      categoryItems,
    },
  };
}
