import styles from '../styles/navbar.module.css'
import Navbar from '../components/Navbar/Navbar'
import MobileNavbar from './Navbar/MobileNavbar'

function Layout({children, cats}) {
  return (
    <>
    <Navbar cats={cats} />
    <MobileNavbar cats={cats} />
        <div className={styles.container}>
        {children}
        </div>
    </>
  )
}

export default Layout