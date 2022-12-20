import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "../../styles/navbar.module.css";
import logo from "../../public/logo.png";
import { FiSearch } from "react-icons/fi";

function MobileNavbar({ cats }) {
  return (
    <div className={styles.mobileBar}>
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
          <button>
            <FiSearch />
          </button>
         
      </div>
    </div>
  );
}

export default MobileNavbar;
