import Head from "next/head";
import Script from 'next/script'


const Layout = (props) => {
  
  return (
 <>
    <Head>
    <title>{props.title}</title>
 
  </Head>

				<Script strategy="lazyOnload">
        {`
            window.replainSettings = { id: '57c23d8c-ad58-4f57-b0bc-d65f546cf0d4' };
            (function(u){var s=document.createElement('script');s.async=true;s.src=u;
            var x=document.getElementsByTagName('script')[0];x.parentNode.insertBefore(s,x);
            })('https://widget.replain.cc/dist/client.js');
        `}
      </Script>
        <div className="wrapper">
        
       
        
          {props.children}
       
        </div>
        </>
  );
};

export default Layout;