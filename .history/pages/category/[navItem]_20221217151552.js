export default function Category({ categoryItems }) {
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
      const id = item.id;
      return {
        params: {
          navItem,
        },
      };
    }),
    fallback: false,
  };
}

export async function getStaticProps({id}) {
  
  const categoryItems = await fetch(
    `https://api.escuelajs.co/api/v1/categories/${id}/products`
  ).then((r) => r.json());

  return {
    props: {
      categoryItems,
    },
  };
}
