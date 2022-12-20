import {useState} from 'react';
import NavLinks from "./NavLinks";
import Image from "next/image";
import Link from "next/link";
import styles from "../../styles/navbar.module.css";
import logo from "../../public/logo.png";
import { GiHamburgerMenu } from "react-icons/Gi";

function MobileNavbar({ cats }) {
  const [menuIsOpen, setMenuIsOpen] = useState(false);
  const [onMobile, setOnMobile] = useState(true);
  
  return (
    <>
    <div className={styles.mobileBar}>
      <Link href="/">
        <Image className={styles.logo} src={logo} alt="logo" />
      </Link>
    <GiHamburgerMenu onClick={() => setMenuIsOpen(!menuIsOpen)} className={styles.hamburger} size={24} />
    </div>
    
    {menuIsOpen && <div className={styles.mobileNavLinks}><NavLinks setMenuIsOpen={setMenuIsOpen} cats={cats} /></div>}
    
    </>
  );
}

export default MobileNavbar;
