import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Link from 'next/link';
import Logo from "../public/Logo.png"
import Favicon from "../public/favicon.png"

import Layout from '../components/Layout.js'
export default function Home() {
  return (

   <Layout>
    <div className={styles.container}>
  
      <video autoPlay muted loop className={styles.video_background }
          src="/qq.mp4"
         controls={false}
          width='100%'
      
        />
     

      <main className={styles.main } >
       <div className={styles.main_container}>
       <div className={styles.header_container}>
       <Image
        src={Logo}
        alt="Picture of the author"
        width={200}
      />
    </div> 
    
        <div className={styles.own_container}> 
   
     
    <div className={styles.block_button }>
      <div className={styles.vk_block }>
        <p className={styles.vk_title }>@VekaWedding</p>
        <p className={styles.vk_description }>wedding couture</p>
        
      </div>
      <div className={styles.socials }></div>
      <button className={styles.c_button }> <Image
	className={styles.favicon}
		src={Favicon}
		alt="Picture of the author"
		width={42}
	  /><p>vekawedding.com</p></button>
      <button className={styles.c_button }><p>Facebook</p></button>
      <button className={styles.c_button } ><p>Colecție nouă 2023</p></button>
      <button className={styles.c_button }><p>Blog</p></button>
    </div>
    
    
    </div>
    
       </div>
     
      
 
      
     
      </main>

     
          
          {/*  <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />*/}
      
    
    
    </div>
    </Layout>
  )
}
