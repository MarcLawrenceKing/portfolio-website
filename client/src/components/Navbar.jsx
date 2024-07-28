import "../styles/Navbar.css"
import Button from "./Button";


const Navbar = () =>{
  return (
    <div className="navbar">
    <p className="navbar-brand">My Portfolio</p>
    <Button variant={"navbar-btn"}>Home</Button>
    <Button variant={"navbar-btn"}>About Me</Button>
    <Button variant={"navbar-btn"}>Skills</Button>
    <Button variant={"navbar-btn"}> Projects</Button>
     
    </div>    
  );
};

export default Navbar;