import { useEffect, useState } from "react";
import "../styles/Navbar.css";
import Button from "./Button";
import NavList from "./NavList";
import { GiHamburgerMenu } from "react-icons/gi";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="flex justify-between items-center bg-accent1 h-15 px-10">
      <div className="">
        <p className="text-primary font-bold text-xl">My Portfolio</p>
      </div>

      <div className="">
        <div className="">
          <Button onClick={toggleMenu} variant={"toggle"}>
            <GiHamburgerMenu />
          </Button>
          {menuOpen && <NavList className={"sm:hidden"} />}
        </div>

        <NavList className={"hidden"} />
      </div>
    </div>
  );
};

export default Navbar;
