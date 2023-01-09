import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "@/styles/navbar.module.css";
import logo from "@/public/logo.png";
import SearchBar from "./SearchBar";
import NavLinks from "./NavLinks";
import { useCart } from "@/hooks/cartHook/CartContextProvider";
import { useFavorites } from "@/hooks/favoritesHook/FavoritesContextProvider";


function Navbar({ cats }) {
  const { cart } = useCart();
  const {favorites} = useFavorites();
 
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
        <Link className={styles.cartText} href="/favorites">
          Favorites({favorites.items.length})
        </Link>
      </div>
    </div>
  );
}

export default Navbar;
