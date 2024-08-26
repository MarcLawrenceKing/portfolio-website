import { useEffect, useState } from "react";
import "../styles/Navbar.css";
import Button from "./Button";
import { GiHamburgerMenu } from "react-icons/gi";

const Navbar = () => {
  useEffect(() => {
    const handleScroll = () => {
      const navbar = document.querySelector(".navbar");
      if (window.scrollY > 50) {
        navbar.classList.add("blur");
      } else {
        navbar.classList.remove("blur");
      }
    };
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="navbar">
      <div className="brand-name-container">
        <p className="navbar-brand">My Portfolio</p>
      </div>

      <div className="nav-buttons-section">
        <div className="hamburger-toggle-div">
          <Button onClick={toggleMenu} variant={"hamburger-navbar"}>
            {" "}
            <GiHamburgerMenu />
          </Button>
          {menuOpen && (
            <div className="hamburger-toggle-content">
              <a href="#hero-section">Home</a>
              <a href="#about-me-section">About Me</a>
              <a href="#skills-section">Skills</a>
              <a href="#projects-section">Projects</a>
            </div>
          )}
        </div>

        <div className="nav-btn-section">
          <a href="#hero-section">
            <Button variant={"navbar-btn"}>Home</Button>
          </a>
          <a href="#about-me-section">
            <Button variant={"navbar-btn"}>About Me</Button>
          </a>
          <a href="#skills-section">
            <Button variant={"navbar-btn"}>Skills</Button>
          </a>
          <a href="#projects-section">
            <Button variant={"navbar-btn"}> Projects</Button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
