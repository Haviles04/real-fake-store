import { useState } from 'react';
import styles from '../styles/navbar.module.css'
import Navbar from '../components/Navbar/Navbar'
import MobileNavbar from './Navbar/MobileNavbar'

function Layout({children, cats}) {
  const [onMobile, setOnMobile] = useState(false);
  return (
    <>
    <Navbar onMobile={onMobile} cats={cats} />
    <MobileNavbar onMobile={onMobile} setOnMobile={setOnMobile} cats={cats} />
        <div className={styles.container}>
        {children}
        </div>
    </>
  )
}

export default Layout