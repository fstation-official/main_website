import '../styles/globals.css'



import Navbar from '../pages/Components/Navbar'
import Footer from '../pages/Components/Footer'
function MyApp({ Component, pageProps }) {
  return <> 

  <Navbar/><Component {...pageProps} /><Footer/>
  </>
}

export default MyApp
