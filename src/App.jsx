import { ThemeProvider } from '@mui/material/styles'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Offerings from './components/Offerings'
import QuoteStrip from './components/QuoteStrip'
import Programs from './components/Programs'
import About from './components/About'
import Partners from './components/Partners'
import Testimonials from './components/Testimonials'
import Faqs from './components/Faqs'
import Contact from './components/Contact'
import Footer from './components/Footer'
import theme from './util/theme'


function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="noise" />
      <Navbar />
      <main>
        <Hero />
        <div className="section-divider" />
        <About />
        <Offerings />
        <QuoteStrip />
        <Programs />
        <Testimonials />
        <Partners />
        <Faqs />
        <Contact />
      </main>
      <Footer />
    </ThemeProvider>
  )
}

export default App
