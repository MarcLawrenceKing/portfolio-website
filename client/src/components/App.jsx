import '../styles/App.css'
import Navbar from './Navbar'
import Hero from './Hero'
import AboutMe from './AboutMe'
import Skills from './Skills'
import Projects from './Projects'
import Footer from './Footer'


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
