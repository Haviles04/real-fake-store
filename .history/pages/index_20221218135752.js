import Head from "next/head";
import Image from "next/image";
import styles from '../styles/index.module.css'
import Meta from "../components/Meta";
import sale1 from "../public/sale1.jpg";
import sale2 from "../public/sale2.jpg";

export default function Home() {
  return (
    <>
      <Meta title={"Real Fake Store"} descript={"Real Fake Store"} />
      <div className={styles.container}>
        <h1>Real Fake Store</h1>
        <Image src={sale2} alt="sale"></Image>
        <Image src={sale1} alt="sale"></Image>
      </div>
    </>
  );
}
