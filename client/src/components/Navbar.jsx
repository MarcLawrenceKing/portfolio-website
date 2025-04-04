import { useEffect, useState } from "react";
import Button from "./Button";
import NavList from "./NavList";
import { DynamicIcon } from "lucide-react/dynamic";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="fixed top-0 right-0 left-0 z-2 shadow">
      <div className="flex justify-between items-center bg-accent1 h-15 px-10 ">
        <div className="">
          <Link to="/portfolio-website">
            <p className="w-30 text-primary font-bold text-xl">My Portfolio</p>
          </Link>
        </div>

        <div className="">
          <div className="">
            <Button onClick={toggleMenu} variant={"toggle"} size={"sm"}>
              {menuOpen ? (
                <DynamicIcon
                  name="x"
                  color="oklch(38.88% 0.0833 151.44)"
                  size={24}
                />
              ) : (
                <DynamicIcon
                  name="menu"
                  color="oklch(38.88% 0.0833 151.44)"
                  size={24}
                />
              )}
            </Button>
          </div>

          <NavList className={"hidden sm:block sm:flex sm:gap-10"} />
        </div>
      </div>

      {menuOpen && (
        <NavList
          className={"grid-cols-1 bg-accent1 border divide-y w-full sm:hidden "}
        />
      )}
    </div>
  );
};

export default Navbar;
