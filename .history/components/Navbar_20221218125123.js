import Image from 'next/image'
import styles from '../styles/navbar.module.css'
import logo from '../public/logo.png'
import Link from 'next/link'

function Navbar({cats}) {
  
  
    return (
    <div className={styles.mainBar}>
        <Image className={styles.logo} src={logo} alt="logo" />
        {cats.map(cat => {
            <div>{cat.name}</div>
        })}
    </div>
  )
}

export default Navbar

export async function getStaticProps() {
    const categoryItems = await fetch(
      `https://api.escuelajs.co/api/v1/categories`
    ).then((r) => r.json());
  
    return {
      props: {
        cats
      },
    };
  }
  