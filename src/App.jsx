import Navbar    from './components/Navbar'
import Hero      from './components/Hero'
import Stats     from './components/Stats'
import Services  from './components/Services'
import About     from './components/About'
import Equipment from './components/Equipment'
import WhyUs     from './components/WhyUs'
import CTA       from './components/CTA'
import Contact   from './components/Contact'
import Footer    from './components/Footer'

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Stats />
        <Services />
        <About />
        <Equipment />
        <WhyUs />
        <CTA />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
