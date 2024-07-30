import './App.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import AboutMe from './components/AboutMe'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Footer from './components/Footer'


function App() {
  
  return (
    <div className="app">
      <Navbar />
      <Hero />
      <AboutMe />
      <Skills />
      <Projects />
      <Footer />
    </div>
  )
}

export default App
