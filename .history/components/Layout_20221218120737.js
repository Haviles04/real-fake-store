import styles from '../styles/layout.module.css'
import Navbar from './Navbar'

function Layout({children}) {
  return (
    <div className={styles.main}>
        <div className={styles.container}>
          <Navbar />
        {children}
        </div>
    </div>
  )
}

export default Layout