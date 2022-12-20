import styles from '../styles/layout.module.css'

function Layout({children}) {
  return (
    <div className={styles.main}>
        {children}

    </div>
  )
}

export default Layout