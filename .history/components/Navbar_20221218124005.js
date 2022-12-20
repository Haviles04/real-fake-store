import Image from 'next/image'
import styles from '../styles/navbar.module.css'
import logo from '../public/logo.png'

function Navbar() {
  return (
    <div className={styles.mainBar}>
        <Image className={styles.logo} src={logo} alt="logo" />
    </div>
  )
}

export default Navbar