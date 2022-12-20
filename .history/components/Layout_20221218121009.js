import styles from '../styles/layout.module.css'
import Navbar from './Navbar'

function Layout({children}) {
  return (
    <div className={styles.main}>
      <Navbar />
        <div className={styles.container}>
        {children}
        </div>
    </div>
  )
}

export default Layout