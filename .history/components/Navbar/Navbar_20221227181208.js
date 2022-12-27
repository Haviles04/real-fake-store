import { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "../../styles/navbar.module.css";
import logo from "../../public/logo.png";
import { FiSearch } from "react-icons/fi";
import NavLinks from "./NavLinks";
import { useCart } from "../../customCartHook/CartContextProvider";

function Navbar({ cats }) {
  const cart=useCart();
  return (
    <div className={styles.mainBar}>
      <Link href="/">
        <Image className={styles.logo} src={logo} alt="logo" />
      </Link>

      <NavLinks cats={cats} onMobile={false} />

      <div className={styles.searchAndCart}>
        <form>
          <input type="text"></input>
          <button>
            <FiSearch />
          </button>
        </form>
        <Link className={styles.cartText} href="/category/cart">
          Cart ({cart.length})
        </Link>
        <Link className={styles.cartText} href="/">
          Favorites
        </Link>
      </div>
    </div>
  );
}

export default Navbar;
