import Link from "next/link";
import styles from '../../styles/navbar.module.css'

export default function NavLinks({ cats }) {
  return (
    <div className={styles.navList}>
    <ul>
      {cats.map((cat) => (
        <li key={cat.id}>
          <Link href={`/category/${cat.id}`}>
            {cat.name}
          </Link>
        </li>
      ))}
    </ul>
    </div>
  );
}
