import '../styles/globals.css'
import Nav from '../components/Nav'
import Head from 'next/head'
import Footer from '../components/Footer'

function MyApp({ Component, pageProps }) {
  return (
    <>
    
    <Nav/>
    <Component {...pageProps} />
    {/* <Footer/> */}
    </>
  )
  
}

export default MyApp
