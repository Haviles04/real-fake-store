import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "../../styles/navbar.module.css";
import logo from "../../public/logo.png";
import SearchBar from "./SearchBar";
import NavLinks from "./NavLinks";
import { useCart } from "../../customCartHook/CartContextProvider";


function Navbar({ cats }) {
  const { cart } = useCart();
 
  return (
    <div className={styles.mainBar}>
      <Link href="/">
        <Image className={styles.logo} src={logo} alt="logo" />
      </Link>
      <NavLinks cats={cats} onMobile={false} />
      <div className={styles.searchAndCart}>
        <SearchBar />
        <Link className={styles.cartText} href="/cart">
          Cart ({cart.totalItems})
        </Link>
        <Link className={styles.cartText} href="/">
          Favorites
        </Link>
      </div>
    </div>
  );
}

export default Navbar;
