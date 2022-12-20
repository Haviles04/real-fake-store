import NavLinks from "./NavLinks";
import Image from "next/image";
import Link from "next/link";
import styles from "../../styles/navbar.module.css";
import logo from "../../public/logo.png";
import { GiHamburgerMenu } from "react-icons/Gi";

function MobileNavbar({ cats }) {
  return (
    <div className={styles.mobileBar}>
      <Link href="/">
        <Image className={styles.logo} src={logo} alt="logo" />
      </Link>
    <GiHamburgerMenu onClick={() => console.log('you clicked!')} className={styles.hamburger} size={24} />
    </div>
  );
}

export default MobileNavbar;
