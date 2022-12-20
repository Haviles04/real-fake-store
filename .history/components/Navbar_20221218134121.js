import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "../styles/navbar.module.css";
import logo from "../public/logo.png";
import { HiOutlineMagnifyingGlass} from "react-icons/hi";

function Navbar({ cats }) {
  console.log(cats);
  return (
    <div className={styles.mainBar}>
      <Link href="/">
        <Image className={styles.logo} src={logo} alt="logo" />
      </Link>
      <div className={styles.linkContainer}>
        {cats.map((cat) => (
          <Link key={cat.id} href={`/category/${cat.id}`}>
            {cat.name}
          </Link>
        ))}
      </div>
      <div className={styles.search}>
        <form>
          <input type="text"></input>
          <button type="submit"></button>
        </form>
      </div>
    </div>
  );
}

export default Navbar;
