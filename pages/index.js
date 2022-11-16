import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.scss'

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
     

<div className='burger'>
     <input id="hamburger" className="hamburger" type="checkbox"/>
				<label className=" hamburger" for="hamburger">
		  	
		
		</label>
		<section className="drawer-list bg-very_peri  ">
		<ul className="text-center mt-30 uppercase">
		<li className='mx-5 mt-10'><a href="/">Acasa</a></li>
			<li className='mx-5 mt-10'><a href="/categories">produse</a></li>
			<li className='mx-5 mt-10'><a href="/contact">Contact</a></li>
			
		</ul>
			</section>

      </div>

      <main className={styles.main } >
       <div className={styles.main_container}>
       <div className={styles.header_container}>
       <Image
        src={Logo}
        alt="Picture of the author"
        width={250}
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
      <button className={styles.c_button }> <div className={styles.marquees } ><span className={styles.marquee }>&#128150; Modele de modă de rochii de mireasă în 2023. 	&#128141; </span></div></button>
      <button className={styles.c_button } ><p>Informatii pentru parteneri</p></button>
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
