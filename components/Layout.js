import styles from "@/styles/layout.module.css";
import Navbar from "@/components/Navbar/Navbar";
import MobileNavbar from "./Navbar/MobileNavbar";
import Footer from "./footer/footer";
import { useEffect } from "react";

function Layout({ children, cats }) {
  
  return (
    <div className={styles.container}>
      <nav>
        <Navbar cats={cats} />
        <MobileNavbar cats={cats} />
      </nav>
      <main>{children}</main>
      <footer>
        <Footer cats={cats} />
      </footer>
    </div>
  );
}

export default Layout;
