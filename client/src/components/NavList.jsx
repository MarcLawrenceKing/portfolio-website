import React from "react";
import { Link } from "react-router-dom";

const NavList = ({ className }) => {
  return (
    <div
      className={`grid font-bold text-center w-full text-accent2 text-navlist shadow-lg sm:border-none sm:shadow-none ${className}`}
    >
      <Link className="py-1" to="/portfolio-website/">
        Home
      </Link>
      <Link className="py-1" to="/portfolio-website/resume">
        Resume
      </Link>
      <Link className="py-1" to="/portfolio-website/projects">
        Projects
      </Link>
      <Link className="py-1" to="/portfolio-website/contact">
        Contact
      </Link>
    </div>
  );
};

export default NavList;
