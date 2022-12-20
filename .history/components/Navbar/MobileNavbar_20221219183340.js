import {useState} from 'react';
import NavLinks from "./NavLinks";
import Image from "next/image";
import Link from "next/link";
import styles from "../../styles/navbar.module.css";
import logo from "../../public/logo.png";
import { GiHamburgerMenu } from "react-icons/Gi";

function MobileNavbar({ cats }) {
  const [menuIsOpen, setmenuIsOpen] = useState(false);
  
  return (
    <div className={styles.mobileBar}>
      <Link href="/">
        <Image className={styles.logo} src={logo} alt="logo" />
      </Link>
    <GiHamburgerMenu onClick={() => setmenuIsOpen(!setmenuIsOpen)} className={styles.hamburger} size={24} />
    </div>
  );
}

export default MobileNavbar;
