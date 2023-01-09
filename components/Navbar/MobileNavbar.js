import { useState, useEffect } from "react";
import { useCart } from "@/hooks/cartHook/CartContextProvider";
import NavLinks from "./NavLinks";
import Image from "next/image";
import Link from "next/link";
import styles from "@/styles/navbar.module.css";
import logo from "@/public/logo.png";
import { GiHamburgerMenu } from "react-icons/gi";
import { FiSearch } from "react-icons/fi";
import { GrCart } from "react-icons/gr";
import { GrClose } from "react-icons/gr";
import { FiHeart } from "react-icons/fi";
import SearchBar from "./SearchBar";
import { useRouter } from "next/router";

function MobileNavbar({ cats }) {
  const [menuIsOpen, setMenuIsOpen] = useState(false);
  const [searchIsOpen, setSearchIsOpen] = useState(false);
  const { cart } = useCart();
  const router = useRouter();

  useEffect(() => {
    setMenuIsOpen(false);
    setSearchIsOpen(false);
  }, [router.asPath]);

  const handleClick = () => {
    setMenuIsOpen(false);
    setSearchIsOpen(false);
  };

  return (
    <>
      <div className={styles.mobileBar}>
        <Link href="/">
          <Image
            onClick={() => {
              handleClick();
            }}
            className={styles.logo}
            src={logo}
            alt="logo"
          />
        </Link>
        <div>
          <div className={styles.cartContainer}>
            <Link href="/cart">
              <GrCart
                onClick={() => {
                  handleClick();
                }}
                className={styles.cart}
                size={24}
              />
              {cart.totalItems ? (
                <div className={styles.cartAmt}>
                  <span>{cart.totalItems}</span>
                </div>
              ) : null}
            </Link>
          </div>
          <Link href="/favorites">
            <FiHeart
              onClick={() => {
                handleClick();
              }}
              color="black"
              className={styles.heart}
              size={24}
            />
          </Link>
          <FiSearch
            className={styles.search}
            size={24}
            onClick={() => {
              setSearchIsOpen(!searchIsOpen);
              setMenuIsOpen(false);
            }}
          />
          {menuIsOpen ? (
            <GrClose
              className={styles.hamburger}
              size={24}
              onClick={() => {
                setMenuIsOpen(false);
                setSearchIsOpen(false);
              }}
            />
          ) : (
            <GiHamburgerMenu
              onClick={() => {
                setMenuIsOpen(true);
                setSearchIsOpen(false);
              }}
              className={styles.hamburger}
              size={24}
            />
          )}
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
