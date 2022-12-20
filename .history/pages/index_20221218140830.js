import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import styles from '../styles/index.module.css'
import Meta from "../components/Meta";
import sale1 from "../public/sale1.jpg";
import sale2 from "../public/sale2.jpg";

export default function Home() {
  return (
    <>
      <Meta title={"Real Fake Store"} descript={"Real Fake Store"} />
      <div className={styles.container}>
        <Link href='/category/all'><Image src={sale2} alt="sale"></Image></Link>
        <div className={styles.smallerAd}>
        <Image src={'https://picsum.photos/500/600'} width={500} height={600} alt="sale"></Image>
        <Image src={'https://picsum.photos/500/600'} width={500} height={600} alt="sale"></Image>
        </div>
      </div>
    </>
  );
}
