import Image from 'next/image'
import styles from '../styles/navbar.module.css'
import logo from '../public/logo.png'
import Link from 'next/link'

function Navbar() {
    let cats;
    const getCats = async() =>{
        cats = await fetch('https://api.escuelajs.co/api/v1/categories').then(r=>r.json());
    } 
  
    return (
    <div className={styles.mainBar}>
        <Image className={styles.logo} src={logo} alt="logo" />
        
    </div>
  )
}

export default Navbar


  