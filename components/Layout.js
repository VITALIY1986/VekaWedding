import Head from "next/head";
import Script from 'next/script'


const Layout = (props) => {
  
  return (
 <>
    <Head>
    <meta name="application-name" content="PWA App" />
<meta name="apple-mobile-web-app-capable" content="yes" />
<meta name="apple-mobile-web-app-status-bar-style" content="default" />
<meta name="apple-mobile-web-app-title" content="VekaWedding" />
<meta name="description" content="Mobile aplication" />
<meta name="format-detection" content="telephone=no" />
<meta name="mobile-web-app-capable" content="yes" />
<meta name="msapplication-config" content="/icons/browserconfig.xml" />
<meta name="msapplication-TileColor" content="#2B5797" />
<meta name="msapplication-tap-highlight" content="no" />
<meta name="theme-color" content="#000000" />

<link rel="apple-touch-icon" href="/icons/touch-icon-iphone.png" />
<link rel="apple-touch-icon" sizes="152x152" href="/icons/touch-icon-ipad.png" />
<link rel="apple-touch-icon" sizes="180x180" href="/icons/touch-icon-iphone-retina.png" />
<link rel="apple-touch-icon" sizes="167x167" href="/icons/touch-icon-ipad-retina.png" />

<link rel="icon" type="image/png" sizes="32x32" href="/icons/favicon-32x32.png" />
<link rel="icon" type="image/png" sizes="16x16" href="/icons/favicon-16x16.png" />
<link rel="manifest" href="/manifest.json" />
<link rel="mask-icon" href="/icons/safari-pinned-tab.svg" color="#5bbad5" />
<link rel="shortcut icon" href="/favicon.ico" />
<link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500" />

<meta name="twitter:card" content="summary" />
<meta name="twitter:url" content="https://yourdomain.com" />
<meta name="twitter:title" content="VekaWedding" />
<meta name="twitter:description" content="Mobile aplication" />
<meta name="twitter:image" content="https://vekawedding.com/images/stories/virtuemart/product/dsc_4937.jpg" />
<meta name="twitter:creator" content="@DavidWShadow" />
<meta property="og:type" content="website" />
<meta property="og:title" content="VekaWedding" />
<meta property="og:description" content="Mobile aplication" />
<meta property="og:site_name" content="PWA App" />
<meta property="og:url" content="https://yourdomain.com" />
<meta property="og:image" content="https://vekawedding.com/images/stories/virtuemart/product/dsc_4937.jpg" />
   
 
  </Head>
  
        <div className="wrapper">
        <Script strategy="lazyOnload">
    {`
  window.replainSettings = { id: '75e15cf7-95cf-4900-a9f3-a31378d7ae6f' };
  (function(u){var s=document.createElement('script');s.async=true;s.src=u;
  var x=document.getElementsByTagName('script')[0];x.parentNode.insertBefore(s,x);
  })('https://widget.replain.cc/dist/client.js');
    `}
  </Script>
       
        
          {props.children}
       
        </div>
        </>
  );
};

export default Layout;