import { useEffect, useState } from 'react'
import Image from 'next/image'
import styles from '../styles/navbar.module.css'
import logo from '../public/logo.png'

function Navbar() {
    const [cats, setCats] = useState([]);
    
    return (
    <div className={styles.mainBar}>
        <Image className={styles.logo} src={logo} alt="logo" />
            {cats.map(cat => {
                <div>{cat.name}</div>
            })}
    </div>
  )
}

export default Navbar


  