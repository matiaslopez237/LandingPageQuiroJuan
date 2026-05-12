import './index.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Services from './components/Services'
import WhyUs from './components/WhyUs'
import Treatment from './components/Treatment'
import SpecificAnalysis from './components/SpecificAnalysis'
import WhyNotSymptoms from './components/WhyNotSymptoms'
import HealthBenefits from './components/HealthBenefits'
import Testimonials from './components/Testimonials'
import FAQ from './components/FAQ'
import Conclusion from './components/Conclusion'
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
        <SpecificAnalysis />
        <WhyNotSymptoms />
        <HealthBenefits />
        <Testimonials />
        <FAQ />
        <Conclusion />
      </main>
      <Footer />
      <FloatingWA />
    </>
  )
}
