export default function Category({ category }) {
  console.log(category);
  return <div>{category.name}</div>;
}

export async function getStaticProps({ params }) {
  const categoryItems = await fetch(
    `https://api.escuelajs.co/api/v1/categories/${params.navId}/products`
  ).then((r) => r.json());
  return {
    props: categoryItems,
  };
}

export async function getStaticPaths() {
  const cats = await fetch(
    "https://api.escuelajs.co/api/v1/categories"
  ).then((r) => r.json());

  const navItems = cats.name.toLowerCase();

  return {
    paths: navItems.map( item => {
      return {
        params: {
          navItems,
          navId: item.id,
        },
      };
    }), 
    fallback: false,
  };
}
