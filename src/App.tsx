import './index.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Treatment from './components/Treatment'
import FAQ from './components/FAQ'
import Footer from './components/Footer'

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Treatment />
        <FAQ />
      </main>
      <Footer />
    </>
  )
}
