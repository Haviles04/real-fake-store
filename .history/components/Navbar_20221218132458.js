import { useEffect, useState } from 'react'
import Image from 'next/image'
import styles from '../styles/navbar.module.css'
import logo from '../public/logo.png'

function Navbar({cats}) {
    console.log(cats);
    return (
    <div className={styles.mainBar}>
        <Image className={styles.logo} src={logo} alt="logo" />
          <p>{cats[0].name}</p>
    </div>
  )
}

export default Navbar


  