import Link from "next/link";
import styles from "../../styles/navbar.module.css";

export default function NavLinks({ cats, onMobile, setMenuIsOpen }) {
 
  const closeMenu = () => {
    onMobile ? setMenuIsOpen(false) : null;
  };


  return (
    <div className={styles.navList}>
      <ul>
        {cats.map((cat) => (
          <li key={cat.id}>
            <Link onClick={() => closeMenu()} href={`/${cat.name.toLowerCase()}`}>
              <a>{cat.name}</a>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
