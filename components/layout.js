import Script from 'next/script'

export default function Layout({ children }) {
  return (
    <>
          <Script strategy="lazyOnload">
    {`
   window.replainSettings = { id: '315457bd-ba97-4b76-bde2-83c365bb4708' };
(function(u){var s=document.createElement('script');s.async=true;s.src=u;
var x=document.getElementsByTagName('script')[0];x.parentNode.insertBefore(s,x);
})('https://widget.replain.cc/dist/client.js');
    `}
  </Script>
      <main>{children}</main>
    
    </>
  )
}