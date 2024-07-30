import { useEffect } from "react";
import "../styles/Navbar.css"
import Button from "./Button";

const Navbar = () => {

  useEffect(() => {
    const handleScroll = () => {
      const navbar = document.querySelector('.navbar');
      if (window.scrollY > 101) {
        navbar.classList.add('blur');
      } else {
        navbar.classList.remove('blur');
      }
    };
    window.addEventListener('scroll',handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);


  
  return (
    <div className="navbar">
    <p className="navbar-brand">My Portfolio</p>
    <a href="#hero-section"><Button variant={"navbar-btn"}>Home</Button></a>
    <a href="#about-me-section"><Button variant={"navbar-btn"}>About Me</Button></a>
    <a href="#skills-section"><Button variant={"navbar-btn"}>Skills</Button></a>
    <a href="#projects-section"><Button variant={"navbar-btn"}> Projects</Button></a>
     
    </div>    
  );
};


export default Navbar;