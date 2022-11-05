import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Front from "../public/Front.gif"
export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main } >
       <div className={styles.main_container}>
        <div className={styles.header_container}>LOgo</div>
       </div>
      <Image
		className={styles.video_gif}
		src={Front}
		alt="Picture of the author"
		
	  />
     
      </main>

     
          
          {/*  <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />*/}
      
       
    
    </div>
  )
}
