import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "../styles/navbar.module.css";
import logo from "../public/logo.png";
import { HiMagnifyingGlass } from "react-icons/Hi";

function Navbar({ cats }) {
  console.log(cats);
  return (
    <HiMagnifyingGlass/>
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
          <button type="submit">Search </button>
        </form>
      </div>
    </div>
  );
}

export default Navbar;
