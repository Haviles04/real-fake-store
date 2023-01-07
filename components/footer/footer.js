import Link from "next/link";
import styles from "@/styles/footer.module.css";

const Footer = ({ cats }) => {
  return (
    <div className={styles.container}>
      <div className={styles.shopFooter}>
        <h2>Shop</h2>
        <ul>
          {cats.map((cat) => (
            <li key={cat.id}>
              <Link href={cat.name.toLowerCase()} as={`/${cat.name.toLowerCase()}`} >{cat.name}</Link>
            </li>
          ))}
        </ul>
      </div>
      <div className={styles.contact}>
        <h2>Contact Us!</h2>
        <p>Email</p>
        <h4>Address</h4>
        <p>123 Electric Avenue</p>
      </div>
    </div>
  );
};

export default Footer;
