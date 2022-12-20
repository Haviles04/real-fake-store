export default function navName({category}) {
  return (
    <div>
        {category.map( item => {
            <div key={item.id}> <p>{item.title}</p></div>
        } )}
    </div>
);
}

export async function getStaticProps({ params }) {
  const category = await fetch(
    `https://api.escuelajs.co/api/v1/categories/${params.navId}/products`
  ).then((r) => r.json());
  return {
    props: category,
  };
}

export async function getStaticPaths() {
  const navItems = await fetch(
    "https://api.escuelajs.co/api/v1/categories"
  ).then((r) => r.json());
    const navName = navItems.toLowerCase();

  return {
    paths: navItems.map((item) => {
      return {
        params: {
          navName,
          navId: item.id,
        },
      };
    }),
    fallback: false,
  };
}
