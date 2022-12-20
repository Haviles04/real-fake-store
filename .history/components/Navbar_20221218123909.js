import styles from '../styles/navbar.module.css'
import logo from '../public/logo.png'

function Navbar() {
  return (
    <div className={styles.mainBar}>
        <img src={logo} alt="logo" />
    </div>
  )
}

export default Navbar