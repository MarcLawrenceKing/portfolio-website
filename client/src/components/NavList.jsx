import React from "react";

const NavList = ({ className }) => {
  return (
    <div
      className={`grid font-bold text-center w-full text-accent2 text-navlist shadow-lg sm:border-none sm:shadow-none ${className}`}
    >
      <a className="py-1" href="#hero-section">
        Home
      </a>
      <a className="py-1" href="#resume-section">
        Resume
      </a>
      <a className="py-1" href="#projects-section">
        Projects
      </a>
      <a className="py-1" href="#contact-section">
        Contact
      </a>
    </div>
  );
};

export default NavList;
