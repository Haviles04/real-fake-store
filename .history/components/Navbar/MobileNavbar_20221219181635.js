import NavLinks from "./NavLinks";
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
      <NavLinks cats={cats} />
     
    </div>
  );
}

export default MobileNavbar;
