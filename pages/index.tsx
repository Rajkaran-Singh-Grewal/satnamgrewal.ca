import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { Header, About_us_section, Practice_area_section, How_can_we_help_section, They_trust_us_section, Trust_and_call_us_section } from "./containers";
const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Header />
      <About_us_section />
      <Practice_area_section />
      <How_can_we_help_section />
      <They_trust_us_section />
      <Trust_and_call_us_section />
    </div>
  )
}

export default Home
