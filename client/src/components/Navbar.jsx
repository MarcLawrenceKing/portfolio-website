import { useEffect, useState } from "react";
import "../styles/Navbar.css";
import Button from "./Button";
import NavList from "./NavList";
import { DynamicIcon } from "lucide-react/dynamic";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="fixed top-0 right-0 left-0 z-2 shadow">
      <div className="flex justify-between items-center bg-accent1 h-15 px-10 ">
        <div className="">
          <p className="text-primary font-bold text-xl">My Portfolio</p>
        </div>

        <div className="">
          <div className="">
            <Button onClick={toggleMenu} variant={"toggle"}>
              {menuOpen ? (
                <DynamicIcon name="x" color="black" size={24} />
              ) : (
                <DynamicIcon name="menu" color="black" size={24} />
              )}
            </Button>
          </div>

          <NavList className={"hidden sm:block sm:flex sm:gap-4"} />
        </div>
      </div>

      {menuOpen && (
        <NavList
          className={
            "grid-cols-1 bg-accent1 border border-gray-600 divide-y divide-gray-600 w-full sm:hidden "
          }
        />
      )}
    </div>
  );
};

export default Navbar;
