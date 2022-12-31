import { useState, useEffect } from "react";
import NavLinks from "./NavLinks";
import Image from "next/image";
import Link from "next/link";
import styles from "../../styles/navbar.module.css";
import logo from "../../public/logo.png";
import { GiHamburgerMenu } from "react-icons/Gi";
import { FiSearch } from "react-icons/fi";
import SearchBar from "./SearchBar";

function MobileNavbar({ cats }) {
  const [menuIsOpen, setMenuIsOpen] = useState(false);
  const [searchIsOpen, setSearchIsOpen] = useState(false);

  return (
    <>
      <div className={styles.mobileBar}>
        <Link href="/">
          <Image
            onClick={() => {
              setMenuIsOpen(false);
              setSearchIsOpen(false);
            }}
            className={styles.logo}
            src={logo}
            alt="logo"
          />
        </Link>
        <div>
          <FiSearch
            className={styles.search}
            size={24}
            onClick={() => {
              setSearchIsOpen(!searchIsOpen);
              setMenuIsOpen(false);
            }}
          />
          <GiHamburgerMenu
            onClick={() => {
              setMenuIsOpen(!menuIsOpen);
              setSearchIsOpen(false);
            }}
            className={styles.hamburger}
            size={24}
          />
        </div>
      </div>

      {searchIsOpen && (
        <div className={styles.searchBar}>
          <SearchBar setSearchIsOpen={setSearchIsOpen} onMobile={true} />
        </div>
      )}

      {menuIsOpen && (
        <div className={styles.mobileNavLinks}>
          <NavLinks setMenuIsOpen={setMenuIsOpen} onMobile={true} cats={cats} />
        </div>
      )}
    </>
  );
}

export default MobileNavbar;
