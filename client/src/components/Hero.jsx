import Navbar from "./Navbar";
import "../styles/Hero.css"
import Button from "./Button";
import Image from "./Image";
import { FaFacebook, FaGithub, FaGoogle} from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";

const Hero = () => {
  return (
    <div className="hero">
    
    <Navbar />
    <Image variant={"hero-image"} imageKey={"imageMarc"}></Image>
    <h1>Hello! I am <br/>
      <span id="my-name">Marc Lawrence</span>, <br/>
      a <span id="my-job-desc">Frontend Developer</span>.
    </h1>
    
    <h2>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, itaque? Illo amet iusto quas! Voluptates, corporis, dignissimos, incidunt voluptate alias totam hic perferendis quisquam excepturi in aperiam doloribus beatae? Nulla!</h2>

    <div className="profile-section">
    <FaFacebook size={"80px"} color={"#2e2c2f"}/>
    <FaLinkedin size={"85px"} color={"#2e2c2f"}/>
    <FaGithub size={"80px"} color={"#2e2c2f"}/>
    <FaGoogle size={"80px"} color={"#2e2c2f"}/>

    </div>
    
    <Button variant={"download-btn"}>Download CV</Button>

    
    </div>
    
    
    
    
  );
};

export default Hero;