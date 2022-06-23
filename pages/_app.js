import '../styles/globals.css'

import Chatbot from '../pages/Components/Chatbot'

import Navbar from '../pages/Components/Navbar'
import Footer from '../pages/Components/Footer'
function MyApp({ Component, pageProps }) {
  return <> 

  <Navbar/>
  <Component {...pageProps} />
    <Chatbot/>
  <Footer/>
  </>
}

export default MyApp
