import Head from "next/head";



const Layout = (props) => {
  
  return (
 <>
    <Head>
    <title>{props.title}</title>
 
  </Head>
   
        <div className="wrapper">
        
       
        
          {props.children}
       
        </div>
        </>
  );
};

export default Layout;