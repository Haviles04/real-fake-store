import styles from '../styles/layout.module.css'
import Navbar from './Navbar'

function Layout({children, categories}) {
  return (
    <>
    <Navbar categories={categories} />
        <div className={styles.container}>
        {children}
        </div>
    </>
  )
}

export default Layout