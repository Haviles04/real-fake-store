import Image from 'next/image'
import styles from '../styles/navbar.module.css'
import logo from '../public/logo.png'
import Link from 'next/link'

function Navbar({categories}) {
  console.log(categories);
  
    return (
    <div className={styles.mainBar}>
        <Image className={styles.logo} src={logo} alt="logo" />
        
    </div>
  )
}

export default Navbar


  