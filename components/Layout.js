import styles from "../styles/layout.module.css";
import Navbar from "../components/Navbar/Navbar";
import MobileNavbar from "./Navbar/MobileNavbar";
import Footer from "./footer/footer";

function Layout({ children, cats }) {
  return (
    <div className={styles.container}>
      <Navbar cats={cats} />
      <MobileNavbar cats={cats} />
      {children}
      <Footer cats={cats} />
    </div>
  );
}

export default Layout;
