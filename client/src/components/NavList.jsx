import React from "react";

const NavList = ({ className }) => {
  return (
    <div className={`flex gap-5 font-semibold ${className} `}>
      <a href="#hero-section">Home</a>
      <a href="#resume-section">Resume</a>
      <a href="#projects-section">Projects</a>
      <a href="#contact-section">Contact</a>
    </div>
  );
};

export default NavList;
