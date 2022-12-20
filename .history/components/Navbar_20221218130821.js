import { useEffect } from 'react'
import Image from 'next/image'
import styles from '../styles/navbar.module.css'
import logo from '../public/logo.png'

function Navbar() {
    const [cats, setCats] = useState();
    
    useEffect(() => {
      getCats();
    }, [])
    
    const getCats = async() =>{
     const categories = await fetch('https://api.escuelajs.co/api/v1/categories').then(r=>r.json());
     setCats(categories);
    } 

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


  