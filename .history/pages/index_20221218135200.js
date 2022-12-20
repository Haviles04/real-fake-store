import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import sale1 from '../public/sale1.jpg';
import sale2 from '../public/sale2.jpg';


const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>

      <h1>Real Fake Store</h1>
      <Image src={sale2} alt="sale"></Image>
      <Image src={sale1} alt="sale"></Image>
      
    </>
  )
}
