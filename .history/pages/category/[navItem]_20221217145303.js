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
          id,
        },
      };
    }),
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const id = params.id;

  try {
    const categoryItems = await fetch(
      `https://api.escuelajs.co/api/v1/categories/${id}/products`
    ).then((r) => r.json());
  } catch (error) {
    false;
  }

  return {
    props: {
      categoryItems,
    },
  };
}
