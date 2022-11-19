import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.scss'
import Link from 'next/link'
import Bg from "../public/11.jpg"
import Logo from "../public/Logo.png"
import Favicon from "../public/favicon.png"
import About from "../public/about-as.jpg"
import Background_full from "../public/bak.jpg"
import Layout from '../components/Layout.js'
export default function Home() {
  
  return (
<Layout>
   
    <div className={styles.container}>
  
      {/*<video autoPlay muted loop className='video_content_mobile'
          src="/qq.mp4"
         controls={false}
          width='100%'
      
  />*/}
     
  

<div className='burger'>
     <input id="hamburger" className="hamburger" type="checkbox"/>
				<label className=" hamburger" for="hamburger">
		  	<div className='dot'></div>
        <div className='dot'></div>
        <div className='dot'></div>
		</label>
		<section className="drawer-list bg-very_peri  ">
      
		<div className="abot-us ">
      <div className='grid-about-us first'>
    
    <Image
        src={About}
        alt="Picture of the author"
        width={250}
      />
   
   </div>
   <div className='grid-about-us'>
      <h1><span >A</span>BOUT US</h1>
      <p>VekaWedding has long become an exemplary wedding dresses manufacturer, the name of whichsounds familiar to everyone in the industry. All this is thanks to our founders and professional tailors, with long-term experience in the wedding business.</p>
   
   
   </div>
		</div>
			</section>

      </div>
  
      <main className={styles.main } >
      <Image
    className='bg_pc'
    src={Bg}
    alt="Picture of the author"
       
      />
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
     <button className={styles.c_button }>  <Link href="https://vekawedding.com/en/"><Image
	className={styles.favicon}
		src={Favicon}
		alt="Picture of the author"
		width={42}
	  /><p>vekawedding.com</p></Link></button> 
      <button className={styles.c_button }><Link href="https://vekawedding.com/en/wedding-dresses/collection-2021"> <div className={styles.marquees } ><span className={styles.marquee }>	&#128141; Wedding dress fashion models in 2023. 	&#128141; </span></div></Link></button>
      <button className={styles.c_button } ><Link href="https://vekawedding.com/en/contacts"><p>Information for partners</p></Link></button>
      <button className={styles.c_button }><Link href="/"><p>Blog</p></Link></button>
     
    </div>
    
    
    </div>
    
       </div>
     
      
 
      
     
      </main>

     
          
          {/*  <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />*/}
      
         
    
    </div>
    </Layout>
  )
}
