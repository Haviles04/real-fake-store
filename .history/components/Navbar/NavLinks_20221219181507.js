import Link from "next/link";

export default function NavLinks({ cats }) {
  return (
    <ul className={styles.navList}>
      {cats.map((cat) => (
        <li>
          <Link key={cat.id} href={`/category/${cat.id}`}>
            {cat.name}
          </Link>
        </li>
      ))}
    </ul>
  );
}
