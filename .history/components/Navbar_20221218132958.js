import { useEffect, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import styles from '../styles/navbar.module.css'
import logo from '../public/logo.png'

function Navbar({cats}) {
    console.log(cats);
    return (
    <div className={styles.mainBar}>
        <Image className={styles.logo} src={logo} alt="logo" />
        <div className={styles.linkContainer}>
          {cats.map(cat => 
            (<Link key={cat.id} href={`/category/${cat.id}`}>{cat.name}</Link>)
          )}
        </div>
    </div>
  )
}

export default Navbar


  