import './index.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Services from './components/Services'
import WhyUs from './components/WhyUs'
import Treatment from './components/Treatment'
import HealthBenefits from './components/HealthBenefits'
import FAQ from './components/FAQ'
import Footer from './components/Footer'
import FloatingWA from './components/FloatingWA'

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <WhyUs />
        <Treatment />
        <HealthBenefits />
        <FAQ />
      </main>
      <Footer />
      <FloatingWA />
    </>
  )
}
