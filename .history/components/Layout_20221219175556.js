import styles from '../styles/layout.module.css'
import Navbar from '../components/Navbar/Navbar'

function Layout({children, cats}) {
  return (
    <>
    <Navbar cats={cats} />
        <div className={styles.container}>
        {children}
        </div>
    </>
  )
}

export default Layout