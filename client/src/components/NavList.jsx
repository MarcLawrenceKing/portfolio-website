import React from "react";
import { Link } from "react-router-dom";

const NavList = ({ className }) => {
  return (
    <div
      className={`grid font-bold text-center w-full text-accent2 text-navlist shadow-lg sm:border-none sm:shadow-none ${className}`}
    >
      <Link className="py-1" to="/">
        Home
      </Link>
      <Link className="py-1" to="/resume">
        Resume
      </Link>
      <Link className="py-1" to="/projects">
        Projects
      </Link>
      <Link className="py-1" to="/contact">
        Contact
      </Link>
    </div>
  );
};

export default NavList;
