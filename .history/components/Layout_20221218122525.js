import styles from '../styles/layout.module.css'
import Navbar from './Navbar'

function Layout({children}) {
  return (
    <>
    <Navbar />
    <div className={styles.main}>
      
        <div className={styles.container}>
        {children}
        </div>
    </div>
    </>
  )
}

export default Layout