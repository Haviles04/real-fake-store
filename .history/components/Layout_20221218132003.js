import styles from '../styles/layout.module.css'
import Navbar from './Navbar'

function Layout({children, cats}) {
  return (
    <>
    <Navbar categories={cats} />
        <div className={styles.container}>
        {children}
        </div>
    </>
  )
}

export default Layout