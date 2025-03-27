import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./pages/Hero";
import AboutMe from "./components/AboutMe";
import Resume from "./pages/Resume";
import Projects from "./pages/Projects";
import Footer from "./components/Footer";
import Contact from "./pages/Contact";

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/portfolio-website" element={<Hero />} />
          <Route path="/portfolio-website/resume" element={<Resume />} />
          <Route path="/portfolio-website/projects" element={<Projects />} />
          <Route path="/portfolio-website/contact" element={<Contact />} />
        </Routes>
      </Router>
      {/* 
      <Projects />
      <Footer /> */}
    </div>
  );
}

export default App;
