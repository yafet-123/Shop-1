import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import {Products} from '../components/Products'
export default function Home() {
  return (
    <div className="home">
      <Products />
    </div>
  )
}
