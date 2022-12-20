import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "../../styles/navbar.module.css";
import logo from "../../public/logo.png";
import { FiSearch } from "react-icons/fi";

function MobileNavbar({ cats }) {
  return (
    <div className={styles.mainBar}>
      <Link href="/">
        <Image className={styles.logo} src={logo} alt="logo" />
      </Link>
      
        <ul className={styles.navList}>
          {cats.map((cat) => (
            <li>
              <Link key={cat.id} href={`/category/${cat.id}`}>
                {cat.name}
              </Link>
            </li>
          ))}
        </ul>
     
      <div className={styles.searchAndCart}>
        <form>
          <input type="text"></input>
          <button>
            <FiSearch />
          </button>
        </form>
        <Link className={styles.cartText} href="/">
          Cart
        </Link>
        <Link className={styles.cartText} href="/">
          Favorites
        </Link>
      </div>
    </div>
  );
}

export default MobileNavbar;
