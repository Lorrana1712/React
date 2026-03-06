import './App.css'
import About from './components/About.jsx'
import Contact from './components/Contact.jsx'
import Footer from './components/Footer.jsx'
import Gallery from './components/Gallery.jsx'
import Hero from './components/Hero.jsx'
import Navbar from "./components/Navbar.jsx"

function App() {
  return (

    <div>
      <Navbar />

      <div style={{ paddingTop: "70px" }}>
      <Hero/>
      <Gallery/>
      <About/>
      <Contact/>
      <Footer/>
      </div>
    </div>

  )
}

export default App
