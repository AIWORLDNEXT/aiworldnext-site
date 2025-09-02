import '../styles/globals.css'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

export default function App({ Component, pageProps }) {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow container mx-auto p-6">
        <Component {...pageProps} />
      </main>
      <Footer />
    </div>
  )
}