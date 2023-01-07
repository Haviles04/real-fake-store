import Image from "next/image";
import Link from "next/link";
import styles from "../styles/index.module.css";
import Meta from "../components/Meta";
import sale1 from "../public/sale1.jpg";
import sale2 from "../public/sale2.jpg";
import Carousel from "../components/Carousel/Carousel";

export default function Home({suggested}) {
  return (
    <>
      <Meta title={"Real Fake Store"} descript={"Real Fake Store"} />
      <div className={styles.container}>
        <Link className={styles.heroAd} href="/products">
          <Image
            className={styles.heroImg}
            src={sale2}
            priority
            alt="sale"
          ></Image>
          <Image
            className={styles.mobileHeroImg}
            src={sale1}
            priority
            alt="sale"
          ></Image>
        </Link>
        <h3>May We Suggest</h3>
        <Carousel suggested={suggested} />
      </div>
    </>
  );
}

export async function getStaticProps() {
  const {suggested} = await import('../data/suggested.json')
  return {
    props: {
      suggested,
    },
  };
}
