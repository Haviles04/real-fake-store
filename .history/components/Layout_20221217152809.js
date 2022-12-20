import styles from '../styles/layout.module.css'

function Layout({children}) {
  return (
    <div className={styles.main}>
        <div className={styles.container}>
        {children}
        </div>
    </div>
  )
}

export default Layout